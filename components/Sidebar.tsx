"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const navigationItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/getting-started", label: "Getting Started", icon: "🚀" },
    { href: "/events", label: "Events", icon: "📅" },
    { href: "/knowledge-base", label: "Knowledge Base", icon: "📚" },
    { href: "/glossary", label: "Glossary", icon: "📖" },
    { href: "/speak", label: "Speak", icon: "🎤" },
    { href: "/meetup", label: "Host a Meetup", icon: "🍕" },
    { href: "/leaderboard", label: "Leaderboard", icon: "🏆" },
    { href: "/feedback", label: "Feedback", icon: "💬" },
  ];

  const communityLinks = [
    { href: "https://github.com/your-org", label: "GitHub", icon: "💻", external: true },
    { href: "https://slack.com/your-workspace", label: "Slack", icon: "💬", external: true },
    { href: "https://twitter.com/your-handle", label: "Twitter", icon: "🐦", external: true },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-r border-gray-200 dark:border-gray-800 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={onClose}>
                <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ILF Community
                </div>
              </Link>
              <button
                onClick={onClose}
                className="lg:hidden p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Community Section */}
            <div className="mt-8">
              <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Community
              </h3>
              <div className="space-y-1">
                {communityLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.label}</span>
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Activities Section */}
            <div className="mt-8">
              <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Annual Activities
              </h3>
              <div className="space-y-1 px-4">
                <div className="flex items-center gap-2 py-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>🎃</span> Hacktoberfest
                </div>
                <div className="flex items-center gap-2 py-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>🔍</span> Scavenger Hunt
                </div>
                <div className="flex items-center gap-2 py-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>🎄</span> Holiday Advent
                </div>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              © {new Date().getFullYear()} ILF Community
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
