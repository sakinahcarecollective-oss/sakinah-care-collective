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
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 sm:px-6 md:flex-row md:justify-between md:px-8 md:py-6">
            <Link
              href="/"
              className="text-center font-[family-name:var(--font-heading)] text-2xl font-light tracking-wide"
            >
              Sakinah Care Collective
            </Link>

            <nav className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-3 text-xs uppercase tracking-[0.12em] sm:gap-x-6 sm:text-sm sm:tracking-[0.16em] md:w-auto md:flex-nowrap md:gap-8 md:tracking-[0.2em]">
              <Link
                href="/"
                className="shrink-0 whitespace-nowrap transition hover:opacity-70"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="shrink-0 whitespace-nowrap transition hover:opacity-70"
              >
                About
              </Link>

              <Link
                href="/faq"
                className="shrink-0 whitespace-nowrap transition hover:opacity-70"
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="shrink-0 whitespace-nowrap transition hover:opacity-70"
              >
                Contact
              </Link>

              <Link
                href="/checkout"
                className="shrink-0 whitespace-nowrap transition hover:opacity-70"
              >
                Checkout
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-[#EAE5DC] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <div className="flex flex-col items-center text-center">
              <h3 className="mb-3 font-[family-name:var(--font-heading)] text-3xl font-light">
                Sakinah Care Collective
              </h3>

              <p className="mb-8 max-w-xl text-[#6F7A66]">
                Curated wellness experiences rooted in faith, reflection, and
                inner peace.
              </p>

              <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-4 text-xs uppercase tracking-[0.12em] sm:gap-8 sm:text-sm sm:tracking-[0.15em]">
                <Link
                  href="/"
                  className="shrink-0 whitespace-nowrap transition hover:opacity-70"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="shrink-0 whitespace-nowrap transition hover:opacity-70"
                >
                  About
                </Link>

                <Link
                  href="/faq"
                  className="shrink-0 whitespace-nowrap transition hover:opacity-70"
                >
                  FAQ
                </Link>

                <Link
                  href="/contact"
                  className="shrink-0 whitespace-nowrap transition hover:opacity-70"
                >
                  Contact
                </Link>

                <Link
                  href="/checkout"
                  className="shrink-0 whitespace-nowrap transition hover:opacity-70"
                >
                  Checkout
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