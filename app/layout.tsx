import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClickRise Productions — We Help Brands Rise.",
  description: "Digital marketing, social media, creative production and web experiences built for measurable growth.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
