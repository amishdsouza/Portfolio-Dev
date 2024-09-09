import { workExperiences } from "@/data/constants";

export const Experience = () => {
  return (
    <section className="c-space my-20 relative" id="work">
      <div className="w-full text-black-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  className="work-content_container group border border-gray-200 rounded-lg shadow-md p-5 transition-all hover:shadow-lg"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-gray-800">{item.company}</p>
                    <p className="text-sm text-gray-600 mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-gray-900 transition-all ease-in-out duration-500">
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
  );
};
