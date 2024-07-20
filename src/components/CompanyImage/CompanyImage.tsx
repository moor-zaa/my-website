"use client";

import React, { useState } from "react";
import styles from "./CompanyImage.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface CompanyImage {
  image: StaticImageData;
  name: string;
  date: string;
  color: string;
}

const CompanyImage = ({ image, name, date, color }: CompanyImage) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = (hover: boolean) => {
    setHovered(hover);
  };

  return (
    <div className={styles.companyImageContainer}>
      <div
        style={{ height: hovered ? 150 : 80, opacity: hovered ? 1 : 0 }}
        className={styles.verticalImageContainer}
      >
        <div style={{ marginTop: 24 }}>{name}</div>
      </div>
      <div
        // style={{ width: hovered ? 250 : 80, opacity: hovered ? 1 : 0 }}
        className={styles.horizontalImageContainer}
      >
        <div className={styles.date}>{date}</div>
      </div>
      <div
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        className={styles.imageContainer}
        style={{
          boxShadow: `0px 0px 0px -2px ${color}, 0 0px 20px 9px ${color}`,
        }}
      >
        <Image
          className={styles.companyImage}
          src={image}
          width={48}
          height={48}
          alt={name}
        />
      </div>
    </div>
  );
};

export default CompanyImage;
