import ArrowIcon from "@/assets/arrow-right.svg";
import noodleImage from "@/assets/noodle.png";
import HeroImage from "@/assets/cog2.jpeg";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="pt-8 pb-20 md:pt-5 md:pb-10"
      style={{
        background:
          "radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)",
      }}
    >
      <div className="px-20">
        <div className="md:flex items-center">
          {/* Left Text Content */}
          <div className="md:w-1/2">
            <div className="tag">Welcome to My Portfolio</div>
            <h1 className="text-5xl md:text-7xl mt-6 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
              Amish Dickson Dsouza
            </h1>
            <p className="text-2xl text-[#010D3E] tracking-tighter mt-6">
              I'm a Software and Web Developer
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">
                Explore My Work
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="md:w-1/2 mt-20 md:mt-0 md:ml-20 relative">
            <Image
              src={HeroImage}
              alt="HeroImage"
              className="w-full h-auto max-h-[800px] object-cover"
            />
            {/* <Image
              src={noodleImage}
              alt="noodleImage"
              width={220}
              className="hidden lg:block absolute top-[724px] left-[720px] rotate-[30deg]"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
