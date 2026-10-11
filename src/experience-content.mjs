export const experienceDetails = [
  {
    slug: "item-lab",
    role: "Undergraduate Researcher",
    organization: "ITEM Lab, Kyung Hee University",
    period: "March 2025 – Present",
    listPeriod: "2025.03 – Present",
    location: "Yongin, South Korea",
    summary: "I study how AI assistance can support physical decision-making while preserving user agency.",
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
          "I work across the full research process, including topic selection, experimental design, system development, user studies, quantitative and qualitative analysis, and academic writing.",
        ],
      },
      {
        title: "Current Direction",
        paragraphs: [
          "I am currently investigating haptic guidance in physical human–AI decision-making and how assistance can remain effective without overriding a person’s intent.",
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
    summary: "I supported three middle-school students through 44 online mentoring sessions totaling 87 hours.",
    stats: [
      { value: "44", label: "Mentoring sessions" },
      { value: "87", label: "Total hours" },
      { value: "3", label: "Students" },
    ],
    sections: [
      {
        title: "Mentoring",
        paragraphs: [
          "I provided online foundational learning support in Korean, English, and mathematics to three middle-school students in Incheon.",
        ],
      },
      {
        title: "Program Context",
        paragraphs: [
          "KT LAN School is a mentoring program operated by KT and the Incheon Metropolitan Office of Education. It supports students who need additional help with self-directed learning and aims to reduce learning gaps.",
        ],
      },
      {
        title: "What I Learned",
        paragraphs: [
          "The experience strengthened my ability to explain the same idea in different ways and to adjust the pace of a session to each learner’s needs.",
        ],
      },
    ],
  },
  {
    slug: "dongbuk-ai-club",
    role: "AI Research Club Instructor",
    organization: "Dongbuk High School",
    period: "May 2025 – October 2025",
    listPeriod: "2025.05 – 2025.10",
    listOrganization: "Dongbuk High School, Seoul",
    location: "Seoul, South Korea",
    summary: "I taught high-school students how to approach AI topics through structured lessons and research-oriented activities.",
    sections: [
      {
        title: "Teaching",
        paragraphs: [
          "I prepared and delivered lessons for an AI research club, helping students build a practical understanding of AI concepts and the process of turning a question into an investigation.",
        ],
      },
      {
        title: "What I Learned",
        paragraphs: [
          "Teaching made me more deliberate about explaining technical ideas clearly, checking understanding, and connecting abstract concepts to concrete examples.",
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
    credential: {
      title: "Global Internship Program Completion",
      description: "Completed a six-month internship in the Planning and Coordination Division under the supervision of Dr. Juyong Yoon (August 5, 2024 – January 31, 2025).",
    },
    sections: [
      {
        title: "1. Problem Recognition",
        paragraphs: [
          "Horizon Europe project data was public, but finding useful information was slow. The dataset contained 2,048 XML files, with each file containing roughly 1,000 lines. Researchers often had to open and inspect files manually.",
          "I framed the project around a practical question: how could researchers retrieve relevant project information quickly while keeping answers grounded in the source data?",
        ],
      },
      {
        title: "2. Planning",
        paragraphs: [
          "I defined four requirements for the assistant: it should be free to operate, produce grounded answers, support Korean and English, and provide a simple conversational interface.",
          "I chose retrieval-augmented generation to reduce unsupported answers and planned a lightweight web application that internal researchers could access without a complex setup.",
        ],
      },
      {
        title: "3. Development",
        paragraphs: [
          "I built a retrieval pipeline that searched a vector store with cosine similarity, passed the most relevant documents to the language model, and generated answers from that context. The interface returned project links and structured tables when they helped researchers compare results.",
          "After comparing available language-model options, I used Gemma 2 2B through Hugging Face, connected the retrieval and answer pipeline with LangChain, and built the web interface in Streamlit.",
        ],
      },
      {
        title: "4. Iterative Updates",
        paragraphs: [
          "I shared working versions with internal researchers, gathered feedback on answer relevance and usability, and revised the retrieval flow and interface across multiple iterations.",
          "The updates focused on making sources easier to verify, presenting results in clearer formats, and responding conservatively when the available evidence was insufficient.",
        ],
      },
      {
        title: "5. Tech Stack",
        tags: ["Python", "RAG", "LangChain", "Hugging Face", "Gemma 2 2B", "Streamlit", "Vector Retrieval", "Cosine Similarity"],
      },
      {
        title: "6. What I Learned",
        paragraphs: [
          "This project taught me that technical correctness alone does not make a useful tool. A system becomes valuable when its retrieval flow, responses, and interface reflect the users’ real tasks and needs.",
          "That lesson continues to shape how I approach research and development: start from the user’s problem, test the system in context, and keep refining it through feedback.",
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
    credential: {
      title: "KHUDA 5th Cohort Completion",
      description: "Completed the Computer Vision course and served as president of KHUDA’s fifth cohort during the January–May 2024 program.",
    },
    sections: [
      {
        title: "Learning in KHUDA",
        paragraphs: [
          "KHUDA is Kyung Hee University’s academic community for data and AI. I joined in 2022, developed my foundations through study sessions and projects, and later completed the fifth cohort’s Computer Vision course.",
        ],
      },
      {
        title: "Leadership",
        paragraphs: [
          "As president, I planned and operated study groups and team projects, coordinated an academic exchange with Chung-Ang University, helped organize a joint competition, and worked on external sponsorship and club operations.",
          "My goal was to give members a clear path from learning core concepts to applying them in collaborative projects and sharing their work with peers.",
        ],
      },
      {
        title: "Recognition",
        paragraphs: [
          "During my term, KHUDA was selected as a Hyundai Mobis outstanding software club and received sponsorship support for its activities.",
        ],
      },
      {
        title: "What I Learned",
        paragraphs: [
          "Leading KHUDA taught me that a strong learning community needs clear structure, regular feedback, and shared ownership. I learned to coordinate people with different interests while keeping the group focused on concrete learning outcomes.",
        ],
      },
    ],
    relatedLink: { label: "Visit KHUDA", url: "https://www.khuda.co.kr/", external: true },
  },
];
