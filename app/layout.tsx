import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

/* ============================================================
   FONTS — loaded via next/font/google from Stitch Redesign
   Playfair Display for headings & editorial titles
   Plus Jakarta Sans for UI, body, labels, and metadata
   ============================================================ */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

/* ============================================================
   GLOBAL METADATA DEFAULTS
   (per-page metadata in each page.tsx overrides these)
   ============================================================ */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "SPEAR | All-in-One Hotel PMS, Restaurant POS & Channel Manager",
    template: "%s | SPEAR",
  },
  description:
    "Unify hotel direct booking, PMS, restaurant POS, table management, kitchen inventory, and channel distribution in one platform. Book a live demo today.",
  keywords: [
    "hotel PMS",
    "restaurant POS software",
    "hospitality management platform",
    "hotel booking engine",
    "channel manager 2-way sync",
    "kitchen inventory software",
  ],
  authors: [{ name: "SPEAR" }],
  creator: "SPEAR",
  publisher: "SPEAR",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SPEAR",
    title: "SPEAR | All-in-One Hotel PMS, Restaurant POS & Channel Manager",
    description:
      "Unify hotel direct booking, PMS, restaurant POS, table management, kitchen inventory, and channel distribution in one platform. Book a live demo today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SPEAR — Hospitality Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPEAR | All-in-One Hotel PMS, Restaurant POS & Channel Manager",
    description:
      "Unify hotel direct booking, PMS, restaurant POS, table management, kitchen inventory, and channel distribution in one platform. Book a live demo today.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ============================================================
   ORGANIZATION JSON-LD — sitewide structured data
   ============================================================ */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SPEAR",
  description:
    "All-in-One Hospitality Management Software: Hotel PMS, Restaurant POS, and Channel Manager.",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-image.jpg`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@spearplatform.com",
  },
};

/* ============================================================
   ROOT LAYOUT
   ============================================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        {/* Organization JSON-LD — present on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
