export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-blue-300 to-sky-400 text-transparent bg-clip-text text-5xl">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-3xl text-center mt-6 text-black">
        {title}
      </h2>
      <p className="md:text-lg text-black/60 text-center mt-4 max-w-7xl mx-auto lg:text-xl">
        {description}
      </p>
    </>
  );
};
