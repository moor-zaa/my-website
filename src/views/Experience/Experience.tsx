import React from "react";
import styles from "./Experience.module.css";
import qubySvg from "../../assets/images/company/quby.jpg";
import datisSvg from "../../assets/images/company/datis.svg";
import freelanceSvg from "../../assets/images/company/freelance.svg";
import nilaSoftSvg from "../../assets/images/company/nilasoft.jpg";
import CompanyImage from "@/components/CompanyImage/CompanyImage";
import Image from "next/image";

const Experience = () => {
  const content = [
    "Developed a web application that attracted more than 25,000 users.",
    "Mentored 1 intern, guiding him in developing and using new and high-end technologies.",
    "Managed about 3 projects related to the IoT, such as vending machines and remote elevator controls.",
    "Implemented responsive and user-friendly web interfaces using HTML, CSS, and JavaScript for more than 10 projects, resulting in a 30% increase in user engagement.",
    "Contributed closely with 3 designers and 2 back-end developers to successfully integrate and implement user interface designs.",
    "Conducted daily code reviews for an intern, providing timely feedback and teaching new methods and best practices.",
    "Proficient in functional programming concepts.",
    "Participated in producing maintainable code in large codebases in more than 4 projects.",
    "Utilized 2 different types of version control systems such as Git and Azure",
  ];

  return (
    <section id="experience" className={styles.experience}>
      <h1>Experience</h1>
      {/* <div className={`blueElement ${styles.blueElement}`} />
      <div className={`purpleElement ${styles.purpleElement}`} />
      <div className={"foreDrop"}> */}
      <div className={`container ${styles.container}`}>
        <div className={styles.companiesImage}>
          <CompanyImage
            image={qubySvg}
            name="QUBY"
            date="Apr 2020 - Present"
            color="#247189"
          />
          <CompanyImage
            image={datisSvg}
            name="DATIS"
            date="Apr 2020 - Present"
            color="#931519"
          />
          <CompanyImage
            image={freelanceSvg}
            name="Freelance"
            date="Apr 2020 - Present"
            color="#9000c9"
          />
          <CompanyImage
            image={nilaSoftSvg}
            name="NilaSoft"
            date="Apr 2020 - Present"
            color="#fff"
          />
        </div>
        <div className={styles.experienceContent}>
          {/* <h2 className={styles.hoverCompanies}>Hover Companies</h2> */}
          <div className={styles.companyDetailContainer}>
            <Image
              className={styles.companyLargeImage}
              src={datisSvg}
              width={450}
              height={450}
              alt=""
            />
            {content.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Experience;
