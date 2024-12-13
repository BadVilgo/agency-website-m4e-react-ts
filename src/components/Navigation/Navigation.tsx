import React, { useState } from "react";
import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((menuStatus) => {
      console.log("isMenuOpen:", !menuStatus);
      return !menuStatus;
    });
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <a href="/">Marketing4Eagles</a>
      </div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/tworzenie-stron">Tworzenie stron</a>
        </li>
        <li>
          <a href="/reklama-w-internecie">Reklama</a>
        </li>
        <li>
          <a href="/kontakt">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
