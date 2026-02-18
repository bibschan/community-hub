import Calendar from "@/components/Calendar";

// Sample event data - replace with your actual data source
// Convert events to calendar format with color coding
const events = [
  {
    id: "1",
    title: "Monthly Community Call",
    date: "2026-02-15",
    time: "10a",
    color: "bg-purple-500 text-white"
  },
  {
    id: "2",
    title: "Open Source Conference 2026",
    date: "2026-02-20",
    time: "9a",
    color: "bg-blue-500 text-white"
  },
  {
    id: "3",
    title: "Build in Public - Project Alpha",
    date: "2026-02-28",
    time: "2p",
    color: "bg-green-500 text-white"
  },
  {
    id: "4",
    title: "AI Café hosted by Vercel",
    date: "2026-02-04",
    time: "6a",
    color: "bg-teal-500 text-white"
  },
  {
    id: "5",
    title: "v0 Prompt to Production",
    date: "2026-02-06",
    time: "1a",
    color: "bg-orange-500 text-white"
  },
  {
    id: "6",
    title: "Next.js Melb",
    date: "2026-02-04",
    time: "11p",
    color: "bg-teal-500 text-white"
  },
  {
    id: "7",
    title: "Community Session",
    date: "2026-02-05",
    time: "11a",
    color: "bg-cyan-500 text-white"
  },
  {
    id: "8",
    title: "v0 Power Hour",
    date: "2026-02-12",
    time: "12p",
    color: "bg-pink-500 text-white"
  },
  {
    id: "9",
    title: "Frontend Forward",
    date: "2026-02-10",
    time: "10:30a",
    color: "bg-indigo-500 text-white"
  },
  {
    id: "10",
    title: "Ship Fast | San Francisco",
    date: "2026-02-03",
    time: "6p",
    color: "bg-emerald-500 text-white"
  },
  {
    id: "11",
    title: "v0 Power Hour - Peshawar",
    date: "2026-02-04",
    time: "10p",
    color: "bg-teal-600 text-white"
  },
  {
    id: "12",
    title: "Geodesic Developer Meetup",
    date: "2026-02-18",
    time: "12:30p",
    color: "bg-blue-600 text-white"
  },
  {
    id: "13",
    title: "Next.js London Meetup",
    date: "2026-02-17",
    time: "5:30p",
    color: "bg-green-600 text-white"
  },
  {
    id: "14",
    title: "Hacktoberfest Kickoff",
    date: "2026-10-01",
    time: "11a",
    color: "bg-orange-600 text-white"
  },
  {
    id: "15",
    title: "Holiday Advent Launch",
    date: "2026-12-01",
    time: "12p",
    color: "bg-red-500 text-white"
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Community Events</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Join us at events throughout the year - from monthly calls to conferences and special activities
          </p>
        </div>
      </div>

      {/* Calendar View */}
      <div className="container mx-auto px-6 py-8">
        <Calendar events={events} />
      </div>

      {/* Annual Activities Callout */}
      <div className="py-12 mt-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Annual Activities</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-2">🎃</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Hacktoberfest</h3>
              <p className="text-gray-700 dark:text-gray-300">Contribute to open source and win prizes every October</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔍</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Scavenger Hunt</h3>
              <p className="text-gray-700 dark:text-gray-300">Solve challenges and explore our projects in fun ways</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎄</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Holiday Advent</h3>
              <p className="text-gray-700 dark:text-gray-300">Daily coding challenges throughout December</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
