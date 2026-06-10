import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'BJ\'s Wholesale Club | Bulk Savings in Columbia, MD',
  description: 'Discover incredible bulk savings on groceries, electronics, and more at BJ\'s Wholesale Club in Columbia, MD. Member-only pricing, online shopping, and convenient pickup.',
  keywords: ["BJ's Wholesale Club, wholesale, bulk savings, Columbia MD, groceries, electronics, membership, discounts, warehouse retailer"],
  openGraph: {
    "title": "BJ's Wholesale Club | Bulk Savings in Columbia, MD",
    "description": "Discover incredible bulk savings on groceries, electronics, and more at BJ's Wholesale Club in Columbia, MD. Member-only pricing, online shopping, and convenient pickup.",
    "url": "/",
    "siteName": "BJ's Wholesale Club",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-with-grocery-basket-from-supermarket-yellow_74190-15699.jpg",
        "alt": "BJ's Wholesale Club shopping cart"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "BJ's Wholesale Club | Bulk Savings in Columbia, MD",
    "description": "Discover incredible bulk savings on groceries, electronics, and more at BJ's Wholesale Club in Columbia, MD. Member-only pricing, online shopping, and convenient pickup.",
    "images": [
      "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-with-grocery-basket-from-supermarket-yellow_74190-15699.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
