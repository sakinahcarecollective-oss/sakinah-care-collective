"use client";

import Link from "next/link";

export default function Home() {
  const beginCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to begin checkout.");
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Checkout could not be opened. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#4F5A4D]">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-20">
        <div className="mb-10 flex justify-center sm:mb-12">
          <img
            src="/images/sakinah-official-logo.png"
            alt="Sakinah Care Collective"
            className="h-auto w-full max-w-[300px] object-contain sm:max-w-[340px] md:max-w-[430px]"
          />
        </div>

        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A8B5A2] sm:text-sm sm:tracking-[0.35em]">
          Curated Wellness for Muslim Women
        </p>

        <h1 className="mx-auto mb-6 max-w-5xl font-[family-name:var(--font-heading)] text-4xl font-light leading-tight sm:text-6xl md:text-8xl">
          Curated with Care.
          <br />
          Rooted in Faith.
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#6F7A66] sm:mb-12 sm:text-lg">
          Thoughtfully curated wellness experiences designed to nurture
          wellbeing, reflection, and inner peace.
        </p>

        <Link
          href="/contact"
          className="inline-block rounded-full bg-[#4F5A4D] px-8 py-4 text-white transition hover:opacity-90"
        >
          Join the Waitlist
        </Link>
      </section>

      {/* SIGNATURE OFFERING */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A8B5A2] sm:text-sm sm:tracking-[0.35em]">
              Signature Offering
            </p>

            <h2 className="mb-6 font-[family-name:var(--font-heading)] text-4xl font-light sm:text-5xl">
              The Sakinah Box
            </h2>

            <p className="text-base leading-relaxed text-[#6F7A66] sm:text-lg">
              Our signature care box brings together meaningful wellness
              essentials, intentional self-care, and faith-centered nourishment
              for Muslim women.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex min-h-[420px] w-full max-w-[600px] flex-col items-center justify-center rounded-[32px] border border-[#D9DED4] bg-white/50 px-5 py-12 text-center shadow-sm sm:rounded-[40px] sm:px-10 sm:py-14">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A8B5A2] sm:text-sm sm:tracking-[0.35em]">
                Available Now
              </p>

              <h3 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-light sm:text-5xl">
                The Sakinah Box
              </h3>

              <p className="mb-8 max-w-md text-base leading-relaxed text-[#6F7A66] sm:text-lg">
                A thoughtfully curated wellness experience designed to nurture
                reflection, nourishment, and inner peace.
              </p>

              <button
                type="button"
                onClick={beginCheckout}
                className="w-full max-w-sm rounded-full bg-[#4F5A4D] px-5 py-4 text-sm leading-snug text-white transition hover:opacity-90 sm:w-auto sm:px-8 sm:text-base"
              >
                Buy Your Sakinah Box — $45
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A8B5A2] sm:text-sm sm:tracking-[0.35em]">
          Our Mission
        </p>

        <h2 className="mb-8 font-[family-name:var(--font-heading)] text-4xl font-light sm:text-5xl">
          Wellness Grounded in Sakinah
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-[#6F7A66] sm:mb-16 sm:text-xl">
          Sakinah Care Collective exists to create meaningful wellness
          experiences that support balance, reflection, and inner peace through
          a faith-centered lens.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[32px] bg-white p-7 shadow-sm transition hover:-translate-y-1 sm:p-10">
            <h3 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-light">
              Nourish
            </h3>

            <p className="mb-6 leading-relaxed text-[#6F7A66]">
              Thoughtfully selected wellness essentials designed to care for
              the body and create moments of comfort.
            </p>

            <p className="text-sm uppercase tracking-wider text-[#A8B5A2]">
              Herbal Tea • Bone Broth • Nourishing Treats • Comfort Essentials
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-7 shadow-sm transition hover:-translate-y-1 sm:p-10">
            <h3 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-light">
              Reflect
            </h3>

            <p className="mb-6 leading-relaxed text-[#6F7A66]">
              Faith-centered resources that encourage mindfulness, gratitude,
              remembrance, and connection with Allah.
            </p>

            <p className="text-sm uppercase tracking-wider text-[#A8B5A2]">
              Reflection Cards • Duas • Tasbeeh • Guided Prompts
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-7 shadow-sm transition hover:-translate-y-1 sm:p-10">
            <h3 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-light">
              Restore
            </h3>

            <p className="mb-6 leading-relaxed text-[#6F7A66]">
              An intentional experience that helps create space for rest,
              renewal, and a return to sakinah.
            </p>

            <p className="text-sm uppercase tracking-wider text-[#A8B5A2]">
              Gentle Rituals • Breathing Practices • Reflection • Rest
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-8 text-center shadow-sm sm:rounded-[40px] sm:p-14">
          <p className="mb-6 font-[family-name:var(--font-heading)] text-2xl font-light leading-relaxed sm:text-3xl">
            “Verily, in the remembrance of Allah do hearts find rest.”
          </p>

          <p className="text-[#6F7A66]">Qur&apos;an 13:28</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-[#4F5A4D] px-5 py-12 text-center text-white sm:rounded-[40px] sm:p-16">
          <h2 className="mb-6 font-[family-name:var(--font-heading)] text-4xl font-light sm:text-5xl">
            Ready to Begin Your Journey?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base text-white/80 sm:text-lg">
            Experience intentional wellness, reflection, and nourishment
            through the Sakinah Box.
          </p>

          <button
            type="button"
            onClick={beginCheckout}
            className="w-full max-w-sm rounded-full bg-white px-5 py-4 text-sm leading-snug text-[#4F5A4D] transition hover:opacity-90 sm:w-auto sm:px-8 sm:text-base"
          >
            Purchase Your Sakinah Box — $45
          </button>
        </div>
      </section>
    </main>
  );
}