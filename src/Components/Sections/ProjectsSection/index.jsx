import { projects } from "../../../data/Projects/projects";
import { Card } from "./ProjectsCard";
import styles from "./style.module.scss";

const Projects = () => {
  return (
    <div id="projects" className={styles.mainSection}>
      <section className={styles.projectsSection}>
        <h3 className="title one">Projetos</h3>
        <ul>
          {projects.map((item, index) => {
            const { title, description, repository } = item;

            return (
              <Card
                key={index}
                title={title}
                description={description}
                repository={repository}
                variant="section"
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Projects;
