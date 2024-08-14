import React, { ComponentProps } from "react";

const TextButton: React.FC<ComponentProps<"button">> = ({
  children,
  type,
  onClick,
}) => {
  return (
    <button className="w-8 h-8" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default TextButton;
