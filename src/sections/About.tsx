import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { IconItems } from "@/components/IconItems";
import Image from "next/image";

import mapImage from "@/assets/map.jpg";
import smileMemoji from "@/assets/memoji-smile.png";

// Import constants
import { iconItemsPart1, iconItemsPart2, hobbies } from "@/data/constants";

const HobbiesCard = () => (
  <Card className="h-[320px] p-0 flex flex-col md:col-span-2 lg:col-span-1 shadow-md rounded-lg">
    <CardHeader
      title="My Hobbies"
      description="Explore"
      className="px-6 pt-6 py-6"
    />
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

const MapCard = () => (
  <Card className="h-[320px] p-0 relative md:col-span-3 lg:col-span-2">
    <Image
      src={mapImage}
      alt="Map showing locations"
      className="h-full w-full object-cover"
      loading="lazy"
    />
    <div className="absolute top-[60%] left-[22%] -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after-rounded-full after:outline-gray-950/30">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
      <Image
        src={smileMemoji}
        alt="Memoji smile"
        className="size-20"
        loading="lazy"
      />
    </div>
  </Card>
);

export const About = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="text-white px-20">
        <SectionHeader
          eyebrow="About"
          title="A Glimpse"
          description="Learn more"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <HobbiesCard />
            <MapCard />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="lg:h-[480px] md:h-[200px] md:col-span-3">
              <CardHeader title="My Toolbox" description="Explore" />
              <div className="overflow-hidden">
                {/* Render the first part of the iconItems */}
                <IconItems
                  items={iconItemsPart1}
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                {/* Render the second part of the iconItems */}
                <IconItems
                  items={iconItemsPart2}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right [animation-duration:30s]"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
