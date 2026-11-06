import type { Metadata } from "next";
import { Montserrat, Libre_Baskerville } from "next/font/google";
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
  title: "MarisMathics",
  description: "Making Math Fun",
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
      <body>{children}</body>
    </html>
  );
}
