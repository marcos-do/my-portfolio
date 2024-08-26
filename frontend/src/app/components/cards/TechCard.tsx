import { TechExperience } from "@/app/types/tech";
import React from "react";

const TechCard: React.FC<TechExperience> = ({ title, description, years }) => {
  return (
    <div className="bg-white rounded p-4 text-black flex flex-col min-w-80">
      <span className="font-bold">{title}</span>
      <span>{description}</span>
      <span>Years of experience: {years.toString()}</span>
    </div>
  );
};

export default TechCard;
