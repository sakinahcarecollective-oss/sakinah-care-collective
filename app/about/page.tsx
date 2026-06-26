export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#4F5A4D]">
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 lg:py-28">
        {/* Small Label */}
        <p className="mb-6 text-center text-sm uppercase tracking-[0.35em] text-[#A8B5A2]">
          About Us
        </p>

        {/* Heading */}
        <h1 className="mx-auto mb-8 max-w-4xl text-center text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
          About Sakinah Care Collective
        </h1>

        {/* Divider */}
        <div className="mb-16 flex justify-center">
          <div className="h-px w-24 bg-[#C9D1C4]" />
        </div>

        {/* Body Text */}
        <div className="mx-auto max-w-4xl space-y-10 text-center text-lg leading-10 text-[#66715E] md:text-2xl md:leading-[3rem]">
          <p>
            Sakinah Care Collective was created to help Muslim women reconnect
            with rest, nourishment, reflection, and faith-centered wellbeing.
          </p>

          <p>
            In a world that often demands more and more, we believe there is
            wisdom in slowing down, seeking sakinah, and embracing gentle care.
          </p>

          <p>
            Through thoughtfully curated care boxes, educational resources,
            and restorative practices, we hope to create moments of calm,
            healing, and connection.
          </p>
        </div>

        {/* Tasbeeh */}
        <div className="mt-4 flex justify-center -mb-8">
          <img
            src="/images/tasbeeh.jpg"
            alt="Tasbeeh"
            className="w-[500px] md:w-[650px] opacity-90 object-contain"
          />
        </div>
      </section>
    </main>
  );
}