import { EducationData } from "@/data/constants";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

export const Education = () => {
  return (
    <section className="py-20 lg:py-28 text-gray-800 bg-white">
      <div className="mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side with the Section Header */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 flex flex-col justify-center">
            <SectionHeader
              eyebrow="Education"
              title="My Academic Journey"
              description="Explore the qualifications that have shaped my career."
            />
          </div>

          {/* Right Side with the Cards, Centered */}
          <div className="w-full lg:w-3/4 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {EducationData.map((education, index) => (
                <motion.div
                  key={`education-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="relative p-6 bg-white bg-opacity-80 backdrop-blur-lg shadow-lg rounded-2xl border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col overflow-hidden"
                >
                  {/* Text Content */}
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1 text-gray-800 md:text-3xl">
                        {education.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-1">
                        <strong>{education.institution}</strong>,{" "}
                        {education.location}
                      </p>
                      <p className="text-md text-gray-500 font-medium mb-2">
                        {education.date}
                      </p>
                      <p className="text-md text-gray-500 mb-2 leading-relaxed">
                        {education.description}
                      </p>
                    </div>
                  </div>
                  {/* Decorative Border Bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-b-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
