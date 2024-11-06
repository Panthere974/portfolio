import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileArrowDown, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
import styles from './Header.module.scss'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classNames(styles.header, { [styles.scrolled]: scrolled })}>
        <h1 className={styles.header_title}>Portfolio</h1>
        <nav className={styles.header_nav}>
          <ul>
            <li>
            <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
            <li
              onMouseEnter={() => setIsHovered(true)} // Quand la souris entre
              onMouseLeave={() => setIsHovered(false)} // Quand la souris quitte
            >
              {isHovered ? (
                <FontAwesomeIcon icon={faFileArrowDown} />
              ) : (
                'CV'
              )}
            </li>
            <li>
            <FontAwesomeIcon icon={faMoon} />
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
