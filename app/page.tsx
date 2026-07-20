"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FAF8F4] text-[#4F5A4D]">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-8 py-20 text-center">

        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <img
            src="/images/sakinah-logo.png"
            alt="Sakinah Care Collective Logo"
            className="w-[260px] md:w-[340px] object-contain"
          />
        </div>

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#A8B5A2]">
          Curated Wellness for Muslim Women
        </p>

        <h1 className="mx-auto mb-6 max-w-5xl font-[family-name:var(--font-heading)] text-6xl font-light leading-tight md:text-8xl">
          Curated with Care.
          <br />
          Rooted in Faith.
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[#6F7A66]">
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
      <section className="mx-auto max-w-7xl px-8 pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#A8B5A2]">
              Signature Offering
            </p>

            <h2 className="mb-6 font-[family-name:var(--font-heading)] text-5xl font-light">
              The Sakinah Box
            </h2>

            <p className="text-lg leading-relaxed text-[#6F7A66]">
              Our signature care box brings together meaningful wellness
              essentials, intentional self-care, and faith-centered
              nourishment for Muslim women.
            </p>
          </div>


          <div className="flex justify-center">
            <div className="flex h-[420px] w-full max-w-[600px] flex-col items-center justify-center rounded-[40px] border border-[#D9DED4] bg-white/50 px-10 text-center shadow-sm">

              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#A8B5A2]">
                Available Now
              </p>

              <h3 className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-light">
                The Sakinah Box
              </h3>

              <p className="mb-8 max-w-md text-lg leading-relaxed text-[#6F7A66]">
                A thoughtfully curated wellness experience designed to
                nurture reflection, nourishment, and inner peace.
              </p>

              <button
                onClick={async () => {
                  const response = await fetch("/api/checkout", {
                    method: "POST",
                  });

                  const data = await response.json();

                  window.location.href = data.url;
                }}
                className="rounded-full bg-[#4F5A4D] px-8 py-4 text-white transition hover:opacity-90"
              >
                Buy Your Sakinah Box — $45
              </button>

            </div>
          </div>

        </div>
      </section>
      {/* MISSION */}
      <section className="mx-auto max-w-7xl px-8 py-24 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#A8B5A2]">
          Our Mission
        </p>

        <h2 className="mb-8 font-[family-name:var(--font-heading)] text-5xl font-light">
          Wellness Grounded in Sakinah
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-xl leading-relaxed text-[#6F7A66]">
          Sakinah Care Collective exists to create meaningful wellness
          experiences that support balance, reflection, and inner peace
          through a faith-centered lens.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1">
            <h3 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-light">
              Nourish
            </h3>

            <p className="mb-6 leading-relaxed text-[#6F7A66]">
              Thoughtfully selected wellness essentials designed to care
              for the body and create moments of comfort.
            </p>

            <p className="text-sm uppercase tracking-wider text-[#A8B5A2]">
              Herbal Tea • Bone Broth • Nourishing Treats • Comfort Essentials
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1">
            <h3 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-light">
              Reflect
            </h3>

            <p className="mb-6 leading-relaxed text-[#6F7A66]">
              Faith-centered resources that encourage mindfulness,
              gratitude, remembrance, and connection with Allah.
            </p>

            <p className="text-sm uppercase tracking-wider text-[#A8B5A2]">
              Reflection Cards • Duas • Tasbeeh • Guided Prompts
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1">
            <h3 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-light">
              Restore
            </h3>

            <p className="mb-6 leading-relaxed text-[#6F7A66]">
              An intentional experience that helps create space for
              rest, renewal, and a return to sakinah.
            </p>

            <p className="text-sm uppercase tracking-wider text-[#A8B5A2]">
              Gentle Rituals • Breathing Practices • Reflection • Rest
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-4xl rounded-[40px] bg-white p-14 text-center shadow-sm">
          <p className="mb-6 font-[family-name:var(--font-heading)] text-3xl font-light leading-relaxed">
            “Verily, in the remembrance of Allah do hearts find rest.”
          </p>

          <p className="text-[#6F7A66]">
            Qur&apos;an 13:28
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#4F5A4D] p-16 text-center text-white">
          <h2 className="mb-6 font-[family-name:var(--font-heading)] text-5xl font-light">
            Ready to Begin Your Journey?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            Experience intentional wellness, reflection, and nourishment
            through the Sakinah Box.
          </p>

          <button
            onClick={async () => {
              const response = await fetch("/api/checkout", {
                method: "POST",
              });

              const data = await response.json();

              window.location.href = data.url;
            }}
            className="rounded-full bg-white px-8 py-4 text-[#4F5A4D] transition hover:opacity-90"
          >
            Purchase Your Sakinah Box — $45
          </button>
        </div>
      </section>

    </main>
  );
}