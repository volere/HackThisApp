import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/ui/global.css';


const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "Next Vulns",
  description: "Exploit and vulnerability testing ground",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
