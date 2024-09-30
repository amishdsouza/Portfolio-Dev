import { useState, useEffect, useRef } from "react";
import { portfolioProjects } from "@/data/constants";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";

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
    <div className="flex flex-col transition-colors duration-500">
      <SectionHeader eyebrow="Projects" title="" description="" />
      {portfolioProjects.map((project, index) => (
        <div
          key={project.company} // Use company as key
          className="flex"
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
        >
          <main className="flex-grow flex flex-col items-center justify-center p-12">
            <div
              className="flex flex-row items-center mx-auto space-x-20 bg-white rounded-lg p-10 shadow-2xl min-h-[740px] transition-opacity duration-700 ease-in-out"
              style={{
                background: backgroundColors[index % backgroundColors.length],
                opacity: activeIndex === index ? 1 : 0,
                transform:
                  activeIndex === index ? "translateY(0)" : "translateY(20px)", // Slight translation for smoother entry
              }}
            >
              <div className="w-1/2 rounded-lg p-8 transition-opacity duration-700 ease-in-out">
                <p className="text-4xl text-gray-700 font-semibold mb-6">
                  {project.company}
                </p>
                <p className="text-2xl text-gray-700 font-semibold mb-6">
                  {project.year}
                </p>
                <div className="text-lg space-y-4">
                  {project.results.map((result, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 font-medium leading-relaxed"
                    >
                      {result}
                    </p>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-10 md:w-auto md:px-8">
                      <span>Visit Live Site</span>
                    </button>
                  </a>
                )}
              </div>

              {/* Scroll-based image animation */}
              <div className="w-1/2 transition-all duration-700 ease-in-out">
                <Image
                  src={project.image}
                  alt={project.company} // Changed alt text to company
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index ? "scale(1)" : "scale(0.95)",
                    transition:
                      "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)", // Custom easing
                  }}
                />
              </div>
            </div>
          </main>
        </div>
      ))}
    </div>
  );
};
