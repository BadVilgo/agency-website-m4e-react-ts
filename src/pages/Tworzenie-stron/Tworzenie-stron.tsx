// Home.tsx
import React from "react";
import styles from "./Tworzenie-stron.module.scss";
import Hero from "../../components/Tworzenie-stron/Hero/Hero";
import Kontakt from "../../components/Tworzenie-stron/Kontakt/Kontakt";
import Oferta from "../../components/Tworzenie-stron/Oferta/Oferta";
import Opinie from "../../components/Tworzenie-stron/Opinie/Opinie";
import Portfolio from "../../components/Tworzenie-stron/Portfolio/Portfolio";
import Proces from "../../components/Tworzenie-stron/Proces/Proces";
import "./Tworzenie-stron.module.scss";

const TworzenieStron: React.FC = () => {
  return (
    <div>
      <Hero />
      <Portfolio />
      <Opinie />
      <Oferta />
      <Proces />
      <Kontakt />
    </div>
  );
};

export default TworzenieStron;
