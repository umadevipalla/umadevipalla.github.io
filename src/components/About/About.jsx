import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.infoContainer}>
          <h3 className={styles.infoHeader}> <i>Uma Devi Palla</i> </h3>
          <p>
              a passionate front-end developer dedicated to crafting captivating digital experiences. With expertise in <b> Angular,  React,  HTML,  CSS, and  JavaScript </b>, I specialize in transforming designs into seamless, user-friendly websites. From sleek corporate sites to dynamic e-commerce platforms, I thrive on creating engaging interfaces that delight users. Let's collaborate on your next project!
          </p>
        </div>
      </div>
    </section>
  );
};