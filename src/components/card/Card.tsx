import React, { useState } from "react";
import classNames from "classnames";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  subtitle: string;
  paragraph? : string;
  image? : string;
  imageAlt? : string;
  githubProjectLink? : string;
  option? : "project_card";
}

function Card({title, subtitle, paragraph, image, imageAlt, githubProjectLink, option} : CardProps) {

  const [isOpen, setIsOpen] = useState(false);

  function stopPropagation(event: React.MouseEvent) {
    event.stopPropagation();
  }

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
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={githubProjectLink}
            onClick={stopPropagation}>
              <GitHubLogoIcon/>
          </a>
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
