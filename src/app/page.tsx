import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Footer } from "@/sections/Footer";
import Logo from "@/sections/Logo";

export default function Home() {
  return (
    <>
      {/* <Header />
      <Hero />
      <LogoTicker />
      <About /> */}
      <Logo />
      <Projects />
      <Footer />
    </>
  );
}
