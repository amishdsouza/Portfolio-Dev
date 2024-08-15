import Image from "next/image";
import HTML from "@/assets/Icons/html.png";
import CSS from "@/assets/Icons/css.png";
import JS from "@/assets/Icons/js.png";
import NodeJS from "@/assets/Icons/nodejs.png";
import BOOTSTRAP from "@/assets/Icons/bootstrap.png";
import TAILWIND from "@/assets/Icons/tailwind.png";
import React from "@/assets/Icons/react.png";
import REST from "@/assets/Icons/restful.jpg";
import Angular from "@/assets/Icons/angular.png";
import SAAS from "@/assets/Icons/saas.png";
import JAVA from "@/assets/Icons/java.png";
import Python from "@/assets/Icons/python.png";
import Bruno from "@/assets/Icons/bruno.png";
import Andriod from "@/assets/Icons/andriod.png";
import VSS from "@/assets/Icons/VSS.jpg";
import POSTMAN from "@/assets/Icons/postman.png";
import GITHUB from "@/assets/Icons/github.png";
import GITLAB from "@/assets/Icons/gitlab.png";
import PHP from "@/assets/Icons/php.png";
import MSDYNAMICS from "@/assets/Icons/msdynamics.jpg";
import MYSQL from "@/assets/Icons/mysql.jpg";
import MONGODB from "@/assets/Icons/mongodb.png";
import C from "@/assets/Icons/c-programming.png";
import FIGMA from "@/assets/Icons/figma.png";
import VITE from "@/assets/Icons/vite.png";
import JWT from "@/assets/Icons/jwt.png";
import WEBPACK from "@/assets/Icons/webpack.png";
import CLOUDFLARE from "@/assets/Icons/cloudflare.png";
import NPM from "@/assets/Icons/npm.png";
import NET from "@/assets/Icons/net.jpg";
import NETCORE from "@/assets/Icons/NETCORE.png";
import CANVA from "@/assets/Icons/canva.png";
import CPLUS from "@/assets/Icons/CPLUS.png";
import VSCODE from "@/assets/Icons/vs code.png";
import PSYCHOPY from "@/assets/Icons/psychopy.gif";

const iconList = [
  { src: HTML, alt: "HTML Logo" },
  { src: CSS, alt: "CSS Logo" },
  { src: JS, alt: "JS Logo" },
  { src: NodeJS, alt: "NodeJS Logo" },
  { src: BOOTSTRAP, alt: "BOOTSTRAP Logo" },
  { src: TAILWIND, alt: "TAILWIND Logo" },
  { src: React, alt: "React Logo" },
  { src: REST, alt: "REST Logo" },
  { src: Angular, alt: "Angular Logo" },
  { src: SAAS, alt: "SAAS Logo" },
  { src: JAVA, alt: "JAVA Logo" },
  { src: Python, alt: "Python Logo" },
  { src: Bruno, alt: "Bruno Logo" },
  { src: Andriod, alt: "Andriod Logo" },
  { src: VSS, alt: "VSS Logo" },
  { src: POSTMAN, alt: "POSTMAN Logo" },
  { src: GITHUB, alt: "GITHUB Logo" },
  { src: GITLAB, alt: "GITLAB Logo" },
  { src: PHP, alt: "PHP Logo" },
  { src: MONGODB, alt: "MONGODB Logo" },
  { src: MYSQL, alt: "MYSQL Logo" },
  { src: C, alt: "C Logo" },
  { src: FIGMA, alt: "FIGMA Logo" },
  { src: VITE, alt: "VITE Logo" },
  { src: JWT, alt: "JWT Logo" },
  { src: WEBPACK, alt: "WEBPACK Logo" },
  { src: CLOUDFLARE, alt: "CLOUDFLARE Logo" },
  { src: NPM, alt: "NPM Logo" },
  { src: NET, alt: "NET Logo" },
  { src: NETCORE, alt: "NETCORE Logo" },
  { src: CANVA, alt: "CANVA Logo" },
  { src: PSYCHOPY, alt: "PSYCHOPY Logo" },
  { src: CPLUS, alt: "CPLUS Logo" },
  { src: VSCODE, alt: "VSCODE Logo" },
  { src: MSDYNAMICS, alt: "MSDYNAMICS Logo" },
];

export const LogoTicker = () => {
  return (
    <section className="bg-white py-24">
      <div className="flex flex-wrap justify-center">
        {iconList.map((icon, index) => (
          <div key={index} className="flex-shrink-0 w-24 h-24 mx-4 my-4">
            <Image
              src={icon.src}
              alt={icon.alt}
              layout="intrinsic"
              width={144}
              height={144}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
