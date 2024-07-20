"use client";

import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import myImage from "../../assets/images/me.jpg";

import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={`purpleElement ${styles.purpleElement}`} />
      <div className={`blueElement ${styles.blueElement}`} />
      <div className={"foreDrop"}>
        <div className={`container ${styles.container}`}>
          <div className={styles.heroContent}>
            <div className={styles.welcome}>Welcome to my portfolio</div>
            <div style={{ margin: "16px 0" }}>
              <h1>
                <div>Hello, my</div>
                <div className={styles.secondLine}>
                  name is <span className={styles.morteza}>Morteza</span>{" "}
                  <span className={styles.openToWork}>
                    <div className={styles.online} />
                    Open to work
                  </span>
                </div>
              </h1>
            </div>
            <div>
              Nearly 7 years of experience in front-end development with
              expertise in React, JavaScript, Next JS, Tailwind, Redux, HTML,
              CSS, Typescript, Node JS, Express JS, MongoDB, Three JS, Git,
              Storybook, jQuery, Figma, and other technologies. Strong interest
              in learning new technologies and driving projects from concept to
              launch. Excited about learning and development with a desire to
              apply skills on a larger team. Eager to tackle more complex
              problems and continue to find ways to maximize user efficiency.
            </div>
            <div className={styles.buttonsContainer}>
              <Link
                href={"/Resume - Morteza Alipour.pdf"}
                // download
                className="primary-button"
              >
                Download Resume
              </Link>
              <Link href={""} className="secondary-button">
                Contact Me
              </Link>
            </div>
          </div>
          <div className={styles.imageBorder}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={myImage}
                alt="Profile picture"
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
