import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { InteractiveLighting } from "@/components/interactive-lighting";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Msyntra | AI Automation Solutions",
  description: "We help businesses automate operations using AI systems that reduce cost and increase efficiency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} min-h-screen bg-background text-foreground font-sans antialiased flex flex-col`}>
        <InteractiveLighting />
        {children}
      </body>
    </html>
  );
}