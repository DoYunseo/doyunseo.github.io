export const experienceDetails = [
  {
    slug: "item-lab",
    role: "Undergraduate Researcher",
    organization: "ITEM Lab, Kyung Hee University",
    period: "March 2025 – Present",
    listPeriod: "2025.03 – Present",
    location: "Yongin, South Korea",
    summary: "I study how AI assistance can support physical decision-making while preserving user agency.",
    heroImage: "experience/item-lab-cherry-blossoms.jpg",
    heroAlt: "Members of ITEM Lab posing together beneath cherry blossoms at Kyung Hee University",
    heroCaption: "ITEM Lab with cherry blossoms 🌸",
    plainSections: true,
    sections: [
      {
        title: "Research Focus",
        paragraphs: [
          "My work focuses on physical human–AI interaction, haptic guidance, and user agency. I design interaction techniques that help people understand and respond to AI guidance while retaining control over their actions.",
        ],
      },
      {
        title: "Research Process",
        paragraphs: [
          "At ITEM Lab, I learned how to review prior work, formulate research questions, design experiments, conduct user studies, analyze quantitative and qualitative data, and write research papers.",
        ],
      },
      {
        title: "Current Direction",
        paragraphs: [
          "I am currently investigating haptic guidance in physical human–AI decision-making and how assistance can remain effective without overriding a person’s intent.",
        ],
      },
      {
        title: "Persistence",
        paragraphs: [
          "More than anything, I learned to keep iterating until an idea works and to stay with a difficult problem long enough to understand and solve it.",
        ],
      },
    ],
    relatedLink: { label: "View selected research", url: "../index.html#research", external: false },
  },
  {
    slug: "kt-lan-school",
    role: "Online Academic Mentor",
    organization: "KT LAN School Program",
    period: "June 2025 – November 2025",
    listPeriod: "2025.06 – 2025.11",
    listOrganization: "KT LAN School Program · 44 sessions / 87 hours",
    location: "Remote · Incheon, South Korea",
    summary: "I supported four middle-school students through 44 online mentoring sessions totaling 87 hours, including AI coding lessons.",
    heroImage: "experience/kt-online-mentoring.jpg",
    heroAlt: "A tablet displaying an online mathematics lesson beside a cup of coffee",
    heroCaption: "Teaching online with my coffee ☕",
    plainSections: true,
    stats: [
      { value: "44", label: "Mentoring sessions" },
      { value: "87", label: "Total hours" },
      { value: "4", label: "Students" },
    ],
    sections: [
      {
        title: "Mentoring",
        paragraphs: [
          "I provided online mentoring in Korean, English, mathematics, and AI coding to four middle-school students in Incheon.",
        ],
      },
      {
        title: "Program Context",
        paragraphs: [
          "KT LAN School is a mentoring program operated by KT and the Incheon Metropolitan Office of Education. It supports students who need additional help with self-directed learning and aims to reduce learning gaps.",
        ],
      },
      {
        title: "Student Outcomes",
        paragraphs: [
          "One student who had scored in the 40s in mathematics during second grade earned 82 on the final exam and finished the term with a 93-point overall average.",
          "Students said the sessions helped them ask questions more comfortably, work through mistakes without pressure, and persist with unfamiliar problems.",
        ],
      },
      {
        title: "What I Learned",
        paragraphs: [
          "The experience strengthened my ability to explain the same idea in different ways and adjust the pace of a session to each learner’s needs. It also showed me that patient, individualized support can build both academic confidence and healthier study habits.",
        ],
      },
    ],
    testimonial: {
      title: "A Message I Still Remember",
      introduction: "At the end of the program, one student told me that our sessions helped them let go of the pressure to never make mistakes and take time to work through problems. It is a message I still remember.",
      image: "experience/kt-student-message.jpg",
      alt: "An anonymized Korean message from a student reflecting on their growth during the KT LAN School mentoring program",
      caption: "An anonymized message from a student at the end of the mentoring program.",
    },
  },
  {
    slug: "dongbuk-ai-club",
    role: "AI Research Club Instructor",
    organization: "Dongbuk High School",
    period: "May 2025 – October 2025",
    listPeriod: "2025.05 – 2025.10",
    listOrganization: "Dongbuk High School, Seoul",
    location: "Seoul, South Korea",
    summary: "I designed and taught a ten-session AI course in which students used AI tools to build personal websites and team projects.",
    heroImage: "experience/dongbuk-ai-club-session.jpg",
    heroAlt: "Yunseo Do teaching an AI research club session at Dongbuk High School",
    heroCaption: "AI research club session at Dongbuk High School, 2025.",
    plainSections: true,
    sections: [
      {
        title: "Teaching",
        paragraphs: [
          "I spent a lot of time thinking about how to keep the students interested and what would be most useful to them over ten 110-minute sessions. Teaching programming syntax from scratch in such a short period did not seem like the best way to help them make something meaningful, so I designed the course around building with AI tools.",
          "I introduced core AI concepts, prompt engineering, vibe coding, and hands-on exercises with tools such as LangChain and RAG. Rather than asking students to accept generated code as it was, I taught them how to write clearer prompts, inspect the results, identify what needed to change, and revise the code until it became a useful working product.",
          "For their individual projects, the students created personal homepages. They then worked in teams to plan and build a service, which they presented at the school festival. Seeing them turn their own ideas into things they could demonstrate helped me understand how much the structure of a class matters for sustaining curiosity and confidence.",
          "Through this experience, I found it deeply rewarding to share what I knew and watch the students turn that knowledge into projects of their own. I also learned to choose the depth and pace of technical material around the learners in front of me, explain why a tool behaves the way it does, and give them enough room to judge its output and make the project their own.",
        ],
      },
    ],
  },
  {
    slug: "kist-europe",
    role: "Research Intern",
    organization: "KIST Europe",
    period: "August 2024 – January 2025",
    listPeriod: "2024.08 – 2025.01",
    listOrganization: "Environmental Safety Group, KIST Europe",
    location: "Saarbrücken, Germany",
    summary: "I developed a RAG-based assistant that helped KIST Europe researchers find relevant Horizon Europe projects across a large public dataset.",
    heroImage: "experience/kist-europe-final-presentation.jpg",
    heroAlt: "Yunseo Do presenting the Horizon Europe chatbot at KIST Europe",
    heroCaption: "Final presentation at KIST Europe, 2025.",
    plainSections: true,
    sections: [
      {
        title: "Experience",
        paragraphs: [
          "During my six-month internship in the Planning and Coordination Division at KIST Europe, I worked under the supervision of Dr. Juyong Yoon. My project began with a practical problem: researchers needed a faster way to find relevant Horizon Europe projects. The data was public, but it was spread across 2,048 XML files, each with roughly 1,000 lines, so finding useful information often meant opening files one by one.",
          "I started by asking what researchers actually needed from the tool. They wanted something free to run, grounded in the source data, available in both Korean and English, and simple enough to use without a complicated setup. Based on those needs, I planned a retrieval-augmented generation assistant.",
          "I built the retrieval pipeline in Python with LangChain, Hugging Face, Gemma 2 2B, and a vector store. It retrieved relevant documents using cosine similarity, passed them to the model, and displayed answers in a Streamlit interface. I also added project links and tables when they made the results easier to compare.",
          "I shared early versions with researchers and kept revising the system based on their feedback. A recurring request was to understand where each answer came from, so I changed the interface to make retrieved sources easier to inspect and made the assistant respond more cautiously when the evidence was weak.",
          "This was the first time I saw clearly that a technically correct system is not automatically a useful one. I learned to begin with the users’ real task, watch how they use the system, and keep improving it until the interface and the underlying model work together for their needs.",
        ],
      },
    ],
    relatedLink: { label: "Visit KIST Europe", url: "https://www.kist-europe.de/", external: true },
  },
  {
    slug: "khuda",
    role: "President, KHUDA 5th",
    organization: "KHUDA · Data Analysis & AI Club",
    period: "January 2024 – July 2024",
    listPeriod: "2024.01 – 2024.07",
    listOrganization: "Data Analysis & AI Club, Kyung Hee University",
    location: "Kyung Hee University, South Korea",
    summary: "After joining KHUDA in 2022, I served as an executive member and led the club’s fifth cohort as president in 2024.",
    heroImage: "experience/khuda-fifth-cohort.jpg",
    heroAlt: "KHUDA fifth cohort members at their completion ceremony",
    heroCaption: "KHUDA 5th cohort completion ceremony, 2024.",
    plainSections: true,
    sections: [
      {
        title: "Experience",
        paragraphs: [
          "I first joined KHUDA in 2022 because I wanted to learn data science and AI with people who were just as curious about them as I was. I built my foundations through study sessions and projects, later completed the fifth cohort’s Computer Vision course, and gradually became more involved in running the club as an executive member.",
          "When I became president of the fifth cohort in 2024, I spent a lot of time thinking about how members could move beyond studying concepts and actually use what they had learned. I organized study groups and team projects, coordinated an academic exchange with Chung-Ang University, and helped run a joint competition where members could share their work with a wider community.",
          "I was also responsible for practical parts of running the club, including schedules, communication, sponsorship, and making sure each activity continued smoothly. During my term, KHUDA was selected as a Hyundai Mobis outstanding software club and received support for its activities.",
          "Leading KHUDA showed me that a good learning community does not come from one person having all the answers. It grows when people have a clear direction, feel comfortable asking for help, and take responsibility for learning together. I learned how to listen to members with different interests, coordinate their ideas, and create an environment where they could keep moving forward as a group.",
        ],
      },
    ],
    relatedLink: { label: "Visit KHUDA", url: "https://www.khuda.co.kr/", external: true },
  },
];
