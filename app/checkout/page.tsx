"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [error, setError] = useState("");

  useEffect(() => {
    const beginCheckout = async () => {
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unable to begin checkout.");
        }

        if (!data.url) {
          throw new Error("Checkout link was not returned.");
        }

        window.location.href = data.url;
      } catch (checkoutError) {
        console.error("Checkout error:", checkoutError);
        setError("Checkout could not be opened. Please try again.");
      }
    };

    beginCheckout();
  }, []);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#FAF8F4] px-8 text-[#4F5A4D]">
      <div className="max-w-xl text-center">
        {!error ? (
          <>
            <h1 className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-light">
              Opening Checkout
            </h1>

            <p className="text-lg text-[#6F7A66]">
              You are being securely redirected to complete your purchase.
            </p>
          </>
        ) : (
          <>
            <h1 className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-light">
              Checkout Error
            </h1>

            <p className="mb-8 text-lg text-[#6F7A66]">{error}</p>

            <Link
              href="/"
              className="inline-block rounded-full bg-[#4F5A4D] px-8 py-4 text-white transition hover:opacity-90"
            >
              Return Home
            </Link>
          </>
        )}
      </div>
    </main>
  );
}