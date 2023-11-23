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
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  eslsca,
  hdm,
  uha,
  project_2,
  project_3,
  threejs,
  angular,
  java,
  SpringBoot,
  mysql,
  postgres,
  php,
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
  {
    id: "Resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "java",
    icon: java,
  },

  {
    name: "SpringBoot",
    icon: SpringBoot,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "postgres",
    icon: postgres,
  },

];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "University of Upper-Alsace",
    icon: uha,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Conceptualized and developed a Java-based web application",
      "Implemented a robust backend using Spring Boot, adhering to object-oriented programming principles.",
      "Integrated MySQL via ORM Hibernate and Spring JPA for efficient data handling.",
      "Developed a RESTful API with Firebase authentication, ensuring secure and seamless user interactions.",
      "Designed and implemented a dynamic user interface using Angular for an engaging user experience.",
      "Successfully deployed the backend, frontend, and database within Docker containers, streamlining the deployment process.",
      "Managed deployments effectively through SSH on servers, ensuring smooth operations.",
      "Conducted comprehensive unit tests using JUnit 5, upholding code quality and reliability.",
      "Actively collaborating with an agile team to enhance a web and mobile application.",
      "Utilizing Next.js, Nest.js, and PostgreSQL to enhance project efficiency.",
      "Resolving issues and maintaining rigorous documentation using Jira and Confluence.",
      "Developing an inventory and stock management system in collaboration with the Product Owner.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "HDM Network ASBL",
    icon: hdm,
    iconBg: "#E6DEDD",
    date: "Aut 2022 - Jul 2023",
    points: [
      "Contributed to multiple software projects simultaneously and participated in the whole software development process from software design to implementation and delivery.",
      "Encountered end users to study business methods, realize needs, and recommending technical answers.",
      "Studied and distributed help documents related to customization, designs, and reports.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ESLSCA DIGITAL AND DATA SCHOOL PARIS",
    icon: eslsca,
    iconBg: "#383E56",
    date: "Mar 2022 - Jun 2022",
    points: [
        "Led the full development life cycle of the \"Guess My Age\" web application, showcasing mastery in both front-end and back-end technologies.",
        "Designed and implemented an intuitive user interface, prioritizing aesthetics and usability.",
        "Optimized site responsiveness for a seamless and enjoyable user experience.",
        "Managed the user database for efficient data handling and personalized interactions.",
        "Conducted rigorous unit tests to ensure high-quality and reliable site functionality.",
        "Ensured secure deployment of the web application, implementing robust security measures.",
        "Established and maintained security protocols to safeguard user data, ensuring confidentiality and integrity.",
    ],
  },
  {
    title: "UI/UX designer",
    company_name: "ESLSCA DIGITAL AND DATA SCHOOL PARIS",
    icon: eslsca,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Mar 2022",
    points: [
      "Design and implement a mobile application to enhance the experience of new students at our school.",
      "Interactive campus guide with building floor plans.",
      "Information on school services and essential contacts.",
      "Events calendar and school newsletter integration.",
      "Chat application for interaction among new students and school personnel.",
      "Worked closely with a specialized design and UX team to ensure a seamless and user-friendly experience."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Highly recommend Hossni for his exceptional skills in architecting and developing robust web applications; his commitment to delivering quality code and innovative solutions is commendable.",
    name: "Pierre Schuller",
    designation: "Director",
    company: "University of Upper-Alsace",
  },
];

const projects = [
  /*{
    name: "Tangram Game",
    description:
      "Architected and developed Tangram Adventure, an engaging web-based puzzle game showcasing a seamless blend of creativity and logic, featuring diverse Tangram challenges and a robust tech stack including Angular and Java.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "pink-text-gradient",
      },
    ],
    image:,
    source_code_link: "https://github.com/HossniBenHasen/Tangram_Game",
  },*/
  {
    name: "Angular/Spring security auth service",
    description:
      "Testing grounds for future reference. User can register to service, and depending on the role can check different content.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "pink-text-gradient",
      },
    ],
    image: project_2,
    source_code_link: "https://github.com/HossniBenHasen/angular-spring-register-login",
  },
  {
    name: "HOSSNI.BEN.HASSEN DEV",
    description:
        "Personal portfolio template built with React & Three.js using TailwindCSS",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: project_3,
    source_code_link: "https://github.com/HossniBenHasen/Hossni.benhassen.dev",
  },

];

export { services, technologies, experiences, testimonials, projects };
