"use client";

import { Star, Download, Tag } from "lucide-react";
import { useState, useEffect } from "react";

interface Stats {
  stars: number;
  downloads: number;
  version: string;
}

async function fetchStats(): Promise<Stats> {
  try {
    const [repoRes, releasesRes] = await Promise.all([
      fetch("https://api.github.com/repos/TeamAuraMusic/AuraMusic"),
      fetch("https://api.github.com/repos/TeamAuraMusic/AuraMusic/releases"),
    ]);

    const repo = await repoRes.json();
    const releases = await releasesRes.json();

    let totalDownloads = 0;
    let latestVersion = "";

    if (Array.isArray(releases) && releases.length > 0) {
      latestVersion = releases[0].tag_name || "";
      for (const release of releases) {
        for (const asset of release.assets || []) {
          totalDownloads += asset.download_count || 0;
        }
      }
    }

    return {
      stars: repo.stargazers_count || 0,
      downloads: totalDownloads,
      version: latestVersion,
    };
  } catch {
    return { stars: 0, downloads: 0, version: "—" };
  }
}

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats>({
    stars: 0,
    downloads: 0,
    version: "—",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats().then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  const items = [
    { icon: Star, label: "Stars", value: stats.stars.toLocaleString() },
    { icon: Download, label: "Downloads", value: stats.downloads.toLocaleString() },
    { icon: Tag, label: "Version", value: stats.version },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="text-center p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 animate-pulse"
          >
            <div className="w-4 h-4 bg-zinc-200 dark:bg-zinc-700 rounded mx-auto mb-1" />
            <div className="w-12 h-4 bg-zinc-200 dark:bg-zinc-700 rounded mx-auto" />
            <div className="w-10 h-2 bg-zinc-200 dark:bg-zinc-700 rounded mx-auto mt-1" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
      {items.map((item) => (
        <div
          key={item.label}
          className="text-center p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
        >
          <item.icon className="w-4 h-4 text-orange-500 mx-auto mb-1" />
          <p className="text-sm font-bold">{item.value}</p>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
