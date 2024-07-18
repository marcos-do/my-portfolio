import { getDescription } from "@/app/services/descriptionService";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-left p-24">
      <h1>Project A</h1>
      <p className="p-12">
        This is project A
      </p>
    </main>
  );
}
