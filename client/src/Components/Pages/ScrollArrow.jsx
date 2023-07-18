import React, { useState } from "react";
import { TbArrowBigUpLines } from "react-icons/tb";
import "../../Style/ScrollArrow.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <TbArrowBigUpLines
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 50, display: showScroll ? "block" : "none" }}
    />
  );
};

export default ScrollArrow;
