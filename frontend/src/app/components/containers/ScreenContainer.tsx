import React, { ComponentProps } from "react";

const ScreenContainer: React.FC<ComponentProps<"div">> = ({
  children,
  className,
  id,
}) => {
  return (
    <div id={id} className={`h-screen ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default ScreenContainer;
