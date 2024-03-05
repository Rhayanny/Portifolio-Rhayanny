import { iconsSocial } from "../../../data/IconsSocial";
import styles from "./style.module.scss";

const Contact = () => {
  return (
    <div className={styles.mainSection}>
      <section id="contact" className={styles.contactSection}>
        <p>Vamos conversar e criar juntos!</p>
        <ul>
          {iconsSocial.map((item, index) => {
            const { icon, href } = item;

            return (
              <li key={index}>
                <a href={href} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Contact;
