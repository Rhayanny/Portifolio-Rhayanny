import styles from "./style.module.scss";

export const Card = ({ title, description, repository, variant }) => {
  return (
    <div className={styles.cardProjects}>
      <div>
        <nav>
          <h2>{title}</h2>
          <p title={variant && description}>{description}</p>
        </nav>
      </div>

      <button>
        <a target="_blank" href={repository}>
          Repo
        </a>
      </button>
    </div>
  );
};
