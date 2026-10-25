import type { Seed } from "./careers-build";

export const transportSeeds: Seed[] = [
  {
    slug: "pilot",
    name: "Pilot",
    category: "transport",
    summary: "Flies aircraft safely, carrying passengers or cargo around the world.",
    overview:
      "Pilots plan flights, check weather and aircraft, communicate with air traffic control and fly planes or helicopters. Airline pilots usually work as a captain and first officer team.",
    purpose: "To get passengers and cargo to their destination safely.",
    dailyWork: "Planning flights, checking aircraft, flying, communicating with controllers and writing reports.",
    example:
      "Before a long flight, a pilot checks the weather, fuel and route, briefs the crew, then flies the plane and lands safely.",
    kw: ["pilot", "aviation", "airline pilot", "captain", "flying", "aircraft", "helicopter pilot"],
    tags: ["travel", "tech", "leading", "team", "outdoors", "things"],
    subj: [
      ["physics", "How planes fly and navigate.", "Why wings create lift."],
      ["math", "Navigation, fuel and speed calculations.", "Working out fuel needed."],
      ["languages", "English is the language of aviation.", "Clear radio communication."],
    ],
    skills: ["Concentration", "Decision-making under pressure", "Teamwork"],
    path: [
      ["Flight training", "Pilots complete approved flight training, pass medical checks and earn licences. Routes include flight schools and airline cadet programmes."],
      ["Build hours", "Pilots build flying hours and experience before reaching airline roles."],
    ],
    enjoy: ["Travelling the world", "Exciting, responsible work", "Using advanced technology", "Respected profession"],
    consider: ["Training is long and expensive", "Irregular hours and time away from home", "Strict medical standards", "Heavy responsibility"],
    qual: [["decisions", "Pilots make fast, careful choices."], ["detail", "Checks must be exact."], ["teamwork", "Crews depend on each other."], ["patient", "Training and long flights need calm focus."]],
    day: [["Plan", "Check route, weather and fuel."], ["Brief the crew", "Share the plan."], ["Pre-flight checks", "Inspect the aircraft."], ["Fly", "Take off, cruise and land."], ["Report", "Record the flight."]],
    quiz: { title: "Flight check", intro: "Think like a pilot.", q: [
      ["Why do pilots use checklists?", ["To avoid forgetting important steps", "To fill time", "Pilots never forget"], 0, "Checklists improve safety."],
      ["A plane travels 800 km in 2 hours. What is its average speed?", ["400 km/h", "1600 km/h", "800 km/h"], 0, "800 ÷ 2 = 400."]] },
    related: [["flight-attendant", "Both work in the cabin and cockpit team."], ["air-traffic-controller", "Pilots talk to controllers all flight."], ["aerospace-engineer", "Engineers design the planes pilots fly."]],
  },
  {
    slug: "flight-attendant",
    name: "Flight Attendant",
    category: "transport",
    summary: "Keeps passengers safe and comfortable on flights.",
    overview:
      "Flight attendants carry out safety checks, demonstrate safety procedures, serve passengers and respond to emergencies. They work in teams and travel to many countries.",
    purpose: "To keep passengers safe and looked after during flights.",
    dailyWork: "Preparing the cabin, welcoming passengers, safety demonstrations, serving and helping people.",
    example:
      "During turbulence, the attendant calmly checks passengers are seated, secures the cabin and reassures a nervous child.",
    kw: ["flight attendant", "cabin crew", "air hostess", "steward", "stewardess", "airline"],
    tags: ["travel", "people", "helping", "team", "things"],
    subj: [
      ["languages", "Speaking with passengers from many countries.", "Learning another language."],
      ["biology", "First aid and body safety.", "Basic first aid."],
      ["humanities", "Understanding cultures.", "Respecting differences."],
    ],
    skills: ["Customer service", "Calm under pressure", "Teamwork"],
    path: [
      ["Application and training", "Airlines set their own requirements, and new recruits complete safety and first-aid training."],
      ["Experience", "Customer-service experience helps applications."],
    ],
    enjoy: ["Travel and new places", "Meeting many people", "Varied schedule", "Teamwork"],
    consider: ["Irregular hours and time away", "Long shifts", "Jet lag", "Demanding passengers sometimes"],
    qual: [["helping", "Passenger care is the job."], ["teamwork", "Cabin crews rely on each other."], ["communicating", "Clear communication is needed."], ["decisions", "Staff act quickly in emergencies."]],
    day: [["Brief", "Meet the crew."], ["Check", "Inspect safety equipment."], ["Welcome", "Greet passengers."], ["Serve", "Look after passengers."], ["Safety", "Respond to any issue."]],
    quiz: { title: "Cabin care", intro: "Make cabin decisions.", q: [
      ["Why do attendants demonstrate safety procedures?", ["So passengers know what to do in an emergency", "To pass time", "It is optional"], 0, "Preparation saves lives."],
      ["A passenger is anxious. What helps?", ["Calm, kind reassurance", "Ignoring them", "Laughing"], 0, "Calm support helps."]] },
    related: [["pilot", "Pilots and cabin crew work together."], ["airport-operations-officer", "Both work in aviation."], ["paramedic", "Both use first aid."]],
  },
  {
    slug: "air-traffic-controller",
    name: "Air Traffic Controller",
    category: "transport",
    summary: "Guides aircraft safely in the sky and on the ground.",
    overview:
      "Air traffic controllers use radar and radio to give pilots instructions, keep planes at safe distances and manage take-offs and landings.",
    purpose: "To keep aircraft separated and flowing safely.",
    dailyWork: "Monitoring radar, talking to pilots, planning aircraft sequence and handling emergencies.",
    example:
      "Two planes are heading for the same airspace. The controller changes their heights and routes so they stay far apart.",
    kw: ["air traffic controller", "atc", "air traffic", "airport", "control tower", "aviation"],
    tags: ["tech", "puzzles", "team", "office", "things"],
    subj: [
      ["physics", "Understanding flight and radar.", "How radar detects planes."],
      ["math", "Speed, distance and timing.", "Calculating separation."],
      ["languages", "Clear English communication.", "Giving a short, exact instruction."],
    ],
    skills: ["Concentration", "Quick decisions", "Clear speech"],
    path: [
      ["Selection and training", "Controllers pass demanding selection tests and complete extensive training with an aviation authority."],
      ["Licensing", "Licences are required for each type of control."],
    ],
    enjoy: ["Responsible, exciting work", "Teamwork", "Use of advanced technology", "Respected role"],
    consider: ["High stress", "Shift work", "Strict medical and performance checks", "Long training"],
    qual: [["decisions", "Fast, accurate choices."], ["detail", "Small errors matter."], ["communicating", "Instructions must be clear."], ["teamwork", "Controllers share information."]],
    day: [["Briefing", "Learn current conditions."], ["Monitor", "Watch radar."], ["Instruct", "Talk to pilots."], ["Coordinate", "Work with other sectors."], ["Handover", "Pass on information."]],
    quiz: { title: "Keep them apart", intro: "Think like a controller.", q: [
      ["Why do controllers keep planes separated?", ["To prevent collisions", "To save fuel only", "To make flights longer"], 0, "Separation is the main safety goal."],
      ["Why is clear radio language important?", ["Mistakes can be dangerous", "It sounds fancy", "It is not important"], 0, "Clear communication prevents errors."]] },
    related: [["pilot", "Pilots take instructions from controllers."], ["airport-operations-officer", "Both work at airports."], ["aerospace-engineer", "Both work in aviation."]],
  },
  {
    slug: "airport-operations-officer",
    name: "Airport Worker (Operations Officer)",
    category: "transport",
    summary: "Keeps an airport running, from check-in to boarding and baggage.",
    overview:
      "Airport staff include check-in agents, ground handlers, security staff and operations officers. They coordinate passengers, bags, aircraft and safety so flights run on time.",
    purpose: "To keep passengers and aircraft moving smoothly and safely.",
    dailyWork: "Checking passengers in, coordinating baggage and aircraft, solving problems and following safety rules.",
    example:
      "A flight is delayed. The operations officer informs passengers, updates the boarding plan and coordinates with ground staff.",
    kw: ["airport worker", "airport", "ground staff", "operations officer", "check-in agent", "baggage handler", "airport staff"],
    tags: ["travel", "people", "team", "things", "helping", "leading"],
    subj: [
      ["languages", "Helping passengers from many countries.", "Giving clear directions."],
      ["business", "Operations and customer service.", "Planning schedules."],
      ["math", "Timing and numbers.", "Calculating turnaround times."],
    ],
    skills: ["Customer service", "Organisation", "Calm under pressure"],
    path: [
      ["Entry roles", "Many airport jobs need school qualifications plus on-the-job training."],
      ["Progression", "Staff can grow into supervisor and operations roles."],
    ],
    enjoy: ["Busy, international environment", "Teamwork", "Variety", "Opportunities in growing airports"],
    consider: ["Shift work", "Busy, noisy settings", "Dealing with delays and stress", "Physical work in some roles"],
    qual: [["organised", "Many flights and tasks."], ["helping", "Passengers need support."], ["teamwork", "Many teams work together."], ["decisions", "Quick fixes during delays."]],
    day: [["Briefing", "Check the day's flights."], ["Assist passengers", "Answer questions."], ["Coordinate", "Work with ground teams."], ["Solve problems", "Handle delays."], ["Report", "Record issues."]],
    quiz: { title: "Keep it moving", intro: "Make airport decisions.", q: [
      ["A flight is delayed. What should staff do first?", ["Inform passengers clearly", "Hide it", "Close the gate"], 0, "Clear communication reduces stress."],
      ["Why are bags checked and tagged?", ["To get them onto the right flight", "To make them heavier", "No reason"], 0, "Tags prevent lost bags."]] },
    related: [["flight-attendant", "Both help passengers."], ["air-traffic-controller", "Both help flights run safely."], ["logistics-manager", "Both move people and goods."]],
  },
  {
    slug: "ship-captain",
    name: "Ship Captain",
    category: "transport",
    summary: "Commands a ship and is responsible for its crew, cargo and safety.",
    overview:
      "Ship captains navigate vessels such as cargo ships, ferries and cruise ships. They plan routes, manage crew, follow maritime rules and handle emergencies.",
    purpose: "To move people and goods safely across the sea.",
    dailyWork: "Planning routes, navigating, leading the crew, checking weather and keeping records.",
    example:
      "A storm is forecast. The captain changes the route, secures the cargo and informs the port.",
    kw: ["ship captain", "captain", "seafarer", "mariner", "sailor", "merchant navy", "ferry"],
    tags: ["travel", "leading", "team", "outdoors", "things"],
    subj: [
      ["physics", "Ships float and move by physics.", "Why heavy ships float."],
      ["math", "Navigation needs calculations.", "Plotting a course."],
      ["languages", "International crews and ports.", "Radio communication."],
    ],
    skills: ["Leadership", "Navigation", "Calm under pressure"],
    path: [
      ["Maritime training", "Officers complete maritime academy training and earn certificates as they gain sea experience."],
      ["Experience", "Captains typically serve many years as officers."],
    ],
    enjoy: ["Travel and adventure", "Leadership", "Responsibility", "Seeing the world"],
    consider: ["Long periods away from home", "Hard conditions", "Heavy responsibility", "Long route to captain"],
    qual: [["decisions", "Captains make high-stakes choices."], ["teamwork", "Crew rely on each other."], ["detail", "Navigation must be exact."], ["patient", "Voyages are long."]],
    day: [["Check route", "Review weather and charts."], ["Brief crew", "Share tasks."], ["Navigate", "Steer and monitor."], ["Inspect", "Check safety."], ["Log", "Record events."]],
    quiz: { title: "Chart the course", intro: "Think like a captain.", q: [
      ["Why check weather before sailing?", ["To avoid danger", "To pass time", "To choose music"], 0, "Weather affects safety."],
      ["A ship sails 120 km in 4 hours. What is its speed?", ["30 km/h", "480 km/h", "24 km/h"], 0, "120 ÷ 4 = 30."]] },
    related: [["pilot", "Both navigate and lead crews."], ["logistics-manager", "Ships carry goods."], ["marine-biologist", "Both work at sea."]],
  },
  {
    slug: "logistics-manager",
    name: "Logistics Manager",
    category: "transport",
    summary: "Plans how goods are stored, moved and delivered.",
    overview:
      "Logistics managers organise warehouses, transport and delivery so products arrive on time and at low cost. They work for shops, airlines, ports, factories and delivery companies.",
    purpose: "To get the right goods to the right place at the right time.",
    dailyWork: "Planning routes, managing stock, working with drivers and suppliers and solving delays.",
    example:
      "A shop expects high demand before a holiday. The manager orders extra stock, plans deliveries and schedules extra drivers.",
    kw: ["logistics manager", "logistics", "supply chain", "warehouse", "delivery", "shipping", "freight"],
    tags: ["leading", "team", "office", "puzzles", "data", "things", "travel"],
    subj: [
      ["math", "Planning routes and stock.", "Calculating delivery times."],
      ["business", "Costs and suppliers.", "Comparing shipping prices."],
      ["cs", "Tracking systems and software.", "Using a stock database."],
    ],
    skills: ["Planning", "Problem-solving", "Leadership"],
    path: [
      ["Study or experience", "Many logisticians study logistics, supply chain or business, while others start in warehouses or transport."],
      ["Certificates", "Professional certificates are common."],
    ],
    enjoy: ["Solving planning puzzles", "Strong demand in trading hubs", "Variety", "Leading teams"],
    consider: ["Pressure from deadlines", "Delays outside your control", "Long hours at peak times", "Many moving parts"],
    qual: [["organised", "Many deliveries to track."], ["problem-solving", "Delays must be solved."], ["decisions", "Choose the best routes."], ["teamwork", "Work with many partners."]],
    day: [["Check orders", "See what must move."], ["Plan routes", "Choose transport."], ["Coordinate", "Work with drivers."], ["Track", "Monitor deliveries."], ["Solve", "Handle delays."]],
    quiz: { title: "Deliver on time", intro: "Plan the route.", q: [
      ["Why group deliveries going the same way?", ["Saves time and cost", "Wastes fuel", "Slows deliveries"], 0, "Grouping improves efficiency."],
      ["Why track stock levels?", ["To avoid running out or overstocking", "To fill spreadsheets", "No reason"], 0, "Balanced stock saves money."]] },
    related: [["project-manager", "Both plan complex work."], ["ship-captain", "Ships move goods."], ["airport-operations-officer", "Airports move people and cargo."]],
  },
];

export const sportSeeds: Seed[] = [
  {
    slug: "personal-trainer",
    name: "Personal Trainer",
    category: "sport",
    summary: "Designs exercise programmes and coaches people toward their fitness goals.",
    overview:
      "Personal trainers assess fitness, plan safe workouts, teach technique and motivate clients in gyms, studios, schools and online.",
    purpose: "To help people become stronger, fitter and healthier.",
    dailyWork: "Assessing clients, planning programmes, coaching sessions and tracking progress.",
    example:
      "A client wants to run 5 km. The trainer builds a step-by-step plan, checks technique and adjusts it as the client improves.",
    kw: ["personal trainer", "fitness trainer", "gym instructor", "fitness coach", "fitness"],
    tags: ["health", "people", "helping", "teaching", "outdoors", "team"],
    subj: [
      ["pe", "Exercise and health knowledge.", "Planning a safe warm-up."],
      ["biology", "How the body works.", "How muscles grow."],
      ["business", "Many trainers work for themselves.", "Setting prices."],
    ],
    skills: ["Motivation", "Fitness knowledge", "Communication"],
    path: [
      ["Qualification", "Trainers complete recognised fitness qualifications and first-aid training."],
      ["Experience", "Gym work and building a client base help."],
    ],
    enjoy: ["Active work", "Helping people improve", "Flexible options", "Variety"],
    consider: ["Early, late and weekend hours", "Income may vary", "Clients may cancel", "Physically demanding"],
    qual: [["helping", "Success is clients' success."], ["communicating", "Explain clearly and encourage."], ["patient", "Progress takes time."], ["organised", "Programmes need planning."]],
    day: [["Assess", "Check client goals."], ["Plan", "Design sessions."], ["Coach", "Teach technique."], ["Motivate", "Encourage progress."], ["Review", "Track results."]],
    quiz: { title: "Train smart", intro: "Make trainer choices.", q: [
      ["Why warm up before exercise?", ["To prepare the body and reduce injury risk", "To waste time", "To get tired"], 0, "Warm-ups prepare muscles."],
      ["A client feels pain during an exercise. What should you do?", ["Stop and check", "Push harder", "Ignore it"], 0, "Pain is a warning sign."]] },
    related: [["trainer-coach", "Both coach and motivate."], ["physiotherapist", "Both help bodies move well."], ["dietitian", "Both support healthy living."]],
  },
  {
    slug: "professional-athlete",
    name: "Professional Athlete",
    category: "sport",
    summary: "Competes in a sport as a full-time career.",
    overview:
      "Professional athletes train and compete at the highest level. They rely on coaches, doctors, nutritionists and analysts, and many plan a second career for after sport.",
    purpose: "To perform at the top level and inspire others.",
    dailyWork: "Training, recovering, studying tactics, competing and working with a team of specialists.",
    example:
      "A swimmer trains twice a day, studies race video, eats a planned diet and rests to prepare for a championship.",
    kw: ["professional athlete", "athlete", "footballer", "sportsperson", "sports player", "olympian"],
    tags: ["outdoors", "team", "health", "people", "travel"],
    subj: [
      ["pe", "Training and health.", "Understanding fitness."],
      ["biology", "How the body adapts.", "How muscles recover."],
      ["business", "Careers need planning.", "Understanding contracts."],
    ],
    skills: ["Discipline", "Resilience", "Teamwork"],
    path: [
      ["Train and compete", "Athletes usually begin young and progress through clubs, academies and competitions."],
      ["Plan ahead", "Few athletes earn a living from sport, so studying alongside training is wise."],
    ],
    enjoy: ["Doing what you love", "Travel and competition", "Fitness", "Teamwork and fans"],
    consider: ["Very few reach the top", "Injury risk", "Short careers", "Heavy training load"],
    qual: [["patient", "Progress takes years."], ["teamwork", "Many sports are team-based."], ["decisions", "Quick choices in competition."], ["independent", "Self-discipline is essential."]],
    day: [["Train", "Practise skills."], ["Gym", "Build strength."], ["Recover", "Rest and treatment."], ["Study tactics", "Review video."], ["Compete or prepare", "Get ready for events."]],
    quiz: { title: "Train like a pro", intro: "Think like an athlete.", q: [
      ["Why is rest important for athletes?", ["Bodies recover and get stronger", "It is a waste of time", "Rest is only for beginners"], 0, "Recovery lets the body adapt."],
      ["Why plan a second career?", ["Sports careers are often short", "Sport is easy", "Not needed"], 0, "Planning ahead provides security."]] },
    related: [["personal-trainer", "Both work in fitness."], ["sports-scientist", "Scientists help athletes perform."], ["physiotherapist", "Physios treat athletes."]],
  },
  {
    slug: "sports-analyst",
    name: "Sports Analyst",
    category: "sport",
    summary: "Uses data and video to help teams and athletes improve.",
    overview:
      "Sports analysts study match data, video and statistics to find patterns and advise coaches and athletes on tactics, training and recruitment.",
    purpose: "To give teams a competitive edge with information.",
    dailyWork: "Collecting match data, analysing video, building reports and meeting coaches.",
    example:
      "A football analyst finds the team loses most goals after corners. She shows the coach video and suggests a new defensive set-up.",
    kw: ["sports analyst", "performance analyst", "sports data", "football analyst", "sport statistics"],
    tags: ["data", "puzzles", "team", "tech", "research", "office"],
    subj: [
      ["math", "Statistics and probability.", "Calculating shot accuracy."],
      ["cs", "Data tools and video analysis.", "Using a spreadsheet."],
      ["pe", "Understanding the sport.", "Knowing the rules and tactics."],
    ],
    skills: ["Data skills", "Sport knowledge", "Communication"],
    path: [
      ["Study", "Many analysts study sport science, statistics, data science or similar."],
      ["Experience", "Volunteering with local teams builds a portfolio."],
    ],
    enjoy: ["Combining sport and data", "Helping teams win", "Growing field", "Teamwork"],
    consider: ["Competitive jobs", "Match-day and weekend hours", "Pressure to deliver insights", "Long hours at a screen"],
    qual: [["curious", "Always looking for patterns."], ["detail", "Small differences matter."], ["communicating", "Insights must be clear."], ["teamwork", "Work with coaches."]],
    day: [["Collect data", "Gather match information."], ["Analyse", "Find patterns."], ["Prepare video", "Select clips."], ["Brief", "Explain to coaches."], ["Review", "Check if changes worked."]],
    quiz: { title: "Read the numbers", intro: "Think like an analyst.", q: [
      ["A player scores 6 goals from 20 shots. What is the shot accuracy?", ["30%", "6%", "60%"], 0, "6 ÷ 20 = 0.3 = 30%."],
      ["Why combine video and statistics?", ["Numbers show what, video shows why", "To make reports longer", "No reason"], 0, "Both give a fuller picture."]] },
    related: [["data-analyst", "Both analyse data."], ["statistician", "Both use statistics."], ["sports-scientist", "Both help performance."]],
  },
  {
    slug: "sports-scientist",
    name: "Sports Scientist",
    category: "sport",
    summary: "Uses science to improve athletes' performance, fitness and recovery.",
    overview:
      "Sports scientists measure fitness, study movement and plan training, nutrition and recovery. They work with clubs, national teams, schools and research centres.",
    purpose: "To help athletes perform better and stay healthy.",
    dailyWork: "Testing athletes, monitoring training, analysing data and advising coaches.",
    example:
      "A sports scientist tracks a runner's heart rate and sleep, finds she is overtrained and adjusts her plan.",
    kw: ["sports scientist", "sport science", "exercise physiologist", "performance scientist", "strength and conditioning"],
    tags: ["science", "health", "data", "research", "team", "lab", "outdoors"],
    subj: [
      ["biology", "How the body works.", "How muscles use energy."],
      ["pe", "Training and fitness.", "Planning training loads."],
      ["math", "Data analysis.", "Reading graphs of progress."],
    ],
    skills: ["Science skills", "Data analysis", "Communication"],
    path: [
      ["Degree", "Most sports scientists study sport science, exercise science or a related subject."],
      ["Experience", "Work with teams or clubs helps."],
    ],
    enjoy: ["Mix of science and sport", "Helping athletes", "Hands-on testing", "Growing field"],
    consider: ["Competitive jobs", "Irregular hours", "Results depend on athletes", "Pay varies by employer"],
    qual: [["curious", "Always asking how to improve."], ["detail", "Accurate measurements matter."], ["communicating", "Advice must be clear."], ["teamwork", "Work with coaches and doctors."]],
    day: [["Test", "Measure fitness."], ["Monitor", "Track training data."], ["Analyse", "Find what is working."], ["Advise", "Recommend changes."], ["Review", "Check progress."]],
    quiz: { title: "Fit to perform", intro: "Think like a sports scientist.", q: [
      ["Why measure heart rate during training?", ["To see how hard the body is working", "To make it faster", "No reason"], 0, "Heart rate shows effort."],
      ["Why is sleep part of training?", ["The body repairs while resting", "Sleep is wasted time", "It is not"], 0, "Recovery is part of improvement."]] },
    related: [["physiotherapist", "Both help athletes' bodies."], ["professional-athlete", "Scientists support athletes."], ["dietitian", "Both advise on health."]],
  },
];

export const publicSeeds: Seed[] = [
  {
    slug: "diplomat",
    name: "Diplomat",
    category: "public",
    summary: "Represents a country abroad and builds relationships between nations.",
    overview:
      "Diplomats work in embassies and international organisations. They negotiate, report on events, support citizens abroad and promote trade, culture and peace.",
    purpose: "To build cooperation and protect their country's interests peacefully.",
    dailyWork: "Meeting officials, writing reports, negotiating, supporting citizens and attending events.",
    example:
      "Two countries disagree about a trade rule. The diplomat meets officials, listens carefully and helps reach a compromise.",
    kw: ["diplomat", "ambassador", "embassy", "foreign service", "international relations", "foreign affairs"],
    tags: ["travel", "people", "humanities", "leading", "justice", "ideas", "office"],
    subj: [
      ["languages", "Diplomats often speak several languages.", "Negotiating in another language."],
      ["humanities", "History, politics and cultures.", "Understanding why countries disagree."],
      ["business", "Trade and economics matter.", "How trade deals work."],
    ],
    skills: ["Negotiation", "Languages", "Cultural understanding"],
    path: [
      ["Degree", "Most diplomats study international relations, law, politics, economics or languages."],
      ["Selection", "Governments recruit diplomats through competitive exams and interviews."],
    ],
    enjoy: ["Living abroad", "Meeting leaders and cultures", "Important, varied work", "Helping build peace"],
    consider: ["Moving countries often", "Highly competitive entry", "Pressure and formality", "Time away from family"],
    qual: [["communicating", "Negotiation depends on listening and speaking."], ["patient", "Agreements take time."], ["curious", "Understand other cultures."], ["decisions", "Choose words carefully."]],
    day: [["Read briefings", "Follow news and policy."], ["Meet officials", "Build relationships."], ["Negotiate", "Work toward agreements."], ["Report", "Write to the home government."], ["Support citizens", "Help people abroad."]],
    quiz: { title: "Find common ground", intro: "Think like a diplomat.", q: [
      ["Two sides disagree. What helps most?", ["Listening to understand both views", "Shouting", "Walking away"], 0, "Understanding creates compromise."],
      ["Why learn other languages and cultures?", ["It builds trust and understanding", "It is not needed", "To show off"], 0, "Respect helps relationships."]] },
    related: [["lawyer", "Both use law and negotiation."], ["economist", "Both study trade and policy."], ["civil-servant", "Both work for governments."]],
  },
  {
    slug: "police-officer",
    name: "Police Officer",
    category: "public",
    summary: "Protects people, prevents crime and keeps communities safe.",
    overview:
      "Police officers patrol, respond to emergencies, investigate crimes, help people and work with communities. Specialist roles include traffic, detective, cyber-crime and community policing.",
    purpose: "To keep people and communities safe.",
    dailyWork: "Patrolling, responding to calls, taking statements, investigating and writing reports.",
    example:
      "An officer arrives at a road accident, helps the injured, directs traffic and records what happened.",
    kw: ["police officer", "police", "policeman", "policewoman", "detective", "law enforcement"],
    tags: ["justice", "helping", "people", "team", "outdoors", "leading"],
    subj: [
      ["pe", "Fitness is important.", "Staying fit."],
      ["languages", "Communication and report writing.", "Writing an accurate report."],
      ["humanities", "Understanding society and law.", "How laws protect people."],
    ],
    skills: ["Communication", "Fairness", "Staying calm"],
    path: [
      ["Recruitment and training", "Police forces have their own entry requirements, tests and academy training."],
      ["Specialise", "Officers can specialise in areas such as detective work or cyber-crime."],
    ],
    enjoy: ["Helping the community", "Variety", "Teamwork", "Structured career"],
    consider: ["Shift work", "Dangerous or upsetting situations", "Physically and emotionally demanding", "Responsibility"],
    qual: [["decisions", "Quick, fair decisions."], ["communicating", "Calming people and explaining."], ["teamwork", "Officers rely on colleagues."], ["detail", "Reports and evidence must be accurate."]],
    day: [["Briefing", "Learn about the day."], ["Patrol", "Keep communities safe."], ["Respond", "Attend incidents."], ["Investigate", "Gather facts."], ["Report", "Write accurate records."]],
    quiz: { title: "Keep it calm", intro: "Think like an officer.", q: [
      ["Why must reports be accurate?", ["They may be used in court", "To fill paper", "They are not important"], 0, "Courts rely on records."],
      ["What helps calm a tense situation?", ["Staying calm and listening", "Shouting", "Ignoring people"], 0, "Calm behaviour reduces tension."]] },
    related: [["forensic-scientist", "Forensic scientists help police."], ["firefighter", "Both are emergency services."], ["lawyer", "Both work with the law."]],
  },
  {
    slug: "firefighter",
    name: "Firefighter",
    category: "public",
    summary: "Responds to fires and emergencies and teaches fire safety.",
    overview:
      "Firefighters put out fires, rescue people, respond to accidents and floods, and teach fire safety. They train constantly and work in close teams.",
    purpose: "To save lives and protect property.",
    dailyWork: "Checking equipment, training, responding to calls and teaching safety.",
    example:
      "A kitchen fire starts in an apartment block. The crew evacuates residents, contains the fire and checks that everyone is safe.",
    kw: ["firefighter", "fire fighter", "fire service", "rescue", "civil defence", "emergency"],
    tags: ["helping", "team", "outdoors", "health", "things"],
    subj: [
      ["pe", "Fitness and endurance.", "Training safely."],
      ["chemistry", "How fire and chemicals behave.", "What makes a fire burn."],
      ["biology", "First aid.", "Basic life support."],
    ],
    skills: ["Courage", "Teamwork", "Physical fitness"],
    path: [
      ["Recruitment and training", "Fire services have fitness tests, interviews and extensive training."],
      ["Specialise", "Firefighters can specialise in rescue, hazardous materials or fire investigation."],
    ],
    enjoy: ["Saving lives", "Teamwork", "Active job", "Respect in the community"],
    consider: ["Dangerous and upsetting situations", "Shift work", "Very physical", "Strict fitness tests"],
    qual: [["teamwork", "Crews depend on each other."], ["decisions", "Fast decisions save lives."], ["helping", "The job is to help."], ["patient", "Training is constant."]],
    day: [["Check equipment", "Make sure it works."], ["Train", "Practise rescues."], ["Respond", "Attend emergencies."], ["Educate", "Teach safety."], ["Report", "Record incidents."]],
    quiz: { title: "Stay safe", intro: "Fire safety.", q: [
      ["What should you do first if you hear a fire alarm?", ["Leave the building calmly by the nearest exit", "Look for belongings", "Hide"], 0, "Get out safely."],
      ["Why do firefighters train regularly?", ["To stay ready and safe", "To fill time", "No reason"], 0, "Practice builds skill."]] },
    related: [["paramedic", "Both respond to emergencies."], ["police-officer", "Both are emergency services."], ["civil-engineer", "Both protect buildings and people."]],
  },
  {
    slug: "social-worker",
    name: "Social Worker",
    category: "public",
    summary: "Supports individuals and families facing difficult situations.",
    overview:
      "Social workers help children, families, older people and others who need support. They assess needs, connect people with services and protect people who are at risk.",
    purpose: "To help people live safely and well.",
    dailyWork: "Meeting people, assessing needs, planning support and working with schools, hospitals and agencies.",
    example:
      "A social worker visits a family who need housing help. She listens, finds services and follows up to check it is working.",
    kw: ["social worker", "social work", "welfare", "child protection", "community worker", "caseworker"],
    tags: ["helping", "people", "humanities", "team", "justice", "health"],
    subj: [
      ["humanities", "Understanding society and people.", "How communities support each other."],
      ["languages", "Listening and writing.", "Writing clear case notes."],
      ["biology", "Health and development.", "How children develop."],
    ],
    skills: ["Empathy", "Listening", "Resilience"],
    path: [
      ["Degree", "Social workers study social work or a related subject and complete supervised practice."],
      ["Registration", "Many countries require professional registration."],
    ],
    enjoy: ["Making a real difference", "Variety", "Working with people", "Teamwork with other services"],
    consider: ["Emotionally demanding", "Heavy caseloads", "Difficult decisions", "Paperwork"],
    qual: [["helping", "Support is the core."], ["patient", "Change takes time."], ["decisions", "Judgements affect lives."], ["communicating", "Listening and explaining."]],
    day: [["Plan visits", "Prepare the day."], ["Meet people", "Listen and assess."], ["Coordinate", "Link to services."], ["Record", "Write notes."], ["Review", "Check progress."]],
    quiz: { title: "Support well", intro: "Think like a social worker.", q: [
      ["Someone is upset. What helps first?", ["Listening without judging", "Telling them to calm down", "Changing the subject"], 0, "Listening builds trust."],
      ["Why are records kept?", ["To track support and keep people safe", "To fill files", "No reason"], 0, "Notes help continuity of care."]] },
    related: [["school-counsellor", "Both support wellbeing."], ["psychologist", "Both support mental health."], ["paramedic", "Both help people in crisis."]],
  },
  {
    slug: "civil-servant",
    name: "Civil Servant",
    category: "public",
    summary: "Works in government to deliver services and develop policy.",
    overview:
      "Civil servants work in ministries and public agencies. They write policy, manage services, handle data and help the government serve the public in areas such as health, education, transport and the environment.",
    purpose: "To help government work well for the public.",
    dailyWork: "Researching, writing reports, managing projects, answering the public and advising leaders.",
    example:
      "A policy officer is asked how to reduce school travel time. She studies data, meets stakeholders and writes recommendations.",
    kw: ["civil servant", "government", "public servant", "policy officer", "ministry", "public sector"],
    tags: ["office", "people", "research", "helping", "humanities", "team"],
    subj: [
      ["humanities", "Understanding government and society.", "How laws are made."],
      ["languages", "Writing and speaking clearly.", "Writing a briefing."],
      ["business", "Budgets and services.", "Planning a public budget."],
    ],
    skills: ["Writing", "Research", "Fairness"],
    path: [
      ["Study", "Many study law, economics, public administration, politics or the relevant field."],
      ["Recruitment", "Government jobs usually use public application processes."],
    ],
    enjoy: ["Serving the public", "Stable careers", "Variety of areas", "Making policy"],
    consider: ["Bureaucracy", "Slow change", "Public scrutiny", "Rules and procedures"],
    qual: [["organised", "Many tasks and records."], ["communicating", "Writing clear briefings."], ["detail", "Policies must be precise."], ["teamwork", "Work with many departments."]],
    day: [["Read", "Review issues."], ["Research", "Gather data."], ["Write", "Prepare briefings."], ["Meet", "Discuss with colleagues."], ["Implement", "Support delivery."]],
    quiz: { title: "Serve the public", intro: "Think like a civil servant.", q: [
      ["Why should policy use evidence?", ["Decisions are better with facts", "It is not needed", "To make it longer"], 0, "Evidence improves decisions."],
      ["Why must services be fair?", ["They serve everyone", "To save time", "No reason"], 0, "Public services serve all citizens."]] },
    related: [["diplomat", "Both work for governments."], ["economist", "Both study policy."], ["urban-planner", "Both shape public services."]],
  },
  {
    slug: "customs-officer",
    name: "Customs and Border Officer",
    category: "public",
    summary: "Checks people and goods crossing borders to keep countries safe and trade fair.",
    overview:
      "Customs and border officers check travellers and cargo at airports, seaports and borders. They stop illegal goods, collect duties and help legitimate trade move smoothly.",
    purpose: "To protect borders and support lawful trade and travel.",
    dailyWork: "Checking documents, inspecting goods, interviewing travellers and recording findings.",
    example:
      "At an airport, an officer notices a suitcase scan does not match the declared contents and inspects it with a colleague.",
    kw: ["customs officer", "border officer", "immigration", "border control", "customs", "airport security"],
    tags: ["justice", "people", "things", "team", "travel", "office"],
    subj: [
      ["languages", "Speaking with travellers from many places.", "Asking clear questions."],
      ["humanities", "Laws and cultures.", "Understanding travel rules."],
      ["business", "Trade and duties.", "How tariffs work."],
    ],
    skills: ["Observation", "Fairness", "Communication"],
    path: [
      ["Recruitment and training", "Government agencies set requirements and train officers in law and procedures."],
      ["Specialise", "Officers can specialise in areas such as cargo, intelligence or technology."],
    ],
    enjoy: ["Variety of people and places", "Protecting the country", "Teamwork", "Stable career"],
    consider: ["Shift work", "Confrontation sometimes", "Long periods standing", "Strict rules"],
    qual: [["detail", "Spot small inconsistencies."], ["decisions", "Fair, quick choices."], ["communicating", "Questions must be clear."], ["teamwork", "Officers work together."]],
    day: [["Briefing", "Review risks."], ["Check documents", "Verify identity and papers."], ["Inspect", "Examine goods."], ["Question", "Interview if needed."], ["Report", "Record findings."]],
    quiz: { title: "Border check", intro: "Think like an officer.", q: [
      ["Why check documents carefully?", ["To confirm identity and legal entry", "To slow people down", "No reason"], 0, "Checks keep borders secure."],
      ["Why must officers treat everyone fairly?", ["Fairness is required and builds trust", "It is optional", "To save time"], 0, "Fair treatment is essential."]] },
    related: [["police-officer", "Both enforce laws."], ["airport-operations-officer", "Both work at airports."], ["civil-servant", "Both work for government."]],
  },
  {
    slug: "emergency-planner",
    name: "Emergency Planner",
    category: "public",
    summary: "Prepares communities to respond to disasters and emergencies.",
    overview:
      "Emergency planners study risks such as floods, fires, outbreaks and accidents, and prepare plans, training and exercises so organisations and communities can respond quickly and safely.",
    purpose: "To reduce harm when emergencies happen.",
    dailyWork: "Assessing risks, writing plans, running drills, coordinating agencies and reviewing past events.",
    example:
      "A city is at risk of flooding. The planner maps risk areas, coordinates evacuation routes and runs a practice with emergency services.",
    kw: ["emergency planner", "disaster management", "emergency management", "risk manager", "civil protection", "crisis manager"],
    tags: ["helping", "leading", "team", "office", "puzzles", "people", "justice"],
    subj: [
      ["humanities", "Geography and communities.", "Mapping risks."],
      ["math", "Risk and probability.", "Estimating how many people may need help."],
      ["languages", "Clear plans and communication.", "Writing simple instructions."],
    ],
    skills: ["Planning", "Calm leadership", "Teamwork"],
    path: [
      ["Study", "Many planners study emergency management, geography, public safety, environment or related subjects."],
      ["Experience", "Many come from emergency services, health, engineering or government."],
    ],
    enjoy: ["Protecting communities", "Planning and puzzles", "Working with many agencies", "Meaningful work"],
    consider: ["Pressure during real emergencies", "Planning work can feel invisible", "Irregular hours in crises", "Detailed paperwork"],
    qual: [["organised", "Plans must be clear."], ["decisions", "Crisis choices matter."], ["communicating", "Coordinate many groups."], ["problem-solving", "Anticipate problems."]],
    day: [["Assess risks", "Study hazards."], ["Write plans", "Document roles and steps."], ["Train", "Teach teams."], ["Practise", "Run exercises."], ["Review", "Improve after events."]],
    quiz: { title: "Be prepared", intro: "Think like a planner.", q: [
      ["Why practise emergency plans?", ["To find problems before a real emergency", "To waste time", "No reason"], 0, "Drills reveal weak points."],
      ["Why must plans be simple?", ["People must follow them under stress", "To save paper", "No reason"], 0, "Simple plans work in crises."]] },
    related: [["firefighter", "Both prepare for emergencies."], ["paramedic", "Both respond to crises."], ["project-manager", "Both plan complex work."]],
  },
];
