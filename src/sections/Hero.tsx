import HeroImage from "@/assets/cogs.jpeg";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[100vh] relative">
        {/* Left Blue Section */}
        <div className="bg-[#007bff] min-h-[90vh] text-white flex items-center justify-center px-10">
          <div>
            <h1 className="text-5xl md:text-7xl mt-6 font-bold tracking-tighter">
              Amish Dickson Dsouza
            </h1>
            {/* <p className="text-2xl tracking-tighter mt-6">Test</p> */}
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary flex items-center gap-2">
                Explore My Work
              </button>
            </div>
          </div>
        </div>

        {/* Right White Section with Image */}
        <div className="bg-white flex items-center justify-center relative">
          <Image
            src={HeroImage}
            alt="HeroImage"
            className="w-full h-auto max-h-[80vh] object-cover relative z-10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            style={{
              position: "absolute",
              left: "-10%",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};
