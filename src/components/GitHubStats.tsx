import { Star, Download, Tag } from "lucide-react";

interface Stats {
  stars: number;
  downloads: number;
  version: string;
}

async function fetchStats(): Promise<Stats> {
  try {
    const [repoRes, releasesRes] = await Promise.all([
      fetch("https://api.github.com/repos/chila254/AuraMusic", {
        next: { revalidate: 3600 },
      }),
      fetch("https://api.github.com/repos/chila254/AuraMusic/releases", {
        next: { revalidate: 3600 },
      }),
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

export default async function GitHubStats() {
  const stats = await fetchStats();

  const items = [
    { icon: Star, label: "Stars", value: stats.stars.toLocaleString() },
    { icon: Download, label: "Total Downloads", value: stats.downloads.toLocaleString() },
    { icon: Tag, label: "Latest Version", value: stats.version },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
      {items.map((item) => (
        <div
          key={item.label}
          className="text-center p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
        >
          <item.icon className="w-5 h-5 text-orange-500 mx-auto mb-2" />
          <p className="text-lg font-bold">{item.value}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
