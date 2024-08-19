"use server";

import Image from "next/image";
import ScreenContainer from "./components/containers/ScreenContainer";
import BottomLink from "./components/links/BottomLink";
import ArrowIcon from "@/app/assets/arrow_icon.svg";

const Screen1 = () => {
  return (
    <>
      <h1>Marcos de Oliveira</h1>
      <p className="p-12">
        Computer engineer. I am a Web Developer with 3 years of experience. I
        like learning new technologies and seeking new challenges. I am good at
        making presentations and I led challenging hackatons.
      </p>
      <BottomLink href="#skills">
        <div className="flex gap-4">
          <span>Scroll to see my technical skills</span>
          <span className="image-animation">
            <Image src={ArrowIcon} alt="" className="w-8 h-8" />
          </span>
        </div>
      </BottomLink>
    </>
  );
};

const Screen2 = () => {
  return (
    <>
      <h1>Backend technologies</h1>
      <p className="p-12">Here are my technical skills...</p>
    </>
  );
};

const Screen3 = () => {
  return (
    <>
      <h1>Frontend technologies</h1>
      <p className="p-12">Here are my technical skills...</p>
    </>
  );
};

export default async function Home() {
  return (
    <main>
      <ScreenContainer
        id="landing"
        className="flex min-h-screen flex-col items-left p-24"
      >
        <Screen1 />
      </ScreenContainer>
      <ScreenContainer
        id="skills"
        className="flex min-h-screen flex-col items-left p-24 green"
      >
        <Screen2 />
      </ScreenContainer>
      <ScreenContainer
        id="skills"
        className="flex min-h-screen flex-col items-left p-24 blue"
      >
        <Screen3 />
      </ScreenContainer>
    </main>
  );
}
