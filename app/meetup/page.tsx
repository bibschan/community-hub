"use client";

import Link from "next/link";
import { useState } from "react";

export default function MeetupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventName: "",
    eventDate: "",
    eventLocation: "",
    expectedAttendees: "",
    topic: "",
    additionalInfo: "",
    supportNeeded: [] as string[]
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the application to your backend
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        eventName: "",
        eventDate: "",
        eventLocation: "",
        expectedAttendees: "",
        topic: "",
        additionalInfo: "",
        supportNeeded: []
      });
    }, 5000);
  };

  const handleSupportChange = (support: string) => {
    setFormData(prev => ({
      ...prev,
      supportNeeded: prev.supportNeeded.includes(support)
        ? prev.supportNeeded.filter(s => s !== support)
        : [...prev.supportNeeded, support]
    }));
  };

  const perks = [
    {
      icon: "🍕",
      title: "Funding Up to $200 USD",
      description: "Cover venue costs, food and refreshments, printing, A/V equipment, and basic logistics"
    },
    {
      icon: "🎁",
      title: "Exclusive Swag",
      description: "Receive Interledger branded merchandise to share with attendees"
    },
    {
      icon: "📚",
      title: "Event Toolkit",
      description: "Get presentations, templates, tech documentation, tutorials, and recorded demos"
    },
    {
      icon: "🎨",
      title: "Slide Design Support",
      description: "Our team will help you design professional presentation slides"
    },
    {
      icon: "📢",
      title: "Amplification",
      description: "ILF will promote your event across our channels and amplify your work"
    },
    {
      icon: "🌟",
      title: "Career Growth",
      description: "Build leadership experience and advance your career in the open payments ecosystem"
    },
    {
      icon: "🤝",
      title: "Community Engagement",
      description: "Connect with ILF staff, partners, and the larger Interledger community"
    },
    {
      icon: "🎯",
      title: "Future Opportunities",
      description: "Get invited to future Interledger events and pathways into other ILF grant programs"
    }
  ];

  const requirements = [
    {
      icon: "📅",
      title: "Application Window",
      description: "Rolling applications from April 22 to November 11, 2026"
    },
    {
      icon: "⏰",
      title: "4 Weeks Notice",
      description: "Express interest at least 4 weeks before your event date"
    },
    {
      icon: "🌐",
      title: "Community Member",
      description: "Must be a member of the Interledger Community for 6 months or older"
    },
    {
      icon: "👥",
      title: "15+ Attendees",
      description: "Meetup must have a minimum of 15 confirmed attendees"
    },
    {
      icon: "🎯",
      title: "Local Relevance",
      description: "Demonstrate strong local community experience and relevance to Open Payments or Digital Financial Inclusion"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Host an Interledger Meetup
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-800 dark:text-gray-200">
              Think global, do local - Build awareness and drive adoption in your community
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Part of the <strong>Local Impact Mini Grants from ILF</strong>, this program provides up to $200 USD
              to support community-led initiatives that advance awareness and early adoption of Open Payments and
              Digital Financial Inclusion. Host meetups, workshops, demo days, or mini hackathons in your local community.
            </p>
          </div>
        </div>
      </div>

      {/* Perks Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              What You'll Get
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
              Everything you need to host an amazing Interledger meetup
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border-2 border-green-200 dark:border-green-800"
                >
                  <div className="text-4xl mb-4">{perk.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                    {perk.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Requirements
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
              Simple criteria to qualify for the mini grant
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex gap-4"
                >
                  <div className="text-3xl flex-shrink-0">{req.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                      {req.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {req.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Application Process
            </h2>

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">
                      Submit Application
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Fill out the application form below at least 4 weeks before your planned event date.
                      Applications are reviewed on a rolling basis throughout the application window.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">
                      Review & Approval
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      A review panel evaluates applications continuously based on alignment with ILF objectives,
                      local relevance, community experience, and practical scope. Recommendations and references
                      are welcome. Shortlisted applicants may be invited for follow-up information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">
                      Grant Agreement
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sign a simple grant agreement and receive your onboarding toolkit with
                      everything you need to organize a successful meetup.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">
                      Payment
                    </h3>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Pre-payment:</strong> If your application is submitted 6 weeks ahead of the event</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Reimbursement:</strong> If your application is submitted less than 4 weeks ahead</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Apply for a Mini Grant
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
              Tell us about your meetup and we'll get back to you with a decision
            </p>

            {submitted && (
              <div className="mb-8 p-6 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Application Submitted! 🎉</h3>
                <p>Thank you for your interest in hosting an Interledger meetup. Our review panel will evaluate your application on a rolling basis and get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div>
                <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Meetup Name *
                </label>
                <input
                  type="text"
                  id="eventName"
                  required
                  value={formData.eventName}
                  onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Meetup Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    min={new Date(Date.now() + 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Must be at least 4 weeks from now</p>
                </div>
                <div>
                  <label htmlFor="expectedAttendees" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Attendees *
                  </label>
                  <input
                    type="number"
                    id="expectedAttendees"
                    required
                    min="15"
                    value={formData.expectedAttendees}
                    onChange={(e) => setFormData({ ...formData, expectedAttendees: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Minimum 15 attendees required</p>
                </div>
              </div>

              <div>
                <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Meetup Location *
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  required
                  placeholder="City, Country"
                  value={formData.eventLocation}
                  onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Meetup Topic *
                </label>
                <input
                  type="text"
                  id="topic"
                  required
                  placeholder="e.g., Introduction to Interledger Protocol"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Support Needed
                </label>
                <div className="space-y-2">
                  {['Slide Design', 'Technical Resources', 'Swag', 'Event Promotion', 'YouTube Feature'].map((support) => (
                    <label key={support} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.supportNeeded.includes(support)}
                        onChange={() => handleSupportChange(support)}
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{support}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  rows={4}
                  placeholder="Tell us more about your meetup, planned activities, or any special requirements..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Post-Event Deliverables Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              After Your Event
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
              Help us share your success and learnings with the community
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                After hosting your meetup, we ask you to share your experience to help inspire and guide other organizers:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Photos from the event</strong>
                    <p className="text-gray-600 dark:text-gray-300">Share images that capture the energy and engagement</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Written summary</strong>
                    <p className="text-gray-600 dark:text-gray-300">Post a recap on the community forum with key takeaways</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Social media tags</strong>
                    <p className="text-gray-600 dark:text-gray-300">Tag ILF when sharing about your event on social platforms</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Attendee metrics</strong>
                    <p className="text-gray-600 dark:text-gray-300">Share total participants and insights about your audience</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Video testimonials (optional)</strong>
                    <p className="text-gray-600 dark:text-gray-300">Short clips from attendees or organizers about the experience</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Receipts and bills</strong>
                    <p className="text-gray-600 dark:text-gray-300">Keep all receipts organized in a folder for reimbursement</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  What can I use the $200 funding for?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The funding covers venue costs, food and refreshments (pizza, snacks, beverages),
                  printing materials, A/V equipment, and basic logistics. Keep all receipts organized
                  in a folder for reimbursement purposes.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  What's the difference between pre-payment and reimbursement?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  If you submit your application 6 weeks or more before your event, you'll receive pre-payment
                  to help with upfront costs. If you submit less than 4 weeks ahead, you'll be reimbursed
                  after the event with receipts.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  How long does the application review take?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Applications are reviewed on a rolling basis throughout the application window.
                  You may receive a decision at any time after submission, potentially before the final deadline.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Can I host multiple meetups?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! We encourage organizers to host multiple meetups. Just submit a separate application
                  for each event you plan to organize.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  What types of events qualify?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We support various community-led formats including meetups, workshops, learning sessions,
                  demo days, mini hackathons (3-4 hour sprints), and discussions on policy, consumer rights,
                  fintech, and digital financial inclusion. Events should focus on awareness and hands-on learning.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  What topics should my event cover?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Any topic related to Interledger, Open Payments, Web Monetization, Rafiki, Digital Financial
                  Inclusion, or payment interoperability. We welcome content for all experience levels from
                  beginner introductions to advanced technical discussions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Who can apply for this grant?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Local community groups, individual community leaders, open-source communities, developers,
                  and organizations like co-working spaces, incubators, accelerators, fintech associations,
                  or hacker spaces who are passionate about Open Payments and Digital Financial Inclusion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Questions About the Program?
          </h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Join our Slack community to chat with our team and other meetup organizers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://slack.com/your-workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Our Slack
            </a>
            <a
              href="mailto:meetups@ilf-community.org"
              className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
