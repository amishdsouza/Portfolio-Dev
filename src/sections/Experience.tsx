import { useEffect, useState, useMemo } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { workExperiences } from "@/data/constants";

const cardColors = [
  { background: "#8bc6ec", textColor: "#333" }, // Soft Blue
  { background: "#7ad68b", textColor: "#333" }, // Mint Green
  { background: "#6ac1b8", textColor: "#333" }, // Soft Teal
  { background: "#94d158", textColor: "#333" }, // Light Green
  { background: "#f9c2c2", textColor: "#333" }, // Soft Pink
  { background: "#e2d2ff", textColor: "#333" }, // Light Lavender
];

const patterns = [
  // Diagonal Zigzag Lines
  "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27 width=%27100%27 height=%27100%27%3E%3Cpath d=%27M0 50 L25 0 L50 50 L75 0 L100 50 L100 100 L0 100 Z%27 fill=%27none%27 stroke=%27%23e2e8f0%27 stroke-width=%272%27/%3E%3C/svg%3E')",

  // Diagonal Stripes
  "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27 width=%27100%27 height=%27100%27%3E%3Crect width=%27100%27 height=%27100%27 fill=%27none%27/%3E%3Cpath d=%27M0 0 L100 100 M0 20 L100 120 M0 40 L100 140 M0 60 L100 160 M0 80 L100 180%27 stroke=%27%23e2e8f0%27 stroke-width=%272%27/%3E%3C/svg%3E')",

  // Chevrons
  "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27 width=%27100%27 height=%27100%27%3E%3Cpolygon points=%270,20 50,0 100,20 100,80 50,100 0,80%27 fill=%27none%27 stroke=%27%23e2e8f0%27 stroke-width=%272%27/%3E%3C/svg%3E')",

  // Concentric Circles
  "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Ccircle cx=%2750%27 cy=%2750%27 r=%2750%27 fill=%27none%27 stroke=%27%23e2e8f0%27 stroke-width=%272%27/%3E%3Ccircle cx=%2750%27 cy=%2750%27 r=%2740%27 fill=%27none%27 stroke=%27%23e2e8f0%27 stroke-width=%272%27/%3E%3Ccircle cx=%2750%27 cy=%2750%27 r=%2730%27 fill=%27none%27 stroke=%27%23e2e8f0%27 stroke-width=%272%27/%3E%3Ccircle cx=%2750%27 cy=%2750%27 r=%2720%27 fill=%27none%27 stroke=%27%23e2e8f0%27 stroke-width=%272%27/%3E%3Ccircle cx=%2750%27 cy=%2750%27 r=%2710%27 fill=%27none%27 stroke=%27%23e2e8f0%27 stroke-width=%272%27/%3E%3C/svg%3E')",

  // Subtle Waves
  "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27 width=%27100%27 height=%27100%27%3E%3Cpath d=%27M0 50 C 20 20, 40 80, 60 50 S 100 20, 100 50 V 100 H 0 Z%27 fill=%27none%27 stroke=%27%23e2e8f0%27 stroke-width=%272%27/%3E%3C/svg%3E')",
];

export const Experience = () => {
  const [totalExperience, setTotalExperience] = useState("0 years");
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const calculateTotalExperience = () => {
      const now = new Date();
      const totalMonths = workExperiences.reduce((acc, experience) => {
        const [startDateStr, endDateStr] = experience.duration.split(" - ");
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

        return (
          acc +
          (endDate.getFullYear() - startDate.getFullYear()) * 12 +
          (endDate.getMonth() - startDate.getMonth())
        );
      }, 0);

      const years = Math.floor(totalMonths / 12);
      setTotalExperience(`${years}+ years`);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const darkenColor = (color: string, amount: number) => {
    let [r, g, b] = [0, 0, 0].map((_, i) =>
      Math.max(
        0,
        Math.min(255, parseInt(color.slice(1 + i * 2, 3 + i * 2), 16) - amount)
      )
    );
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  return (
    <div className="text-gray-800 py-20 lg:py-28 relative">
      <div className="px-5 lg:px-20">
        <SectionHeader
          eyebrow="Experience"
          title={`${totalExperience} of rich industry experience.`}
          description=""
        />

        <div className="relative mt-10 flex flex-col lg:flex-row">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1">
            {workExperiences.map((experience, index) => {
              const { background, textColor } =
                cardColors[index % cardColors.length];
              const pattern = patterns[index % patterns.length];

              return (
                <div
                  key={experience.id}
                  className={`experience-card rounded-lg p-6 transition-all duration-500 shadow-lg flex`}
                  style={{
                    backgroundColor: background,
                    zIndex: 1,
                    opacity: visibleCards.includes(index) ? 1 : 0,
                    transform: visibleCards.includes(index)
                      ? `translateY(0)`
                      : `translateY(20px)`,
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = darkenColor(
                      background,
                      30
                    ))
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = background)
                  }
                >
                  <div className="flex-1">
                    <div
                      className="text-lg lg:text-xl font-semibold mb-2"
                      style={{ color: textColor }}
                    >
                      {experience.duration}
                    </div>
                    <div
                      className="text-2xl lg:text-3xl font-bold leading-tight mb-1"
                      style={{ color: textColor }}
                    >
                      {experience.pos}
                    </div>
                    <div
                      className="text-lg lg:text-2xl font-medium mb-4"
                      style={{ color: textColor }}
                    >
                      {experience.company}
                    </div>
                    <div
                      className="text-base lg:text-xl tracking-wide leading-relaxed"
                      style={{ color: textColor }}
                    >
                      {experience.description}
                    </div>
                  </div>
                  <div
                    className="w-1/3 h-full"
                    style={{
                      backgroundImage: pattern,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-10 h-20" />
      </div>
    </div>
  );
};
