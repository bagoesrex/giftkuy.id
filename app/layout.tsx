import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gift Kuy - Kirim Hadiah Digital Instan",
  description:
    "Platform virtual gift untuk mengirim hadiah digital, kado online, dan voucher secara cepat dan praktis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col font-jakarta-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
