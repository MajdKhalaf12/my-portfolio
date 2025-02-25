import { Icons } from "@/components/icons";
import { Box, HomeIcon, NotebookIcon } from "lucide-react";
export const DATA = {
  name: "Majd Al-Khalaf",
  initials: "MK",
  url: "https://majdkhalaf12.vercel.app/",
  location: "Damascus Syria",
  description:
    "Frontend Developer and Computer Science Student. I love Cyber Security and helping people.",
  summary:
    "I am a Computer Science student at [Damascus University](#education) with a passion for blending creativity and technology. With experience in front-end development and graphic design, I specialize in React.js, UI design, and motion graphics, having worked on impactful projects for brands like Ejet Alkaharaba and Cialdini Arabia. Currently, I am focused on advancing my skills in Laravel and Flutter while exploring the integration of AI with cybersecurity to develop smarter, more secure solutions.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQEiuOAAbjg_sA/profile-displayphoto-shrink_800_800/B4DZTvCVYtHYAc-/0/1739177156199?e=1745452800&v=beta&t=9waKhB_7sHkCWmctzoS9jwUzh1sYf4l2YIbkVGSX_ko",
  skills: [
    "React",
    "Next.js",
    "Tailwind",
    "Typescript",
    "Node.js",
    "Java",
    "C++",
    "Flutter",
    "Laravel",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: Box, label: "Projects" },
  ],
  contact: {
    email: "majd03.hussain@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MajdKhalaf12",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/majd-al-khalaf/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Behance: {
        name: "Behance Profile",
        url: "https://www.behance.net/majdal-khalaf",
        icon: Icons.behance,

        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/Majd_Al_khalaf",
        icon: Icons.telegram,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:majd03.hussain@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "SR Software",
      href: "https://www.linkedin.com/company/sr-software-2020/",
      badges: [],
      location: "Hybrid",
      title: "Front end Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQFEzrVNwzYs0w/company-logo_200_200/company-logo_200_200/0/1730729015896?e=1742428800&v=beta&t=D7oX_FaI5HbBEKsrDUfd2aOxi_9QMgQDFkYjb16QhNY",
      start: "Aug 2024",
      end: "Dec 2024",
      description:
        "As a Frontend Developer at SR Software, I built and optimized user interfaces using React, working on projects like a POS system, an e-commerce app, and a school desktop app with Electron.js. I collaborated with backend and frontend teams, trained in Laravel, and mastered fast problem-solving under tight deadlines—often completing major tasks overnight. In my final month, I led the frontend team, coordinating development efforts and ensuring efficient project execution. This experience strengthened my leadership, adaptability, and ability to deliver high-quality solutions under pressure.",
    },
    {
      company: "OTOM8",
      href: "https://www.linkedin.com/company/sr-software-2020/",
      badges: [],
      location: "Remote",
      title: "Graphic Designer, UI/UX",
      logoUrl: "",
      start: "Oct 2023",
      end: "May 2024",
      description:
        "As a graphic designer, I thrive on curiosity and continuous learning. Collaborating with industry leaders, I've crafted authentic designs for Ejet Alkaharaba, Cialdini Arabia, Misto Prenuer, and Almountada. Highlights include branding solutions, social media content, UI design, and animations that resonate with authenticity and creativity. Driven by a passion for learning and excellence, I bring creativity and authenticity to every project.",
    },
    {
      company: "SyBots",
      href: "https://www.linkedin.com/company/sybots",
      badges: [],
      location: "On-site",
      title: "Robotics Coach",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQGusZs-Xpefiw/company-logo_200_200/company-logo_200_200/0/1663594560508?e=1742428800&v=beta&t=d7_JNEQYFfJfcdVW9awIN6E59GljVqyLQU693pNu9gk",
      start: "Jan 2023",
      end: "Mar 2023",
      description:
        "As a member of SyBots Robotics, I learned how to use the REV kit Robotics and code a basic robot using Java. I also participated in organizing an Open Day event, where I demonstrated my leadership and communication skills by explaining the robotics concepts and projects to the visitors. I contributed to creating creative content for the SyBots website and social media platforms, such as videos, posters, and articles. I learned how to organize meetings effectively and efficiently, as well as how to give classes and train other students on teaching robotics. I also realized the importance of preparation and listening in order to learn more and improve my skills.",
    },
  ],
  education: [
    {
      school: "Damascus University",
      href: "https://damascusuniversity.edu.sy/ite/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C560BAQGCyHTd_7hdpg/company-logo_200_200/company-logo_200_200/0/1631377332780?e=1742428800&v=beta&t=ltGnaut2pt-LPh2XEI64vhIKfMNVmcC49axz3_kIG08",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Hitos Med",
      href: "https://hitos-med.com",
      dates: "2024 Sep - Oct",
      active: true,
      description:
        "Hitos connects doctors, pharmacists, and medical professionals to solve complex cases. With an intuitive interface, it supports global consultations, advanced diagnostics, and learning opportunities for students and experts alike—ensuring precise diagnoses and innovative treatments.",
      technologies: [
        "Figma",
        "React.js",
        "Typescript",
        "TailwindCSS",
        "Daisy UI",
        "Fillout Forms",
      ],
      links: [
        {
          type: "Website",
          href: "https://hitos-med.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Design",
          href: "https://www.figma.com/design/c2OeicDaFz1rFHP0yQOjBV/Hitos?node-id=0-1&t=Fg3EjUOfGqERXR1K-1",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/hitos.png",
      video: "",
    },
    {
      title: "Alphazed website",
      href: "https://www.figma.com/proto/0pt6pbecBvyalfYPUoBrFl/Alphazed-website?page-id=0%3A1&node-id=1-22149&viewport=1575%2C-119%2C0.32&t=KRuMj7BzR6sFBzM9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A22149",
      dates: "2nd July 2024",
      active: true,
      description:
        "Design Training non-official website for alphazed, teaching arabic app using gamified learning.",
      technologies: ["Figma"],
      links: [
        {
          type: "Design",
          href: "https://www.figma.com/proto/0pt6pbecBvyalfYPUoBrFl/Alphazed-website?page-id=0%3A1&node-id=1-22149&viewport=1575%2C-119%2C0.32&t=KRuMj7BzR6sFBzM9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A22149",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/alphazed.png",
      video: "",
    },
    {
      title: "Tap4Speed Game assets",
      href: "https://play.google.com/store/apps/details?id=app.gamio.tap4speed",
      dates: "2024 Mar - May ",
      active: true,
      description:
        "Cooperated  with Gamio team to design 7 Races, and 30 new special Cars using adobe illustrator to be used later in Unity.",
      technologies: ["Adobe Illustrator"],
      links: [
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=app.gamio.tap4speed",
          icon: <Icons.googlePlay className="size-3" />,
        },
        {
          type: "Video",
          href: "https://youtu.be/R0Y_WzMF6YI",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Behance",
          href: "https://www.behance.net/gallery/216413443/Tap4Speed-Game-assets",
          icon: <Icons.behance className="size-3" />,
        },
      ],
      image: "",
      video: "/tap4speed.mp4",
    },
    {
      title: "NourNutri Website",
      href: "https://www.figma.com/design/fwJW7y3xOlT0N88liJh087/NourNutri?node-id=0-1&t=8NXzFXVri0KSuMLx-1",
      dates: "2024 Dec 20  - Dec 25 ",
      active: true,
      description: "",
      technologies: ["Figma"],
      links: [
        {
          type: "Design",
          href: "https://www.figma.com/design/fwJW7y3xOlT0N88liJh087/NourNutri?node-id=0-1&t=8NXzFXVri0KSuMLx-1",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/NourNutri.png",
      video: "",
    },
    {
      title: "Almountada Logo Design",
      href: "https://www.behance.net/gallery/215564797/Almountada-Logo-Design",
      dates: "2024 Mar - Apr ",
      active: true,
      description: "",
      technologies: ["Adobe Illustrator"],
      links: [
        {
          type: "Behance",
          href: "https://www.behance.net/gallery/215564797/Almountada-Logo-Design",
          icon: <Icons.behance className="size-3" />,
        },
      ],
      image: "/AlmountadaLogos.png",
      video: "",
    },
    {
      title: "Almountada Social Media Posts",
      href: "https://www.behance.net/gallery/218474345/Almountada-social-media-designs",
      dates: "2024 Mar - Apr ",
      active: true,
      description: "",
      technologies: ["Adobe Illustrator"],
      links: [
        {
          type: "Behance",
          href: "https://www.behance.net/gallery/218474345/Almountada-social-media-designs",
          icon: <Icons.behance className="size-3" />,
        },
      ],
      image: "/almountadaCover.png",
      video: "",
    },
    {
      title: "Ejet Elkahraba full project",
      href: "https://www.behance.net/gallery/218482151/Ejet-elkahraba-Project",
      dates: "2023 Nov - 2024 Apr",
      active: true,
      description: "",
      technologies: ["Adobe Illustrator"],
      links: [
        {
          type: "Behance",
          href: "https://www.behance.net/gallery/218482151/Ejet-elkahraba-Project",
          icon: <Icons.behance className="size-3" />,
        },
      ],
      image: "/ejetElkahraba.png",
      video: "",
    },
  ],
  testimonials: [
    {
      quote:
        "Majd Al Khalaf did an excellent job designing image assets for my game. He was creative, responsive, and fast, delivering high-quality work that exceeded my expectations. I highly recommend him for any design project.",
      name: "Baraa Halabi",
      designation: "Game Developer at Gamio",
      src: "/baraaHalabi.png",
    },
    {
      quote:
        "Majd was an exceptional team member. He was a quick learner and coder, UI/UX design innovative, consistently delivering user-friendly and visually appealing interfaces. His logical thinking and problem-solving abilities stood out, as did his collaborative nature and strong teamwork. I highly recommend him for any role.He was a valuable asset to our company and will undoubtedly excel in any future endeavor.",
      name: "Shareef Al Hussami",
      designation: "CEO At SR Software",
      src: "/SRsoftware.png",
    },
    {
      quote:
        "Majd embodies the Silicon Valley mindset—driven, fast-moving, and solution-oriented. His ability to grasp new ideas, quickly connect the dots, and execute efficiently is remarkable. With an inspiring thirst for knowledge, he is a truly resourceful and sharp-minded individual.",
      name: "Anas Merstani",
      designation: "Frontend Developer",
      src: "/anasMerstani.png",
    },
  ],
  hackathons: [
    {
      title: "Syria Hackthon",
      dates: "February 22rd - 28th, 2025",
      location: "Syria - Online",
      description:
        "Helped CoKids Team A gamified app to teach children programming to create solutions to Help Syria recover with our projects as UI/UX designer, Frontend developer.",
      image: "/startupSyria.png",
      mlh: "",
      links: [
        {
          title: "Syria Startup",
          href: "https://hack.startupsyria.org/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "CoKids",
          href: "https://www.facebook.com/cokids.edu",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
