// src/app/page.tsx
"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Highlights from "@/components/Highlights";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import { useHashScroll } from "@/hooks/useHashScroll";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import CTAButton from "@/components/CTAButton";

export default function HomePage() {
  useHashScroll();

  return (
    <>
      <Hero />
      <About id="about" />
      <Experience />
      <Education />
      <Highlights />
      <Skills />
      <section id="projects" className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <CTAButton href="/projects" label="See all projects" />
        </div>
      </section>
      <section id="contact" className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>
        <ContactForm />
      </section>
    </>
  );
}
