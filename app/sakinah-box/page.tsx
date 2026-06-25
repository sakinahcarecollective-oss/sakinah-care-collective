export default function SakinahBoxPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#4F5A4D]">
      <section className="mx-auto max-w-5xl px-8 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#A8B5A2]">
          The Sakinah Box
        </p>

        <h1 className="mb-8 text-5xl font-light">
          A Care Experience Rooted in Faith
        </h1>

        <p className="mb-12 max-w-3xl text-lg text-[#6F7A66]">
          The Sakinah Box is designed to support Muslim women
          through gentle practices of rest, nourishment,
          reflection, and nervous system regulation.
        </p>

        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <h2 className="mb-6 text-2xl">
            What's Inside
          </h2>

          <ul className="space-y-4 text-[#6F7A66]">
            <li>• Nervous System Reset Cards</li>
            <li>• Faith-Centered Reflection Prompts</li>
            <li>• Du'a & Dhikr Practices</li>
            <li>• Nourishment & Warmth Guidance</li>
            <li>• Rest Ritual Practices</li>
            <li>• Positive Reflections</li>
            <li>• Curated Care Tools</li>
          </ul>
        </div>

        <div className="mt-12 rounded-3xl bg-[#F1EDE5] p-10">
          <h2 className="text-4xl font-light mb-6 text-center">
            Why Sakinah?
          </h2>

          <p className="text-[#6F7A66]">
            Sakinah is often translated as tranquility, peace,
            and inner calm. Every element of the box is designed
            to help create moments of pause and reconnection in
            everyday life.
          </p>
        </div>
      </section>
    </main>
  );
}