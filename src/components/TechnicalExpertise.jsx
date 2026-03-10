import React, { useEffect } from "react";
export default function TechnicalExpertise() {
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

  return (
    <div className="bg-[#F9F9F7] dark:bg-[#0A0A0A] font-display text-slate-900 dark:text-slate-100 selection:bg-[#BFA37E] selection:text-white transition-colors duration-300 min-h-screen">
      <style>{`
        .swiss-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 24px;
        }
        .wireframe-bg {
            background-image: radial-gradient(circle, #bca180 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.05;
        }
        .text-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
        }
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-5px);
        }
        .modal {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 100;
        }
        .modal:target {
            display: flex;
        }
        .modal-body {
            line-height: 1.8;
        }
        .condensed-header {
            font-stretch: extra-condensed;
            letter-spacing: -0.02em;
        }
        .abstract-pattern {
            background-color: #050505;
            background-image: 
                linear-gradient(rgba(188, 161, 128, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(188, 161, 128, 0.03) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, rgba(188, 161, 128, 0.1) 0%, transparent 70%);
            background-size: 80px 80px, 80px 80px, 100% 100%;
        }
        .abstract-lines {
            position: absolute;
            inset: 0;
            overflow: hidden;
            pointer-events: none;
        }
        .abstract-line {
            position: absolute;
            background: linear-gradient(90deg, transparent, #bca180, transparent);
            height: 1px;
            width: 100%;
            opacity: 0.15;
            filter: blur(1px);
        }
        /* Font mappings */
        .font-display { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'Roboto Mono', monospace; }
      `}</style>

      <main className="pt-32 pb-20 overflow-x-hidden">
        <section className="max-w-[1440px] mx-auto px-6 lg:px-20 mb-32">
          <div className="swiss-grid">
            <div className="col-span-12 lg:col-span-8">
              <span className="font-mono text-xs text-[#BFA37E] mb-4 block tracking-[0.3em]">00 // CAPABILITIES</span>
              <h2 className="text-4xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] mb-8 uppercase">Наши <br/>Компетенции</h2>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-end pb-2">
              <p className="font-mono text-[10px] text-slate-400 leading-relaxed uppercase tracking-tighter">
                monumforma / architectural excellence / 2024<br/>
                specialized in complex geometry and material science / 
                international standards of quality and aesthetics
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] mx-auto px-6 lg:px-20 mb-40">
          <div className="swiss-grid border-t border-[#BFA37E]/20 pt-10">
            <div className="col-span-12 lg:col-span-4 mb-10 lg:mb-0">
              <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight leading-none">Архитектурные<br/>арт-объекты</h3>
              <p className="font-mono text-[11px] text-[#BFA37E] mb-8 tracking-widest uppercase">ARCHITECTURAL ART / BRONZE / CORTEN / METALLURGY</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mb-6">
                Мы проектируем и создаем монументальные скульптуры и арт-инсталляции мирового класса. Наша экспертиза в работе с литой бронзой и кортеном позволяет реализовывать объекты любой сложности.
              </p>
              <a className="inline-flex items-center gap-4 px-8 py-4 bg-[#BFA37E] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-all group" href="#deep-dive-arch">
                Explore Expertise
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <span className="font-mono text-[10px] text-[#BFA37E] block border-b border-[#BFA37E]/20 pb-2 mb-2 uppercase">Metallurgy</span>
                  <p className="text-[10px] text-slate-500 uppercase">Сложное художественное литье и прецизионная обработка.</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#BFA37E] block border-b border-[#BFA37E]/20 pb-2 mb-2 uppercase">Public Art</span>
                  <p className="text-[10px] text-slate-500 uppercase">Проектирование знаковых объектов городской среды.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="group relative overflow-hidden aspect-[3/4] bg-slate-200 dark:bg-slate-800">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi1alm_0HpYV8r5NHVUjf3nLlRd4B9sdqqy91yLFSPbqlvsjIIRZ4xAg7vdL1W3PDAGdMREeJJJnw4LYG-owc2vGNozrg_1hliPUAymMMtRIA4ZnBUDCqPU8ewxh39DU7e0jPC4HVB0OumJDKqwiK-q09S4FOrvZTbnu3UHWienx9K7P7yeoo0Dj3ReIL8kzadvjbUyTko5qlfr2j9vR92Nqh02Hw7LVlsItJzftNyBjysSfoDK5h4IxMq868Ly_8GDiBKNPRKz6B0')"}}></div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold uppercase mb-2">Fluid Geometry</h4>
                    <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                      <p>Material: Cast Bronze</p>
                      <p>Tech: Generative Design</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden aspect-[3/4] bg-slate-200 dark:bg-slate-800">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-DSxB-RgWb1ZCzKTainfgyb4apl88N70UkGTBCkh1zQ7CQKRYf2sgSPlUCEiJF4ykpqv6ROF9RhM7oTVE68Gq30vgRcz1Y2YFMLSGynjWi4B-6ZFCAp83aKc0edAz6_3pbLPIaH77fLRqu_XUxFPcI8kqHOUwKnfgRmPj5kVpXhj6Ww9HLk-qNBU8772tXz5ZfkAcuIGN-dH-joFxw7essoeAOKULTyMKzPbkwojXCANNrs7Z57LJYIF8_dsW9MmO1KyWbsJf4mUB')"}}></div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold uppercase mb-2">Industrial Core</h4>
                    <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                      <p>Material: Corten Steel</p>
                      <p>Tech: Laser Processing</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden aspect-[3/4] bg-slate-200 dark:bg-slate-800">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs-yWY6fgR1gXrOpQxlpdb0T0i8kKJhUuRLLmkRpM1HVhB7CflZCErASd_f3RcBgVnVgobmL40izjsLs1CSOpsBp9XbsZoty-vnBatqPB92-w-O5RrGQHUTxhRPuUOpTtzlUZ8WHSSqKLUpvTNVyUDxX2mvQ9uYh4z-i7IpfuNeuvXrCGMCnSlX9gNcwHfIojhCgQTLaZnGVMzM73uQIJ-VayGg9PPD8py82L9brQjKJRSVWVlpAH64Q4p5L2A6iZDNMgnM3rtklEX')"}}></div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold uppercase mb-2">Public Landmark</h4>
                    <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                      <p>Material: Stainless Steel</p>
                      <p>Tech: Mirror Polishing</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden aspect-[3/4] bg-slate-200 dark:bg-slate-800">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDH24sapg6vn27w9GnwW0PpxNGK6qKbgNdcl9EbbjFR7X5A87SgH6evk7TxcfnvfJDIEPaxCC-0wleR7h324P0aFppAvlmXCI8vIk7crmkJBh4pE79efZps9bd1FgXu1QqaxZFawhedyjbCZaip9GbmthulDsoU00Ac6l0TGmL6ULQtCSOBieq2tFHd7VOH3Lx_0T_WSlJ1Vl1Lz_s4jR-OjZxieHly-8XaAIXjz9nctKPdyeeM3fEbxlCQliSAAN2nYb9OhrxSaByi')"}}></div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold uppercase mb-2">Tactile Texture</h4>
                    <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                      <p>Material: Hand-Patinated Bronze</p>
                      <p>Tech: Precision Milling</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden aspect-[3/4] bg-slate-200 dark:bg-slate-800">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJq_171BA4ZR9Ks2rFu2Ej3im6WLDStwxdFNWMLrJOjPYkff14XcUd-FPBYeW1jEthp2Nf3k5BURnxyXE5W7UPwxgNIFEHyRw90zNZwhFAmTSdrxTLaetnt6ReM3lgnugiS4bnG4I-TNDKPFoYwVY3sIbgTJjWs-LV7usV4xEQyV3WOcsj5bpxMGPtWDexze03zTEiE09HjxJfJutpoyc4_s7vwAX4OzFLVE43XQDavKK2uAdOv7SG0bGBq8ldZas4QC8mHCGopp0-')"}}></div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold uppercase mb-2">Garden Object</h4>
                    <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                      <p>Material: Aluminum Alloy</p>
                      <p>Tech: Argon Welding</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden aspect-[3/4] bg-slate-200 dark:bg-slate-800">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAo2zFujsO4WUbx4oSvzUnyQklT2LTVAwsx-x1KPJ4BwDXRCSQWjYylWsEzzdTR9ed7ZoOxhm7e9LrwW0i7pbOf7IiA9vnEz_ZwOh9JaRfUH87L4v1ITwVxLd5pnC2IWBBPPgSOAYYCCbN2f4D-hZvpOURNXCzfcqPoVvfU3cWW8JlS9qKPFLbhLq3cspW6zK5Bga9JPXHcAjs-PZzOOtqhtJf0QyrZ4F8CJ84ublr-hr9cKlLTnNwt4M3GSJfexOzL7sV42hlbPBRw')"}}></div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold uppercase mb-2">Hidden Frame</h4>
                    <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                      <p>Material: Carbon Steel</p>
                      <p>Tech: Structural BIM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#0A0A0A] text-slate-100 py-32 relative overflow-hidden">
          <div className="wireframe-bg absolute inset-0"></div>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
            <div className="swiss-grid items-center">
              <div className="col-span-12 lg:col-span-7">
                <div className="aspect-video bg-slate-900 border border-[#BFA37E]/20 flex items-center justify-center relative group overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-80 transition-opacity duration-1000" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs-yWY6fgR1gXrOpQxlpdb0T0i8kKJhUuRLLmkRpM1HVhB7CflZCErASd_f3RcBgVnVgobmL40izjsLs1CSOpsBp9XbsZoty-vnBatqPB92-w-O5RrGQHUTxhRPuUOpTtzlUZ8WHSSqKLUpvTNVyUDxX2mvQ9uYh4z-i7IpfuNeuvXrCGMCnSlX9gNcwHfIojhCgQTLaZnGVMzM73uQIJ-VayGg9PPD8py82L9brQjKJRSVWVlpAH64Q4p5L2A6iZDNMgnM3rtklEX')"}}></div>
                  <span className="material-symbols-outlined text-7xl text-[#BFA37E] animate-pulse relative z-10">motion_mode</span>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 pl-0 lg:pl-12">
                <span className="font-mono text-xs text-[#BFA37E] mb-2 block tracking-widest uppercase">02 // DIGITAL & MOTION</span>
                <h3 className="text-3xl md:text-5xl font-black mb-8 uppercase leading-[0.9]">Медиа<br/>архитектура</h3>
                <p className="text-sm text-slate-400 mb-8 max-w-md">
                  Мы интегрируем передовые цифровые технологии в физическую оболочку зданий, создавая живые организмы, реагирующие на окружающую среду.
                </p>
                <a className="inline-flex items-center gap-4 px-8 py-4 border border-[#BFA37E] text-[#BFA37E] text-[11px] font-bold uppercase tracking-widest hover:bg-[#BFA37E] hover:text-white transition-all group mb-12" href="#deep-dive-media">
                  Explore Expertise
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#BFA37E]/30 pl-6">
                    <h4 className="font-mono text-[11px] text-[#BFA37E] uppercase mb-1">Kinetic Chandeliers</h4>
                    <p className="text-[10px] text-slate-500 uppercase">Сложные двигающиеся системы и мехатроника.</p>
                  </div>
                  <div className="border-l-2 border-[#BFA37E]/30 pl-6">
                    <h4 className="font-mono text-[11px] text-[#BFA37E] uppercase mb-1">Smart Envelopes</h4>
                    <p className="text-[10px] text-slate-500 uppercase">Медиафасады с адаптивным управлением яркостью.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-40">
          <div className="swiss-grid mb-20 items-end">
            <div className="col-span-12 lg:col-span-6">
              <span className="font-mono text-xs text-[#BFA37E] mb-4 block tracking-[0.3em]">03 // ATMOSPHERE</span>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-[0.9]">Световые<br/>пространства</h3>
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col items-start gap-6">
              <p className="text-slate-500 max-w-md text-sm uppercase tracking-tighter leading-relaxed">
                Комплексное световое проектирование: от концептуальной иллюминации фасадов до праздничного оформления городских площадей.
              </p>
              <a className="inline-flex items-center gap-4 px-8 py-4 bg-[#0A0A0A] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#BFA37E] transition-all group" href="#deep-dive-light">
                Explore Expertise
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDH24sapg6vn27w9GnwW0PpxNGK6qKbgNdcl9EbbjFR7X5A87SgH6evk7TxcfnvfJDIEPaxCC-0wleR7h324P0aFppAvlmXCI8vIk7crmkJBh4pE79efZps9bd1FgXu1QqaxZFawhedyjbCZaip9GbmthulDsoU00Ac6l0TGmL6ULQtCSOBieq2tFHd7VOH3Lx_0T_WSlJ1Vl1Lz_s4jR-OjZxieHly-8XaAIXjz9nctKPdyeeM3fEbxlCQliSAAN2nYb9OhrxSaByi')"}}></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold uppercase mb-2">Urban Glow</h4>
                <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                  <p>Material: Optical Glass</p>
                  <p>Tech: Dynamic Illumination</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJq_171BA4ZR9Ks2rFu2Ej3im6WLDStwxdFNWMLrJOjPYkff14XcUd-FPBYeW1jEthp2Nf3k5BURnxyXE5W7UPwxgNIFEHyRw90zNZwhFAmTSdrxTLaetnt6ReM3lgnugiS4bnG4I-TNDKPFoYwVY3sIbgTJjWs-LV7usV4xEQyV3WOcsj5bpxMGPtWDexze03zTEiE09HjxJfJutpoyc4_s7vwAX4OzFLVE43XQDavKK2uAdOv7SG0bGBq8ldZas4QC8mHCGopp0-')"}}></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold uppercase mb-2">Atmospheric Void</h4>
                <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                  <p>Material: Diffused LED</p>
                  <p>Tech: Smart Controls</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAo2zFujsO4WUbx4oSvzUnyQklT2LTVAwsx-x1KPJ4BwDXRCSQWjYylWsEzzdTR9ed7ZoOxhm7e9LrwW0i7pbOf7IiA9vnEz_ZwOh9JaRfUH87L4v1ITwVxLd5pnC2IWBBPPgSOAYYCCbN2f4D-hZvpOURNXCzfcqPoVvfU3cWW8JlS9qKPFLbhLq3cspW6zK5Bga9JPXHcAjs-PZzOOtqhtJf0QyrZ4F8CJ84ublr-hr9cKlLTnNwt4M3GSJfexOzL7sV42hlbPBRw')"}}></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold uppercase mb-2">Linear Flow</h4>
                <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                  <p>Material: RGBW Strips</p>
                  <p>Tech: DMX Networking</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi1alm_0HpYV8r5NHVUjf3nLlRd4B9sdqqy91yLFSPbqlvsjIIRZ4xAg7vdL1W3PDAGdMREeJJJnw4LYG-owc2vGNozrg_1hliPUAymMMtRIA4ZnBUDCqPU8ewxh39DU7e0jPC4HVB0OumJDKqwiK-q09S4FOrvZTbnu3UHWienx9K7P7yeoo0Dj3ReIL8kzadvjbUyTko5qlfr2j9vR92Nqh02Hw7LVlsItJzftNyBjysSfoDK5h4IxMq868Ly_8GDiBKNPRKz6B0')"}}></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold uppercase mb-2">Golden Echo</h4>
                <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                  <p>Material: Brass & Light</p>
                  <p>Tech: Ambient Sculpting</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-DSxB-RgWb1ZCzKTainfgyb4apl88N70UkGTBCkh1zQ7CQKRYf2sgSPlUCEiJF4ykpqv6ROF9RhM7oTVE68Gq30vgRcz1Y2YFMLSGynjWi4B-6ZFCAp83aKc0edAz6_3pbLPIaH77fLRqu_XUxFPcI8kqHOUwKnfgRmPj5kVpXhj6Ww9HLk-qNBU8772tXz5ZfkAcuIGN-dH-joFxw7essoeAOKULTyMKzPbkwojXCANNrs7Z57LJYIF8_dsW9MmO1KyWbsJf4mUB')"}}></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold uppercase mb-2">Steel Pulse</h4>
                <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                  <p>Material: Perforated Steel</p>
                  <p>Tech: Backlit Motion</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs-yWY6fgR1gXrOpQxlpdb0T0i8kKJhUuRLLmkRpM1HVhB7CflZCErASd_f3RcBgVnVgobmL40izjsLs1CSOpsBp9XbsZoty-vnBatqPB92-w-O5RrGQHUTxhRPuUOpTtzlUZ8WHSSqKLUpvTNVyUDxX2mvQ9uYh4z-i7IpfuNeuvXrCGMCnSlX9gNcwHfIojhCgQTLaZnGVMzM73uQIJ-VayGg9PPD8py82L9brQjKJRSVWVlpAH64Q4p5L2A6iZDNMgnM3rtklEX')"}}></div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold uppercase mb-2">Crystal Axis</h4>
                <div className="font-mono text-[9px] text-[#BFA37E] uppercase space-y-1">
                  <p>Material: Optical Acrylic</p>
                  <p>Tech: Refraction Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#050505] group/section">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 transition-transform duration-1000 group-hover/section:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAo2zFujsO4WUbx4oSvzUnyQklT2LTVAwsx-x1KPJ4BwDXRCSQWjYylWsEzzdTR9ed7ZoOxhm7e9LrwW0i7pbOf7IiA9vnEz_ZwOh9JaRfUH87L4v1ITwVxLd5pnC2IWBBPPgSOAYYCCbN2f4D-hZvpOURNXCzfcqPoVvfU3cWW8JlS9qKPFLbhLq3cspW6zK5Bga9JPXHcAjs-PZzOOtqhtJf0QyrZ4F8CJ84ublr-hr9cKlLTnNwt4M3GSJfexOzL7sV42hlbPBRw')"}}></div>
          <div className="absolute inset-0 opacity-0 group-hover/section:opacity-20 transition-opacity duration-700 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs>
                <pattern height="10" id="tech-grid" patternUnits="userSpaceOnUse" width="10">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#BFA37E" strokeWidth="0.1"></path>
                  <circle cx="0" cy="0" fill="#BFA37E" r="0.2"></circle>
                </pattern>
              </defs>
              <rect fill="url(#tech-grid)" height="100" width="100"></rect>
            </svg>
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 w-full">
            <div className="swiss-grid">
              <div className="col-span-12 lg:col-span-6 flex flex-col justify-center p-8 lg:p-16 border border-white/5 bg-black/20 backdrop-blur-sm group hover:border-[#BFA37E]/40 transition-all duration-700 hover:shadow-[0_0_50px_-12px_rgba(191,163,126,0.2)]">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-[10px] text-[#BFA37E] tracking-[0.5em] uppercase">Module 04 // Vertical Integration</span>
                  <div className="h-px flex-grow bg-[#BFA37E]/20"></div>
                </div>
                <h2 className="text-3xl md:text-6xl font-black tracking-tight leading-[1.1] mb-10 uppercase text-white">
                  Полный цикл <br/><span className="text-[#BFA37E]">Реализации</span>
                </h2>
                <div className="space-y-6 text-slate-400 font-light leading-relaxed mb-12">
                  <p className="text-sm md:text-base uppercase tracking-tight">
                    Мы переосмысливаем границы возможного, объединяя радикальную архитектурную мысль с бескомпромиссной инженерной точностью. Наша ответственность охватывает всю генетику проекта — от концептуальной сингулярности до физического воплощения.
                  </p>
                  <p className="text-[11px] font-mono text-[#BFA37E]/60 uppercase tracking-widest">
                    Synthesis of Art & Structural Intelligence // End-to-End Control
                  </p>
                </div>
                <div className="flex flex-wrap gap-8 mb-12">
                  <div className="flex flex-col">
                    <span className="font-mono text-[#BFA37E] text-xl">Precision</span>
                    <span className="text-[9px] uppercase tracking-tighter text-slate-500">Micron-level accuracy</span>
                  </div>
                  <div className="flex flex-col border-l border-white/10 pl-8">
                    <span className="font-mono text-[#BFA37E] text-xl">Integrity</span>
                    <span className="text-[9px] uppercase tracking-tighter text-slate-500">Uncompromised vision</span>
                  </div>
                </div>
                <a className="inline-flex items-center gap-6 px-12 py-5 border border-[#BFA37E]/30 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#BFA37E] hover:text-black transition-all duration-500 group/btn w-fit" href="#deep-dive-full-cycle">
                  Explore Ecosystem
                  <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-2 transition-transform">arrow_right_alt</span>
                </a>
              </div>
              <div className="hidden lg:flex col-span-6 flex-col justify-between py-16">
                <div className="flex flex-col items-end gap-12 text-[#BFA37E]/30">
                  <span className="material-symbols-outlined text-5xl hover:text-[#BFA37E] transition-colors cursor-crosshair">deployed_code</span>
                  <span className="material-symbols-outlined text-5xl hover:text-[#BFA37E] transition-colors cursor-crosshair">precision_manufacturing</span>
                  <span className="material-symbols-outlined text-5xl hover:text-[#BFA37E] transition-colors cursor-crosshair">architecture</span>
                </div>
                <div className="flex justify-end">
                  <div className="rotate-90 origin-right flex items-center gap-6">
                    <span className="w-24 h-px bg-[#BFA37E]/20"></span>
                    <p className="font-mono text-[9px] text-[#BFA37E]/40 uppercase tracking-[0.6em] whitespace-nowrap">Architectural Bureau Monumforma // 2024 Protocol</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#BFA37E]/5 py-40 border-y border-[#BFA37E]/10 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="text-center mb-24">
              <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">8 этапов реализации</h3>
              <p className="font-mono text-xs text-[#BFA37E] uppercase tracking-[0.4em]">Integrated Project Workflow</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="flex gap-8 group">
                <span className="font-mono text-5xl text-[#BFA37E]/20 group-hover:text-[#BFA37E] transition-colors duration-500 leading-none">01</span>
                <div>
                  <h4 className="text-sm font-black mb-3 uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#BFA37E] text-lg">lightbulb</span> Исследование и Концепция
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 uppercase leading-relaxed">
                    Анализ архитектурного контекста, формирование художественного видения и разработка первичных визуальных гипотез.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="font-mono text-5xl text-[#BFA37E]/20 group-hover:text-[#BFA37E] transition-colors duration-500 leading-none">02</span>
                <div>
                  <h4 className="text-sm font-black mb-3 uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#BFA37E] text-lg">architecture</span> Эскизное проектирование
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 uppercase leading-relaxed">
                    3D-моделирование сложной геометрии, подбор материалов и определение световых сценариев.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="font-mono text-5xl text-[#BFA37E]/20 group-hover:text-[#BFA37E] transition-colors duration-500 leading-none">03</span>
                <div>
                  <h4 className="text-sm font-black mb-3 uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#BFA37E] text-lg">engineering</span> Конструкторская документация
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 uppercase leading-relaxed">
                    Инженерные расчеты (КМ/КМД), разработка уникальных узлов крепления и систем автоматизации.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="font-mono text-5xl text-[#BFA37E]/20 group-hover:text-[#BFA37E] transition-colors duration-500 leading-none">04</span>
                <div>
                  <h4 className="text-sm font-black mb-3 uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#BFA37E] text-lg">precision_manufacturing</span> Опытный образец
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 uppercase leading-relaxed">
                    Изготовление фрагментов (mock-ups) для тестов освещенности, текстур и механики движения.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="font-mono text-5xl text-[#BFA37E]/20 group-hover:text-[#BFA37E] transition-colors duration-500 leading-none">05</span>
                <div>
                  <h4 className="text-sm font-black mb-3 uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#BFA37E] text-lg">factory</span> Собственное производство
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 uppercase leading-relaxed">
                    Художественное литье, плазменная резка, аргонная сварка и ручное патинирование металлов.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="font-mono text-5xl text-[#BFA37E]/20 group-hover:text-[#BFA37E] transition-colors duration-500 leading-none">06</span>
                <div>
                  <h4 className="text-sm font-black mb-3 uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#BFA37E] text-lg">code</span> Разработка ПО и сценариев
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 uppercase leading-relaxed">
                    Написание алгоритмов управления кинетикой и создание эксклюзивного видеоконтента.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="font-mono text-5xl text-[#BFA37E]/20 group-hover:text-[#BFA37E] transition-colors duration-500 leading-none">07</span>
                <div>
                  <h4 className="text-sm font-black mb-3 uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#BFA37E] text-lg">construction</span> Монтаж и ПНР
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 uppercase leading-relaxed">
                    Профессиональная установка на объекте, пуско-наладка систем и обучение персонала.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="font-mono text-5xl text-[#BFA37E]/20 group-hover:text-[#BFA37E] transition-colors duration-500 leading-none">08</span>
                <div>
                  <h4 className="text-sm font-black mb-3 uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#BFA37E] text-lg">verified_user</span> Эксплуатация
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 uppercase leading-relaxed">
                    Гарантийное обслуживание, технический мониторинг и контентная поддержка объектов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-40 bg-[#F9F9F7] dark:bg-[#0A0A0A]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="swiss-grid mb-16">
              <div className="col-span-12 lg:col-span-4">
                <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">Наши Клиенты</h3>
                <p className="font-mono text-[10px] text-[#BFA37E] mt-2 uppercase tracking-widest italic">Trusted by Global Leaders</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[#BFA37E]/10 border border-[#BFA37E]/10">
              <div className="bg-white dark:bg-[#121212] aspect-video flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-black text-lg tracking-tighter uppercase text-slate-900 dark:text-white">ARCHI</span>
              </div>
              <div className="bg-white dark:bg-[#121212] aspect-video flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-black text-lg tracking-tighter uppercase text-slate-900 dark:text-white">DEVELOP</span>
              </div>
              <div className="bg-white dark:bg-[#121212] aspect-video flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-black text-lg tracking-tighter uppercase text-slate-900 dark:text-white">METRO</span>
              </div>
              <div className="bg-white dark:bg-[#121212] aspect-video flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-black text-lg tracking-tighter uppercase text-slate-900 dark:text-white">GALLERY</span>
              </div>
              <div className="bg-white dark:bg-[#121212] aspect-video flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-black text-lg tracking-tighter uppercase text-slate-900 dark:text-white">URBAN</span>
              </div>
              <div className="bg-white dark:bg-[#121212] aspect-video flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="font-black text-lg tracking-tighter uppercase text-slate-900 dark:text-white">TECH</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
