"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Tick from "@/assets/tick.svg";
import Copy from "@/assets/copy.svg";
import MapImage from "@/assets/map.jpg";
import PassionImage from "@/assets/passion.png";
import SmileMemoji from "@/assets/memoji-smile.png";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { IconItems } from "@/components/IconItems";
import { motion } from "framer-motion";
import {
  frontendIcons,
  backendIcons,
  toolsIcons,
  hobbies,
} from "@/data/constants";

const filterOptions = [
  { label: "Frontend", icons: frontendIcons },
  { label: "Backend", icons: backendIcons },
  { label: "Dev Tools", icons: toolsIcons },
];

const AboutMeCard = () => {
  const constraintRef = useRef(null);

  return (
    <Card className="relative h-[370px] flex-1 flex-col shadow-md bg-gradient-to-br from-teal-500 via-blue-400 to-sky-300">
      <CardHeader
        title="About Me"
        description="Hi, I’m Amish Dickson Dsouza, a designer and developer who loves creating modern, beautiful websites and software. Outside of coding, I enjoy exploring a range of hobbies that fuel my creativity!"
        className="px-6 py-6"
      />
      <div className="relative flex-1 h-full w-full" ref={constraintRef}>
        {hobbies.map((hobby) => (
          <motion.div
            key={hobby.title}
            className="inline-flex items-center gap-2 px-6 py-1.5 bg-gray-100 text-gray-800 rounded-full absolute shadow-sm transition-transform transform hover:scale-110"
            style={{
              left: hobby.left,
              top: hobby.top,
            }}
            aria-label={`Hobby: ${hobby.title}`}
            drag
            dragConstraints={constraintRef}
          >
            <span className="font-medium">{hobby.title}</span>
            <span>{hobby.emoji}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

const PassionCard = () => (
  <Card className="relative h-[370px] flex-1 flex-col shadow-md bg-gradient-to-tl from-blue-600 via-sky-500 to-blue-400">
    <CardHeader
      title="My Passion for Coding"
      description="I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies and enhancing my skills."
    />
    <div className="flex-1 flex items-center justify-center">
      <Image src={PassionImage} alt="Passion Logo" />
    </div>
  </Card>
);

const MapCard = () => (
  <Card className="relative h-[276px] md:h-[450px] lg:h-[650px] bg-gradient-to-tr from-sky-500 via-blue-600 to-sky-300">
    <CardHeader
      title="Flexible with time zone communications & locations"
      description="Based in Liverpool, UK. Open to remote work worldwide."
    />
    <Image
      src={MapImage}
      alt="Map showing locations"
      className="h-full w-full object-cover"
      loading="lazy"
    />
    <div className="absolute top-[60%] left-[22%] transform -translate-x-1/2 -translate-y-1/2 size-20 rounded-full outline-gray-950/30">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
      <Image
        src={SmileMemoji}
        alt="Memoji smile"
        className="size-20"
        loading="lazy"
      />
    </div>
  </Card>
);

const TechStackCard = () => {
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].label);

  const currentIcons =
    filterOptions.find((option) => option.label === selectedFilter)?.icons ||
    [];

  return (
    <Card className="h-[274px] md:h-[450px] lg:h-[425px] bg-gradient-to-tr from-sky-700 via-blue-500 to-blue-300">
      <CardHeader
        title="Tech Stack"
        description="I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications."
      />

      <div className="flex flex-col items-center">
        <div className="flex gap-4 mb-4">
          {filterOptions.map((option) => (
            <button
              key={option.label}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === option.label
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedFilter(option.label)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="overflow-hidden">
          <IconItems items={currentIcons} itemsWrapperClassName="" />
        </div>
      </div>
    </Card>
  );
};

const ContactCard = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("amishdsouza1998@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <Card className="h-[145px] p-6 md:py-8 md:px-10 flex flex-col items-center justify-center shadow-md bg-gradient-to-br from-blue-500 via-sky-500 to-sky-300 ">
      <p className="font-serif text-3xl text-center">Contact me</p>
      <div
        className="copy-container mt-4 flex items-center gap-2 cursor-pointer"
        onClick={handleCopy}
      >
        {hasCopied ? <Tick /> : <Copy />}
        <p className="text-sm lg:text-xl text-white mt-2">
          amishdsouza1998@gmail.com
        </p>
      </div>
    </Card>
  );
};

export const About = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="text-white px-20">
        <SectionHeader eyebrow="" title="" description="" />

        <div className="mt-10 flex flex-col gap-5">
          <div className="grid grid-cols-3 gap-5 md:grid-rows-3 lg:grid-rows-[auto_auto_auto]">
            {/* HobbiesCard is beside MapCard */}
            <div className="col-span-1 row-span-1 ">
              <AboutMeCard />
            </div>

            {/* PassionCard beside HobbiesCard */}
            <div className="col-span-1 row-span-1">
              <PassionCard />
            </div>

            {/* MapCard takes up 1 column and 2 rows */}
            <div className="col-span-1 row-span-3 space-y-4">
              <MapCard />
              <div className="col-span-1 row-span-1 ">
                <ContactCard />
              </div>
            </div>

            {/* TechStackCard takes up 2 columns in the first row */}
            <div className="col-span-2 row-span-1">
              <TechStackCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
