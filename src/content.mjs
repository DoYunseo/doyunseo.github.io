// Edit this file to update the homepage. Run `node scripts/build.mjs` afterward.
import { experienceDetails } from "./experience-content.mjs";

const experience = experienceDetails.map((item) => ({
  period: item.listPeriod,
  role: item.role,
  organization: item.listOrganization || item.organization,
  detailSlug: item.slug,
}));

export const content = {
  name: "Yunseo Do",
  analyticsId: "G-BMCR22GYM5",
  email: "ysdoh0209@khu.ac.kr",
  location: "Suwon, South Korea",
  cvUrl: "https://drive.google.com/file/d/1ilotEf4KxfitKLj3DdNlyLxxf_nU86Wd/view?usp=sharing",
  profileLinks: [
    { label: "GitHub", url: "https://github.com/DoYunseo" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yunseo-do-908b072aa/" },
    { label: "Blog", url: "https://tori-notepad.tistory.com/" },
  ],
  introduction: [
    [
      "Hello! I'm Yunseo Do, an undergraduate researcher at the ",
      { label: "Human & Interactive Technology Lab (ITEM)", url: "https://hci.khu.ac.kr/" },
      " at Kyung Hee University, advised by ",
      { label: "Prof. Seungjae Oh", url: "https://lokilike.netlify.app/about/" },
      ".",
    ],
    [
      "My research interests lie in human–AI interaction. I am especially interested in how AI advice can shape users’ decisions, sometimes without their full awareness, and how interaction design can help them remain reflective and in control. My current work explores these questions through haptic and visual interaction, while my broader goal is to design AI support systems that preserve human agency across different tasks and contexts.",
    ],
    [
      "Previously, I was a research intern in the Environmental Safety Group at ",
      { label: "KIST Europe", url: "https://www.kist-europe.de/" },
      ". I study Artificial Intelligence at Kyung Hee University, with expected graduation in February 2027.",
    ],
    [
      "I enjoy exploring new areas of AI and writing about what I learn. Please feel free to ",
      { label: "get in touch", url: "mailto:ysdoh0209@khu.ac.kr" },
      " — I'd love to connect!",
    ],
  ],
  news: [
    {
      date: "2026.09",
      textSegments: [
        "Submitted a first-author paper to ACM CHI 2027 with ",
        { label: "Prof. Seungjae Oh", url: "https://lokilike.netlify.app/about/" },
        " and ",
        { label: "Prof. Sungahn Ko", url: "https://haiv.postech.ac.kr/" },
        ".",
      ],
    },
    { date: "2026.04", text: "Co-authored a paper at the CHI 2026 Haptics for AI Workshop." },
    { date: "2025.12", text: "Received an Honorable Mention for our paper at KSC 2025." },
    { date: "2025.03", text: "Joined ITEM Lab at Kyung Hee University as an undergraduate researcher." },
    { date: "2024.08", text: "Started a research internship at KIST Europe, Germany", flag: "🇩🇪" },
    { date: "2024.01", text: "Became president of KHUDA's 5th cohort." },
  ],
  research: [
    {
      title: "Haptic Guidance in Physical Human–AI Decision-Making",
      venue: "Under Review",
      type: "First-author manuscript",
      contribution: "Led the full research process: topic selection, experimental design, user study execution, quantitative and qualitative analysis, and manuscript writing.",
    },
    {
      title: "A Pneumatic Haptic Glove for Pose-Based Human-AI Communication",
      venue: "CHI 2026 · Haptics for AI Workshop",
      type: "Workshop paper",
      authors: ["Minwoo Lee", "Sungjoon Yoon", "Seongmin Yun", "Yunseo Do", "Seungjae Oh"],
      contribution: "Built the AI software framework and conducted user experiments on pose-based communication.",
      pdfUrl: "./assets/pneumatic-haptic-glove-chi2026.pdf",
    },
    {
      title: "Gaze-Conditioned Grasp Synthesis via 2D Segmentation and 3D Reconstruction",
      venue: "Korea Software Congress (KSC) 2025 · Honorable Mention",
      type: "Conference paper",
      authors: ["Yunseo Do", "Seungjae Oh"],
      contribution: "Designed the gaze-to-grasp pipeline and evaluated it with users.",
      recordLink: { label: "DBpia", url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12577724" },
      pdfUrl: "./assets/gaze-conditioned-grasp-ksc2025.pdf",
    },
    {
      title: "CrossGaussian: Enhancing Remote Collaboration through 3D Gaussian Splatting and Real-time 360° Streaming",
      venue: "UIST Adjunct 2025",
      type: "Conference paper",
      authors: ["Jaehyun Byun", "Byunghoon Kang", "Yonghyun Gwon", "Hongsong Choi", "Yunseo Do", "Eunho Kim", "Sangkeun Park", "Seungjae Oh"],
      contribution: "Supported user experiments and semi-structured interviews for the VR collaboration system.",
      doiUrl: "https://doi.org/10.1145/3746058.3758348",
      pdfUrl: "./assets/crossgaussian-uist-adjunct-2025.pdf",
    },
  ],
  projects: [
    {
      title: "arXiv Save As Title",
      description: "A Chrome extension that downloads arXiv papers using their titles as readable PDF filenames.",
      links: [
        { label: "Chrome Web Store", url: "https://chromewebstore.google.com/detail/arxiv-save-as-title/kjdkgfhkdikbcklgdjkfbjgloafjmjoc?pli=1" },
        { label: "GitHub", url: "https://github.com/DoYunseo/arXiv-save-as-Title" },
      ],
    },
  ],
  experience,
  awards: [
    { year: "2025", award: "Honorable Mention Paper Award", event: "Korea Software Congress (KSC)" },
    { year: "2023", award: "Grand Prize", event: "Seoul Central AI Competition (SCAICO)" },
    { year: "2023", award: "Junior Prize", event: "Kyung Hee University SW Festival" },
    { year: "2023", award: "Excellence Prize", event: "KHUTHON" },
  ],
};
