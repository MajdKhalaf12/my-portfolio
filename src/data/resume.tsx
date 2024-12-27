import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Majd Al-Khalaf",
  initials: "MK",
  url: "https://my-portfolio-kappa-kohl-91.vercel.app/",
  location: "Damascus Syria",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Frontend Developer and Computer Science Student. I love Cyber Security and helping people.",
  summary:
    "I am a Computer Science student at [Damascus University](#education) with a passion for blending creativity and technology. With experience in front-end development and graphic design, I specialize in React.js, UI design, and motion graphics, having worked on impactful projects for brands like Ejet Alkaharaba and Cialdini Arabia. Currently, I am focused on advancing my skills in Laravel and Flutter while exploring the integration of AI with cybersecurity to develop smarter, more secure solutions.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4E03AQFSsWwQeXRuGw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683307106184?e=1740009600&v=beta&t=FpHu9PJbmjtNEPrvr53P089D2pRtRTdD4rcoDP9b9Ew",
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
      start: "AUG 2024",
      end: "Present",
      description: "",
    },
    {
      company: "OTOM8",
      href: "https://www.linkedin.com/company/sr-software-2020/",
      badges: [],
      location: "Remote",
      title: "Graphic Designer, UI/UX",
      logoUrl: "",
      start: "OCT 2023",
      end: "MAY 2024",
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
      start: "JAN 2023",
      end: "MAR 2023",
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
      dates: "SEP 2024 - OCT 2024",
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
      title: "T4 Speed Game assets",
      href: "https://play.google.com/store/apps/details?id=app.gamio.tap4speed",
      dates: "Mar 3  - May 25 ",
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
      ],
      image: "",
      video: "/tap4speed.mp4",
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
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
