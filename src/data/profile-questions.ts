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
    id: "activities",
    text: "Which activities would you enjoy doing most, even if nobody asked you to?",
    type: "multi",
    options: [
      "Building or fixing things",
      "Helping or caring for people",
      "Creating art, music or stories",
      "Solving puzzles and logic problems",
      "Experimenting and testing ideas",
      "Exploring nature and animals",
      "Leading or organising a group",
      "Teaching or explaining things",
      "Coding or making digital things",
    ],
    allowOther: true,
  },
  {
    id: "problem",
    text: "Which problem would you most like to solve?",
    type: "multi",
    options: [
      "Diseases and health",
      "Climate change and pollution",
      "Poverty and inequality",
      "Making cities and buildings better",
      "Making technology smarter and safer",
      "Giving everyone access to education",
      "Protecting animals and nature",
      "Clean energy and space travel",
    ],
    allowOther: true,
  },
  {
    id: "topicDay",
    text: "Imagine you could spend one full day exploring any topic. Which would you choose?",
    type: "multi",
    options: [
      "The human body and medicine",
      "Space and the universe",
      "Robots, AI and computers",
      "Animals and ecosystems",
      "Buildings, machines and engineering",
      "Art, design and film",
      "History and cultures",
      "Money, business and start-ups",
      "Law, justice and government",
      "Food and cooking science",
    ],
    allowOther: true,
  },
  {
    id: "difficult",
    text: "When you face a difficult problem, what do you usually do first?",
    type: "multi",
    options: [
      "Break it into smaller steps",
      "Search for information",
      "Ask someone for help",
      "Try different solutions and see what works",
      "Draw or sketch it out",
      "Discuss it with a team",
      "Take a break and come back later",
    ],
    allowOther: true,
  },
  {
    id: "challenge",
    text: "Which type of challenge sounds most interesting to you?",
    type: "multi",
    options: [
      "Running a scientific experiment",
      "Designing something completely new",
      "Cracking a logic puzzle or writing code",
      "Helping a person who is in need",
      "Debating and persuading others",
      "Planning a strategy and leading a team",
      "Performing or creating for an audience",
    ],
    allowOther: true,
  },
  {
    id: "schoolTask",
    text: "Which school task would you be most excited to do?",
    type: "multi",
    options: [
      "A lab experiment",
      "A group project",
      "Writing an essay or a story",
      "Building a model or prototype",
      "Giving a presentation",
      "Solving maths problems",
      "An art or design project",
      "A research project",
    ],
    allowOther: true,
  },
  {
    id: "peopleAsk",
    text: "What do people often ask you to help them with?",
    type: "multi",
    options: [
      "Explaining homework",
      "Fixing tech problems",
      "Advice about personal problems",
      "Creative ideas and design",
      "Organising events and plans",
      "Listening and cheering them up",
      "Fixing or making things by hand",
      "Nobody asks me yet",
    ],
    allowOther: true,
  },
  {
    id: "subjects",
    text: "Which subjects would you like to learn more about if they were connected to real-life careers?",
    type: "multi",
    options: [
      "Math", "Physics", "Chemistry", "Biology", "Computer science",
      "English and languages", "History and geography", "Art and music",
      "Business and economics", "Physical education and health",
    ],
    allowOther: true,
  },
  {
    id: "proud",
    text: "What would make you feel most proud of your future work?",
    type: "multi",
    options: [
      "Saving or improving people's lives",
      "Inventing something new",
      "Protecting the environment",
      "Building something people use every day",
      "Teaching and inspiring others",
      "Leading a successful team or company",
      "Creating art that many people love",
      "Discovering new knowledge",
    ],
    allowOther: true,
  },
  {
    id: "environment",
    text: "Which working environment sounds best to you?",
    type: "multi",
    options: [
      "Hospital or laboratory",
      "Studio or creative space",
      "Outdoors or a building site",
      "Office or tech company",
      "School or classroom",
      "Travelling to different places",
      "Working from home",
      "Workshop or factory",
    ],
    allowOther: true,
  },
  {
    id: "workWith",
    text: "Would you rather work mainly with people, data, ideas, or things?",
    type: "multi",
    options: ["People", "Data and numbers", "Ideas", "Things and machines"],
  },
  {
    id: "dream",
    text: "What is one thing you would love to create, discover, improve, or help solve in the future?",
    type: "textarea",
    placeholder: "e.g. I'd love to build a robot that helps elderly people…",
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