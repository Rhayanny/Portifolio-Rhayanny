import { FaBars } from "react-icons/fa";
import styles from "./style.module.scss";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

export function Header({ setIsScrool }) {
  const scrool = (section) => {
    setIsScrool(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [menuIsSize, setMenuIsSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    setMenuIsSize({ width: window.innerWidth, height: window.innerHeight });
    const size = () => {
      setMenuIsSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", size);
    return () => window.removeEventListener("resize", size);
  }, []);

  useEffect(() => {
    if (menuIsSize.width > 800) {
      setMenuIsVisible(true);
    } else {
      setMenuIsVisible(false);
    }
  }, [menuIsSize.width]);

  return (
    <header className={styles.header}>
      <div onClick={() => setMenuIsVisible(!menuIsVisible)}>
        {!menuIsVisible ? <FaBars size={30} /> : <IoMdClose size={20} />}
      </div>
      {menuIsVisible && (
        <nav>
          <button onClick={() => scrool("home")} className="title.Headline">
            Home
          </button>
          <button onClick={() => scrool("techs")} className="title.Headline">
            Tecnologias
          </button>
          <button onClick={() => scrool("projects")} className="title.Headline">
            Projetos
          </button>
          <button onClick={() => scrool("about")} className="title.Headline">
            Sobre
          </button>
          <button onClick={() => scrool("contact")} className="title.Headline">
            Contato
          </button>
        </nav>
      )}
    </header>
  );
}
