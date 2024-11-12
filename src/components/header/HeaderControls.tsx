import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEnvelope, faFileArrowDown, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./HeaderControls.module.scss";

function HeaderControls() {
  const email = "cedricpayet.dev@gmail.com";
  const linkedInLink = "https://www.linkedin.com/in/cédric-payet";
  const cvPath = "../../assets/react.svg";

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme());

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  return (
      <ul className={styles.header_controls}>
        <li>
          <a href={linkedInLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
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

export default HeaderControls;
