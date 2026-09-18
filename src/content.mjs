// Edit this file to update the homepage. Run `node scripts/build.mjs` afterward.
export const content = {
  name: "Yunseo Do",
  email: "ysdoh0209@khu.ac.kr",
  location: "Suwon, South Korea",
  cvUrl: "https://drive.google.com/file/d/1-c2eDTfK60VP7ZamORlMhFRc_k_DOo1v/view?usp=sharing",
  profileLinks: [
    { label: "GitHub", shortLabel: "GH", url: "https://github.com/DoYunseo" },
    { label: "LinkedIn", shortLabel: "in", url: "https://www.linkedin.com/in/yunseo-do-908b072aa/" },
    { label: "Blog", shortLabel: "Blog", url: "https://tori-notepad.tistory.com/" },
  ],
  introduction: [
    [
      "Hello! I'm Yunseo Do, an undergraduate researcher at the ",
      { label: "Human & Interactive Technology Lab (ITEM)", url: "https://hci.khu.ac.kr/" },
      " at Kyung Hee University, advised by Prof. Seungjae Oh.",
    ],
    [
      "My research interests include human–AI interaction, AI-based interaction, physical AI, and haptic shared control. I'm especially curious about how intelligent systems can interact with people in the physical world.",
    ],
    [
      "Previously, I was a research intern in the Environmental Safety Group at KIST Europe. I study Artificial Intelligence at Kyung Hee University and expect to graduate in February 2027.",
    ],
    [
      "I enjoy exploring new areas of AI and writing about what I learn. Please feel free to ",
      { label: "get in touch", url: "mailto:ysdoh0209@khu.ac.kr" },
      " — I'd love to connect!",
    ],
  ],
  news: [
    { date: "2026.01", text: "Received the Encouragement Prize in the KSC 2025 Undergraduate Paper Competition." },
    { date: "2025.03", text: "Joined ITEM Lab at Kyung Hee University as an undergraduate researcher." },
    { date: "2024.08", text: "Started a research internship at KIST Europe." },
    { date: "2024.01", text: "Became president of KHUDA's 5th cohort." },
  ],
  research: [
    {
      title: "Gaze-Conditioned Grasp Synthesis via 2D Segmentation and 3D Reconstruction",
      venue: "Korea Software Congress 2025 · Undergraduate Paper Competition",
      type: "Research paper",
      abstract: "This work proposes a gaze-conditioned pipeline that identifies a fixated object from egocentric images, reconstructs it in 3D, and synthesizes natural human grasps. The project received an Encouragement Prize in the undergraduate paper competition.",
    },
    {
      title: "T2VSum: Multimodal Video Summarization through Text-Derived Video Features",
      venue: "KHU Advanced Deep Learning Project · 2024",
      type: "Research project",
      abstract: "This project explored text-derived video features for multimodal video summarization, including cases where some video frames are damaged.",
    },
  ],
  projects: [
    {
      title: "arXiv Save As Title",
      description: "A Chrome extension that downloads arXiv papers using their titles as readable PDF filenames.",
      links: [{ label: "GitHub", url: "https://github.com/DoYunseo/arXiv-save-as-Title" }],
    },
  ],
  experience: [
    { period: "2025.03 – Present", role: "Undergraduate Researcher", organization: "ITEM Lab, Kyung Hee University" },
    { period: "2024.08 – 2025.01", role: "Research Intern", organization: "Environmental Safety Group, KIST Europe" },
    { period: "2025.05 – 2025.10", role: "AI Research Club Instructor", organization: "Dongbuk High School, Seoul" },
    { period: "2024.01 – 2024.07", role: "President, KHUDA 5th", organization: "Data Analysis & AI Club, Kyung Hee University" },
  ],
  awards: [
    { year: "2026", award: "Encouragement Prize", event: "Korea Software Congress 2025 · Undergraduate Paper Competition" },
    { year: "2023", award: "Grand Prize", event: "Seoul Central AI Competition (SCAICO)" },
    { year: "2023", award: "Junior Prize", event: "Kyung Hee University SW Festival" },
    { year: "2023", award: "Excellence Prize", event: "KHUTHON" },
  ],
};
