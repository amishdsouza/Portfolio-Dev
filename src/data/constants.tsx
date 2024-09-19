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

// Frontend Technologies
export const frontendIcons = [
  { title: "HTML", iconType: HTML, alt: "HTML Logo" },
  { title: "CSS", iconType: CSS, alt: "CSS Logo" },
  { title: "JavaScript", iconType: JS, alt: "JavaScript Logo" },
  { title: "React", iconType: React, alt: "React Logo" },
  { title: "NextJS", iconType: NextJS, alt: "NextJS Logo" },
  { title: "Tailwind", iconType: Tailwind, alt: "Tailwind Logo" },
  { title: "Bootstrap", iconType: BOOTSTRAP, alt: "Bootstrap Logo" },
  { title: "Angular", iconType: ANGULAR, alt: "Angular Logo" },
  { title: "Figma", iconType: FIGMA, alt: "Figma Logo" },
];

// Backend Technologies
export const backendIcons = [
  { title: "Java", iconType: Java, alt: "Java Logo" },
  { title: "Python", iconType: Python, alt: "Python Logo" },
  { title: "PHP", iconType: PHP, alt: "PHP Logo" },
  { title: "MongoDB", iconType: MongoDB, alt: "MongoDB Logo" },
  { title: "MySQL", iconType: MySQL, alt: "MySQL Logo" },
  { title: "NodeJS", iconType: NodeJS, alt: "NodeJS Logo" },
  { title: "Cloudflare", iconType: CLOUDFLARE, alt: "Cloudflare Logo" },
  { title: ".Net Core", iconType: DotNet, alt: ".Net Core Logo" },
  { title: "Microsoft Dynamics", iconType: MICROSOFT, alt: "Microsoft Logo" },
];

// Version Control & Tools
export const toolsIcons = [
  { title: "GitHub", iconType: GitHub, alt: "GitHub Logo" },
  { title: "GitLab", iconType: GitLab, alt: "GitLab Logo" },
  { title: "NPM", iconType: NPM, alt: "NPM Logo" },
  { title: "Postman", iconType: Postman, alt: "Postman Logo" },
  { title: "Webpack", iconType: Webpack, alt: "Webpack Logo" },
  { title: "WordPress", iconType: Wordpress, alt: "WordPress Logo" },
];

export const hobbies = [
  { title: "Gaming", emoji: "🎮", left: "5%", top: "5%" },
  { title: "DJ", emoji: "🎧", left: "50%", top: "5%" },
  { title: "Hiking", emoji: "🌄", left: "10%", top: "35%" },
  { title: "Driving", emoji: "🚗", left: "50%", top: "35%" },
  { title: "Photography", emoji: "📸", left: "25%", top: "20%" },
];

export const EducationData = [
  {
    title: "MSc - Master of Science in Computing",
    institution: "Edge Hill University, Ormskirk, United Kingdom",
    date: "2022 - 2023",
    points: ["Nailed the Master's in Computing with a Distinction."],
  },
  {
    title: "MCA - Master of Computer Applications",
    institution: "St. Aloysius College, Mangalore, India",
    date: "2019 - 2022", // Replace "Fix date" with actual dates
    points: ["Awarded 'The Best Student of the MCA.'"],
  },
  {
    title: "BCA - Bachelor of Computer Applications",
    institution: "St. Aloysius College, Mangalore, India",
    date: "2016 - 2019",
    points: [
      "Embarked on my tech adventure during BCA, learning to talk the code talk.",
    ],
  },
  {
    title: "PCMC - Physics, Chemistry, Mathematics, Science",
    institution: "Padua College of Commerce and Management, Mangalore, India",
    date: "2014 - 2016",
    points: [
      "Embraced software and web development, veering away from science experiments.",
    ],
  },
  {
    title: "10th Grade",
    institution: "Vidya Jyothi High School, Mangalore, India",
    date: "2014",
    points: ["Had a blast while cruising through the basic schooling."],
  },
];

export const workExperiences = [
  {
    id: 1,
    company: "Edge Hill University, Ormskirk, United Kingdom",
    pos: "Software Developer",
    duration: "Apr 2024 - Present",
    description:
      "Revamped a student record system using MS Dynamics, AWS buckets, and cutting-edge technologies to build a modern solution. Designed a user-friendly interface with React.js, integrated data management with FetchXML and GraphQL, and created robust data pipelines for seamless data flow. Utilized AWS buckets for secure data storage and real-time synchronization, ensuring accurate and accessible student records.",
  },
  {
    id: 2,
    company: "Edge Hill University, Ormskirk, United Kingdom",
    pos: "Software Engineer",
    duration: "Feb 2023 - Jan 2024",
    description:
      "Lead the design, development, and implementation of diverse set of projects, demonstrating expertise in JavaScript, React, Next.js, Python and API integration. Employing a wide array of technologies and tools, I custom-tailor solutions to precisely meet project requirements, ensuring a harmonious blend of innovation and functionality.",
  },
  {
    id: 3,
    company: "Novigo Solutions, Mangalore, India",
    pos: "Software Engineer",
    duration: "Feb 2022 - Jul 2022",
    description:
      "Developed game-changing software for a global leader in cargo transport, turning cargo weighing into a smooth, error-free process. Enhanced quality control and efficiency with automation and cutting-edge tech. Data flowed seamlessly with .NET Core 3.1 and Entity Framework Core, SignalR provided live updates, and IdentityServer kept security tight—all while thriving in an Agile environment with daily Scrums and weekly project powwows.",
  },
  {
    id: 4,
    company: "Glowtouch Technologies, Mangalore, India",
    pos: "Web Hosting Associate",
    duration: "Apr 2019 - Nov 2020",
    description:
      "Built a range of stunning websites using PHP, JavaScript, WordPress, WooCommerce, or Weebly, ensuring they shined online and soared in search rankings with smart SEO strategies. Once the design magic was complete, handled domain registration and set up websites and emails on either Linux or Windows servers.",
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
