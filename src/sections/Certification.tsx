"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/arrow-right.svg";
import { CertificationList } from "@/data/constants";
import { Card } from "@/components/Card";

export const Certification = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
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
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {CertificationList.map((content, index) => (
            <Card
              key={content.title}
              className={`px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky transition-all duration-300 ${
                selectedItem === index ? "shadow-lg bg-white" : "bg-transparent"
              }`}
              style={{
                top: `calc(64px + ${index * 40}px)`, // Adjust as necessary
              }}
              ref={(el) => {
                sectionsRef.current[index] = el;
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="text-white inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{content.institution || "Personal Project"}</span>
                    <span> &bull; </span>
                    <span>{content.platform}</span>
                  </div>

                  <h3 className="lg:text-2xl mt-2 md:text-4xl md:mt-5 text-black">
                    {content.title}
                  </h3>

                  <hr className="border-t-2 border-black/25 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4">
                    <li className="flex gap-2 text-sm text-white/70 md:text-base md:mt-5">
                      <span className="font-medium text-gray-500">
                        Technology:
                      </span>
                      {content.technology}
                    </li>

                    {content.instructor && (
                      <li className="flex gap-2 text-sm text-white/70 md:text-base md:mt-5">
                        <span className="font-medium text-gray-500">
                          Instructor:
                        </span>
                        {content.instructor}
                      </li>
                    )}
                  </ul>

                  {content.imageUrl && (
                    <a
                      href={content.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                        <span>View Certificate</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  )}
                </div>
                <div className="relative">
                  {content.imageUrl && (
                    <Image
                      src={content.imageUrl}
                      alt={content.title}
                      width={600}
                      height={400}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
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
