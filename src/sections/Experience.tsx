import Image from "next/image";
import Company1Logo from "@/assets/star.png";
import Company2Logo from "@/assets/check.svg";
import Company3Logo from "@/assets/arrow-down.svg";

export const Experience = () => {
  return (
    <section className="pt-16 pb-16 relative">
      <div className="mx-auto">
        <div className="relative flex justify-center items-start">
          {/* Vertical Line */}
          <div className="w-1 bg-gray-300 absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0"></div>

          {/* Experience Logos */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="mb-24">
              <Image
                src={Company1Logo}
                alt="Company 1"
                className="h-12 w-12 rounded-full border-2 border-gray-300"
                width={48}
                height={48}
              />
            </div>
            <div className="mb-24">
              <Image
                src="/assets/check.svg"
                alt="Company 2"
                className="h-12 w-12 rounded-full border-2 border-gray-300"
                width={48}
                height={48}
              />
            </div>
            <div className="mb-24">
              <Image
                src="/assets/arrow-down.svg"
                alt="Company 3"
                className="h-12 w-12 rounded-full border-2 border-gray-300"
                width={48}
                height={48}
              />
            </div>
          </div>

          {/* Experience Left */}
          <div className="w-full md:w-1/2 flex flex-col items-end pr-8">
            {/* Experience 1 */}
            <div className="mb-12 max-w-[520px]">
              <h3 className="text-2xl font-semibold">
                MSc - Master of Science in Computing
              </h3>
              <p className="text-gray-500">
                Edge Hill Univeristy, Ormskirk, United Kingdom
              </p>
              <p className="text-sm text-gray-500">2022 - 2023</p>
              <p className="mt-4 text-gray-700">
                Nailed the Master's in Computing with a Distinction. Basically,
                aced the techy stuff!
              </p>
            </div>

            {/* Experience 3 */}
            <div className="mb-12 max-w-[520px]">
              <h3 className="text-2xl font-semibold">
                BCA - Bachelor of Computer Applications
              </h3>
              <p className="text-gray-500">
                St. Aloysius College, Mangalore, India.
              </p>
              <p className="text-sm text-gray-500">2016 - 2019 </p>
              <p className="mt-4 text-gray-700">
                Embarked on my tech adventure during BCA, learning to talk the
                code talk.
              </p>
            </div>

            {/* Experience 3 */}
            <div className="mb-12 max-w-[520px]">
              <h3 className="text-2xl font-semibold">10th Grade</h3>
              <p className="text-gray-500">
                Vidya Jyothi High School, Mangalore, India.
              </p>
              <p className="text-sm text-gray-500">2014 </p>
              <p className="mt-4 text-gray-700">
                Had a blast while cruising through the basic schooling
              </p>
            </div>
          </div>

          {/* Experience Right */}
          <div className="w-full md:w-1/2 flex flex-col items-start pl-8">
            <div className="mb-12 max-w-[520px]">
              <h3 className="text-2xl font-semibold">
                MCA - Master of Computer Applications
              </h3>
              <p className="text-gray-500">
                St. Aloysius College, Mangalore, India.
              </p>
              <p className="text-sm text-gray-500">Mar 2023 - Present</p>
              <p className="mt-4 text-gray-700">
                Awarded "The Best Student of the MCA"
              </p>
            </div>

            {/* Experience 3 */}
            <div className="mb-12 max-w-[520px]">
              <h3 className="text-2xl font-semibold">
                PCMC - Physics, Chemistry, Mathematics, Science
              </h3>
              <p className="text-gray-500">
                Padua College of Commerce and Management, Mangalore, India.
              </p>
              <p className="text-sm text-gray-500">2014 - 2016</p>
              <p className="mt-4 text-gray-700">
                Embraced the world of software and web development, veering away
                from the pull of gravity 🚀 and the clinks of test tubes🧪
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
