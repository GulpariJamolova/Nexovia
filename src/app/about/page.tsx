export const metadata = { title: "About – Nexovia" };

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-navy">About Nexovia</h1>
      <p className="mt-4 text-lg text-ink/75">
        Nexovia helps students discover careers that fit them, then shows what those careers are
        really like, so school subjects start to make sense.
      </p>
      <p className="mt-4 rounded-xl bg-lavender p-4 text-sm text-ink/80">
        Content is generated with AI and may contain mistakes. Please verify important information
        with a teacher or trusted source.
      </p>
    </section>
  );
}