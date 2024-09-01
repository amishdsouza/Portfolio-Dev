import Image from "next/image";
import HTML from "@/assets/Icons/html.png";
import CSS from "@/assets/Icons/css.png";
import JS from "@/assets/Icons/js.png";
import NodeJS from "@/assets/Icons/nodejs.png";
import BOOTSTRAP from "@/assets/Icons/bootstrap.png";
import TAILWIND from "@/assets/Icons/tailwind.png";
import ReactLogo from "@/assets/Icons/react.png";
import REST from "@/assets/Icons/restful.jpg";

const iconList = [
  {
    id: "0",
    title: "HTML",
    icon: HTML,
    width: 26,
    height: 36,
    alt: "HTML Logo",
  },
  {
    id: "1",
    title: "CSS",
    icon: CSS,
    width: 26,
    height: 36,
    alt: "CSS Logo",
  },
  {
    id: "2",
    title: "JavaScript",
    icon: JS,
    width: 26,
    height: 36,
    alt: "JavaScript Logo",
  },
  {
    id: "3",
    title: "React",
    icon: ReactLogo,
    width: 26,
    height: 36,
    alt: "React Logo",
  },
  {
    id: "4",
    title: "NodeJS",
    icon: NodeJS,
    width: 26,
    height: 36,
    alt: "NodeJS Logo",
  },
  {
    id: "5",
    title: "Tailwind",
    icon: TAILWIND,
    width: 26,
    height: 36,
    alt: "Tailwind CSS Logo",
  },
  {
    id: "6",
    title: "Bootstrap",
    icon: BOOTSTRAP,
    width: 26,
    height: 36,
    alt: "Bootstrap Logo",
  },
  {
    id: "7",
    title: "REST",
    icon: REST,
    width: 26,
    height: 36,
    alt: "REST API Logo",
  },
];

const Logo = () => {
  const numberOfIcons = iconList.length;
  const angle = 360 / numberOfIcons;

  return (
    <div className="bg-black container lg:flex justify-center items-center h-screen">
      <div className="relative w-[22rem] aspect-square border border-n-6 rounded-full flex justify-center items-center">
        <div className="absolute w-32 h-32 bg-purple-700 rounded-full flex justify-center items-center">
          {/* Center Logo */}
          <Image src={ReactLogo} width={64} height={64} alt="Center Logo" />
        </div>
        <ul className="absolute inset-0">
          {iconList.map((app, index) => (
            <li
              key={app.id}
              className="absolute top-1/2 left-1/2 flex justify-center items-center"
              style={{
                transform: `rotate(${index * angle}deg) translateY(-10rem)`,
              }}
            >
              <div
                className="flex flex-col items-center bg-gray-800 p-2 rounded-full"
                style={{
                  transform: `rotate(${-index * angle}deg)`,
                }}
              >
                <Image
                  className="m-auto"
                  width={app.width}
                  height={app.height}
                  alt={app.alt}
                  src={app.icon}
                />
                <span className="mt-1 text-xs text-white">{app.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Logo;
