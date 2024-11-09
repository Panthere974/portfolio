import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faEnvelope, faFileArrowDown, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
import styles from './Header.module.scss'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [lightMode, setLightMode] = useState(true);

  
  const email = "cedricpayet.dev@gmail.com";

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  const handleLightModeToggle = () => {
    setLightMode(!lightMode);
  }
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classNames(styles.header, { [styles.scrolled]: scrolled })}>
        <h1 className={styles.header_title}>Portfolio</h1>
          <ul className={styles.header_controls}>
            <li>
              <a href='https://www.linkedin.com/in/cédric-payet' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href='mailto:${email}'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href="../../assets/react.svg" download="Cédric_Payet_CV.svg">
                {isHovered ? (
                  <FontAwesomeIcon icon={faFileArrowDown} />
                ) : (
                  <FontAwesomeIcon icon={faFile} />
                )}
              </a>
            </li>
            <li onClick={handleLightModeToggle}>
              {lightMode ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
          </li>
          </ul>
    </header>
  )
}

export default Header
