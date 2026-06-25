export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#4F5A4D]">
      <section className="mx-auto max-w-4xl px-8 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#A8B5A2]">
          FAQ
        </p>

        <h1 className="mb-12 text-5xl font-light">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="mb-3 text-xl">
              Who is the Sakinah Box for?
            </h2>

            <p className="text-[#6F7A66]">
              Muslim women seeking greater rest, nourishment,
              reflection, and faith-centered wellbeing.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="mb-3 text-xl">
              How often will boxes be released?
            </h2>

            <p className="text-[#6F7A66]">
              We plan to offer thoughtfully curated
              experiences throughout the year.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="mb-3 text-xl">
              Will shipping be available nationwide?
            </h2>

            <p className="text-[#6F7A66]">
              Shipping details will be announced closer to launch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}