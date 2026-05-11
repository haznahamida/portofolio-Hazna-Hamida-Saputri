import { useEffect, useState } from "react";

import "./styles/globalStyles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

import {
  NAV_LINKS
} from "./data/portofolioData";
import Experience from "./components/Experience";

export default function App() {
  const [activeSection, setActiveSection] =
    useState("home");

  const [selectedProject, setSelectedProject] =
    useState(null);

  useEffect(() => {
    const ids = [
      "home",
      ...NAV_LINKS
    ];

    const handleScroll = () => {
      const reversed = [...ids].reverse();

      for (const id of reversed) {
        const el =
          document.getElementById(id);

        if (
          el &&
          window.scrollY >=
            el.offsetTop - 120
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollTo = (id) => {
    const el =
      document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Navbar
        active={activeSection}
        scrollTo={scrollTo}
      />

      <Hero scrollTo={scrollTo} />

      <About />
      <Education />
      <Experience />
      <Skills />

      <Projects
        onSelect={
          setSelectedProject
        }
      />

      <Achievements />
      <Contact />

      {selectedProject && (
        <Modal
          project={
            selectedProject
          }
          onClose={() =>
            setSelectedProject(
              null
            )
          }
        />
      )}
    </>
  );
}