export type TechExperience = {
    title: string;
    description: string;
    years: Number;
    path?: string;
}

export type Tech = {
    type: string;
    elements: TechExperience[];
    color: string
}