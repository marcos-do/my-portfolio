"use client";

import React, { ComponentProps, useRef } from "react";

const TechCarousel: React.FC<ComponentProps<"div">> = ({ children }) => {
  const ref = useRef(null);
  const scrollPage = 320;
  const scrollRight = () => {
    if (ref?.current) {
      const element = ref.current as HTMLElement;
      element.scrollLeft += scrollPage;
    }
  };
  const scrollLeft = () => {
    if (ref?.current) {
      const element = ref.current as HTMLElement;
      element.scrollLeft -= scrollPage;
    }
  };
  return (
    <div className="flex flex-row gap-8">
      <button onClick={scrollLeft}>{"<"}</button>
      <div
        ref={ref}
        className="flex flex-row gap-4 overflow-auto scroll-smooth"
      >
        {children}
      </div>
      <button onClick={scrollRight}>{">"}</button>
    </div>
  );
};

export default TechCarousel;
