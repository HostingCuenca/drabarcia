import type { Metadata } from "next";
import { Quicksand, Playfair_Display } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dra. Barcia | Psicóloga Clínica",
  description:
    "Psicóloga clínica especializada en bienestar emocional. Terapia individual, de pareja y online. Agenda tu cita hoy.",
  keywords: [
    "psicóloga",
    "psicóloga clínica",
    "terapia",
    "terapia individual",
    "terapia de pareja",
    "terapia online",
    "salud mental",
    "bienestar emocional",
    "psicología clínica",
    "ansiedad",
    "autoestima",
    "Dra. Barcia",
  ],
  openGraph: {
    title: "Dra. Barcia | Psicóloga Clínica",
    description:
      "Psicóloga clínica especializada en bienestar emocional. Terapia personalizada en un ambiente cálido y acogedor.",
    type: "website",
    locale: "es_ES",
    siteName: "Dra. Barcia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Barcia | Psicóloga Clínica",
    description:
      "Psicóloga clínica especializada en bienestar emocional. Agenda tu cita hoy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${quicksand.variable} ${playfair.variable} antialiased font-[var(--font-quicksand)]`}
      >
        {children}
      </body>
    </html>
  );
}
