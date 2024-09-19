import { useState, useEffect, useRef } from "react";
import { portfolioProjects } from "@/data/constants";
import Image from "next/image";

const backgroundColors = [
  "#EDE7F6", // Light Lavender
  "#FFF9C4", // Light Yellow
  "#FFEBEE", // Light Pink
  "#E8F5E9", // Light Mint
  "#FFCDD2", // Light Peach
  "#C8E6C9", // Light Green
];

export const Projects = () => {
  const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionsRef.current.length) {
        const windowHeight = window.innerHeight;

        sectionsRef.current.forEach((section, index) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            const sectionMidPoint = rect.top + rect.height / 2;

            // If the section's midpoint crosses the screen's midpoint, update the background color
            if (
              sectionMidPoint >= windowHeight / 2 &&
              sectionMidPoint <= windowHeight
            ) {
              if (activeIndex !== index) {
                setActiveIndex(index);
                setBackgroundColor(
                  backgroundColors[index % backgroundColors.length]
                );
              }
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-500"
      style={{ background: backgroundColor }}
    >
      {portfolioProjects.map((project, index) => (
        <div
          key={project.title}
          className="flex min-h-screen"
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
        >
          <main className="flex-grow flex flex-col items-center justify-center p-8">
            <div className="flex flex-row items-center w-full max-w-6xl mx-auto space-x-16">
              <div className="w-1/2">
                <h2 className="text-6xl font-bold mb-6 text-gray-900 leading-tight">
                  {project.title}
                </h2>

                <p className="text-2xl text-gray-700 font-semibold mb-4">
                  {project.company} • {project.year}
                </p>

                <div className="text-lg space-y-3">
                  {project.results.map((result, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">
                      <span className="text-gray-500">• </span>
                      {result.title}
                    </p>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                      <span>Visit Live Site</span>
                    </button>
                  </a>
                )}
              </div>

              <div className="w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[70vh] object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-125"
                />
              </div>
            </div>
          </main>
        </div>
      ))}
    </div>
  );
};
