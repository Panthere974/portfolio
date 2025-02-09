import { useState } from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  subtitle: string;
  paragraph? : string;
  image? : string;
  imageAlt? : string;
  option? : "project_card";
}

function Card({title, subtitle, paragraph, image, imageAlt, option} : CardProps) {

  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    if (option) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <div className={classNames(styles.card, {[styles.toggle_open]: isOpen})} onClick={handleToggle}>
      {image && 
        <div className={styles.card_image_container}>
          <img src={image} alt={imageAlt}/>
        </div>
      }
      <div className={classNames(styles.card_text_container, {[styles.project_card]: option})}>
        <strong>{title}</strong>
        <p>{subtitle}</p>
        <div className={classNames(styles.toggle_content, {[styles.toggle_open]: isOpen})}>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
