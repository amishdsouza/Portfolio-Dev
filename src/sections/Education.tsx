import { EducationData } from "@/data/constants";

import { motion } from "framer-motion";

import Image from "next/image"; // Ensure to import Image from the correct library

export const Education = () => {
  return (
    <section className="py-20 lg:py-28 text-gray-800 bg-white">
      <div className="mx-auto px-4 flex justify-between items-start">
        {/* Left Side with the Title */}

        <div className="w-1/4 flex justify-start">
          <h2 className="text-4xl font-bold">Education</h2>
        </div>

        {/* Right Side with the Cards */}

        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-end">
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
              className="relative w-[400px] h-[450px] p-10 bg-gradient-to-br from-[#d1e7ff] to-[#a6c8ff] shadow-lg rounded-lg border border-[#cfe2ff] transition-transform transform hover:scale-105 flex flex-col justify-between"
            >
              {/* Icon in the Top Left Corner */}

              <motion.div
                className="absolute top-4 left-4"
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-gray-300">
                  {/* <Image
                    src={education.icon} // Ensure this is the correct path for the icon
                    alt={`${education.title} icon`}
                    className="w-10 h-10"
                    width={40} // Adjust according to your needs
                    height={40} // Adjust according to your needs
                  /> */}
                </div>
              </motion.div>

              {/* Text Content */}

              <div className="flex flex-col justify-end h-full">
                <h3 className="text-2xl font-bold mb-4">{education.title}</h3>

                <p className="text-lg text-gray-600 italic mb-2">
                  {education.institution}
                </p>

                <p className="text-sm text-gray-500 font-semibold">
                  {education.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
