import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectDetailLight from "./ProjectDetailLight";
import ProjectDetailDark from "./ProjectDetailDark";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  // Logic to choose template
  // Architectural -> Light
  // Light / Media -> Dark
  const isLightTheme = project.category === "architectural";

  return isLightTheme ? (
    <ProjectDetailLight project={project} />
  ) : (
    <ProjectDetailDark project={project} />
  );
}
