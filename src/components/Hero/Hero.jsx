import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, Eu sou Érick Lima</h1>
        <p className={styles.description}>
          Estudante do 4º período de Análise e Desenvolvimento de Sistemas (ADS) com foco em desenvolvimento front-end. Tenho experiência em projetos acadêmicos e pessoais, onde apliquei minhas habilidades em HTML, CSS, JavaScript e React.
        </p>

        <p className={styles.description}>
          Estou em busca da minha primeira oportunidade de estágio para continuar aprendendo e contribuindo com uma equipe profissional. Sou dedicado, apaixonado por tecnologia e ansioso para fazer parte de um time talentoso.
        </p>

        <p className={styles.description}>
          Se você procura um desenvolvedor front-end comprometido e entusiasta, vamos conversar!
        </p>

        <a href="mailto:erick.lima64@hotmail.com" className={styles.contactBtn}>
          Contate-me
        </a>
      </div>
      <img
        src={getImageUrl("hero/perfil.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
