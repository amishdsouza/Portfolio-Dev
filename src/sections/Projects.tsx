//projectImages
import GuessNumber from "@/assets/Projects/GuessNumber.png";
import DiceGame from "@/assets/Projects/DiceGame.png";
import MapMiles from "@/assets/Projects/MapMiles.png";
import EHU from "@/assets/Projects/EHU_CX.jpg";
import JBart from "@/assets/Projects/Jbart.jpg";
import Intertek from "@/assets/Projects/intertek.jpg";

import Image from "next/image";
import ArrowUpRightIcon from "@/assets/arrow-right.svg";
import CheckIcon from "@/assets/check.svg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Edge Hill University",
    year: "2022",
    title: "Student Admission Portal",
    results: [
      { title: "Enhanced user engagement by 30%" },
      { title: "Improved algorithm efficiency by 20%" },
      { title: "Reduced bounce rate by 15%" },
    ],
    link: "https://edgehillacuktest.elluciancrmrecruit.com/Apply/",
    image: EHU,
  },
  {
    company: "Edge Hill University",
    year: "2022",
    title: "Jbart",
    results: [
      { title: "Enhanced user engagement by 30%" },
      { title: "Improved algorithm efficiency by 20%" },
      { title: "Reduced bounce rate by 15%" },
    ],
    link: "",
    image: JBart,
  },
  {
    company: "Novigo Solutions",
    year: "2022",
    title: "Intertek Project",
    results: [
      { title: "Enhanced user engagement by 30%" },
      { title: "Improved algorithm efficiency by 20%" },
      { title: "Reduced bounce rate by 15%" },
    ],
    link: "https://www.intertek.com/about/",
    image: Intertek,
  },
  {
    company: "Acme Corp",
    year: "2022",
    title: "Guess the Number Game",
    results: [
      { title: "Enhanced user engagement by 30%" },
      { title: "Improved algorithm efficiency by 20%" },
      { title: "Reduced bounce rate by 15%" },
    ],
    link: "https://example.com/guess-number-game",
    image: GuessNumber,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Dice Rolling Game",
    results: [
      { title: "Boosted user retention by 25%" },
      { title: "Increased gameplay sessions by 40%" },
      { title: "Expanded feature set with multiplayer mode" },
    ],
    link: "https://example.com/dice-rolling-game",
    image: DiceGame,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "Map Miles Tracker",
    results: [
      { title: "Enhanced mapping accuracy by 45%" },
      { title: "Integrated new geolocation features" },
      { title: "Improved user interface and experience" },
    ],
    link: "https://example.com/map-miles-tracker",
    image: MapMiles,
  },
];

export const Projects = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="mt-10 md:mt-20 flex flex-col  gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10  lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span> &bull; </span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm text-white/50 md:text-base md:mt-5">
                        <CheckIcon className="size-5 md:size-6" />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6 ">
                      <span>Visit Live Site </span>
                      <ArrowUpRightIcon className="size-4 " />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
