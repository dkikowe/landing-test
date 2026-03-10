import React, { useEffect } from "react";

export default function ArchitecturalProcess() {
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
    <div className="bg-[#0A0A0A] text-white font-['Syne'] antialiased selection:bg-[#BFA37E] selection:text-[#0A0A0A]">
      <style>{`
        @keyframes slow-pan {
          0% { transform: scale(1.1) translateX(0); }
          100% { transform: scale(1.1) translateX(-2%); }
        }
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-pan { animation: slow-pan 20s ease-in-out infinite alternate; }
        .reveal-on-scroll { animation: reveal-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .wireframe-bg {
          background-image: radial-gradient(circle at 2px 2px, rgba(191, 163, 126, 0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }
        .border-accent-glow {
          border: 1px solid rgba(191, 163, 126, 0.5);
          box-shadow: 0 0 15px rgba(191, 163, 126, 0.1);
        }
        .card-premium-hover:hover {
          border-color: #BFA37E;
          box-shadow: 0 0 30px rgba(191, 163, 126, 0.25);
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <main>
        <section className="relative h-screen w-full flex items-center overflow-hidden reveal-on-scroll">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent z-10"></div>
            <img
              alt="Architectural Structure"
              className="w-full h-full object-cover opacity-60 animate-pan"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBMbNKjQ0WQb6-oeY0lXxLAKsLlJITUEvvzjF0O2ps9mhUbiesSPuOqmgzvgndi14SWJuMWldH28Ng9yjtsZ5FpqNYdPTU33S3PChEyXNS7XinOdxgpoXBeF8FeWaAa-6iDStBtIR6KSJGutaH6RF6gJ7Ud-S8jw8O9h3F4G9JMfHQ9pnKXGruZu17DFEoeiTCSO4FDil8yU5vkdYBmegBiyUXq95SMSVdSy-bip2MuuwCqSV48rvOTcJCihx0h1wBR0Z3BWF0QC3j"
            />
          </div>
          <div className="relative z-20 max-w-[1800px] mx-auto px-6 w-full pt-20">
            <div className="max-w-5xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[#BFA37E]"></span>
                <span className="font-['Space_Mono'] text-xs text-[#BFA37E] uppercase tracking-widest">
                  Core // Manifesto // Synthesis
                </span>
              </div>
              <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.9] tracking-tighter uppercase mb-8">
                Эстетика{" "}
                <span className="text-[#BFA37E] italic font-light">&</span>
                <br />
                Инженерия
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-12">
                Симбиоз художественного видения и безупречного расчета. Мы
                создаем формы, которые бросают вызов гравитации и времени.
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <button className="group flex items-center gap-4 bg-white text-[#0A0A0A] px-8 py-5 font-bold uppercase text-xs tracking-widest hover:bg-[#BFA37E] transition-colors">
                  Explore Capabilities
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between font-['Space_Mono'] text-[10px] text-white/40 uppercase">
                    <span>70% Art</span>
                    <span>30% Engineering</span>
                  </div>
                  <div className="w-48 h-[2px] bg-white/10 relative">
                    <div className="absolute inset-0 bg-[#BFA37E] w-[70%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-6 z-20 font-['Space_Mono'] text-[10px] text-white/30 uppercase tracking-widest">
            System Active: Structural_Engine_v4.8
          </div>
        </section>

        <section className="py-32 px-6 bg-[#F9F9F7] text-[#0A0A0A] wireframe-bg reveal-on-scroll">
          <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-24 items-start">
            <div className="relative group lg:sticky lg:top-32">
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#BFA37E]/30 group-hover:scale-110 transition-transform"></div>
              <img
                alt="Generative Design"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVcIAzQE1RfEcCJkfj0Sf53JhC0LEpToeULGKDc1JGmm4C37RARFQ1T9YSHZYvaXL46FFEPPdxeA1bDyU4qReed43Yq7K4AvTdOaONVruDmJMXdI5OkAmCig_IClzfMvWv__Y81Sj8QBPOylVLoCEhoKBX_l9T57wSWKz3A3ZA4pSde0BAtLMVxJkgQ2LIVqU_2Z75H_fk6m6dG8ZD8pGHeMDtJtUDpFB2rQ3mTJ4D_1Qrs6DYc2oWjSGqTC3p2t6cGk_ufKzNhwHl"
              />
              <div className="absolute bottom-6 left-6 bg-[#0A0A0A] text-white p-6 max-w-xs">
                <span className="block font-['Space_Mono'] text-[10px] text-[#BFA37E] mb-2 uppercase">
                  Topology Optimization
                </span>
                <p className="text-sm leading-relaxed text-white/70 italic">
                  Algorithmic weight reduction without structural loss.
                </p>
              </div>
            </div>
            <div className="space-y-16">
              <div>
                <span className="font-['Space_Mono'] text-xs text-[#BFA37E] uppercase tracking-widest block mb-4">
                  Process Stage: 01 // Ideation
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                  Алгоритмическая
                  <br />
                  <span className="text-[#BFA37E]">Эксплорация</span>
                </h2>
                <p className="text-xl text-black/60 leading-relaxed max-w-xl">
                  Наш творческий генезис базируется на контекстно-ориентированном
                  синтезе и глубоком анализе пространственных нарративов.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-12">
                <div className="grid md:grid-cols-2 gap-8 items-start group">
                  <div className="border-l-4 border-[#BFA37E] pl-6 py-2 transition-all group-hover:pl-8">
                    <span className="block font-['Space_Mono'] text-[10px] text-[#BFA37E] uppercase tracking-widest mb-2">
                      Analysis
                    </span>
                    <h4 className="text-2xl font-black uppercase tracking-tight">
                      Контекстуальный Синтез
                    </h4>
                  </div>
                  <div className="p-6 bg-white border border-black/5 shadow-sm group-hover:border-[#BFA37E]/40 transition-colors">
                    <p className="text-sm text-black/60 font-['Space_Mono'] leading-relaxed uppercase">
                      Глубокое погружение в топологию и культурный слой локации.
                      Мы извлекаем данные о ветровых потоках, освещенности и
                      пешеходном трафике, превращая их в параметры будущей формы.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-start group">
                  <div className="border-l-4 border-[#BFA37E] pl-6 py-2 transition-all group-hover:pl-8">
                    <span className="block font-['Space_Mono'] text-[10px] text-[#BFA37E] uppercase tracking-widest mb-2">
                      Computation
                    </span>
                    <h4 className="text-2xl font-black uppercase tracking-tight">
                      Генеративная Деконструкция
                    </h4>
                  </div>
                  <div className="p-6 bg-white border border-black/5 shadow-sm group-hover:border-[#BFA37E]/40 transition-colors">
                    <p className="text-sm text-black/60 font-['Space_Mono'] leading-relaxed uppercase">
                      Использование генетических алгоритмов для поиска
                      оптимального баланса между эстетической сложностью и
                      структурной стабильностью. Процесс, где код становится
                      соавтором скульптора.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-start group">
                  <div className="border-l-4 border-[#BFA37E] pl-6 py-2 transition-all group-hover:pl-8">
                    <span className="block font-['Space_Mono'] text-[10px] text-[#BFA37E] uppercase tracking-widest mb-2">
                      Narrative
                    </span>
                    <h4 className="text-2xl font-black uppercase tracking-tight">
                      Редефиниция Пространства
                    </h4>
                  </div>
                  <div className="p-6 bg-white border border-black/5 shadow-sm group-hover:border-[#BFA37E]/40 transition-colors">
                    <p className="text-sm text-black/60 font-['Space_Mono'] leading-relaxed uppercase">
                      Финальная стадия перевода математической модели в
                      эмоциональный опыт. Мы создаем не просто объекты, а
                      сценарии взаимодействия, которые меняют восприятие привычной
                      среды.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-[#0A0A0A] reveal-on-scroll">
          <div className="max-w-[1800px] mx-auto mb-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="max-w-2xl">
                <span className="font-['Space_Mono'] text-xs text-[#BFA37E] uppercase tracking-widest block mb-4">
                  Analysis & Physics
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                  Инженерия как искусство
                </h2>
              </div>
              <p className="text-lg text-white/50 max-w-md">
                Любой художественный жест остается лишь мечтой без фундаментальной
                науки. Мы гарантируем 100% результат за счет глубокого анализа
                экстремальных нагрузок.
              </p>
            </div>
          </div>
          <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#0A0A0A] p-10 border-accent-glow card-premium-hover transition-all group relative overflow-hidden">
              <span className="material-symbols-outlined text-[#BFA37E] text-4xl mb-8 group-hover:scale-125 transition-transform duration-500">
                leak_add
              </span>
              <h3 className="text-xl font-bold uppercase mb-4">Сейсмика</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-12">
                Расчеты устойчивости при динамических колебаниях грунта до 9
                баллов по шкале Рихтера.
              </p>
              <span className="font-['Space_Mono'] text-6xl text-white/5 absolute bottom-4 right-4 group-hover:text-[#BFA37E]/20 transition-colors">
                01
              </span>
            </div>
            <div className="bg-[#0A0A0A] p-10 border-accent-glow card-premium-hover transition-all group relative overflow-hidden">
              <span className="material-symbols-outlined text-[#BFA37E] text-4xl mb-8 group-hover:scale-125 transition-transform duration-500">
                air
              </span>
              <h3 className="text-xl font-bold uppercase mb-4">Ветровые</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-12">
                Аэродинамические испытания и расчеты пиковых порывов ветра в
                разных климатических зонах.
              </p>
              <span className="font-['Space_Mono'] text-6xl text-white/5 absolute bottom-4 right-4 group-hover:text-[#BFA37E]/20 transition-colors">
                02
              </span>
            </div>
            <div className="bg-[#0A0A0A] p-10 border-accent-glow card-premium-hover transition-all group relative overflow-hidden">
              <span className="material-symbols-outlined text-[#BFA37E] text-4xl mb-8 group-hover:scale-125 transition-transform duration-500">
                ac_unit
              </span>
              <h3 className="text-xl font-bold uppercase mb-4">
                Крио-нагрузки
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-12">
                Анализ весовых нагрузок снежного покрова и температурного
                расширения уникальных сплавов.
              </p>
              <span className="font-['Space_Mono'] text-6xl text-white/5 absolute bottom-4 right-4 group-hover:text-[#BFA37E]/20 transition-colors">
                03
              </span>
            </div>
            <div className="bg-[#0A0A0A] p-10 border-accent-glow card-premium-hover transition-all group relative overflow-hidden">
              <span className="material-symbols-outlined text-[#BFA37E] text-4xl mb-8 group-hover:scale-125 transition-transform duration-500">
                waves
              </span>
              <h3 className="text-xl font-bold uppercase mb-4">
                Агрессивная среда
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-12">
                Специализированные покрытия и материалы для работы в суровых
                прибрежных и соленых зонах.
              </p>
              <span className="font-['Space_Mono'] text-6xl text-white/5 absolute bottom-4 right-4 group-hover:text-[#BFA37E]/20 transition-colors">
                04
              </span>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-[#F9F9F7] text-[#0A0A0A] reveal-on-scroll">
          <div className="max-w-[1800px] mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 md:p-12 border-accent-glow card-premium-hover transition-all duration-500 group relative">
                <div className="mb-8 md:mb-16">
                  <span className="font-['Space_Mono'] text-[10px] text-[#BFA37E] uppercase tracking-widest block mb-3 md:mb-6">
                    Facility.Unit_01
                  </span>
                  <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-3 md:mb-6">
                    Металлообработка
                  </h3>
                  <p className="text-sm text-black/50 leading-relaxed max-w-xs font-['Space_Mono']">
                    Работа со сталью, алюминием и нержавеющей сталью. Полный
                    цикл: сварка, полировка и сборка.
                  </p>
                </div>
                <span className="material-symbols-outlined text-[#BFA37E]/40 text-3xl md:text-4xl group-hover:scale-125 group-hover:text-[#BFA37E] transition-all duration-500">
                  precision_manufacturing
                </span>
              </div>
              <div className="bg-white p-6 md:p-12 border-accent-glow card-premium-hover transition-all duration-500 group relative">
                <div className="mb-8 md:mb-16">
                  <span className="font-['Space_Mono'] text-[10px] text-[#BFA37E] uppercase tracking-widest block mb-3 md:mb-6">
                    Facility.Unit_02
                  </span>
                  <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-3 md:mb-6">
                    Композиты
                  </h3>
                  <p className="text-sm text-black/50 leading-relaxed max-w-xs font-['Space_Mono']">
                    Производство изделий из стеклопластика и эпоксидных смол.
                    Создание бесшовных органических форм.
                  </p>
                </div>
                <span className="material-symbols-outlined text-[#BFA37E]/40 text-3xl md:text-4xl group-hover:scale-125 group-hover:text-[#BFA37E] transition-all duration-500">
                  layers
                </span>
              </div>
              <div className="bg-white p-6 md:p-12 border-accent-glow card-premium-hover transition-all duration-500 group relative">
                <div className="mb-8 md:mb-16">
                  <span className="font-['Space_Mono'] text-[10px] text-[#BFA37E] uppercase tracking-widest block mb-3 md:mb-6">
                    Facility.Unit_03
                  </span>
                  <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-3 md:mb-6">
                    Световые системы
                  </h3>
                  <p className="text-sm text-black/50 leading-relaxed max-w-xs font-['Space_Mono']">
                    Изготовление световых конструкций, настройка
                    интеллектуальных систем управления и мультимедиа.
                  </p>
                </div>
                <span className="material-symbols-outlined text-[#BFA37E]/40 text-3xl md:text-4xl group-hover:scale-125 group-hover:text-[#BFA37E] transition-all duration-500">
                  lightbulb
                </span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 md:p-12 border-accent-glow card-premium-hover transition-all duration-500 group relative">
                <div className="mb-8 md:mb-16">
                  <span className="font-['Space_Mono'] text-[10px] text-[#BFA37E] uppercase tracking-widest block mb-3 md:mb-6">
                    Facility.Unit_04
                  </span>
                  <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-3 md:mb-6">
                    Чистовая сборка
                  </h3>
                  <p className="text-sm text-black/50 leading-relaxed max-w-xs font-['Space_Mono']">
                    Специализированный цех для финального монтажа. Ювелирная
                    подгонка деталей перед отправкой.
                  </p>
                </div>
                <span className="material-symbols-outlined text-[#BFA37E]/40 text-3xl md:text-4xl group-hover:scale-125 group-hover:text-[#BFA37E] transition-all duration-500">
                  build
                </span>
              </div>
              <div className="bg-white p-6 md:p-12 border-accent-glow card-premium-hover transition-all duration-500 group relative">
                <div className="mb-8 md:mb-16">
                  <span className="font-['Space_Mono'] text-[10px] text-[#BFA37E] uppercase tracking-widest block mb-3 md:mb-6">
                    Network.Global
                  </span>
                  <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-3 md:mb-6">
                    Глобальный Альянс
                  </h3>
                  <p className="text-sm text-black/50 leading-relaxed max-w-xs font-['Space_Mono']">
                    Сотрудничество с 12+ мировыми партнерами позволяет
                    реализовывать проекты любой сложности.
                  </p>
                </div>
                <span className="material-symbols-outlined text-[#BFA37E]/40 text-3xl md:text-4xl group-hover:scale-125 group-hover:text-[#BFA37E] transition-all duration-500">
                  public
                </span>
              </div>
              <div className="bg-[#0A0A0A] text-white p-6 md:p-12 border border-[#BFA37E] flex flex-col justify-between group overflow-hidden relative shadow-[0_0_40px_rgba(191,163,126,0.2)]">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-8 leading-none">
                    100% Контроль
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-8 md:mb-12 max-w-xs font-['Space_Mono'] uppercase">
                    Независимо от места производства, мы гарантируем контроль
                    каждого этапа.
                  </p>
                </div>
                <div className="relative z-10">
                  <button className="w-full py-5 border border-[#BFA37E] text-[#BFA37E] font-['Space_Mono'] text-[10px] uppercase tracking-widest hover:bg-[#BFA37E] hover:text-[#0A0A0A] transition-all duration-300 shadow-[0_0_15px_rgba(191,163,126,0.3)]">
                    Request Production Specs
                  </button>
                </div>
                <div className="absolute inset-0 bg-[#BFA37E]/10 opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-48 px-6 bg-[#0A0A0A] overflow-hidden reveal-on-scroll">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <span className="text-[40vw] font-black leading-none uppercase select-none">
              MF
            </span>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="font-['Space_Mono'] text-xs text-[#BFA37E] uppercase tracking-widest block mb-12">
              Final Synthesis
            </span>
            <h2 className="text-2xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-16">
              Каждый болт, каждый расчет ветра — это акт любви к искусству.
            </h2>
            <div className="flex flex-col items-center gap-8">
              <div className="w-[1px] h-24 bg-[#BFA37E] shadow-[0_0_10px_#BFA37E]"></div>
              <p className="text-xl text-white/40 max-w-lg leading-relaxed italic">
                «Мы верим, что монументальность создается не только размером, но и
                точностью. Наша миссия — делать смелые мечты осязаемыми».
              </p>
              <div className="mt-8 font-['Space_Mono'] text-[10px] uppercase tracking-widest text-[#BFA37E]">
                Philosophy of monumforma
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
