'use client';

import { useState, useMemo, useEffect } from 'react';
import glossaryData from '@/data/glossary.json';

type GlossaryTerm = {
  id: string;
  term: string;
  definition: string;
  analogy?: string;
  finalized: boolean;
  category: string;
  tags: string[];
  notes?: string;
  relatedTerms: string[];
};

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [showFinalizedOnly, setShowFinalizedOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // Extract unique categories and tags
  const categories = useMemo(() => {
    const cats = new Set(glossaryData.terms.map((term) => term.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    glossaryData.terms.forEach((term) => {
      term.tags.forEach((tag) => tags.add(tag));
    });
    return ['all', ...Array.from(tags)];
  }, []);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag, showFinalizedOnly]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Filter and search terms
  const filteredTerms = useMemo(() => {
    let filtered = glossaryData.terms as GlossaryTerm[];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (term) =>
          term.term.toLowerCase().includes(query) ||
          term.definition.toLowerCase().includes(query) ||
          term.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((term) => term.category === selectedCategory);
    }

    // Tag filter
    if (selectedTag !== 'all') {
      filtered = filtered.filter((term) => term.tags.includes(selectedTag));
    }

    // Finalized filter
    if (showFinalizedOnly) {
      filtered = filtered.filter((term) => term.finalized);
    }

    // Sort alphabetically
    return filtered.sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory, selectedTag, showFinalizedOnly]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredTerms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTerms = filteredTerms.slice(startIndex, endIndex);

  // Group terms by first letter (for current page)
  const groupedTerms = useMemo(() => {
    const grouped: { [key: string]: GlossaryTerm[] } = {};
    paginatedTerms.forEach((term) => {
      const firstLetter = term.term.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(term);
    });
    return grouped;
  }, [paginatedTerms]);

  const letters = Object.keys(groupedTerms).sort();

  // Get related term object
  const getRelatedTerm = (termId: string) => {
    return glossaryData.terms.find((t) => t.id === termId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interledger Foundation Glossary
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive guide to terms specific to the Interledger Foundation and
            financial terminology in the digital payments ecosystem.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredTerms.length > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, filteredTerms.length)} of {filteredTerms.length} terms
            {filteredTerms.length !== glossaryData.terms.length && ` (filtered from ${glossaryData.terms.length} total)`}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <label htmlFor="search" className="sr-only">
              Search glossary
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Search terms, definitions, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Category
              </label>
              <select
                id="category"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div>
              <label
                htmlFor="tag"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tag
              </label>
              <select
                id="tag"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag === 'all' ? 'All Tags' : tag}
                  </option>
                ))}
              </select>
            </div>

            {/* Items Per Page */}
            <div>
              <label
                htmlFor="itemsPerPage"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Items per page
              </label>
              <select
                id="itemsPerPage"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            {/* Finalized Only Toggle */}
            <div className="flex items-end">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  checked={showFinalizedOnly}
                  onChange={(e) => setShowFinalizedOnly(e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">
                  Show finalized only
                </span>
              </label>
            </div>
          </div>

          {/* Active Filters */}
          {(searchQuery || selectedCategory !== 'all' || selectedTag !== 'all' || showFinalizedOnly) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Search: {searchQuery}
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-purple-200"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedTag !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Tag: {selectedTag}
                  <button
                    onClick={() => setSelectedTag('all')}
                    className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-green-200"
                  >
                    ×
                  </button>
                </span>
              )}
              {showFinalizedOnly && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  Finalized only
                  <button
                    onClick={() => setShowFinalizedOnly(false)}
                    className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-yellow-200"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Alphabet Navigation */}
        {letters.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Terms List */}
        {letters.length > 0 ? (
          <div className="space-y-8">
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">
                  {letter}
                </h2>
                <div className="space-y-6">
                  {groupedTerms[letter].map((term) => (
                    <div
                      key={term.id}
                      id={term.id}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow scroll-mt-24"
                    >
                      {/* Term Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {term.term}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {term.finalized && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Finalized
                            </span>
                          )}
                          {term.tags.includes('Common Term') && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Common Term
                            </span>
                          )}
                          {term.tags.includes('ILF Specific') && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              ILF Specific
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Definition */}
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {term.definition}
                      </p>

                      {/* Analogy */}
                      {term.analogy && (
                        <div className="mb-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                          <div className="flex items-start gap-2">
                            <span className="text-xl mt-0.5">💡</span>
                            <div>
                              <p className="text-sm font-semibold text-blue-900 mb-1">Think of it this way:</p>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {term.analogy}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Notes */}
                      {term.notes && (
                        <div className="mb-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Note:</span> {term.notes}
                          </p>
                        </div>
                      )}

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        {/* Category */}
                        <div>
                          <span className="font-medium">Category:</span>{' '}
                          <span className="text-gray-700">{term.category}</span>
                        </div>

                        {/* Tags */}
                        {term.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 items-center">
                            <span className="font-medium">Tags:</span>
                            {term.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Related Terms */}
                      {term.relatedTerms.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <span className="text-sm font-medium text-gray-600">
                            Related terms:
                          </span>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {term.relatedTerms.map((relatedId) => {
                              const relatedTerm = getRelatedTerm(relatedId);
                              if (!relatedTerm) return null;
                              return (
                                <a
                                  key={relatedId}
                                  href={`#${relatedId}`}
                                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                  {relatedTerm.term}
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No terms found</h3>
            <p className="mt-2 text-gray-600">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Pagination Controls */}
        {filteredTerms.length > 0 && totalPages > 1 && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage =
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1);

                  const showEllipsis =
                    (page === currentPage - 2 && currentPage > 3) ||
                    (page === currentPage + 2 && currentPage < totalPages - 2);

                  if (showEllipsis) {
                    return (
                      <span key={page} className="px-2 text-gray-500">
                        ...
                      </span>
                    );
                  }

                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>

            {/* Page Info */}
            <div className="mt-4 text-center text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        )}

        {/* Back to Top */}
        {letters.length > 0 && (
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
