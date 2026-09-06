import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://gsja-citi.vercel.app",
  ),
  title: "GSJA CiTi | Welcome Home",
  description:
    "GSJA CiTi di Ciputat Timur, Tangerang Selatan. Ibadah Umum setiap Minggu 10.00 WIB dan Youth 19.00 WIB. Gembala Parsaoran Pasaribu, S.Th., M.PdK.",
  keywords: [
    "GSJA CiTi",
    "GSJA",
    "gereja lokal",
    "jadwal ibadah Minggu",
    "komunitas Kristen",
  ],
  openGraph: {
    title: "GSJA CiTi | Sebuah tempat untuk bertumbuh",
    description:
      "Mengenal Kristus, menemukan keluarga, dan membawa kasih-Nya ke setiap ruang kehidupan.",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "GSJA CiTi — Sebuah tempat untuk bertumbuh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GSJA CiTi | Sebuah tempat untuk bertumbuh",
    description:
      "Mengenal Kristus, menemukan keluarga, dan membawa kasih-Nya ke setiap ruang kehidupan.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
