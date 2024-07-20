import React from "react";

import "./Scroll.css";
import Link from "next/link";

const Scroll = () => {
  return (
    <div className="scroll-container">
      <div className="mouse">
        <Link href={"#about"}></Link>
      </div>
    </div>
  );
};

export default Scroll;
