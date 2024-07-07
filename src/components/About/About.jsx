import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/student.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor front-end</h3>
              <p>
                Durante meus estudos, desenvolvi vários projetos que me permitiram aplicar e aprimorar minhas habilidades em HTML, CSS, JavaScript e frameworks modernos como React. Esses projetos variam desde sites responsivos e aplicativos web até sistemas interativos, cada um representando um passo significativo na minha jornada de aprendizado.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
