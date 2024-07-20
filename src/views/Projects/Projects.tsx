"use client";

import React, { useMemo, useState } from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [items, setitems] = useState([
    { name: "Quby Website", image: "/assets/images/quby-website.png" },
    { name: "Quby Webapp", image: "/assets/images/quby-webapp.png" },
    { name: "Bencherz", image: "/assets/images/quby-website.png" },
    { name: "A-EYES", image: "/assets/images/a-eyes.png" },
    { name: "Dashboard", image: "/assets/images/quby-website.png" },
    { name: "Agency", image: "/assets/images/quby-webapp.png" },
  ]);

  const containerTransformX = useMemo(() => {
    return selected ? (selected - 1) * 16.5 : 0;
  }, [selected]);

  return (
    <div id="projects" className="flex flex-col items-center">
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <motion.div
        animate={{ x: `${-containerTransformX}vw` }}
        transition={{ duration: 0.5, ease: "linear" }}
        className={`${styles.container} mt-10`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              selected === index ? styles.expanded : ""
            }`}
            onClick={() =>
              setSelected((prev) => (prev === index ? null : index))
            }
          >
            <motion.div
              animate={{
                opacity: selected === index ? 0 : 1,
                width: selected === index ? 0 : "100%",
              }}
              className={`bg-black h-full w-full flex flex-col items-center justify-between`}
            >
              <div></div>
              <div className="transform -rotate-90 text-center">
                <h2>{item.name}</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="mb-4">2018</div>
            </motion.div>
            <motion.div
              animate={{
                opacity: selected === index ? 1 : 0,
                width: selected === index ? "100%" : 0,
              }}
              className={`bg-black h-full w-full flex items-center justify-evenly overflow-hidden`}
            >
              <div className="w-1/4 px-[32px]">
                <h2>
                  {item.name} <span className="text-sm">- 2012</span>
                </h2>
                <p className="text-gray-500">
                  This is an AI-assisted webapp to diagnose and treat your dry
                  eye disease, anytime, anywhere. The usage is incredibly simple
                  – just turn on your {"phone's"} flash, capture an image of
                  your right eye, then your left eye, and await the results.
                  Additionally, you can review the history of your previous
                  results through an interactive chart.
                </p>
                <p className="mt-6">
                  <span className="text-md text-blue-500 mx-1">#React</span>
                  <span className="text-md text-blue-300 mx-1">#Tailwind</span>
                  <span className="text-md text-purple-500 mx-1">#Redux</span>
                  <span className="text-md text-gray-200 mx-1">#AI</span>
                  <span className="text-md text-orange-500 mx-1">
                    #Chart.js
                  </span>
                </p>
                <div className="mt-[48px]">
                  <Link
                    href={"https://a-eyes.app"}
                    target="_blank"
                    className="p-3 ring-1 ring-gray-500 rounded-md hover:bg-gray-500 hover:text-black transition-all duration-500"
                  >
                    Visit Webapp
                  </Link>
                </div>
              </div>

              <div className="w-3/4">
                <div className="flex flex-wrap justify-center px-32 gap-8">
                  <Image
                    src={"/assets/images/a-eyes/p1.jpg"}
                    width={200}
                    height={600}
                    alt=""
                    className="mx-4 rounded-xl"
                    style={{ transform: "rotate(22deg)" }}
                  />
                  <Image
                    src={"/assets/images/a-eyes/p2.jpg"}
                    width={200}
                    height={600}
                    alt=""
                    className="mx-4 rounded-xl"
                    style={{ transform: "rotate(22deg)" }}
                  />
                  <Image
                    src={"/assets/images/a-eyes/p3.jpg"}
                    width={200}
                    height={600}
                    alt=""
                    className="mx-4 rounded-xl"
                    style={{ transform: "rotate(22deg)" }}
                  />
                </div>
                <div className="flex flex-wrap justify-center px-32 gap-8">
                  <Image
                    src={"/assets/images/a-eyes/p4.jpg"}
                    width={200}
                    height={600}
                    alt=""
                    className="mx-4 rounded-xl"
                    style={{ transform: "rotate(22deg)" }}
                  />
                  <Image
                    src={"/assets/images/a-eyes/p5.jpg"}
                    width={200}
                    height={600}
                    alt=""
                    className="mx-4 rounded-xl"
                    style={{ transform: "rotate(22deg)" }}
                  />
                  <Image
                    src={"/assets/images/a-eyes/p6.jpg"}
                    width={200}
                    height={600}
                    alt=""
                    className="mx-4 rounded-xl"
                    style={{ transform: "rotate(22deg)" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
