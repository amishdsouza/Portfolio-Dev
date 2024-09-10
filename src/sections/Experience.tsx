import { SectionHeader } from "@/components/SectionHeader";
import { workExperiences } from "@/data/constants";

export const Experience = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="text-white px-20">
        <SectionHeader eyebrow="Experience" title="" description="" />

        <section className="container c-space my-20" id="work">
          <div className="w-full text-white">
            <div className="grid lg:grid-cols-1 grid-cols-1 gap-5 mt-12">
              <div className="col-span-2 rounded-lg bg-[#007bff] border border-black-300">
                <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                  {workExperiences.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[auto_1fr] items-start gap-5 transition-all ease-in-out duration-500 cursor-pointer hover:bg-[#007bff] rounded-lg sm:px-5 px-2.5 group"
                    >
                      <div className="flex flex-col h-full justify-start items-center py-2">
                        <div className="rounded-3xl w-16 h-16 p-2 bg-white">
                          <img
                            className="w-full h-full"
                            src={item.icon}
                            alt=""
                          />
                        </div>

                        {/* Work Content Bar */}
                        <div className="flex-1 w-0.5 mt-4 h-full bg-slate-600 group-hover:bg-blue-800 group-last:hidden"></div>
                      </div>

                      <div className="sm:p-5 px-2.5 py-5">
                        <p className="font-bold text-white">{item.company}</p>{" "}
                        {/* Text color is now white */}
                        <p className="text-sm mb-5 text-gray-200">
                          {" "}
                          {/* Light gray for extra contrast */}
                          {item.pos} -- <span>{item.duration}</span>
                        </p>
                        <p className="group-hover:text-gray-100 transition-all ease-in-out duration-500">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
