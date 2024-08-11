import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dr. Ponco Agus Prasojo, Sp.B-KBD, MARS",
  description: "Spesialis Bedah Digestif",
  icons: {
    icon: "/image/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${urbanist.className} bg-white`}>{children}</body>
    </html>
  );
}
