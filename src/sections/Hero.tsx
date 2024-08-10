import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog2.jpeg";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
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
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[578px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tighter">
              My Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Amish Dickson Dsouza
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tighter mt-6">
              I'm a Software and Web Developer
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary"> Text </button>
              <button className="btn btn-text">
                <span> Learn more </span> <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="cogImage"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            {/* <Image
              src={cylinderImage}
              alt="cylinderImage"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            /> */}

            <Image
              src={noodleImage}
              alt="noodleImage"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30-deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
