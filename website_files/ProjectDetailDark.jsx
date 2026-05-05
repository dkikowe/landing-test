import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectDetailDark({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      <style>{`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="px-6 py-8 md:px-20 lg:px-40">
            <div className="overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
                <div 
                    className="aspect-[21/9] w-full bg-cover bg-center flex flex-col justify-end p-8 md:p-16 relative" 
                    style={{backgroundImage: `linear-gradient(to top, rgba(18,17,16,0.9) 0%, rgba(18,17,16,0) 60%), url('${project.image}')`}}
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4 text-primary">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-xs font-bold uppercase tracking-widest">Case Study</span>
                        </div>
                        <h2 className="text-4xl font-black text-white md:text-6xl lg:text-7xl leading-none mb-4">{project.title}</h2>
                        <p className="text-slate-300 text-lg md:text-xl font-light">{project.description}</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 px-6 py-2 text-xs font-medium uppercase tracking-wider text-primary/60 md:px-20 lg:px-40">
            <Link to="/projects" className="hover:text-primary transition-colors">Архив проектов</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary">{project.title}</span>
        </div>

        {/* 1. Художественное видение */}
        <section className="px-6 py-16 md:px-20 lg:px-40 border-b border-primary/5" id="vision">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                    <span className="text-primary font-mono text-sm mb-4 block">01 / Concept</span>
                    <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100 md:text-4xl">Художественное видение</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        {project.details?.concept || "Описание концепции..."}
                    </p>
                </div>
                <div className="lg:col-span-7">
                    <div className="aspect-video w-full rounded-xl bg-slate-200 dark:bg-slate-800 bg-cover bg-center overflow-hidden" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIJ2KTBmU4gkG2pgnEFAQ2kQR-_Puw6DtGc8n-Yqty6w4RnQlxaRP1LV2VFgV2jzE0gt1wrC-Ydt0QyBvCVX03cJGhi8Prq6N78jzEBb-HJq4uKWtYmhHYILrd655RreZsjrk35Nh-81-avwC60Ek3W35E-gSUelkcJKbbvokkA2mLdH2J7zAy-Fnk9EyfkbHEVT0JAvlmoC1QOvP1gY0960HDaT2y5z3JHsuFT1S7lQTDX3fl9TyTygjMQhU-gBorqMuexa22caJm')"}}></div>
                </div>
            </div>
        </section>

        {/* 2. Инженерная лаборатория */}
        <section className="bg-primary/5 px-6 py-16 md:px-20 lg:px-40" id="engineering">
            <div className="max-w-4xl mb-12">
                <span className="text-primary font-mono text-sm mb-4 block">02 / Engineering</span>
                <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100 md:text-4xl">Инженерная лаборатория</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.details?.engineering || "Описание инженерных решений..."}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col gap-4">
                    <div className="aspect-square rounded-lg bg-slate-900 border border-primary/20 flex items-center justify-center overflow-hidden group">
                        <div className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs0ZEVstfUCqzkIw2cutfQMR1Hfw99rwcX_eMRl2fTWIa_Gz7w15N_0cxMYMf7AcowZ9yNupEMmbmw-6fZfWmHUVyfCGZtZeDnFMynOnhUmrGocA7IskVPwMc0FEXYD6841rRZMz6zC7JDN2iFR3CMIMNmeLECQHzHLIDEdeTmRVfPr1wDwv-CE5HPlUkQohRHVPtgj1xW_OFDZ2IcN-0wujuVKUwyAf6B_kBNAZMO8OPDLwpUD9qvxPxUgCUKrJOjvwWD_Phn7VDB')"}}></div>
                    </div>
                    <div>
                        <h4 className="font-mono text-sm font-bold text-primary">02.1 / Топологическая оптимизация</h4>
                        <p className="text-xs text-slate-500 mt-1">Снижение веса на 34% без потери жесткости.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="aspect-square rounded-lg bg-slate-900 border border-primary/20 flex items-center justify-center overflow-hidden group">
                        <div className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBMgFoAmIcWkTRlZNwiCRYMPYH0sMtN1UFfDwhW4x-Il7QI3SK1YTB7qRrszo2ANMXhZfyJTh7gOXcexywz81Qjr-BbqnwHiFyXrbsi3pgINAZ8VZm5fbhsbVD9vYQyWC9OWLO5poFokhuPVqPS3lqfSuRPp5i4sGb9dXWPJT6jGGdO8JikVrXGlIv5KsYrnGx0EceEXX1meuRLUAsqXbOC2P-z4COQUQAf5vMg2wknw2Q-Wu8nR-lnvdxynDvDEWFC9oSHRXXWpc8')"}}></div>
                    </div>
                    <div>
                        <h4 className="font-mono text-sm font-bold text-primary">02.2 / Расчет ветровых нагрузок</h4>
                        <p className="text-xs text-slate-500 mt-1">Анализ потоков для открытых зон атриума.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="aspect-square rounded-lg bg-slate-900 border border-primary/20 flex items-center justify-center overflow-hidden group">
                        <div className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIdIAVqPCA0KJPGZCIEV0sVKGbMU_PrXJKEwDg6zIH87yWH6eEFMGs8zZVsq60Hbq8x0WqZmqSUwn7FyRVz8Z3KH7dpYvrjW2jsgwr5cb5UEIa0SYbDg4hVQCUjtvRUAdjvWs_WOSBAPWSZuLrbTeCb49D9IQ9nKnuq-XRkwEfAPQL4USrcGyKQ1DaxlhTdmxwrrUJr7M7OpC1e0L2wy-c-SOf77RhRgG-bnYnYl8wR8C29c5IOEcVDCbdYF0REWW34jM40-HIm-2E')"}}></div>
                    </div>
                    <div>
                        <h4 className="font-mono text-sm font-bold text-primary">02.3 / Узлы сопряжения</h4>
                        <p className="text-xs text-slate-500 mt-1">Скрытые крепления с точностью до 0.1мм.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. История производства */}
        <section className="px-6 py-16 md:px-20 lg:px-40" id="production">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmdppvBKUmwd2v9pdC8lI-SOIpLajeKkJqTFsNvCJsdBBWl0nb0L8MlQALA97vHViFgZg5e9HJz0WLUDsmK_W0P9xrlddCOBkakopHa-_kDVK9Pv6YuiDZ7p84YD4_Hj5_Ju5LJXtD4CDWkyupFWt1liFKu7YOBo4rTO6ZiEnwDejbKKaW28Nfc45fPOEHncO3GBiYrufvq6Puz-mZ6Q7minllUiTd8aC4E3rBWF6Uquh-9UtjPNKJ3otxv0X92nWBQXN0KWFxPaUX')"}}></div>
                        <div className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden mt-8" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXsYsTD2Yz7z0wWhzFApVg_3AKRYl4V_zUws89cItpbTwJfDAIwzwC7YVMpVYM8NTASXjD6u0sVgqqQsNXLcl-oxNow9rPnjomf9bFKy08KZ0PFVTWpOTaku9Nmfhbbrxk-IBWFKMA6KEcqouL12KvSvR8gHeY68kYV5mHF50yns-TDAMgOJ9crexuc7GGuNVGQNax_LVWe63jPeVjJMkPXNrJnYeRToYZAw_0H7FQ5NQo2VKHp5cZkFQy-bHngYlti4PZFaUeOHC0')"}}></div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <span className="text-primary font-mono text-sm mb-4 block">03 / Production</span>
                    <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100 md:text-4xl">История производства</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        {project.details?.production || "Описание процесса производства..."}
                    </p>
                    <div className="flex items-start gap-4 p-4 border-l-2 border-primary bg-primary/5">
                        <span className="material-symbols-outlined text-primary">info</span>
                        <p className="text-sm font-medium italic text-slate-700 dark:text-slate-300">
                            "Самым сложным этапом была финишная отделка — мы искали оттенок, который бы поглощал избыточный глянец интерьера отеля, но сохранял глубину."
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. Технические характеристики */}
        <section className="px-6 py-16 md:px-20 lg:px-40 bg-slate-100 dark:bg-background-dark/50" id="specs">
            <div className="text-center mb-12">
                <span className="text-primary font-mono text-sm mb-2 block">04 / Specifications</span>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Технические характеристики</h3>
            </div>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-primary/20 bg-background-light dark:bg-background-dark shadow-2xl shadow-primary/5">
                <table className="w-full border-collapse font-mono text-sm">
                    <thead>
                        <tr className="border-b border-primary/20 bg-primary/10">
                            <th className="px-6 py-4 text-left font-bold text-primary uppercase tracking-tighter">Параметр</th>
                            <th className="px-6 py-4 text-left font-bold text-primary uppercase tracking-tighter">Значение</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/10">
                        {project.details?.specs?.map((spec, index) => (
                            <tr key={index} className="hover:bg-primary/5 transition-colors">
                                <td className="px-6 py-4 text-slate-500 uppercase">{spec.label}</td>
                                <td className="px-6 py-4 text-slate-900 dark:text-slate-100">{spec.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
      </main>
    </div>
  );
}
