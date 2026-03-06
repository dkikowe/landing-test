import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div className="bg-[#F5F5F5] dark:bg-[#121212] text-[#333333] dark:text-[#E0E0E0] font-['Inter'] antialiased selection:bg-[#BFA37E] selection:text-white transition-colors duration-300 min-h-screen">
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #121212; }
        ::-webkit-scrollbar-thumb { background: #826A45; }
        ::-webkit-scrollbar-thumb:hover { background: #BFA37E; }
        .text-bronze-gradient {
          background: linear-gradient(135deg, #BFA37E 0%, #826A45 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .module-card:hover .module-image {
          transform: scale(1.05);
        }
      `}</style>

      <header className="pt-40 pb-20 px-6 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
              <span className="text-bronze-gradient italic">КОМПЕТЕНЦИИ</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end pb-4 border-l border-[#BFA37E]/30 pl-6">
            <p className="font-['Roboto_Mono'] text-sm leading-relaxed mb-6 text-gray-600 dark:text-gray-400">
              ЧТО МЫ ДЕЛАЕМ И КАКИЕ ЗАДАЧИ РЕШАЕМ.
              <br />
              <br />
              Мы специализируемся на создании уникальных пространственных
              решений, объединяя архитектуру, технологии и свет.
            </p>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#BFA37E] to-[#826A45] mb-4"></div>
            <div className="flex justify-between font-['Roboto_Mono'] text-xs text-[#BFA37E] uppercase tracking-wider">
              <span>Осн. 2009</span>
              <span>Полный цикл</span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 pb-24 max-w-[1440px] mx-auto space-y-32">
        {/* 3.1 Architectural Objects */}
        <section className="group module-card">
          <div className="grid grid-cols-12 gap-0 lg:gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-7 relative h-[600px] overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-[#BFA37E]">
              <img
                alt="Monumental glass sculpture"
                className="module-image w-full h-full object-cover transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVmKneYHWyTj9DyO2Ggt6RHctcJkE_Tso97x_yfzCSl9F5JOhWb2e7M2ed-0PCvS7daiKiY0NjfxnCnBRPtCucko--coo3I_Istdbnoluy4MVtrX2iMP8hZf1sQ3Hx9tNVGclweUst3gRZn_HNJFzDuWPWn6DjqKNjE9ogtioRgm8-WD9z7kQ-JrSprqxS0hlcOnZEuCAgEHAbEV8ri0qQ9uGGvVoogr9nB5hglRaoqZP2dFXSLW7MghB1o_32tScwy3cCR4Gw4zCe"
              />
              <div className="absolute bottom-0 left-0 bg-[#F5F5F5]/90 dark:bg-[#121212]/90 p-4 font-['Roboto_Mono'] text-xs uppercase tracking-widest border-t border-r border-[#BFA37E]">
                Рис. 01 — Архитектурные Формы
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center py-12 lg:pl-12">
              <span className="font-['Roboto_Mono'] text-[#BFA37E] text-sm mb-4">
                01 / НАПРАВЛЕНИЕ
              </span>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-8">
                Архитектурные объекты
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light">
                Создание архитектурных форм и пространственных объектов. Мы
                разрабатываем решения, которые трансформируют восприятие среды.
              </p>
              <div className="mb-10">
                <h3 className="font-['Roboto_Mono'] text-xs uppercase tracking-widest text-[#BFA37E] mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                  Ключевые компетенции
                </h3>
                <ul className="font-['Roboto_Mono'] text-sm space-y-3 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Разработка арт-объектов
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Проектирование скульптур
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Благоустройство пространств
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Архитектурные инсталляции
                  </li>
                </ul>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-4 group/btn w-max"
              >
                <span className="font-['Roboto_Mono'] text-sm uppercase tracking-widest border-b border-transparent group-hover/btn:border-[#BFA37E] transition-colors">
                  СМОТРЕТЬ ПРИМЕРЫ
                </span>
                <span className="material-icons-outlined text-[#BFA37E] group-hover/btn:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3.2 Media Architecture */}
        <section className="group module-card">
          <div className="grid grid-cols-12 gap-0 lg:gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center py-12 lg:pr-12 order-2 lg:order-1">
              <span className="font-['Roboto_Mono'] text-[#BFA37E] text-sm mb-4">
                02 / НАПРАВЛЕНИЕ
              </span>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-8">
                Медиаархитектура
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light">
                Проекты на пересечении архитектуры, света и технологий.
                Интеграция цифрового контента в физическую форму.
              </p>
              <div className="mb-10">
                <h3 className="font-['Roboto_Mono'] text-xs uppercase tracking-widest text-[#BFA37E] mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                  Ключевые компетенции
                </h3>
                <ul className="font-['Roboto_Mono'] text-sm space-y-3 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Мультимедийные системы
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Кинетические конструкции
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Интерактивные инсталляции
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Светодинамические решения
                  </li>
                </ul>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-4 group/btn w-max"
              >
                <span className="font-['Roboto_Mono'] text-sm uppercase tracking-widest border-b border-transparent group-hover/btn:border-[#BFA37E] transition-colors">
                  СМОТРЕТЬ ПРИМЕРЫ
                </span>
                <span className="material-icons-outlined text-[#BFA37E] group-hover/btn:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 relative h-[600px] overflow-hidden border-b-4 lg:border-b-0 lg:border-l-4 border-[#BFA37E]">
              <img
                alt="Kinetic sculpture"
                className="module-image w-full h-full object-cover transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu591dnwDxCYCHNCdPzQ_-7PFx1C-m_G-kO4Uy741aUszv3IdEzrh8IbHHhrWdQN07WOYxcClZ6NDUK4XWdoUpll8yoZDhhpgEXq2VXedWBhld5tG-PJDivNP0jrU73twiiF3LE5Cv5JJIZZO_RMCAJSvlyYNjUQD-TjNpN02IxUs_g5yQMi8znb7lj6mgGzL63idQzq65-MNMFfappgkcugv7q6T5mkp9pjfHwYblz5_EQsml4rE033KVQs7qb0b_7VVx209OaLWB"
              />
              <div className="absolute bottom-0 right-0 bg-[#F5F5F5]/90 dark:bg-[#121212]/90 p-4 font-['Roboto_Mono'] text-xs uppercase tracking-widest border-t border-l border-[#BFA37E] text-right">
                Рис. 02 — Кинетика
              </div>
            </div>
          </div>
        </section>

        {/* 3.3 Light Installations */}
        <section className="group module-card">
          <div className="grid grid-cols-12 gap-0 lg:gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-7 relative h-[600px] overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-[#BFA37E]">
              <img
                alt="Light installation"
                className="module-image w-full h-full object-cover transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4iXIu_HKqapXdE4xtR-b46vfe0la2LE4Aiwf21uBrvp9kLXLS42R3-9mK85a5qcIsNtNjyp5g4MvFk6khg2Jp8m6FV1Wkv3e_8mO9uMCP90_ElPEMu6GsD952Zretl_3NmWPyqk_IZU2dyclI8Fk3-Z8lXEkdmNfIvT388hp2tislbsasQqDeuQXYdZWD4nmzm2QCv3BxpngGHX_BPcggj7-8G_D4iL9FFrstv1P_fEhW3gnnpo5VYYyPbaQfGX9low9UgdWlfREK"
              />
              <div className="absolute bottom-0 left-0 bg-[#F5F5F5]/90 dark:bg-[#121212]/90 p-4 font-['Roboto_Mono'] text-xs uppercase tracking-widest border-t border-r border-[#BFA37E]">
                Рис. 03 — Световая Среда
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center py-12 lg:pl-12">
              <span className="font-['Roboto_Mono'] text-[#BFA37E] text-sm mb-4">
                03 / НАПРАВЛЕНИЕ
              </span>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-8">
                Световые инсталляции
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light">
                Создание атмосферных световых проектов. Мы используем свет как
                материал для формирования ночного облика пространства.
              </p>
              <div className="mb-10">
                <h3 className="font-['Roboto_Mono'] text-xs uppercase tracking-widest text-[#BFA37E] mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                  Ключевые компетенции
                </h3>
                <ul className="font-['Roboto_Mono'] text-sm space-y-3 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Городские проекты
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Праздничные пространства
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Коммерческие пространства
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                    Сезонные концепции
                  </li>
                </ul>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-4 group/btn w-max"
              >
                <span className="font-['Roboto_Mono'] text-sm uppercase tracking-widest border-b border-transparent group-hover/btn:border-[#BFA37E] transition-colors">
                  СМОТРЕТЬ ПРИМЕРЫ
                </span>
                <span className="material-icons-outlined text-[#BFA37E] group-hover/btn:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3.4 Full Cycle */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800">
          <div className="mb-16 max-w-2xl">
            <span className="font-['Roboto_Mono'] text-[#BFA37E] text-sm mb-4 block">
              04 / ПРОЦЕСС
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl font-light mb-6">
              Полный цикл работы
            </h2>
            <p className="text-[#666666] dark:text-[#999999] font-light">
              Студия выполняет проекты от идеи до реализации, контролируя каждый
              этап для достижения идеального результата.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-l border-t border-gray-200 dark:border-gray-800">
            {[
              { title: "Концепция", desc: "Разработка идеи и визуализация" },
              {
                title: "Проектирование",
                desc: "Архитектурная детальная проработка",
              },
              { title: "Инженерия", desc: "Расчет нагрузок и конструктив" },
              {
                title: "Производство",
                desc: "Изготовление на собственном производстве",
              },
              { title: "Монтаж", desc: "Установка и пусконаладка" },
            ].map((step, index) => (
              <div
                key={index}
                className="p-8 border-r border-b border-gray-200 dark:border-gray-800 hover:bg-[#FFFFFF] dark:hover:bg-[#1A1A1A] transition-colors group"
              >
                <h4 className="font-['Space_Mono'] text-sm text-[#BFA37E] mb-2">
                  0{index + 1}. ЭТАП
                </h4>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
