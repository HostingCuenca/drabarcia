import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL, WHATSAPP_NUMBER } from "./lib/site";
import { Quicksand, Playfair_Display } from "next/font/google";
import "./globals.css";

const META_PIXEL_ID = "1100919259049411";

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
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: "Dra. Barcia | Psicóloga Clínica Online",
    template: "%s | Dra. Barcia",
  },
  description:
    "Psicóloga clínica con más de 20 años de experiencia. Terapia online individual y de pareja, en Ecuador y en el exterior. Agenda tu cita informativa.",
  keywords: [
    "psicóloga online",
    "psicóloga clínica",
    "terapia online",
    "terapia individual online",
    "terapia de pareja online",
    "psicóloga Ecuador",
    "psicóloga Cuenca",
    "salud mental",
    "bienestar emocional",
    "psicología clínica",
    "ansiedad",
    "autoestima",
    "Dra. Barcia",
  ],
  openGraph: {
    title: "Dra. Barcia | Psicóloga Clínica Online",
    description:
      "Terapia online individual y de pareja, en un espacio seguro, cálido y sin juicios. Más de 20 años acompañando procesos.",
    url: SITE_URL,
    type: "website",
    locale: "es_EC",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Barcia | Psicóloga Clínica Online",
    description:
      "Terapia online individual y de pareja. Agenda tu cita informativa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// JSON-LD: es lo que permite a Google mostrar servicios, precios y zona de atención.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Dra. Barcia",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  description:
    "Psicóloga clínica con más de 20 años de experiencia. Terapia online individual y de pareja, con enfoque humanista e integrativo.",
  email: CONTACT_EMAIL,
  telephone: `+${WHATSAPP_NUMBER}`,
  priceRange: "$20 - $100",
  areaServed: [
    { "@type": "Country", name: "Ecuador" },
    { "@type": "Place", name: "Atención online internacional" },
  ],
  availableLanguage: "es",
  knowsAbout: [
    "Ansiedad",
    "Autoestima",
    "Duelo",
    "Terapia de pareja",
    "Crecimiento personal",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "16:00",
    closes: "20:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios (100% online)",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Terapia individual online" },
        price: "80",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Terapia de pareja online" },
        price: "100",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Cita informativa online" },
        price: "20",
        priceCurrency: "USD",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${quicksand.variable} ${playfair.variable} antialiased font-[var(--font-quicksand)]`}
      >
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {children}
      </body>
    </html>
  );
}
