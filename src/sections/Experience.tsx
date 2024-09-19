import { useEffect, useState, useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { workExperiences } from "@/data/constants";

export const Experience = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [totalExperience, setTotalExperience] = useState("0 years 0 months");

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateTotalExperience = () => {
      const now = new Date();
      let totalMonths = 0;

      workExperiences.forEach((experience) => {
        const [startDateStr, endDateStr] = experience.duration.split(" - ");
        const [startMonth, startYear] = startDateStr.split(" ");
        const [endMonth, endYear] =
          endDateStr === "Present"
            ? [
                now.toLocaleString("default", { month: "long" }),
                now.getFullYear(),
              ]
            : endDateStr.split(" ");

        const startDate = new Date(`${startMonth} 1, ${startYear}`);
        const endDate = new Date(`${endMonth} 1, ${endYear}`);

        // Calculate the difference in months
        const monthsDifference =
          (endDate.getFullYear() - startDate.getFullYear()) * 12 +
          endDate.getMonth() -
          startDate.getMonth();
        totalMonths += monthsDifference;
      });

      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;
      setTotalExperience(`${years} years ${months} months`);
    };

    calculateTotalExperience();

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
    <div className="py-20 lg:py-28">
      <div className="text-white px-20">
        <SectionHeader
          eyebrow="Experience"
          title={`Equipped with ${totalExperience} of rich industry experience.`}
          description=""
        />
        <div ref={containerRef} className="overflow-x-auto">
          <div className="flex flex-col space-y-5">
            {workExperiences.map((experience, index) => {
              const backgroundColor = [
                "#E7EBFD", // Light blue
                "#FDE9D9", // Light peach
                "#FFFF7F", // Light yellow
                "#E0F7FA", // Light cyan
              ][index % 4];

              return (
                <div key={experience.id} className="relative rounded-3xl flex">
                  {/* Left section: Position, Company */}
                  <div
                    className="w-1/2 p-6 rounded-l-xl flex flex-col justify-center relative overflow-hidden"
                    style={{
                      backgroundColor: backgroundColor, // Apply the same background color
                      transform: `translateX(${Math.max(
                        100 - scrollPosition * 3,
                        0
                      )}%)`,
                      opacity: `${Math.min(scrollPosition / (index + 1), 1)}`,
                      transition:
                        "transform 0.5s ease-out, opacity 0.5s ease-out",
                    }}
                  >
                    <div className="text-lg font-semibold text-black opacity-80">
                      {experience.duration}
                    </div>

                    <div className="text-xl font-bold text-black mt-2">
                      {experience.pos}
                    </div>

                    <div className="text-xl text-black mt-1">
                      {experience.company}
                    </div>
                  </div>

                  {/* Right section: Description, Responsibility */}
                  <div
                    className="w-1/2 text-black p-6 relative overflow-hidden rounded-r-xl"
                    style={{
                      backgroundColor: backgroundColor, // Apply the same background color
                    }}
                  >
                    <div className="text-xl text-black">
                      {experience.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
