import Perfil from "../../../assets/imagens/rhayanny.jpg";
import styles from "./style.module.scss";

const Banners = ({ setIsScrool }) => {
  const scrool = (section) => {
    setIsScrool(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="home" className={styles.mainSection}>
      <section className={styles.sectionBanner}>
        <div>
          <span>
            <img src={Perfil} alt="Foto perfil" />
            <p>Olá, eu sou a Rhayanny</p>
          </span>

          <h2 className="title.Headline">Bem vindo ao meu portfólio</h2>
          <p className="title.Headline">
            Pretendo explorar novas áreas e tecnologias, sempre mantendo a
            paixão pela programação acesa.
          </p>
          <nav>
            <button
              onClick={() => scrool("projects")}
              className="title Headline btn "
            >
              Projetos
            </button>
          </nav>
        </div>
      </section>
    </div>
  );
};
export default Banners;
