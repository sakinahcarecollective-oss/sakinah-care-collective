export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#4F5A4D]">
      <section className="mx-auto max-w-3xl px-8 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#A8B5A2]">
          Join the Waitlist
        </p>

        <h1 className="mb-8 font-[family-name:var(--font-heading)] text-5xl font-light">
          Be First to Know
        </h1>

        <p className="mb-12 text-lg text-[#6F7A66]">
          Join our waitlist to receive updates about upcoming Sakinah Boxes,
          product launches, wellness resources, and exclusive early access
          opportunities.
        </p>

        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <form
            action="https://formspree.io/f/mojoellq"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="mb-2 block text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-[#E5E0D8] p-4 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#E5E0D8] p-4 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                What are you most interested in?
              </label>

              <select
                name="interest"
                className="w-full rounded-xl border border-[#E5E0D8] p-4 focus:outline-none"
              >
                <option>Sakinah Box</option>
                <option>Wellness Resources</option>
                <option>Community Events</option>
                <option>All Updates</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Message (Optional)
              </label>

              <textarea
                name="message"
                rows={5}
                placeholder="Share anything you'd like us to know..."
                className="w-full rounded-xl border border-[#E5E0D8] p-4 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#4F5A4D] px-8 py-4 text-white transition hover:opacity-90"
            >
              Join the Waitlist
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-sm text-[#A8B5A2]">
          We respect your privacy and will never share your information.
        </p>
      </section>
    </main>
  );
}