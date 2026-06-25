import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Sakinah Care Collective",
  description: "Curated with Care. Rooted in Faith.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[#FAF8F4] text-[#4F5A4D]`}
      >
        <header className="sticky top-0 z-50 border-b border-[#EAE5DC] bg-[#FAF8F4]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-2xl font-light tracking-wide"
            >
              Sakinah Care Collective
            </Link>

            <nav className="flex items-center gap-8 text-sm uppercase tracking-[0.2em]">
              <Link href="/" className="transition hover:opacity-70">
                Home
              </Link>

              <Link href="/about" className="transition hover:opacity-70">
                About
              </Link>

              <Link href="/faq" className="transition hover:opacity-70">
                FAQ
              </Link>

              <Link href="/contact" className="transition hover:opacity-70">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-[#EAE5DC] bg-white">
          <div className="mx-auto max-w-7xl px-8 py-16">
            <div className="flex flex-col items-center text-center">
              <h3 className="mb-3 font-[family-name:var(--font-heading)] text-3xl font-light">
                Sakinah Care Collective
              </h3>

              <p className="mb-8 max-w-xl text-[#6F7A66]">
                Curated wellness experiences rooted in faith,
                reflection, and inner peace.
              </p>

              <div className="mb-8 flex flex-wrap justify-center gap-8 text-sm uppercase tracking-[0.15em]">
                <Link href="/" className="transition hover:opacity-70">
                  Home
                </Link>

                <Link href="/about" className="transition hover:opacity-70">
                  About
                </Link>

                <Link href="/faq" className="transition hover:opacity-70">
                  FAQ
                </Link>

                <Link href="/contact" className="transition hover:opacity-70">
                  Contact
                </Link>
              </div>

              <p className="text-sm text-[#A8B5A2]">
                © 2026 Sakinah Care Collective. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}