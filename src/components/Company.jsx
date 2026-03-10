import React from "react";

export default function Company() {
  return (
    <div className="bg-[#F9F9F7] dark:bg-[#0F0F0F] text-[#0A0A0A] dark:text-[#F0F0F0] font-['DM_Sans'] transition-colors duration-300 min-h-screen">
      <style>{`
        body { font-feature-settings: "ss01", "ss02", "cv01", "cv02"; }
        .swiss-grid { background-image: radial-gradient(circle, #2d2a26 1px, transparent 1px); background-size: 40px 40px; }
        .dark .swiss-grid { background-image: radial-gradient(circle, #2d2a26 1px, transparent 1px); }
        :not(.dark) .swiss-grid { background-image: radial-gradient(circle, #e5e5e5 1px, transparent 1px); }
      `}</style>

      {/* Header Section (Existing) */}

      <main className="pt-0">
        {/* Hero Section from Source */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#F9F9F7] dark:bg-[#12100d] text-[#0A0A0A] dark:text-[#F9F9F7]">
          <div className="absolute inset-0 z-0 opacity-40">
            <div
              className="w-full h-full bg-slate-200 dark:bg-slate-800"
              data-alt="Dark abstract architectural video background loop"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#F9F9F7]/20 via-[#F9F9F7]/60 to-[#F9F9F7] dark:from-[#12100d]/20 dark:via-[#12100d]/60 dark:to-[#12100d]"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="font-mono text-[#bca180] text-sm uppercase tracking-[0.3em] mb-6 block">
              Est. 2012
            </span>
            <h1 className="text-4xl md:text-8xl font-display font-black mb-8 tracking-tighter leading-none text-[#0A0A0A] dark:text-[#F9F9F7]">
              АРХИТЕКТУРНЫЙ
              <br />
              МАНИФЕСТ
            </h1>
            <p className="text-lg md:text-xl text-[#0A0A0A]/60 dark:text-[#F9F9F7]/60 max-w-2xl mx-auto font-light leading-relaxed font-['DM_Sans']">
              Строгость формы, технологическое совершенство и художественная
              интуиция. Мы создаем пространство, которое диктует новые смыслы.
            </p>
          </div>
        </section>

        {/* Evolution Timeline */}
        <section className="py-32 px-6 bg-[#F9F9F7] dark:bg-[#12100d] text-[#0A0A0A] dark:text-[#F9F9F7] overflow-hidden transition-colors duration-300">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-1  items-center">
            <div className="mb-20">
              <span className="font-mono text-[#bca180] text-xs uppercase mb-2 block">
                История развития
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#0A0A0A] dark:text-[#F9F9F7]">
                ХРОНОЛОГИЯ
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10">
              {/* Year Item */}
              <div className="bg-[#F9F9F7] dark:bg-[#12100d] p-10 hover:bg-[#bca180]/10 dark:hover:bg-[#bca180]/5 transition-colors group cursor-default">
                <span className="font-mono text-[#bca180] text-sm mb-12 block">
                  2012 — 2014
                </span>
                <h3 className="text-2xl font-display font-bold mb-4 text-[#0A0A0A] dark:text-[#F9F9F7]">
                  Основание
                </h3>
                <p className="text-[#0A0A0A]/50 dark:text-[#F9F9F7]/50 text-sm leading-relaxed mb-8 font-display">
                  Запуск экспериментальной лаборатории в Милане. Первый проект
                  частной виллы «Forma 01».
                </p>
                <div className="w-full h-1 bg-black/5 dark:bg-white/5 overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-[#bca180] transition-all duration-700"></div>
                </div>
              </div>
              <div className="bg-[#F9F9F7] dark:bg-[#12100d] p-10 hover:bg-[#bca180]/10 dark:hover:bg-[#bca180]/5 transition-colors group cursor-default">
                <span className="font-mono text-[#bca180] text-sm mb-12 block">
                  2015 — 2018
                </span>
                <h3 className="text-2xl font-display font-bold mb-4 text-[#0A0A0A] dark:text-[#F9F9F7]">
                  Масштаб
                </h3>
                <p className="text-[#0A0A0A]/50 dark:text-[#F9F9F7]/50 text-sm leading-relaxed mb-8 font-display">
                  Переход к проектированию общественных пространств. Победа в
                  конкурсе на музей в Берлине.
                </p>
                <div className="w-full h-1 bg-black/5 dark:bg-white/5 overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-[#bca180] transition-all duration-700"></div>
                </div>
              </div>
              <div className="bg-[#F9F9F7] dark:bg-[#12100d] p-10 hover:bg-[#bca180]/10 dark:hover:bg-[#bca180]/5 transition-colors group cursor-default">
                <span className="font-mono text-[#bca180] text-sm mb-12 block">
                  2019 — 2021
                </span>
                <h3 className="text-2xl font-display font-bold mb-4 text-[#0A0A0A] dark:text-[#F9F9F7]">
                  Технологии
                </h3>
                <p className="text-[#0A0A0A]/50 dark:text-[#F9F9F7]/50 text-sm leading-relaxed mb-8 font-display">
                  Интеграция BIM-моделирования и параметрического дизайна.
                  Открытие офиса в Москве.
                </p>
                <div className="w-full h-1 bg-black/5 dark:bg-white/5 overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-[#bca180] transition-all duration-700"></div>
                </div>
              </div>
              <div className="bg-[#F9F9F7] dark:bg-[#12100d] p-10 hover:bg-[#bca180]/10 dark:hover:bg-[#bca180]/5 transition-colors group cursor-default">
                <span className="font-mono text-[#bca180] text-sm mb-12 block">
                  2022 — NOW
                </span>
                <h3 className="text-2xl font-display font-bold mb-4 text-[#0A0A0A] dark:text-[#F9F9F7]">
                  Эволюция
                </h3>
                <p className="text-[#0A0A0A]/50 dark:text-[#F9F9F7]/50 text-sm leading-relaxed mb-8 font-display">
                  Разработка концепции «Живой архитектуры». Новые горизонты в
                  устойчивом строительстве.
                </p>
                <div className="w-full h-1 bg-black/5 dark:bg-white/5 overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-[#bca180] transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principal Investigator */}
        <section className="py-32 px-6 bg-[#F9F9F7] dark:bg-[#12100d] text-[#0A0A0A] dark:text-[#F9F9F7] overflow-hidden transition-colors duration-300">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-neutral-200 dark:bg-neutral-900 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover grayscale contrast-125"
                  data-alt="Black and white portrait of Konstantin Burtsev"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaDxSLSSq6ERigHAo0kAnW5lMr6mBkxT864v38nlxBY_61pKtMHKRBo4Lw-3QY_VPqWyn7mNY9VkRoV3o-pfeMoTqUlEtSzd57QoRr6MKQQGrdwvjPYyGxqJMYkJPlVQm3uncdduzTolyfX4XDPX3r1GXMA2M2HaeVppSKnweLiGJJoi5362XlCK-dbtmoS94RxTYGzuvK_QFr62inWloaxPLhUL70lVfmihLEBL_4gFLjcsyq4c8Nvxt4Y0rfDbZ8tmieRqtequr5"
                  alt="Konstantin Burtsev"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#bca180] p-12 hidden lg:block">
                <span className="font-mono text-[#12100d] text-6xl font-black">
                  KB.
                </span>
              </div>
            </div>
            <div>
              <span className="font-mono text-[#bca180] text-sm mb-6 block uppercase tracking-widest">
                Основатель и главный архитектор
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black mb-10 tracking-tighter text-[#0A0A0A] dark:text-[#F9F9F7]">
                КОНСТАНТИН БУРЦЕВ
              </h2>
              <div className="space-y-6 text-[#0A0A0A]/70 dark:text-[#F9F9F7]/70 text-lg leading-relaxed font-light font-['DM_Sans']">
                <p>
                  «Архитектура — это не просто стены. Это способ управления
                  пространством и эмоциями людей. Мы не строим здания, мы
                  создаем системы взаимодействия материи и света».
                </p>
                <p>
                  Обладатель международных премий, выпускник Миланского
                  политехнического университета, Константин внедряет принципы
                  швейцарской строгости в каждый проект студии.
                </p>
              </div>
              <div className="mt-12 flex gap-8">
                <div>
                  <p className="font-mono text-[#bca180] text-2xl font-bold">
                    15+
                  </p>
                  <p className="text-xs text-[#0A0A0A]/40 dark:text-[#F9F9F7]/40 uppercase mt-1">
                    Лет практики
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[#bca180] text-2xl font-bold">
                    40+
                  </p>
                  <p className="text-xs text-[#0A0A0A]/40 dark:text-[#F9F9F7]/40 uppercase mt-1">
                    Проектов
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[#bca180] text-2xl font-bold">
                    12
                  </p>
                  <p className="text-xs text-[#0A0A0A]/40 dark:text-[#F9F9F7]/40 uppercase mt-1">
                    Наград
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 px-6 bg-[#F0F0F0] dark:bg-[#181614] text-[#0A0A0A] dark:text-[#F9F9F7] transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
              <div>
                <span className="font-mono text-[#bca180] text-xs uppercase mb-2 block">
                  Экспертиза
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#0A0A0A] dark:text-[#F9F9F7]">
                  КОМАНДА
                </h2>
              </div>
              <p className="max-w-md text-[#0A0A0A]/50 dark:text-[#F9F9F7]/50 text-sm font-['DM_Sans']">
                Наш коллектив объединяет архитекторов, инженеров и художников,
                работающих на стыке дисциплин.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
              {/* Member */}
              <div className="group">
                <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 mb-6 overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    data-alt="Portrait of Elena Markova, Lead Architect"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWZpVW1Va2ewh67BdBNVYCWwHcMHviqMQcCwufk1oq5M-Zim9EXf5ippUJUY-Uo2SYrS7V6Mo255j46ED9MrlDCUNGHVmXjFkh0To0nP6ixqawla50E2VG5_bE_71cegyz7WfxFXYN7XbxymzomVk7Lue_J8Qo_vz2NKR8cYdN-qnHRDc7UEPzT-ugKWnJHuMTZn1tRx_0VFRbRxIW5aTZO3v6pYB2_t_tc0R85Wgpj-dKgbPH6n9KHusVuzbcj7cg_ans5Ib9EQNF"
                    alt="Elena Markova"
                  />
                </div>
                <h4 className="text-xl font-display font-bold mb-1 text-[#0A0A0A] dark:text-[#F9F9F7]">
                  Елена Маркова
                </h4>
                <p className="font-mono text-xs text-[#bca180] uppercase">
                  Ведущий архитектор
                </p>
              </div>
              {/* Member */}
              <div className="group">
                <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 mb-6 overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    data-alt="Portrait of Dmitry Volkov, BIM Engineer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoRfOQdVNxkik9Z5f6kH6ERL7sZJB6jX7tZOCjMQFieUZiVjptTIGM1bgqh9esW8aI8aZFc__askqBuvUtgF_2dMTl51QL9J0ST1rqHDi6Htf7dZPA42ar7131wFvI8cuDxDwFFkcR0IXYLGibtq7PfUfXPjJxsNbtP0kN0teBYVoH678JhaqdIntF3lYt7EhneGX9sDa5AZNet6psJSBZG99CQp3bp3VtEtbE5pxAmQKbIF4NM84ptmXGH5qSV2TqcUtzBEMFwPUK"
                    alt="Dmitry Volkov"
                  />
                </div>
                <h4 className="text-xl font-display font-bold mb-1 text-[#0A0A0A] dark:text-[#F9F9F7]">
                  Дмитрий Волков
                </h4>
                <p className="font-mono text-xs text-[#bca180] uppercase">
                  BIM Инженер
                </p>
              </div>
              {/* Member */}
              <div className="group">
                <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 mb-6 overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    data-alt="Portrait of Anna Belova, Designer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Cql6d4Dj05jcAVjCoXAm7GJ7dP_UoNPef9sbqbFGY2vGeiYh6V0j0rhqELiCofK40qH4WF3cO4L2JFetEHpqR-sgXM-bHdDhjRhLXZLqWXiiGXP_IlCmfwAxdH0plZX_CKoBtMYL8Ay_jTV4Onm3_vdSvv6wRI_jp-SE9CG-MPvcRprcemjPfboCR6j0buF6ZCmai7I38obAj-f-KdmyAxum0w0OXf4Gy3WXq7yt31GGDTJCgWFurgPeUDYP4pTrO145vj9Codzs"
                    alt="Anna Belova"
                  />
                </div>
                <h4 className="text-xl font-display font-bold mb-1 text-[#0A0A0A] dark:text-[#F9F9F7]">
                  Анна Белова
                </h4>
                <p className="font-mono text-xs text-[#bca180] uppercase">
                  Дизайнер среды
                </p>
              </div>
              {/* Member */}
              <div className="group">
                <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 mb-6 overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    data-alt="Portrait of Igor Sokolov, Project Manager"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR1dxAtZUUtSfpxrJEkl2ErfOgSIhAhBDb9tTcHrCatQhvaviUmB8Kaj7DUrShdbwS7Q6qn0esowKQ-b-Z2CyaFZz-DOOLx4fp20XcEWUukfub-GdNFNP0kmKrAVbS5h7KI5UxH1FGbLwzp7bn0XMOszRr4C3jAS5JTjqvL_IARmBdQcZN9qZTKPzQYb1Q3w53t7QbldpKXO24dDWyD3l27eqe1t5qnmGictpAbFZduG2KN7JbJvkzvXFK6ANRvuZwIliT7GLb1cnL"
                    alt="Igor Sokolov"
                  />
                </div>
                <h4 className="text-xl font-display font-bold mb-1 text-[#0A0A0A] dark:text-[#F9F9F7]">
                  Игорь Соколов
                </h4>
                <p className="font-mono text-xs text-[#bca180] uppercase">
                  Project Manager
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geometry of Feeling Philosophy */}
        <section className="py-32 px-6 bg-[#F9F9F7] dark:bg-[#12100d] text-[#0A0A0A] dark:text-[#F9F9F7] relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            <div className="w-[800px] h-[800px] border border-[#bca180]/40 rounded-full flex items-center justify-center">
              <div className="w-[600px] h-[600px] border border-[#bca180]/30 rounded-full flex items-center justify-center">
                <div className="w-[400px] h-[400px] border border-[#bca180]/20 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="font-mono text-[#bca180] text-xs uppercase mb-6 block tracking-[0.4em]">
              Philosophy
            </span>
            <h2 className="text-3xl md:text-7xl font-display font-black mb-16 tracking-tighter text-[#0A0A0A] dark:text-[#F9F9F7]">
              ГЕОМЕТРИЯ ЧУВСТВ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <div className="p-8 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
                <span className="font-mono text-[#bca180] text-4xl block mb-6">
                  50%
                </span>
                <h4 className="text-xl font-display font-bold mb-4 uppercase text-[#0A0A0A] dark:text-[#F9F9F7]">
                  Строгость
                </h4>
                <p className="text-[#0A0A0A]/50 dark:text-[#F9F9F7]/50 text-sm leading-relaxed font-['DM_Sans']">
                  Сетчатые структуры, четкая иерархия и математическая
                  выверенность каждого элемента конструкции.
                </p>
              </div>
              <div className="p-8 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
                <span className="font-mono text-[#bca180] text-4xl block mb-6">
                  30%
                </span>
                <h4 className="text-xl font-display font-bold mb-4 uppercase text-[#0A0A0A] dark:text-[#F9F9F7]">
                  Технологии
                </h4>
                <p className="text-[#0A0A0A]/50 dark:text-[#F9F9F7]/50 text-sm leading-relaxed font-['DM_Sans']">
                  Параметрическое моделирование, инновационные материалы и
                  алгоритмический подход к дизайну.
                </p>
              </div>
              <div className="p-8 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
                <span className="font-mono text-[#bca180] text-4xl block mb-6">
                  20%
                </span>
                <h4 className="text-xl font-display font-bold mb-4 uppercase text-[#0A0A0A] dark:text-[#F9F9F7]">
                  Текучесть
                </h4>
                <p className="text-[#0A0A0A]/50 dark:text-[#F9F9F7]/50 text-sm leading-relaxed font-['DM_Sans']">
                  Художественная интуиция, органические формы и работа с
                  эмоциональным восприятием света.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & CTA */}
        <section className="py-32 px-6 bg-[#F9F9F7] dark:bg-[#12100d] text-[#0A0A0A] dark:text-[#F9F9F7] border-t border-black/5 dark:border-white/5 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="font-mono text-[#bca180] text-xs uppercase mb-2 block">
                Сотрудничество
              </span>
              <h2 className="text-3xl font-display font-bold tracking-tight text-[#0A0A0A] dark:text-[#F9F9F7]">
                НАШИ ПАРТНЕРЫ
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 mb-32">
              <div className="h-32 bg-[#F9F9F7] dark:bg-[#12100d] flex items-center justify-center p-8 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div
                  className="w-full h-8 bg-black/10 dark:bg-[#F9F9F7]/10"
                  data-alt="Partner logo placeholder"
                ></div>
              </div>
              <div className="h-32 bg-[#F9F9F7] dark:bg-[#12100d] flex items-center justify-center p-8 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div
                  className="w-full h-8 bg-black/10 dark:bg-[#F9F9F7]/10"
                  data-alt="Partner logo placeholder"
                ></div>
              </div>
              <div className="h-32 bg-[#F9F9F7] dark:bg-[#12100d] flex items-center justify-center p-8 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div
                  className="w-full h-8 bg-black/10 dark:bg-[#F9F9F7]/10"
                  data-alt="Partner logo placeholder"
                ></div>
              </div>
              <div className="h-32 bg-[#F9F9F7] dark:bg-[#12100d] flex items-center justify-center p-8 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div
                  className="w-full h-8 bg-black/10 dark:bg-[#F9F9F7]/10"
                  data-alt="Partner logo placeholder"
                ></div>
              </div>
              <div className="h-32 bg-[#F9F9F7] dark:bg-[#12100d] flex items-center justify-center p-8 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div
                  className="w-full h-8 bg-black/10 dark:bg-[#F9F9F7]/10"
                  data-alt="Partner logo placeholder"
                ></div>
              </div>
              <div className="h-32 bg-[#F9F9F7] dark:bg-[#12100d] flex items-center justify-center p-8 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                <div
                  className="w-full h-8 bg-black/10 dark:bg-[#F9F9F7]/10"
                  data-alt="Partner logo placeholder"
                ></div>
              </div>
            </div>
            {/* Final CTA */}
            <div className="bg-[#bca180] p-12 md:p-24 rounded-lg flex flex-col items-center text-center">
              <h2 className="text-[#12100d] text-2xl md:text-6xl font-display font-black mb-8 tracking-tighter">
                ГОТОВЫ НАЧАТЬ ПРОЕКТ?
              </h2>
              <p className="text-[#12100d]/80 text-lg max-w-xl mb-12 font-['DM_Sans']">
                Обсудите вашу идею с нашими экспертами и получите
                предварительное архитектурное видение.
              </p>
              <button className="px-12 py-5 bg-[#12100d] text-[#F9F9F7] font-black rounded-lg hover:bg-white hover:text-[#12100d] transition-all uppercase tracking-widest text-sm font-mono">
                Оставить заявку
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
