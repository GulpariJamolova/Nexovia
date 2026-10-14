import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-ink/70 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} Nexovia. Career learning, made relevant.</p>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-violet">About</Link>
          <Link href="/find" className="hover:text-violet">Find my career</Link>
          <Link href="/career" className="hover:text-violet">Explore a career</Link>
        </div>
      </div>
    </footer>
  );
}