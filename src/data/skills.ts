import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
        title: "Ruby",
        level: SkillLevel.Intermediate,
        icon: "/skills/ruby.svg",
      },
      {
        title: "Java",
        level: SkillLevel.Expert,
        icon: "/skills/java.svg",
      },
      {
        title: "C#",
        level: SkillLevel.Expert,
        icon: "/skills/csharp.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "Vue.js",
        level: SkillLevel.Expert,
        icon: "/skills/vue.svg",
      },
      {
        title: "Angular",
        level: SkillLevel.Expert,
        icon: "/skills/angular.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "Socket.io",
        level: SkillLevel.Expert,
        icon: "/skills/socket-io.png",
      },
      {
        title: "Nest.js",
        level: SkillLevel.Expert,
        icon: "/skills/nestjs.svg",
      },
      {
        title: "Django",
        level: SkillLevel.Expert,
        icon: "/skills/django.svg",
      },
      {
        title: "Spring Framework",
        level: SkillLevel.Expert,
        icon: "/skills/spring.png",
      },
      {
        title: "ASP.NET",
        level: SkillLevel.Intermediate,
        icon: "/skills/asp.net.png",
      },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "React Native",
        level: SkillLevel.Expert,
        icon: "/skills/reactnative.svg",
      },
      {
        title: "Flutter",
        level: SkillLevel.Expert,
        icon: "/skills/flutter.svg",
      },
      {
        title: "GetX",
        level: SkillLevel.Expert,
        icon: "/skills/getx.png",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "/skills/docker.png",
      },
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "Azure",
        level: SkillLevel.Intermediate,
        icon: "/skills/azure.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Firebase",
        level: SkillLevel.Intermediate,
        icon: "/skills/firebase.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
  {
    title: "Generative AI",
    items: [
      {
        title: "OpenAI",
        icon: "/skills/chatgpt.svg"
      },
      {
        title: "NLP",
        icon: "/skills/nlp.svg"
      },
      {
        title: "LangChain",
        icon: "/skills/chain-image.png"
      },
      {
        title: "RAG System",
        icon: "/skills/setting.svg"
      }
      
    ]
  }
];

export default skills;
