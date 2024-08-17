import React, { ComponentProps } from "react";

const BottomLink: React.FC<ComponentProps<"a">> = ({ href }) => {
  return (
    <a
      className="absolute bottom-16 left-16 text-2xl font-semibold"
      href={href}
    >
      Scroll to see my technical skills
    </a>
  );
};

export default BottomLink;
