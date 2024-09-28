import HeroImage from "@/assets/cogs.jpeg";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100);
  }, []);

  return (
    <section className="pb-20 md:pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen relative">
        {/* Left Blue Section with Hexagon Pattern */}
        <div
          className={`bg-[#24a2e6] text-white flex flex-col items-center justify-center px-10 transition-transform duration-1000 relative overflow-hidden ${
            isAnimated ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Subtle Hexagon Pattern */}
          <svg
            className="absolute top-0 left-0 w-full h-full text-blue-200 opacity-20 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="hexagons"
                width="20"
                height="17.32"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(0)"
              >
                <polygon
                  points="10,0 20,5 20,15 10,20 0,15 0,5"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>

          <div
            className={`text-center md:text-left transition-opacity delay-500 duration-1000 ${
              isAnimated ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className={`text-5xl md:text-7xl font-bold tracking-tighter`}>
              Amish Dickson Dsouza
            </h1>
            <h2
              className={`text-3xl md:text-5xl mt-4 md:mt-6 tracking-tighter `}
            >
              Full-stack Developer
            </h2>
          </div>
        </div>

        {/* Right White Section with Image Slide-in Animation */}
        <div
          className={`bg-white flex items-center justify-center relative overflow-hidden transition-transform duration-1000 ${
            isAnimated ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Image
            src={HeroImage}
            alt="HeroImage"
            className="object-cover w-full h-auto max-h-[80vh] max-w-full"
            style={{ position: "relative", zIndex: 10 }}
            priority
          />
        </div>
      </div>
    </section>
  );
};
