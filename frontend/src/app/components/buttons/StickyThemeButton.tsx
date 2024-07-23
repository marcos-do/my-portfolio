"use client";

import React, { useEffect } from "react";
import styles from "./buttons.module.css";
import { DARK_THEME_CLASS, THEME_KEY } from "@/app/constants/theme";

const updateThemeValue = (value: string) => {
  localStorage.setItem(THEME_KEY, value);
};

const getThemeValue = () => {
  return localStorage.getItem(THEME_KEY);
};

const StickyThemeButton: React.FC = () => {

  const addDarkTheme = () => {
    const root = document.documentElement;
    root.classList.add(DARK_THEME_CLASS);
  }

  useEffect(() => {
    const theme = getThemeValue();
    if (theme && theme === DARK_THEME_CLASS) {
      addDarkTheme()
    }
  }, []);

  const changeToLightTheme = () => {
    const root = document.documentElement;
    root.classList.remove(DARK_THEME_CLASS);
    updateThemeValue("");
  };

  const changeToDarkTheme = () => {
    const root = document.documentElement;
    root.classList.add(DARK_THEME_CLASS);
    updateThemeValue(DARK_THEME_CLASS);
  };

  return (
    <div
      className={`${styles["theme-switch"]} absolute flex flex-col top-8 right-8`}
    >
      <button onClick={changeToLightTheme}>Light</button>
      <button onClick={changeToDarkTheme}>Dark</button>
    </div>
  );
};

export default StickyThemeButton;
