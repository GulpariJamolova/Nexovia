import Link from "next/link";
import Image from "next/image";

/*
  logo.png is the original logo with its dark background removed
  (transparent PNG, made from logo.jpeg). The mark itself is unchanged.
*/
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Nexovia home">
      <Image
        src="/images/logo.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-10 w-10"
      />
      <span className="text-xl font-bold tracking-tight text-navy">Nexovia</span>
    </Link>
  );
}
