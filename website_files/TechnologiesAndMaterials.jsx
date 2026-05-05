import React, { useEffect } from "react";

// Fonts to include in index.html:
// <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />

export default function TechnologiesAndMaterials() {
  useEffect(() => {
    // Dark mode logic
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    }
    const listener = (event) => {
      if (event.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);
    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
  }, []);

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#111111] text-[#111111] dark:text-[#E5E5E5] font-['Space_Grotesk'] antialiased transition-colors duration-300 min-h-screen">
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #444; }
        ::-webkit-scrollbar-thumb:hover { background: #C4A473; }
        .grid-bg {
          background-image: linear-gradient(to right, rgba(100, 100, 100, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(100, 100, 100, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden grid-bg">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="font-['Space_Mono'] text-[#C4A473] text-sm mb-6 tracking-widest">
              {"/// MATERIALITY_LIBRARY_V.04"}
            </p>
            <h1 className="text-5xl lg:text-7xl font-light mb-8 leading-tight">
              Где Параметрический Дизайн <br /> Встречает{" "}
              <span className="italic font-serif text-[#C4A473]">
                Вечную Материю
              </span>
              .
            </h1>
            <p className="text-lg text-[#666666] dark:text-[#999999] max-w-xl leading-relaxed font-['Space_Mono'] text-sm border-l-2 border-[#C4A473] pl-6">
              Наша библиотека материалов объединяет передовые композитные
              технологии с вечными архитектурными металлами. Создано для
              монументального масштаба и бесконечной долговечности.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 dark:opacity-20 pointer-events-none hidden lg:block">
          <svg
            className="h-full w-full stroke-current text-[#111111] dark:text-[#E5E5E5]"
            viewBox="0 0 400 800"
          >
            <path
              d="M50,0 Q200,400 50,800 M150,0 Q300,400 150,800 M250,0 Q400,400 250,800"
              fill="none"
              strokeWidth="1"
            ></path>
          </svg>
        </div>
      </header>

      <section className="py-20 bg-[#FFFFFF] dark:bg-[#1A1A1A] border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-light">Спецификации Материалов</h2>
            <div className="hidden md:block font-['Space_Mono'] text-xs text-[#666666] dark:text-[#999999]">
              ЛИСТАТЬ ДЛЯ ПОДРОБНОСТЕЙ ↓
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-[#F5F5F5] dark:bg-[#111111] border border-gray-200 dark:border-gray-800 hover:border-[#C4A473] transition-colors duration-500">
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200 relative">
                <img
                  alt="Corten Steel Texture"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdt-GQGsk8fMbU7bkqWFPr5X2xAHv-24WXA2M5vhg2KZoZuV-8oRSm5fno396dPQ_Uo3_CY9FfFXtstjf5fNxpUT5Nj0Iw2cYMD5JN2k0-EMq_fP7XbydKstmSNIsOW281KAV962_UdLR5P3K2lwJDpxHmTl3OKqXMNpnPyYokuhdZnsF6fsaZltAh3UBEVWr47SWbVXFzd53aFoVxS4A_EUIrhdmRLVj-3uLQP7qiMSo1YIEG7fpp_FXXC_T_qEoB5NBIeUfNPBZ6"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold uppercase tracking-wider">
                    КОРТЕНОВСКАЯ СТАЛЬ
                  </h3>
                  <span className="text-[#C4A473] font-['Space_Mono'] text-xs border border-[#C4A473] px-2 py-0.5">
                    CS-09
                  </span>
                </div>
                <div className="space-y-3 font-['Space_Mono'] text-xs text-[#666666] dark:text-[#999999] border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between">
                    <span>СПЛАВ:</span>
                    <span className="text-[#111111] dark:text-[#E5E5E5]">
                      ASTM A588
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>ОТДЕЛКА:</span>
                    <span className="text-[#111111] dark:text-[#E5E5E5]">
                      ЕСТЕСТВЕННОЕ ОКИСЛЕНИЕ
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>СРОК СЛУЖБЫ:</span>
                    <span className="text-[#111111] dark:text-[#E5E5E5]">
                      100+ ЛЕТ
                    </span>
                  </div>
                  <div className="mt-4 text-justify leading-tight opacity-80">
                    Самозащищающаяся сталь, которая со временем приобретает
                    стабильный ржавый вид. Идеально подходит для
                    крупномасштабных уличных монументальных форм.
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative bg-[#F5F5F5] dark:bg-[#111111] border border-gray-200 dark:border-gray-800 hover:border-[#C4A473] transition-colors duration-500">
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200 relative">
                <img
                  alt="Polished Stainless Steel Texture"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2m2d7YafEHROaGPxeM5g1wFg2SkjaUmn8XXhsg55BsMbZNxrzl0HoDcOvpqjncIBSKjiB5RB_qTPTFfKRv2rZl49ZGozud9qNGi86a2_kFcMBghh952DOqIi8-J5E2NK82cx3VkxxGDyWpt8PNL2ck5Wut4bhwA27xAF-1RpbSTJGOdB94x2BSfeoyTf8eA-SKtTIp0OzgPPXt7q-1MpHWg6TEop19nYgqdz7g_BgmM3L4jh_RIT0DT3aUJgV_8OlhuczDRdVp7JM"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold uppercase tracking-wider">
                    МОРСКАЯ СТАЛЬ
                  </h3>
                  <span className="text-[#C4A473] font-['Space_Mono'] text-xs border border-[#C4A473] px-2 py-0.5">
                    SS-316L
                  </span>
                </div>
                <div className="space-y-3 font-['Space_Mono'] text-xs text-[#666666] dark:text-[#999999] border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between">
                    <span>СПЛАВ:</span>
                    <span className="text-[#111111] dark:text-[#E5E5E5]">
                      316L НЕРЖАВЕЮЩАЯ
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>ОТДЕЛКА:</span>
                    <span className="text-[#111111] dark:text-[#E5E5E5]">
                      СУПЕР ЗЕРКАЛО #8
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>ОТРАЖЕНИЕ:</span>
                    <span className="text-[#111111] dark:text-[#E5E5E5]">
                      98% ОПТИЧЕСКОЕ
                    </span>
                  </div>
                  <div className="mt-4 text-justify leading-tight opacity-80">
                    Текучие, жидкоподобные поверхности, достигаемые
                    многоступенчатой ручной полировкой. Максимальная
                    коррозионная стойкость.
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative bg-[#F5F5F5] dark:bg-[#111111] border border-gray-200 dark:border-gray-800 hover:border-[#C4A473] transition-colors duration-500">
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200 relative">
                <img
                  alt="Patinated Bronze Texture"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBIZwuvLx1N6n6CTJU0fWklWNT1cbO8XyzuvcQJuZ2mngh9PtLmYeeeKc1ZLQKsqH1hHPv_-2bk9LPBvgTXurhU3WcocG9xU9W4QZmfGdcAHW3OIa_qqctkSu-7ZWpJe55NPXKjH49EqeW4gHLs299z2hDI3HPlrFvOyGzzE_rhHIr4oPFcgMafJ7ihMot8B8K-_DlL2T9YwO-0SPb9xsi9rXtxYHtrWprY0ZVgQONZtvXYIO44AIDDxkeTh4C2utH4UMV-BWkJ4Jp"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold uppercase tracking-wider">
                    СТАТУАРНАЯ БРОНЗА
                  </h3>
                  <span className="text-[#C4A473] font-['Space_Mono'] text-xs border border-[#C4A473] px-2 py-0.5">
                    BZ-Si
                  </span>
                </div>
                <div className="space-y-3 font-['Space_Mono'] text-xs text-[#666666] dark:text-[#999999] border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between">
                    <span>СОСТАВ:</span>
                    <span className="text-[#111111] dark:text-[#E5E5E5]">
                      КРЕМНИЕВАЯ БРОНЗА
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>ПАТИНА:</span>
                    <span className="text-[#111111] dark:text-[#E5E5E5]">
                      ЗАКАЗНАЯ ТЕРМИЧЕСКАЯ
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>ЛИТЬЕ:</span>
                    <span className="text-[#111111] dark:text-[#E5E5E5]">
                      ПО ВЫПЛАВЛЯЕМЫМ МОДЕЛЯМ
                    </span>
                  </div>
                  <div className="mt-4 text-justify leading-tight opacity-80">
                    Традиционный материал в новом прочтении. Способен
                    запечатлеть мельчайшие параметрические детали благодаря
                    точному литью.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 grid-bg relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="font-['Space_Mono'] text-[#C4A473] text-sm mb-4">
              {"/// PROCESS_FLOW"}
            </p>
            <h2 className="text-4xl font-light mb-6">
              От Цифры к Физической Форме
            </h2>
            <p className="text-[#666666] dark:text-[#999999] font-light">
              Мы преодолеваем разрыв между вычислительным дизайном и
              промышленным мастерством. Каждый проект проходит тщательное
              моделирование перед физическим изготовлением.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-gray-200 dark:border-gray-800">
            <div className="p-8 border-r border-b border-gray-200 dark:border-gray-800 hover:bg-[#FFFFFF] dark:hover:bg-[#1A1A1A] transition-colors group">
              <div className="h-16 w-16 mb-8 relative">
                <svg
                  className="w-full h-full stroke-[#111111] dark:stroke-[#E5E5E5] fill-none stroke-[1.5]"
                  viewBox="0 0 64 64"
                >
                  <path
                    className="group-hover:stroke-[#C4A473] transition-colors duration-300"
                    d="M4,32 Q16,4 32,32 T60,32"
                  ></path>
                  <path
                    className="opacity-50 group-hover:stroke-[#C4A473] transition-colors duration-300"
                    d="M4,32 Q16,60 32,32 T60,32"
                  ></path>
                  <circle
                    className="fill-[#C4A473] stroke-none"
                    cx="32"
                    cy="32"
                    r="2"
                  ></circle>
                </svg>
              </div>
              <h4 className="font-['Space_Mono'] text-sm text-[#C4A473] mb-2">
                01. СИМУЛЯЦИЯ
              </h4>
              <h3 className="text-xl font-bold mb-3">Параметрический анализ</h3>
              <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed">
                Структурная оптимизация с использованием конечно-элементного
                анализа (FEA) для обеспечения целостности при ветровых и
                сейсмических нагрузках.
              </p>
            </div>
            <div className="p-8 border-r border-b border-gray-200 dark:border-gray-800 hover:bg-[#FFFFFF] dark:hover:bg-[#1A1A1A] transition-colors group">
              <div className="h-16 w-16 mb-8 relative">
                <svg
                  className="w-full h-full stroke-[#111111] dark:stroke-[#E5E5E5] fill-none stroke-[1.5]"
                  viewBox="0 0 64 64"
                >
                  <rect
                    className="group-hover:stroke-[#C4A473] transition-colors duration-300"
                    height="48"
                    width="48"
                    x="8"
                    y="8"
                  ></rect>
                  <line x1="8" x2="56" y1="20" y2="20"></line>
                  <line x1="20" x2="20" y1="20" y2="56"></line>
                  <rect
                    height="10"
                    strokeDasharray="2,2"
                    width="10"
                    x="35"
                    y="35"
                  ></rect>
                </svg>
              </div>
              <h4 className="font-['Space_Mono'] text-sm text-[#C4A473] mb-2">
                02. ДОКУМЕНТАЦИЯ
              </h4>
              <h3 className="text-xl font-bold mb-3">BIM интеграция</h3>
              <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed">
                Модели с полным уровнем детализации (LOD) 400 для бесшовной
                интеграции в архитектурные генеральные планы.
              </p>
            </div>
            <div className="p-8 border-r border-b border-gray-200 dark:border-gray-800 hover:bg-[#FFFFFF] dark:hover:bg-[#1A1A1A] transition-colors group">
              <div className="h-16 w-16 mb-8 relative">
                <svg
                  className="w-full h-full stroke-[#111111] dark:stroke-[#E5E5E5] fill-none stroke-[1.5]"
                  viewBox="0 0 64 64"
                >
                  <polyline
                    className="group-hover:stroke-[#C4A473] transition-colors duration-300"
                    points="10,50 25,35 45,35 55,15"
                  ></polyline>
                  <circle cx="25" cy="35" r="3"></circle>
                  <circle cx="45" cy="35" r="3"></circle>
                  <path
                    className="fill-current"
                    d="M55,15 L50,10 L60,10 Z"
                  ></path>
                </svg>
              </div>
              <h4 className="font-['Space_Mono'] text-sm text-[#C4A473] mb-2">
                03. ПРОИЗВОДСТВО
              </h4>
              <h3 className="text-xl font-bold mb-3">
                Роботизированная фрезеровка
              </h3>
              <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed">
                5-осевая фрезеровка ЧПУ крупномасштабных форм для композитного
                литья или прямой резьбы по камню с субмиллиметровой точностью.
              </p>
            </div>
            <div className="p-8 border-r border-b border-gray-200 dark:border-gray-800 hover:bg-[#FFFFFF] dark:hover:bg-[#1A1A1A] transition-colors group">
              <div className="h-16 w-16 mb-8 relative">
                <svg
                  className="w-full h-full stroke-[#111111] dark:stroke-[#E5E5E5] fill-none stroke-[1.5]"
                  viewBox="0 0 64 64"
                >
                  <path
                    className="group-hover:stroke-[#C4A473] transition-colors duration-300"
                    d="M32,10 L32,54 M10,32 L54,32"
                  ></path>
                  <circle cx="32" cy="32" r="16" strokeDasharray="4,4"></circle>
                  <circle
                    className="opacity-30"
                    cx="32"
                    cy="32"
                    r="22"
                  ></circle>
                </svg>
              </div>
              <h4 className="font-['Space_Mono'] text-sm text-[#C4A473] mb-2">
                04. СБОРКА
              </h4>
              <h3 className="text-xl font-bold mb-3">Ручная отделка</h3>
              <p className="text-sm text-[#666666] dark:text-[#999999] leading-relaxed">
                Ручная полировка, патинирование и сборка на месте нашей командой
                мастеров для обеспечения музейного качества.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Sculptural Detail"
            className="w-full h-full object-cover opacity-20 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB6obJD68cpdtwXbYSLA_WtaC_zvsZRsMe9xZgJY8fSZaZv-wFGPzFHZkZTqIFJbuBGywwRJkhokOd6P1rTeQMajTtf0AHvpDt-WfubD33BV2PleeuFio9ygtotCgsSgQDZrZFDSYHjKtXLpAC4raWWIvkbmFM8bxdVLh1oUnXq_ktHLiXdQoc87OEuOwbmDSGrLMZKkTtyMr4anxu78TwXKawzwy9BdE-oNvF6-bNBR5TGbW6MU9mp6HZiKtJCvCkg_EDLmliE9Ng"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block border border-[#C4A473]/50 text-[#C4A473] px-4 py-1 font-['Space_Mono'] text-xs mb-6">
              КЕЙС: БАШНЯ AEON
            </div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Стеклофибробетон (СФБ)
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Для лобби башни Aeon мы разработали уникальную сверхпрочную
              бетонную смесь. Легкая, но обладающая тактильной плотностью камня.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-800 pt-8 font-['Space_Mono'] text-sm">
              <div>
                <div className="text-gray-500 mb-1">СНИЖЕНИЕ ВЕСА</div>
                <div className="text-2xl text-white">-65%</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">ПРОЧНОСТЬ НА РАЗРЫВ</div>
                <div className="text-2xl text-white">18 МПа</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <img
                alt="Concrete Texture Detail"
                className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 border border-gray-800"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY_28WWEx-o8Mve-gr_XjEZZSr3S8PIXgXhpxTWcKMOAP8P7YVqMzAQakmGzw3eossmajn3rrVoQKvURq6xjLt5cGPpNzjNcDj7gZ2MjYg97ZDpfKzVJqiU2wZBrbO2H9UQucvcZsSMJEa7PFEIq6i-igfFfq4iS1VQ5c_RCNkfVR-b2DGEPLMioyaQGQch8qZfMDxI1wzrYQ5KJ0JtPjtbNuof9pRu2_Hcu29JhlZKFtxB6PErLFGMSFt8YliRxBfxRaez7De-qZl"
              />
              <img
                alt="Concrete Form"
                className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 border border-gray-800 mt-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGTE3Hmop5tCSkfiKpqPAwRCcX_klsdRoG6xFQFMJoL1CuRrc614HXZwBTFM3qpebih-3GQwfcIt3hHyhJYnIyP9eT3M5wwp4MLWsFGTBuPb4HBMlWwKY_Rnqm1S5UqKMdiOa11r8DET9tjigpesAx_Ff3FATf6NGA_VqCDpnuhMtv3t9p_SGquXetasTgWt_IVAzpkjCi4JORbaqaxsdB4wMjvgvhBwNZAMPuaul7DyISJUZ-8C9jYrLKTwo2JzJNYtGFVkRKPgwv"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
