import type { Metadata } from "next";
import PlayPageClient from "./PlayPageClient";

type Props = {
  params: Promise<{ videoId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { videoId } = await params;
  const songUrl = `https://www.auramusic.site/play/${videoId}`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return {
    title: "Listen on AuraMusic",
    description:
      "Someone shared a song with you! Tap to listen on AuraMusic – a free, open-source YouTube Music client for Android.",
    openGraph: {
      title: "🎵 Listen on AuraMusic",
      description:
        "Tap to play this song in AuraMusic – free YouTube Music client with lyrics, offline playback & more.",
      url: songUrl,
      siteName: "AuraMusic",
      type: "website",
      images: [
        {
          url: thumbnailUrl,
          width: 480,
          height: 360,
          alt: "Song thumbnail",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "🎵 Listen on AuraMusic",
      description:
        "Tap to play this song in AuraMusic – free YouTube Music client with lyrics, offline playback & more.",
      images: [thumbnailUrl],
    },
    other: {
      "og:image": thumbnailUrl,
    },
  };
}

export default async function PlaySongPage({ params }: Props) {
  const { videoId } = await params;
  return <PlayPageClient videoId={videoId} />;
}
