"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { IconItems } from "@/components/IconItems";
import Image from "next/image";

import Tick from "@/assets/tick.svg";
import Copy from "@/assets/copy.svg";

import MapImage from "@/assets/map.jpg";
import PassionImage from "@/assets/passion.png";
import SmileMemoji from "@/assets/memoji-smile.png";

import {
  iconItemsPart1,
  iconItemsPart2,
  iconItemsPart3,
  hobbies,
} from "@/data/constants";

const TechStackCard = () => (
  <Card className="h-[276px] md:h-[450px] lg:h-[276px] col-span-1">
    <CardHeader
      title="Tech Stack"
      description="I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications"
    />

    <div className="overflow-hidden">
      <IconItems
        items={iconItemsPart1}
        itemsWrapperClassName="animate-move-left [animation-duration:30s]"
      />
      <IconItems
        items={iconItemsPart2}
        className="mt-6"
        itemsWrapperClassName="animate-move-right [animation-duration:30s]"
      />
      <IconItems
        items={iconItemsPart3}
        className="mt-6"
        itemsWrapperClassName="animate-move-left [animation-duration:30s]"
      />
    </div>
  </Card>
);

const MapCard = () => (
  <Card className="h-[700px] md:h-[326px] lg:h-[326px] col-span-1">
    <CardHeader
      title="I’m flexible with time zone communications & locations"
      description="I'm based in Liverpool, United Kingdom and open to remote work worldwide"
    />
    <Image
      src={MapImage}
      alt="Map showing locations"
      className="h-full w-full object-cover"
      loading="lazy"
    />
    <div className="absolute top-[60%] left-[22%] -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after-rounded-full after:outline-gray-950/30">
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

const HobbiesCard = () => (
  <Card className="h-[276px] flex-1 flex-col shadow-md">
    <CardHeader title="My Hobbies" description="Explore" />
    <div className="relative flex-1">
      {hobbies.map((hobby) => (
        <div
          key={hobby.title}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full shadow-sm absolute"
          style={{ left: hobby.left, top: hobby.top }}
          aria-label={`Hobby: ${hobby.title}`}
        >
          <span className="font-medium text-gray-700">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </div>
      ))}
    </div>
  </Card>
);

const PassionCard = () => (
  <Card className="h-[276px] flex-1 flex-col shadow-md">
    <CardHeader
      title="My Passion for Coding"
      description="I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies and enhancing my skills."
    />
    <div className="flex-1 flex items-center justify-center">
      <Image src={PassionImage} alt="Passion Logo" />
    </div>
  </Card>
);

const ContactCard = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("amishdsouza1998@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <Card className="h-[150px] p-6 flex flex-col items-center justify-center shadow-md">
      <p className="grid-subtext text-center">Contact me</p>
      <div
        className="copy-container mt-4 flex items-center gap-2"
        onClick={handleCopy}
      >
        {hasCopied ? <Tick /> : <Copy />}
        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
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
        <SectionHeader
          eyebrow="About"
          title="A Glimpse"
          description="Greetings! I am Amish Dickson Dsouza, an ardent designer and developer specializing in the creation of stylish, contemporary website and software. With a deep love for aesthetics and an eye for detail, I thrive on translating ideas into visually stunning and user-friendly designs.
          My journey began with the fascination of coding a block that generated prime numbers. Initially, it seemed like a daunting task, but as I delved deeper, my passion for programming grew. I embarked on a journey of learning various programming languages, including C, C++, Java, Python, and more. Over the years, I have dedicated myself to honing my skills in different areas, striving to become a proficient full-stack developer.
          Now, as a software engineer with over 3 years of experience, I have had the opportunity to work on projects for multiple clients. This has been an enriching experience, as it has allowed me to collaborate with various companies and gain a diverse range of professional exposure.
          I am grateful for the privilege to work on these projects and contribute to the success of my clients. The challenges and opportunities I have encountered along the way have further fueled my passion for designing and developing innovative solutions.
          Thank you for taking the time to visit my portfolio. I invite you to explore my work. Feel free to reach out to discuss your project or simply say hello. I look forward to collaborating with you!"
        />

        <div className="mt-10 flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <TechStackCard />
            <MapCard />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
            <HobbiesCard />
            <PassionCard />
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  );
};
