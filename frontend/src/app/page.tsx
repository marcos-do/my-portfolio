"use server";

import ScreenContainer from "./components/containers/ScreenContainer";
import BottomLink from "./components/links/BottomLink";

const Screen1 = () => {
  return (
    <>
      <h1>Marcos de Oliveira</h1>
      <p className="p-12">
        Computer engineer. I am a Web Developer with 3 years of experience. I
        like learning new technologies and seeking new challenges. I am good at
        making presentations and I led challenging hackatons.
      </p>
      <BottomLink href="#skills" />
    </>
  );
};

const Screen2 = () => {
  return (
    <>
      <h1>Technical Skills</h1>
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
        className="flex min-h-screen flex-col items-left p-24 text-white bg-blue-900"
      >
        <Screen2 />
      </ScreenContainer>
    </main>
  );
}
