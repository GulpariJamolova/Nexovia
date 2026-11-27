import Link from "next/link";
import { cacheLife } from "next/cache";

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="mt-10 border-t-4 border-navy bg-lavender">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm text-ink/80 sm:grid-cols-2 sm:px-6">
        <div>
          <p className="font-heading text-xl font-bold text-navy">Nexovia</p>
          <p className="mt-1">Career learning, made relevant.</p>
          <p className="mt-3">© <CurrentYear /> Nexovia</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 sm:items-end">
          <Link href="/find" className="font-semibold text-violet-dark underline">Find my career</Link>
          <Link href="/career" className="font-semibold text-violet-dark underline">Explore a career</Link>
          <Link href="/about" className="font-semibold text-violet-dark underline">About</Link>
          <Link href="/feedback" className="font-semibold text-violet-dark underline">Share feedback</Link>
        </nav>
      </div>
    </footer>
  );
}
