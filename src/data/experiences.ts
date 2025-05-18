import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Senior Software Engineer",
    company: "BeaconTrax Inc",
    startDate: "Mar 2020",
    isCurrentJob: true,
    location: "Toronto, Canada",
    description: [
      "Currently working on developing innovative software solutions.",
      "Contributing to large-scale projects with a focus on performance optimization.",
      "Collaborating closely with cross-functional teams to ensure product quality.",
      "Adhering to clean code practices and modern development techniques.",
    ],
  },
  {
    designation: "Full Stack Developer",
    company: "Thriver",
    startDate: "Feb 2018",
    endDate: "Mar 2020",
    isCurrentJob: false,
    location: "Toronto, Canada",
    description: [
      "Developed over 5 web applications with seamless backend API integration.",
      "Streamlined workflows by eliminating redundant data, boosting efficiency.",
      "Improved website loading time by 80% through image optimization, minimizing main-thread work, and implementing SEO strategies.",
      "Resolved 100+ bugs and conducted thorough code reviews.",
      "Demonstrated expertise in both backend and frontend development.",
    ],
  },
  {
    designation: "Software Developer",
    company: "Lunchclub",
    startDate: "Aug 2015",
    endDate: "Jan 2018",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Revamped and enhanced 3+ mobile apps using Flutter.",
      "Deployed RESTful APIs for seamless app-server integration.",
      "Integrated Google AdMob to effectively monetize applications.",
      "Contributed to boosting app functionality and revenue generation.",
    ],
  },
  {
    designation: "Software Developer Intern",
    company: "Electroline",
    startDate: "Mar 2013",
    endDate: "Jul 2015",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Spearheaded website development and enhancements for company portals.",
      "Prioritized clean, reusable code with modern tech stacks.",
      "Efficiently managed multiple tasks with minimal supervision.",
      "Collaborated with senior team members to meet and exceed project goals.",
    ],
  },
];

export default experiences;
