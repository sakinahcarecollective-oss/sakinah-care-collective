export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#4F5A4D] flex items-center justify-center px-6">
      <section className="mx-auto max-w-3xl text-center">

        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#A8B5A2]">
          Thank You!
        </p>

        <h1 className="mb-8 font-[family-name:var(--font-heading)] text-5xl font-light leading-tight md:text-6xl">
          Your Sakinah Box is on its way.
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-[#6F7A66] md:text-xl">
          Thank you for supporting Sakinah Care Collective. Your order has
          been received, and we are preparing your carefully curated wellness
          experience.
        </p>

        <p className="text-lg leading-relaxed text-[#6F7A66] md:text-xl">
          May your box bring moments of nourishment, reflection, and sakinah.
        </p>

      </section>
    </main>
  );
}