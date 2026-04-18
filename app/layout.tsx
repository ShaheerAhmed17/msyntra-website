import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script"; // ✅ ADD THIS
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

      {/* ✅ GTM SCRIPT (goes at top level, not inside body) */}
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PH6J6GZF');`
          }}
        />
      </head>

      <body className={`${inter.variable} ${geistMono.variable} min-h-screen bg-background text-foreground font-sans antialiased flex flex-col`}>

        {/* ✅ GTM NOSCRIPT (must be first inside body) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PH6J6GZF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <InteractiveLighting />
        {children}
      </body>
    </html>
  );
}
