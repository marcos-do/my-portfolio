"use client";

import React, { useEffect, ComponentProps } from "react";
import styles from "./menus.module.css";
import { DARK_THEME_CLASS, THEME_KEY } from "@/app/constants/theme";

const updateThemeValue = (value: string) => {
  localStorage.setItem(THEME_KEY, value);
};

const getThemeValue = () => {
  return localStorage.getItem(THEME_KEY);
};

const StickyMenu: React.FC<ComponentProps<'div'>> = ({children}) => {

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
      className={`${styles["theme-switch"]} absolute flex flex-col top-8 right-8 gap-2 rounded-3xl p-2`}
    >
      {children}
    </div>
  );
};

export default StickyMenu;
