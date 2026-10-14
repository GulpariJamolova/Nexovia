import ResultsView from "@/components/find/ResultsView";

export const metadata = { title: "Your matches – Nexovia" };

export default function ResultsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">Careers that fit you</h1>
      <p className="mb-8 mt-2 text-ink/70">
        Based on your answers, here are some careers to explore.
      </p>
      <ResultsView />
    </section>
  );
}