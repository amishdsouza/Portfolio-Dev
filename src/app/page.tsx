import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { About } from "@/sections/About";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <About />
    </>
  );
}
