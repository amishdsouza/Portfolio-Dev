import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Footer } from "@/sections/Footer";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Certification } from "@/sections/Certification";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certification />
      {/* <Logo /> */}
      {/* <LogoTicker /> */}
      <Education />
      <Footer />
    </>
  );
}
