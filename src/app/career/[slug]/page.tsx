import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { careers, getCareer } from "@/lib/careers";
import {
  AnchorNav, CareerIntro, DaySection, NextActions,
  ProsConsSection, QualitiesSection, RelatedSection, SubjectsSection,
} from "@/components/career/CareerSections";
import SalarySection from "@/components/career/SalarySection";
import ChallengeSection from "@/components/career/ChallengeSection";
import ReflectionSection from "@/components/career/ReflectionSection";

export function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const career = getCareer(slug);
  if (!career) return { title: "Career not found – Nexovia" };
  return { title: `${career.name} – Nexovia`, description: career.summary };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const career = getCareer(slug);
  if (!career) notFound();

  const related = career.related
    .map((r) => getCareer(r.slug))
    .filter((c): c is NonNullable<typeof c> => !!c)
    .map((c) => ({ slug: c.slug, name: c.name }));

  return (
    <article>
      <CareerIntro career={career} />
      <AnchorNav />
      <SubjectsSection career={career} />
      <ProsConsSection career={career} />
      <SalarySection name={career.name} salary={career.salary} />
      <QualitiesSection career={career} />
      <DaySection career={career} />
      <ChallengeSection slug={career.slug} challenge={career.challenge} />
      <ReflectionSection tasks={career.day} related={related} />
      <RelatedSection career={career} />
      <NextActions />
    </article>
  );
}
