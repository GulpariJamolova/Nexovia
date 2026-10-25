import ResultsView from "@/components/find/ResultsView";

export const metadata = { title: "Your career matches – Nexovia" };

export default function ResultsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <ResultsView />
    </section>
  );
}
