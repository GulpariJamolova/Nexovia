import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Nexovia home">
      {/* LOGO SPOT: later replace the text with
          <Image src="/images/logo.svg" alt="Nexovia" width={140} height={36} priority /> */}
      <span className="text-xl font-bold tracking-tight text-navy">Nexovia</span>
    </Link>
  );
}