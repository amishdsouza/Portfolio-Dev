import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { IconItems } from "@/components/IconItems";
import bookImage from "@/assets/book-cover.png";
import mapImage from "@/assets/map.jpg";
import smileMemoji from "@/assets/memoji-smile.png";
import Image from "next/image";

import ANGULAR from "@/assets/Icons/angular.svg";
import BOOTSTRAP from "@/assets/Icons/bootstrap.svg";
import CLOUDFLARE from "@/assets/Icons/cloudflare.svg";
import CSS from "@/assets/Icons/css3.svg";
import FIGMA from "@/assets/Icons/figma.svg";
import GitHub from "@/assets/Icons/github.svg";
import GitLab from "@/assets/Icons/gitlab.svg";
import HTML from "@/assets/Icons/html5.svg";
import Java from "@/assets/Icons/java.svg";
import JS from "@/assets/Icons/js.svg";
import MongoDB from "@/assets/Icons/mongodb.svg";
import MySQL from "@/assets/Icons/mysql.svg";
import NextJS from "@/assets/Icons/next.svg";
import NodeJS from "@/assets/Icons/nodejs.svg";
import NPM from "@/assets/Icons/npm.svg";
import PHP from "@/assets/Icons/php.svg";
import Postman from "@/assets/Icons/postman.svg";
import Python from "@/assets/Icons/python.svg";
import React from "@/assets/Icons/react.svg";
import Tailwind from "@/assets/Icons/tailwind.svg";
import Webpack from "@/assets/Icons/webpack.svg";
import Wordpress from "@/assets/Icons/wordpress.svg";
import MICROSOFT from "@/assets/Icons/microsoft.svg";
import DotNet from "@/assets/Icons/dotnet.svg";

const toolboxItems = [
  {
    title: "HTML",
    iconType: HTML,
    alt: "HTML Logo",
  },
  {
    title: "CSS",
    iconType: CSS,
    alt: "CSS Logo",
  },
  {
    title: "JavaScript",
    iconType: JS,
    alt: "JavaScript Logo",
  },
  {
    title: "React",
    iconType: React,
    alt: "React Logo",
  },
  {
    title: "NextJS",
    iconType: NextJS,
    alt: "NextJS Logo",
  },
  {
    title: "Tailwind",
    iconType: Tailwind,
    alt: "Tailwind Logo",
  },
  {
    title: "Bootstrap",
    iconType: BOOTSTRAP,
    alt: "BOOTSTRAP Logo",
  },
  {
    title: "Angular",
    iconType: ANGULAR,
    alt: "ANGULAR Logo",
  },
  {
    title: "Figma",
    iconType: FIGMA,
    alt: "FIGMA Logo",
  },
  {
    title: "GitHub",
    iconType: GitHub,
    alt: "GitHub Logo",
  },
  {
    title: "GitLab",
    iconType: GitLab,
    alt: "GitLab Logo",
  },
  {
    title: "MongoDB",
    iconType: MongoDB,
    alt: "MongoDB Logo",
  },
  {
    title: "MySQL",
    iconType: MySQL,
    alt: "MySQL Logo",
  },
  {
    title: "NodeJS",
    iconType: NodeJS,
    alt: "NodeJS Logo",
  },

  {
    title: "Java",
    iconType: Java,
    alt: "Java Logo",
  },

  {
    title: "Python",
    iconType: Python,
    alt: "Python Logo",
  },

  {
    title: "PHP",
    iconType: PHP,
    alt: "PHP Logo",
  },

  {
    title: "Cloudflare",
    iconType: CLOUDFLARE,
    alt: "CLOUDFLARE Logo",
  },

  {
    title: "NPM",
    iconType: NPM,
    alt: "NPM Logo",
  },
  {
    title: "Microsoft Dynamics",
    iconType: MICROSOFT,
    alt: "Microsoft Logo",
  },

  {
    title: "Postman",
    iconType: Postman,
    alt: "Postman Logo",
  },

  {
    title: "Webpack",
    iconType: Webpack,
    alt: "Webpack Logo",
  },
  {
    title: "WordPress",
    iconType: Wordpress,
    alt: "Wordpress Logo",
  },
  {
    title: ".Net Core",
    iconType: DotNet,
    alt: "DotNet Logo",
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "DJ",
    emoji: "🎧",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🌄",
    left: "10%",
    top: "35%",
  },
  {
    title: "Driving",
    emoji: "🚗",
    left: "50%",
    top: "35%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "15%",
    top: "65%",
  },
];

export const About = () => {
  return (
    <div className="bg-black py-20 lg:py-28">
      <div className="text-white px-20">
        <SectionHeader
          eyebrow="About"
          title="A Glimpse"
          description="Learn more"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            {/* <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore" />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card> */}

            <Card className="h-[320px] p-0 flex flex-col md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Hobbies"
                description="Explore"
                className="px-6 pt-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span> {hobby.emoji} </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-3 lg:col-span-2">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-[60%] left-[22%] -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after-rounded-full after:outline-gray-950/30">
                <Image src={smileMemoji} alt="smile" className="size-20" />
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[480px] md:h-[200px] md:col-span-3">
              <CardHeader title="My Toolbox" description="Explore" />
              <IconItems items={toolboxItems} />
              <IconItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-[92.7%]"
              />
              <IconItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-[195%]"
              />
              <IconItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-[300%]"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
