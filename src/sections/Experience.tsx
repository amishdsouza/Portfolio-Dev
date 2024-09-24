import { useEffect, useState, useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { workExperiences } from "@/data/constants";

export const Experience = () => {
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
  }, []);

  return (
    <div className="py-20 lg:py-28">
      <div className="text-gray-800 px-20">
        <SectionHeader
          eyebrow="Experience"
          title={`Equipped with ${totalExperience} of rich industry experience.`}
          description=""
        />
        <div ref={containerRef} className="overflow-x-auto">
          {/* Flex container for even spacing */}
          <div className="flex justify-between space-x-5">
            {workExperiences.map((experience, index) => {
              return (
                <div
                  key={experience.id}
                  className="flex flex-col bg-white rounded-3xl shadow-lg p-8 transition-transform transform hover:scale-105 w-1/4"
                >
                  {/* Experience Details */}
                  <div className="text-lg font-semibold text-left mb-2 leading-tight">
                    {experience.duration}
                  </div>
                  <div className="text-xl font-bold text-left mb-2 leading-tight">
                    {experience.pos}
                  </div>
                  <div className="text-lg text-gray-700 text-left mb-3 leading-tight">
                    {experience.company}
                  </div>
                  <div className="text-base text-left text-gray-600 leading-relaxed">
                    {experience.description}
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

// import { useEffect, useState, useRef } from "react";
// import { SectionHeader } from "@/components/SectionHeader";
// import { workExperiences } from "@/data/constants";

// export const Experience = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [totalExperience, setTotalExperience] = useState("0 years 0 months");

//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const calculateTotalExperience = () => {
//       const now = new Date();
//       let totalMonths = 0;

//       workExperiences.forEach((experience) => {
//         const [startDateStr, endDateStr] = experience.duration.split(" - ");
//         const [startMonth, startYear] = startDateStr.split(" ");
//         const [endMonth, endYear] =
//           endDateStr === "Present"
//             ? [
//                 now.toLocaleString("default", { month: "long" }),
//                 now.getFullYear(),
//               ]
//             : endDateStr.split(" ");

//         const startDate = new Date(`${startMonth} 1, ${startYear}`);
//         const endDate = new Date(`${endMonth} 1, ${endYear}`);

//         const monthsDifference =
//           (endDate.getFullYear() - startDate.getFullYear()) * 12 +
//           endDate.getMonth() -
//           startDate.getMonth();
//         totalMonths += monthsDifference;
//       });

//       const years = Math.floor(totalMonths / 12);
//       const months = totalMonths % 12;
//       setTotalExperience(`${years} years ${months} months`);
//     };

//     calculateTotalExperience();

//     const handleScroll = () => {
//       if (containerRef.current) {
//         const { top, height } = containerRef.current.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         // Ensure the element is in view before calculating the scroll position
//         if (top < windowHeight && top + height > 0) {
//           const scrollPercentage = Math.min(
//             Math.max(((windowHeight - top) / (height + windowHeight)) * 100, 0),
//             100
//           );
//           setScrollPosition(scrollPercentage);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="py-20 lg:py-28">
//       <div className="text-white px-20">
//         <SectionHeader
//           eyebrow="Experience"
//           title={`Equipped with ${totalExperience} of rich industry experience.`}
//           description=""
//         />
//         <div ref={containerRef} className="overflow-x-auto">
//           <div className="flex flex-col space-y-5">
//             {workExperiences.map((experience, index) => {
//               const backgroundColor = [
//                 "bg-gradient-to-tl from-blue-200 to-teal-500",
//                 "bg-gradient-to-r from-blue-300 to-sky-300",
//                 "bg-gradient-to-r from-sky-500 to-blue-500",
//                 "bg-gradient-to-tl from-sky-400 to-blue-400",
//               ][index % 4];

//               const opacityValue = Math.min(scrollPosition / (index + 1), 1);
//               const translateXValue = Math.max(100 - scrollPosition * 2, 0);

//               return (
//                 <div key={experience.id} className="relative rounded-3xl flex">
//                   {/* Left section: Position, Company */}
//                   <div
//                     className={`w-1/2 p-6 rounded-l-xl flex flex-col justify-center relative overflow-hidden ${backgroundColor}`}
//                     style={{
//                       transform: `translateX(${translateXValue}%)`,
//                       opacity: opacityValue,
//                       transition:
//                         "transform 0.5s ease-out, opacity 0.5s ease-out",
//                     }}
//                   >
//                     <div className="text-lg font-semibold text-black opacity-80">
//                       {experience.duration}
//                     </div>

//                     <div className="text-xl font-bold text-black mt-2">
//                       {experience.pos}
//                     </div>

//                     <div className="text-xl text-black mt-1">
//                       {experience.company}
//                     </div>
//                   </div>

//                   {/* Right section: Description, Responsibility */}
//                   <div
//                     className={`w-1/2 text-black p-6 relative overflow-hidden rounded-r-xl ${backgroundColor}`}
//                   >
//                     <div className="text-xl text-black">
//                       {experience.description}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
