import type { Seed } from "./careers-build";

export const creativeSeeds: Seed[] = [
  {
    slug: "photographer",
    name: "Photographer",
    category: "creative",
    summary: "Captures images that tell stories, record events or show products at their best.",
    overview:
      "Photographers use cameras, light and composition to create images for news, weddings, fashion, science, sport, advertising and art. Many work for themselves, and most also edit their photos and manage clients.",
    purpose: "To capture moments and ideas in images people remember.",
    dailyWork: "Planning shoots, photographing people, places or products, editing images and meeting clients.",
    example:
      "A restaurant needs photos for its menu. The photographer plans the lighting, arranges the dishes, takes the pictures and edits them so the colours look appetising.",
    kw: ["photographer", "photography", "camera", "photos", "photojournalist", "wedding photographer"],
    tags: ["creating", "art", "design", "studio", "people", "ideas"],
    subj: [
      ["art", "Composition, colour and light are the heart of photography.", "Framing a photo so the eye is drawn to the subject."],
      ["physics", "Light and lenses follow the rules of optics.", "Why a wide aperture blurs the background."],
      ["business", "Many photographers run their own business.", "Pricing a photo session."],
    ],
    skills: ["Visual eye", "Technical camera skills", "Working with people"],
    path: [
      ["Learn and practise", "Courses in photography or media help, and a strong portfolio is the key to getting work."],
      ["Build clients", "Many start by assisting other photographers or working for themselves."],
    ],
    enjoy: [
      "Creating images people value",
      "Variety of subjects and places",
      "Flexibility if you work for yourself",
      "Seeing your work published or displayed",
    ],
    consider: [
      "Income can be uneven when freelancing",
      "Competition is high",
      "Equipment can be expensive",
      "Editing takes many hours",
    ],
    qual: [
      ["creative", "Every shot needs a fresh idea."],
      ["detail", "Small changes in light and position change the whole picture."],
      ["independent", "Many photographers manage their own work."],
      ["communicating", "Subjects relax when the photographer is friendly and clear."],
    ],
    day: [
      ["Plan the shoot", "Decide location, light and shots."],
      ["Take photos", "Work with the subject to get the best images."],
      ["Select the best", "Choose the strongest pictures."],
      ["Edit", "Adjust colour, light and crop."],
      ["Deliver", "Send images to the client and discuss feedback."],
    ],
    quiz: {
      title: "Frame the shot",
      intro: "See like a photographer.",
      q: [
        ["Why do photographers think about light?", ["It changes how a photo looks and feels", "It has no effect", "It only matters at night"], 0, "Light shapes mood, colour and detail."],
        ["What is composition?", ["How things are arranged in the picture", "The price of a camera", "The size of a file"], 0, "Composition is the arrangement of elements in a frame."],
      ],
    },
    related: [
      ["graphic-designer", "Both use visual skills."],
      ["filmmaker", "Filmmakers use similar camera and lighting skills."],
      ["journalist", "Photojournalists tell news stories with images."],
    ],
  },
  {
    slug: "animator",
    name: "Animator",
    category: "creative",
    summary: "Brings drawings, models and characters to life in films, games and adverts.",
    overview:
      "Animators create moving images by drawing, modelling or using computer software. They work on films, TV, games, adverts and explainer videos, usually as part of a team with directors, designers and sound artists.",
    purpose: "To tell stories and show ideas through movement.",
    dailyWork: "Planning scenes, creating characters or objects, animating movement and refining it with feedback.",
    example:
      "A studio is making a short film about a robot. The animator designs how the robot walks, makes it move frame by frame and adjusts timing so it feels funny.",
    kw: ["animator", "animation", "3d animation", "cartoon", "motion graphics", "cgi"],
    tags: ["creating", "art", "design", "tech", "studio", "ideas", "team", "cs"],
    subj: [
      ["art", "Drawing, timing and character design are central.", "Sketching how a character moves."],
      ["cs", "Software is the main tool.", "Learning 3D modelling tools."],
      ["physics", "Believable movement uses ideas of weight and motion.", "How a ball bounces."],
    ],
    skills: ["Drawing and design", "Patience", "Storytelling"],
    path: [
      ["Study or portfolio", "Many animators take courses in animation, art or computer graphics and build a showreel of their work."],
      ["Start in a studio", "Many begin as assistants or junior animators and specialise over time."],
    ],
    enjoy: [
      "Bringing imagination to life",
      "Teamwork on creative projects",
      "Many industries: film, games, adverts and education",
      "Seeing your work on screen",
    ],
    consider: [
      "Animation takes a great deal of time and patience",
      "Deadlines can be tight",
      "Competitive entry",
      "Freelance work may be uneven",
    ],
    qual: [
      ["creative", "Every character and scene needs fresh ideas."],
      ["patient", "A few seconds of animation can take hours."],
      ["detail", "Small timing changes alter the feeling of a scene."],
      ["teamwork", "Studios rely on many specialists."],
    ],
    day: [
      ["Read the storyboard", "Understand what each scene needs."],
      ["Block out movement", "Create the main poses."],
      ["Refine", "Add smooth in-between motion and detail."],
      ["Review with the director", "Get feedback."],
      ["Revise", "Make changes and finalise."],
    ],
    quiz: {
      title: "Frame by frame",
      intro: "Think like an animator.",
      q: [
        ["A film plays at 24 frames per second. How many drawings are needed for 2 seconds?", ["48", "24", "12"], 0, "24 × 2 = 48 frames."],
        ["Why do animators study how real things move?", ["To make animation feel believable", "To slow down work", "Real movement is irrelevant"], 0, "Observation makes motion convincing."],
      ],
    },
    related: [
      ["game-designer", "Game worlds need animated characters."],
      ["filmmaker", "Both create moving stories."],
      ["illustrator", "Both create images, one still and one moving."],
    ],
  },
  {
    slug: "game-designer",
    name: "Game Designer",
    category: "creative",
    summary: "Plans the rules, worlds and challenges that make a game fun.",
    overview:
      "Game designers invent how a game works: its goals, rules, levels, characters and rewards. They test ideas, listen to players and work with programmers and artists to make a fun experience.",
    purpose: "To design games people enjoy and want to keep playing.",
    dailyWork: "Writing design documents, building prototypes, testing with players and adjusting rules and levels.",
    example:
      "A team wants a puzzle game for beginners. The designer creates early levels that teach one idea at a time, then watches players and fixes levels that confuse them.",
    kw: ["game designer", "game design", "level designer", "video games", "gaming", "designer"],
    tags: ["creating", "design", "ideas", "tech", "puzzles", "team", "studio", "cs", "art"],
    subj: [
      ["art", "Visual style and world design shape a game's feel.", "Designing a level's look."],
      ["cs", "Understanding code helps designers work with programmers.", "Knowing what is easy or hard to build."],
      ["math", "Balance and scoring use numbers.", "Setting how much damage an attack does."],
    ],
    skills: ["Creative thinking", "Understanding players", "Teamwork"],
    path: [
      ["Study or build games", "Many designers study game design, computing or art, and show a portfolio of games or prototypes they have made."],
      ["Join a studio", "Many start in testing or junior design roles."],
    ],
    enjoy: [
      "Inventing new worlds and rules",
      "Seeing players enjoy your design",
      "Mix of art, logic and psychology",
      "Working with passionate teams",
    ],
    consider: [
      "Very competitive industry",
      "Crunch times before releases",
      "Ideas often change or get cut",
      "Games can take years",
    ],
    qual: [
      ["creative", "Games depend on original ideas."],
      ["teamwork", "Designers work closely with artists and programmers."],
      ["curious", "Designers study what makes games fun."],
      ["problem-solving", "Balancing a game is a puzzle."],
    ],
    day: [
      ["Plan the idea", "Define the goals and rules."],
      ["Make a prototype", "Build a simple playable version."],
      ["Playtest", "Watch players and note problems."],
      ["Balance", "Adjust difficulty and rewards."],
      ["Review", "Share results with the team."],
    ],
    quiz: {
      title: "Balance the level",
      intro: "Design decisions for a game.",
      q: [
        ["Players keep quitting at level 2 because it is too hard. What should the designer do?", ["Make it easier or teach the skill first", "Make it harder", "Remove the game"], 0, "Good design teaches skills gradually."],
        ["Why do designers watch real players?", ["To see what confuses or delights them", "To copy their names", "To save money"], 0, "Playtesting shows how people really play."],
      ],
    },
    related: [
      ["game-developer", "Developers build what designers plan."],
      ["animator", "Animators bring game characters to life."],
      ["ux-ui-designer", "Both design experiences for users."],
    ],
  },
  {
    slug: "product-designer",
    name: "Product Designer",
    category: "creative",
    summary: "Designs everyday objects so they look good, work well and can be made.",
    overview:
      "Product designers plan items such as furniture, gadgets, toys, sports equipment and packaging. They sketch ideas, build models, test them with users and work with engineers and manufacturers.",
    purpose: "To create useful, safe and attractive products.",
    dailyWork: "Researching users, sketching, building prototypes, testing and adjusting designs for production.",
    example:
      "A company wants a water bottle that is easy for children to hold. The designer sketches shapes, makes models, tests them with children and picks the best.",
    kw: ["product designer", "industrial designer", "designer", "design", "prototype", "packaging"],
    tags: ["creating", "design", "art", "ideas", "studio", "tech", "people", "team", "physics"],
    subj: [
      ["art", "Shape, colour and drawing matter in every design.", "Sketching a product from different angles."],
      ["physics", "Materials, strength and forces affect how products work.", "Choosing a material that is strong but light."],
      ["math", "Measurements and geometry are needed.", "Scaling a drawing correctly."],
    ],
    skills: ["Sketching", "Making models", "Understanding people"],
    path: [
      ["Degree or course", "Many product designers study product or industrial design, and build a portfolio of projects."],
      ["Work in a team", "Designers often start in studios or manufacturing companies."],
    ],
    enjoy: [
      "Seeing your idea become a real object",
      "A mix of creativity and engineering",
      "Variety of products and industries",
      "Improving everyday life",
    ],
    consider: [
      "Designs must meet cost and safety limits",
      "Ideas change after testing",
      "Competitive field",
      "Deadlines for product launches",
    ],
    qual: [
      ["creative", "New designs start with fresh ideas."],
      ["problem-solving", "Designers solve problems for users."],
      ["detail", "Small changes in size or shape matter."],
      ["teamwork", "Designers work with engineers and makers."],
    ],
    day: [
      ["Research", "Learn what users need."],
      ["Sketch ideas", "Draw several options."],
      ["Build a model", "Make a quick prototype."],
      ["Test", "Ask people to try it."],
      ["Refine", "Improve before production."],
    ],
    quiz: {
      title: "Design for people",
      intro: "Make two design decisions.",
      q: [
        ["Why do designers make prototypes?", ["To test ideas before making many", "To waste material", "To avoid sketching"], 0, "Prototypes reveal problems early."],
        ["A handle is too small for adults. What should the designer do?", ["Make it bigger and test again", "Ignore it", "Make it smaller"], 0, "Design for the real users."],
      ],
    },
    related: [
      ["graphic-designer", "Both use visual design skills."],
      ["mechanical-engineer", "Engineers help make designs work."],
      ["ux-ui-designer", "Both design for how people use things."],
    ],
  },
  {
    slug: "fashion-designer",
    name: "Fashion Designer",
    category: "creative",
    summary: "Designs clothing, shoes and accessories.",
    overview:
      "Fashion designers imagine new clothes and accessories, sketch them, choose fabrics and work with pattern makers and manufacturers. They follow trends and also create new ones.",
    purpose: "To design clothing that looks good, fits well and suits people's lives.",
    dailyWork: "Researching trends, sketching designs, choosing materials, making samples and showing collections.",
    example:
      "A designer is making a school sports uniform. She chooses breathable fabric, sketches styles, makes samples and asks students to try them.",
    kw: ["fashion designer", "fashion", "clothing", "textiles", "designer", "stylist"],
    tags: ["creating", "art", "design", "studio", "ideas", "people"],
    subj: [
      ["art", "Colour, shape and drawing are core skills.", "Sketching an outfit."],
      ["business", "Fashion is also a business.", "Pricing a clothing line."],
      ["math", "Measurements and patterns need accuracy.", "Scaling a pattern to different sizes."],
    ],
    skills: ["Drawing", "Sewing and pattern knowledge", "Following trends"],
    path: [
      ["Study fashion", "Many designers study fashion design, textiles or art, and build a portfolio."],
      ["Gain experience", "Internships and assisting designers help you learn the industry."],
    ],
    enjoy: [
      "Expressing creativity through clothes",
      "Seeing people wear your designs",
      "Travel and fashion events in some roles",
      "Working with textiles, colour and trends",
    ],
    consider: [
      "Very competitive",
      "Tight deadlines before shows",
      "Trends change quickly",
      "Starting salaries can be low",
    ],
    qual: [
      ["creative", "Collections need original ideas."],
      ["detail", "Stitching and fit need accuracy."],
      ["organised", "Many designs and deadlines must be tracked."],
      ["independent", "Many designers start their own labels."],
    ],
    day: [
      ["Research trends", "Study fabrics, colours and styles."],
      ["Sketch", "Draw new designs."],
      ["Choose fabrics", "Match materials to the design."],
      ["Make samples", "Cut and sew a test version."],
      ["Fit and adjust", "Improve fit and style."],
    ],
    quiz: {
      title: "Style it",
      intro: "Make design choices.",
      q: [
        ["Which fabric suits a summer T-shirt?", ["Light, breathable cotton", "Heavy wool", "Thick leather"], 0, "Light fabrics keep people cool."],
        ["Why do designers make a sample before producing many?", ["To check fit and look", "To waste fabric", "To skip sketches"], 0, "Samples reveal problems early."],
      ],
    },
    related: [
      ["graphic-designer", "Both use visual design."],
      ["product-designer", "Both design objects people use and wear."],
      ["entrepreneur", "Many designers start their own labels."],
    ],
  },
  {
    slug: "journalist",
    name: "Journalist",
    category: "creative",
    summary: "Finds, checks and shares news and stories with the public.",
    overview:
      "Journalists research stories, interview people, check facts and report in newspapers, magazines, TV, radio, podcasts and online. Good journalists are curious, accurate and fair.",
    purpose: "To help people understand what is happening in the world.",
    dailyWork: "Researching, interviewing, writing or recording stories, checking facts and meeting deadlines.",
    example:
      "A local reporter hears the school is building a new library. She interviews the principal and students, checks the budget and writes a clear article.",
    kw: ["journalist", "reporter", "news", "writer", "media", "broadcaster", "editor"],
    tags: ["people", "research", "creating", "ideas", "office", "justice"],
    subj: [
      ["languages", "Writing and speaking clearly are the main skills.", "Writing a headline that is accurate and clear."],
      ["humanities", "Understanding history and society gives context.", "Explaining why an event matters."],
      ["cs", "Digital tools and data are used more and more.", "Using a spreadsheet to check a claim."],
    ],
    skills: ["Writing", "Asking good questions", "Fact-checking"],
    path: [
      ["Study or train", "Many journalists study journalism, media or related fields, and build a portfolio of published work."],
      ["Gain experience", "School newspapers, blogs and internships all help."],
    ],
    enjoy: [
      "Telling stories that matter",
      "Meeting many different people",
      "Variety every day",
      "Helping the public stay informed",
    ],
    consider: [
      "Tight deadlines",
      "Irregular hours",
      "Competition for jobs",
      "Facing criticism and needing to stay fair",
    ],
    qual: [
      ["curious", "Journalists ask questions all the time."],
      ["communicating", "Stories must be told clearly."],
      ["detail", "Facts must be accurate."],
      ["decisions", "Journalists decide what to include and what is fair."],
    ],
    day: [
      ["Find a story", "Follow leads and news."],
      ["Research", "Gather facts and sources."],
      ["Interview", "Talk to people involved."],
      ["Write or record", "Shape the story."],
      ["Check and publish", "Make sure it is accurate."],
    ],
    quiz: {
      title: "Check the facts",
      intro: "Think like a reporter.",
      q: [
        ["A friend says a famous fact online. What should a journalist do first?", ["Check it with reliable sources", "Publish it", "Ignore it"], 0, "Facts must be verified."],
        ["Why do journalists get more than one source?", ["To check the story is accurate and fair", "To make stories longer", "To waste time"], 0, "Several sources give a fuller, fairer story."],
      ],
    },
    related: [
      ["photographer", "Photojournalists tell stories with images."],
      ["filmmaker", "Both tell stories, in different ways."],
      ["lawyer", "Both research facts and make clear arguments."],
    ],
  },
  {
    slug: "filmmaker",
    name: "Filmmaker",
    category: "creative",
    summary: "Directs and produces films, documentaries and videos.",
    overview:
      "Filmmakers plan stories, work with actors and crews, manage cameras and sound, and edit footage into finished films. Many start with small projects and learn on set.",
    purpose: "To tell stories and share ideas through moving images.",
    dailyWork: "Planning scripts and shots, directing crews, filming and editing.",
    example:
      "A student filmmaker creates a short documentary about her school. She plans interviews, films scenes, edits the footage and adds music.",
    kw: ["filmmaker", "film director", "video", "videographer", "cinema", "producer", "director"],
    tags: ["creating", "art", "ideas", "studio", "team", "people", "design", "tech"],
    subj: [
      ["art", "Visual storytelling uses composition and colour.", "Planning how a scene looks."],
      ["languages", "Scripts and storytelling rely on words.", "Writing a short scene."],
      ["cs", "Editing software is used daily.", "Cutting video clips together."],
    ],
    skills: ["Storytelling", "Leading a team", "Editing"],
    path: [
      ["Make things", "Start with short films using a phone or camera, and share them."],
      ["Study or train", "Many study film or media, or learn on set."],
    ],
    enjoy: [
      "Telling stories with pictures and sound",
      "Creative teamwork",
      "Seeing audiences react",
      "Variety of projects",
    ],
    consider: [
      "Competitive and unpredictable work",
      "Long hours when filming",
      "Budgets can be tight",
      "Freelance income varies",
    ],
    qual: [
      ["creative", "Every film needs fresh ideas."],
      ["teamwork", "Films need many people working together."],
      ["organised", "Schedules and equipment must be managed."],
      ["communicating", "Directors explain their vision."],
    ],
    day: [
      ["Plan", "Prepare scripts and shot lists."],
      ["Set up", "Arrange cameras, light and sound."],
      ["Film", "Capture scenes with the crew."],
      ["Edit", "Choose and cut the best footage."],
      ["Share", "Show and improve the film."],
    ],
    quiz: {
      title: "Lights, camera",
      intro: "Make film decisions.",
      q: [
        ["Why is a shot list useful?", ["It plans which shots are needed", "It decides the budget only", "It hides the script"], 0, "A shot list keeps filming organised."],
        ["Why do filmmakers record clear sound?", ["Bad sound spoils a film even if the picture is good", "Sound is unimportant", "To make files bigger"], 0, "Audiences notice poor sound quickly."],
      ],
    },
    related: [
      ["photographer", "Both use cameras and light."],
      ["animator", "Both tell stories with moving images."],
      ["journalist", "Documentary filmmakers share true stories."],
    ],
  },
  {
    slug: "illustrator",
    name: "Illustrator",
    category: "creative",
    summary: "Creates drawings and artwork for books, magazines, games and products.",
    overview:
      "Illustrators create pictures to explain ideas or tell stories. They work for publishers, game studios, advertisers and companies, using pencils, paint and digital tools.",
    purpose: "To communicate ideas through original artwork.",
    dailyWork: "Reading briefs, sketching ideas, creating final artwork, and revising it based on feedback.",
    example:
      "A publisher needs pictures for a children's book. The illustrator sketches the characters, gets feedback and paints the final pages.",
    kw: ["illustrator", "illustration", "artist", "drawing", "digital art", "comic artist", "designer"],
    tags: ["creating", "art", "design", "studio", "ideas"],
    subj: [
      ["art", "Drawing, colour and style are the core skills.", "Developing a personal drawing style."],
      ["languages", "Stories and briefs need understanding.", "Reading a story and finding the key scene."],
      ["cs", "Digital art tools are widely used.", "Using a drawing tablet."],
    ],
    skills: ["Drawing", "Imagination", "Meeting deadlines"],
    path: [
      ["Practise and build a portfolio", "A strong portfolio matters most."],
      ["Study or train", "Many study art or illustration, and many are self-taught."],
    ],
    enjoy: [
      "Making pictures for a living",
      "Freedom to work from home in many roles",
      "Variety of projects",
      "Seeing your art in print or online",
    ],
    consider: [
      "Income can be uneven for freelancers",
      "Clients can ask for many changes",
      "Competition is high",
      "Long hours at a desk",
    ],
    qual: [
      ["creative", "Illustration is all about original ideas."],
      ["independent", "Many illustrators work alone."],
      ["patient", "Detailed artwork takes time."],
      ["organised", "Deadlines and clients must be managed."],
    ],
    day: [
      ["Read the brief", "Understand what the client needs."],
      ["Sketch", "Try several ideas."],
      ["Get feedback", "Agree on the direction."],
      ["Finish artwork", "Create the final piece."],
      ["Deliver", "Send files and invoice."],
    ],
    quiz: {
      title: "Picture it",
      intro: "Think like an illustrator.",
      q: [
        ["Why do illustrators start with rough sketches?", ["To explore ideas before spending time on details", "To avoid drawing", "To use more paper"], 0, "Sketches are quick ways to test ideas."],
        ["What should an illustrator do when a client asks for changes?", ["Listen and adjust where it improves the work", "Refuse everything", "Stop answering"], 0, "Illustration is a collaboration with the client."],
      ],
    },
    related: [
      ["graphic-designer", "Both create visuals for clients."],
      ["animator", "Illustrations can be turned into animation."],
      ["game-designer", "Games need artwork."],
    ],
  },
  {
    slug: "music-producer",
    name: "Music Producer",
    category: "creative",
    summary: "Records, shapes and polishes songs and sounds.",
    overview:
      "Music producers help artists create finished tracks. They record instruments and voices, arrange parts, mix the sound and guide the style of a song. Many also make music themselves.",
    purpose: "To turn musical ideas into polished recordings.",
    dailyWork: "Recording, arranging, mixing, working with musicians and meeting deadlines.",
    example:
      "A young singer wants to release a song. The producer records her voice, adds instruments, balances the sounds and prepares the track for streaming.",
    kw: ["music producer", "music", "sound engineer", "audio", "dj", "composer", "recording"],
    tags: ["creating", "art", "ideas", "studio", "tech", "team", "people"],
    subj: [
      ["art", "Creative expression and musical ideas matter.", "Choosing a mood for a song."],
      ["physics", "Sound is vibrations and waves.", "Why different instruments sound different."],
      ["cs", "Music software is the main tool.", "Layering tracks on a computer."],
    ],
    skills: ["Listening", "Music software", "Collaboration"],
    path: [
      ["Learn and create", "Many producers teach themselves with software and build a portfolio of tracks."],
      ["Study", "Some study music technology or audio engineering."],
    ],
    enjoy: [
      "Helping artists bring songs to life",
      "A mix of creativity and technology",
      "Working in studios and on stage",
      "Hearing your work released",
    ],
    consider: [
      "Very competitive",
      "Irregular hours",
      "Equipment and software can be costly",
      "Income varies when freelancing",
    ],
    qual: [
      ["creative", "Producers shape the sound of a song."],
      ["detail", "Small changes in sound change the feeling."],
      ["patient", "Mixing can take many careful listens."],
      ["teamwork", "Producers work with artists."],
    ],
    day: [
      ["Meet the artist", "Discuss the style and goals."],
      ["Record", "Capture voices and instruments."],
      ["Arrange", "Build the structure of the song."],
      ["Mix", "Balance volume and effects."],
      ["Finish", "Prepare the final tracks."],
    ],
    quiz: {
      title: "Mix it",
      intro: "Make a producer's choices.",
      q: [
        ["Why do producers listen on different speakers and headphones?", ["To make sure the song sounds good everywhere", "To annoy artists", "It is not needed"], 0, "Songs are heard on many devices."],
        ["What is mixing?", ["Balancing all the sounds in a song", "Writing lyrics", "Selling music"], 0, "Mixing sets levels and effects for a balanced sound."],
      ],
    },
    related: [
      ["filmmaker", "Film and music work closely together."],
      ["content-creator", "Many creators also produce their own music."],
      ["graphic-designer", "Both help artists present their work."],
    ],
  },
  {
    slug: "content-creator",
    name: "Content Creator",
    category: "creative",
    summary: "Makes videos, posts, podcasts or articles for an online audience.",
    overview:
      "Content creators plan, film, write or record material for platforms such as YouTube, podcasts, blogs and social media. Some work for brands, and some build their own audience and business.",
    purpose: "To inform, entertain or inspire an audience online.",
    dailyWork: "Planning content, filming or writing, editing, posting and talking with the audience.",
    example:
      "A student explains science experiments in short videos. She plans each idea, films it safely, edits it and replies to questions from viewers.",
    kw: ["content creator", "youtuber", "influencer", "blogger", "podcaster", "social media", "freelance"],
    tags: ["creating", "ideas", "people", "tech", "studio", "design", "business"],
    subj: [
      ["languages", "Clear, engaging communication is key.", "Writing a script that holds attention."],
      ["cs", "Editing and publishing tools are used daily.", "Editing a video."],
      ["business", "Creators run a small business.", "Understanding how sponsorships work."],
    ],
    skills: ["Communication", "Editing", "Consistency"],
    path: [
      ["Start creating", "Begin with a topic you care about and learn by publishing."],
      ["Build skills", "Courses in media, marketing or design can help, and many creators learn as they go."],
    ],
    enjoy: [
      "Sharing what you love",
      "Creative freedom",
      "Flexible working",
      "Building a community",
    ],
    consider: [
      "Income is uncertain and often slow to build",
      "Constant need to make new content",
      "Public criticism",
      "Rules for adverts and safety online",
    ],
    qual: [
      ["creative", "Audiences look for fresh ideas."],
      ["independent", "Creators plan and manage their own work."],
      ["organised", "Regular posting needs planning."],
      ["communicating", "Clear, friendly messages connect with people."],
    ],
    day: [
      ["Plan content", "Decide topics and schedule."],
      ["Create", "Film, write or record."],
      ["Edit", "Polish the content."],
      ["Publish", "Post and describe it clearly."],
      ["Engage", "Reply to comments and learn from feedback."],
    ],
    quiz: {
      title: "Grow the channel",
      intro: "Make creator decisions.",
      q: [
        ["Why is posting regularly useful?", ["Audiences know when to expect new content", "It uses more time", "It makes videos shorter"], 0, "Consistency builds an audience."],
        ["What should a creator do before sharing information as fact?", ["Check it with reliable sources", "Guess", "Copy another channel"], 0, "Accuracy builds trust."],
      ],
    },
    related: [
      ["filmmaker", "Both create video."],
      ["journalist", "Both share information with an audience."],
      ["freelancer", "Many creators work for themselves."],
    ],
  },
];
