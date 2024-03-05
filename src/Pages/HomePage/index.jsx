import { Header } from "../../Components/Header";
import Contact from "../../Components/Sections/ContactSection";
import Projects from "../../Components/Sections/ProjectsSection";
import Techs from "../../Components/Sections/TechsSections";
import AboutMe from "../../Components/Sections/AbouteMeSection";
import Banners from "../../Components/Sections/BannerSection";
import { useState } from "react";

const Home = () => {
  const [isScrool, setIsScrool] = useState("home");
  return (
    <>
      <main>
        <Header setIsScrool={setIsScrool} isScrool={isScrool} />
        <Banners setIsScrool={setIsScrool} />
        <Techs />
        <Projects />
        <AboutMe setIsScrool={setIsScrool} />
        <Contact />
      </main>
    </>
  );
};

export default Home;
