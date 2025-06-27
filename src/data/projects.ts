import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "allmart",
    title: "AllMart (E-Commerce)",
    description: "AllMart is an eCommerce and delivery platform in Antigua & Barbuda that connects users with local merchants for food, groceries," + 
    "and retail shopping, offering real-time tracking, fast delivery, and flexible payment options.",
    icon: "https://res.cloudinary.com/decn4jnpk/image/upload/v1751035273/allmart_mo0gqs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://www.allmartplace.com/en/",
    tags: ["Node.js", "Express", "Angular", "Redis", "MongoDB"],
  },
  {
    id: "gavani",
    title: "Gavani (E-Commerce)",
    description:
      "Gavani is an online platform for buying and selling clothing, designed to serve both sellers and buyers. " + 
      "It offers a suite of automation tools and settings to help users efficiently connect with potential buyers or sellers.",
    icon: "https://res.cloudinary.com/decn4jnpk/image/upload/v1751035307/gavani_ms2fzh.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "https://gavani.vn",
    tags: ["Laravel", "Vue.js", "AWS", "PostgreSQL"],
  },
  {
    id: "gempad",
    title: "GemPad (NFT Marketplace)",
    description: "GemPad is a decentralized, multi-chain launchpad that allows crypto projects to launch tokens without coding." + 
    "It offers various sale types, investor protection features, and rewards via the $GEMS token.",
    icon: "https://res.cloudinary.com/decn4jnpk/image/upload/v1751035312/gempad_vjb1ub.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://gempad.app/presale/all",
    tags: ["Nest.js", "Next.js", "Tailwind CSS", "Web3", "Solidity"],
  },
  {
    id: "taskade",
    title: "Taskade: AI Agent Workplace",
    description:
      "Taskade is an AI-powered productivity platform that combines task management, note-taking, mind maps, and real-time collaboration" + 
      " into one workspace with customizable workflows and cross-device sync.",
    icon: "https://res.cloudinary.com/decn4jnpk/image/upload/v1751035311/taskade_mnupfp.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://taskade.com",
    tags: ["React.js", "Tailwind CSS", "OpenAI", "LLM", "RAG"],
  },
  {
    id: "intervueai",
    title: "AI-powered mock interview",
    description:
      "A real-time AI mock interview platform that offers voice-based, form-free interviews with lifelike personas, live feedback, " + 
      " and seamless management through an intuitive dashboard and secure Firebase authentication.",
    icon: "https://res.cloudinary.com/decn4jnpk/image/upload/v1751035313/intervueai_lzqazg.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "https://intervueai-io.vercel.app/",
    tags: ["Next.js", "Firebase", "LangChain", "RAG", "Gemini", "STT"],
  },
  {
    id: "video-calling-app-flutter",
    title: "Video Calling App",
    description:
      "A cross-platform video meeting app built with Flutter, featuring real-time video/audio calls, chat, " + 
      "screen sharing, and Firebase authentication—powered by WebRTC for low-latency communication.",
    icon: "https://res.cloudinary.com/decn4jnpk/image/upload/v1751035302/flutter-chat_fibswz.jpg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/digi-kraken206/ChatRoom-Flutter",
    tags: ["React Native", "Nest.js", "MongoDB", "Firebase", "WebRTC"],
  },

];
export default projects;
