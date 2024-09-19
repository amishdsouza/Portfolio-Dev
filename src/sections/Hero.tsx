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
        {/* Left Blue Section with Fade-in Animation */}
        <div
          className={`bg-[#24a2e6] text-white flex flex-col items-center justify-center px-10 transition-transform duration-1000 ${
            isAnimated ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className={`text-center md:text-left transition-opacity delay-500 duration-1000 ${
              isAnimated ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Amish Dickson Dsouza
            </h1>
            <h2 className="text-3xl md:text-5xl mt-4 md:mt-6 tracking-tighter">
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
