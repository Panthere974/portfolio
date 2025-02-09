import classNames from "classnames";
import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  paragraph: string;
  image? : string;
  imageAlt? : string;
  option? : "project_card";
}

function openThis() {
  
}

function Card({title, paragraph, image, imageAlt, option} : CardProps) {

  return (
    <div className={styles.card}>
      {image && 
        <div className={styles.card_image_container}>
          <img src={image} alt={imageAlt}/>
        </div>
      }
      <div className={classNames(styles.card_text_container, {[styles.project_card]: option})}>
        <strong>{title}</strong>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Card;
