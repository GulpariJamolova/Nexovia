import type { Seed } from "./careers-build";

export const scienceSeeds: Seed[] = [
  {
    slug: "statistician",
    name: "Statistician",
    category: "science",
    summary: "Designs studies and uses numbers to find out what is really true.",
    overview:
      "Statisticians plan how to collect data, analyse it and explain what it means. They work in health, sport, government, business and science, helping people avoid being fooled by chance.",
    purpose: "To turn data into reliable conclusions.",
    dailyWork: "Designing surveys and experiments, analysing data with software and writing clear reports.",
    example:
      "Researchers test a new medicine. The statistician decides how many patients are needed, analyses the results and explains whether the effect is real.",
    kw: ["statistician", "statistics", "probability", "survey", "biostatistician"],
    tags: ["data", "puzzles", "research", "office", "science", "ideas"],
    subj: [
      ["math", "Probability and statistics are the core.", "Calculating an average and spread."],
      ["cs", "Statistical software and programming are used daily.", "Running an analysis in code."],
      ["languages", "Results must be explained clearly.", "Writing a plain-language summary."],
    ],
    skills: ["Maths", "Careful thinking", "Explaining results"],
    path: [
      ["Degree", "Most statisticians study statistics, maths or a related subject, and many gain a master's degree."],
      ["Experience", "Projects, internships and research help."],
    ],
    enjoy: ["Finding the truth in data", "Work in many fields", "Strong demand for data skills", "Mix of maths and real problems"],
    consider: ["Needs strong maths", "Results can be uncertain", "Computer-based work", "Explaining limits to non-experts"],
    qual: [["detail", "Small errors change results."], ["curious", "Good questions drive good analysis."], ["problem-solving", "Each dataset is a puzzle."], ["communicating", "Findings must be understood."]],
    day: [["Plan the study", "Decide what data is needed."], ["Collect data", "Gather information."], ["Analyse", "Use statistical methods."], ["Check", "Test whether results are reliable."], ["Report", "Explain the findings."]],
    quiz: { title: "Is it chance?", intro: "Think like a statistician.", q: [
      ["You flip a coin 4 times and get 3 heads. Does it prove the coin is unfair?", ["No, small samples can look unusual by chance", "Yes, definitely", "Coins cannot be flipped"], 0, "Small samples can mislead."],
      ["Why do statisticians prefer larger samples?", ["They give more reliable results", "They are cheaper", "They are shorter"], 0, "More data reduces the effect of chance."]] },
    related: [["data-scientist", "Both analyse data."], ["data-analyst", "Both explain numbers."], ["mathematician", "Both love maths."]],
  },
  {
    slug: "chemist",
    name: "Chemist",
    category: "science",
    summary: "Studies substances and how they change, to create new materials, medicines and products.",
    overview:
      "Chemists work in laboratories and factories to test materials, discover new compounds and make products such as medicines, plastics and foods safer and better.",
    purpose: "To understand and improve the materials around us.",
    dailyWork: "Running experiments, analysing samples, recording results and working safely with equipment.",
    example:
      "A company wants a cleaner fuel. The chemist tests different mixtures, measures how they burn and picks the best one.",
    kw: ["chemist", "chemistry", "laboratory", "lab scientist", "analytical chemist"],
    tags: ["science", "lab", "experiments", "research", "puzzles", "things"],
    subj: [
      ["chemistry", "The core subject.", "Balancing a reaction."],
      ["math", "Calculations and data are everywhere.", "Working out concentrations."],
      ["physics", "Energy and matter connect.", "Measuring temperature changes."],
    ],
    skills: ["Careful experimenting", "Safety", "Analysis"],
    path: [
      ["Degree", "Chemists normally study chemistry, and some continue to a master's or doctorate."],
      ["Lab experience", "Placements and projects help."],
    ],
    enjoy: ["Hands-on experiments", "Discovering how things work", "Jobs in industry, health and research", "Making things safer and better"],
    consider: ["Safety rules are strict", "Repeated experiments", "Research funding can be competitive", "Detailed record keeping"],
    qual: [["detail", "Measurements must be exact."], ["patient", "Experiments take time."], ["curious", "Chemists ask why substances behave as they do."], ["organised", "Results must be recorded carefully."]],
    day: [["Plan", "Design the experiment."], ["Prepare", "Set up safely."], ["Test", "Run reactions and measure."], ["Record", "Write down results."], ["Analyse", "Decide what the results mean."]],
    quiz: { title: "Lab safety", intro: "Think like a chemist.", q: [
      ["Why do chemists wear safety goggles?", ["To protect their eyes", "To look cool", "To see better"], 0, "Chemicals can splash."],
      ["Why are experiments repeated?", ["To check results are reliable", "To use more chemicals", "Because first attempts never work"], 0, "Repeating checks consistency."]] },
    related: [["chemical-engineer", "Engineers scale chemistry to industry."], ["pharmacist", "Both work with chemicals and medicines."], ["forensic-scientist", "Both use lab analysis."]],
  },
  {
    slug: "physicist",
    name: "Physicist",
    category: "science",
    summary: "Investigates matter, energy, forces and the universe.",
    overview:
      "Physicists study how the universe works, from tiny particles to galaxies. They work in universities, laboratories, technology companies, energy, medicine and space research.",
    purpose: "To understand the laws of nature and apply them.",
    dailyWork: "Designing experiments, analysing data, building models and writing research.",
    example:
      "A physicist is testing a new solar cell material. She measures how much light it converts into electricity and compares results.",
    kw: ["physicist", "physics", "quantum", "particle physics", "astrophysics"],
    tags: ["science", "research", "puzzles", "experiments", "lab", "ideas", "data"],
    subj: [
      ["physics", "The core subject.", "Calculating force and motion."],
      ["math", "Maths is the language of physics.", "Using equations to predict results."],
      ["cs", "Computers simulate and analyse data.", "Modelling a system."],
    ],
    skills: ["Maths", "Logical thinking", "Experiments"],
    path: [
      ["Degree", "Physicists study physics, often continuing to a master's or doctorate."],
      ["Research", "Projects and placements help build experience."],
    ],
    enjoy: ["Understanding the universe", "Work in research and technology", "Strong problem-solving skills", "Opportunities in many industries"],
    consider: ["Very demanding maths", "Long study path", "Competitive research jobs", "Results can take years"],
    qual: [["curious", "Physicists ask why."], ["problem-solving", "Each problem needs creative thinking."], ["patient", "Research is slow."], ["detail", "Measurements must be careful."]],
    day: [["Plan", "Choose a question."], ["Model", "Use maths or computers."], ["Experiment", "Collect data."], ["Analyse", "Compare to predictions."], ["Share", "Write up results."]],
    quiz: { title: "Motion", intro: "A little physics.", q: [
      ["A car travels 60 km in 2 hours. What is its average speed?", ["30 km/h", "120 km/h", "60 km/h"], 0, "Speed = distance ÷ time = 30 km/h."],
      ["Why do physicists use maths?", ["To describe and predict nature precisely", "To make things confusing", "It is not needed"], 0, "Maths expresses laws exactly."]] },
    related: [["nuclear-engineer", "Both use physics."], ["astronomer", "Both study the universe."], ["university-lecturer", "Many physicists teach and research."]],
  },
  {
    slug: "geologist",
    name: "Geologist",
    category: "science",
    summary: "Studies rocks, minerals and the Earth's history and resources.",
    overview:
      "Geologists explore the Earth to find resources such as water and minerals, understand earthquakes and volcanoes, and help build safely. Many work outdoors and in labs.",
    purpose: "To understand the Earth and use its resources wisely.",
    dailyWork: "Collecting rock samples, mapping land, analysing data and writing reports.",
    example:
      "Before building a tunnel, a geologist studies the rocks to check they are strong and safe.",
    kw: ["geologist", "geology", "rocks", "minerals", "earth scientist", "geoscientist"],
    tags: ["science", "outdoors", "nature", "research", "lab", "travel", "things"],
    subj: [
      ["chemistry", "Rocks and minerals are chemical.", "Identifying minerals."],
      ["physics", "Forces shape the Earth.", "How earthquakes travel."],
      ["humanities", "Geography and Earth history are linked.", "Reading a map."],
    ],
    skills: ["Observation", "Fieldwork", "Analysis"],
    path: [
      ["Degree", "Geologists usually study geology or earth science, and some continue to a master's."],
      ["Fieldwork", "Field courses and placements are important."],
    ],
    enjoy: ["Outdoor fieldwork and travel", "Understanding the planet", "Jobs in energy, construction and the environment", "Variety of locations"],
    consider: ["Remote or tough working conditions", "Time away from home", "Mixed lab and outdoor work", "Industry jobs depend on the market"],
    qual: [["curious", "Geologists read the Earth's story."], ["detail", "Observation is key."], ["patient", "Samples take time to analyse."], ["independent", "Fieldwork may be solo."]],
    day: [["Plan fieldwork", "Prepare equipment and maps."], ["Collect samples", "Gather rocks and data."], ["Map", "Record observations."], ["Analyse", "Use lab tests."], ["Report", "Explain the findings."]],
    quiz: { title: "Read the rocks", intro: "Think like a geologist.", q: [
      ["Why do geologists study rocks before a big building project?", ["To check the ground is safe", "To pick colours", "To save paint"], 0, "Ground strength affects safety."],
      ["Why do geologists take samples?", ["To analyse them in detail", "To collect souvenirs", "To make piles"], 0, "Samples reveal composition and age."]] },
    related: [["petroleum-engineer", "Both study the ground for resources."], ["civil-engineer", "Both need ground knowledge."], ["environmental-scientist", "Both study Earth systems."]],
  },
  {
    slug: "astronomer",
    name: "Astronomer",
    category: "science",
    summary: "Studies stars, planets, galaxies and the universe.",
    overview:
      "Astronomers use telescopes, satellites and computers to study objects in space. They research how stars form, how planets move and how the universe began and changes.",
    purpose: "To discover how the universe works.",
    dailyWork: "Analysing observations, running simulations, writing papers and sometimes using telescopes.",
    example:
      "An astronomer studies the dimming of a distant star to work out whether a planet is passing in front of it.",
    kw: ["astronomer", "astronomy", "space", "astrophysicist", "telescope", "cosmology"],
    tags: ["science", "research", "puzzles", "ideas", "data", "lab", "experiments"],
    subj: [
      ["physics", "The universe follows physical laws.", "Gravity and orbits."],
      ["math", "Calculations describe motion and distance.", "Working out how far away a star is."],
      ["cs", "Computers analyse huge data sets.", "Processing telescope images."],
    ],
    skills: ["Maths", "Data analysis", "Curiosity"],
    path: [
      ["Degree", "Astronomers study physics or astronomy and usually complete a doctorate."],
      ["Research", "University projects and observatory placements help."],
    ],
    enjoy: ["Exploring the biggest questions", "Working with advanced technology", "International collaboration", "Fascinating discoveries"],
    consider: ["Very competitive jobs", "Long training", "Observations at night or remote sites", "Funding can be limited"],
    qual: [["curious", "Astronomers love big questions."], ["patient", "Observations take time."], ["problem-solving", "Data must be interpreted."], ["detail", "Tiny signals matter."]],
    day: [["Plan observations", "Choose targets."], ["Collect data", "Use telescopes or archives."], ["Analyse", "Process the data."], ["Model", "Test ideas with simulations."], ["Share", "Write up results."]],
    quiz: { title: "Look up", intro: "Think about space.", q: [
      ["Why do astronomers use telescopes in space?", ["The atmosphere does not blur the view", "Space is warm", "It is cheaper"], 0, "Space telescopes see more clearly."],
      ["Which force keeps planets in orbit around the Sun?", ["Gravity", "Friction", "Magnetism only"], 0, "Gravity holds planets in orbit."]] },
    related: [["physicist", "Both study the laws of nature."], ["aerospace-engineer", "Both work with space."], ["data-scientist", "Both analyse large data."]],
  },
  {
    slug: "meteorologist",
    name: "Meteorologist",
    category: "science",
    summary: "Studies the atmosphere to forecast the weather and understand climate.",
    overview:
      "Meteorologists collect data from satellites, radar and weather stations, run computer models and forecast weather. Forecasts help airports, farmers, emergency services and the public.",
    purpose: "To predict weather and keep people safe and informed.",
    dailyWork: "Studying data, running forecast models, writing forecasts and warnings.",
    example:
      "A storm is forming over the sea. The meteorologist tracks it, predicts its path and issues a warning to the coast.",
    kw: ["meteorologist", "weather", "forecaster", "climate scientist", "atmospheric scientist"],
    tags: ["science", "data", "research", "nature", "outdoors", "office", "puzzles"],
    subj: [
      ["physics", "Weather is physics of air, heat and water.", "How warm air rises."],
      ["math", "Forecast models rely on maths.", "Reading graphs of pressure."],
      ["cs", "Computer models make forecasts.", "Running a simulation."],
    ],
    skills: ["Data analysis", "Maths", "Explaining clearly"],
    path: [
      ["Degree", "Meteorologists usually study meteorology, physics, maths or environmental science."],
      ["Training", "Many join national weather services or research groups."],
    ],
    enjoy: ["Keeping people safe", "Mix of science and technology", "Seeing forecasts used", "Work in weather services, aviation and research"],
    consider: ["Shift work in forecasting offices", "Forecasts are never perfect", "Pressure during severe weather", "Competitive roles"],
    qual: [["detail", "Small changes in data matter."], ["decisions", "Warnings must be issued at the right time."], ["curious", "Weather keeps surprising."], ["communicating", "Forecasts must be clear."]],
    day: [["Collect data", "Check satellites and stations."], ["Run models", "Use computer forecasts."], ["Interpret", "Apply experience."], ["Forecast", "Write clear predictions."], ["Warn", "Alert people when needed."]],
    quiz: { title: "Read the weather", intro: "Think like a forecaster.", q: [
      ["Falling air pressure often means...", ["Unsettled or stormy weather may be coming", "Perfect sunshine always", "Nothing at all"], 0, "Falling pressure often brings clouds and rain."],
      ["Why do forecasts become less certain further ahead?", ["Small changes grow over time", "Computers get tired", "Weather stops"], 0, "Atmosphere is complex and changes quickly."]] },
    related: [["environmental-scientist", "Both study the environment."], ["pilot", "Pilots rely on weather forecasts."], ["physicist", "Both use physics."]],
  },
  {
    slug: "forensic-scientist",
    name: "Forensic Scientist",
    category: "science",
    summary: "Uses science to analyse evidence from crimes and accidents.",
    overview:
      "Forensic scientists examine evidence such as fingerprints, DNA, chemicals and digital data. Their careful work helps police and courts find out what happened.",
    purpose: "To provide reliable, scientific evidence.",
    dailyWork: "Analysing samples in the lab, recording results, writing reports and sometimes explaining findings in court.",
    example:
      "After a break-in, a forensic scientist compares fingerprints from the scene with records and writes a report for the police.",
    kw: ["forensic scientist", "forensics", "csi", "crime lab", "forensic", "dna analyst"],
    tags: ["science", "lab", "justice", "puzzles", "research", "experiments", "things"],
    subj: [
      ["chemistry", "Many tests are chemical.", "Identifying a substance."],
      ["biology", "DNA and body evidence.", "How DNA is analysed."],
      ["cs", "Digital evidence is common.", "Recovering deleted files."],
    ],
    skills: ["Accuracy", "Honesty", "Scientific method"],
    path: [
      ["Degree", "Forensic scientists usually study forensic science, chemistry, biology or a related subject."],
      ["Training", "Laboratory work and professional training follow."],
    ],
    enjoy: ["Solving real puzzles", "Contributing to justice", "Hands-on lab work", "Variety of cases"],
    consider: ["Can involve disturbing cases", "Careful, repetitive lab work", "Pressure to be exact", "Court appearances"],
    qual: [["detail", "Tiny clues matter."], ["patient", "Tests take time."], ["decisions", "Scientists judge what evidence shows."], ["organised", "Evidence must be tracked."]],
    day: [["Receive evidence", "Log items carefully."], ["Test", "Analyse samples."], ["Compare", "Match results to records."], ["Report", "Write precise findings."], ["Explain", "Present in court if needed."]],
    quiz: { title: "Evidence chain", intro: "Think like a forensic scientist.", q: [
      ["Why must evidence be handled carefully?", ["So it is not contaminated or changed", "To make it heavier", "It does not matter"], 0, "Contamination ruins evidence."],
      ["Why do scientists record every step?", ["So others can check the work", "To fill pages", "To hide mistakes"], 0, "Clear records show the work is reliable."]] },
    related: [["police-officer", "Police use forensic evidence."], ["chemist", "Both do lab analysis."], ["lawyer", "Courts use forensic findings."]],
  },
  {
    slug: "environmental-scientist",
    name: "Environmental Scientist",
    category: "science",
    summary: "Studies nature and pollution to protect the environment.",
    overview:
      "Environmental scientists measure air, water and soil quality, study ecosystems and advise governments and companies on reducing harm and protecting nature.",
    purpose: "To protect ecosystems and human health.",
    dailyWork: "Collecting samples, analysing data, writing reports and advising on solutions.",
    example:
      "A river looks polluted. The scientist tests water samples, finds the source and recommends cleaning steps.",
    kw: ["environmental scientist", "ecologist", "conservation", "sustainability", "climate", "environment"],
    tags: ["science", "nature", "outdoors", "research", "helping", "lab", "data", "travel"],
    subj: [
      ["biology", "Ecosystems and living things.", "How food chains work."],
      ["chemistry", "Pollution is chemical.", "Testing water."],
      ["humanities", "Policy and geography matter.", "Reading environmental laws."],
    ],
    skills: ["Fieldwork", "Data analysis", "Communication"],
    path: [
      ["Degree", "Environmental scientists usually study environmental science, biology, chemistry or geography."],
      ["Experience", "Fieldwork and volunteering help."],
    ],
    enjoy: ["Protecting nature", "Outdoor and lab work", "Contributing to climate solutions", "Growing demand for sustainability skills"],
    consider: ["Fieldwork in difficult weather", "Slow change", "Funding can vary", "Needs strong data skills"],
    qual: [["curious", "Nature raises many questions."], ["detail", "Samples must be accurate."], ["helping", "Work benefits communities."], ["communicating", "Findings must be shared."]],
    day: [["Plan fieldwork", "Prepare sampling."], ["Collect samples", "Gather water, soil or air data."], ["Analyse", "Test and compare."], ["Report", "Explain the results."], ["Advise", "Recommend actions."]],
    quiz: { title: "Protect nature", intro: "Make an environmental decision.", q: [
      ["Why do scientists test water at several places along a river?", ["To find where pollution enters", "To waste time", "To change the river"], 0, "Comparing sites shows the source."],
      ["Why is long-term monitoring useful?", ["It reveals trends", "It costs more", "It makes things worse"], 0, "Trends show whether things improve."]] },
    related: [["environmental-engineer", "Engineers design solutions for environmental problems."], ["marine-biologist", "Both study nature."], ["geologist", "Both study Earth."]],
  },
  {
    slug: "mathematician",
    name: "Mathematician",
    category: "science",
    summary: "Explores patterns, structures and problems using mathematical thinking.",
    overview:
      "Mathematicians solve abstract and practical problems, from the mathematics behind codes and finance to physics and AI. Many work in universities, banks, technology and government.",
    purpose: "To discover and apply mathematical ideas.",
    dailyWork: "Developing proofs and models, solving problems and working with other specialists.",
    example:
      "A mathematician helps a delivery company find the shortest route for a hundred stops by building a model.",
    kw: ["mathematician", "maths", "mathematics", "applied mathematician", "cryptographer", "actuary"],
    tags: ["puzzles", "research", "ideas", "science", "data", "office"],
    subj: [
      ["math", "The core subject.", "Proving a pattern is always true."],
      ["cs", "Computers test and apply maths.", "Coding a simulation."],
      ["physics", "Maths describes nature.", "Modelling motion."],
    ],
    skills: ["Logical thinking", "Persistence", "Creativity"],
    path: [
      ["Degree", "Mathematicians study mathematics, often to master's or doctorate level."],
      ["Specialise", "They may choose pure maths, applied maths or related fields."],
    ],
    enjoy: ["Solving deep puzzles", "Many career options", "Strong problem-solving skills", "Work in technology, finance and research"],
    consider: ["Abstract work", "Long periods stuck on a problem", "Competitive academic jobs", "Needs high-level maths"],
    qual: [["problem-solving", "Maths is solving puzzles."], ["patient", "Hard problems take time."], ["creative", "Proofs need ingenuity."], ["detail", "Logic must be exact."]],
    day: [["Study the problem", "Understand what is asked."], ["Try approaches", "Test ideas."], ["Prove or model", "Build a solution."], ["Check", "Look for errors."], ["Share", "Explain results to others."]],
    quiz: { title: "Number patterns", intro: "Think like a mathematician.", q: [
      ["What comes next: 2, 4, 8, 16, ...?", ["32", "20", "24"], 0, "Each number doubles."],
      ["Why do mathematicians prove things?", ["To be sure something is always true", "To make work longer", "To avoid examples"], 0, "Proof shows truth in all cases."]] },
    related: [["statistician", "Both use maths on real problems."], ["data-scientist", "Both use maths and data."], ["physicist", "Both rely on maths."]],
  },
];
