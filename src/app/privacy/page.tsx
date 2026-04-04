import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

const sections = [
  {
    title: "No Data Collection",
    content:
      "AuraMusic does not collect, store, or transmit any personal data. There are no analytics, trackers, or telemetry of any kind. Your listening habits stay on your device.",
  },
  {
    title: "YouTube Music",
    content:
      "AuraMusic accesses YouTube Music to stream audio content. Your use of YouTube Music through AuraMusic is subject to Google's Terms of Service and YouTube's Terms of Service. AuraMusic does not modify or redistribute any content.",
  },
  {
    title: "Local Storage",
    content:
      "All preferences, cached songs, playlists, and listening history are stored locally on your device. This data never leaves your device and is entirely under your control.",
  },
  {
    title: "Account Login",
    content:
      "YouTube Music account login is optional. If you choose to log in, your credentials are handled entirely through Google's OAuth system. AuraMusic never sees, stores, or transmits your Google password.",
  },
  {
    title: "Listen Together",
    content:
      "The Listen Together feature uses AuraMusicServer to sync playback between users. Room codes are temporary and expire when the session ends. No messages, user data, or listening history are stored on the server.",
  },
  {
    title: "Third-Party Services",
    content:
      "AuraMusic integrates with the following third-party services for specific features: Kugou, LRCLib, RushLyrics, and BetterLyrics for synced lyrics; Shazam API for music recognition; and Kizzy for Discord Rich Presence. Each service has its own privacy policy. AuraMusic does not share your personal data with any of these services.",
  },
  {
    title: "Open Source",
    content:
      "AuraMusic is fully open source under the GPL-3.0 license. You can audit the entire source code on GitHub to verify these privacy claims for yourself.",
  },
  {
    title: "Contact",
    content:
      "If you have any questions or concerns about privacy, please open an issue on our GitHub repository at github.com/chila254/AuraMusic.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="sticky top-0 z-50 border-b border-zinc-200/50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex items-center gap-2">
            <Image
              src="/app-icon.png"
              alt="AuraMusic"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="text-lg font-bold gradient-text">AuraMusic</span>
          </div>
        </div>
      </header>

      <main className="flex-grow py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-6 h-6 text-orange-500" />
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-12">
            Last updated: March 2026
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
