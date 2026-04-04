"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Preview" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#faq", label: "FAQ" },
];

export default function MobileMenu({ downloadUrl }: { downloadUrl: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menuContent = open ? (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[9998] bg-black/60"
        onClick={() => setOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className="fixed top-0 right-0 z-[9999] h-full w-72 shadow-2xl overflow-y-auto border-l border-zinc-200 dark:border-zinc-800"
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-zinc-200/50 dark:border-zinc-800/50">
          <span className="text-lg font-bold gradient-text">AuraMusic</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="p-4">
          <a
            href={downloadUrl}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" />
            Download APK
          </a>
        </div>
      </div>
    </>
  ) : null;

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {mounted && menuContent && createPortal(menuContent, document.body)}
    </div>
  );
}
