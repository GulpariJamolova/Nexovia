export type ProfileQuestion = {
  id: string;
  text: string;
  hint?: string;
  type: "text" | "birth" | "single" | "multi" | "textarea";
  options?: string[];
  allowOther?: boolean;
  optional?: boolean;
  placeholder?: string;
  followUp?: { id: string; label: string; placeholder: string };
};

export const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const birthYears = Array.from({ length: 13 }, (_, i) => String(2018 - i));

export const profileQuestions: ProfileQuestion[] = [
  {
    id: "name",
    text: "What is your name?",
    hint: "A nickname is fine.",
    type: "text",
    placeholder: "Your name or nickname",
  },
  {
    id: "gender",
    text: "What is your gender?",
    type: "single",
    options: ["Female", "Male", "Prefer not to say"],
  },
  {
    id: "birth",
    text: "When were you born?",
    hint: "Month and year only.",
    type: "birth",
  },
  {
    id: "grade",
    text: "What grade are you in?",
    type: "single",
    options: [
      "Grade 5", "Grade 6", "Grade 7", "Grade 8",
      "Grade 9", "Grade 10", "Grade 11", "Grade 12",
    ],
    allowOther: true,
  },
  {
    id: "hobbies",
    text: "What are your hobbies?",
    type: "multi",
    options: [
      "Reading", "Drawing or painting", "Sports", "Gaming", "Music",
      "Coding or tech", "Cooking", "Writing", "Science experiments",
      "Photography or video", "Volunteering",
    ],
    allowOther: true,
  },
  {
    id: "enjoy",
    text: "What do you enjoy the most?",
    type: "multi",
    options: [
      "Building or fixing things",
      "Helping and caring for people",
      "Creating art, stories or designs",
      "Solving puzzles and problems",
      "Leading projects or teams",
      "Exploring nature and animals",
      "Teaching or explaining things",
    ],
    allowOther: true,
  },
  {
    id: "subjects",
    text: "Which school subjects do you like the most?",
    type: "multi",
    options: [
      "Math", "Physics", "Chemistry", "Biology", "Computer science",
      "English and languages", "History and geography", "Art and music",
      "Physical education", "Business and economics",
    ],
    allowOther: true,
  },
  {
    id: "style",
    text: "How do you like to work?",
    type: "multi",
    options: [
      "Alone, with deep focus",
      "In a team",
      "Leading and organising others",
      "Meeting and talking with lots of people",
      "Hands-on, with real objects",
      "On a computer",
      "Outdoors",
    ],
    allowOther: true,
  },
  {
    id: "study",
    text: "Where would you like to study, and why?",
    type: "multi",
    options: [
      "University in my country",
      "University abroad",
      "Vocational or technical school",
      "Online courses",
      "Not sure yet",
    ],
    allowOther: true,
    followUp: {
      id: "studyWhy",
      label: "Why? (optional)",
      placeholder: "Tell us why you chose this…",
    },
  },
  {
    id: "about",
    text: "Anything else you'd like to tell us about yourself?",
    hint: "Optional. Anything that helps us match you better.",
    type: "textarea",
    optional: true,
    placeholder: "e.g. I love animals and drawing…",
  },
];

