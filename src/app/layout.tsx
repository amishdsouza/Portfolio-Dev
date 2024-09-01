import type { Metadata } from "next";
import { DM_Sans, Inter, Calistoga } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

// Initialize fonts with necessary subsets and variables
const dmSans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Light SaaS Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#ffffff]")}>
        {children}
      </body>
    </html>
  );
}
// DM_Sans,Inter,Calistoga,Montserrat,Poppins,Oswald,Open_Sans,
