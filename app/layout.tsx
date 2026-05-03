import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThumbnailCTR – Predict YouTube Thumbnail Performance",
  description: "Analyze thumbnail design elements, colors, text, and faces to predict click-through rates before publishing."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="edfdcce9-bb5b-4555-9d10-d5003139d5db"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
