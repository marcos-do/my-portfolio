import { Request, Response } from "express";
import { Tech, TechExperience } from "../types/tech";

export const getTechnologies = (req: Request, res: Response) => {
  const response: Tech[] = [
    {
      type: "Frontend",
      color: "blue",
      elements: [
        {
          title: "React",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "Next.js",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "Tailwind",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "Angular",
          description: "Web development projects with React technology",
          years: 3,
        },
      ],
    },
    {
      type: "Backend",
      color: "green",
      elements: [
        {
          title: "Node.js",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "Express",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "NestJS",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "Java Spring Boot",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "Python FastAPI",
          description: "Web development projects with React technology",
          years: 3,
        },
      ],
    },
    {
      type: "Database engines",
      color: "cian",
      elements: [
        {
          title: "PostgreSQL",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "MySQL",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "MongoDB",
          description: "Web development projects with React technology",
          years: 3,
        },
      ],
    },
    {
      type: "Cloud certifications",
      color: "orange",
      elements: [
        {
          title: "AWS Cloud Practitioner",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "IBM Cloud Advocate v2",
          description: "Web development projects with React technology",
          years: 3,
        },
      ],
    },
    {
      type: "CI/CD",
      color: "blue",
      elements: [
        {
          title: "Git",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "GitHub",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "GitLab",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "Jenkins",
          description: "Web development projects with React technology",
          years: 3,
        },
      ],
    },
    {
      type: "Infrastructure",
      color: "blue",
      elements: [
        {
          title: "EC2",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "IBM Cloud Kubernetes Service",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "Docker",
          description: "Web development projects with React technology",
          years: 3,
        },
      ],
    },
    {
      type: "Languages",
      color: "blue",
      elements: [
        {
          title: "EC2",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "JavaScript",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "TypeScript",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "SQL",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "Java",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "Python",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "HTML5",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "CSS",
          description: "Web development projects with React technology",
          years: 3,
        },
        {
          title: "SaSS",
          description: "Web development projects with React technology",
          years: 3,
        },
      ],
    },
  ];
  res.status(200).send(response);
};
