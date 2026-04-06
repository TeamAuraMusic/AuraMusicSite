import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const releases = [
  {
    version: "v1.0.10",
    build: "Build 11",
    date: "Latest",
    changes: [
      "Video Switching Loading Indicator — smooth loading animation while video is being fetched, prevents black screen flash when switching between audio/video modes",
      "Improved Video Lyrics Sync — reduced polling interval from 150ms to 50ms, lyrics perfectly synchronized with video playback",
      "Music Video Search Algorithm Overhaul — completely rewritten with normalized title comparison, artist token matching, multi-query search, expanded exclusion list for non-official videos, early exit for high-confidence matches",
      "Updater now automatically follows redirects for GitHub API requests",
      "All repository URLs updated across entire codebase",
      "Fixed black screen flash when switching between audio/video modes",
      "Fixed lyrics offset not being properly applied in video mode",
      "Fixed video background during loading state",
      "Fixed repository URL references throughout the app",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v1.0.9...v1.0.10",
  },
  {
    version: "v1.0.9",
    build: "Build 10",
    date: "",
    changes: [
      "Complete Video Player Overhaul — YouTube-inspired design with smooth animations",
      "Brightness/Volume Swipe Gestures — swipe left for brightness, right for volume with progress indicator",
      "Regular songs now fetch music videos automatically when video mode is enabled",
      "Video quality selector now available directly on video thumbnail (360p–1080p)",
      "Improved video search matching with better filtering and scoring",
      "Fixed lyrics sync issues in video mode",
      "Fixed duplicate lyrics showing (removed small text + overlay lyrics)",
      "Fixed quality selection algorithm to properly respect user preferences",
      "Repository moved to Team AuraMusic organization",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v1.0.8...v1.0.9",
  },
  {
    version: "v1.0.8",
    build: "Build 9",
    date: "",
    changes: [
      "Video Mode — Official Music Video Search with smart fallback for regular songs (Experimental)",
      "Video toggle icon in the player UI with improved error handling",
      "Video Quality Selection (360p/480p/720p/1080p) with smart quality fallback",
      "Listen Together now uses api.auramusic.site",
      "Added website link in About settings: auramusic.site",
      "Fixed black screen flicker issue in video playback",
      "Fixed \"Respect Lyrics Provider\" setting to properly apply user preference",
      "Video now properly fills the entire player area in fullscreen mode",
      "Improved video URL extraction, MIME type handling, and quality selection by resolution",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v1.0.7...v1.0.8",
  },
  {
    version: "v1.0.7",
    build: "Build 8",
    date: "",
    changes: [
      "AuraMusic branding update throughout the entire app",
      "Fixed percentage display issues in Wrapped statistics screens",
      "Fixed total songs not showing in Wrapped playlist (date range mismatch)",
      "Updated Java version to 17 for better compatibility",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v1.0.6...v1.0.7",
  },
  {
    version: "v1.0.6",
    build: "Build 7",
    date: "",
    changes: [
      "Fixed SSL/TLS music recognition (Shazam) error — switched to OkHttp engine",
      "Redesigned New Releases screen with grid/card layout using YouTubeGridItem",
      'Added "Top Artist Albums" feature to Monthly Wrapped card',
      "Updated repository URL from Auramusic-v1 to AuraMusic",
      'UI improvements: updated notification icon, "Play on AuraMusic" text',
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v1.0.5...v1.0.6",
  },
  {
    version: "v1.0.5",
    build: "Build 6",
    date: "",
    changes: [
      "Replaced metroserver with AuraMusicServer for Listen Together",
      "Build system improvements — moved signing configs to local.properties",
      "Fixed project naming typos (Auramusic → AuraMusic)",
      "Modernized and restructured README documentation",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v1.0.4...v1.0.5",
  },
];

export default function ChangelogPage() {
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
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Changelog
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12">
            What&apos;s new in each release of AuraMusic.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />

            <div className="space-y-10">
              {releases.map((release, i) => (
                <div key={release.version} className="relative pl-10">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1 w-[31px] h-[31px] rounded-full border-4 ${
                      i === 0
                        ? "bg-gradient-to-br from-orange-500 to-pink-500 border-zinc-50 dark:border-zinc-950"
                        : "bg-zinc-300 dark:bg-zinc-700 border-zinc-50 dark:border-zinc-950"
                    }`}
                  />

                  <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-sm font-bold rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                        {release.version}
                      </span>
                      <span className="text-sm text-zinc-500 dark:text-zinc-500">
                        {release.build}
                      </span>
                      {release.date && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400">
                          {release.date}
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {release.changes.map((change) => (
                        <li
                          key={change}
                          className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                          {change}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={release.compareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-orange-600 dark:text-orange-400 hover:underline"
                    >
                      Full changelog <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/TeamAuraMusic/AuraMusic/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
            >
              View All Releases on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
