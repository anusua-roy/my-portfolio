"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";
import { FiRotateCcw } from "react-icons/fi"; // for reset icon
import ActionButton from "@/components/ActionButton";
import { CustomSelect } from "@/components/CustomSelect";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [domain, setDomain] = useState("All");
  const [visibility, setVisibility] = useState("All");

  const categories = [
    "All",
    ...new Set(PROJECTS.flatMap((p) => p.categories ?? [])),
  ];
  const domains = [
    "All",
    ...new Set(PROJECTS.map((p) => p.domain).filter(Boolean)),
  ];
  const visibilities = [
    "All",
    ...new Set(PROJECTS.map((p) => p.visibility).filter(Boolean)),
  ];

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setDomain("All");
    setVisibility("All");
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || (project.categories ?? []).includes(category);

      const matchesDomain = domain === "All" || project.domain === domain;
      const matchesVisibility =
        visibility === "All" || project.visibility === visibility;

      return (
        matchesSearch && matchesCategory && matchesDomain && matchesVisibility
      );
    });
  }, [search, category, domain, visibility]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      {/* Filters */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        {/* Search Input */}
        <div className="flex-1 min-w-[250px]">
          <label htmlFor="search" className="block text-sm mb-1 font-medium">
            Search
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full px-4 py-2 rounded border text-sm"
            style={{
              backgroundColor: "var(--card-bg)",
              color: "var(--foreground)",
              borderColor: "var(--card-border)",
              outlineColor: "var(--accent)",
            }}
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col">
          <CustomSelect
            label="Category"
            id="category"
            value={category}
            onChange={setCategory}
            options={categories}
            className="w-40"
          />
        </div>

        {/* Domain Dropdown */}
        <div className="flex flex-col">
          <CustomSelect
            label="Domain"
            id="domain"
            value={domain}
            onChange={setDomain}
            options={domains}
            className="w-40"
          />
        </div>

        {/* Visibility Dropdown */}
        <div className="flex flex-col">
          <CustomSelect
            label="Visibility"
            id="visibility"
            value={visibility}
            onChange={setVisibility}
            options={visibilities}
            className="w-40"
          />
        </div>

        {/* Reset Button */}
        <ActionButton
          onClick={resetFilters}
          className="mt-6 flex items-center gap-2 px-4 py-2 text-sm"
        >
          <FiRotateCcw size={16} /> Reset
        </ActionButton>
      </div>

      {/* Grid or No Results */}
      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          No projects matched your filters.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
