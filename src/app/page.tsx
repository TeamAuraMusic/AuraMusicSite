import {
  Download,
  Music,
  Headphones,
  Mic,
  Users,
  ListMusic,
  SlidersHorizontal,
  Wifi,
  Palette,
  BookOpen,
  Heart,
  Shield,
  ChevronRight,
  Star,
  Volume2,
  Timer,
  Video,
} from "lucide-react";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import FaqAccordion from "@/components/FaqAccordion";
import DarkModeToggle from "@/components/DarkModeToggle";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import GitHubStats from "@/components/GitHubStats";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const GITHUB_REPO = "https://github.com/TeamAuraMusic/AuraMusic";
const DOWNLOAD_URL =
  "https://github.com/TeamAuraMusic/AuraMusic/releases/latest/download/AuraMusic.apk";
const RELEASES_URL = "https://github.com/TeamAuraMusic/AuraMusic/releases";

const screenshots = [
  { src: "/screenshots/1.jpg", alt: "Home screen with Quick Picks and Keep Listening" },
  { src: "/screenshots/2.jpg", alt: "Now Playing screen with album art" },
  { src: "/screenshots/3.jpg", alt: "Synced lyrics display" },
  { src: "/screenshots/4.jpg", alt: "Artist page with top songs" },
  { src: "/screenshots/5.jpg", alt: "Music recognition (Shazam)" },
  { src: "/screenshots/6.jpg", alt: "Listen Together with friends" },
];

const features = [
  {
    icon: Music,
    title: "YouTube Music Integration",
    description:
      "Play any song or video from YouTube Music. Access your library, playlists, and recommendations seamlessly.",
  },
  {
    icon: Video,
    title: "Video Mode",
    description:
      "Watch official music videos with swipe gestures for brightness/volume, smart search, and selectable quality (360p–1080p). Now auto-fetches videos for regular songs.",
  },
  {
    icon: Headphones,
    title: "Background Playback",
    description:
      "Keep listening while using other apps. Your music never stops, even with the screen off.",
  },
  {
    icon: BookOpen,
    title: "Live Lyrics",
    description:
      "Follow along with time-synced lyrics from Kugou, LRCLib, RushLyrics, and BetterLyrics with word-by-word highlighting.",
  },
  {
    icon: Download,
    title: "Offline Playback",
    description:
      "Download and cache songs for offline listening. Enjoy your music anywhere, no connection needed.",
  },
  {
    icon: SlidersHorizontal,
    title: "Equalizer & Audio Controls",
    description:
      "Fine-tune your sound with a built-in equalizer, custom presets, tempo/pitch adjustment, and skip silence.",
  },
  {
    icon: Mic,
    title: "Music Recognition",
    description:
      "Identify any song playing around you with built-in Shazam-powered recognition. Instant results.",
  },
  {
    icon: Users,
    title: "Listen Together",
    description:
      "Create rooms and listen to music in real-time with friends. Shared playback, synced perfectly.",
  },
  {
    icon: Palette,
    title: "Material 3 Design",
    description:
      "A beautiful, modern UI following Google's latest Material Design guidelines. Light, dark, black, and dynamic themes.",
  },
  {
    icon: ListMusic,
    title: "Playlist Management",
    description:
      "Import, create, and manage playlists. Reorder songs in your playlist or queue with ease.",
  },
  {
    icon: Volume2,
    title: "Audio Normalization",
    description:
      "Consistent volume across all tracks. No more sudden volume jumps between songs.",
  },
  {
    icon: Wifi,
    title: "Account Sync",
    description:
      "Log in with your YouTube Music account. Sync songs, artists, albums, and playlists across devices.",
  },
  {
    icon: Timer,
    title: "Sleep Timer",
    description:
      "Set a timer to stop playback automatically. Perfect for falling asleep to your favorite tunes.",
  },
];

const techStack = [
  { name: "Kotlin", description: "Modern, concise language for Android" },
  { name: "Jetpack Compose", description: "Declarative UI toolkit" },
  { name: "Material 3", description: "Latest design system" },
  { name: "Media3 ExoPlayer", description: "Powerful audio engine" },
  { name: "Hilt", description: "Dependency injection" },
  { name: "Room", description: "Local database" },
  { name: "Ktor", description: "Networking" },
  { name: "Coil", description: "Image loading" },
];

const faqs = [
  {
    q: "Is AuraMusic free?",
    a: "Yes! AuraMusic is completely free and open source under the GPL-3.0 license.",
  },
  {
    q: "Does it work on iOS?",
    a: "AuraMusic is currently Android-only (Android 8.0+). There are no plans for an iOS version at this time.",
  },
  {
    q: "Do I need a YouTube Music account?",
    a: "No, you can use AuraMusic without an account. However, logging in lets you sync your library, playlists, and get personalized recommendations.",
  },
  {
    q: "Is it available on the Play Store?",
    a: "AuraMusic is distributed via GitHub releases as a direct APK download. It's also compatible with F-Droid (FOSS variant).",
  },
  {
    q: "How does Listen Together work?",
    a: "Create a room, share the code with friends, and everyone hears the same music in real-time, synced via AuraMusicServer.",
  },
  {
    q: "Can I use it without an internet connection?",
    a: "Yes! Download songs for offline playback. Cached songs are available anytime without a connection.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* ─── Navigation ─── */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/app-icon.png"
              alt="AuraMusic"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-xl font-bold tracking-tight gradient-text">
              AuraMusic
            </span>
          </a>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Features
            </a>
            <a href="#screenshots" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Preview
            </a>
            <a href="#tech" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Tech Stack
            </a>
            <a href="#faq" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <DarkModeToggle />
            <a
              href={DOWNLOAD_URL}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            <MobileMenu downloadUrl={DOWNLOAD_URL} />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden py-24 sm:py-36">
          {/* Background glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto px-4 text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                <Star className="w-4 h-4 text-orange-500" />
                v1.0.9 — Complete Video Player Overhaul 🎬
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6">
                Your Ultimate{" "}
                <span className="gradient-text">YouTube Music</span>{" "}
                Client for Android
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                AuraMusic is a modern, open-source Android music player with YouTube Music
                integration, powerful audio features, live synced lyrics, and a beautiful
                Material 3 interface.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={DOWNLOAD_URL}
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
                >
                  <Download className="w-5 h-5" />
                  Download APK
                </a>
                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="mt-8">
                <GitHubStats />
              </div>
            </ScrollReveal>
            <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
              Android 8.0+ • Kotlin • GPL-3.0 License
            </p>
          </div>
        </section>

        {/* ─── Screenshots Carousel ─── */}
        <section id="screenshots" className="py-20 sm:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                See It in Action
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                A sleek dark interface that makes album art pop. Every screen is crafted with Material 3.
              </p>
            </ScrollReveal>
          </div>
          <div className="relative">
            <div className="flex animate-scroll-left w-max gap-6 px-4">
              {[...screenshots, ...screenshots].map((s, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[220px] sm:w-[260px] rounded-2xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={260}
                    height={560}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Features Grid ─── */}
        <section id="features" className="py-20 sm:py-28 bg-white dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Packed with Features
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  Everything you need for the best music experience on Android, and more.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 50}>
                  <div className="group p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-orange-300 dark:hover:border-orange-500/50 transition-all hover:shadow-lg h-full">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/10 to-pink-500/10 flex items-center justify-center mb-4 group-hover:from-orange-500/20 group-hover:to-pink-500/20 transition-colors">
                      <f.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Tech Stack ─── */}
        <section id="tech" className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Built with Modern Tech
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                  AuraMusic leverages the best Android development tools and libraries.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 75}>
                  <div className="text-center p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-md transition-shadow">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                      {t.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Open Source Banner ─── */}
        <section className="py-16 bg-gradient-to-r from-orange-500/5 to-pink-500/5 border-y border-zinc-200/50 dark:border-zinc-800/50">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                    100% Open Source
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  Transparent & Community Driven
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  AuraMusic is licensed under GPL-3.0. The entire source code is available
                  on GitHub. No tracking, no ads, no hidden agendas. Contribute, report
                  issues, or fork it — it&#39;s your music player.
                </p>
                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline"
                >
                  Explore on GitHub <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-xl">
                  <GithubIcon className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Frequently Asked Questions
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <FaqAccordion faqs={faqs} />
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Download CTA ─── */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Ready to Transform Your Listening?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Download AuraMusic now and experience YouTube Music the way it was meant
              to be — beautiful, powerful, and free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DOWNLOAD_URL}
                className="inline-flex items-center gap-2 px-10 py-4 text-lg font-bold rounded-full bg-white text-zinc-900 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                <Download className="w-5 h-5" />
                Download APK
              </a>
              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 text-lg font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                All Releases
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="py-12 border-t border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/app-icon.png"
                alt="AuraMusic"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-bold gradient-text">AuraMusic</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
              <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                GitHub
              </a>
              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                Releases
              </a>
              <a
                href="/changelog"
                className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                Changelog
              </a>
              <a
                href="/privacy"
                className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                Privacy
              </a>
              <a
                href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=franklinfinyange%40gmail.com&currency_code=USD&item_name=Support+Aura+Music"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                Donate
              </a>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-pink-500" /> by{" "}
              <a
                href="https://github.com/chila254"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                chila254
              </a>
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-zinc-400 dark:text-zinc-600">
            &copy; {new Date().getFullYear()} AuraMusic Project. Not affiliated with
            YouTube or Google LLC. GPL-3.0 License.
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
