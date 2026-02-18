import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Getting Started with the Interledger Community
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Everything you need to know to get involved and make the most of our community
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Welcome */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Welcome! 👋
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
            Welcome to the Interledger Foundation community! We're a vibrant group of developers, designers,
            and open source enthusiasts working together to build the future of payments on the web.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Whether you're new to Interledger or a seasoned contributor, this guide will help you navigate
            our community and find the best ways to get involved.
          </p>
        </div>

        {/* Navigating the Site */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Navigating the Site
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">📅</div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  <Link href="/events" className="text-purple-600 dark:text-purple-400 hover:underline">
                    Events
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Browse our calendar to find upcoming community calls, conferences we're sponsoring or attending,
                  and build-in-public sessions. Events are displayed in an interactive calendar view with filtering options.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">📚</div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  <Link href="/knowledge-base" className="text-purple-600 dark:text-purple-400 hover:underline">
                    Knowledge Base
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Access curated tutorials, demos, and walkthroughs about Interledger, Open Payments, Web Monetization,
                  and related technologies. Filter by difficulty level and category to find exactly what you need.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🎤</div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  <Link href="/speak" className="text-purple-600 dark:text-purple-400 hover:underline">
                    Speak About Interledger
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Interested in speaking about Interledger at a meetup, conference, or workshop? Apply to our speaker
                  program and get swag, slide design support, promotion, and the chance to be featured on our YouTube channel!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🏆</div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  <Link href="/leaderboard" className="text-purple-600 dark:text-purple-400 hover:underline">
                    Leaderboard
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  See who's making the biggest impact in our community! Earn points through contributions, event
                  attendance, helping others, and more. Check out how the points system works to climb the rankings.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">💬</div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  <Link href="/feedback" className="text-purple-600 dark:text-purple-400 hover:underline">
                    Feedback
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Have ideas for new features, found a bug, or want to suggest improvements? Submit feedback and vote
                  on existing suggestions. We actively track and implement community feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join the Conversation */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 mb-8 border-2 border-purple-200 dark:border-purple-800">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Join the Conversation on Slack 💬
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            Our Slack workspace is where the magic happens! It's the best place to:
          </p>
          <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              Ask questions and get help from the community
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              Share your projects and get feedback
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              Connect with other developers and contributors
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              Stay updated on the latest news and announcements
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              Participate in real-time discussions during events
            </li>
          </ul>
          <a
            href="https://slack.com/your-workspace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Join Our Slack Workspace →
          </a>
        </div>

        {/* Community Calls */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Monthly Community Calls 📞
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            We host community calls every month where we:
          </p>
          <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400">•</span>
              Discuss ongoing projects and upcoming initiatives
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400">•</span>
              Share updates from the ecosystem
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400">•</span>
              Welcome new community members
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400">•</span>
              Answer questions and provide support
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400">•</span>
              Plan future activities and events
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Check the <Link href="/events" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">Events calendar</Link> for the next community call!
          </p>
        </div>

        {/* Build in Public */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Build in Public 🏗️
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            We believe in transparency and learning together. Each of our projects has monthly build-in-public sessions where:
          </p>
          <ul className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400">•</span>
              We code live and show our development process
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400">•</span>
              Community members can ask questions in real-time
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400">•</span>
              Contributors can join and pair program with us
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400">•</span>
              We discuss architecture decisions and trade-offs
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            These sessions are streamed and later available on our YouTube channel for those who can't attend live.
          </p>
        </div>

        {/* Contributing */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Ways to Contribute 🤝
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Code Contributions</h3>
              <ul className="space-y-1 text-sm">
                <li>• Submit pull requests to our projects</li>
                <li>• Review code from other contributors</li>
                <li>• Fix bugs and add new features</li>
                <li>• Improve test coverage</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Documentation</h3>
              <ul className="space-y-1 text-sm">
                <li>• Write tutorials and guides</li>
                <li>• Improve existing documentation</li>
                <li>• Create video walkthroughs</li>
                <li>• Translate docs to other languages</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Community Support</h3>
              <ul className="space-y-1 text-sm">
                <li>• Answer questions on Slack</li>
                <li>• Help newcomers get started</li>
                <li>• Share your knowledge and experiences</li>
                <li>• Moderate discussions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Advocacy</h3>
              <ul className="space-y-1 text-sm">
                <li>• Speak at events about Interledger</li>
                <li>• Write blog posts and articles</li>
                <li>• Share on social media</li>
                <li>• Organize local meetups</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Annual Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Annual Activities 🎉
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🎃</div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Hacktoberfest</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Every October, we participate in Hacktoberfest with specially labeled issues for contributors.
                  Make four quality pull requests and earn prizes while helping improve our projects!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🔍</div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Scavenger Hunt</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Solve challenges, explore our documentation and codebases, and compete with other community members
                  in our annual scavenger hunt. Great prizes and bragging rights await!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🎄</div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Holiday Advent Calendar</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Throughout December, we release a daily coding challenge. Complete challenges to earn points,
                  climb the leaderboard, and win prizes while spreading holiday cheer!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started CTA */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Get Started?</h2>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            The best way to begin is to join our community channels and introduce yourself!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://slack.com/your-workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Slack
            </a>
            <a
              href="https://github.com/your-org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors"
            >
              Star us on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
