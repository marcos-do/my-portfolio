import { getDescription } from "./services/descriptionService";

async function getData(): Promise<any> {
  const response = await getDescription();
  return response.message
}

export default async function Home() {
  const description = await getData()

  return (
    <main className="flex min-h-screen flex-col items-left p-24">
      <h1>Marcos de Oliveira</h1>
      <p className="p-12">
        {description}
      </p>
    </main>
  );
}
