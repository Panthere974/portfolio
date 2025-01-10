import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEnvelope, faFileArrowDown, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./HeaderControls.module.scss";

function HeaderIcon({href}) {
  const email = "cedricpayet.dev@gmail.com";
  const linkedInLink = "https://www.linkedin.com/in/cédric-payet";
  const cvPath = "../../assets/react.svg";

  return (
      <ul className={styles.header_controls}>
        <li>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href={`mailto:${email}`} rel="noopener noreferrer" aria-label="Send email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a href={cvPath} download="Cédric_Payet_CV.svg" aria-label="Download CV">
            <FontAwesomeIcon icon={isHovered ? faFileArrowDown : faFile} />
          </a>
        </li>
        <li onClick={() => setIsDarkTheme(!isDarkTheme)} role="button" aria-label="Toggle dark mode">
          <FontAwesomeIcon icon={isDarkTheme ? faMoon : faSun} />
        </li>
      </ul>
  );
}

export default HeaderIcon;
