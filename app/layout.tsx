import type { Metadata } from "next";
import { Montserrat, Libre_Baskerville } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

// Brand font for mathematical expressions (Tailwind class: font-math)
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marismathics.com"),
  title: "MarisMathics",
  description:
    "Making Math Fun: lightning-fast math challenges, clear explanations and a few laughs along the way.",
  openGraph: {
    siteName: "MarisMathics",
    title: "MarisMathics",
    description: "Making Math Fun",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${libreBaskerville.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
