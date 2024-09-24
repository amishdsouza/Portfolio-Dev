import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { workExperiences } from "@/data/constants";

export const Experience = () => {
  const [totalExperience, setTotalExperience] = useState("0 years 0 months");
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const calculateTotalExperience = () => {
      const now = new Date();
      let totalMonths = 0;

      workExperiences.forEach((experience) => {
        const startDateStr = experience.duration.split(" - ")[0];
        const endDateStr = experience.duration.split(" - ")[1];
        const [startMonth, startYear] = startDateStr.split(" ");
        const endMonth =
          endDateStr === "Present"
            ? now.toLocaleString("default", { month: "long" })
            : endDateStr.split(" ")[0];
        const endYear =
          endDateStr === "Present"
            ? now.getFullYear()
            : endDateStr.split(" ")[1];

        const startDate = new Date(`${startMonth} 1, ${startYear}`);
        const endDate = new Date(`${endMonth} 1, ${endYear}`);

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
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".experience-card");
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < windowHeight && cardRect.bottom > 0) {
          setVisibleCards((prev) => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white text-gray-800 py-20 lg:py-28">
      <div className="px-5 lg:px-20">
        <SectionHeader
          eyebrow="Experience"
          title={`Equipped with ${totalExperience} of rich industry experience.`}
          description="Explore my professional journey and the diverse roles I've embraced."
        />
        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {workExperiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`experience-card bg-blue-200 rounded-lg p-6 transition-all duration-500 hover:bg-blue-300 shadow-lg transform ${
                  visibleCards.includes(index)
                    ? `opacity-100 translate-y-0`
                    : `opacity-0 translate-y-10`
                }`}
                style={{
                  transform: `translateY(${index * 75}px)`,
                }}
              >
                <div className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                  {experience.duration}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-1">
                  {experience.pos}
                </div>
                <div className="text-lg lg:text-2xl text-gray-700 font-medium mb-1">
                  {experience.company}
                </div>
                <div className="text-base lg:text-xl text-gray-600 tracking-wide leading-relaxed">
                  {experience.description}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 h-20" />
        </div>
      </div>
    </div>
  );
};
