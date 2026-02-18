import Link from "next/link";

// Sample leaderboard data - replace with your actual data source
const leaderboardData = [
  {
    rank: 1,
    name: "Sarah Chen",
    username: "sarahdev",
    points: 2450,
    contributions: 127,
    badges: ["🏆 Top Contributor", "⭐ Early Adopter", "🔥 Streak Master"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    github: "sarahdev"
  },
  {
    rank: 2,
    name: "Alex Martinez",
    username: "alexcodes",
    points: 2180,
    contributions: 98,
    badges: ["🎯 Hacktoberfest Hero", "💡 Problem Solver"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    github: "alexcodes"
  },
  {
    rank: 3,
    name: "Jamie Park",
    username: "jamie_p",
    points: 1950,
    contributions: 85,
    badges: ["🎨 Design Wizard", "📚 Docs Champion"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie",
    github: "jamie_p"
  },
  {
    rank: 4,
    name: "Taylor Swift",
    username: "taylordev",
    points: 1720,
    contributions: 76,
    badges: ["🐛 Bug Hunter", "🎄 Advent Champion"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=taylor",
    github: "taylordev"
  },
  {
    rank: 5,
    name: "Morgan Lee",
    username: "morganlee",
    points: 1580,
    contributions: 69,
    badges: ["🔍 Code Reviewer"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=morgan",
    github: "morganlee"
  },
  {
    rank: 6,
    name: "Casey Johnson",
    username: "caseyjohn",
    points: 1420,
    contributions: 61,
    badges: ["🌟 Rising Star"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=casey",
    github: "caseyjohn"
  },
  {
    rank: 7,
    name: "Jordan Kim",
    username: "jordankim",
    points: 1290,
    contributions: 54,
    badges: ["📝 Documentation Pro"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan",
    github: "jordankim"
  },
  {
    rank: 8,
    name: "Riley Brown",
    username: "rileybrown",
    points: 1150,
    contributions: 48,
    badges: ["🎓 Mentor"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=riley",
    github: "rileybrown"
  },
  {
    rank: 9,
    name: "Quinn Davis",
    username: "quinnd",
    points: 1020,
    contributions: 42,
    badges: ["🚀 Quick Responder"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=quinn",
    github: "quinnd"
  },
  {
    rank: 10,
    name: "Avery Wilson",
    username: "averyw",
    points: 890,
    contributions: 37,
    badges: ["👥 Community Builder"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=avery",
    github: "averyw"
  }
];

const stats = {
  totalMembers: 1247,
  totalContributions: 8932,
  activeProjects: 23,
  monthlyGrowth: "+12%"
};

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Community Leaderboard</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Celebrating our top contributors and community champions
          </p>
        </div>
      </div>

      {/* Community Stats */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{stats.totalMembers}</div>
            <div className="text-gray-600 dark:text-gray-400">Total Members</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalContributions}</div>
            <div className="text-gray-600 dark:text-gray-400">Contributions</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.activeProjects}</div>
            <div className="text-gray-600 dark:text-gray-400">Active Projects</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{stats.monthlyGrowth}</div>
            <div className="text-gray-600 dark:text-gray-400">Monthly Growth</div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Top Contributors This Month
          </h2>
          <div className="grid md:grid-cols-3 gap-6 items-end">
            {/* 2nd Place */}
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">🥈</div>
                <img
                  src={leaderboardData[1].avatar}
                  alt={leaderboardData[1].name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
                />
                <h3 className="font-bold text-xl mb-1">{leaderboardData[1].name}</h3>
                <p className="text-gray-700 mb-2">@{leaderboardData[1].username}</p>
                <div className="text-3xl font-bold text-gray-800">{leaderboardData[1].points}</div>
                <p className="text-sm text-gray-700">points</p>
              </div>
            </div>

            {/* 1st Place */}
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-6 text-center transform md:scale-110">
                <div className="text-6xl mb-4">👑</div>
                <img
                  src={leaderboardData[0].avatar}
                  alt={leaderboardData[0].name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white"
                />
                <h3 className="font-bold text-2xl mb-1">{leaderboardData[0].name}</h3>
                <p className="text-yellow-900 mb-2">@{leaderboardData[0].username}</p>
                <div className="text-4xl font-bold text-yellow-900">{leaderboardData[0].points}</div>
                <p className="text-sm text-yellow-900">points</p>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="order-3">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">🥉</div>
                <img
                  src={leaderboardData[2].avatar}
                  alt={leaderboardData[2].name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
                />
                <h3 className="font-bold text-xl mb-1">{leaderboardData[2].name}</h3>
                <p className="text-orange-900 mb-2">@{leaderboardData[2].username}</p>
                <div className="text-3xl font-bold text-orange-900">{leaderboardData[2].points}</div>
                <p className="text-sm text-orange-900">points</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Full Leaderboard</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Member
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Contributions
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Points
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Badges
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {leaderboardData.map((member) => (
                    <tr key={member.rank} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className={`text-2xl font-bold ${
                            member.rank === 1 ? 'text-yellow-500' :
                            member.rank === 2 ? 'text-gray-400' :
                            member.rank === 3 ? 'text-orange-500' :
                            'text-gray-400 dark:text-gray-500'
                          }`}>
                            #{member.rank}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {member.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              @{member.username}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-white font-medium">
                          {member.contributions}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-purple-600 dark:text-purple-400">
                          {member.points}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {member.badges.map((badge, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded"
                              title={badge}
                            >
                              {badge.split(' ')[0]}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* How Points Work */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">How to Earn Points</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Contributions</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Pull Request Merged: 50 points</li>
                  <li>• Issue Created: 10 points</li>
                  <li>• Code Review: 15 points</li>
                  <li>• Documentation: 25 points</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Community Engagement</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Event Attendance: 20 points</li>
                  <li>• Helping Others: 30 points</li>
                  <li>• Blog Post: 75 points</li>
                  <li>• Project Demo: 100 points</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-purple-200 dark:border-purple-800">
              <p className="text-gray-700 dark:text-gray-300">
                Want to climb the leaderboard? Join our{" "}
                <a href="https://github.com/your-org" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">
                  GitHub projects
                </a>{" "}
                and{" "}
                <a href="https://slack.com/your-workspace" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">
                  Slack community
                </a>{" "}
                to start contributing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
