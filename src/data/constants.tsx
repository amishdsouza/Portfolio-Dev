import Company1Logo from "@/assets/star.png";

import ANGULAR from "@/assets/Icons/angular.svg";
import BOOTSTRAP from "@/assets/Icons/bootstrap.svg";
import CLOUDFLARE from "@/assets/Icons/cloudflare.svg";
import CSS from "@/assets/Icons/css3.svg";
import FIGMA from "@/assets/Icons/figma.svg";
import GitHub from "@/assets/Icons/github.svg";
import GitLab from "@/assets/Icons/gitlab.svg";
import HTML from "@/assets/Icons/html5.svg";
import Java from "@/assets/Icons/java.svg";
import JS from "@/assets/Icons/js.svg";
import MongoDB from "@/assets/Icons/mongodb.svg";
import MySQL from "@/assets/Icons/mysql.svg";
import NextJS from "@/assets/Icons/next.svg";
import NodeJS from "@/assets/Icons/nodejs.svg";
import NPM from "@/assets/Icons/npm.svg";
import PHP from "@/assets/Icons/php.svg";
import Postman from "@/assets/Icons/postman.svg";
import Python from "@/assets/Icons/python.svg";
import React from "@/assets/Icons/react.svg";
import Tailwind from "@/assets/Icons/tailwind.svg";
import Webpack from "@/assets/Icons/webpack.svg";
import Wordpress from "@/assets/Icons/wordpress.svg";
import MICROSOFT from "@/assets/Icons/microsoft.svg";
import DotNet from "@/assets/Icons/dotnet.svg";

export const iconItemsPart1 = [
  { title: "HTML", iconType: HTML, alt: "HTML Logo" },
  { title: "CSS", iconType: CSS, alt: "CSS Logo" },
  { title: "JavaScript", iconType: JS, alt: "JavaScript Logo" },
  { title: "React", iconType: React, alt: "React Logo" },
  { title: "NextJS", iconType: NextJS, alt: "NextJS Logo" },
  { title: "Tailwind", iconType: Tailwind, alt: "Tailwind Logo" },
  { title: "Bootstrap", iconType: BOOTSTRAP, alt: "Bootstrap Logo" },
];

export const iconItemsPart2 = [
  { title: "Angular", iconType: ANGULAR, alt: "Angular Logo" },
  { title: "Figma", iconType: FIGMA, alt: "Figma Logo" },
  { title: "GitHub", iconType: GitHub, alt: "GitHub Logo" },
  { title: "GitLab", iconType: GitLab, alt: "GitLab Logo" },
  { title: "MongoDB", iconType: MongoDB, alt: "MongoDB Logo" },
  { title: "MySQL", iconType: MySQL, alt: "MySQL Logo" },
  { title: "NodeJS", iconType: NodeJS, alt: "NodeJS Logo" },
  { title: "Java", iconType: Java, alt: "Java Logo" },
];

export const iconItemsPart3 = [
  { title: "Python", iconType: Python, alt: "Python Logo" },
  { title: "PHP", iconType: PHP, alt: "PHP Logo" },
  { title: "Cloudflare", iconType: CLOUDFLARE, alt: "Cloudflare Logo" },
  { title: "NPM", iconType: NPM, alt: "NPM Logo" },
  { title: "Postman", iconType: Postman, alt: "Postman Logo" },
  { title: "Webpack", iconType: Webpack, alt: "Webpack Logo" },
  { title: "WordPress", iconType: Wordpress, alt: "WordPress Logo" },
  { title: ".Net Core", iconType: DotNet, alt: "DotNet Logo" },
  { title: "Microsoft Dynamics", iconType: MICROSOFT, alt: "Microsoft Logo" },
];

export const hobbies = [
  { title: "Gaming", emoji: "🎮", left: "5%", top: "5%" },
  { title: "DJ", emoji: "🎧", left: "50%", top: "5%" },
  { title: "Hiking", emoji: "🌄", left: "10%", top: "35%" },
  { title: "Driving", emoji: "🚗", left: "50%", top: "35%" },
  { title: "Photography", emoji: "📸", left: "15%", top: "65%" },
];

export const EducationData = [
  {
    title: "MSc - Master of Science in Computing",
    institution: "Edge Hill University, Ormskirk, United Kingdom",
    date: "2022 - 2023",
    points: ["Nailed the Master's in Computing with a Distinction."],
    icon: Company1Logo,
    iconBg: "#232631",
  },
  {
    title: "MCA - Master of Computer Applications",
    institution: "St. Aloysius College, Mangalore, India",
    date: "2019 - 2022", // Replace "Fix date" with actual dates
    points: ["Awarded 'The Best Student of the MCA.'"],
    icon: Company1Logo,
    iconBg: "#232631",
  },
  {
    title: "BCA - Bachelor of Computer Applications",
    institution: "St. Aloysius College, Mangalore, India",
    date: "2016 - 2019",
    points: [
      "Embarked on my tech adventure during BCA, learning to talk the code talk.",
    ],
    icon: Company1Logo,
    iconBg: "#232631",
  },
  {
    title: "PCMC - Physics, Chemistry, Mathematics, Science",
    institution: "Padua College of Commerce and Management, Mangalore, India",
    date: "2014 - 2016",
    points: [
      "Embraced software and web development, veering away from science experiments.",
    ],
    icon: Company1Logo,
    iconBg: "#232631",
  },
  {
    title: "10th Grade",
    institution: "Vidya Jyothi High School, Mangalore, India",
    date: "2014",
    points: ["Had a blast while cruising through the basic schooling."],
    icon: Company1Logo,
    iconBg: "#232631",
  },
];

export const workExperiences = [
  {
    id: 1,
    company: "Edge Hill University, Ormskirk, United Kingdom",
    pos: "Software Engineer",
    duration: "Feb 2023 - Present",
    title:
      "Leading the design, development, and ongoing maintenance of a diverse portfolio of projects, demonstrating expertise in JavaScript, Python, .NET, and seamless API integration. This endeavor has consistently yielded optimized performance and elevated user experiences. Employing a wide array of technologies and tools, I custom-tailor solutions to precisely meet project requirements, ensuring a harmonious blend of innovation and functionality.",
    technologiesUsed: [
      "HTML",
      "CSS",
      "Bootstrap",
      ".NET Core",
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "SQL",
    ],
    tools: ["PsychoPy", "Visual Studio", "Postman", "VS Code"],
    responsibility:
      "Spearheading the development of projects including JBART, Board Games, and Portfolio Website",
  },
  {
    id: 2,
    company: "Novigo Solutions, Mangalore, India",
    pos: "Software Engineer",
    duration: "2020 - 2022",
    title:
      "Streamlining and automating cargo weighing calculations, enhancing quality control, and improving efficiency by eliminating calculation errors by replacing manual techniques with a comprehensive system that provides easier client and ship management, field-level locking for real-time data updating during surveys, and an audit log for complete job history. It involved developing a mobile application for the Surveyors, and a website application for Master Mariner.",
    technologiesUsed: [
      "HTML",
      "CSS",
      "Bootstrap",
      ".NET Core",
      "Entity Framework Core",
      "Angular Framework",
      "LINQ SQL",
    ],
    tools: ["Visual Studio", "Postman", "SQL Database Management"],
    responsibility:
      "Developed proficiency in Entity Framework Core and demonstrated expertise in utilizing web APIs, contributing to the successful completion of multiple .NET projects. Developed and tested web APIs using Postman, successfully implementing JWT tokens for authorization purposes in web API calls. Implementing CRUD functionality for the application, and AppContext for user settings.",
  },
  {
    id: 3,
    company: "Glowtouch Technologies, Mangalore, India",
    pos: "Junior Administrator",
    duration: "Apr 2019 - Nov 2020",
    title:
      "The role involved delivering round-the-clock assistance to users navigating web hosting services. The position required proficiency in various support channels, including live chat, phone, and email from customers all around the world.",
    technologiesUsed: [
      "HTML",
      "CSS",
      "Bootstrap",
      ".NET Core",
      "Entity Framework Core",
      "Angular Framework",
      "LINQ SQL",
    ],
    tools: ["Visual Studio", "Postman", "SQL Database Management"],
    responsibility:
      "Encompassed addressing technical challenges related to website setup developed with different platforms, and server configurations, with a focus on providing clear and step-by-step guidance.",
  },
];

export const CertificationList = [
  {
    technology: "JavaScript",
    title: "The Complete JavaScript Course 2022: From Zero To Expert!",
    instructor: "Jonas Schmedtman",
    platform: "Udemy",
    imageUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-04fe2cd0-19ae-4eca-83e0-c2f57c17b930.jpg",
  },
  {
    technology: "Bootstrap",
    title: "Front End Web UI Frameworks and Tools",
    institution: "The Hong Kong University of Science and Technology",
    platform: "Coursera",
    imageUrl:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~23LCY8477QKS/CERTIFICATE_LANDING_PAGE~23LCY8477QKS.jpeg",
  },
  {
    technology: "Java",
    title: "Java Programming - Complete Beginner to Advanced",
    institution: "CodeIn Academy",
    platform: "Udemy",
    imageUrl:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-b6fd28ce-899d-4b15-8ebb-94eac96de87e.pdf",
  },
  {
    technology: "Android",
    title: "Android Application Development",
    institution: "EdYoda Digital University",
    platform: "Udemy",
    imageUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-04fe2cd0-19ae-4eca-83e0-c2f57c17b930.jpg",
  },
  {
    technology: "Machine Learning",
    title: "Basics of Machine Learning",
    institution: "Great Learning Academy",
    platform: "Great Learning",
    imageUrl:
      "https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/472352/original/Amish_Dickson_Dsouza20211007-9816-fmyxu4.jpg",
  },
];
