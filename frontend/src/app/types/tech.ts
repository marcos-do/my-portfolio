export type TechExperience = {
    title: string;
    description: string;
    years: Number;
}

export type Tech = {
    type: string;
    elements: TechExperience[];
    color: string
}