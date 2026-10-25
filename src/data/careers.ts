import type { Career } from "@/types";

/*
  HOW TO ADD SALARY DATA (nothing is invented here on purpose)

  1. Find a recent, credible source (government statistics, a recruitment
     salary guide, a large job-board report).
  2. Fill in the numbers exactly as the source states them, with its
     currency, monthly/yearly period, and whether it is gross or net.
  3. Add it under `salary` using the country code, for example:

  salary: {
    AE: {
      currency: "AED",
      period: "month",
      basis: "gross",
      bands: [
        { level: "early", min: 0, max: 0 },        // replace with sourced numbers
        { level: "experienced", min: 0, max: 0 },
      ],
      sourceName: "Name of the source",
      sourceUrl: "https://...",
      lastChecked: "2026-10",
    },
  },

  Bands you can't find reliable data for can simply be left out.
*/

export const careers: Career[] = [
  {
    slug: "dermatologist",
    name: "Dermatologist",
    category: "healthcare",
    summary: "Diagnoses and treats conditions of the skin, hair and nails.",
    overview:
      "Dermatologists are medical doctors who specialise in skin, hair and nails. They help with everything from acne and allergies to long-term skin conditions, and they check for changes that need urgent attention.",
    purpose: "To keep skin healthy and to spot and treat problems early.",
    dailyWork:
      "Meeting patients, examining skin, deciding on treatments and explaining clearly how to follow them.",
    realLifeExample:
      "A patient gets a rash after trying a new cream. The dermatologist asks questions, examines the skin and uses knowledge of how ingredients affect skin to find the likely cause.",
    keywords: ["skin", "hair", "acne", "skincare", "dermatology", "doctor"],
    tags: ["health", "helping", "people", "science", "research", "lab", "experiments"],
    subjects: [
      { id: "biology", why: "Skin is an organ made of cells and layers that protect the body.", example: "Understanding how skin repairs a cut." },
      { id: "chemistry", why: "Skincare products are mixtures of ingredients that interact with skin.", example: "Why some products suit dry skin and others oily skin." },
      { id: "physics", why: "Light and UV radiation affect skin.", example: "How sunscreen reduces the amount of UV that reaches the skin." },
    ],
    skills: ["Attention to detail", "Communication", "Careful problem-solving"],
    pathway: [
      { title: "At school", text: "Biology and chemistry are commonly useful, with maths and English for study skills and communication." },
      { title: "Medical degree", text: "Becoming a doctor usually starts with a medical degree, which commonly takes around five to six years depending on the country." },
      { title: "Specialist training", text: "After qualifying, doctors typically complete several years of supervised training in dermatology. Routes differ by country." },
    ],
    enjoy: [
      "Helping people feel more comfortable and confident",
      "Working out what is causing a problem, like a detective",
      "A mix of science, medicine and talking with people",
      "Chances to specialise, for example in children's skin or skin surgery",
    ],
    consider: [
      "A long education and training path before you can practise",
      "Competition for specialist training places in some countries",
      "Responsibility: some decisions affect people's health",
      "Patients can be worried, so emotional awareness matters",
    ],
    qualities: [
      { id: "detail", how: "Small changes in colour or shape can matter, so careful observation helps." },
      { id: "communicating", how: "Explaining a condition and its treatment clearly helps patients follow it." },
      { id: "curious", how: "Finding the cause of a problem often starts with asking good questions." },
      { id: "patient", how: "Many skin conditions are managed over time, not fixed in a day." },
    ],
    day: [
      { title: "Review patient notes", text: "Read each patient's history and prepare for the day's appointments." },
      { title: "Examine and diagnose", text: "Look closely at skin, sometimes with a special magnifying device, and ask questions." },
      { title: "Explain the plan", text: "Talk through a treatment, such as a cream or procedure, in simple language." },
      { title: "Work with the team", text: "Discuss tricky cases with nurses, pharmacists or other specialists." },
      { title: "Follow up", text: "Check results, write notes and plan check-ups." },
    ],
    challenge: {
      title: "Skincare detective",
      intro: "A patient has a red, itchy patch after trying a new face cream. This is a learning activity, not medical advice.",
      steps: [
        { question: "What should you do first?", options: ["Prescribe a strong treatment right away", "Ask when it started and which products were used", "Tell the patient to ignore it"], answer: 1, explain: "Good doctors gather information first. Timing and products help narrow down possible causes." },
        { question: "Which school subject helps you think about the cream's ingredients?", options: ["Chemistry", "Geography", "Music"], answer: 0, explain: "Chemistry explains what ingredients are and how they can react with skin." },
      ],
    },
    related: [
      { slug: "pharmacist", reason: "Both use biology and chemistry to help people stay healthy." },
      { slug: "marine-biologist", reason: "Both start with a love of biology and careful observation." },
    ],
    salary: {},
  },
  {
    slug: "pharmacist",
    name: "Pharmacist",
    category: "healthcare",
    summary: "Prepares and checks medicines and advises people how to use them safely.",
    overview:
      "Pharmacists are medicine experts. They check prescriptions, explain how medicines work and what to watch out for, and many also help people with everyday health questions.",
    purpose: "To make sure people get the right medicine and know how to use it safely.",
    dailyWork: "Checking prescriptions, answering questions and working with doctors and nurses.",
    realLifeExample:
      "Someone collects two medicines. The pharmacist checks they are safe to take together and explains when to take each one.",
    keywords: ["medicine", "medicines", "pharmacy", "chemist", "drugs"],
    tags: ["health", "helping", "people", "science", "lab", "research", "data"],
    subjects: [
      { id: "chemistry", why: "Medicines are chemical substances, and some should not be mixed.", example: "Why two medicines can interact with each other." },
      { id: "biology", why: "Understanding the body helps explain how medicines work.", example: "Why doses can differ for children and adults." },
      { id: "math", why: "Doses and quantities need accurate calculations.", example: "Working out a dose based on a patient's weight." },
    ],
    skills: ["Accuracy", "Clear communication", "Responsibility"],
    pathway: [
      { title: "At school", text: "Chemistry, biology and maths are commonly useful." },
      { title: "Pharmacy degree", text: "This is usually a multi-year university degree, often around four to five years." },
      { title: "Registration", text: "Many countries require supervised training and a licensing exam before you can practise." },
    ],
    enjoy: [
      "Helping people stay safe and well",
      "Using chemistry and biology in everyday work",
      "Being a trusted expert in your community",
      "Different workplaces: pharmacies, hospitals, research or industry",
    ],
    consider: [
      "Accuracy matters because mistakes can affect health",
      "Busy periods and long stretches of standing in some jobs",
      "Ongoing learning as new medicines appear",
      "A regulated profession with exams and licensing",
    ],
    qualities: [
      { id: "detail", how: "Checking names, labels and doses carefully prevents errors." },
      { id: "communicating", how: "Patients need clear, friendly explanations they can remember." },
      { id: "organised", how: "Keeping stock and records in order keeps a pharmacy running safely." },
      { id: "helping", how: "Many people visit when they feel unwell or worried." },
    ],
    day: [
      { title: "Check prescriptions", text: "Read each prescription and make sure it is clear and safe." },
      { title: "Prepare medicines", text: "Measure, label and package the right medicine." },
      { title: "Advise patients", text: "Explain how and when to take it, and what to watch for." },
      { title: "Coordinate with doctors", text: "Contact doctors when something needs clarifying." },
      { title: "Manage stock and records", text: "Order supplies and keep accurate records." },
    ],
    challenge: {
      title: "Medicine safety check",
      intro: "Practise the careful thinking pharmacists use. This is a learning activity, not medical advice.",
      steps: [
        { question: "A label says 'take one tablet twice a day'. How many tablets is that in one day?", options: ["1", "2", "4"], answer: 1, explain: "Twice a day means two times, one tablet each time, so two tablets in a day." },
        { question: "Why is it important to double-check a medicine's name and dose?", options: ["Similar names can be confused and the wrong dose can cause harm", "It makes the label look neat", "It isn't important"], answer: 0, explain: "Careful checking is one of the main ways pharmacists keep people safe." },
      ],
    },
    related: [
      { slug: "dermatologist", reason: "Both help people with health problems using biology and chemistry." },
      { slug: "marine-biologist", reason: "Researchers study marine organisms for ideas that may lead to new medicines." },
    ],
    salary: {},
  },
  {
    slug: "architect",
    name: "Architect",
    category: "architecture",
    summary: "Designs buildings and spaces that are safe, useful and good to look at.",
    overview:
      "Architects plan how buildings look, feel and work. They balance creativity with maths, safety rules, materials and the needs of the people who will use the space.",
    purpose: "To turn ideas and needs into safe, practical, inspiring places.",
    dailyWork: "Sketching, using design software, meeting clients and checking that plans meet regulations.",
    realLifeExample:
      "A school needs a new library. The architect decides where windows go for daylight, how big the rooms should be and how people will move through the space.",
    keywords: ["architecture", "building", "buildings", "houses", "skyscraper"],
    tags: ["building", "design", "creating", "art", "studio", "team", "ideas", "outdoors"],
    subjects: [
      { id: "math", why: "Geometry helps plan dimensions, angles, areas and scale.", example: "Scaling a plan so 1 cm on paper equals 2 m in real life." },
      { id: "physics", why: "Forces and materials decide whether a structure stays up.", example: "Why a beam can carry a load across a gap." },
      { id: "art", why: "Drawing and design help communicate ideas to clients and builders.", example: "Sketching a few options to show a client." },
    ],
    skills: ["Spatial thinking", "Creativity", "Communication"],
    pathway: [
      { title: "At school", text: "Maths, physics and art or design are commonly useful." },
      { title: "Architecture degree", text: "Degrees usually take several years and are often followed by supervised practical experience." },
      { title: "Registration", text: "In many countries architects must register or pass exams to use the title." },
    ],
    enjoy: [
      "Seeing your designs become real places",
      "Mixing creativity with maths and technology",
      "Variety: homes, schools, parks, hospitals",
      "Chances to specialise, for example in sustainable design",
    ],
    consider: [
      "A long study and training period",
      "Deadlines and client changes can be stressful",
      "A lot of computer time in many roles",
      "Pay and workload can vary with the employer and the market",
    ],
    qualities: [
      { id: "creative", how: "New ideas make spaces memorable and useful." },
      { id: "detail", how: "A small measuring error can become a big problem on a building site." },
      { id: "communicating", how: "Architects explain ideas to clients, engineers and builders." },
      { id: "problem-solving", how: "Every site has limits such as budget, space and rules." },
    ],
    day: [
      { title: "Sketch ideas", text: "Explore several concepts by hand or on screen." },
      { title: "Draw detailed plans", text: "Turn the chosen idea into accurate drawings." },
      { title: "Meet the client", text: "Listen to needs and explain design choices." },
      { title: "Check rules and safety", text: "Make sure the design meets building regulations." },
      { title: "Visit the site", text: "See how construction is going and solve problems." },
    ],
    challenge: {
      title: "Scale it up",
      intro: "Use the maths architects use every day.",
      steps: [
        { question: "A plan uses the scale 1 cm = 2 m. A room is 5 cm long on the plan. How long is the real room?", options: ["7 m", "10 m", "2.5 m"], answer: 1, explain: "5 × 2 m = 10 m." },
        { question: "A rectangular room is 4 m by 3 m. What is its floor area?", options: ["7 m²", "12 m²", "14 m²"], answer: 1, explain: "Area = length × width = 4 × 3 = 12 m²." },
      ],
    },
    related: [
      { slug: "interior-designer", reason: "Both shape spaces, one outside-in and one inside-out." },
      { slug: "civil-engineer", reason: "Both make sure structures are safe and work for people." },
    ],
    salary: {},
  },
  {
    slug: "interior-designer",
    name: "Interior Designer",
    category: "creative",
    summary: "Plans how indoor spaces look and work, from colours to furniture layouts.",
    overview:
      "Interior designers make rooms practical, comfortable and attractive. They think about layout, lighting, materials and colour, and how people will really use a space.",
    purpose: "To make indoor spaces work well for the people who use them.",
    dailyWork: "Talking with clients, drawing layouts, choosing materials and managing budgets.",
    realLifeExample:
      "A family wants a small flat to feel bigger. The designer chooses light colours, mirrors and furniture that fits the room's dimensions.",
    keywords: ["interior", "furniture", "decorating", "rooms"],
    tags: ["design", "creating", "art", "studio", "people", "things", "ideas"],
    subjects: [
      { id: "art", why: "Colour, shape and composition are the heart of design.", example: "Choosing a colour palette that makes a room feel calm." },
      { id: "math", why: "Measuring, areas and budgets all need accurate numbers.", example: "Working out how much flooring a room needs." },
      { id: "physics", why: "Light changes how a room looks and feels.", example: "Deciding where windows and lamps should go." },
    ],
    skills: ["Visual thinking", "Organisation", "Listening to clients"],
    pathway: [
      { title: "At school", text: "Art or design and maths are commonly useful." },
      { title: "Study", text: "Degrees and diplomas in interior design exist in many countries, and their length varies." },
      { title: "Portfolio", text: "Showing real or practice projects matters a lot when looking for work." },
    ],
    enjoy: [
      "Seeing a space transformed",
      "Creative variety from project to project",
      "Working directly with people",
      "Mixing art with practical problem-solving",
    ],
    consider: [
      "Clients' taste may differ from yours",
      "Budgets and deadlines can be tight",
      "Self-employed designers may have uneven income",
      "Site visits and moving materials can be physical",
    ],
    qualities: [
      { id: "creative", how: "Fresh ideas turn plain rooms into memorable ones." },
      { id: "organised", how: "Many suppliers, dates and budgets need to line up." },
      { id: "communicating", how: "Designers explain ideas clearly and listen to feedback." },
      { id: "detail", how: "Tiny choices such as handle styles change the whole feel." },
    ],
    day: [
      { title: "Meet the client", text: "Learn what the space is for and what the client likes." },
      { title: "Measure and sketch", text: "Record dimensions and draw layout options." },
      { title: "Choose materials", text: "Pick colours, fabrics, lighting and furniture." },
      { title: "Create a plan", text: "Present a plan with a budget and timeline." },
      { title: "Check the installation", text: "Make sure everything is installed as designed." },
    ],
    challenge: {
      title: "Room planner",
      intro: "Solve two real design questions.",
      steps: [
        { question: "A room is 5 m long and 4 m wide. What is the floor area you need to cover?", options: ["9 m²", "20 m²", "18 m²"], answer: 1, explain: "Area = 5 × 4 = 20 m²." },
        { question: "A client says a room feels dark. Which change is most likely to help?", options: ["Add lighter colours and more light sources", "Add heavy dark curtains", "Remove all lamps"], answer: 0, explain: "Lighter surfaces reflect more light, and extra lamps add brightness." },
      ],
    },
    related: [
      { slug: "architect", reason: "Architects design the building that interior designers then shape inside." },
      { slug: "graphic-designer", reason: "Both use colour, layout and visual communication." },
    ],
    salary: {},
  },
  {
    slug: "civil-engineer",
    name: "Civil Engineer",
    category: "engineering",
    summary: "Plans and builds structures such as bridges, roads and water systems.",
    overview:
      "Civil engineers design and oversee the structures society depends on, from bridges and roads to tunnels and water supply. They use maths and physics to make them safe and long-lasting.",
    purpose: "To build safe, reliable infrastructure.",
    dailyWork: "Calculating, using modelling software, visiting sites and coordinating teams.",
    realLifeExample:
      "A town needs a bridge. Engineers calculate the loads from traffic and wind, choose materials and check that the design is safe.",
    keywords: ["bridge", "bridges", "roads", "construction", "infrastructure", "engineering"],
    tags: ["building", "design", "puzzles", "outdoors", "team", "things", "leading", "ideas"],
    subjects: [
      { id: "math", why: "Calculations decide sizes, quantities and safety margins.", example: "Working out how much concrete a foundation needs." },
      { id: "physics", why: "Forces explain how weight travels through a structure.", example: "Why a bridge arch spreads load to its supports." },
      { id: "chemistry", why: "Materials behave differently over time.", example: "Why steel rusts and how to protect it." },
    ],
    skills: ["Logical thinking", "Teamwork", "Planning"],
    pathway: [
      { title: "At school", text: "Maths and physics are commonly useful." },
      { title: "Engineering degree", text: "Degrees are commonly three to five years, depending on the country." },
      { title: "Professional status", text: "In many countries engineers gain a professional licence or charter after some years of experience." },
    ],
    enjoy: [
      "Seeing structures you helped create",
      "A mix of office and outdoor work",
      "Solving real problems for communities",
      "Opportunities to lead projects",
    ],
    consider: [
      "Weather and site conditions can affect work",
      "High responsibility for safety",
      "Deadlines and budgets can be demanding",
      "Some roles involve travel to remote sites",
    ],
    qualities: [
      { id: "problem-solving", how: "Every project has constraints that need clever solutions." },
      { id: "teamwork", how: "Engineers work with architects, builders and planners." },
      { id: "detail", how: "Checking calculations carefully protects people." },
      { id: "decisions", how: "Choices about materials and design must be well reasoned." },
    ],
    day: [
      { title: "Review plans", text: "Read drawings and project updates." },
      { title: "Run calculations", text: "Use maths and software to test designs." },
      { title: "Visit the site", text: "Check progress and talk with builders." },
      { title: "Meet the team", text: "Coordinate with architects, planners and clients." },
      { title: "Check safety", text: "Make sure the work meets standards and rules." },
    ],
    challenge: {
      title: "Bridge basics",
      intro: "Think like an engineer designing a bridge.",
      steps: [
        { question: "A bridge must carry heavy lorries. What do engineers need to estimate first?", options: ["The loads the bridge must carry", "The colour of the paint", "The name of the bridge"], answer: 0, explain: "Knowing the loads lets engineers size the structure safely." },
        { question: "Which force pulls everything on a bridge downwards?", options: ["Gravity", "Magnetism", "Friction"], answer: 0, explain: "Gravity acts on the bridge and everything on it." },
      ],
    },
    related: [
      { slug: "architect", reason: "Architects and civil engineers often work on the same projects." },
      { slug: "software-developer", reason: "Engineers use software to model and test designs before building." },
    ],
    salary: {},
  },
  {
    slug: "software-developer",
    name: "Software Developer",
    category: "technology",
    summary: "Designs, writes and tests the programs behind apps, websites and devices.",
    overview:
      "Software developers turn ideas into working programs. They break big problems into small steps, write code, test it and improve it using feedback from users and teammates.",
    purpose: "To build useful digital tools that work reliably.",
    dailyWork: "Writing and reviewing code, fixing bugs and discussing ideas with a team.",
    realLifeExample:
      "A school wants an app to track homework. Developers plan the features, write the code, test it on different phones and fix problems.",
    keywords: ["software", "software engineer", "coding", "programming", "programmer", "developer", "apps", "websites"],
    tags: ["tech", "puzzles", "ideas", "office", "creating", "data", "research", "team"],
    subjects: [
      { id: "cs", why: "Programming and how computers work are the core skills.", example: "Writing a loop that repeats a task." },
      { id: "math", why: "Logic and patterns sit behind algorithms.", example: "Working out how quickly a search will run." },
      { id: "languages", why: "Clear writing helps teams understand code and requests.", example: "Writing instructions for another developer." },
    ],
    skills: ["Logical thinking", "Persistence", "Teamwork"],
    pathway: [
      { title: "At school", text: "Computer science and maths are commonly useful." },
      { title: "Study or self-learning", text: "Many developers have a computer science degree, while others learn through courses and projects." },
      { title: "Portfolio", text: "Real projects you have built often matter a lot when applying." },
    ],
    enjoy: [
      "Creating things people actually use",
      "Solving puzzles every day",
      "Flexible workplaces in some roles",
      "Opportunities in almost every industry",
    ],
    consider: [
      "Long periods at a computer",
      "Technology changes fast, so you keep learning",
      "Deadlines and bugs can be stressful",
      "Debugging can be frustrating",
    ],
    qualities: [
      { id: "problem-solving", how: "Breaking a big problem into small steps is the daily routine." },
      { id: "curious", how: "New tools and ideas appear all the time." },
      { id: "patient", how: "Finding a bug can take time and careful testing." },
      { id: "teamwork", how: "Most software is built by teams that review each other's work." },
    ],
    day: [
      { title: "Plan the task", text: "Understand what needs to be built and break it down." },
      { title: "Write code", text: "Turn the plan into working instructions for the computer." },
      { title: "Test and fix bugs", text: "Try the program and fix anything that goes wrong." },
      { title: "Review with teammates", text: "Share code and give and receive feedback." },
      { title: "Release and improve", text: "Publish updates and learn from user feedback." },
    ],
    challenge: {
      title: "Logic loop",
      intro: "Two small questions that developers face all the time.",
      steps: [
        { question: "A program should print 'Hello' three times. Which idea fits best?", options: ["Repeat the print step 3 times (a loop)", "Print once and hope", "Delete the program"], answer: 0, explain: "A loop repeats a step a set number of times." },
        { question: "A program crashes when a user types a letter instead of a number. What should a developer do?", options: ["Check the input and show a helpful message", "Blame the user", "Ignore it"], answer: 0, explain: "Good software checks input and responds helpfully." },
      ],
    },
    related: [
      { slug: "graphic-designer", reason: "Both build digital things people see and use." },
      { slug: "civil-engineer", reason: "Both solve problems with logic, maths and careful testing." },
    ],
    salary: {},
  },
  {
    slug: "graphic-designer",
    name: "Graphic Designer",
    category: "creative",
    summary: "Creates visuals such as logos, posters and websites that communicate ideas.",
    overview:
      "Graphic designers combine images, colour, shapes and text to communicate a message clearly and memorably. They work on branding, posters, packaging, apps and more.",
    purpose: "To communicate ideas visually.",
    dailyWork: "Working to a brief, sketching, using design software and getting feedback.",
    realLifeExample:
      "A school club needs a poster. The designer chooses colours and fonts that fit the event and keeps the key information easy to read.",
    keywords: ["graphic", "logo", "poster", "branding", "illustration", "designer"],
    tags: ["design", "creating", "art", "tech", "studio", "ideas", "team"],
    subjects: [
      { id: "art", why: "Colour, composition and drawing are the foundation of design.", example: "Balancing images and text on a poster." },
      { id: "cs", why: "Design software and digital tools are used every day.", example: "Using layers and vector shapes to build a logo." },
      { id: "languages", why: "Words are part of the design, so clear writing matters.", example: "Choosing a short headline that grabs attention." },
    ],
    skills: ["Visual creativity", "Listening to feedback", "Time management"],
    pathway: [
      { title: "At school", text: "Art or design and IT are commonly useful." },
      { title: "Study or self-learning", text: "Design degrees and diplomas exist, and many designers also learn through courses and practice." },
      { title: "Portfolio", text: "A portfolio of your best work is often more important than a certificate." },
    ],
    enjoy: [
      "Creative variety in every project",
      "Seeing your work out in the world",
      "Mixing art and technology",
      "Freelance options in some roles",
    ],
    consider: [
      "Feedback is subjective, so revisions are common",
      "Tight deadlines can be stressful",
      "The field is competitive",
      "Freelancers may have irregular income",
    ],
    qualities: [
      { id: "creative", how: "Original ideas help work stand out." },
      { id: "detail", how: "Spacing, alignment and colour choices change how a design feels." },
      { id: "communicating", how: "Designers explain their choices and listen to clients." },
      { id: "curious", how: "Trends and tools change, so learning never stops." },
    ],
    day: [
      { title: "Read the brief", text: "Understand who the design is for and what it must say." },
      { title: "Sketch ideas", text: "Try quick drawings before opening the software." },
      { title: "Design on screen", text: "Build the chosen idea with colours, shapes and text." },
      { title: "Get feedback", text: "Share drafts and make improvements." },
      { title: "Finish and deliver", text: "Export files in the right formats for printing or the web." },
    ],
    challenge: {
      title: "Design brief",
      intro: "Make two quick design decisions.",
      steps: [
        { question: "A poster's text is hard to read on a busy photo. What helps most?", options: ["Increase contrast between the text and the background", "Make the text smaller", "Add more decoration"], answer: 0, explain: "Strong contrast makes text easier to read." },
        { question: "Who is a design made for?", options: ["The audience who will see it", "Only the designer", "Nobody in particular"], answer: 0, explain: "Good design starts by thinking about the audience." },
      ],
    },
    related: [
      { slug: "interior-designer", reason: "Both use colour, layout and visual thinking." },
      { slug: "software-developer", reason: "Designers and developers often build digital products together." },
    ],
    salary: {},
  },
  {
    slug: "lawyer",
    name: "Lawyer",
    category: "law",
    summary: "Advises people and organisations on the law and represents them.",
    overview:
      "Lawyers help people understand and use the law. Depending on the role, they advise clients, write documents, negotiate and sometimes speak for clients in court.",
    purpose: "To help people and organisations use the law fairly and effectively.",
    dailyWork: "Reading and researching, writing documents, meeting clients and preparing arguments.",
    realLifeExample:
      "A tenant and a landlord disagree about a contract. A lawyer reads the agreement, finds the relevant rules and helps the client decide what to do.",
    keywords: ["lawyer", "court", "legal", "justice", "solicitor", "attorney"],
    tags: ["justice", "people", "leading", "research", "humanities", "office", "ideas", "team"],
    subjects: [
      { id: "languages", why: "Law depends on precise reading, writing and speaking.", example: "Spotting how one word can change a contract." },
      { id: "humanities", why: "History and society explain where laws come from.", example: "Understanding why a rule was introduced." },
      { id: "business", why: "Contracts and companies are a big part of legal work.", example: "Reading what an agreement says about payment." },
    ],
    skills: ["Clear writing", "Logical argument", "Listening"],
    pathway: [
      { title: "At school", text: "Languages, history and humanities subjects are commonly useful." },
      { title: "Law degree", text: "Routes vary by country, but a law degree is common." },
      { title: "Professional training", text: "Most countries require further training and exams before you can practise." },
    ],
    enjoy: [
      "Helping people with important problems",
      "Researching and building clear arguments",
      "Many specialisations, such as family, business or environmental law",
      "Intellectual challenge",
    ],
    consider: [
      "Long hours in some workplaces",
      "High responsibility and stress",
      "A lot of reading and writing",
      "Competition for some roles",
    ],
    qualities: [
      { id: "communicating", how: "Lawyers explain complex ideas in plain language." },
      { id: "detail", how: "Missing one clause or date can change an outcome." },
      { id: "decisions", how: "Advice affects people's lives, so decisions need careful thought." },
      { id: "curious", how: "Every case needs digging into facts and rules." },
    ],
    day: [
      { title: "Read and research", text: "Study documents and relevant rules." },
      { title: "Meet clients", text: "Listen to the problem and explain options." },
      { title: "Write documents", text: "Prepare contracts, letters or arguments." },
      { title: "Prepare arguments", text: "Plan how to explain the case clearly." },
      { title: "Review and advise", text: "Check the facts and give considered advice." },
    ],
    challenge: {
      title: "Spot the facts",
      intro: "A shop sold a customer a phone that stopped working after one day. This is a learning activity, not legal advice.",
      steps: [
        { question: "Which fact is most relevant to the customer's complaint?", options: ["The phone stopped working after one day", "The colour of the shop's walls", "The customer's favourite song"], answer: 0, explain: "Lawyers focus on the facts that matter to the problem." },
        { question: "What should a lawyer do before giving advice?", options: ["Gather the facts and check the relevant rules", "Guess", "Decide before listening"], answer: 0, explain: "Good advice rests on facts and rules." },
      ],
    },
    related: [
      { slug: "teacher", reason: "Both rely on explaining complex ideas clearly." },
      { slug: "marine-biologist", reason: "Environmental law connects legal work with science." },
    ],
    salary: {},
  },
  {
    slug: "teacher",
    name: "Teacher",
    category: "education",
    summary: "Helps students learn, grow and discover what they can do.",
    overview:
      "Teachers plan lessons, explain ideas in different ways and support students as people. They also check progress and work with families and colleagues.",
    purpose: "To help young people learn and develop.",
    dailyWork: "Planning, teaching, marking and supporting individual students.",
    realLifeExample:
      "A teacher notices several students struggling with fractions, so she shows the idea with pizza slices and then a number line.",
    keywords: ["teacher", "teaching", "school", "education", "professor"],
    tags: ["teaching", "people", "helping", "leading", "team", "ideas"],
    subjects: [
      { id: "languages", why: "Explaining clearly in words is the heart of teaching.", example: "Finding a simple way to describe a hard idea." },
      { id: "math", why: "Teaching a subject means knowing it well enough to explain it several ways.", example: "Showing the same fraction with a picture, a number line and a story." },
      { id: "humanities", why: "Understanding people and society helps you support students.", example: "Connecting a history lesson to students' own lives." },
    ],
    skills: ["Clear explanation", "Patience", "Organisation"],
    pathway: [
      { title: "At school", text: "Do well in the subject you would like to teach." },
      { title: "Degree", text: "A degree in your subject or in education is common." },
      { title: "Teaching qualification", text: "Many countries require a teaching qualification and registration. Routes vary." },
    ],
    enjoy: [
      "Seeing students grow in confidence",
      "Sharing a subject you love",
      "Variety from day to day",
      "Long-term relationships with a school community",
    ],
    consider: [
      "Workload outside lesson time, such as planning and marking",
      "Managing a busy classroom can be tiring",
      "Emotional demands when students struggle",
      "Pay and conditions differ a lot between countries",
    ],
    qualities: [
      { id: "patient", how: "Students learn at different speeds." },
      { id: "communicating", how: "Teachers explain ideas in several ways until they click." },
      { id: "organised", how: "Lessons, marking and meetings all need planning." },
      { id: "helping", how: "Teachers notice who needs extra support." },
    ],
    day: [
      { title: "Plan the lesson", text: "Decide how to explain the topic and what activities to use." },
      { title: "Teach", text: "Explain, ask questions and guide activities." },
      { title: "Support students", text: "Help individuals who are stuck or need a challenge." },
      { title: "Mark and give feedback", text: "Check work and tell students how to improve." },
      { title: "Meet colleagues and families", text: "Share progress and plan next steps." },
    ],
    challenge: {
      title: "Explain it differently",
      intro: "Two classroom situations. What would a great teacher do?",
      steps: [
        { question: "A student doesn't understand fractions. What helps most?", options: ["Try another explanation, such as a picture or example", "Repeat the same words louder", "Move on"], answer: 0, explain: "Trying a different approach often helps students who are stuck." },
        { question: "Why do teachers check understanding during a lesson?", options: ["To find out who needs more help before moving on", "To make lessons longer", "To avoid explaining"], answer: 0, explain: "Checking early lets teachers adjust before gaps grow." },
      ],
    },
    related: [
      { slug: "lawyer", reason: "Both explain complex ideas clearly to different people." },
      { slug: "marine-biologist", reason: "Many scientists also teach, run outreach or work in education." },
    ],
    salary: {},
  },
  {
    slug: "marine-biologist",
    name: "Marine Biologist",
    category: "science",
    summary: "Studies ocean life and how marine ecosystems work.",
    overview:
      "Marine biologists study the animals, plants and microbes that live in the sea and how they interact with their environment. Work can include fieldwork, lab analysis, data analysis and conservation projects.",
    purpose: "To understand and help protect ocean life.",
    dailyWork: "Collecting samples, analysing data, writing reports and sometimes boat or diving work.",
    realLifeExample:
      "A team measures coral health at several reef sites, compares results over time and reports how warming water may affect the reef.",
    keywords: ["marine", "ocean", "coral", "dolphins", "sharks", "fish"],
    tags: ["nature", "science", "experiments", "research", "outdoors", "lab", "travel", "team"],
    subjects: [
      { id: "biology", why: "Understanding living things and ecosystems is the core of the job.", example: "How a food chain links plankton to whales." },
      { id: "chemistry", why: "Water chemistry affects sea life.", example: "How ocean acidity can change conditions for shellfish." },
      { id: "math", why: "Statistics help scientists make sense of data.", example: "Telling a real trend from random variation." },
    ],
    skills: ["Curiosity", "Data analysis", "Patience"],
    pathway: [
      { title: "At school", text: "Biology, chemistry and maths are commonly useful." },
      { title: "Degree", text: "Degrees in marine biology, biology or environmental science are common, and research roles often need further study." },
      { title: "Field skills", text: "Depending on the role, skills such as swimming or diving qualifications may help." },
    ],
    enjoy: [
      "Working with nature and wildlife",
      "Fieldwork and travel in some roles",
      "Contributing to conservation",
      "Mixing science with adventure",
    ],
    consider: [
      "Jobs can be competitive",
      "Much of the work is lab or computer analysis, not just diving",
      "Some research roles depend on funding",
      "Fieldwork can be physically demanding and keep you away from home",
    ],
    qualities: [
      { id: "curious", how: "Every sample can raise new questions." },
      { id: "patient", how: "Studying change in nature often takes months or years." },
      { id: "detail", how: "Careful measurement makes results reliable." },
      { id: "teamwork", how: "Research and fieldwork are usually done in teams." },
    ],
    day: [
      { title: "Plan fieldwork", text: "Decide where, when and what to measure." },
      { title: "Collect samples", text: "Gather water, organisms or measurements." },
      { title: "Analyse in the lab", text: "Examine samples and record results carefully." },
      { title: "Study the data", text: "Look for patterns and test ideas." },
      { title: "Share findings", text: "Write reports and talk about the results." },
    ],
    challenge: {
      title: "Reef detective",
      intro: "Think like a scientist studying a coral reef.",
      steps: [
        { question: "Scientists want to know whether coral health is changing. What is most useful?", options: ["Measure the same sites repeatedly over time", "Look once and guess", "Only read old stories"], answer: 0, explain: "Repeated measurements show change over time." },
        { question: "Why do marine biologists measure water temperature?", options: ["Temperature can affect how sea life survives and grows", "It makes the data look bigger", "It doesn't matter"], answer: 0, explain: "Temperature is one of the key conditions for ocean life." },
      ],
    },
    related: [
      { slug: "pharmacist", reason: "Researchers study marine organisms for ideas that may lead to new medicines." },
      { slug: "civil-engineer", reason: "Some coastal projects involve both engineers and marine scientists." },
    ],
    salary: {},
  },
];
