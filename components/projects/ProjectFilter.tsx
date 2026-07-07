"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectCategories, projects, type ProjectCategory } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

type Filter = "All" | ProjectCategory;

export function ProjectFilter() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="mt-10">
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {projectCategories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive ? "text-white" : "text-text-muted hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-secondary"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {!isActive && (
                <span className="absolute inset-0 -z-10 rounded-full border border-border/60 bg-surface/50" />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-8 text-sm text-text-dim">
        Showing {filtered.length} of {projects.length} projects
      </p>
    </div>
  );
}
