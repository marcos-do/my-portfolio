import { Request, Response } from "express";
import { TechExperience } from "../types/tech";

export const getTechnologies = (req: Request, res: Response) => {
  const response: TechExperience[] = [
    { title: "React", description: "Web development projects with React technology", years: 3 },
  ];
  res.status(200).send(response);
};
