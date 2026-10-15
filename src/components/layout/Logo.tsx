import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Nexovia home">
      <span className="relative block h-11 w-11 overflow-hidden rounded-xl bg-[#0d111a]">
        <Image
          src="/images/logo.jpeg"
          alt=""
          fill
          sizes="44px"
          priority
          className="scale-125 object-cover"
        />
      </span>
      <span className="text-xl font-bold tracking-tight text-navy">Nexovia</span>
    </Link>
  );
}