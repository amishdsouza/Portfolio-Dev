import { brainwaveSymbol } from "../assets";
import { collabApps } from "../constants";

const Logo = () => {
  return (
    <div className="container lg:flex">
      <div className="lg:ml-auto xl:w-[38rem] mt-20 py-20">
        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
          <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
              <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img
                  src={brainwaveSymbol}
                  width={48}
                  height={48}
                  alt="brainwave"
                />
              </div>
            </div>
          </div>

          <ul>
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                  index * 45
                }`}
              >
                <div
                  className={`relative -top-[1.6rem] flex flex-col items-center w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                    index * 45
                  }`}
                >
                  <img
                    className="m-auto"
                    width={app.width}
                    height={app.height}
                    alt={app.title}
                    src={app.icon}
                  />
                  <span className="mt-1 text-center text-sm text-n-8">
                    {app.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Logo;
