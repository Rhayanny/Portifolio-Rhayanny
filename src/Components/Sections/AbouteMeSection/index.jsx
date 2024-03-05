import styles from "./style.module.scss";

const AboutMe = ({ setIsScrool }) => {
  const scrool = (section) => {
    setIsScrool(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="about" className={styles.mainSection}>
      <section className={styles.about}>
        <h3 className="title  one"> Sobre mim 💗 </h3>

        <div className={styles.divContainer}>
          <h4>
            Além de Desenvolvedora, tenho alguns outros gostos e hobbies que
            são:
          </h4>
          <p>❁ Ouvir música 🎧🎵 </p>
          <p>❁ Gosto de lugares com vistas calmas e bonitas ☀️🌅</p>
          <p>❁ Amo animais (tenho 3 pets) ❤️🐕🐕🐈‍⬛</p>
          <p>
            ❁ E juntando musica e uma vista linda gosto muito de desenhar 📖✏️
          </p>
        </div>
        <div>
          <span>
            E você? Compartilhe seus gostos comigo, vamos conversar e fazer
            network!
          </span>
          <nav>
            <a
              onClick={() => scrool("contact")}
              className="title Headline btn "
              href="https://www.linkedin.com/in/rhayanny-rodrigues-76b23728a/"
            >
              Linkedin
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
