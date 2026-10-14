import FindFlow from "@/components/find/FindFlow";

export const metadata = { title: "Find my career – Nexovia" };

export default function FindPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-8 text-sm font-semibold uppercase tracking-widest text-violet">
        Find my career
      </h1>
      <FindFlow />
    </section>
  );
}