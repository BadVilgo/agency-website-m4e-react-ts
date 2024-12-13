import React from "react";
import styles from "./Hero.module.scss";

const Proces: React.FC = () => {
  return (
    <div>
      <div>
        <h2>Jak wygląda proces tworzenia strony?</h2>
      </div>
      <div>
        <ol>
          <li>
            Zbieram potrzebne informacje (Główny cel strony, zakładki,
            preferowany styl strony, grafiki i treści[Możliwość użycia grafik
            stockowych i wygenrowania copy]).
          </li>
          <li>Wysyłam pierwszą wersję strony.</li>
          <li>Wprowadzamy poprawki do satysfakcji.</li>
        </ol>
      </div>
    </div>
  );
};

export default Proces;
