"use client";

import Link from "next/link";
import { useState } from "react";

// Sample knowledge base content - links to external resources
// Replace with your actual data source
const knowledgeBaseContent = [
  {
    id: "1",
    title: "Accept Open Payments for Online Purchases",
    description: "Learn how to integrate Open Payments into your e-commerce platform to accept payments seamlessly.",
    category: "tutorial",
    difficulty: "intermediate",
    readTime: "15 min",
    source: "Open Payments",
    sourceUrl: "https://openpayments.dev",
    externalUrl: "https://openpayments.dev/guides/accept-otp-online-purchase/",
    tags: ["open-payments", "payments", "integration"],
    featured: true
  },
  {
    id: "2",
    title: "Getting Started with Open Payments",
    description: "Introduction to the Open Payments standard and how to get started building payment solutions.",
    category: "tutorial",
    difficulty: "beginner",
    readTime: "10 min",
    source: "Open Payments",
    sourceUrl: "https://openpayments.dev",
    externalUrl: "https://openpayments.dev/introduction/",
    tags: ["open-payments", "getting-started", "basics"],
    featured: true
  },
  {
    id: "3",
    title: "Interledger Protocol Overview",
    description: "Understand the fundamentals of the Interledger Protocol and how it enables cross-ledger payments.",
    category: "tutorial",
    difficulty: "intermediate",
    readTime: "20 min",
    source: "Interledger",
    sourceUrl: "https://interledger.org",
    externalUrl: "https://interledger.org/developers/get-started/",
    tags: ["interledger", "protocol", "payments"],
    featured: true
  },
  {
    id: "4",
    title: "Web Monetization Integration Guide",
    description: "Step-by-step guide to implementing Web Monetization in your web application.",
    category: "walkthrough",
    difficulty: "beginner",
    readTime: "12 min",
    source: "Web Monetization",
    sourceUrl: "https://webmonetization.org",
    externalUrl: "https://webmonetization.org/docs/intro/",
    tags: ["web-monetization", "integration", "payments"],
    featured: false
  },
  {
    id: "5",
    title: "Building with Rafiki",
    description: "Learn how to use Rafiki, the open-source Interledger service for account providers.",
    category: "walkthrough",
    difficulty: "advanced",
    readTime: "30 min",
    source: "Rafiki Documentation",
    sourceUrl: "https://rafiki.dev",
    externalUrl: "https://rafiki.dev/overview/",
    tags: ["rafiki", "interledger", "backend"],
    featured: false
  },
  {
    id: "6",
    title: "Open Payments API Reference",
    description: "Complete API reference for Open Payments endpoints and authentication.",
    category: "demo",
    difficulty: "intermediate",
    readTime: "25 min",
    source: "Open Payments",
    sourceUrl: "https://openpayments.dev",
    externalUrl: "https://openpayments.dev/apis/",
    tags: ["api", "reference", "open-payments"],
    featured: false
  },
  {
    id: "7",
    title: "Creating Payment Pointers",
    description: "Guide to creating and managing payment pointers for receiving payments.",
    category: "tutorial",
    difficulty: "beginner",
    readTime: "8 min",
    source: "Open Payments",
    sourceUrl: "https://openpayments.dev",
    externalUrl: "https://openpayments.dev/introduction/payment-pointers/",
    tags: ["payment-pointers", "setup", "basics"],
    featured: false
  },
  {
    id: "8",
    title: "Sending Payments with Open Payments",
    description: "Learn how to programmatically send payments using the Open Payments API.",
    category: "tutorial",
    difficulty: "intermediate",
    readTime: "18 min",
    source: "Open Payments",
    sourceUrl: "https://openpayments.dev",
    externalUrl: "https://openpayments.dev/guides/send-payment/",
    tags: ["open-payments", "sending", "api"],
    featured: false
  }
];

const categories = [
  { id: "all", label: "All", icon: "📚", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
  { id: "tutorial", label: "Tutorials", icon: "📖", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  { id: "demo", label: "Demos", icon: "🎬", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
  { id: "walkthrough", label: "Walkthroughs", icon: "🚶", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" }
];

const difficulties = [
  { id: "all", label: "All Levels" },
  { id: "beginner", label: "Beginner", color: "bg-green-500" },
  { id: "intermediate", label: "Intermediate", color: "bg-yellow-500" },
  { id: "advanced", label: "Advanced", color: "bg-red-500" }
];

export default function KnowledgeBasePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContent = knowledgeBaseContent.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || item.difficulty === selectedDifficulty;
    const matchesSearch = searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const stats = {
    totalArticles: knowledgeBaseContent.length,
    tutorials: knowledgeBaseContent.filter(item => item.category === "tutorial").length,
    demos: knowledgeBaseContent.filter(item => item.category === "demo").length,
    walkthroughs: knowledgeBaseContent.filter(item => item.category === "walkthrough").length
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Knowledge Base</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Tutorials, demos, and walkthroughs to help you learn and grow
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tutorials, demos, walkthroughs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-lg text-gray-900 dark:text-white bg-white/95 dark:bg-gray-800 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <svg
                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">{stats.totalArticles}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Articles</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{stats.tutorials}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tutorials</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">{stats.demos}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Demos</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">{stats.walkthroughs}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Walkthroughs</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-8">
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? category.color
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Difficulty Level</h3>
              <div className="flex flex-wrap gap-3">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty.id}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      selectedDifficulty === difficulty.id
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    {difficulty.id !== "all" && (
                      <span className={`w-3 h-3 rounded-full ${difficulty.color}`}></span>
                    )}
                    {difficulty.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredContent.length}</span> {filteredContent.length === 1 ? 'result' : 'results'}
            </p>
          </div>

          {/* Content Grid */}
          {filteredContent.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item) => (
                <a
                  key={item.id}
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group relative"
                >
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      ⭐ Featured
                    </div>
                  )}

                  <div className="p-6">
                    {/* Category Badge & Difficulty */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        categories.find(c => c.id === item.category)?.color
                      }`}>
                        {categories.find(c => c.id === item.category)?.icon} {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${
                        difficulties.find(d => d.id === item.difficulty)?.color
                      }`} title={item.difficulty}></span>
                    </div>

                    {/* Title with External Link Icon */}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex items-start gap-2">
                      <span className="flex-1">{item.title}</span>
                      <svg className="w-4 h-4 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item.readTime}
                        </span>
                      </div>
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.source}
                      </a>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>

        {/* Contribute CTA */}
        <div className="max-w-7xl mx-auto mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Want to Contribute?</h2>
          <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
            Share your knowledge with the community by creating tutorials, demos, or walkthroughs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/your-org/knowledge-base"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Submit a Tutorial
            </a>
            <Link
              href="/feedback"
              className="bg-gray-800 dark:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
            >
              Suggest a Topic
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
