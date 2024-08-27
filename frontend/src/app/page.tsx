"use server";

import Image from "next/image";
import ScreenContainer from "./components/containers/ScreenContainer";
import BottomLink from "./components/links/BottomLink";
import ArrowIcon from "@/app/assets/arrow_icon.svg";
import useTech from "./hooks/tech";
import { Tech, TechExperience } from "./types/tech";
import TechCard from "./components/cards/TechCard";
import TechCarousel from "./components/carousels/TechCarousel";

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

export default async function Home() {
  const { getAllTechs } = useTech();
  const techList = await getAllTechs();

  return (
    <main>
      <ScreenContainer
        id="landing"
        className="flex min-h-screen flex-col items-left p-24"
      >
        <Screen1 />
      </ScreenContainer>
      {techList.map(({ type, color, elements }: Tech) => {
        return (
          <ScreenContainer
            id="skills"
            key={type}
            className={`flex min-h-screen flex-col items-left p-24 ${color}`}
          >
            <h1 className="mb-8">{type}</h1>
            <TechCarousel>
              {elements.map(({ title, description, years, path }: TechExperience) => {
                return (
                  <TechCard
                    key={title}
                    title={title}
                    description={description}
                    years={years}
                    path={path}
                  />
                );
              })}
            </TechCarousel>
          </ScreenContainer>
        );
      })}
    </main>
  );
}
