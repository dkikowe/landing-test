import React, { useEffect } from "react";
export default function ProjectDetailLight({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="px-6 lg:px-40 pt-16 pb-12">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase">
                        <span className="h-[1px] w-8 bg-primary"></span>
                        Case Study #{project.id}
                    </div>
                    <h1 className="text-slate-900 dark:text-slate-100 text-5xl lg:text-7xl font-black leading-none tracking-tighter uppercase">
                        {project.title}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </div>
        </section>

        {/* Section 1: Художественное видение */}
        <section className="bg-white dark:bg-background-dark/50 py-20 px-6 lg:px-40">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                        <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight mb-6">1. Художественное видение</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
                            {project.details?.concept || "Описание концепции..."}
                        </p>
                        <div className="flex items-center gap-4 py-4 border-y border-neutral-light dark:border-neutral-dark">
                            <span className="material-symbols-outlined text-primary">circle</span>
                            <span className="font-mono text-sm">Сферическая доминанта</span>
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-[3/4] rounded-xl bg-cover bg-center" style={{backgroundImage: `url('${project.image}')`}}></div>
                            <div className="flex flex-col gap-4">
                                <div className="aspect-square rounded-xl bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUKKn5oC_8Czx8w33VMu560HdRLAH-ZqOBLGNF4h82su2rMyBK3OeGdqhf9w0tbBnoZpS-rC9nN482S1cnlPFADA0LiaxSM4wY3iEPBmzeU3ETt3q6GKqNC4TJUHak8lM5VItBF_o48XGaCVq2aEQiyBP1XphCTj2KJWqG1WPxQ9siTXTCjUEKqJ8rBJTB-rSbBgFdUb9JCG6H1eTnnUbMuLKoWn4pP_mkRiAzLAziANcVuUWJe7LtatuxXJbj8w_Wy-m-Bp7CjadX')"}}></div>
                                <div className="aspect-square rounded-xl bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXn0mg1DxAQlNtM-COv2hBcCzsSEh2qo6SjztilVBrYOBUj8R8uXcyPbFMK1plBQ-KXFSzC99wJ5fcsS9fodCLIDdgZk8Smk-uwkzMZiFNtkzZs0cElbXjbPnhU-y6Fj_iUfTZIZk9F1YibNTzYlIbOrQVufx-9JwtPol39lV2qz8KcoPQ3BwEzZmOqqbSF6Z6WBHbtEJ7dOwPhKduYKLxV1fOhb6KIy7k1alKxNVZxIENC_SSBRMBpkBTbZURg01oTO6m4DKmrBrP')"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 2: Инженерная лаборатория (Dark) */}
        <section className="bg-background-dark text-slate-100 py-24 px-6 lg:px-40">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold tracking-tight">2. Инженерная лаборатория</h2>
                        <p className="text-slate-400 max-w-xl">
                            {project.details?.engineering || "Описание инженерных решений..."}
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="relative group aspect-square bg-neutral-dark rounded-xl overflow-hidden border border-white/10">
                            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop')]"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-background-dark to-transparent">
                                <p className="font-mono text-xs text-primary mb-2">01 / BIM Modeling</p>
                                <h3 className="font-bold">Цифровое прототипирование</h3>
                            </div>
                        </div>
                        <div className="relative group aspect-square bg-neutral-dark rounded-xl overflow-hidden border border-white/10">
                            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop')]"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-background-dark to-transparent">
                                <p className="font-mono text-xs text-primary mb-2">02 / Assembly</p>
                                <h3 className="font-bold">Узлы примыкания</h3>
                            </div>
                        </div>
                        <div className="relative group aspect-square bg-neutral-dark rounded-xl overflow-hidden border border-white/10">
                            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1000&auto=format&fit=crop')]"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-background-dark to-transparent">
                                <p className="font-mono text-xs text-primary mb-2">03 / Stress Test</p>
                                <h3 className="font-bold">Анализ напряжений</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 3: История производства */}
        <section className="py-24 px-6 lg:px-40">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="aspect-video bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0J24AlLMHIqDd6eBO14CBSL0CiwScE_kYyn8bWs9ATLC0uxlxVyLOL5IzRvTZyfvlWNhkfWnrd-EmC0-mZVC4LPU3PL7rGj-02IXjgm3VhgpoVk5MjbSA-2gsm0hOGB9-5v9URRkcPkhpnlnHxdW0MuiIlXRjC-vtJPI7ba4268c7RmNwywcP_DnpVwaMn8sTDLx-T9CqEjpLK4F0JF3xbuLUO8dIQrW7foX4H-leJl0tlRNnNTIDC7OK8wcd6xax9XmwBIoCSHbH')"}}></div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6">3. История производства</h2>
                        <div className="space-y-6 text-slate-600 dark:text-slate-400">
                            <p>{project.details?.production || "Описание процесса производства..."}</p>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <div className="flex-none w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">format_paint</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-slate-100">Патинирование</h4>
                                        <p className="text-sm">Ручное нанесение слоев оксидов для создания глубокого, живого цвета.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-none w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">precision_manufacturing</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-slate-100">Фрезеровка</h4>
                                        <p className="text-sm">Точнейшая обработка стыковочных фланцев на станках с ЧПУ.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 4: Технические характеристики */}
        <section className="bg-neutral-light dark:bg-neutral-dark/30 py-24 px-6 lg:px-40">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-3xl font-bold mb-10">4. Технические характеристики</h2>
                <div className="overflow-x-auto">
                    <table className="w-full font-mono text-sm border-collapse">
                        <thead>
                            <tr className="text-primary uppercase tracking-wider text-xs border-b border-primary/30">
                                <th className="py-4 text-left font-medium">Параметр</th>
                                <th className="py-4 text-left font-medium">Значение</th>
                                <th className="py-4 text-left font-medium">Примечание</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {project.details?.specs?.map((spec, index) => (
                                <tr key={index}>
                                    <td className="py-4 font-bold">{spec.label}</td>
                                    <td className="py-4">{spec.value}</td>
                                    <td className="py-4 text-slate-500">{spec.note || "-"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
