import aboutMeImage from "@/assets/product-image.png";
import Image from "next/image";

export const About = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag"> About Me </div>
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">
          Hi There! I am Amish Dickson Dsouza, an ardent designer and developer
          specializing in the creation of stylish, contemporary website and
          software.
        </h2>
        <p className="text-center">
          With a deep love for aesthetics and an eye for detail, I thrive on
          translating ideas into visually stunning and user-friendly designs. My
          journey began with the fascination of coding a block that generated
          prime numbers. Initially, it seemed like a daunting task, but as I
          delved deeper, my passion for programming grew. I embarked on a
          journey of learning various programming languages, including C, C++,
          Java, Python, and more.
        </p>
        <br />
        {/* <Image src={aboutMeImage} alt="aboutMeImage" /> */}
        Technologies I worked with
        <div>
          <div className="flex flex-row flex-wrap mt-8">
            <img
              src="https://github.com/get-icon/geticon/raw/master/icons/nextjs-icon.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://github.com/get-icon/geticon/raw/master/icons/react.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://github.com/get-icon/geticon/raw/master/icons/tailwindcss-icon.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://github.com/get-icon/geticon/raw/master/icons/bootstrap.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://github.com/get-icon/geticon/raw/master/icons/python.svg"
              className="h-20 w-20 mx-4 my-4"
            />

            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*w0u2TZpEp3WfKMrlL5jTSw.png"
              className="h-20 w-20 mx-4 my-4"
            />

            <img
              src="https://github.com/get-icon/geticon/raw/master/icons/java.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://github.com/get-icon/geticon/raw/master/icons/vite.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://github.com/get-icon/geticon/raw/master/icons/figma.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://github.com/get-icon/geticon/raw/master/icons/cloudflare.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://github.com/get-icon/geticon/raw/master/icons/sass.svg"
              className="h-20 w-20 mx-4 my-4"
            />

            <img
              src="https://www.google.com/s2/favicons?sz=64&domain=canva.com"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://postman.com&size=64"
              className="h-20 w-20 mx-4 my-4"
            />

            <img
              src="https://raw.githubusercontent.com/github/explore/93d8a67084f94b2a444e510199a6e7622e5b09a3/topics/dotnet/dotnet.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/databases/mongodb.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/programming%20languages/php.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://www.psychopy.org/_static/Psychopy%20Logotext.png"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/linux/linux.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
