// Home.tsx
import React from "react";
import styles from "./Hero.module.scss";
import heroVideo from "../../../assets/videos/hero-icon-consultant.mp4";

// Deklaracja komponentu
const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={(styles.marginB30, styles.marginT30)}>
        <video width="340" autoPlay muted playsInline loop>
          <source src={heroVideo} type="video/mp4" />
          Twoja przeglądarka nie obsługuje tagu wideo.
        </video>
      </div>
      <div>
        <h1 className={styles.marginB30}>
          Strona internetowa pracujące dla Ciebie 24/7
        </h1>
        <h3 className={styles.marginB30}>
          Rozwiązanie rosnące z Twoim biznesem - Zapytaj o wycene
        </h3>
        <button> ZADZWOŃ TERAZ</button> lub <button> WYPEŁNIJ FORMULARZ</button>
      </div>
    </div>
  );
};

export default Hero;
