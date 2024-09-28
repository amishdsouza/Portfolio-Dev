"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/arrow-right.svg";
import { CertificationList } from "@/data/constants"; // Ensure this imports the updated list
import { Card } from "@/components/Card"; // Ensure this component is correctly defined

export const Certification = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>(
    new Array(CertificationList.length).fill(null)
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();

          // Check if the section is within the viewport
          if (rect.top >= 0 && rect.bottom <= windowHeight) {
            setSelectedItem(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="pb-16 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="mt-10 md:mt-20 flex flex-col gap-12">
          {CertificationList.map((content, index) => (
            <Card
              key={content.title}
              className={`px-10 py-8 md:py-10 lg:py-12 lg:px-16 sticky transition-all duration-300 rounded-lg shadow-lg transform ${
                selectedItem === index ? "bg-blue-100" : "bg-white"
              }`}
              style={{
                top: `calc(64px + ${index * 40}px)`, // Adjust position as needed
              }}
              ref={(el) => {
                sectionsRef.current[index] = el; // Assigning ref to each section
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="lg:pb-8">
                  <div className="text-gray-700 inline-flex font-bold uppercase tracking-widest text-base">
                    <span>{content.institution}</span>
                    <span className="mx-2"> &bull; </span>{" "}
                    {/* Added spacing between institution and platform */}
                    <span>{content.platform}</span>
                  </div>

                  <h3 className="lg:text-3xl mt-2 md:text-5xl md:mt-5 text-blue-800 font-semibold">
                    {content.title}
                  </h3>

                  <hr className="border-t-2 border-gray-300 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4">
                    <li className="flex gap-2 text-base text-gray-600 md:text-lg md:mt-5">
                      <span className="font-medium text-gray-800">
                        Technology:
                      </span>
                      {content.technology}
                    </li>

                    {content.instructor && (
                      <li className="flex gap-2 text-base text-gray-600 md:text-lg md:mt-5">
                        <span className="font-medium text-gray-800">
                          Instructor:
                        </span>
                        {content.instructor}
                      </li>
                    )}
                  </ul>

                  {content.link && (
                    <a
                      href={content.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-blue-600 text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6 transition-transform transform hover:scale-105">
                        <span>View Certificate</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  )}
                </div>

                <div className="relative">
                  {content.image ? (
                    <Image
                      src={content.image}
                      alt={content.title}
                      width={600}
                      height={400}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      loading="lazy" // Lazy load for performance
                    />
                  ) : (
                    <div className="mt-8 h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Image Not Available</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
