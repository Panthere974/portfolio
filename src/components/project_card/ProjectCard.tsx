import styles from "./ProjectCard.module.scss";
import image from "./custom-software.jpeg";

function ProjectCard() {

  return (
    <div className={styles.project_card}>
        <div className={styles.project_card_image_container}>
            <img src={image} alt="Description de l'image"/>
        </div>
        <strong>Développement Front-End</strong>
        <p>Développer des sites web avec React.js</p>
    </div>
  );
}

export default ProjectCard;
