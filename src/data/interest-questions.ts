import type { Question } from "@/types";

export const questions: Question[] = [
  {
    id: "grade",
    text: "Which grade are you in?",
    options: ["Grades 5–6", "Grades 7–8", "Grades 9–10", "Grades 11–12"],
  },
  {
    id: "enjoy",
    text: "What do you enjoy doing most?",
    options: [
      "Building or fixing things",
      "Helping and caring for people",
      "Creating art, stories or designs",
      "Solving puzzles and problems",
    ],
  },
  {
    id: "subjects",
    text: "Which school subjects feel best to you?",
    options: [
      "Math and logic",
      "Science (biology, chemistry, physics)",
      "Languages and writing",
      "Arts, music and design",
    ],
  },
  {
    id: "style",
    text: "How do you like to work?",
    options: [
      "Alone, with deep focus",
      "In a team",
      "Leading and organising others",
      "Meeting and talking with lots of people",
    ],
  },
  {
    id: "place",
    text: "Which place sounds best to work in?",
    options: [
      "Hospital or laboratory",
      "Studio or creative office",
      "Outdoors or on a building site",
      "Computer or tech company",
    ],
  },
  {
    id: "change",
    text: "What would you most like to improve in the world?",
    options: [
      "People's health",
      "The environment",
      "Technology and how we live",
      "Education and society",
    ],
  },
];