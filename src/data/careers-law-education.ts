import type { Seed } from "./careers-build";

export const lawSeeds: Seed[] = [
  {
    slug: "paralegal",
    name: "Paralegal",
    category: "law",
    summary: "Supports lawyers by researching cases, preparing documents and organising files.",
    overview:
      "Paralegals are legal assistants who prepare the paperwork and research that lawyers need. They work in law firms, companies and government offices, and many use the job as a first step toward becoming a lawyer.",
    purpose: "To help legal teams work accurately and on time.",
    dailyWork: "Researching laws, drafting documents, organising case files and talking with clients and courts.",
    example:
      "A lawyer is preparing for a contract dispute. The paralegal collects every email and document, checks dates and prepares a clear summary for the lawyer.",
    kw: ["paralegal", "legal assistant", "legal secretary", "law office", "legal support"],
    tags: ["office", "research", "justice", "people", "team", "humanities"],
    subj: [
      ["languages", "Reading and writing precisely is the heart of legal work.", "Summarising a long document in plain English."],
      ["humanities", "Understanding society and rules gives context to laws.", "Seeing why a rule exists."],
      ["business", "Many cases involve companies and contracts.", "Understanding what a contract does."],
    ],
    skills: ["Accuracy", "Organisation", "Research"],
    path: [
      ["Study", "Many paralegals take a law or legal studies course or diploma, and some have a related degree."],
      ["Work in a legal team", "Experience in a law firm or company legal department builds skills quickly."],
    ],
    enjoy: ["Learning how law works up close", "A route toward becoming a lawyer", "Teamwork with legal experts", "Variety of cases and documents"],
    consider: ["Detailed, sometimes repetitive paperwork", "Deadlines can be tight", "Tasks are directed by lawyers", "Long periods of reading"],
    qual: [["detail", "A small error can change the meaning of a document."], ["organised", "Case files must be complete and in order."], ["curious", "Research needs asking good questions."], ["teamwork", "Paralegals work closely with lawyers."]],
    day: [["Receive tasks", "Check what the lawyer needs."], ["Research", "Look up laws and past cases."], ["Draft documents", "Prepare letters and forms."], ["Organise files", "Keep records tidy and complete."], ["Review", "Check everything before it is sent."]],
    quiz: { title: "Check the document", intro: "Practise a paralegal's care.", q: [
      ["A contract says payment is due on 15 March but the cover letter says 25 March. What should you do?", ["Flag the difference to the lawyer", "Pick one date", "Ignore it"], 0, "Differences in key details must be reported."],
      ["Why are case files kept organised?", ["So information can be found quickly and accurately", "To look neat only", "They never need to be found"], 0, "Legal work depends on finding the right document fast."]] },
    related: [["lawyer", "Lawyers advise clients and argue cases, with paralegals' support."], ["judge", "Judges decide cases using the same laws."], ["archivist", "Both organise records carefully."]],
  },
  {
    slug: "judge",
    name: "Judge",
    category: "law",
    summary: "Listens to both sides in a court case and makes fair, lawful decisions.",
    overview:
      "Judges lead court hearings, make sure rules are followed, and decide the outcome of cases using the law. Most judges first work for many years as lawyers or in the legal system.",
    purpose: "To make fair decisions based on the law and the facts.",
    dailyWork: "Reading case documents, hearing both sides, deciding on law and writing clear judgments.",
    example:
      "Two companies disagree about a contract. The judge reads the evidence, listens to both lawyers, applies the law and writes a decision explaining why.",
    kw: ["judge", "court", "magistrate", "justice", "legal", "judiciary"],
    tags: ["justice", "leading", "office", "research", "humanities", "people"],
    subj: [
      ["languages", "Judgments must be clear and fair.", "Explaining a decision in precise words."],
      ["humanities", "Law grows from history and society.", "Seeing how past cases shaped today's rules."],
      ["business", "Many cases involve contracts and companies.", "Understanding commercial disputes."],
    ],
    skills: ["Fair thinking", "Listening", "Clear writing"],
    path: [
      ["Study law", "A law degree is normally required, followed by professional legal qualification."],
      ["Gain experience", "Judges usually spend many years practising law before being appointed."],
    ],
    enjoy: ["Making decisions that matter", "Respect in the community", "Working with the law every day", "Intellectual challenge"],
    consider: ["A long route to the role", "Heavy responsibility", "Decisions can be difficult and emotional", "Long hours reading"],
    qual: [["decisions", "Judges must decide fairly."], ["detail", "Small facts can change a case."], ["patient", "They listen carefully to all sides."], ["communicating", "Decisions must be explained clearly."]],
    day: [["Read the case", "Study documents before the hearing."], ["Hear the case", "Listen to both sides."], ["Question", "Ask lawyers to clarify."], ["Decide", "Apply the law to the facts."], ["Write the judgment", "Explain the decision."]],
    quiz: { title: "Weigh the evidence", intro: "Think like a judge.", q: [
      ["Why must a judge listen to both sides?", ["To be fair", "To make hearings longer", "To avoid decisions"], 0, "Fairness requires hearing everyone."],
      ["A judge has personal feelings about a case. What should they do?", ["Decide using the law and evidence", "Follow their feelings", "Ask friends"], 0, "Decisions must follow law and facts."]] },
    related: [["lawyer", "Most judges start as lawyers."], ["paralegal", "Paralegals support the legal process."], ["diplomat", "Both need fairness and careful judgement."]],
  },
  {
    slug: "compliance-officer",
    name: "Compliance Officer",
    category: "law",
    summary: "Makes sure a company follows laws, rules and ethical standards.",
    overview:
      "Compliance officers check that organisations follow the law, from banking rules to data protection and safety standards. They write policies, train staff and look for risks before they become problems.",
    purpose: "To protect organisations and the public by making sure rules are followed.",
    dailyWork: "Reviewing policies, checking records, training staff and advising managers.",
    example:
      "A bank updates how it stores customer data. The compliance officer checks the new process against privacy laws and teaches staff what to do.",
    kw: ["compliance officer", "compliance", "regulation", "risk", "legal compliance", "ethics officer"],
    tags: ["office", "justice", "research", "people", "data", "team"],
    subj: [
      ["languages", "Policies must be written clearly.", "Writing a simple guide to a rule."],
      ["business", "Understanding how organisations work is essential.", "Seeing how rules affect a company."],
      ["humanities", "Ethics and law are part of society.", "Discussing why fairness matters."],
    ],
    skills: ["Attention to detail", "Integrity", "Clear communication"],
    path: [
      ["Study", "Many officers study law, business, finance or related subjects, and some take professional compliance certificates."],
      ["Experience", "Many begin in audit, legal or finance roles."],
    ],
    enjoy: ["Helping organisations act responsibly", "Strong demand in banks and large companies", "Mix of law and business", "Clear career steps"],
    consider: ["Can be seen as the person who says no", "Rules change often", "Detailed paperwork", "Pressure when problems appear"],
    qual: [["detail", "A missed rule can be costly."], ["decisions", "Officers decide what is acceptable."], ["communicating", "They explain rules to staff."], ["organised", "Records and checks must be tidy."]],
    day: [["Review changes", "Check new laws and company changes."], ["Check records", "Look for gaps or mistakes."], ["Advise", "Help teams follow the rules."], ["Train", "Teach staff about policies."], ["Report", "Summarise findings for managers."]],
    quiz: { title: "Follow the rules", intro: "Practise compliance thinking.", q: [
      ["A colleague wants to share customer details with a friend. What should a compliance officer say?", ["Not allowed, it breaks privacy rules", "Go ahead", "Share only half"], 0, "Customer data must be protected."],
      ["Why do companies train staff on rules?", ["So mistakes are avoided", "To fill time", "To hide problems"], 0, "Training prevents mistakes."]] },
    related: [["lawyer", "Both work with laws and rules."], ["accountant", "Both check records for accuracy."], ["cybersecurity-specialist", "Both protect data and systems."]],
  },
];

export const educationSeeds: Seed[] = [
  {
    slug: "special-education-teacher",
    name: "Special Education Teacher",
    category: "education",
    summary: "Teaches and supports students who learn in different ways or need extra help.",
    overview:
      "Special education teachers adapt lessons for students with learning differences, disabilities or other needs. They work with families, therapists and other teachers to help every student succeed.",
    purpose: "To make learning possible and enjoyable for every student.",
    dailyWork: "Planning individual lessons, teaching small groups, tracking progress and talking with families.",
    example:
      "A student finds reading hard. The teacher uses pictures, games and short steps, then records how the student improves each week.",
    kw: ["special education", "special needs teacher", "inclusion", "learning support", "teacher", "sen"],
    tags: ["teaching", "helping", "people", "team", "humanities"],
    subj: [
      ["languages", "Clear explanations are important.", "Explaining a task in simple steps."],
      ["biology", "Understanding the brain and learning helps.", "How memory works."],
      ["humanities", "Understanding people and society matters.", "Thinking about inclusion."],
    ],
    skills: ["Patience", "Creativity", "Teamwork with families"],
    path: [
      ["Degree and teacher training", "Teachers usually need a degree and a teaching qualification, plus special-education training."],
      ["Experience", "Classroom or support experience helps a lot."],
    ],
    enjoy: ["Seeing students make real progress", "Making a difference", "Varied, creative teaching", "Close relationships with families"],
    consider: ["Emotionally demanding", "Paperwork and planning", "Needs lots of patience", "Resources can be limited"],
    qual: [["patient", "Progress can be slow and steady."], ["helping", "The job is about supporting others."], ["creative", "Lessons are adapted in new ways."], ["communicating", "Teachers talk with students and families."]],
    day: [["Plan", "Prepare lessons for each student."], ["Teach", "Work in groups or one-to-one."], ["Support", "Help students in class."], ["Record", "Track progress."], ["Meet", "Talk with families and colleagues."]],
    quiz: { title: "Teach differently", intro: "Think about helping every student learn.", q: [
      ["A student struggles with long instructions. What helps?", ["Break them into short steps", "Say it faster", "Give no help"], 0, "Short steps make tasks manageable."],
      ["Why do teachers celebrate small progress?", ["It builds confidence", "It wastes time", "It is not important"], 0, "Confidence helps learning."]] },
    related: [["teacher", "Both teach, with different focus."], ["school-counsellor", "Both support students' wellbeing."], ["psychologist", "Both understand how people learn and feel."]],
  },
  {
    slug: "school-counsellor",
    name: "School Counsellor",
    category: "education",
    summary: "Supports students with school, friendships, wellbeing and future plans.",
    overview:
      "School counsellors listen to students, help them cope with stress, and guide them in choosing subjects and careers. They also work with teachers and families.",
    purpose: "To help students feel supported and make good choices.",
    dailyWork: "Meeting students, running small groups, advising on subjects and careers and working with families.",
    example:
      "A student feels nervous about exams. The counsellor listens, teaches calming techniques and helps make a study plan.",
    kw: ["school counsellor", "counselor", "career guidance", "student support", "guidance counsellor"],
    tags: ["helping", "people", "teaching", "health", "team", "humanities"],
    subj: [
      ["languages", "Listening and speaking clearly matter.", "Asking open questions."],
      ["biology", "Understanding the body and mind helps.", "How stress affects the body."],
      ["humanities", "Understanding society and people.", "How different cultures see school."],
    ],
    skills: ["Listening", "Empathy", "Confidentiality"],
    path: [
      ["Degree", "Counsellors usually study psychology, education or counselling, and then complete training."],
      ["Experience", "Work with young people helps greatly."],
    ],
    enjoy: ["Helping students every day", "Variety of conversations", "Seeing students grow", "Working with a supportive team"],
    consider: ["Emotionally heavy conversations", "Needs careful confidentiality", "Many students need help at once", "Boundaries are important"],
    qual: [["helping", "Counsellors focus on supporting people."], ["patient", "Change takes time."], ["communicating", "Listening is a main skill."], ["decisions", "Counsellors judge when extra help is needed."]],
    day: [["Meet students", "Talk one-to-one."], ["Run groups", "Lead small wellbeing sessions."], ["Advise", "Help with subjects and careers."], ["Work with staff", "Share support plans."], ["Record", "Keep careful confidential notes."]],
    quiz: { title: "Listen well", intro: "Practise counsellor skills.", q: [
      ["A student is upset. What helps most first?", ["Listening calmly", "Giving a quick lecture", "Changing the subject"], 0, "Listening shows you care."],
      ["Why is confidentiality important?", ["Students need to trust you", "It is not important", "It makes notes shorter"], 0, "Trust is needed for support."]] },
    related: [["psychologist", "Both support mental wellbeing."], ["teacher", "Both support students."], ["trainer-coach", "Both guide people toward goals."]],
  },
  {
    slug: "university-lecturer",
    name: "University Lecturer",
    category: "education",
    summary: "Teaches students at a university and often carries out research.",
    overview:
      "Lecturers teach courses, mark work, guide students and often conduct research in their subject. They usually specialise in one area, from physics to history.",
    purpose: "To teach advanced subjects and add to knowledge.",
    dailyWork: "Preparing lectures, teaching, supervising students, marking and researching.",
    example:
      "A chemistry lecturer teaches first-year students, supervises a project and spends afternoons working on a research paper.",
    kw: ["university lecturer", "professor", "lecturer", "academic", "university teacher", "researcher"],
    tags: ["teaching", "research", "ideas", "people", "office", "science"],
    subj: [
      ["languages", "Teaching and writing papers need clarity.", "Explaining a complex idea simply."],
      ["math", "Many subjects rely on maths.", "Analysing results."],
      ["humanities", "Critical thinking applies in every field.", "Building an argument."],
    ],
    skills: ["Deep subject knowledge", "Explaining clearly", "Research"],
    path: [
      ["Degrees", "Lecturers usually have a bachelor's, a master's and a doctorate in their subject."],
      ["Research experience", "Publishing research and teaching experience help."],
    ],
    enjoy: ["Working on subjects you love", "Passing knowledge on", "Independence and flexibility", "Contributing new discoveries"],
    consider: ["A long study path", "Competitive jobs", "Pressure to publish research", "Marking and admin"],
    qual: [["curious", "Academics love asking questions."], ["communicating", "They teach complex ideas."], ["independent", "Research is often self-driven."], ["organised", "Teaching, marking and research must be balanced."]],
    day: [["Prepare", "Plan the lecture."], ["Teach", "Present to students."], ["Support", "Answer questions and mentor."], ["Research", "Work on studies and papers."], ["Mark", "Give feedback on work."]],
    quiz: { title: "Explain it", intro: "Teach a simple idea.", q: [
      ["How can a lecturer help students who find a topic hard?", ["Use examples and explain step by step", "Skip the topic", "Talk faster"], 0, "Examples make ideas clearer."],
      ["Why do researchers share their findings?", ["So others can learn and check them", "To avoid work", "To keep secrets"], 0, "Sharing builds knowledge."]] },
    related: [["teacher", "Both teach, at different levels."], ["physicist", "Many lecturers are researchers."], ["trainer-coach", "Both teach adults."]],
  },
  {
    slug: "librarian",
    name: "Librarian",
    category: "education",
    summary: "Helps people find information, books and digital resources.",
    overview:
      "Librarians organise collections, help people research and run reading and learning activities. They work in schools, universities, public libraries and companies.",
    purpose: "To connect people with reliable information and ideas.",
    dailyWork: "Organising resources, helping visitors, teaching research skills and running events.",
    example:
      "A student needs sources for a project. The librarian shows how to search, judge websites and find a book.",
    kw: ["librarian", "library", "information specialist", "books", "school librarian"],
    tags: ["helping", "people", "office", "research", "teaching", "humanities"],
    subj: [
      ["languages", "Reading and communication are central.", "Recommending a book."],
      ["humanities", "Knowledge of topics helps organise them.", "Understanding history sources."],
      ["cs", "Catalogues and digital resources are important.", "Searching a database."],
    ],
    skills: ["Organisation", "Research", "Helpfulness"],
    path: [
      ["Study", "Librarians usually have a degree and often a library or information qualification."],
      ["Experience", "Library assistant work is a good start."],
    ],
    enjoy: ["Helping people discover things", "Quiet, welcoming spaces", "Mix of technology and books", "Running events and clubs"],
    consider: ["Budgets can be limited", "Job openings vary", "Desk work", "Needs patience with many requests"],
    qual: [["organised", "Collections must be easy to use."], ["helping", "Librarians help people all day."], ["curious", "They enjoy finding answers."], ["detail", "Cataloguing needs accuracy."]],
    day: [["Open", "Prepare the library."], ["Help visitors", "Find resources."], ["Organise", "Catalogue and shelve."], ["Teach", "Show research skills."], ["Plan events", "Run reading activities."]],
    quiz: { title: "Find the source", intro: "Think like a librarian.", q: [
      ["Which source is usually most reliable for a school project?", ["A published book or trusted organisation", "An anonymous post", "A rumour"], 0, "Reliable sources have clear authors and checks."],
      ["Why are books catalogued?", ["So people can find them quickly", "To make them heavy", "To hide them"], 0, "Catalogues organise information."]] },
    related: [["archivist", "Both organise and protect information."], ["teacher", "Both help people learn."], ["journalist", "Both research and share information."]],
  },
  {
    slug: "archivist",
    name: "Archivist",
    category: "education",
    summary: "Preserves and organises important documents, photos and records for the future.",
    overview:
      "Archivists look after historical and official records in museums, governments, universities and companies. They decide what to keep, organise it, protect it and help people use it.",
    purpose: "To protect records so people can learn from the past.",
    dailyWork: "Sorting and cataloguing records, preserving fragile items, digitising and helping researchers.",
    example:
      "An old school photo collection is damaged. The archivist cleans, scans and labels each photo so it can be searched.",
    kw: ["archivist", "archives", "records", "historian", "museum", "records manager"],
    tags: ["office", "research", "humanities", "things", "puzzles", "people"],
    subj: [
      ["humanities", "Understanding history gives records meaning.", "Dating an old document."],
      ["languages", "Reading older writing and describing items clearly.", "Writing a catalogue entry."],
      ["cs", "Digitising and databases are major tasks.", "Scanning and tagging files."],
    ],
    skills: ["Organisation", "Attention to detail", "Care with fragile items"],
    path: [
      ["Degree", "Archivists often study history, archive studies or information science."],
      ["Experience", "Volunteering or assistant roles in archives and museums help."],
    ],
    enjoy: ["Working with history", "Quiet, careful work", "Discovering hidden stories", "Protecting heritage"],
    consider: ["Competitive, limited jobs", "Repetitive cataloguing", "Dust and storage conditions", "Budgets can be tight"],
    qual: [["detail", "Records must be labelled accurately."], ["organised", "Systems must be consistent."], ["patient", "Careful work takes time."], ["curious", "Archivists enjoy discovering stories."]],
    day: [["Receive records", "Check new materials."], ["Sort", "Group and label them."], ["Preserve", "Protect fragile items."], ["Digitise", "Scan and store."], ["Help researchers", "Find what they need."]],
    quiz: { title: "Keep it safe", intro: "Make archivist decisions.", q: [
      ["Why are old documents stored away from bright light?", ["Light damages paper and ink", "It is more fun", "To hide them"], 0, "Light can fade and damage records."],
      ["Why do archivists label items carefully?", ["So they can be found later", "To make them heavier", "It does not matter"], 0, "Labels make records usable."]] },
    related: [["librarian", "Both organise information."], ["paralegal", "Both manage careful records."], ["land-surveyor", "Both record and preserve measurements and maps."]],
  },
  {
    slug: "trainer-coach",
    name: "Trainer or Coach",
    category: "education",
    summary: "Teaches skills to people and helps them reach their goals, in sport, work or life.",
    overview:
      "Trainers and coaches teach skills, build confidence and help people improve. They may coach sports teams, train employees, run workshops or guide individuals toward personal goals.",
    purpose: "To help people learn new skills and reach their goals.",
    dailyWork: "Planning sessions, teaching or demonstrating, giving feedback and tracking progress.",
    example:
      "A coach helps a school football team. She plans drills, gives feedback and helps nervous players build confidence.",
    kw: ["trainer", "coach", "life coach", "career coach", "corporate trainer", "mentor", "instructor"],
    tags: ["teaching", "people", "helping", "leading", "team", "health"],
    subj: [
      ["languages", "Clear instructions and encouragement matter.", "Explaining a skill step by step."],
      ["pe", "Many coaches work in sport and fitness.", "Planning a safe warm-up."],
      ["humanities", "Understanding people and groups helps.", "Understanding motivation."],
    ],
    skills: ["Communication", "Motivation", "Planning"],
    path: [
      ["Training and qualifications", "Coaches often take certificates in their sport or field, and trainers study education or the subject they teach."],
      ["Experience", "Assisting experienced coaches or trainers builds skills."],
    ],
    enjoy: ["Seeing people improve", "Active, social work", "Variety of settings", "Chance to run your own business"],
    consider: ["Evening or weekend hours", "Results depend on others", "Income can vary", "Needs patience and energy"],
    qual: [["communicating", "Coaches explain and encourage."], ["helping", "Success is helping others succeed."], ["patient", "Learning takes time."], ["organised", "Sessions need planning."]],
    day: [["Plan", "Design the session."], ["Warm up", "Prepare everyone safely."], ["Teach", "Demonstrate and guide."], ["Give feedback", "Praise and correct."], ["Review", "Track progress and next steps."]],
    quiz: { title: "Coach's call", intro: "Make coaching choices.", q: [
      ["A player keeps missing. What helps most?", ["Specific feedback and encouragement", "Shouting", "Telling them to quit"], 0, "Specific, kind feedback improves skill."],
      ["Why do coaches plan sessions?", ["So time is used well and safely", "To make sessions longer", "They never plan"], 0, "Planning improves learning and safety."]] },
    related: [["teacher", "Both teach and guide."], ["personal-trainer", "Fitness trainers coach bodies."], ["school-counsellor", "Both guide people toward goals."]],
  },
  {
    slug: "early-years-educator",
    name: "Early Years Educator",
    category: "education",
    summary: "Cares for and teaches young children through play and early learning.",
    overview:
      "Early years educators work in nurseries and kindergartens with children from babies to around six years old. They plan play activities that build language, movement, social and early maths skills.",
    purpose: "To give children a safe, happy and stimulating start to learning.",
    dailyWork: "Leading play, reading stories, keeping children safe and talking with families.",
    example:
      "An educator sets up a sand tray with cups and spoons. Children learn about full, empty, heavy and light while playing.",
    kw: ["early years educator", "kindergarten teacher", "nursery teacher", "preschool", "childcare", "nursery"],
    tags: ["teaching", "helping", "people", "creating", "team", "health"],
    subj: [
      ["languages", "Stories and conversation build language.", "Reading a picture book aloud."],
      ["art", "Creative play is central.", "Painting and craft activities."],
      ["biology", "Understanding child development helps.", "How children grow and learn."],
    ],
    skills: ["Patience", "Creativity", "Caring"],
    path: [
      ["Qualification", "Early years educators usually complete a diploma or degree in early childhood education."],
      ["Experience", "Work experience in a nursery is very valuable."],
    ],
    enjoy: ["Seeing children discover the world", "Fun, creative days", "Warm relationships", "Strong demand in many countries"],
    consider: ["Physically and emotionally tiring", "Noise and busy days", "Pay can be modest in some settings", "Strong safety responsibilities"],
    qual: [["patient", "Young children need calm, repeated guidance."], ["creative", "Play activities need fresh ideas."], ["helping", "Educators care for children daily."], ["teamwork", "Staff share the care."]],
    day: [["Welcome", "Greet children and families."], ["Play and learn", "Lead activities."], ["Story time", "Read and sing."], ["Care", "Meals, rest and safety."], ["Talk to families", "Share progress."]],
    quiz: { title: "Learn through play", intro: "Think like an early years educator.", q: [
      ["Why do young children learn through play?", ["It is a natural and enjoyable way to explore", "They cannot learn", "It is only for breaks"], 0, "Play builds language, movement and thinking."],
      ["What is most important in a nursery?", ["Keeping children safe and happy", "Silence", "Strict tests"], 0, "Safety and care come first."]] },
    related: [["teacher", "Both teach children."], ["special-education-teacher", "Both support children's learning needs."], ["paediatrician", "Both care for children's development."]],
  },
];
