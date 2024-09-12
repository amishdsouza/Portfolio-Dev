import { SectionHeader } from "@/components/SectionHeader";
import { workExperiences } from "@/data/constants";

export const Experience = () => {
  return (
    <div className="py-20 px-10 lg:py-28 lg:px-40">
      <SectionHeader eyebrow="Experience" title="" description="" />
      <div className="space-y-8">
        {workExperiences.map((experience) => (
          <div
            key={experience.id}
            className="relative bg-gradient-to-r from-indigo-500 to-purple-700 rounded-xl flex transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            {/* Left section: Position, Company */}
            <div className="flex-shrink-0 w-1/3 bg-black bg-opacity-50 p-6 rounded-l-xl flex flex-col justify-center">
              <div className="text-lg font-semibold text-white opacity-80">
                {experience.duration}
              </div>
              <div className="text-2xl font-bold text-white mt-2">
                {experience.pos}
              </div>
              <div className="text-sm text-gray-300 mt-1 opacity-70">
                {experience.company}
              </div>
            </div>

            {/* Right section: Description, Responsibility */}
            <div className="flex-grow bg-white text-black p-6 relative overflow-hidden rounded-r-xl">
              <p className="text-black">{experience.description}</p>
              <p className="mt-4 text-black">{experience.responsibility}</p>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-white to-black"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-t from-white to-black"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-l from-white to-black"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
