import {
  Atom, Briefcase, Calculator, Code, Dna, Dumbbell, Eye, FlaskConical,
  HeartHandshake, Hourglass, Landmark, Languages, Lightbulb, ListChecks,
  MessageCircle, Palette, Puzzle, Scale, User, Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { QualityId, SubjectId } from "@/types";

const subjectIcons: Record<SubjectId, LucideIcon> = {
  math: Calculator, physics: Atom, chemistry: FlaskConical, biology: Dna,
  cs: Code, languages: Languages, humanities: Landmark, art: Palette,
  business: Briefcase, pe: Dumbbell,
};

const qualityIcons: Record<QualityId, LucideIcon> = {
  organised: ListChecks, creative: Palette, curious: Lightbulb, patient: Hourglass,
  detail: Eye, "problem-solving": Puzzle, communicating: MessageCircle,
  helping: HeartHandshake, teamwork: Users, independent: User, decisions: Scale,
};

export function SubjectIcon({ id, size = 16 }: { id: SubjectId; size?: number }) {
  const Icon = subjectIcons[id];
  return <Icon size={size} aria-hidden="true" />;
}

export function QualityIcon({ id, size = 22 }: { id: QualityId; size?: number }) {
  const Icon = qualityIcons[id];
  return <Icon size={size} aria-hidden="true" />;
}
