import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Overstimulate Anime",
  description: "A new home for independent manga, webcomics, and anime-inspired stories.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}