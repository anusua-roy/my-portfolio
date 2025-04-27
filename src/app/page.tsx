"use client";

import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";
import Highlights from "@/components/home/Highlights";
import Skills from "@/components/home/Skills";
import ContactForm from "@/components/home/ContactForm";
import ProjectCard from "@/components/common/ProjectCard";
import CTAButton from "@/components/ui/button/CTAButton";
import { useHashScroll } from "@/hooks/useHashScroll";
import { useProjectsStore } from "@/store/projectsStore";

export default function HomePage() {
  useHashScroll();

  const { projects } = useProjectsStore();

  return (
    <>
      <Hero />
      <About id="about" />
      <Experience />
      <Education />
      <Highlights />
      <Skills />

      {/* Projects Section */}
      {projects.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          Loading projects...
        </div>
      ) : (
        <section id="projects" className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <CTAButton href="/projects" label="See all projects" />
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>
        <ContactForm />
      </section>
    </>
  );
}
