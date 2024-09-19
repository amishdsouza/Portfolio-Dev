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
  const [selectedItem, setSelectedItem] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section, index) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top >= 0 && rect.bottom <= windowHeight) {
              setSelectedItem(index);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {portfolioProjects.map((project, index) => (
        <div
          key={project.title}
          className="flex min-h-screen transition-colors duration-1000"
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          style={{
            background: backgroundColors[index % backgroundColors.length],
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
                  className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </main>
        </div>
      ))}
    </div>
  );
};
