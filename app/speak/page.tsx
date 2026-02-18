"use client";

import Link from "next/link";
import { useState } from "react";

export default function SpeakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventName: "",
    eventDate: "",
    eventLocation: "",
    expectedAttendees: "",
    eventType: "meetup",
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
        eventType: "meetup",
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
      icon: "🎁",
      title: "Exclusive Swag",
      description: "Receive Interledger branded merchandise to share with your audience"
    },
    {
      icon: "🎬",
      title: "YouTube Feature",
      description: "Get your talk featured on our official YouTube channel"
    },
    {
      icon: "🎨",
      title: "Slide Design Support",
      description: "Our team will help you design professional presentation slides"
    },
    {
      icon: "📚",
      title: "Content Resources",
      description: "Access to exclusive content, demos, and technical resources"
    },
    {
      icon: "🤝",
      title: "Community Support",
      description: "Direct support from our team and community champions"
    },
    {
      icon: "📢",
      title: "Promotion",
      description: "We'll help promote your event across our social channels"
    }
  ];

  const requirements = [
    {
      icon: "⏰",
      title: "4 Weeks Notice",
      description: "Applications must be submitted at least 4 weeks before your event"
    },
    {
      icon: "👥",
      title: "15+ Attendees",
      description: "Event must have a minimum of 15 confirmed attendees"
    },
    {
      icon: "🎯",
      title: "Interledger Focused",
      description: "Content should be focused on Interledger, Open Payments, or related technologies"
    },
    {
      icon: "📹",
      title: "Recording Preferred",
      description: "We prefer events to be recorded for community sharing (not required)"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Speak About Interledger
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-800 dark:text-gray-200">
              Share your knowledge, inspire developers, and grow the community
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're hosting a meetup, speaking at a conference, or running a workshop,
              we'll support you with resources, swag, and promotion to make your event a success.
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
              We provide everything you need to deliver an amazing talk
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
              Simple criteria to qualify for the speaker program
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

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Apply to Speak
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
              Tell us about your event and we'll get back to you within 5 business days
            </p>

            {submitted && (
              <div className="mb-8 p-6 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Application Submitted! 🎉</h3>
                <p>Thank you for your interest in speaking about Interledger. Our team will review your application and get back to you within 5 business days.</p>
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

              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Type *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['meetup', 'conference', 'workshop', 'webinar'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, eventType: type })}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        formData.eventType === type
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Event Details */}
              <div>
                <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Name *
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
                    Event Date *
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
                  Event Location *
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  required
                  placeholder="City, Country or 'Virtual'"
                  value={formData.eventLocation}
                  onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Talk Topic *
                </label>
                <input
                  type="text"
                  id="topic"
                  required
                  placeholder="e.g., Introduction to Open Payments"
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
                  placeholder="Tell us more about your event, audience, or any special requirements..."
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
                  What topics can I speak about?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Any topic related to Interledger, Open Payments, Web Monetization, Rafiki, or payment interoperability.
                  We welcome talks for all experience levels from beginner introductions to advanced technical deep dives.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  How long does the application process take?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We review all applications within 5 business days. You'll receive an email with our decision and next steps.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Can I apply for multiple events?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely! We encourage community members to speak at multiple events. Just submit a separate application for each event.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  What if my event has fewer than 15 attendees?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  While we prefer events with 15+ attendees, we consider exceptions on a case-by-case basis.
                  Please explain your situation in the additional information section.
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
            Join our Slack community to chat with our team and other speakers
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
              href="mailto:speakers@ilf-community.org"
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
