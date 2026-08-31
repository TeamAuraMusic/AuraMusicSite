import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const releases = [
  {
    version: "v3.1.0",
    build: "Build 28",
    date: "August 31, 2026",
    changes: [
      "Focused stability & polish update — hardened playback & streaming for 2026 YouTube enforcement (PO token attestation, URL probing, rate-limit handling, guest-client fallback)",
      "Fixed foreground notification crashes, media notifications not showing, and next-song / wrong-video advance bugs",
      "Resolved stream URL chunking and IO_BAD_HTTP_STATUS handling for reliable queue progression",
      "Extensive Android TV polish: unified scaling, video playback transitions, black-screen & surface restoration fixes, SponsorBlock/AutoMix guards",
      "Refined in-app screensaver (video with captions, prevents Dream overlay, audio-only) and enhanced lyrics defaults",
      "Fixed Discord Rich Presence — migrated to OkHttp (TLS fix), persisted OAuth scope, restored artist/song thumbnails",
      "Fixed library artwork: liked albums/playlists showing empty/black thumbnails — now fills missing thumbnailUrl and shows MusicNote fallback",
      "Made split ABI APKs actually smaller (~30% reduction) — per-ABI variants now contain only one ABI, universal keeps all 4",
      "Homepage layout toggle (grid/list), mini-player tweaks, expanded liquid-glass effects and full-bleed widget art",
      "Updated translations via Weblate: German, Chinese (Simplified), Russian, French, Spanish and Turkish",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v3.0.0...v3.1.0",
  },
  {
    version: "v3.0.0",
    build: "Build 27",
    date: "July 31, 2026",
    changes: [
      "AutoMix support for streamed music on mobile and Android TV",
      "Added Musixmatch and Paxsenix synchronized lyrics providers",
      "Expanded Android TV player, lyrics, video, navigation, and library experience",
      "Complete Last.fm settings and improved recommendations on Android TV",
      "Improved radio recommendations and YouTube Music login persistence",
      "Added signed APKs tailored for ARM64, ARMv7, x86, and x86_64 devices",
      "Fixed Android Auto detection and Discord OAuth login failures",
      "Added and refined Korean translations",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v2.9.0...v3.0.0",
  },
  {
    version: "v2.9.0",
    build: "Build 26",
    date: "July 13, 2026",
    changes: [
      "Discord integration rewritten with OAuth2 PKCE login and rich presence (still under active development)",
      "Major video playback stability and Android TV player improvements",
      "SponsorBlock segment loading and duration handling fixes",
      "Grouped search results by item type",
      "YouTube Music history sync and Last.fm scrobbling fixes",
      "Fixed Vosk voice recognition crash on Android 16",
      "Hindi, Turkish, and Simplified Chinese translation updates",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v2.8.0...v2.9.0",
  },
  {
    version: "v2.8.0",
    build: "Build 25",
    date: "June 23, 2026",
    changes: [
      "Android TV redesign with Spotify-style focused detail panel",
      "Continue Listening row on Google TV home screen",
      "Android TV navigation and focus improvements",
      "Major video playback stability fixes",
      "Lyrics fallbacks with LyricsPlus and Genius support",
      "Android 14 compatibility fixes",
      "Improved CI/CD pipeline and APK artifact naming",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v2.7.0...v2.8.0",
  },
  {
    version: "v2.7.0",
    build: "Build 24",
    date: "June 18, 2026",
    changes: [
      "Library Audiobooks with resume bookmarks",
      "Late Night Audio Mode and Surround Passthrough",
      "SponsorBlock integration for auto-skipping sponsor segments",
      "Tablet split-view and lock-screen playback improvements",
      "YouTube login session refresh and InnerTube fixes",
      "Many new translations: Chinese, German, Italian, Tamil, Arabic, Filipino",
      "Fixed Rush and BetterLyrics providers",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v2.6.0...v2.7.0",
  },
  {
    version: "v2.6.0",
    build: "Build 23",
    date: "June 6, 2026",
    changes: [
      "Lyrics font selection improvements",
      "AuraCanvas video backdrop enhancements",
      "YouTube API 2026 compatibility fixes",
      "Ko-fi funding support",
      "Fixed YouTube Music song parsing after InnerTube changes",
      "Improved AuraCanvas display logic and Thumbnail component",
      "Moved player canvases to full-screen background",
      "Removed CastButton from AuraCanvasOverlay for FOSS compatibility",
      "Fixed subscribed artists showing local songs instead of subscriber count",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v2.5.0...v2.6.0",
  },
  {
    version: "v2.5.0",
    build: "Build 22",
    date: "May 28, 2026",
    changes: [
      "AuraCanvas - Dynamic video backdrops for artist headers and album covers",
      "Improved AuraCanvasOverlay with TextureView, error handling, and fade-in animation",
      "BetterLyrics TTML fetching and parsing fixes",
      "SimpMusic HTML entity decoding fix",
      "Monochrome layer support for adaptive icons on Android 13+",
      "Changed client engine to cio",
      "Fixed start page playback and speed dial shuffle loading",
      "Updated Discord invite link to discord.gg/935CRM8u3",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v2.4.0...v2.5.0",
  },
  {
    version: "v2.4.0",
    build: "Build 21",
    date: "",
    changes: [
      "True 1080p+ video playback — merged high-resolution video streams with premium audio",
      "Server-powered Karaoke integration with dedicated ML server (karaoke.auramusic.site)",
      "Full PO token + BotGuard implementation for reliable playback and automatic recovery",
      "Enhanced Lyrics overhaul with brand new Monochrome animated style and word-level rendering",
      "Instrumental indicators and connected lines now work correctly in enhanced lyrics mode",
      "Dramatically sharper thumbnails and artwork — upgraded resizer for all Google CDN hosts",
      "Modernized About screen with beautiful 2-column contributor grid and real GitHub avatars",
      "Added Liberapay support for donations",
      "Translation contributors now proudly listed with profile pictures",
      "New French, Spanish, and Portuguese translations via Weblate",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v2.3.0...v2.4.0",
  },
  {
    version: "v2.3.0",
    build: "Build 20",
    date: "",
    changes: [
      "Hardware integration with Bluetooth device support and audio device management",
      "Wake-up and snooze alarm functionality with hardware ecosystem integration",
      "Enhanced lyrics with instrumental indicators and interval timing improvements",
      "Added intro wavy circular progress indicator before first vocal line",
      "Custom font support with Google Fonts integration and Material 3 typography",
      "Internationalization support with Weblate translation badge",
      "Enhanced thumbnail quality for all YouTube videos and streamed songs",
      "Fixed blurry album and item thumbnails throughout the app",
      "Added audio device picker style for mini-player",
      "Improved UI with smooth transitions and better visual indicators",
      "Replaced circular refresh indicator with ContainedLoadingIndicator",
      "Moved queue to left in old player design",
      "Enhanced share as image functionality with background options",
      "Fixed NPE crash in backToMain navigation",
      "Fixed TV settings focus restoration and video mode persistence",
      "Fixed Bluetooth smart-cast errors and hardware integration issues",
      "Reduced first vocal line delay to 1000ms (1 second)",
      "Fixed F-Droid Java version compatibility and build issues",
      "Updated JVM target to Java 21 for better compilation consistency",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v2.2.0...v2.3.0",
  },
  {
    version: "v2.2.0",
    build: "Build 19",
    date: "",
    changes: [
      "Full Android TV / Google TV support with 10-foot UI",
      "TV Home Screen with Quick Picks, Forgotten Favorites, Keep Listening, Similar Recommendations",
      "TV Player with full-screen controls, queue sidebar, sleep timer, and lyrics",
      "D-pad navigation with custom navigator and focus management",
      "TV Settings: Appearance, Content, Storage, Updater, About",
      "Radio Queue on TV — single songs now load full radio queues",
      "Voice command improvements with AEC, NoiseSuppressor, and RMS filtering",
      "Confidence and audio energy filtering to reduce false wake word triggers",
      "Added sleep timer and lyrics buttons to queue bar (new player)",
      "Added shuffle button with 4-dot animation (old player)",
      "Increased compact square widget to 4x4, modernized all widgets",
      "Full-cover album art backgrounds for widgets",
      "Gradient colors to dynamic icon foreground",
      "Fixed ForegroundServiceDidNotStartInTimeException on Android 14+",
      "Fixed ANR caused by VOSK native cleanup blocking main thread",
      "Fixed VOSK detector memory leaks and false wake word triggers",
      "Fixed TV compilation errors, navigation focus, and white screen issues",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v2.1.0...v2.2.0",
  },
  {
    version: "v2.1.0",
    build: "Build 18",
    date: "",
    changes: [
      "Major release with significant UI/UX improvements and bug fixes",
      "Added liquid glass customization options with blur radius, corner radius, and opacity controls",
      "Added Discord and Telegram links to About screen",
      "Improved shuffle button with 4-dot animation",
      "Fixed video fit mode persistence and loading speed",
      "Fixed lyrics provider preference to always respect user selection",
      "Database migrations fixed for seamless upgrades",
      "Track loaded song ID and stop loading when mediaMetadata matches",
      "Fixed Rush lyrics sync by converting duration ms to seconds",
      "Added auto-play on first frame in video mode",
      "Removed unnecessary video toast message after successful load",
      "Updated tinypinyin version to 2.0.1",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/2.0.0...v2.1.0",
  },
  {
    version: "v1.0.14",
    build: "Build 15",
    date: "",
    changes: [
      "New real-time audio visualizer with wave animations",
      "Improved Listen Together experience and navigation placement",
      "More reliable subtitles and caption handling with language preference support",
      "Lyrics timing fixes and synchronization improvements",
      "Enhanced video playback controls and layout",
      "AudioVisualizerView using Android Visualizer API for live wave rendering",
      "AudioVisualizerSlider rewritten with ocean wave style replacing traditional progress bar",
      "Liquid (Samsung-inspired) notification bar wave slider",
      "Listen Together now configurable at top of navigation bar",
      "Listen Together card added to Home screen",
      "Added subtitle language preference in player settings",
      "Captions enabled by default in video mode using VideoLyricsOverlay",
      "Improved caption fetching with proper request headers and MOBILE/ANDROID client fallback",
      "Fixed malformed timestamps in RushLyrics with proper line timing generation",
      "Fixed invalid timestamp handling and lyrics highlighting issues",
      "Added Fixed width (FIXED_WIDTH) video scaling option",
      "Fixed compilation issues, duplicate declarations, and animation easing issues",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v1.0.13...v1.0.14",
  },
  {
    version: "v1.0.13",
    build: "Build 14",
    date: "",
    changes: [
      "Native Video Subtitles — implemented ExoPlayer native subtitle rendering, auto-fetches YouTube captions when switching to video mode, CC button to toggle subtitles on/off",
      "F-Droid Compatibility — removed Google ML Kit dependency (LanguageDetectionHelper), added Fastlane metadata for F-Droid submission",
      "Liquid Glass Effect Improvements — fixed dark mode with pure black theme, proper toggle UI in appearance settings",
      "Video Playback Improvements — video songs now start at 0:00, regular songs preserve position when switching to video, parallel fetching of captions and stream URL for faster loading",
      "Fixed numerous build errors and compilation issues, missing imports, MediaLibrarySessionCallback constants, subtitle track selection, caption fetching reliability, video autoplay and thumbnail layout issues",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v1.0.12...v1.0.13",
  },
  {
    version: "v1.0.12",
    build: "Build 13",
    date: "",
    changes: [
      "Hero Carousel Redesign — title and artist now displayed below thumbnail, full-cover carousel thumbnails with shimmer placeholder during loading, increased carousel heights",
      "Added Trending Now section with carousel on Home Screen, thumbnail cropping for small screens, responsive design for tablets",
      "Improved PayPal icon/logo across the app",
      "Removed video fill mode for cleaner interface",
      "Animated About screen icon with build type display",
      "Fixed video autoplay timing issues",
      "Improved video lyrics sync timing",
      "Fixed Explore screen not displaying mixes, podcasts, or albums",
      "Fixed duplicate Music Videos for You sections in HomeViewModel",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v1.0.11...v1.0.12",
  },
  {
    version: "v1.0.11",
    build: "Build 12",
    date: "",
    changes: [
      "Added support for podcasts and episodic content across the application",
      "Introduced Top 100 Charts with extended categories and sections",
      "Improved video mode — automatic activation for video-enabled songs with simplified UI",
      "Enhanced About screen with application icon integration, tablet layout support, improved animations",
      "Improved UI across Explore screen, Search, and Top Charts sections",
      "Fixed compilation errors affecting Explore screen, YouTube integration, podcast features",
      "Fixed PayPal donation link to open in external browser",
      "Fixed video mode syntax, drawable resources, exhaustive when expressions, deprecated API usage",
      "Added GitHub Actions workflow for automated builds",
    ],
    compareUrl:
      "https://github.com/TeamAuraMusic/AuraMusic/compare/v1.0.10...v1.0.11",
  },
  {
    version: "v1.0.10",
    build: "Build 11",
    date: "",
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
