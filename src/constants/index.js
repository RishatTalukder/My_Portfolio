import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pythonista,
  ml,
  django,
  sklearn,
  tensor,
  keras,
  post,
  easy,
  lafalafi,
  MLP,
  dipto
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Django Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "2d Game Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: web,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: pythonista,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "Scikit-Learn",
    icon: sklearn,
  },
  {
    name: "TensorFlow",
    icon: tensor,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "postgresql",
    icon: post
  }

];

const experiences = [
  {
    title: "Pythonista",
    company_name: "",
    icon: pythonista,
    iconBg: "#383E56",
    date: "March 2020 - present",
    points: [
      "Python is my first programming language. I have been using it for 3 years.",
      "I have developed many projects with python.",
      "And I have also participated in many competitions with python.",
      "I know many python libraries like numpy, pandas, matplotlib, seaborn, scikit-learn, tensorflow, keras, etc.",
      "As I aim to be an AI engineer, I am learning many AI libraries like tensorflow, keras, pytorch, etc.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2022 - present",
    points: [
      "React.js is my favorite frontend framework.",
      "It goes very well with Django.",
      "I have made projects professionally with React.js and Django.",
      "Even this portfolio is made with React.js/Three.js",
      "I hope to make Versitile and Beautiful websites with React.js",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Machine Learning Engineer",
    company_name: "",
    icon: ml,
    iconBg: "#383E56",
    date: "Jan 2022 - present",
    points: [
      "This is the era of AI.",
      "I have been learning Machine Learning concepts and applying them to real-world problems.",
      "I have made some small projects with ML.",
      "As I aim to be an AI engineer, I started from the basics of ML.",
      "And I'll keep learning and I hope to use my skills in a professional environment.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "",
    icon: django,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Even though I want to be an AI engineer, I started my journey with Django.",
      "Djnago is a very powerful backend framework.",
      "Almost all of my projects are made with fully with django or they use django as backend.",
      "I have a vision to make a framework that will marge django and react.js togather to make a powerful fullstack framework.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mr. Rishat excels in Python, Django, and React, creating effective websites. With a strong interest in machine learning and a passion for continuous learning, he is a smart choice for those seeking a dedicated learner.",
    name: "Debashish Dey",
    designation: "Blockchain Engineer",
    company: "DEEPCHAIN LABS",
    image: dipto,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "LafaLafi",
    description:
      "Lafalafi is a clone of the famous Chrome Dino game. Built With Python and Pygame. This game is made for fun and to learn pygame.",
    
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: lafalafi,
    source_code_link: "https://github.com/RishatTalukder/pygame-hub",
  },
  {
    name: "EASY BUY",
    description:
      "An web application that helps you to buy and sell products. It is made with Django and React.js. It is a fullstack application. It has many features like authentication, authorization, payment system, Search and filter, etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "Postgresql",
        color: "green-text-gradient",
      },
      
    ],
    image: easy,
    source_code_link: "https://github.com/RishatTalukder/Django_react",
  },
  {
    name: "Small ML Projects",
    description:
      "A collection of small ML projects. These projects use different ML libraries like sklearn, tensorflow, keras, etc. And every project is based on different ML concepts.",
    tags: [
      {
        name: "Sklearn",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: MLP,
    source_code_link: "https://github.com/RishatTalukder/learning_machine_learning",
  },
];

export { services, technologies, experiences, testimonials, projects };
