import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FAF8F4] text-[#4F5A4D]">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-8 py-24 text-center">

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

      {/* SAKINAH BOX */}
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
              The Sakinah Box is a thoughtfully curated wellness experience
              for Muslim women, bringing together meaningful resources,
              intentional self-care, and faith-centered inspiration in one
              beautiful offering.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/sakinah-box.png"
              alt="Sakinah Box"
              width={3000}
              height={3000}
              priority
              className="w-full max-w-[1200px] drop-shadow-2xl"
            />
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
            Join the Waitlist
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            Be the first to hear about upcoming offerings, wellness
            resources, and community updates.
          </p>

          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-4 text-[#4F5A4D] transition hover:opacity-90"
          >
            Join Now
          </Link>

        </div>

      </section>

    </main>
  );
}