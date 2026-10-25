import CareerExplorer from "@/components/career/CareerExplorer";

export const metadata = { title: "Explore a career – Nexovia" };

export default function CareerPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-dark">Explore a career</p>
      <h1 className="mt-2 font-heading text-3xl font-bold text-navy sm:text-4xl">
        What do you want to know more about?
      </h1>
      <p className="mb-8 mt-2 max-w-2xl text-ink/80">
        Search for a job you already have in mind, or browse by category.
      </p>
      <CareerExplorer />
    </section>
  );
}