"use client";

import { useState, useEffect, useRef } from "react";

import { CertificationList } from "@/data/constants";

// Define the type for certification items

type CertificationItem = {
  title: string;
  technology: string;
  institution?: string;
  instructor?: string;
  platform: string;
  imageUrl: string;
};

export const Certification = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  // Updated sectionsRef type to handle 'HTMLDivElement | null'

  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]); // Refs for each section

  useEffect(() => {
    const handleScroll = () => {
      if (sectionsRef.current) {
        // Loop through sections and determine which is fully visible

        sectionsRef.current.forEach((section, index) => {
          if (section) {
            const rect = section.getBoundingClientRect();

            const windowHeight = window.innerHeight;

            // Check if the section is fully within the viewport

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
      {CertificationList.map((content, index) => (
        <div
          key={content.title}
          className="flex min-h-screen transition-colors duration-1000"
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          style={{
            background: index % 2 === 0 ? "#E0F7FA" : "#FFE0B2", // Alternate background colors
          }}
        >
          <main className="flex-grow flex flex-col items-center justify-center p-8">
            {/* Content in a row (text on the left, image on the right) */}

            <div className="flex flex-row items-center w-full max-w-6xl mx-auto space-x-16">
              {/* Text section */}

              <div className="w-1/2">
                <h2 className="text-6xl font-bold mb-6 text-gray-900 leading-tight">
                  {content.title}
                </h2>

                <p className="text-2xl text-gray-700 font-semibold mb-4">
                  {content.technology}
                </p>

                <div className="text-lg space-y-3">
                  {content.institution && (
                    <p className="text-gray-700 font-medium">
                      <span className="text-gray-500">Institution: </span>

                      {content.institution}
                    </p>
                  )}

                  {content.instructor && (
                    <p className="text-gray-700 font-medium">
                      <span className="text-gray-500">Instructor: </span>

                      {content.instructor}
                    </p>
                  )}

                  <p className="text-gray-700 font-medium">
                    <span className="text-gray-500">Platform: </span>

                    {content.platform}
                  </p>
                </div>
              </div>

              {/* Image section */}

              <div className="w-1/2">
                <img
                  src={content.imageUrl}
                  alt={content.title}
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
