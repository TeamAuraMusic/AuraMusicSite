"use client";

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
  Volume2,
  Timer,
  Video,
  Activity,
  X,
} from "lucide-react";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import FaqAccordion from "@/components/FaqAccordion";
import DarkModeToggle from "@/components/DarkModeToggle";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import GitHubStats from "@/components/GitHubStats";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const GITHUB_REPO = "https://github.com/TeamAuraMusic/AuraMusic";
const RELEASES_URL = "https://github.com/TeamAuraMusic/AuraMusic/releases";
const TELEGRAM_URL = "https://t.me/AuraMusicUpdates";
const DISCORD_URL = "https://discord.gg/H6Nvy6Fs7Z";

const DONATION_URLS = {
  paypal:
    "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=franklinfinyange%40gmail.com&currency_code=USD&item_name=Support+Aura+Music",
  kofi: "https://ko-fi.com/chila254",
  liberapay: "https://liberapay.com/chila254",
};

const DOWNLOAD_URLS = {
  standard:
    "https://github.com/TeamAuraMusic/AuraMusic/releases/latest/download/AuraMusic.apk",
  cast:
    "https://github.com/TeamAuraMusic/AuraMusic/releases/latest/download/AuraMusic-with-Google-Cast.apk",
  tv:
    "https://github.com/TeamAuraMusic/AuraMusic/releases/latest/download/AuraMusic-Tv.apk",
};

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 12.6 12.6 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

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
    icon: Activity,
    title: "Real-time Audio Visualizer",
    description:
      "Experience immersive wave animations using Android Visualizer API. Ocean wave-style progress bar and Liquid notification slider for stunning visuals.",
  },
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
      "Watch official music videos with swipe gestures for brightness/volume, smart search, selectable quality (360p–1080p), and native subtitles with CC toggle. Auto-fetches videos for video songs.",
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
      "Follow along with time-synced lyrics from Musixmatch, Paxsenix, LRCLib, BetterLyrics, and more, with word-by-word highlighting.",
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
      "Fine-tune your sound with AutoMix, a built-in equalizer, custom presets, tempo/pitch adjustment, and skip silence.",
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

function DownloadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [variant, setVariant] = useState<"standard" | "cast" | "tv">("standard");

  if (!isOpen) return null;

  const handleDownload = () => {
    window.location.href = DOWNLOAD_URLS[variant];
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-6 max-w-md w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-xl font-bold mb-4">Choose Your Build</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          Select which version of AuraMusic you want to install:
        </p>
        <div className="space-y-3 mb-6">
          <label
            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              variant === "standard"
                ? "border-orange-500 bg-orange-50 dark:bg-orange-500/10"
                : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-300"
            }`}
          >
            <input
              type="radio"
              name="variant"
              value="standard"
              checked={variant === "standard"}
              onChange={(e) => setVariant(e.target.value as "standard")}
              className="mt-1"
            />
            <div>
              <p className="font-semibold">Standard</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                No Google Cast support. Works on all Android devices (8.0+).
              </p>
            </div>
          </label>
          <label
            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              variant === "cast"
                ? "border-orange-500 bg-orange-50 dark:bg-orange-500/10"
                : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-300"
            }`}
          >
            <input
              type="radio"
              name="variant"
              value="cast"
              checked={variant === "cast"}
              onChange={(e) => setVariant(e.target.value as "cast")}
              className="mt-1"
            />
            <div>
              <p className="font-semibold">With Google Cast</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Includes Google Cast support. Requires Google Mobile Services
                (GMS).
              </p>
            </div>
          </label>
          <label
            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              variant === "tv"
                ? "border-orange-500 bg-orange-50 dark:bg-orange-500/10"
                : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-300"
            }`}
          >
            <input
              type="radio"
              name="variant"
              value="tv"
              checked={variant === "tv"}
              onChange={(e) => setVariant(e.target.value as "tv")}
              className="mt-1"
            />
            <div>
              <p className="font-semibold">Android TV</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                TV-optimized with 10-foot UI and D-pad navigation.
              </p>
            </div>
          </label>
        </div>
        <button
          onClick={handleDownload}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
      </div>
    </div>
  );
}

function DonateModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-6 max-w-md w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-xl font-bold mb-4">Support AuraMusic</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
          Choose a platform to support the project:
        </p>
        <div className="space-y-3">
          <a
            href={DONATION_URLS.kofi}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-orange-500 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 font-medium transition-colors"
          >
            Ko-fi
          </a>
          <a
            href={DONATION_URLS.liberapay}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-orange-500 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 font-medium transition-colors"
          >
            Liberapay
          </a>
          <a
            href={DONATION_URLS.paypal}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-orange-500 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 font-medium transition-colors"
          >
            PayPal
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  const openDownloadModal = () => setShowDownloadModal(true);
  const closeDownloadModal = () => setShowDownloadModal(false);
  const openDonateModal = () => setShowDonateModal(true);
  const closeDonateModal = () => setShowDonateModal(false);

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
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openDonateModal();
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
            >
              Donate
            </a>
            <button
              onClick={openDownloadModal}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <MobileMenu onDownloadClick={openDownloadModal} />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          {/* Background glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto px-4 text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md">
                <span className="w-3 h-3 rounded-full bg-white/20 flex items-center justify-center text-[8px] font-bold">N</span>
                v3.1.0 — Playback Hardening, Android TV Polish & Smaller APKs
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter leading-[1.1] mb-4">
                Your Ultimate{" "}
                <span className="gradient-text">YouTube Music</span>{" "}
                Client for Android
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-6 leading-relaxed">
                AuraMusic is a modern, open-source Android music player with YouTube Music
                integration, powerful audio features, live synced lyrics, and a beautiful
                Material 3 interface.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={openDownloadModal}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  Download APK
                </button>
                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
                >
                  <TelegramIcon className="w-4 h-4" />
                  Telegram
                </a>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
                >
                  <DiscordIcon className="w-4 h-4" />
                  Discord
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
        <section id="screenshots" className="py-10 sm:py-14 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                See It in Action
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
                A sleek dark interface that makes album art pop. Every screen is crafted with Material 3.
              </p>
            </ScrollReveal>
          </div>
          <div className="relative">
            <div className="flex animate-scroll-left w-max gap-4 px-4">
              {[...screenshots, ...screenshots].map((s, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[160px] sm:w-[200px] rounded-xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={200}
                    height={430}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Features Grid ─── */}
        <section id="features" className="py-12 sm:py-16 bg-white dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                  Packed with Features
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xl mx-auto">
                  Everything you need for the best music experience on Android.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-3">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 20}>
                  <div className="group p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-orange-300 dark:hover:border-orange-500/50 transition-all hover:shadow-md h-full">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/10 to-pink-500/10 flex items-center justify-center mb-2 group-hover:from-orange-500/20 group-hover:to-pink-500/20 transition-colors">
                      <f.icon className="w-4 h-4 text-orange-500" />
                    </div>
                    <h3 className="text-sm font-semibold mb-1">{f.title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Tech Stack ─── */}
        <section id="tech" className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                  Built with Modern Tech
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xl mx-auto">
                  AuraMusic leverages the best Android development tools and libraries.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {techStack.map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 50}>
                  <div className="text-center p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-md transition-shadow">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
                      {t.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Open Source Banner ─── */}
        <section className="py-10 bg-gradient-to-r from-orange-500/5 to-pink-500/5 border-y border-zinc-200/50 dark:border-zinc-800/50">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                    100% Open Source
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold mb-2">
                  Transparent & Community Driven
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                  AuraMusic is licensed under GPL-3.0. The entire source code is available
                  on GitHub. No tracking, no ads, no hidden agendas.
                </p>
                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline"
                >
                  Explore on GitHub <ChevronRight className="w-3 h-3" />
                </a>
              </div>
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <GithubIcon className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
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
        <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-500 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              Ready to Transform Your Listening?
            </h2>
            <p className="text-sm text-white/80 mb-6 max-w-xl mx-auto">
              Download AuraMusic now and experience YouTube Music the way it was meant
              to be — beautiful, powerful, and free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={openDownloadModal}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-white text-zinc-900 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                Download APK
              </button>
              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                All Releases
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="py-8 border-t border-zinc-200/50 dark:border-zinc-800/50">
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
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex gap-8">
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
              </div>
              <div className="flex gap-8">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors flex items-center gap-1"
                >
                  <TelegramIcon className="w-4 h-4" />
                  Telegram
                </a>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors flex items-center gap-1"
                >
                  <DiscordIcon className="w-4 h-4" />
                  Discord
                </a>
                <a
                  href="/changelog"
                  className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                >
                  Changelog
                </a>
              </div>
              <div className="flex gap-8">
                <a
                  href="/privacy"
                  className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openDonateModal();
                  }}
                  className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                >
                  Donate
                </a>
              </div>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-pink-500" /> by{" "}
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
          <p className="mt-4 text-center text-xs text-zinc-400 dark:text-zinc-600">
            &copy; {new Date().getFullYear()} AuraMusic Project. Not affiliated with
            YouTube or Google LLC. GPL-3.0 License.
          </p>
        </div>
      </footer>

      <BackToTop />

      <DownloadModal isOpen={showDownloadModal} onClose={closeDownloadModal} />
      <DonateModal isOpen={showDonateModal} onClose={closeDonateModal} />
    </div>
  );
}
