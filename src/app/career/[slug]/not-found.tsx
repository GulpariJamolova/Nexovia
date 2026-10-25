import Link from "next/link";

export default function CareerNotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-heading text-3xl font-bold text-navy">We couldn&apos;t find that career</h1>
      <p className="mt-2 text-ink/80">
        It may not be in Nexovia yet. Search the careers we do have, or let the questions suggest some.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/career" className="btn btn-primary">Explore careers</Link>
        <Link href="/find" className="btn btn-secondary">Find my career</Link>
      </div>
    </section>
  );
}
