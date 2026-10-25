import type { QualityId } from "@/types";

export const qualities: Record<QualityId, { label: string }> = {
  organised: { label: "Organised" },
  creative: { label: "Creative" },
  curious: { label: "Curious" },
  patient: { label: "Patient" },
  detail: { label: "Detail-oriented" },
  "problem-solving": { label: "Enjoys solving problems" },
  communicating: { label: "Good at communicating" },
  helping: { label: "Interested in helping people" },
  teamwork: { label: "Enjoys teamwork" },
  independent: { label: "Enjoys working independently" },
  decisions: { label: "Comfortable making careful decisions" },
};
