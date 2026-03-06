import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Company() {
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

  const teamMembers = [
    {
      role: "Ведущий Архитектор",
      name: "Анна С.",
      desc: "Специалист по параметрическому моделированию и сложным геометриям.",
    },
    {
      role: "Главный Инженер",
      name: "Михаил К.",
      desc: "Эксперт в области конструкционных расчетов и материаловедения.",
    },
    {
      role: "Дизайнер Среды",
      name: "Елена В.",
      desc: "Создает концепции интеграции арт-объектов в городские пространства.",
    },
  ];

  return (
    <div className="bg-[#F9F9F7] dark:bg-[#0F0F0F] text-[#0A0A0A] dark:text-[#F0F0F0] font-['DM_Sans'] transition-colors duration-300 min-h-screen">
      <style>{`
        body { font-feature-settings: "ss01", "ss02", "cv01", "cv02"; }
      `}</style>

      {/* Header Section */}
      <header className="pt-32 pb-12 px-6 max-w-[1440px] mx-auto border-b border-[#E5E5E5] dark:border-[#404040]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Syne'] font-bold tracking-tighter leading-[0.9] mb-6">
              <span className="text-[#D4AF37] italic">О КОМПАНИИ</span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4 font-['Space_Mono'] text-sm text-[#666666] dark:text-[#999999] border-l border-[#E5E5E5] dark:border-[#404040] pl-6">
            <p>РАЗДЕЛ РАССКАЗЫВАЕТ О КОМПАНИИ, КОМАНДЕ И ИСТОРИИ РАЗВИТИЯ</p>
            <p className="mt-4">
              Мы создаем не просто объекты, а новые смыслы в пространстве,
              объединяя искусство, технологии и инженерию.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto pb-20">
        {/* 5.1 About */}
        <section className="px-6 py-16 border-b border-[#E5E5E5] dark:border-[#404040]">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-['Syne']">
              О компании
            </h2>
            <p className="font-['DM_Sans'] text-lg md:text-xl text-[#666666] dark:text-[#999999] leading-relaxed mb-8">
              Студия monumforma занимается проектированием и производством
              монументальных архитектурных форм, арт-объектов и кинетических
              инсталляций. Мы работаем на стыке искусства и высоких технологий,
              превращая смелые идеи в физическую реальность.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#404040]">
                <h3 className="font-['Space_Mono'] text-[#D4AF37] text-sm uppercase mb-4">
                  Философия
                </h3>
                <p className="text-sm">
                  Форма следует за движением. Мы верим, что статика может быть
                  динамичной, а тяжелые материалы — визуально легкими.
                </p>
              </div>
              <div className="p-6 bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#404040]">
                <h3 className="font-['Space_Mono'] text-[#D4AF37] text-sm uppercase mb-4">
                  Масштаб
                </h3>
                <p className="text-sm">
                  От камерных интерьерных скульптур до многометровых городских
                  доминант, изменяющих облик района.
                </p>
              </div>
              <div className="p-6 bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#404040]">
                <h3 className="font-['Space_Mono'] text-[#D4AF37] text-sm uppercase mb-4">
                  Технологии
                </h3>
                <p className="text-sm">
                  Параметрическое проектирование, роботизированное производство
                  и интеграция умных систем управления светом.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5.2 Team */}
        <section className="px-6 py-16 border-b border-[#E5E5E5] dark:border-[#404040]">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-['Syne']">
              Команда
            </h2>
            <p className="font-['Space_Mono'] text-sm md:text-base text-[#666666] dark:text-[#999999] max-w-2xl">
              Архитекторы, инженеры и дизайнеры, объединенные страстью к
              инновациям.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#404040] overflow-hidden"
              >
                <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                  {/* Placeholder for team member photo - using a generic architectural pattern or abstract image if no real photo available */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[#D4AF37] opacity-20 font-['Syne'] text-9xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <span className="font-['Space_Mono'] text-xs text-[#D4AF37] uppercase tracking-widest block mb-2">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-bold mb-2 font-['Syne']">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#666666] dark:text-[#999999]">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5.3 Founder */}
        <section className="px-6 py-16 border-b border-[#E5E5E5] dark:border-[#404040]">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 font-['Syne']">
            Основатель
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] md:aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800 group border border-[#E5E5E5] dark:border-[#404040]">
              <img
                alt="Портрет Константина Бурцева"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJGFDaDoj7am4uTuSFXh5HnUc7ZjUolejNdloncnvkeY9q3rd0oXmHhhbmVo8L1bri_9jD-pFX0VfTnyWJrwHbC9fEXPt8bmDIIa4rX1hIEZUxil3EJZl9CYT-xzxYtP0mIrEpFeM9zc8sGWP0aCqscdnv6QSVAAZ8NL8cHEQhSXzuS3MAXxRUNlW0U7QQ0Q51c_t1_A3upkS5L-Ad4yi680RjSnU6Rfm1NV0Siit3OOM2Xnk2Zph3sh03dSEnvZ4yhLAL-4wJQrzI"
              />
              <div className="absolute bottom-4 left-4 font-['Space_Mono'] text-xs bg-[#F9F9F7] dark:bg-[#0F0F0F] px-2 py-1 border border-[#E5E5E5] dark:border-[#404040]">
                Константин Бурцев, Основатель
              </div>
            </div>
            <div>
              <span className="material-symbols-outlined text-5xl text-[#D4AF37] mb-8 opacity-50">
                format_quote
              </span>
              <blockquote className="font-['Syne'] text-3xl md:text-4xl italic leading-tight text-[#0A0A0A] dark:text-[#F0F0F0] mb-8">
                "Архитектура жива, когда она отражает человека. Она перестает
                быть фоном и становится участником жизни."
              </blockquote>
              <p className="font-['Space_Mono'] text-sm text-[#666666] dark:text-[#999999] uppercase tracking-wide border-l-2 border-[#D4AF37] pl-4">
                Видение студии — создавать объекты, которые не просто занимают
                место, а формируют атмосферу и вызывают эмоции.
              </p>
            </div>
          </div>
        </section>

        {/* 5.4 Approach */}
        <section className="px-6 py-16 border-b border-[#E5E5E5] dark:border-[#404040] bg-[#FFFFFF] dark:bg-[#161616]">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-['Syne']">
              Подход к проектам
            </h2>
            <p className="font-['Space_Mono'] text-sm md:text-base text-[#666666] dark:text-[#999999]">
              Внимание к пространству, соединение архитектуры и технологий,
              работа с материалами.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5] dark:bg-[#404040] border border-[#E5E5E5] dark:border-[#404040]">
            <div className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-8 md:p-12 hover:bg-white dark:hover:bg-[#1A1A1A] transition-colors duration-300">
              <h4 className="font-['Space_Mono'] text-xs uppercase text-[#D4AF37] mb-4">
                01. Дизайн
              </h4>
              <h3 className="font-['Syne'] text-2xl mb-4 font-bold">
                Вычислительная логика
              </h3>
              <p className="text-[#666666] dark:text-[#999999] font-light">
                Использование алгоритмов для создания форм, оптимизирующих
                использование материалов и структурную целостность.
              </p>
            </div>
            <div className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-8 md:p-12 hover:bg-white dark:hover:bg-[#1A1A1A] transition-colors duration-300">
              <h4 className="font-['Space_Mono'] text-xs uppercase text-[#D4AF37] mb-4">
                02. Производство
              </h4>
              <h3 className="font-['Syne'] text-2xl mb-4 font-bold">
                Точное проектирование
              </h3>
              <p className="text-[#666666] dark:text-[#999999] font-light">
                ЧПУ фрезеровка, лазерная резка и роботизированная сварка
                гарантируют соответствие цифрового двойника реальности.
              </p>
            </div>
            <div className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-8 md:p-12 hover:bg-white dark:hover:bg-[#1A1A1A] transition-colors duration-300">
              <h4 className="font-['Space_Mono'] text-xs uppercase text-[#D4AF37] mb-4">
                03. Монтаж
              </h4>
              <h3 className="font-['Syne'] text-2xl mb-4 font-bold">
                Глобальная логистика
              </h3>
              <p className="text-[#666666] dark:text-[#999999] font-light">
                От городских площадей до частных парков. Мы берем на себя
                структурные расчеты и профессиональную сборку.
              </p>
            </div>
          </div>
        </section>

        {/* 5.5 Evolution */}
        <section className="px-6 py-16 border-b border-[#E5E5E5] dark:border-[#404040]">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 font-['Syne']">
            Эволюция
          </h2>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-l border-[#D4AF37] pl-8 ml-4 md:ml-0">
              <div className="md:col-span-3">
                <span className="font-['Space_Mono'] text-4xl font-bold text-[#D4AF37]">
                  2009
                </span>
                <p className="text-sm text-[#666666] dark:text-[#999999] mt-2 uppercase tracking-widest">
                  Эра bti.one
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl font-bold mb-2">Мультимедиа и Свет</h3>
                <p className="text-[#666666] dark:text-[#999999]">
                  Эксперименты с видеомэппингом, световыми инсталляциями и
                  временными пространственными интервенциями. Материал был
                  нематериальным: фотоны, звуковые волны и моменты времени.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-l border-[#D4AF37] pl-8 ml-4 md:ml-0">
              <div className="md:col-span-3">
                <span className="font-['Space_Mono'] text-4xl font-bold text-[#D4AF37]">
                  2014
                </span>
                <p className="text-sm text-[#666666] dark:text-[#999999] mt-2 uppercase tracking-widest">
                  Кортен и Бетон
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl font-bold mb-2">
                  Поворот к постоянству
                </h3>
                <p className="text-[#666666] dark:text-[#999999]">
                  Цифровые алгоритмы переведены в физическую материю. Работа с
                  кортеновской сталью, сложные геометрии в самонесущих
                  структурах.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-l border-[#D4AF37] pl-8 ml-4 md:ml-0">
              <div className="md:col-span-3">
                <span className="font-['Space_Mono'] text-4xl font-bold text-[#D4AF37]">
                  2020
                </span>
                <p className="text-sm text-[#666666] dark:text-[#999999] mt-2 uppercase tracking-widest">
                  monumforma
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl font-bold mb-2">
                  Сдвиг в сторону материалов
                </h3>
                <p className="text-[#666666] dark:text-[#999999]">
                  Ребрендинг. Фокус на зеркально полированной нержавеющей стали
                  и полупрозрачных стеклянных структурах. Стык
                  высокотехнологичного производства и вычислительного дизайна.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5.6 Clients */}
        <section className="px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-['Syne']">
              Клиенты и партнёры
            </h2>
            <p className="font-['Space_Mono'] text-sm md:text-base text-[#666666] dark:text-[#999999] max-w-2xl">
              Девелоперы, города, коммерческие пространства.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#E5E5E5] dark:bg-[#404040] border border-[#E5E5E5] dark:border-[#404040]">
            {[
              "UR",
              "NP",
              "AT",
              "MC",
              "CG",
              "UP",
              "RC",
              "HF",
              "PT",
              "UC",
              "CM",
              "LD",
            ].map((code, i) => (
              <div
                key={i}
                className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between hover:bg-white dark:hover:bg-[#1A1A1A] transition-colors"
              >
                <div className="h-10 w-10 border border-[#D4AF37] flex items-center justify-center font-['Space_Mono'] text-xs text-[#D4AF37]">
                  {code}
                </div>
                <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                  Partner {code}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
