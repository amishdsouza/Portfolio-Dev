import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

// Initialize fonts with necessary subsets and variables
const dmSans = DM_Sans({ subsets: ["latin"] });

// Metadata for the page
export const metadata: Metadata = {
  title: "Amish Dickson Dsouza",
  description: "Template created by Amish",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased bg-[#ffffff]")}>
        {children}
      </body>
    </html>
  );
}
