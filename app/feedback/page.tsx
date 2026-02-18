"use client";

import Link from "next/link";
import { useState } from "react";

// Sample existing feedback - replace with your actual data source
const existingFeedback = [
  {
    id: "1",
    type: "feature",
    title: "Add dark mode toggle to all pages",
    description: "Would love to have a dark mode option that persists across pages",
    author: "Sarah Chen",
    votes: 42,
    status: "planned",
    createdAt: "2026-02-01"
  },
  {
    id: "2",
    type: "bug",
    title: "Calendar view doesn't display correctly on mobile",
    description: "Events overlap on small screens making them hard to read",
    author: "Alex Martinez",
    votes: 28,
    status: "in-progress",
    createdAt: "2026-02-05"
  },
  {
    id: "3",
    type: "improvement",
    title: "Add filtering options to leaderboard",
    description: "It would be great to filter by project, time period, or contribution type",
    author: "Jamie Park",
    votes: 35,
    status: "under-review",
    createdAt: "2026-02-08"
  },
  {
    id: "4",
    type: "feature",
    title: "Community showcase page",
    description: "A page where members can showcase projects they've built",
    author: "Taylor Swift",
    votes: 51,
    status: "planned",
    createdAt: "2026-01-28"
  },
  {
    id: "5",
    type: "improvement",
    title: "Better notification system",
    description: "Get notified when events are upcoming or when someone replies to my feedback",
    author: "Morgan Lee",
    votes: 19,
    status: "under-review",
    createdAt: "2026-02-10"
  }
];

const statusConfig: Record<string, { label: string; color: string }> = {
  "planned": { label: "Planned", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  "in-progress": { label: "In Progress", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
  "under-review": { label: "Under Review", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
  "completed": { label: "Completed", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" }
};

const typeConfig: Record<string, { label: string; icon: string }> = {
  "feature": { label: "Feature Request", icon: "✨" },
  "bug": { label: "Bug Report", icon: "🐛" },
  "improvement": { label: "Improvement", icon: "🚀" }
};

export default function FeedbackPage() {
  const [feedbackType, setFeedbackType] = useState("feature");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log({ feedbackType, title, description });
    setSubmitted(true);
    setTimeout(() => {
      setTitle("");
      setDescription("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Community Feedback</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Share your ideas, report bugs, and help shape the future of our community
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Submit Feedback Form */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Submit Feedback
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                  Thank you! Your feedback has been submitted successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Feedback Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Feedback Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(typeConfig).map(([key, config]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setFeedbackType(key)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          feedbackType === key
                            ? "border-green-600 bg-green-50 dark:bg-green-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                        }`}
                      >
                        <div className="text-2xl mb-1">{config.icon}</div>
                        <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {config.label.split(' ')[0]}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div className="mb-6">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Brief summary of your feedback"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide more details about your feedback..."
                    rows={6}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Submit Feedback
                </button>
              </form>
            </div>

            {/* Guidelines */}
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">
                💡 Feedback Guidelines
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Be specific and clear in your description</li>
                <li>• Search existing feedback to avoid duplicates</li>
                <li>• Vote on existing feedback you agree with</li>
                <li>• Be respectful and constructive</li>
              </ul>
            </div>
          </div>

          {/* Existing Feedback */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Recent Feedback
            </h2>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium whitespace-nowrap">
                All
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 whitespace-nowrap">
                Feature Requests
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 whitespace-nowrap">
                Bug Reports
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 whitespace-nowrap">
                Improvements
              </button>
            </div>

            {/* Feedback List */}
            <div className="space-y-4">
              {existingFeedback.map((feedback) => (
                <div
                  key={feedback.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{typeConfig[feedback.type].icon}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${statusConfig[feedback.status].color}`}>
                          {statusConfig[feedback.status].label}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                        {feedback.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        {feedback.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>By {feedback.author}</span>
                        <span>•</span>
                        <span>{new Date(feedback.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Vote Button */}
                    <button className="flex flex-col items-center gap-1 px-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                      <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="font-bold text-gray-900 dark:text-white">{feedback.votes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <button className="w-full mt-6 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Load More Feedback
            </button>
          </div>
        </div>

        {/* Community Engagement CTA */}
        <div className="max-w-7xl mx-auto mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Want to make an even bigger impact?</h2>
          <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
            Join our development team and help build the features you want to see!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/your-org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Contribute on GitHub
            </a>
            <a
              href="https://slack.com/your-workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
            >
              Join the Discussion
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
