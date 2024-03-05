import { icons } from "../../../data/IconsTech/iconsTech";
import styles from "./style.module.scss";

const Techs = () => {
  return (
    <div id="techs" className={styles.mainSection}>
      <section className={styles.sectionTech}>
        <h3 className="title one">Tecnologias</h3>
        <ul>
          {icons.map((item, index) => {
            const { icon, name } = item;

            return (
              <li key={index}>
                {icon}
                <p className="Headline">{name}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Techs;
