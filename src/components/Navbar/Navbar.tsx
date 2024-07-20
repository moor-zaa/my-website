import React, { FC } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className={`flex justify-center ${styles.navbar}`}>
      <div className={`container ${styles.container}`}>
        <div className="mr-auto font-bold">Morteza Alipour</div>
        <Link className={styles.link} href={"#home"}>
          Home
        </Link>
        <Link className={styles.link} href={""}>
          Skills
        </Link>
        <Link className={styles.link} href={"#experience"}>
          Experience
        </Link>
        <Link className={styles.link} href={"#projects"}>
          Projects
        </Link>
        <Link className={styles.link} href={""}>
          Testimonials
        </Link>
        <Link className={styles.link} href={""}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
