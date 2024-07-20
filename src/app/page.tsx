import Experience from "@/views/Experience/Experience";
import Hero from "@/views/Hero/Hero";
import Projects from "@/views/Projects/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
