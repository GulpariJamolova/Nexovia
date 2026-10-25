import type { CategoryId } from "@/types";

export const categories: Record<CategoryId, { label: string; tint: string }> = {
  healthcare: { label: "Healthcare", tint: "bg-coral/15" },
  architecture: { label: "Architecture & construction", tint: "bg-sky/25" },
  engineering: { label: "Engineering", tint: "bg-lime/25" },
  technology: { label: "Technology", tint: "bg-violet/10" },
  creative: { label: "Creative work", tint: "bg-butter" },
  law: { label: "Law", tint: "bg-lavender" },
  education: { label: "Education", tint: "bg-sky/20" },
  science: { label: "Science", tint: "bg-lime/20" },
  business: { label: "Business & finance", tint: "bg-violet/15" },
  transport: { label: "Aviation & transport", tint: "bg-sky/30" },
  sport: { label: "Sport & fitness", tint: "bg-lime/30" },
  public: { label: "Public service", tint: "bg-coral/20" },
};
