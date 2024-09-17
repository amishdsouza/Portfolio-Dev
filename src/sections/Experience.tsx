"use client";

import { SectionHeader } from "@/components/SectionHeader";

import { workExperiences } from "@/data/constants";

import { useEffect, useState, useRef } from "react";

export const Experience = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        // Calculate scroll position as a percentage of the total container height

        const scrollPercentage =
          ((windowHeight - top) / (height + windowHeight)) * 100;

        setScrollPosition(scrollPercentage);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="py-20 px-10 lg:py-28 lg:px-40">
      <div className="space-y-8">
        {workExperiences.map((experience, index) => {
          // Define background colors for each experience

          const backgroundColor = [
            "#E7EBFD", // Light blue

            "#FDE9D9", // Light peach

            "#FFFF7F", // Light yellow
          ][index % 3];

          return (
            <div
              key={experience.id}
              className="relative rounded-xl flex transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              {/* Left section: Position, Company */}

              <div
                className="w-1/2 p-6 rounded-l-xl flex flex-col justify-center relative overflow-hidden"
                style={{
                  backgroundColor: backgroundColor, // Apply the same background color

                  transform: `translateX(${Math.max(
                    100 - scrollPosition * 2,
                    0
                  )}%)`,

                  opacity: `${Math.min(scrollPosition / (index + 1), 1)}`,

                  transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
                }}
              >
                <div className="text-lg font-semibold text-black opacity-80">
                  {experience.duration}
                </div>

                <div className="text-2xl font-bold text-black mt-2">
                  {experience.pos}
                </div>

                <div className="text-sm text-gray-300 mt-1 opacity-70">
                  {experience.company}
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-r from-[backgroundColor] to-white opacity-50"
                  style={{
                    backgroundColor: backgroundColor,
                  }}
                ></div>
              </div>

              {/* Right section: Description, Responsibility */}

              <div
                className="w-1/2 text-black p-6 relative overflow-hidden rounded-r-xl"
                style={{
                  backgroundColor: backgroundColor, // Apply the same background color
                }}
              >
                <p className="text-black">{experience.description}</p>

                <p className="mt-4 text-black">{experience.responsibility}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
