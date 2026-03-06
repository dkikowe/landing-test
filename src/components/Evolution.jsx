import React, { useEffect } from "react";

// Fonts to include in index.html:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

export default function Evolution() {
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
    <div className="bg-[#F5F5F3] dark:bg-[#121212] text-gray-900 dark:text-gray-100 font-['Inter'] transition-colors duration-300 min-h-screen">
      <style>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #888; border-radius: 3px; }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      <header className="pt-32 pb-16 px-6 max-w-[1440px] mx-auto border-b-[0.5px] border-[#D4D4D4] dark:border-[#333333]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 fade-in-up">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              Форма Следует за <br />
              <i className="font-serif text-[#C19D68]">Движением.</i>
            </h1>
          </div>
          <div className="lg:col-span-4 fade-in-up delay-100">
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
              От эфемерных световых инсталляций до монументальной архитектуры.
              Прослеживая нашу эволюцию с 2009 года до наших дней.
            </p>
            <div className="flex items-center gap-4 text-xs font-['Space_Mono'] uppercase tracking-widest text-gray-500 dark:text-gray-500">
              <span>Осн. 2009</span>
              <span className="w-12 h-[0.5px] bg-gray-400 dark:bg-gray-600"></span>
              <span>Константин Бурцев</span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 max-w-[1440px] mx-auto border-b-[0.5px] border-[#D4D4D4] dark:border-[#333333]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] md:aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800 fade-in-up delay-200 group">
            <img
              alt="Портрет Константина Бурцева"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJGFDaDoj7am4uTuSFXh5HnUc7ZjUolejNdloncnvkeY9q3rd0oXmHhhbmVo8L1bri_9jD-pFX0VfTnyWJrwHbC9fEXPt8bmDIIa4rX1hIEZUxil3EJZl9CYT-xzxYtP0mIrEpFeM9zc8sGWP0aCqscdnv6QSVAAZ8NL8cHEQhSXzuS3MAXxRUNlW0U7QQ0Q51c_t1_A3upkS5L-Ad4yi680RjSnU6Rfm1NV0Siit3OOM2Xnk2Zph3sh03dSEnvZ4yhLAL-4wJQrzI"
            />
            <div className="absolute bottom-4 left-4 font-['Space_Mono'] text-xs bg-[#F5F5F3] dark:bg-[#121212] px-2 py-1 border border-[#D4D4D4] dark:border-[#333333]">
              Константин Бурцев, Основатель
            </div>
          </div>
          <div className="fade-in-up delay-300">
            <svg
              className="w-12 h-12 text-[#C19D68] mb-8 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21L14.017 18C14.017 16.095 15.111 15.688 15.71 15.688C15.823 15.688 15.938 15.694 16.05 15.706C16.666 15.767 17.59 15.86 18.258 15.541C18.672 15.344 19.018 15.011 19.266 14.59C19.513 14.169 19.646 13.684 19.646 13.193C19.646 12.012 18.983 11.233 17.674 11.233C16.976 11.233 16.386 11.458 15.908 11.898C15.378 12.385 15.143 13.064 15.029 13.565C14.978 13.784 14.945 13.971 14.925 14.116L11.59 13.511C11.666 12.898 11.841 11.961 12.355 11.08C12.923 10.108 13.972 9.07 15.709 8.608C16.29 8.453 16.924 8.375 17.598 8.375C19.296 8.375 20.803 8.941 21.94 9.986C23.076 11.029 23.702 12.529 23.702 14.209C23.702 16.241 22.846 17.979 21.288 19.167C19.96 20.179 18.32 20.672 16.516 20.672C15.556 20.672 14.717 20.485 14.017 20.115V21H14.017ZM5.766 21L5.766 18C5.766 16.095 6.86 15.688 7.46 15.688C7.572 15.688 7.688 15.694 7.8 15.706C8.415 15.767 9.34 15.86 10.007 15.541C10.422 15.344 10.768 15.011 11.015 14.59C11.263 14.169 11.396 13.684 11.396 13.193C11.396 12.012 10.732 11.233 9.424 11.233C8.726 11.233 8.135 11.458 7.658 11.898C7.127 12.385 6.893 13.064 6.779 13.565C6.727 13.784 6.695 13.971 6.674 14.116L3.34 13.511C3.416 12.898 3.591 11.961 4.105 11.08C4.673 10.108 5.722 9.07 7.459 8.608C8.04 8.453 8.674 8.375 9.348 8.375C11.045 8.375 12.553 8.941 13.69 9.986C14.826 11.029 15.452 12.529 15.452 14.209C15.452 16.241 14.596 17.979 13.038 19.167C11.71 20.179 10.07 20.672 8.266 20.672C7.306 20.672 6.467 20.485 5.766 20.115V21H5.766Z"></path>
            </svg>
            <blockquote className="font-['Playfair_Display'] text-3xl md:text-4xl italic leading-tight text-gray-900 dark:text-gray-100 mb-6">
              "Архитектура жива, когда она отражает человека. Она перестает быть
              фоном и становится участником жизни."
            </blockquote>
            <p className="font-['Space_Mono'] text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide">
              — Константин Бурцев
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-[1440px] mx-auto px-6">
        <div className="py-12 border-l-[0.5px] border-r-[0.5px] border-[#D4D4D4] dark:border-[#333333] pl-6 md:pl-12">
          <h2 className="font-['Space_Mono'] text-sm uppercase tracking-widest text-[#C19D68] mb-2">
            Хронология
          </h2>
          <p className="font-['Playfair_Display'] text-2xl">
            Полтора десятилетия пространственных экспериментов.
          </p>
        </div>

        <section className="group relative border-t-[0.5px] border-[#D4D4D4] dark:border-[#333333] py-16 md:py-24 transition-colors hover:bg-gray-50 dark:hover:bg-white/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3 flex flex-col justify-between h-full border-l-[0.5px] border-[#C19D68]/30 pl-6 md:pl-0 md:border-l-0">
              <div>
                <span className="font-['Space_Mono'] text-4xl md:text-5xl font-bold text-gray-300 dark:text-gray-700 block mb-2 group-hover:text-[#C19D68] transition-colors duration-500">
                  2009
                </span>
                <span className="font-['Space_Mono'] text-sm uppercase tracking-widest text-gray-500">
                  — 2013
                </span>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                  Эра bti.one
                </h3>
                <p className="text-sm text-gray-500">Мультимедиа и Свет</p>
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                Студия начиналась как <strong>bti.one</strong>, фокусируясь на
                эфемерных переживаниях. Мы экспериментировали с видеомэппингом,
                световыми инсталляциями и временными пространственными
                интервенциями. Материал был нематериальным: фотоны, звуковые
                волны и моменты времени.
              </p>
              <ul className="space-y-4 font-['Space_Mono'] text-sm text-gray-600 dark:text-gray-400 border-l border-[#D4D4D4] dark:border-[#333333] pl-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C19D68] rounded-full"></span>
                  Интерактивные Фасады
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C19D68] rounded-full"></span>
                  Цифровая Сценография
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C19D68] rounded-full"></span>
                  Городские Фестивали Света
                </li>
              </ul>
            </div>
            <div className="md:col-span-4 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  alt="Early light installation work"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAclQXlW1gnDzGAlaihuXn4VQltTiA5xyecuKIIHD1v_d2BJkYBYZNHix_nC1FP78icGc43Pc0obDFXAlnrNI50dKi85eFLKskrMfjBuhIcmgk0WcJRYdou0lBDRC3Q2rwMgCAfggpLqJFBoCd_6i7opU5J2xpu9lE8kwJTR9w45KX78pgweuqoXxLoECjD3PGZCdPe6TaWGmD--1gSGC9Jo5NdPb72z2FS1nlKWvIqm5ZG0PWtJGq5KZsbnBIk1ugGdDDw4yjLV6IX"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#F5F5F3] dark:bg-[#121212] border border-[#D4D4D4] dark:border-[#333333] p-4 max-w-[200px] z-10 hidden md:block">
                <p className="font-['Space_Mono'] text-xs leading-tight">
                  Первый масштабный видеомэппинг в Москве, 2011.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="group relative border-t-[0.5px] border-[#D4D4D4] dark:border-[#333333] py-16 md:py-24 transition-colors hover:bg-gray-50 dark:hover:bg-white/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3 flex flex-col justify-between h-full border-l-[0.5px] border-[#C19D68]/30 pl-6 md:pl-0 md:border-l-0">
              <div>
                <span className="font-['Space_Mono'] text-4xl md:text-5xl font-bold text-gray-300 dark:text-gray-700 block mb-2 group-hover:text-[#C19D68] transition-colors duration-500">
                  2014
                </span>
                <span className="font-['Space_Mono'] text-sm uppercase tracking-widest text-gray-500">
                  — 2019
                </span>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                  Эра bti.one
                </h3>
                <p className="text-sm text-gray-500">Кортен и Бетон</p>
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                Поворот к постоянству. Цифровые алгоритмы, использовавшиеся для
                света, были переведены в физическую материю. Мы начали работать
                с кортеновской сталью, складывая сложные геометрии в самонесущие
                структуры. Серия "Fold" переопределила общественные пространства
                в жилых комплексах.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-[#1C1C1C] p-4 border border-[#D4D4D4] dark:border-[#333333]">
                  <span className="block font-['Space_Mono'] text-xs text-[#C19D68] mb-1">
                    Ключевой Проект
                  </span>
                  <span className="font-['Playfair_Display'] text-lg">
                    The Vertex
                  </span>
                </div>
                <div className="bg-white dark:bg-[#1C1C1C] p-4 border border-[#D4D4D4] dark:border-[#333333]">
                  <span className="block font-['Space_Mono'] text-xs text-[#C19D68] mb-1">
                    Материал
                  </span>
                  <span className="font-['Playfair_Display'] text-lg">
                    Погодоустойчивая Сталь
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  alt="Geometric Corten Steel Sculpture glowing at dusk"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp5wtm1_Mc4x_x5WA36m_hTDdXtJn2F2UglDezACWxivgCkPmthlzX5qcGuegq0jesAJGeAltvHW4ZDhbHnSeus_zIU_xh76KGaUdNhr3jEvxa8fVavHxfYloi3E5x8svpTXRtw3Z0I0cp2GLDkNZ73Bm8otl9x7AAbAZnPGoWxI6eBDMeYMZOUeEJUMaI2rLrrl-K5dXVukfre2iEU4se4q_p1zVZgOjVKvIxjzSDIP-6K860FD7n4r6PCnopLqNC2GcTcyU6d0eN"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="group relative border-t-[0.5px] border-[#D4D4D4] dark:border-[#333333] py-16 md:py-24 transition-colors hover:bg-gray-50 dark:hover:bg-white/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3 flex flex-col justify-between h-full border-l-[0.5px] border-[#C19D68]/30 pl-6 md:pl-0 md:border-l-0">
              <div>
                <span className="font-['Space_Mono'] text-4xl md:text-5xl font-bold text-gray-300 dark:text-gray-700 block mb-2 group-hover:text-[#C19D68] transition-colors duration-500">
                  2020
                </span>
                <span className="font-['Space_Mono'] text-sm uppercase tracking-widest text-gray-500">
                  — Наст. время
                </span>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                  Сдвиг в сторону материалов
                </h3>
                <p className="text-sm text-gray-500">
                  Параметрическая Текучесть
                </p>
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                Ребрендинг в <strong>monumforma</strong>. Теперь мы работаем на
                стыке высокотехнологичного производства и вычислительного
                дизайна. Наш фокус — зеркально полированная нержавеющая сталь и
                полупрозрачные стеклянные структуры, которые растворяются в
                окружающей среде, одновременно закрепляя её.
              </p>
              <p className="text-md leading-relaxed text-gray-500 dark:text-gray-400 mb-8">
                Мы не просто строим объекты; мы курируем отражение окружающего
                мира.
              </p>
              <a
                className="inline-flex items-center gap-2 font-['Space_Mono'] text-sm uppercase border-b border-[#C19D68] pb-1 hover:text-[#C19D68] transition-colors"
                href="#"
              >
                Смотреть текущую коллекцию <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="md:col-span-4 relative">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  alt="Stainless steel infinity sculpture reflecting sunset"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSRx-sjLdMm_I5DASjuMtOtr-j8cmjgocqP3cU47OWprMAMN8j90omATz-iENEaoa63WDXBowBF-gB9wahDKCqGk1AwxXTbZqrgwKPBbFX4S0MY7oYVXbriae8vuGPJe4btf5pazW_2bYJ7Lm_ABcYSvkymUEbM6xxFGQzw7xjbNe7-JOs8OkETKokrdNOH8bKiJYezi2IPTfwOXrGlhJHlgu7NAlPAcKhxxxJ1doH3FoGEsUx7K3gu5mcTD48sGAHjsWQzS_dyMjJ"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt="Translucent glass organic sculpture"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjcRgMkijZ2-nbi3p7r-u0tlnI7cSPxppDV-8yu8Tvi5qCI8NjU3hxbN6pccQaW33-eKrNllJtdpPLrRexrEVXqJTPh6Gi2OSZ1rIibtjRQmflW52sSfX6t1lSnsZsN7XeLeMhd9qvwjGkRehBm3r5-jTgmtfGEa54vyNO7UmpuAIpE9y2IM8opscLqdxEe-dlcYSFgS8ZadshQ4_oIGwdXnOboSMy9RfHaji15RKu2V8w1UEwT7WK6WWaXm8W3W9OS5_4B8An63vc"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="py-24 bg-gray-100 dark:bg-black mt-12 border-t border-[#D4D4D4] dark:border-[#333333]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D4D4D4] dark:bg-[#333333] border border-[#D4D4D4] dark:border-[#333333]">
            <div className="bg-[#F5F5F3] dark:bg-[#121212] p-8 md:p-12 hover:bg-white dark:hover:bg-[#1C1C1C] transition-colors duration-300">
              <h4 className="font-['Space_Mono'] text-xs uppercase text-[#C19D68] mb-4">
                01. Дизайн
              </h4>
              <h3 className="font-['Playfair_Display'] text-2xl mb-4">
                Вычислительная логика
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                Использование Grasshopper и Python для создания форм,
                оптимизирующих использование материалов и структурную
                целостность.
              </p>
            </div>
            <div className="bg-[#F5F5F3] dark:bg-[#121212] p-8 md:p-12 hover:bg-white dark:hover:bg-[#1C1C1C] transition-colors duration-300">
              <h4 className="font-['Space_Mono'] text-xs uppercase text-[#C19D68] mb-4">
                02. Производство
              </h4>
              <h3 className="font-['Playfair_Display'] text-2xl mb-4">
                Точное проектирование
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                5-осевая фрезеровка с ЧПУ, лазерная резка и роботизированная
                сварка гарантируют соответствие цифрового двойника реальности.
              </p>
            </div>
            <div className="bg-[#F5F5F3] dark:bg-[#121212] p-8 md:p-12 hover:bg-white dark:hover:bg-[#1C1C1C] transition-colors duration-300">
              <h4 className="font-['Space_Mono'] text-xs uppercase text-[#C19D68] mb-4">
                03. Монтаж
              </h4>
              <h3 className="font-['Playfair_Display'] text-2xl mb-4">
                Глобальная логистика
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                От городских площадей в Дубае до частных садов в Лондоне. Мы
                берем на себя структурные расчеты и сборку.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
