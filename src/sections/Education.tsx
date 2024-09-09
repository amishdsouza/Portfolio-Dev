import Image from "next/image";
import { EducationData } from "@/data/constants";

export const Education = () => {
  return (
    <section className="pt-20 pb-20 relative text-white">
      <div className="mx-auto">
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="w-2 bg-[#232631] absolute top-0 bottom-0"></div>

          {/* Education Content */}
          {EducationData.map((education, index) => (
            <div
              key={`education-${index}`}
              className={`mb-20 w-full md:w-3/4 flex ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              } items-center relative`}
            >
              {/* Education Card */}
              <div
                className={`w-[500px] h-[200px] p-6 bg-[#1d1836] shadow-lg rounded-lg border border-[#232631] overflow-hidden flex flex-col justify-between ${
                  index % 2 === 0 ? "mr-6" : "ml-6"
                }`}
              >
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {education.title}
                  </h3>
                  <p
                    className="text-secondary text-sm font-semibold"
                    style={{ margin: 0 }}
                  >
                    {education.institution} {/* Updated from company_name */}
                  </p>
                </div>

                <ul className="list-disc ml-5 space-y-2">
                  {education.points.map((point, pointIndex) => (
                    <li
                      key={`education-point-${index}-${pointIndex}`}
                      className="text-white text-[14px] pl-1 tracking-wider"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Icon and Date */}
              <div
                className={`flex items-center absolute top-1/2 gap-5 transform -translate-y-1/2 ${
                  index % 2 === 0
                    ? "left-1/2 flex-row translate-x-[-85%]"
                    : "right-1/2 flex-row-reverse translate-x-[85%]"
                }`}
              >
                <p className="text-black text-2xl mr-4">{education.date}</p>
                <div
                  className="flex justify-center items-center w-16 h-16 rounded-full"
                  style={{ background: education.iconBg }}
                >
                  <Image
                    src={education.icon}
                    alt={education.institution}
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
