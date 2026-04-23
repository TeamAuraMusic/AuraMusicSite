"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Play,
  Music,
  ChevronLeft,
} from "lucide-react";

const AURAMUSIC_SCHEME = "auramusic://";
const GITHUB_REPO = "https://github.com/TeamAuraMusic/AuraMusic";
const TELEGRAM_URL = "https://t.me/AuraMusicUpdates";
const DISCORD_URL = "https://discord.gg/RAMPZy49K";

export default function PlaySongPage({ params }: { params: { videoId: string } }) {
  const videoId = params.videoId;
  const [isAppInstalled, setIsAppInstalled] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    checkAppInstalled();
  }, []);

  const checkAppInstalled = async () => {
    // Method 1: Try to open the app via intent/uRL scheme
    const appUrl = `${AURAMUSIC_SCHEME}play/${videoId}`;
    
    // Create a hidden iframe to test if the app can handle the URL
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = appUrl;
    
    const timeout = setTimeout(() => {
      // App not installed or didn't respond in time
      setIsAppInstalled(false);
      setIsChecking(false);
      document.body.removeChild(iframe);
    }, 1500);

    // Listen for page visibility change (app opened)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // App was opened successfully
        clearTimeout(timeout);
        setIsAppInstalled(true);
        setIsChecking(false);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        document.body.removeChild(iframe);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.body.appendChild(iframe);

    // Fallback: Try direct link
    window.location.href = appUrl;
  };

  const handleDownload = () => {
    window.location.href = `${GITHUB_REPO}/releases/latest/download/AuraMusic.apk`;
  };

  const handleOpenApp = () => {
    window.location.href = `${AURAMUSIC_SCHEME}play/${videoId}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icon.png"
              alt="AuraMusic"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-xl font-bold tracking-tight gradient-text">
              AuraMusic
            </span>
          </Link>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Telegram
          </a>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          {/* Status Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-8 text-center">
            {/* Animated Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-pink-500/10 flex items-center justify-center">
              {isChecking ? (
                <div className="w-8 h-8 border-3 border-orange-500 border-t-transparent rounded-full animate-spin" />
              ) : isAppInstalled ? (
                <Play className="w-10 h-10 text-orange-500" />
              ) : (
                <Download className="w-10 h-10 text-orange-500" />
              )}
            </div>

            <h1 className="text-2xl font-bold mb-2">
              {isChecking
                ? "Checking AuraMusic..."
                : isAppInstalled
                ? "Opening AuraMusic..."
                : "Get AuraMusic"}
            </h1>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
              {isChecking
                ? "Please wait while we check if AuraMusic is installed..."
                : isAppInstalled
                ? "The song will start playing shortly..."
                : "AuraMusic is not installed. Download it now to play this song."}
            </p>

            {/* Song Info */}
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 mb-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Now Playing</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Video ID: {videoId}
                </p>
              </div>
            </div>

            {/* Actions */}
            {!isChecking && (
              <div className="space-y-3">
                {!isAppInstalled && (
                  <>
                    <button
                      onClick={handleDownload}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                    >
                      <Download className="w-4 h-4" />
                      Download AuraMusic
                    </button>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Android 8.0+ • Free & Open Source
                    </p>
                  </>
                )}
                
                {isAppInstalled && (
                  <button
                    onClick={handleOpenApp}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                  >
                    <Play className="w-4 h-4" />
                    Open in AuraMusic
                  </button>
                )}

                <Link
                  href="/"
                  className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="mt-8 text-center">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
              With AuraMusic you can:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Play YouTube Music", "Download for offline", "Live lyrics", "Equalizer"].map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/icon.png"
              alt="AuraMusic"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="font-bold gradient-text text-sm">AuraMusic</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <a
              href={`${GITHUB_REPO}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              Releases
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              Telegram
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              Discord
            </a>
          </div>
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} AuraMusic
          </p>
        </div>
      </footer>
    </div>
  );
}
