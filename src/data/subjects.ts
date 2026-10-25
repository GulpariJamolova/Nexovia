import type { SubjectId } from "@/types";

export const subjects: Record<SubjectId, { name: string }> = {
  math: { name: "Mathematics" },
  physics: { name: "Physics" },
  chemistry: { name: "Chemistry" },
  biology: { name: "Biology" },
  cs: { name: "Computer science" },
  languages: { name: "English & languages" },
  humanities: { name: "History & humanities" },
  art: { name: "Art & design" },
  business: { name: "Business & economics" },
  pe: { name: "PE & health" },
};
