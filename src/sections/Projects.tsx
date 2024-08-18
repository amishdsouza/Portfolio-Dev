import GuessNumber from "@/assets/Projects/GuessNumber.png";
import DiceGame from "@/assets/Projects/DiceGame.png";
import MapMiles from "@/assets/Projects/MapMiles.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/arrow-right.svg";
import CheckIcon from "@/assets/check.svg";
import GrainImage from "@/assets/grain.jpg";

const portfolioProjects = [
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
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            real world results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured
        </h2>
        <p className="text-center md:text-lg text-black/60 mt-4 max-w-md mx-auto lg:text-xl">
          BIG BIG TEXT HERE GOES HREER REREER
        </p>
        <div className="mt-10 md:mt-20 flex flex-col  gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8  md:pt-12 md:px-10 after:pointer-events-none lg:pt-16 lg:px-20"
            >
              <div
                className="absolute inset-0 -z-10  opacity-10"
                style={{ backgroundImage: `url(${GrainImage.src})` }}
              ></div>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
