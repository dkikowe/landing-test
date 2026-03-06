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
    <div className="bg-[#F7F7F7] dark:bg-[#1A1A1A] text-[#111111] dark:text-[#EEEEEE] font-['Syne'] antialiased transition-colors duration-300 min-h-screen">
      <style>{`
        .step-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .step-card:hover .step-icon {
          transform: scale(1.1);
          color: #C8A165;
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #666; }
      `}</style>

      {/* Header */}
      <header className="relative pt-32 pb-20 px-6 border-b border-[#E5E5E5] dark:border-[#333333]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="text-5xl md:text-7xl font-['Syne'] font-bold leading-tight">
              <span className="text-[#C8A165] italic">ИНЖЕНЕРИЯ</span>
            </h1>
          </div>
          <div className="lg:pl-12 pb-2">
            <p className="text-lg text-[#555555] dark:text-[#AAAAAA] font-['Space_Mono'] max-w-xl">
              ТЕХНИЧЕСКАЯ ЭКСПЕРТИЗА СТУДИИ.
              <br />
              <br />
              Мы объединяем передовое проектирование, точные инженерные расчеты
              и собственное производство для реализации проектов любой
              сложности.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-20 space-y-32">
        {/* 4.1 Design & 4.2 Engineering */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Design */}
          <div className="group relative bg-[#FFFFFF] dark:bg-[#242424] border border-[#E5E5E5] dark:border-[#333333] overflow-hidden min-h-[500px] flex flex-col">
            <div className="h-[250px] overflow-hidden relative">
              <img
                alt="Wireframe design"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_SJeHmNqGGNPFVR7QbITtQidca0Jqx2Y6u9cpdkZ3xGTNEQqC901pMx4peBX2SZKViZxtV54AayViZgOcgM0Jw_ZHpTfRn2-yQqCBEXMBVbxmf4XGklIWNPfFt39cbP5EMzOmsRncKeIrf8hxSgMw-5Ev2rCYN0Y48RZ4ZtPeUJhHFtj2EUAiUv78BbjZhZ_LFYeMsGA-67uAvLhoNbao6iA6_m-VwHU3ycE0Zom4OiQmrcpBu9Jg-9_9soip4vtRTQQy7OGIvzt"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <span className="font-['Space_Mono'] text-[#C8A165] text-xs uppercase mb-4 block">
                  01 / ЭТАП
                </span>
                <h3 className="text-3xl font-bold mb-6">Проектирование</h3>
                <p className="text-[#555555] dark:text-[#AAAAAA] mb-6 font-['Space_Mono'] text-sm">
                  Разработка архитектурной концепции и проектной документации.
                </p>
                <ul className="space-y-2 font-['Space_Mono'] text-xs text-[#555555] dark:text-[#AAAAAA]">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>Концептуальный
                    дизайн
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>Архитектурное
                    проектирование
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>3D
                    моделирование
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>
                    Параметрическое проектирование
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Engineering */}
          <div className="group relative bg-[#FFFFFF] dark:bg-[#242424] border border-[#E5E5E5] dark:border-[#333333] overflow-hidden min-h-[500px] flex flex-col">
            <div className="h-[250px] overflow-hidden relative">
              <img
                alt="Engineering structure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGTE3Hmop5tCSkfiKpqPAwRCcX_klsdRoG6xFQFMJoL1CuRrc614HXZwBTFM3qpebih-3GQwfcIt3hHyhJYnIyP9eT3M5wwp4MLWsFGTBuPb4HBMlWwKY_Rnqm1S5UqKMdiOa11r8DET9tjigpesAx_Ff3FATf6NGA_VqCDpnuhMtv3t9p_SGquXetasTgWt_IVAzpkjCi4JORbaqaxsdB4wMjvgvhBwNZAMPuaul7DyISJUZ-8C9jYrLKTwo2JzJNYtGFVkRKPgwv"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <span className="font-['Space_Mono'] text-[#C8A165] text-xs uppercase mb-4 block">
                  02 / ЭТАП
                </span>
                <h3 className="text-3xl font-bold mb-6">Инженерия</h3>
                <p className="text-[#555555] dark:text-[#AAAAAA] mb-6 font-['Space_Mono'] text-sm">
                  Техническая разработка объектов и расчет нагрузок.
                </p>
                <ul className="space-y-2 font-['Space_Mono'] text-xs text-[#555555] dark:text-[#AAAAAA]">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>Расчёт
                    конструкций
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>Инженерные
                    решения
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>Интеграция
                    оборудования и света
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 4.3 Production & 4.4 Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Production */}
          <div className="group relative bg-[#FFFFFF] dark:bg-[#242424] border border-[#E5E5E5] dark:border-[#333333] overflow-hidden min-h-[500px] flex flex-col">
            <div className="h-[250px] overflow-hidden relative">
              <img
                alt="Production process"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2m2d7YafEHROaGPxeM5g1wFg2SkjaUmn8XXhsg55BsMbZNxrzl0HoDcOvpqjncIBSKjiB5RB_qTPTFfKRv2rZl49ZGozud9qNGi86a2_kFcMBghh952DOqIi8-J5E2NK82cx3VkxxGDyWpt8PNL2ck5Wut4bhwA27xAF-1RpbSTJGOdB94x2BSfeoyTf8eA-SKtTIp0OzgPPXt7q-1MpHWg6TEop19nYgqdz7g_BgmM3L4jh_RIT0DT3aUJgV_8OlhuczDRdVp7JM"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <span className="font-['Space_Mono'] text-[#C8A165] text-xs uppercase mb-4 block">
                  03 / МОЩНОСТИ
                </span>
                <h3 className="text-3xl font-bold mb-6">Производство</h3>
                <p className="text-[#555555] dark:text-[#AAAAAA] mb-6 font-['Space_Mono'] text-sm">
                  Собственные производственные мощности для реализации сложных
                  форм.
                </p>
                <ul className="space-y-2 font-['Space_Mono'] text-xs text-[#555555] dark:text-[#AAAAAA]">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>
                    Металлоконструкции
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>Композитные
                    материалы
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>Покраска и
                    сборка
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="group relative bg-[#FFFFFF] dark:bg-[#242424] border border-[#E5E5E5] dark:border-[#333333] overflow-hidden min-h-[500px] flex flex-col">
            <div className="h-[250px] overflow-hidden relative">
              <img
                alt="CNC Technology"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY_28WWEx-o8Mve-gr_XjEZZSr3S8PIXgXhpxTWcKMOAP8P7YVqMzAQakmGzw3eossmajn3rrVoQKvURq6xjLt5cGPpNzjNcDj7gZ2MjYg97ZDpfKzVJqiU2wZBrbO2H9UQucvcZsSMJEa7PFEIq6i-igfFfq4iS1VQ5c_RCNkfVR-b2DGEPLMioyaQGQch8qZfMDxI1wzrYQ5KJ0JtPjtbNuof9pRu2_Hcu29JhlZKFtxB6PErLFGMSFt8YliRxBfxRaez7De-qZl"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <span className="font-['Space_Mono'] text-[#C8A165] text-xs uppercase mb-4 block">
                  04 / ИНСТРУМЕНТЫ
                </span>
                <h3 className="text-3xl font-bold mb-6">Технологии</h3>
                <p className="text-[#555555] dark:text-[#AAAAAA] mb-6 font-['Space_Mono'] text-sm">
                  Современные инструменты цифрового производства.
                </p>
                <ul className="space-y-2 font-['Space_Mono'] text-xs text-[#555555] dark:text-[#AAAAAA]">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>CNC обработка
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>Цифровое
                    моделирование
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C8A165]"></span>
                    Программирование световых систем
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 4.5 Process */}
        <section className="py-12 border-t border-[#E5E5E5] dark:border-[#333333]">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6">Процесс работы</h2>
            <p className="font-['Space_Mono'] text-sm text-[#555555] dark:text-[#AAAAAA]">
              Пошаговый путь от идеи до реализации.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Концепция",
              "Проектирование",
              "Инженерия",
              "Производство",
              "Монтаж",
            ].map((step, i) => (
              <div
                key={i}
                className="relative p-6 border border-[#E5E5E5] dark:border-[#333333] hover:border-[#C8A165] transition-colors group"
              >
                <span className="text-6xl font-bold text-[#E5E5E5] dark:text-[#333333] group-hover:text-[#C8A165]/20 absolute top-2 right-4 transition-colors">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-bold relative z-10 mt-8">{step}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 4.6 Quality Control */}
        <section className="py-12 border-t border-[#E5E5E5] dark:border-[#333333] bg-[#FFFFFF] dark:bg-[#242424] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Контроль качества</h2>
              <p className="text-[#555555] dark:text-[#AAAAAA] mb-8 font-['Space_Mono'] text-sm leading-relaxed">
                Многоступенчатая система проверки качества изделий гарантирует
                надежность и долговечность каждой конструкции.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C8A165]">
                    fact_check
                  </span>
                  <span className="font-['Space_Mono'] text-xs uppercase">
                    Тестирование
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C8A165]">
                    build
                  </span>
                  <span className="font-['Space_Mono'] text-xs uppercase">
                    Сборка
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C8A165]">
                    verified
                  </span>
                  <span className="font-['Space_Mono'] text-xs uppercase">
                    Проверка
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[300px] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
              <img
                alt="Quality control"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBIZwuvLx1N6n6CTJU0fWklWNT1cbO8XyzuvcQJuZ2mngh9PtLmYeeeKc1ZLQKsqH1hHPv_-2bk9LPBvgTXurhU3WcocG9xU9W4QZmfGdcAHW3OIa_qqctkSu-7ZWpJe55NPXKjH49EqeW4gHLs299z2hDI3HPlrFvOyGzzE_rhHIr4oPFcgMafJ7ihMot8B8K-_DlL2T9YwO-0SPb9xsi9rXtxYHtrWprY0ZVgQONZtvXYIO44AIDDxkeTh4C2utH4UMV-BWkJ4Jp"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
