import type { Seed } from "./careers-build";

export const architectureSeeds: Seed[] = [
  {
    slug: "urban-planner",
    name: "Urban Planner",
    category: "architecture",
    summary: "Plans how towns and cities grow, from housing and parks to roads and transport.",
    overview:
      "Urban planners decide how land is used so that cities work well for the people living there. They think about homes, jobs, schools, green spaces, transport and the environment, and they listen to communities.",
    purpose: "To help towns and cities grow in a fair, sustainable and liveable way.",
    dailyWork: "Studying maps and data, meeting communities and officials, writing plans and testing different ideas.",
    example:
      "A fast-growing suburb needs a school and a bus route. The planner studies where families live, suggests locations and explains the options to residents.",
    kw: ["urban planner", "city planner", "town planning", "urban design", "cities"],
    tags: ["design", "building", "ideas", "people", "data", "research", "team", "outdoors"],
    subj: [
      ["math", "Data and maps help planners make fair decisions.", "Estimating how many people a new park will serve."],
      ["humanities", "History and geography explain how places develop.", "Why old cities have narrow streets."],
      ["art", "Drawing and mapping communicate plans clearly.", "Sketching a new neighbourhood layout."],
    ],
    skills: ["Analysing data", "Listening to communities", "Visual thinking"],
    path: [
      ["Planning or related degree", "Planners often study urban planning, geography, architecture or a related subject, usually for three to five years."],
      ["Professional experience", "Many countries have professional bodies, and planners gain recognition after supervised work experience."],
    ],
    enjoy: [
      "Shaping how future generations live",
      "Mixing maps, data, design and people",
      "Working on topical issues such as climate and transport",
      "Variety between office, meetings and site visits",
    ],
    consider: [
      "Projects can take many years to show results",
      "Balancing different opinions can be difficult",
      "Plans may be changed by politics and budgets",
      "A lot of meetings and report writing",
    ],
    qual: [
      ["communicating", "Planners explain plans to residents, officials and builders."],
      ["problem-solving", "Every place has competing needs."],
      ["organised", "Many rules, maps and deadlines have to fit together."],
      ["curious", "Cities are always changing."],
    ],
    day: [
      ["Study data", "Look at maps, population figures and traffic information."],
      ["Visit the area", "See how people actually use the place."],
      ["Draft options", "Create plans for housing, parks or transport."],
      ["Meet the community", "Explain ideas and listen to feedback."],
      ["Write the plan", "Finalise and present recommendations."],
    ],
    quiz: {
      title: "Plan the park",
      intro: "A town has room for one new park. How do planners decide where it should go?",
      q: [
        ["What helps planners decide where a new park would serve the most people?", ["Data on where people live", "A random guess", "The colour of the map"], 0, "Population data shows where a park would be most useful."],
        ["Why do planners meet residents before finalising a plan?", ["People who live there know their area best", "To make meetings longer", "To avoid decisions"], 0, "Local knowledge improves plans."],
      ],
    },
    related: [
      ["architect", "Architects design buildings, planners shape the areas around them."],
      ["civil-engineer", "Engineers build the roads and systems planners design."],
      ["landscape-architect", "Both design outdoor spaces for people."],
    ],
  },
  {
    slug: "landscape-architect",
    name: "Landscape Architect",
    category: "architecture",
    summary: "Designs parks, gardens and outdoor spaces that look good and work well.",
    overview:
      "Landscape architects design outdoor spaces such as parks, school grounds, streets and gardens. They think about plants, water, paths and seating, and how places can support nature and people.",
    purpose: "To design outdoor spaces that people enjoy and that protect the environment.",
    dailyWork: "Sketching designs, choosing plants and materials, using design software and visiting sites.",
    example:
      "A school wants a better playground. The landscape architect designs shaded seating, planting and play areas that suit the land and the students.",
    kw: ["landscape architect", "landscape design", "garden", "park", "outdoor design"],
    tags: ["design", "creating", "art", "nature", "outdoors", "studio", "building", "ideas"],
    subj: [
      ["biology", "Plants and ecosystems shape good landscape design.", "Choosing plants that survive in a dry climate."],
      ["art", "Colour, shape and layout are central.", "Sketching a garden plan."],
      ["math", "Measurements and scale are used throughout.", "Calculating how much soil a flower bed needs."],
    ],
    skills: ["Visual design", "Knowledge of plants", "Problem-solving"],
    path: [
      ["Landscape architecture degree", "A university degree is common, often lasting three to five years depending on the country."],
      ["Experience and registration", "Many countries ask for supervised experience and registration."],
    ],
    enjoy: [
      "Creating places that people enjoy outdoors",
      "Mixing art, science and nature",
      "Variety between studio and outdoor site visits",
      "Helping cities become greener and cooler",
    ],
    consider: [
      "Results take time because plants need years to grow",
      "Budgets and weather can affect projects",
      "Competition for some jobs",
      "A lot of computer design work",
    ],
    qual: [
      ["creative", "Every site needs a fresh design."],
      ["curious", "Plants, soil and climate all matter."],
      ["detail", "Small choices change how a space feels."],
      ["communicating", "Ideas must be explained to clients and builders."],
    ],
    day: [
      ["Study the site", "Look at soil, sun, water and existing plants."],
      ["Sketch ideas", "Draw layouts for paths, plants and seating."],
      ["Choose materials", "Pick plants, surfaces and furniture."],
      ["Present to the client", "Explain the design and respond to feedback."],
      ["Check construction", "Visit the site to make sure the design is built well."],
    ],
    quiz: {
      title: "Choose the plants",
      intro: "Solve two design questions.",
      q: [
        ["A garden is very sunny and dry. Which plants are the best choice?", ["Plants that tolerate sun and drought", "Plants that need constant shade and water", "Any plant at random"], 0, "Good design matches plants to the conditions."],
        ["Why is scale important on a landscape plan?", ["It lets designers measure real distances from a drawing", "It makes drawings colourful", "It is not important"], 0, "Scale links the drawing to real dimensions."],
      ],
    },
    related: [
      ["architect", "Architects design buildings, landscape architects design the space around them."],
      ["urban-planner", "Both shape places where people live."],
      ["environmental-scientist", "Both care about how outdoor spaces affect nature."],
    ],
  },
  {
    slug: "land-surveyor",
    name: "Land Surveyor",
    category: "architecture",
    summary: "Measures land accurately so buildings, roads and boundaries are in the right place.",
    overview:
      "Land surveyors use instruments such as GPS and laser scanners to measure the land. Their maps and measurements help engineers and architects build in the right place and help settle where boundaries are.",
    purpose: "To measure and map land accurately.",
    dailyWork: "Measuring on site, processing data in the office, drawing maps and advising on boundaries.",
    example:
      "A new road is being planned. The surveyor measures the land, records heights and boundaries, and produces a map the engineers use for the design.",
    kw: ["surveyor", "land surveyor", "surveying", "mapping", "gps", "measurement"],
    tags: ["building", "outdoors", "data", "math", "things", "tech", "team", "design"],
    subj: [
      ["math", "Angles, distances and trigonometry are the basis of surveying.", "Working out the height of a hill from two measurements."],
      ["physics", "Light and signals are used by surveying instruments.", "How GPS uses satellite signals to fix a position."],
      ["cs", "Data and mapping software process the measurements.", "Turning thousands of points into a map."],
    ],
    skills: ["Accuracy", "Using technology", "Working outdoors"],
    path: [
      ["Degree or diploma", "Surveyors typically study surveying, geomatics or civil engineering, around three to four years depending on the country."],
      ["Professional training", "Many countries require supervised experience and professional registration."],
    ],
    enjoy: [
      "Working outside as well as in an office",
      "Using high-tech tools such as drones and scanners",
      "Seeing your measurements used in real projects",
      "Mixing maths, technology and geography",
    ],
    consider: [
      "Outdoor work in heat, cold or rain",
      "Needs extreme accuracy, because small errors can cause big problems",
      "Some travel to remote sites",
      "Deadlines on construction projects",
    ],
    qual: [
      ["detail", "A tiny measuring error can move a building out of place."],
      ["problem-solving", "Every site has awkward obstacles."],
      ["organised", "Measurements need careful records."],
      ["teamwork", "Surveyors work with engineers, builders and architects."],
    ],
    day: [
      ["Plan the survey", "Choose the instruments and decide what to measure."],
      ["Measure on site", "Use GPS, total stations or drones."],
      ["Process the data", "Clean the data and check accuracy."],
      ["Produce maps", "Draw plans and models of the land."],
      ["Share results", "Give the data to engineers and architects."],
    ],
    quiz: {
      title: "Measure it",
      intro: "Use surveying maths.",
      q: [
        ["A surveyor walks 30 m along a straight line then 40 m at a right angle. What is the straight distance back to the start?", ["50 m", "70 m", "35 m"], 0, "By Pythagoras, √(30² + 40²) = 50 m."],
        ["Why do surveyors repeat measurements?", ["To check accuracy and catch mistakes", "To waste time", "Because they forget"], 0, "Repeating measurements reveals errors."],
      ],
    },
    related: [
      ["civil-engineer", "Engineers use surveyors' measurements to design structures."],
      ["architect", "Architects need accurate site data."],
      ["construction-manager", "Both are involved in building projects."],
    ],
  },
  {
    slug: "construction-manager",
    name: "Construction Manager",
    category: "architecture",
    summary: "Leads building projects, keeping them on time, on budget and safe.",
    overview:
      "Construction managers plan and oversee building projects, from homes to skyscrapers. They coordinate workers, order materials, check quality and make sure everyone follows safety rules.",
    purpose: "To get buildings built safely, on time and on budget.",
    dailyWork: "Planning schedules, checking progress on site, managing budgets and solving problems with the team.",
    example:
      "A school extension falls behind because materials arrive late. The manager rearranges the schedule, talks with suppliers and keeps the project on track.",
    kw: ["construction manager", "site manager", "building manager", "construction"],
    tags: ["building", "leading", "team", "outdoors", "things", "business", "design"],
    subj: [
      ["math", "Quantities, costs and schedules all use numbers.", "Calculating how many bricks a wall needs."],
      ["physics", "Understanding forces and materials helps spot problems.", "Why a load must be spread evenly."],
      ["business", "Budgets and contracts are part of the job.", "Comparing quotes from suppliers."],
    ],
    skills: ["Leadership", "Planning", "Safety awareness"],
    path: [
      ["Degree or apprenticeship", "Many construction managers study construction management or engineering, or work their way up through apprenticeships and site experience."],
      ["Experience", "Responsibility grows with experience, and professional qualifications can help."],
    ],
    enjoy: [
      "Seeing a project grow from a plan into a real building",
      "Leading a team of different trades",
      "Variety, since every project differs",
      "Strong demand in growing cities",
    ],
    consider: [
      "Long hours and tight deadlines",
      "Outdoor site work in all kinds of weather",
      "High responsibility for safety",
      "Pressure from budgets and delays",
    ],
    qual: [
      ["organised", "Many people, materials and dates must fit together."],
      ["decisions", "Problems on site often need quick, careful decisions."],
      ["communicating", "The manager keeps everyone informed."],
      ["teamwork", "Building is a team effort."],
    ],
    day: [
      ["Morning briefing", "Review safety and the day's tasks with the team."],
      ["Walk the site", "Check progress and quality."],
      ["Solve problems", "Deal with delays or changes in the plan."],
      ["Manage orders and budget", "Track materials and costs."],
      ["Report progress", "Update the client and the company."],
    ],
    quiz: {
      title: "On site",
      intro: "Make good decisions as a construction manager.",
      q: [
        ["A worker is on a high platform without a safety harness. What should the manager do?", ["Stop the work until safety rules are followed", "Ignore it to save time", "Wait until the end of the day"], 0, "Safety always comes before speed."],
        ["Why do managers keep a schedule?", ["To coordinate tasks and spot delays early", "To make the site look busy", "It is not important"], 0, "Schedules keep many teams working together."],
      ],
    },
    related: [
      ["civil-engineer", "Engineers design what construction managers build."],
      ["architect", "Architects and managers work together on projects."],
      ["project-manager", "Both plan, organise and lead projects."],
    ],
  },
];

export const engineeringSeeds: Seed[] = [
  {
    slug: "mechanical-engineer",
    name: "Mechanical Engineer",
    category: "engineering",
    summary: "Designs and improves machines, engines and moving parts.",
    overview:
      "Mechanical engineers design everything from tiny medical devices to car engines and air conditioning systems. They use physics and maths to make machines safe, efficient and reliable.",
    purpose: "To design machines that work well and last.",
    dailyWork: "Designing parts on computers, testing prototypes, solving problems and working with other engineers and technicians.",
    example:
      "A company wants a quieter, more efficient fan. The engineer models different blade shapes, builds prototypes and tests which one moves air best.",
    kw: ["mechanical engineer", "mechanical engineering", "machines", "engines", "engineer"],
    tags: ["building", "design", "puzzles", "things", "team", "ideas", "physics", "math"],
    subj: [
      ["physics", "Forces, motion and energy are the basis of every machine.", "How gears change speed and force."],
      ["math", "Calculations decide the size and strength of parts.", "Working out the force on a bolt."],
      ["cs", "Design and simulation software are everyday tools.", "Drawing a part in 3D and testing it on screen."],
    ],
    skills: ["Problem-solving", "Practical thinking", "Teamwork"],
    path: [
      ["Engineering degree", "A mechanical engineering degree usually takes three to five years depending on the country."],
      ["Professional status", "Many countries offer professional registration after years of work experience."],
    ],
    enjoy: [
      "Designing real things that move and work",
      "Applying physics and maths to practical problems",
      "Many industries to choose from, such as cars, energy and robotics",
      "Strong demand for engineering skills",
    ],
    consider: [
      "Hard maths and physics during study",
      "Deadlines and pressure to keep costs down",
      "Responsibility for safety",
      "Some roles involve factory or site work",
    ],
    qual: [
      ["problem-solving", "Each design has trade-offs between cost, strength and weight."],
      ["curious", "Engineers always ask how things work."],
      ["detail", "A tiny design flaw can make a machine fail."],
      ["teamwork", "Engineers work with designers, technicians and managers."],
    ],
    day: [
      ["Plan the design", "Study the problem and list requirements."],
      ["Model on the computer", "Create and test designs digitally."],
      ["Build a prototype", "Make a test version of the part or machine."],
      ["Test and measure", "Collect data on how it performs."],
      ["Improve and report", "Change the design and share results."],
    ],
    quiz: {
      title: "Gear up",
      intro: "Use mechanical thinking.",
      q: [
        ["A small gear turns a large gear. What happens to the speed of the large gear?", ["It turns more slowly", "It turns faster", "It stays the same"], 0, "A larger gear turns more slowly but with more force."],
        ["Why do engineers build prototypes?", ["To test ideas before making the final product", "To use up materials", "Because they are cheaper than ideas"], 0, "Prototypes reveal problems early."],
      ],
    },
    related: [
      ["automotive-engineer", "Many mechanical engineers specialise in vehicles."],
      ["robotics-engineer", "Robots combine mechanical design with electronics and software."],
      ["aerospace-engineer", "Aircraft and spacecraft rely on mechanical engineering."],
    ],
  },
  {
    slug: "automotive-engineer",
    name: "Automotive Engineer",
    category: "engineering",
    summary: "Designs and develops cars, motorbikes and other road vehicles.",
    overview:
      "Automotive engineers work on engines, electric motors, brakes, safety systems and the software inside vehicles. They make vehicles faster, safer, cleaner and more comfortable.",
    purpose: "To design safe, efficient and reliable vehicles.",
    dailyWork: "Designing parts, running tests, analysing data and working with teams on new vehicle systems.",
    example:
      "A manufacturer wants a longer-range electric car. Engineers reduce weight, improve the battery cooling and test the car on a track to measure how far it can go.",
    kw: ["automotive engineer", "car engineer", "vehicle engineer", "mechanic", "cars", "electric cars"],
    tags: ["building", "design", "puzzles", "things", "tech", "team", "physics", "math"],
    subj: [
      ["physics", "Motion, friction and energy affect every vehicle.", "Why a car needs more distance to stop at higher speed."],
      ["math", "Calculations support performance and safety.", "Working out fuel or battery efficiency."],
      ["chemistry", "Batteries, fuels and materials depend on chemistry.", "How a battery stores and releases energy."],
    ],
    skills: ["Technical problem-solving", "Teamwork", "Testing and measuring"],
    path: [
      ["Engineering degree", "Automotive engineers often study mechanical, automotive or electrical engineering, usually for three to five years depending on the country."],
      ["Work experience", "Many start in graduate programmes with car companies or suppliers."],
    ],
    enjoy: [
      "Working on technology that people use every day",
      "Exciting developments such as electric and self-driving cars",
      "Mixing mechanics, electronics and software",
      "Seeing your designs on the road",
    ],
    consider: [
      "The industry changes fast and competition is strong",
      "Strict safety rules and deadlines",
      "Pressure to keep costs low",
      "Some jobs depend on the health of the car industry",
    ],
    qual: [
      ["problem-solving", "Every improvement affects other parts of the car."],
      ["curious", "New technology appears constantly."],
      ["detail", "Safety parts must be perfect."],
      ["teamwork", "A car has thousands of parts designed by many teams."],
    ],
    day: [
      ["Review test data", "Look at results from the previous tests."],
      ["Design improvements", "Use software to redesign parts or systems."],
      ["Build and test", "Try new parts on test rigs and vehicles."],
      ["Check safety", "Make sure designs meet legal rules."],
      ["Report to the team", "Share findings and next steps."],
    ],
    quiz: {
      title: "Stopping distance",
      intro: "Think like a vehicle engineer.",
      q: [
        ["A car's speed doubles. What happens to its stopping distance?", ["It becomes much longer", "It stays the same", "It gets shorter"], 0, "Stopping distance grows quickly with speed, roughly four times when speed doubles."],
        ["Why do engineers test cars in crash tests?", ["To improve passenger safety", "To damage cars for fun", "To reduce paint costs"], 0, "Crash tests show how well a car protects people."],
      ],
    },
    related: [
      ["mechanical-engineer", "Automotive engineering is a branch of mechanical engineering."],
      ["electrical-engineer", "Electric vehicles need strong electrical engineering."],
      ["product-designer", "Both shape how vehicles look and feel."],
    ],
  },
  {
    slug: "electrical-engineer",
    name: "Electrical Engineer",
    category: "engineering",
    summary: "Designs the electrical systems that power homes, cities, vehicles and devices.",
    overview:
      "Electrical engineers work with electricity, from huge power grids to tiny circuits in phones. They design, test and improve electrical equipment and make sure it is safe and efficient.",
    purpose: "To bring safe, reliable electrical power and electronics to the world.",
    dailyWork: "Designing circuits, running simulations, testing equipment and solving electrical faults.",
    example:
      "A new building needs lighting and power. The electrical engineer designs the wiring, chooses safe cables and checks that the system can handle the load.",
    kw: ["electrical engineer", "electrical engineering", "electricity", "circuits", "electronics", "engineer"],
    tags: ["building", "design", "puzzles", "tech", "things", "team", "physics", "math"],
    subj: [
      ["physics", "Voltage, current and resistance are core ideas.", "Using Ohm's law to calculate current."],
      ["math", "Circuit analysis uses algebra and graphs.", "Calculating the power used by a heater."],
      ["cs", "Modern electronics are controlled by programs.", "Programming a small controller."],
    ],
    skills: ["Logical thinking", "Safe working", "Technical drawing"],
    path: [
      ["Engineering degree", "A degree in electrical or electronic engineering usually takes three to five years depending on the country."],
      ["Professional registration", "In many countries engineers gain professional status after years of experience."],
    ],
    enjoy: [
      "Working with technology behind modern life",
      "Many industries: energy, telecoms, transport and electronics",
      "Problem-solving every day",
      "Helping the move to clean energy",
    ],
    consider: [
      "Complex maths and physics",
      "Electricity can be dangerous, so strict safety rules apply",
      "Pressure to meet deadlines and standards",
      "Some roles involve site or shift work",
    ],
    qual: [
      ["problem-solving", "Finding a fault in a system is like solving a puzzle."],
      ["detail", "A wrong connection can cause failure."],
      ["curious", "Technology moves quickly."],
      ["teamwork", "Engineers work with builders, designers and technicians."],
    ],
    day: [
      ["Plan the system", "Work out what power and controls are needed."],
      ["Design circuits", "Draw circuits and choose components."],
      ["Simulate and test", "Check designs on a computer and with equipment."],
      ["Fix faults", "Find and repair problems."],
      ["Document", "Write clear records for future engineers."],
    ],
    quiz: {
      title: "Circuit sense",
      intro: "Use Ohm's law.",
      q: [
        ["A 6 V battery drives current through a 3 ohm resistor. What is the current?", ["2 A", "18 A", "0.5 A"], 0, "Current = voltage ÷ resistance = 6 ÷ 3 = 2 A."],
        ["Why do engineers follow strict electrical safety rules?", ["Electricity can cause serious harm", "It is only a tradition", "To make wires look neat"], 0, "Safety rules prevent injury and fire."],
      ],
    },
    related: [
      ["renewable-energy-engineer", "Clean energy relies on electrical engineering."],
      ["robotics-engineer", "Robots need electronics and control systems."],
      ["automotive-engineer", "Electric vehicles depend on electrical engineers."],
    ],
  },
  {
    slug: "chemical-engineer",
    name: "Chemical Engineer",
    category: "engineering",
    summary: "Designs processes that turn raw materials into fuels, medicines, food and plastics.",
    overview:
      "Chemical engineers use chemistry, physics and maths to design large-scale processes. They work in industries from energy and water treatment to medicine, food and materials, always thinking about safety and the environment.",
    purpose: "To turn raw materials into useful products safely and efficiently.",
    dailyWork: "Designing and improving processes, running simulations, checking safety and working in plants or labs.",
    example:
      "A company wants to make a medicine in larger amounts. The engineer designs the reactors and process steps and checks that the product is pure and the process is safe.",
    kw: ["chemical engineer", "chemical engineering", "process engineer", "plant", "engineer"],
    tags: ["science", "building", "design", "puzzles", "lab", "team", "chemistry", "math", "research"],
    subj: [
      ["chemistry", "Reactions are at the heart of the work.", "Predicting how much product a reaction will give."],
      ["math", "Calculations size equipment and track materials.", "Balancing how much material goes in and out."],
      ["physics", "Heat and fluid flow are used in every process.", "How heat moves through a pipe."],
    ],
    skills: ["Analytical thinking", "Safety awareness", "Teamwork"],
    path: [
      ["Engineering degree", "A chemical engineering degree typically takes three to five years depending on the country."],
      ["Work experience", "Many graduates join industry training schemes, and professional recognition can follow."],
    ],
    enjoy: [
      "Solving large-scale problems that affect daily life",
      "Many industries, from energy to food",
      "Working on cleaner and more sustainable processes",
      "Combining lab science with practical design",
    ],
    consider: [
      "Challenging maths and chemistry",
      "Plants can be noisy, hot or in remote locations",
      "Strict safety responsibilities",
      "Some jobs involve shift work",
    ],
    qual: [
      ["problem-solving", "Processes have many linked steps to balance."],
      ["detail", "Small changes in temperature or pressure matter."],
      ["curious", "New materials and methods keep appearing."],
      ["teamwork", "Engineers work with operators, chemists and managers."],
    ],
    day: [
      ["Check plant data", "Review how the process is running."],
      ["Run simulations", "Test improvements on a computer."],
      ["Plan changes", "Design adjustments to improve efficiency."],
      ["Check safety", "Review risks and procedures."],
      ["Meet the team", "Discuss results with operators and managers."],
    ],
    quiz: {
      title: "Process thinking",
      intro: "Think like a chemical engineer.",
      q: [
        ["A process turns 100 kg of raw material into 80 kg of product. What is the efficiency?", ["80%", "20%", "100%"], 0, "80 ÷ 100 = 80%."],
        ["Why do chemical plants have strict safety rules?", ["Chemicals and high pressure can be dangerous", "To make work slower", "They are optional"], 0, "Safety protects workers and the environment."],
      ],
    },
    related: [
      ["chemist", "Chemists discover reactions, chemical engineers scale them up."],
      ["environmental-engineer", "Both care about reducing pollution."],
      ["petroleum-engineer", "Both work with fuels and processes."],
    ],
  },
  {
    slug: "aerospace-engineer",
    name: "Aerospace Engineer",
    category: "engineering",
    summary: "Designs aircraft, spacecraft and the systems that make them fly.",
    overview:
      "Aerospace engineers design and test planes, helicopters, rockets and satellites. They work on shape, engines, materials and control systems, and safety is at the centre of everything they do.",
    purpose: "To design vehicles that fly safely and efficiently.",
    dailyWork: "Modelling designs, running simulations, testing parts and working with teams of specialists.",
    example:
      "An airline wants a more fuel-efficient plane. Engineers reshape the wings, test them in a wind tunnel and use computer models to check how much fuel can be saved.",
    kw: ["aerospace engineer", "aeronautical", "aircraft engineer", "rocket", "space", "engineer"],
    tags: ["building", "design", "puzzles", "science", "team", "ideas", "physics", "math", "tech"],
    subj: [
      ["physics", "Lift, drag and thrust control how things fly.", "How wing shape creates lift."],
      ["math", "Calculations decide shapes, loads and orbits.", "Working out the speed needed to reach orbit."],
      ["cs", "Simulations and control software are essential.", "Modelling airflow around a wing."],
    ],
    skills: ["Technical problem-solving", "Precision", "Teamwork"],
    path: [
      ["Engineering degree", "Aerospace or mechanical engineering degrees usually take three to five years, depending on the country."],
      ["Industry experience", "Graduates often join aerospace companies or space agencies and keep training throughout their careers."],
    ],
    enjoy: [
      "Working on some of the most exciting technology in the world",
      "Contributing to flight and space exploration",
      "Using advanced simulation and testing",
      "Careers with airlines, manufacturers and space agencies",
    ],
    consider: [
      "Very high standards and long development times",
      "Strong competition for some jobs",
      "Demanding maths and physics",
      "Jobs can depend on government and industry budgets",
    ],
    qual: [
      ["problem-solving", "Flight involves many competing demands."],
      ["detail", "A tiny fault in an aircraft can be serious."],
      ["curious", "New materials and designs keep evolving."],
      ["teamwork", "A plane involves thousands of people and parts."],
    ],
    day: [
      ["Review requirements", "Check what the design must achieve."],
      ["Model the design", "Use software to test shapes and loads."],
      ["Test components", "Run wind-tunnel or ground tests."],
      ["Analyse results", "Look at data and fix issues."],
      ["Document and review", "Record decisions for safety checks."],
    ],
    quiz: {
      title: "Lift off",
      intro: "Think about flight.",
      q: [
        ["Which four forces act on an aeroplane in flight?", ["Lift, weight, thrust and drag", "Magnetism, sound, heat and light", "Friction only"], 0, "Lift, weight, thrust and drag together determine flight."],
        ["Why do aircraft parts go through repeated testing?", ["To make sure they are safe", "To make them heavier", "To save time"], 0, "Safety is the top priority in aviation."],
      ],
    },
    related: [
      ["mechanical-engineer", "Many aerospace engineers begin in mechanical engineering."],
      ["pilot", "Pilots fly the aircraft engineers design."],
      ["pilot", "Pilots fly the aircraft that aerospace engineers help design."],
    ],
  },
  {
    slug: "nuclear-engineer",
    name: "Nuclear Engineer",
    category: "engineering",
    summary: "Designs and runs safe nuclear power, medical and research technology.",
    overview:
      "Nuclear engineers work with the energy inside atoms. They help design and operate nuclear power plants, develop medical equipment such as radiotherapy machines and manage radioactive materials safely.",
    purpose: "To use nuclear technology safely for energy, medicine and research.",
    dailyWork: "Analysing systems, running simulations, checking safety, writing reports and working with scientists and regulators.",
    example:
      "A power plant needs to check that its cooling systems work under unusual conditions. The engineer models different situations and designs safety improvements.",
    kw: ["nuclear engineer", "nuclear power", "nuclear energy", "reactor", "radiation", "engineer"],
    tags: ["science", "building", "puzzles", "research", "team", "physics", "math", "tech", "ideas"],
    subj: [
      ["physics", "Atomic and nuclear physics explain how reactors work.", "How splitting atoms releases energy."],
      ["math", "Complex calculations support safe designs.", "Modelling how heat moves through a reactor."],
      ["chemistry", "Materials and radioactive substances need careful handling.", "Why some materials resist radiation damage."],
    ],
    skills: ["Analysis", "Safety culture", "Attention to detail"],
    path: [
      ["Engineering or physics degree", "Many nuclear engineers study nuclear, mechanical, chemical or electrical engineering, or physics, usually three to five years."],
      ["Specialised training", "Employers and regulators require extra training and strict safety qualifications."],
    ],
    enjoy: [
      "Working on advanced, high-impact technology",
      "Contributing to low-carbon electricity and medicine",
      "Highly skilled, well-regarded work",
      "Opportunities in energy, healthcare, research and regulation",
    ],
    consider: [
      "Strict rules, checks and security",
      "Fewer employers than some other engineering fields",
      "Public debate about nuclear energy",
      "Very high responsibility for safety",
    ],
    qual: [
      ["detail", "Safety checks must be thorough."],
      ["problem-solving", "Complex systems need careful analysis."],
      ["decisions", "Decisions are made with safety first."],
      ["teamwork", "Large teams of specialists work together."],
    ],
    day: [
      ["Review safety data", "Study monitoring information."],
      ["Run models", "Simulate how systems behave."],
      ["Inspect and test", "Check equipment and procedures."],
      ["Write reports", "Document findings clearly."],
      ["Meet specialists", "Discuss improvements with the team."],
    ],
    quiz: {
      title: "Atoms and energy",
      intro: "Explore nuclear ideas.",
      q: [
        ["What do nuclear power stations use to produce heat?", ["Nuclear reactions in atoms", "Burning wood", "Wind"], 0, "Nuclear power uses energy released from atomic nuclei."],
        ["Why is safety checked repeatedly in nuclear plants?", ["Mistakes could have serious consequences", "To keep staff busy", "It is optional"], 0, "A strong safety culture protects people and the environment."],
      ],
    },
    related: [
      ["physicist", "Physicists study the science behind nuclear technology."],
      ["renewable-energy-engineer", "Both work on clean sources of electricity."],
      ["electrical-engineer", "Power plants rely on electrical engineering."],
    ],
  },
  {
    slug: "petroleum-engineer",
    name: "Petroleum Engineer",
    category: "engineering",
    summary: "Finds and safely produces oil and gas from underground reservoirs.",
    overview:
      "Petroleum engineers design the wells and equipment used to produce oil and gas. They study rocks and fluids deep underground, plan drilling and look for ways to produce energy more efficiently and with less environmental impact.",
    purpose: "To produce energy resources safely and efficiently.",
    dailyWork: "Analysing geological data, designing wells, monitoring production and working with geologists and drilling teams.",
    example:
      "A field produces less oil than before. The engineer studies pressure data and suggests changes to bring more oil to the surface safely.",
    kw: ["petroleum engineer", "oil and gas", "oil engineer", "drilling", "energy", "engineer"],
    tags: ["science", "building", "puzzles", "data", "team", "outdoors", "physics", "math", "chemistry"],
    subj: [
      ["physics", "Pressure and fluid flow control production.", "Why oil moves from high-pressure to low-pressure areas."],
      ["chemistry", "Oil and gas are mixtures of chemicals.", "How different hydrocarbons behave."],
      ["math", "Modelling and economics rely on calculations.", "Estimating how much oil a field may hold."],
    ],
    skills: ["Data analysis", "Technical problem-solving", "Teamwork"],
    path: [
      ["Engineering degree", "Petroleum engineering, chemical or mechanical engineering degrees are common, usually three to five years."],
      ["Training with a company", "Graduates typically join graduate programmes and learn on projects and sites."],
    ],
    enjoy: [
      "Technically challenging work",
      "International career opportunities in some countries",
      "A mix of office, lab and field work",
      "Work in a major global industry",
    ],
    consider: [
      "Demand depends on energy markets, which change",
      "Some sites are remote or offshore",
      "The industry faces debates about climate impact",
      "Safety and environmental responsibility are crucial",
    ],
    qual: [
      ["problem-solving", "Underground conditions are hard to see, so engineers reason from data."],
      ["detail", "Small errors in design can cause big problems."],
      ["decisions", "Choices affect safety, cost and the environment."],
      ["teamwork", "Engineers work with geologists and operators."],
    ],
    day: [
      ["Review production data", "Check pressure and flow readings."],
      ["Model the reservoir", "Use software to predict behaviour."],
      ["Plan operations", "Design wells and improvements."],
      ["Check safety", "Review risks and procedures."],
      ["Meet the team", "Discuss decisions with geologists and managers."],
    ],
    quiz: {
      title: "Pressure and flow",
      intro: "Use simple physics.",
      q: [
        ["Fluids tend to flow from areas of:", ["High pressure to low pressure", "Low pressure to high pressure", "No pressure"], 0, "Fluids move from high pressure to low pressure."],
        ["Why do engineers monitor wells constantly?", ["To keep operations safe and efficient", "To waste data", "To make reports longer"], 0, "Monitoring spots problems early."],
      ],
    },
    related: [
      ["chemical-engineer", "Both work on fuels and processes."],
      ["geologist", "Geologists help locate resources underground."],
      ["renewable-energy-engineer", "Many energy engineers work across both traditional and clean energy."],
    ],
  },
  {
    slug: "renewable-energy-engineer",
    name: "Renewable Energy Engineer",
    category: "engineering",
    summary: "Designs solar, wind and other clean energy systems.",
    overview:
      "Renewable energy engineers design and improve systems that produce power from the sun, wind, water and other renewable sources. They also work on storage, such as large batteries, and on connecting clean power to the grid.",
    purpose: "To supply clean, reliable energy.",
    dailyWork: "Designing systems, modelling energy output, visiting sites and working with developers and utilities.",
    example:
      "A town wants a solar farm. The engineer studies how much sunlight the site gets, designs the layout of the panels and calculates how much electricity the farm can make.",
    kw: ["renewable energy", "solar", "wind turbine", "clean energy", "green energy", "engineer"],
    tags: ["science", "building", "design", "puzzles", "nature", "team", "physics", "math", "tech", "outdoors"],
    subj: [
      ["physics", "Energy conversion is the core science.", "How a solar panel turns light into electricity."],
      ["math", "Output and costs are calculated carefully.", "Estimating yearly energy from a wind turbine."],
      ["chemistry", "Batteries and materials depend on chemistry.", "How battery chemistry affects storage."],
    ],
    skills: ["Technical problem-solving", "Sustainability thinking", "Teamwork"],
    path: [
      ["Engineering degree", "Electrical, mechanical, chemical or renewable energy degrees are common, usually three to five years."],
      ["Experience", "Graduates often join energy companies or consultancies and gain professional status over time."],
    ],
    enjoy: [
      "Helping the world move to cleaner energy",
      "A fast-growing field with new technology",
      "A mix of design, data and outdoor site visits",
      "Opportunities around the world",
    ],
    consider: [
      "Projects depend on policy, funding and weather data",
      "Site visits may be in remote or hot places",
      "Fast-changing technology means constant learning",
      "Competition for popular roles",
    ],
    qual: [
      ["curious", "New energy technology appears all the time."],
      ["problem-solving", "Storing and connecting power is a big challenge."],
      ["teamwork", "Energy projects involve engineers, planners and communities."],
      ["detail", "Small design changes affect output."],
    ],
    day: [
      ["Study the site", "Check sun, wind and land conditions."],
      ["Design the system", "Choose equipment and layout."],
      ["Model the output", "Estimate how much power it will produce."],
      ["Visit and inspect", "Check installation and performance."],
      ["Report and improve", "Share results and suggest upgrades."],
    ],
    quiz: {
      title: "Solar sums",
      intro: "Work like a renewable energy engineer.",
      q: [
        ["A solar panel makes 2 kW of power for 5 hours. How much energy does it produce?", ["10 kWh", "7 kWh", "2.5 kWh"], 0, "Energy = power × time = 2 × 5 = 10 kWh."],
        ["Why are batteries useful with solar power?", ["They store energy for when the sun is not shining", "They make the sun brighter", "They make panels bigger"], 0, "Batteries allow solar energy to be used later."],
      ],
    },
    related: [
      ["electrical-engineer", "Clean energy depends on electrical engineering."],
      ["environmental-engineer", "Both work to reduce environmental damage."],
      ["nuclear-engineer", "Both help produce low-carbon electricity."],
    ],
  },
  {
    slug: "biomedical-engineer",
    name: "Biomedical Engineer",
    category: "engineering",
    summary: "Designs medical devices and technology that help people stay healthy.",
    overview:
      "Biomedical engineers combine engineering with biology and medicine. They design things such as artificial limbs, heart monitors, scanners and wearable health devices, and test that they are safe and effective.",
    purpose: "To use engineering to improve health and healthcare.",
    dailyWork: "Designing devices, testing prototypes, analysing data and working with doctors and patients.",
    example:
      "A hospital needs a better way to monitor patients' heartbeats. The engineer designs a comfortable wearable sensor and tests that its readings are accurate.",
    kw: ["biomedical engineer", "medical devices", "prosthetics", "bioengineering", "engineer"],
    tags: ["science", "health", "design", "building", "puzzles", "helping", "team", "biology", "physics", "tech", "lab"],
    subj: [
      ["biology", "Devices must work with the human body.", "How muscles send signals to artificial limbs."],
      ["physics", "Imaging and sensors use physics.", "How an ultrasound scanner makes pictures."],
      ["cs", "Many medical devices run on software.", "Programming a heart-rate monitor."],
    ],
    skills: ["Problem-solving", "Teamwork across science and medicine", "Testing"],
    path: [
      ["Degree", "Biomedical or related engineering degrees usually take three to five years depending on the country."],
      ["Experience and standards", "Medical devices follow strict safety rules, so many engineers train in these standards at work."],
    ],
    enjoy: [
      "Using engineering to help patients directly",
      "Combining biology, technology and design",
      "A growing field with new inventions",
      "Working with doctors and researchers",
    ],
    consider: [
      "Strict regulation means long development times",
      "Needs knowledge of both engineering and biology",
      "Responsibility for patient safety",
      "Competitive for research roles",
    ],
    qual: [
      ["problem-solving", "Medical problems need creative solutions."],
      ["detail", "Devices must be accurate and safe."],
      ["curious", "Science and technology change quickly."],
      ["helping", "The goal is better health for others."],
    ],
    day: [
      ["Listen to clinicians", "Learn what doctors and patients need."],
      ["Design the device", "Sketch and model it on computer."],
      ["Build a prototype", "Make a first version to test."],
      ["Test safety and accuracy", "Check it works correctly."],
      ["Improve and document", "Refine and record everything for regulators."],
    ],
    quiz: {
      title: "Design for health",
      intro: "Think about a medical device.",
      q: [
        ["Why must medical devices go through thorough testing?", ["Patients' safety depends on them working correctly", "To make them cost more", "To delay releases"], 0, "Devices must be safe and effective."],
        ["Which school subject helps most to design a device that works with the body?", ["Biology", "History", "Music"], 0, "Biology explains how the body works."],
      ],
    },
    related: [
      ["cardiologist", "Cardiologists use devices that biomedical engineers design."],
      ["robotics-engineer", "Robotic surgery and prosthetics need both fields."],
      ["neuropsychologist", "Scanners and tools help study the brain."],
    ],
  },
  {
    slug: "robotics-engineer",
    name: "Robotics Engineer",
    category: "engineering",
    summary: "Designs and builds robots that sense, decide and move.",
    overview:
      "Robotics engineers combine mechanical design, electronics and programming to build robots for factories, hospitals, farms, homes and exploration. They design the body, sensors and software that let robots do useful tasks.",
    purpose: "To build robots that help people and do difficult or dangerous jobs.",
    dailyWork: "Designing parts, writing code, testing robots, fixing problems and working with a team.",
    example:
      "A warehouse wants a robot to carry boxes. The engineer designs the wheels, adds sensors to avoid obstacles and writes the code that lets it navigate.",
    kw: ["robotics engineer", "robots", "robotics", "automation", "mechatronics", "engineer"],
    tags: ["tech", "building", "design", "puzzles", "creating", "team", "physics", "math", "cs", "ideas", "things"],
    subj: [
      ["cs", "Programming gives the robot its behaviour.", "Writing code to follow a line."],
      ["physics", "Motion, forces and sensors are everywhere.", "How a motor turns wheels."],
      ["math", "Robots use geometry and algorithms to move accurately.", "Calculating the angle for a robot arm."],
    ],
    skills: ["Programming", "Building and testing", "Creative problem-solving"],
    path: [
      ["Engineering degree", "Robotics, mechatronics, mechanical, electrical or computer engineering degrees are common, usually three to five years."],
      ["Projects and experience", "Student projects and competitions help a lot, and many graduates join technology or manufacturing companies."],
    ],
    enjoy: [
      "Building machines that really move and think",
      "A mix of mechanics, electronics and software",
      "A growing industry",
      "Creative problem-solving and teamwork",
    ],
    consider: [
      "Needs skills in several subjects",
      "Debugging hardware and software can be frustrating",
      "Fast change means constant learning",
      "Some jobs are in factories or labs",
    ],
    qual: [
      ["problem-solving", "Robots rarely work perfectly the first time."],
      ["creative", "New designs often need new ideas."],
      ["patient", "Testing and fixing take time."],
      ["teamwork", "Mechanical, electrical and software engineers work together."],
    ],
    day: [
      ["Define the task", "Decide what the robot must do."],
      ["Design the hardware", "Choose motors, sensors and structure."],
      ["Write the code", "Program movement and decisions."],
      ["Test and debug", "Find and fix problems."],
      ["Improve and share", "Refine the robot and document it."],
    ],
    quiz: {
      title: "Sense and move",
      intro: "Think like a robotics engineer.",
      q: [
        ["A robot has to avoid walls. Which part helps it detect them?", ["A distance sensor", "A speaker", "A paint brush"], 0, "Distance sensors measure how far away objects are."],
        ["Why do robotics engineers test robots in small steps?", ["To find and fix problems early", "To make it slower", "To avoid coding"], 0, "Testing small pieces makes problems easier to locate."],
      ],
    },
    related: [
      ["mechanical-engineer", "Robots are built on mechanical design."],
      ["software-developer", "Robots run on code."],
      ["biomedical-engineer", "Medical robots and prosthetics link both fields."],
    ],
  },
  {
    slug: "environmental-engineer",
    name: "Environmental Engineer",
    category: "engineering",
    summary: "Designs solutions that protect air, water and land from pollution.",
    overview:
      "Environmental engineers work on clean water, waste treatment, air quality and ways to reduce pollution. They design systems and advise companies and governments on protecting the environment.",
    purpose: "To protect people and nature from pollution and damage.",
    dailyWork: "Testing water or air, designing treatment systems, studying data and writing reports.",
    example:
      "A factory releases dirty water. The engineer designs a treatment system that cleans the water before it returns to the river.",
    kw: ["environmental engineer", "pollution", "water treatment", "waste", "sustainability", "engineer"],
    tags: ["science", "building", "design", "nature", "helping", "puzzles", "team", "outdoors", "chemistry", "biology", "research"],
    subj: [
      ["chemistry", "Pollution is made of chemicals that can be treated.", "How chemicals can be filtered from water."],
      ["biology", "Ecosystems depend on clean air and water.", "How pollution affects river life."],
      ["math", "Data and models show how pollution spreads.", "Estimating how pollutants spread in a lake."],
    ],
    skills: ["Problem-solving", "Data analysis", "Communication"],
    path: [
      ["Engineering or environmental degree", "Environmental, civil or chemical engineering degrees are common, usually three to five years."],
      ["Work experience", "Many graduates join consultancies, utilities or government and later gain professional recognition."],
    ],
    enjoy: [
      "Protecting the planet through practical solutions",
      "A mix of fieldwork, lab work and design",
      "Growing demand as the world focuses on sustainability",
      "Many sectors: water, energy, waste and cities",
    ],
    consider: [
      "Progress can be slow and depends on laws and budgets",
      "Fieldwork in all weathers",
      "Balancing environmental needs with costs",
      "Sensitive discussions with communities and companies",
    ],
    qual: [
      ["curious", "Solving environmental problems means exploring causes."],
      ["problem-solving", "Real situations have many competing needs."],
      ["communicating", "Engineers explain risks and solutions to non-experts."],
      ["helping", "The goal is a healthier environment for everyone."],
    ],
    day: [
      ["Collect samples", "Test air, soil or water."],
      ["Analyse the data", "Look for pollutants and trends."],
      ["Design solutions", "Plan treatment or prevention systems."],
      ["Talk with stakeholders", "Meet companies, officials and communities."],
      ["Write a report", "Explain findings and recommendations."],
    ],
    quiz: {
      title: "Clean water",
      intro: "Think about how to clean water.",
      q: [
        ["Which process removes solid particles from water?", ["Filtration", "Evaporation of paint", "Freezing air"], 0, "Filters remove solid particles from water."],
        ["Why do environmental engineers monitor pollution over time?", ["To see if it is getting better or worse", "To make graphs prettier", "To reduce reports"], 0, "Monitoring shows whether actions are working."],
      ],
    },
    related: [
      ["environmental-scientist", "Scientists study problems, engineers design solutions."],
      ["civil-engineer", "Water and waste systems are part of civil engineering."],
      ["renewable-energy-engineer", "Both help reduce environmental damage."],
    ],
  },
];
