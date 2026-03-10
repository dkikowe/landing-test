import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectIndex() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Dark mode logic
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-background-dark dark:text-background-light transition-colors duration-300 min-h-screen flex flex-col">
      <style>{`
        .swiss-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 1.5rem;
        }
        .wireframe-hover:hover .wireframe-overlay {
            opacity: 0.15;
        }
      `}</style>
      
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 pt-32">
        <section className="swiss-grid mb-16">
            <div className="col-span-12 lg:col-span-8">
                <h2 className="text-4xl lg:text-8xl font-black tracking-tighter mb-6">Архив проектов</h2>
                <p className="max-w-xl text-lg opacity-70 leading-relaxed">
                    Professional index of architectural works and spatial interventions. Exploration of form, light, and urban integration through a technical lens.
                </p>
            </div>
        </section>

        <div className="sticky top-20 z-40 flex flex-wrap gap-2 mb-12 py-4 bg-background-light dark:bg-background-dark border-y border-background-dark/5 dark:border-background-light/5">
            <button 
                onClick={() => setFilter("all")}
                className={`px-6 py-2 text-[10px] font-mono tracking-widest uppercase transition-colors ${filter === 'all' ? 'bg-primary text-background-dark font-bold' : 'border border-background-dark/10 dark:border-background-light/10 hover:border-primary'}`}
            >
                All Works
            </button>
            <button 
                onClick={() => setFilter("architectural")}
                className={`px-6 py-2 text-[10px] font-mono tracking-widest uppercase transition-colors ${filter === 'architectural' ? 'bg-primary text-background-dark font-bold' : 'border border-background-dark/10 dark:border-background-light/10 hover:border-primary'}`}
            >
                Архитектурные объекты
            </button>
            <button 
                onClick={() => setFilter("media")}
                className={`px-6 py-2 text-[10px] font-mono tracking-widest uppercase transition-colors ${filter === 'media' ? 'bg-primary text-background-dark font-bold' : 'border border-background-dark/10 dark:border-background-light/10 hover:border-primary'}`}
            >
                Медиаархитектура
            </button>
            <button 
                onClick={() => setFilter("light")}
                className={`px-6 py-2 text-[10px] font-mono tracking-widest uppercase transition-colors ${filter === 'light' ? 'bg-primary text-background-dark font-bold' : 'border border-background-dark/10 dark:border-background-light/10 hover:border-primary'}`}
            >
                Световые инсталляции
            </button>
        </div>

        <div className="swiss-grid gap-y-16">
            {filteredProjects.map((project) => (
                <Link to={`/projects/${project.id}`} key={project.id} className={`${project.gridClass} group wireframe-hover cursor-pointer block`}>
                    <div className={`relative ${project.aspectClass} overflow-hidden bg-background-dark/5 dark:bg-background-light/5 mb-6`}>
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                            style={{backgroundImage: `url('${project.image}')`}}
                        ></div>
                        {project.overlayContent && (
                            <div className={`wireframe-overlay absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-500 ${project.id === '022' || project.id === '009' ? 'flex items-center justify-center' : ''}`}>
                                {project.overlayContent}
                            </div>
                        )}
                        {/* Empty overlay for hover effect if no specific content */}
                        {!project.overlayContent && (
                             <div className="wireframe-overlay absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-500"></div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
                        <div className="flex items-center gap-4 text-[11px] font-mono text-primary uppercase tracking-widest">
                            <span>ID: {project.id}</span>
                            <span className="w-1 h-1 bg-primary rounded-full"></span>
                            <span>{project.material}</span>
                            <span className="w-1 h-1 bg-primary rounded-full"></span>
                            <span>Scale: {project.scale}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        <section className="mt-32 pt-16 border-t border-background-dark/10 dark:border-background-light/10 swiss-grid">
            <div className="col-span-12 lg:col-span-4">
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-50 mb-8">Metadata Analysis</p>
                <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-background-dark/5 dark:border-background-light/5 pb-2">
                        <span className="text-xs uppercase tracking-widest">Total Works</span>
                        <span className="font-mono text-primary">142</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-background-dark/5 dark:border-background-light/5 pb-2">
                        <span className="text-xs uppercase tracking-widest">Global Locations</span>
                        <span className="font-mono text-primary">24</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-background-dark/5 dark:border-background-light/5 pb-2">
                        <span className="text-xs uppercase tracking-widest">Active Research</span>
                        <span className="font-mono text-primary">08</span>
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-end">
                <h4 className="text-3xl font-bold tracking-tight mb-6">Looking for a specific intervention?</h4>
                <button className="w-fit flex items-center gap-4 px-8 py-4 bg-background-dark dark:bg-background-light text-background-light dark:text-background-dark hover:bg-primary transition-colors group">
                    <span className="text-xs font-bold uppercase tracking-widest">Contact Archive Manager</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
            </div>
        </section>
      </main>
    </div>
  );
}
