'use client';

import * as React from "react";
import styles from "./buttons.module.css";

const StickyThemeButton: React.FC = () => {

  const changeToLightTheme = () => {
    const root = document.documentElement;
    root.classList.remove("dark-theme");
  }

  const changeToDarkTheme = () => {
    const root = document.documentElement;
    root.classList.add("dark-theme");
  }

  return (
    <div className={`${styles["theme-switch"]} absolute flex flex-col top-8 right-8`}>
      <button onClick={changeToLightTheme}>Light</button>
      <button onClick={changeToDarkTheme}>Dark</button>
    </div>
  );
}

export default StickyThemeButton