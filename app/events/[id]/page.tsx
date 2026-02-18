import Link from "next/link";
import { notFound } from "next/navigation";

// Sample event data - replace with your actual data source
const eventsData: Record<string, {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  description: string;
  longDescription: string;
  location?: string;
  registrationLink?: string;
  tags: string[];
}> = {
  "1": {
    id: "1",
    title: "Monthly Community Call - February",
    date: "2026-02-15",
    time: "10:00 AM PST",
    type: "community-call",
    description: "Join us for our monthly community sync where we discuss ongoing projects and upcoming initiatives.",
    longDescription: "Our monthly community calls are the heartbeat of our community. We gather to share updates on ongoing projects, discuss new ideas, and plan upcoming activities. Everyone is welcome to join, whether you're a long-time contributor or just curious about what we do. We'll cover project updates, answer questions, and give you a chance to connect with other community members.",
    location: "Virtual (Zoom)",
    registrationLink: "https://zoom.us/meeting/register",
    tags: ["monthly", "community", "virtual"]
  },
  "2": {
    id: "2",
    title: "Open Source Conference 2026",
    date: "2026-03-20",
    time: "9:00 AM PST",
    type: "sponsoring",
    description: "We're sponsoring this amazing conference focused on open source sustainability.",
    longDescription: "We're proud to sponsor the Open Source Conference 2026, a premier event bringing together developers, maintainers, and organizations to discuss the future of open source software. As a sponsor, we'll have a booth where you can meet our team, learn about our projects, and participate in exclusive workshops. Conference attendees can also join us for special networking sessions and project demos.",
    location: "San Francisco Convention Center",
    registrationLink: "https://osconf2026.com/register",
    tags: ["conference", "sponsorship", "open-source", "in-person"]
  },
  "3": {
    id: "3",
    title: "Build in Public - Project Alpha",
    date: "2026-02-28",
    time: "2:00 PM PST",
    type: "build-session",
    description: "Monthly build session for Project Alpha. Come watch us code live and contribute!",
    longDescription: "Join us for our monthly Build in Public session where we work on Project Alpha live. Watch as our team tackles real issues, discusses architecture decisions, and writes code in real-time. This is a great opportunity to learn, ask questions, and even contribute yourself. We'll be streaming on Twitch and you can interact with us through chat. After the session, we'll answer questions and review any contributions from the community.",
    location: "Twitch Live Stream",
    registrationLink: "https://twitch.tv/your-channel",
    tags: ["build-in-public", "live-coding", "project-alpha"]
  },
  "4": {
    id: "4",
    title: "Hacktoberfest Kickoff",
    date: "2026-10-01",
    time: "11:00 AM PST",
    type: "attending",
    description: "Join us as we kick off Hacktoberfest with exciting challenges and prizes.",
    longDescription: "Hacktoberfest is here! Join us for our kickoff event where we'll introduce this year's challenges, showcase beginner-friendly issues across our projects, and explain how you can participate and win prizes. Whether you're new to open source or a seasoned contributor, we have tasks suitable for all skill levels. We'll also provide guidance on making your first pull request and tips for successful contributions.",
    location: "Virtual (Discord)",
    registrationLink: "https://discord.gg/your-server",
    tags: ["hacktoberfest", "open-source", "challenges"]
  },
  "5": {
    id: "5",
    title: "Holiday Advent Calendar Launch",
    date: "2026-12-01",
    time: "12:00 PM PST",
    type: "community-call",
    description: "Start the holiday season with our special advent calendar featuring daily coding challenges.",
    longDescription: "Get into the holiday spirit with our annual Holiday Advent Calendar! Each day in December leading up to the holidays, we'll release a new coding challenge. Solve challenges to earn points, climb the leaderboard, and win prizes. Challenges range from beginner to advanced, covering various programming languages and concepts. Join our launch event to learn how to participate, see example challenges, and get tips from past winners.",
    location: "Virtual (YouTube Live)",
    registrationLink: "https://youtube.com/your-channel",
    tags: ["holiday", "advent-calendar", "challenges", "virtual"]
  }
};

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = eventsData[params.id];

  if (!event) {
    notFound();
  }

  const typeColors: Record<string, string> = {
    "community-call": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "sponsoring": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "attending": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "build-session": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <Link href="/events" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-4 inline-block">
            ← Back to Events
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{event.title}</h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[event.type]}`}>
              {event.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          </div>
          <div className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {event.time}
            </div>
            {event.location && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About this Event</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {event.longDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Registration CTA */}
            {event.registrationLink && (
              <div className="border-t pt-6">
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Register / Join Event
                </a>
              </div>
            )}
          </div>

          {/* Add to Calendar */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Don't want to miss this?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Add this event to your calendar</p>
            <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              📅 Add to Calendar
            </button>
          </div>

          {/* Share */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Share this event with your network</p>
            <div className="flex justify-center gap-4">
              <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
              <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
