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
      <p>Node.js</p>
      <p>Express</p>
      <p>NestJS</p>
      <p>Java Spring Boot</p>
    </>
  );
};

const Screen3 = () => {
  return (
    <>
      <h1>Frontend technologies</h1>
      <p>React</p>
      <p>Next.js</p>
      <p>Tailwind</p>
      <p>Angular</p>
    </>
  );
};

const Screen4 = () => {
  return (
    <>
      <h1>Database engines</h1>
      <p>PostgreSQL</p>
      <p>MySQL</p>
      <p>MongoDB</p>
    </>
  );
};

const Screen5 = () => {
  return (
    <>
      <h1>Cloud Certifications</h1>
      <p>AWS Cloud Practitioner</p>
      <p>IBM Cloud Advocate v2</p>
    </>
  );
};

const Screen6 = () => {
  return (
    <>
      <h1>CI/CD</h1>
      <p>Git</p>
      <p>GitHub</p>
      <p>GitLab</p>
      <p>Jenkins</p>
    </>
  );
};

const Screen7 = () => {
  return (
    <>
      <h1>Infrastructure</h1>
      <p>EC2</p>
      <p>IBM Cloud Kubernetes Service</p>
      <p>Docker</p>
    </>
  );
};

const Screen8 = () => {
  return (
    <>
      <h1>Languages</h1>
      <p>JavaScript</p>
      <p>TypeScript</p>
      <p>SQL</p>
      <p>Java</p>
      <p>Python</p>
      <p>HTML5</p>
      <p>CSS</p>
      <p>SaSS</p>
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
      <ScreenContainer
        id="skills"
        className="flex min-h-screen flex-col items-left p-24 cian"
      >
        <Screen4 />
      </ScreenContainer>
      <ScreenContainer
        id="skills"
        className="flex min-h-screen flex-col items-left p-24 orange"
      >
        <Screen5 />
      </ScreenContainer>
      <ScreenContainer
        id="skills"
        className="flex min-h-screen flex-col items-left p-24 blue"
      >
        <Screen6 />
      </ScreenContainer>
      <ScreenContainer
        id="skills"
        className="flex min-h-screen flex-col items-left p-24 blue"
      >
        <Screen7 />
      </ScreenContainer>
      <ScreenContainer
        id="skills"
        className="flex min-h-screen flex-col items-left p-24 blue"
      >
        <Screen8 />
      </ScreenContainer>
    </main>
  );
}
