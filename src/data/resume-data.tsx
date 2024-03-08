import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dipo Areoye",
  initials: "DA",
  location: "London / New York",
  locationLink: "https://www.google.com/maps/place/London",
  about:
    "Full Stack Engineer & founder focused on building products with extra attention to detail",
  summary:
    "I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Swift & Kotlin",
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQGl7hhBTs-QTQ/profile-displayphoto-shrink_800_800/0/1690739787247?e=1712188800&v=beta&t=ZScu27MYIhupOe6-wnM6hapfnMb7yyuqIUAPvv4useI",
  contact: {
    email: "dipoareoye@gmail.com",
    tel: "+14154256753",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/DipoAreoye",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dipoareoye/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/oye_dipo",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University Of Nottingham",
      degree: "Bachelor's Degree in Computer Science",
      start: "2012",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Icon",
      link: "https://joinicon.com",
      badges: ["San Francisco"],
      title: "Technical Co-Founder",
      logo: ParabolLogo,
      start: "2020",
      end: "2023",
      description:
        "Led a cross-functional team of engineers and designers in the development and launch of various consumer software and web3 products from inception to market.\nParticipated in YCombinator S20, raising a $150k pre seed round",
    },
    {
      company: "Yup",
      link: "https://yup.com",
      badges: ["San Francisco"],
      title: "Lead Mobile Developer",
      logo: ClevertechLogo,
      start: "2017",
      end: "2020",
      description:
        "Led and grew iOS and Android teams, architected & built features end to end for both platforms, managing releases and application stability to <1% crash rate from 100k to 1M+ users.\nProposed and led architechtual shift to MVVM on Android. Resulting in a 100% increase in sprint velocity & 20% reduction in customer reported bugs.",
    },
    {
      company: "LoopUp",
      link: "https://loopup.com/",
      badges: ["San Francisco"],
      title: "Front End developer",
      logo: JojoMobileLogo,
      start: "2015",
      end: "2016",
      description:
        "Core feature team member responsible for maintaining online platform (frontend) and developing new award winning web VOIP client (ReactJS).\nSpent initial 5 months building python test framework whilst maintaining and extending existing Android application.\nExperienced successful IPO on London Stock Exchange.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/React Native/Next.js",
    "Node.js",
    "Kotlin",
    "Swift",
  ],
  projects: [
    {
      title: "Jot",
      techStack: [
        "React Native",
        "TypeScript",
        "Next.js",
      ],
      description: "A Social Journal, co founding enginner from 0-100k users",
      logo: ConsultlyLogo,
      link: {
        label: "jotapp.ai",
        href: "https://jotapp.ai/",
      },
    },
    {
      title: "Lara",
      techStack: ["Side Project", "TypeScript", "open", "Browser Extension"],
      description:
        "An sms based AI chat bot to assist with tech support issues",
      logo: MonitoLogo,
      link: {
        label: "ask-lara.com",
        href: "https://ask-lara.com",
      },
    },
    {
      title: "Summon",
      techStack: ["Side Project", "Node.js", "Solidity"],
      description:
        "A marketplace to rent access to token gated spaces, web3 games and tools.",
      logo: JarockiMeLogo,
      link: {
        label: "usesummon.com",
        href: "https://usesummon.com",
      },
    },
  ],
} as const;
