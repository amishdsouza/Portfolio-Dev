"use client";
import { useState, useEffect } from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Footer } from "@/sections/Footer";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Certification } from "@/sections/Certification";

export default function Home() {
  const [showName, setShowName] = useState(false);
  const [headerFadeIn, setHeaderFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        setShowName(aboutTop <= window.innerHeight * 0.1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Wait for the Hero component to load before fading in the header
  useEffect(() => {
    setTimeout(() => {
      setHeaderFadeIn(true); // Trigger fade in after 500ms
    }, 500);
  }, []);

  return (
    <>
      <Header show={showName} fadeIn={headerFadeIn} />
      <Hero />
      <div id="about">
        <About />
      </div>
      <Experience />
      <Projects />
      <Certification />
      <Education />
      <Footer />
    </>
  );
}
