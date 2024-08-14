"use client";

import React, { useEffect, ComponentProps } from "react";
import styles from "./menus.module.css";
import { DARK_THEME_CLASS, THEME_KEY } from "@/app/constants/theme";
import TextButton from "../buttons/TextButton";
import Image from "next/image";
import SunIcon from "@/app/assets/sun_icon.svg";
import MoonIcon from "@/app/assets/half_moon_icon.svg";

const updateThemeValue = (value: string) => {
  localStorage.setItem(THEME_KEY, value);
};

const StickyMenu: React.FC<ComponentProps<"div">> = ({ children }) => {
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
      <TextButton onClick={changeToLightTheme}>
        <Image src={SunIcon} alt="Light theme"></Image>
      </TextButton>
      <TextButton onClick={changeToDarkTheme}>
        <Image src={MoonIcon} alt="Dark theme"></Image>
      </TextButton>
    </div>
  );
};

export default StickyMenu;
