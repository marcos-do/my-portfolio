import { TechExperience } from "@/app/types/tech";
import Image from "next/image";
import React from "react";
import styles from "./cards.module.scss";

const TechCard: React.FC<TechExperience> = ({ title, description, years, path }) => {
  return (
    <div className={`bg-white rounded p-4 text-black min-w-40 max-w-60 min-h-80 ${styles.card}`}>
      <div className={`${styles.inner}`}>
        <div className={`flex flex-col items-center ${styles.front}`}>
          {path && <Image src={path} alt="" width={128} height={128} />}
          <span className="font-bold">{title}</span>
          <span>Years of experience: {years.toString()}</span>
        </div>
        <div className={`${styles.back}`}>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
