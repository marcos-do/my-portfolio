"use client";

import React, { ComponentProps } from "react";

const BottomLink: React.FC<ComponentProps<"a">> = ({ href, children }) => {
  return (
    <a
      className="absolute bottom-16 left-16 text-2xl font-semibold"
      href={href}
    >
      {children}
    </a>
  );
};

export default BottomLink;
