import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Join the Community */}
      <section className="text-gray-900 dark:text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join the ILF Community
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-50">
              Connect with developers, contribute to open source, and build amazing projects together
            </p>

            {/* Getting Started CTA */}
            <div className="mb-8">
              <Link
                href="/getting-started"
                className="inline-block bg-yellow-400 text-gray-900 px-10 py-5 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
              >
                🚀 Get Started with the Community
              </Link>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="https://github.com/your-org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Star us on GitHub
              </a>
              <a
                href="https://slack.com/your-workspace"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                </svg>
                Join our Slack
              </a>
            </div>

            {/* Community Activities */}
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Monthly Community Calls</h3>
                <p className="text-gray-700 dark:text-gray-300">Join us every month to discuss projects, share ideas, and build in public</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Build in Public</h3>
                <p className="text-gray-700 dark:text-gray-300">Each project has monthly calls where we collaborate and build together</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Year-Round Activities</h3>
                <p className="text-gray-700 dark:text-gray-300">Hacktoberfest, scavenger hunts, holiday advent calendar, and more!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Program CTA */}
      <section className="py-16 text-gray-900 dark:text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-4">🎤</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Speak About Interledger
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Host a meetup, speak at a conference, or run a workshop about Interledger and Open Payments.
              Get swag, slide support, and featured on our YouTube!
            </p>
            <Link
              href="/speak"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Apply to Speak →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Explore the Community</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link
              href="/events"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-semibold text-xl mb-2">Events</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse upcoming events and activities
              </p>
            </Link>

            <Link
              href="/leaderboard"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-semibold text-xl mb-2">Leaderboard</h3>
              <p className="text-gray-600 dark:text-gray-400">
                See top community contributors
              </p>
            </Link>

            <Link
              href="/knowledge-base"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-semibold text-xl mb-2">Knowledge Base</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tutorials, demos, and walkthroughs
              </p>
            </Link>

            <Link
              href="/feedback"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-semibold text-xl mb-2">Feedback</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share your ideas and suggestions
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
