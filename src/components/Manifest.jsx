import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Fonts to include in index.html:
// <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;400;500&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

const COMPANY_STATS = [
  { label: "годы работы", value: 16, suffix: "+" },
  { label: "реализованные проекты", value: 240, suffix: "+" },
  { label: "изготовленные конструкции", value: 680, suffix: "+" },
  { label: "страны и города", value: 22, suffix: "" },
  { label: "партнерские производства", value: 35, suffix: "+" },
];

const PRODUCTION_ITEMS = [
  {
    title: "КОРТЕНОВСКАЯ СТАЛЬ",
    id: "MAT-01",
    desc: "Естественное окисление, срок службы 100+ лет.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdt-GQGsk8fMbU7bkqWFPr5X2xAHv-24WXA2M5vhg2KZoZuV-8oRSm5fno396dPQ_Uo3_CY9FfFXtstjf5fNxpUT5Nj0Iw2cYMD5JN2k0-EMq_fP7XbydKstmSNIsOW281KAV962_UdLR5P3K2lwJDpxHmTl3OKqXMNpnPyYokuhdZnsF6fsaZltAh3UBEVWr47SWbVXFzd53aFoVxS4A_EUIrhdmRLVj-3uLQP7qiMSo1YIEG7fpp_FXXC_T_qEoB5NBIeUfNPBZ6",
  },
  {
    title: "МОРСКАЯ СТАЛЬ",
    id: "MAT-02",
    desc: "316L Нержавеющая, зеркальная полировка.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2m2d7YafEHROaGPxeM5g1wFg2SkjaUmn8XXhsg55BsMbZNxrzl0HoDcOvpqjncIBSKjiB5RB_qTPTFfKRv2rZl49ZGozud9qNGi86a2_kFcMBghh952DOqIi8-J5E2NK82cx3VkxxGDyWpt8PNL2ck5Wut4bhwA27xAF-1RpbSTJGOdB94x2BSfeoyTf8eA-SKtTIp0OzgPPXt7q-1MpHWg6TEop19nYgqdz7g_BgmM3L4jh_RIT0DT3aUJgV_8OlhuczDRdVp7JM",
  },
  {
    title: "СТАТУАРНАЯ БРОНЗА",
    id: "MAT-03",
    desc: "Кремниевая бронза, заказная патина.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBIZwuvLx1N6n6CTJU0fWklWNT1cbO8XyzuvcQJuZ2mngh9PtLmYeeeKc1ZLQKsqH1hHPv_-2bk9LPBvgTXurhU3WcocG9xU9W4QZmfGdcAHW3OIa_qqctkSu-7ZWpJe55NPXKjH49EqeW4gHLs299z2hDI3HPlrFvOyGzzE_rhHIr4oPFcgMafJ7ihMot8B8K-_DlL2T9YwO-0SPb9xsi9rXtxYHtrWprY0ZVgQONZtvXYIO44AIDDxkeTh4C2utH4UMV-BWkJ4Jp",
  },
  {
    title: "РОБОТИЗИРОВАННАЯ ФРЕЗЕРОВКА",
    id: "TECH-01",
    desc: "5-осевая обработка сложных форм.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY_28WWEx-o8Mve-gr_XjEZZSr3S8PIXgXhpxTWcKMOAP8P7YVqMzAQakmGzw3eossmajn3rrVoQKvURq6xjLt5cGPpNzjNcDj7gZ2MjYg97ZDpfKzVJqiU2wZBrbO2H9UQucvcZsSMJEa7PFEIq6i-igfFfq4iS1VQ5c_RCNkfVR-b2DGEPLMioyaQGQch8qZfMDxI1wzrYQ5KJ0JtPjtbNuof9pRu2_Hcu29JhlZKFtxB6PErLFGMSFt8YliRxBfxRaez7De-qZl",
  },
  {
    title: "ЛАЗЕРНАЯ РЕЗКА",
    id: "TECH-02",
    desc: "Высокоточный раскрой металла.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpPxZnWz9h0NH-cwUnwctPxJe5adpqYS0KLuXqQt_xpAwHevz9DpJKGDVNn1BKnzer5AdDhDQxzm5bJK0atKrRCdyjEfLULgox1cGtuV4MQcwoegVX0XswOTCQcu3B46SL_HQjp5jz2RS7ir4PP-6wvRk0r75U7ad1KqFiquCAGlx8mS6rF9k6OnYRr9bUIFrszvQbgKlntH2nTuq4JIquT7Cz1SgYxq3m-oP6KJqcaKxWubZqS9qQzQENVh4OmKtSzeGNA_WZ8a_Y",
  },
  {
    title: "РУЧНАЯ СБОРКА",
    id: "PROC-01",
    desc: "Финишная отделка музейного качества.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBIZwuvLx1N6n6CTJU0fWklWNT1cbO8XyzuvcQJuZ2mngh9PtLmYeeeKc1ZLQKsqH1hHPv_-2bk9LPBvgTXurhU3WcocG9xU9W4QZmfGdcAHW3OIa_qqctkSu-7ZWpJe55NPXKjH49EqeW4gHLs299z2hDI3HPlrFvOyGzzE_rhHIr4oPFcgMafJ7ihMot8B8K-_DlL2T9YwO-0SPb9xsi9rXtxYHtrWprY0ZVgQONZtvXYIO44AIDDxkeTh4C2utH4UMV-BWkJ4Jp",
  },
];

export default function Manifest() {
  const statsRef = useRef(null);
  const scrollRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(() =>
    COMPANY_STATS.map(() => 0)
  );

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

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

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsStarted) return;

    const duration = 1600;
    const start = performance.now();
    let animationFrame;

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats(
        COMPANY_STATS.map((item) => Math.round(item.value * easedProgress))
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [statsStarted]);

  return (
    <div className="bg-[#F9F9F7] dark:bg-[#0F0F0F] text-[#0A0A0A] dark:text-[#F0F0F0] font-['DM_Sans'] antialiased transition-colors duration-300 min-h-screen relative">
      <style>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #C89F5F; }
        .grid-lines {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        }
        .dark .grid-lines {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .module-card:hover .module-image {
          transform: scale(1.05);
        }
        .stat-number {
          font-family: 'Space Mono', monospace;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.06em;
          color: #ffffff;
          -webkit-text-stroke: 1px rgba(200, 159, 95, 0.7);
          text-shadow: 0 0 20px rgba(200, 159, 95, 0.22);
        }
        .stat-card {
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: inset 0 0 0 1px rgba(200, 159, 95, 0.22);
        }
      `}</style>

      <div className="fixed inset-x-0 top-20 bottom-0 pointer-events-none z-0 grid-lines opacity-40"></div>

      <main className="relative z-10">
        <section className="relative h-screen w-full overflow-hidden flex items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>

          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>

          <div className="relative z-20 text-right px-6 md:px-12 max-w-4xl ml-auto pt-20">
            <div className="flex justify-end items-center gap-4 mb-8">
              <span className="font-['Space_Mono'] text-xs text-[#C89F5F] tracking-[0.2em] uppercase">
                Скульптурная Инженерия
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-5xl lg:text-7xl xl:text-8xl font-light leading-[0.9] tracking-tight mb-8 text-white">
              Инженерия
              <br />
              <span className="italic font-normal text-[#C89F5F]">
                Эмоциональной
              </span>
              <br />
              Формы
            </h1>

            <p className="font-['DM_Sans'] text-lg lg:text-xl text-white/90 max-w-xxl leading-relaxed mb-12 mt-4">
              16 лет создания постоянных и временных архитектурных конструкций.
              От технического света до монументальных форм.
            </p>

            <div className="flex flex-col sm:flex-row items-end justify-end gap-4">
              <Link
                to="/projects"
                className="group flex items-center gap-2 border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 text-white mt-6"
              >
                <span className="font-['Space_Mono'] text-sm uppercase tracking-wider">
                  ИССЛЕДОВАТЬ КОЛЛЕКЦИЮ
                </span>
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="absolute bottom-14 left-0 w-full px-12 hidden lg:flex justify-between items-end text-white/70 font-['Space_Mono'] text-[10px] uppercase tracking-widest">
              <div className="text-left">
                <span className="block text-[#C89F5F] mb-1">МАТЕРИАЛЫ</span>
                Кортен / Бронза / Стекло
              </div>
              <div className="text-center">
                <span className="block text-[#C89F5F] mb-1">МАСШТАБ</span>
                Монументальный / Средовой
              </div>
              <div className="text-right">
                <span className="block text-[#C89F5F] mb-1">ПРОЦЕСС</span>
                Параметрика / Фабрикация
              </div>
            </div>
          </div>
        </section>

        <div className="w-full bg-[#0A0A0A] dark:bg-[#F0F0F0] text-[#F9F9F7] dark:text-[#0F0F0F] py-4 overflow-hidden border-y border-gray-200 dark:border-gray-800">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="font-['Space_Grotesk'] text-4xl uppercase px-8">
              Параметрическая Архитектура
            </span>
            <span className="font-['Space_Mono'] text-[#C89F5F] text-2xl align-middle">
              ●
            </span>
            <span className="font-['Space_Grotesk'] text-4xl uppercase px-8">
              Городская Скульптура
            </span>
            <span className="font-['Space_Mono'] text-[#C89F5F] text-2xl align-middle">
              ●
            </span>
            <span className="font-['Space_Grotesk'] text-4xl uppercase px-8">
              Вычислительный Дизайн
            </span>
            <span className="font-['Space_Mono'] text-[#C89F5F] text-2xl align-middle">
              ●
            </span>
            <span className="font-['Space_Grotesk'] text-4xl uppercase px-8">
              Инновации Материалов
            </span>
            <span className="font-['Space_Mono'] text-[#C89F5F] text-2xl align-middle">
              ●
            </span>
            <span className="font-['Space_Grotesk'] text-4xl uppercase px-8">
              Параметрическая Архитектура
            </span>
          </div>
        </div>

        <section className="max-w-[1440px] mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 dark:border-gray-800 pb-8">
            <div>
              <span className="font-['Space_Mono'] text-[#C89F5F] text-xs mb-2 block">
                ИЗБРАННЫЕ РАБОТЫ
              </span>
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium">
                Монументальное Присутствие
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:flex items-center gap-2 font-['Space_Mono'] text-xs uppercase hover:text-[#C89F5F] transition-colors mt-4 md:mt-0"
            >
              ПОСМОТРЕТЬ АРХИВ{" "}
              <span className="material-icons text-sm">arrow_outward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] group cursor-pointer relative aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  alt="Corten steel sculpture illuminated at dusk"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVSJF_9W55dwjFPjui6G68lMDOpK02hzWFFJHaIESXm0R2P23I0ra5ogwYCPQHguY7yb8ziDclQ884qQ4qs6wnj5dcd01n_1ntO6ksvpEo00mSbOHBz31UgQ4PHWoBofWASxzK_fzrsi-Bm6HCc_ykXsrfW2N_ieu_BOHOpXziDm8Lf7ZRY_QV8ZTMxTMCmvVFyXi7mS6He0kGFTvXNTTgp_xkPL4T87QJtvw4yimkdprCZEst2BjSJ3bxKTpgT8ra8BRavB3Jqp2V"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-4 border-l-2 border-[#C89F5F]">
                  <h3 className="font-['Space_Grotesk'] text-xl mb-1">
                    Ignis Monolith
                  </h3>
                  <p className="font-['Space_Mono'] text-xs text-[#666666] dark:text-[#888888]">
                    КОРТЕНОВСКАЯ СТАЛЬ / СВЕТ
                  </p>
                </div>
              </div>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] group cursor-pointer relative aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  alt="Chrome infinity loop sculpture with water reflection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFf1q8N6UYXHzDiZuwKk-FESb7Thu7OWTU3SChxUmO7PVazcZFdvkxb8docjQqduzLFmj3vLK772yvL1-6dmT_ax3GBjH62FmY78-7U1RqF-_qKuGYp1-SP6XQhEQSXGbRhjBpPGm5SfMgCETr5Ylz5xZ_ae8GTzTNNDADSx8k8FyGbCCZ0qebVKt9AQeF-drxUfwNoN7h6OiP16vS_6w_LCB6ViEGIgol9YOsQX1u0Lih27YndKTjqmVHpzrrYvjZwtsVAUmJ1HJG"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-4 border-l-2 border-[#C89F5F]">
                  <h3 className="font-['Space_Grotesk'] text-xl mb-1">
                    Aeterna Loop
                  </h3>
                  <p className="font-['Space_Mono'] text-xs text-[#666666] dark:text-[#888888]">
                    ПОЛИРОВАННАЯ СТАЛЬ / ВОДА
                  </p>
                </div>
              </div>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] group cursor-pointer relative aspect-[4/5] overflow-hidden flex flex-col justify-center items-center p-8 text-center hover:bg-gray-50 dark:hover:bg-[#1A1A1A] transition-colors">
              <div className="max-w-xs">
                <span className="font-['Space_Mono'] text-[#C89F5F] text-xs mb-4 block">
                  ФИЛОСОФИЯ
                </span>
                <h3 className="font-['Space_Grotesk'] text-3xl mb-6">
                  Дизайн — это видимый интеллект.
                </h3>
                <p className="font-['DM_Sans'] text-sm text-[#666666] dark:text-[#888888] leading-relaxed mb-8">
                  Каждый изгиб рассчитан. Каждый материал протестирован. Мы не
                  просто строим скульптуры; мы проектируем эмоции с помощью
                  математической точности.
                </p>
                <Link
                  to="/manifest"
                  className="inline-block border-b border-[#C89F5F] text-[#C89F5F] font-['Space_Mono'] text-xs uppercase tracking-widest pb-1 hover:text-[#0A0A0A] dark:hover:text-[#F0F0F0] transition-colors"
                >
                  ЧИТАТЬ МАНИФЕСТ
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 py-24">
          <div className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium">
              Направления работы
            </h2>
            <p className="font-['DM_Sans'] text-[#666666] dark:text-[#888888] mt-4 max-w-2xl">
              Блоки полностью повторяют структуру страницы expertise.
            </p>
          </div>

          <div className="max-w-[1440px] mx-auto space-y-32">
            <section className="group module-card">
              <div className="grid grid-cols-12 gap-0 lg:gap-6 items-stretch">
                <div className="col-span-12 lg:col-span-7 relative h-[600px] overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-[#BFA37E]">
                  <img
                    alt="Monumental glass sculpture with organic flowing waves"
                    className="module-image w-full h-full object-cover transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVmKneYHWyTj9DyO2Ggt6RHctcJkE_Tso97x_yfzCSl9F5JOhWb2e7M2ed-0PCvS7daiKiY0NjfxnCnBRPtCucko--coo3I_Istdbnoluy4MVtrX2iMP8hZf1sQ3Hx9tNVGclweUst3gRZn_HNJFzDuWPWn6DjqKNjE9ogtioRgm8-WD9z7kQ-JrSprqxS0hlcOnZEuCAgEHAbEV8ri0qQ9uGGvVoogr9nB5hglRaoqZP2dFXSLW7MghB1o_32tScwy3cCR4Gw4zCe"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#F5F5F5]/90 dark:bg-[#121212]/90 p-4 font-['Roboto_Mono'] text-xs uppercase tracking-widest border-t border-r border-[#BFA37E]">
                    Рис. 01 — Органическое Стекло
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-5 flex flex-col justify-center py-12 lg:pl-12">
                  <span className="font-['Roboto_Mono'] text-[#BFA37E] text-sm mb-4">
                    01 / КАТЕГОРИЯ
                  </span>
                  <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-8">
                    Архитектурные Скульптуры
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light">
                    Крупномасштабные художественные интервенции, призванные
                    переосмыслить общественные пространства. Мы работаем со
                    сложной геометрией и массивными нагрузками, гарантируя
                    долговечность арт-объектов.
                  </p>
                  <div className="mb-10">
                    <h3 className="font-['Roboto_Mono'] text-xs uppercase tracking-widest text-[#BFA37E] mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                      Технические Характеристики
                    </h3>
                    <ul className="font-['Roboto_Mono'] text-sm space-y-3 text-gray-500 dark:text-gray-400">
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Основные материалы: Бронза, Кортеновская сталь
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Производство: Литье по выплавляемым моделям, ЧПУ
                        фрезеровка
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Макс. высота: 15м+ (Самонесущие)
                      </li>
                    </ul>
                  </div>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-4 group/btn w-max"
                  >
                    <span className="font-['Roboto_Mono'] text-sm uppercase tracking-widest border-b border-transparent group-hover/btn:border-[#BFA37E] transition-colors">
                      СМОТРЕТЬ ПРОЕКТЫ
                    </span>
                    <span className="material-icons-outlined text-[#BFA37E] group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            <section className="group module-card">
              <div className="grid grid-cols-12 gap-0 lg:gap-6 items-stretch">
                <div className="col-span-12 lg:col-span-5 flex flex-col justify-center py-12 lg:pr-12 order-2 lg:order-1">
                  <span className="font-['Roboto_Mono'] text-[#BFA37E] text-sm mb-4">
                    02 / КАТЕГОРИЯ
                  </span>
                  <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-8">
                    Световая Интеграция
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light">
                    Бесшовная интеграция освещения в скульптурные формы. Наша
                    экспертиза включает внутреннюю структурную подсветку,
                    программируемые LED массивы и инженерию игры теней для
                    круглосуточного визуального эффекта.
                  </p>
                  <div className="mb-10">
                    <h3 className="font-['Roboto_Mono'] text-xs uppercase tracking-widest text-[#BFA37E] mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                      Технические Характеристики
                    </h3>
                    <ul className="font-['Roboto_Mono'] text-sm space-y-3 text-gray-500 dark:text-gray-400">
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Технологии: DMX управляемые светодиоды
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Корпус: Индивидуальные корпуса IP68
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Прозрачность материалов: Смола, Перфорированный металл
                      </li>
                    </ul>
                  </div>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-4 group/btn w-max"
                  >
                    <span className="font-['Roboto_Mono'] text-sm uppercase tracking-widest border-b border-transparent group-hover/btn:border-[#BFA37E] transition-colors">
                      СМОТРЕТЬ ПРОЕКТЫ
                    </span>
                    <span className="material-icons-outlined text-[#BFA37E] group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
                <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 relative h-[600px] overflow-hidden border-b-4 lg:border-b-0 lg:border-l-4 border-[#BFA37E]">
                  <img
                    alt="Geometric corten steel sculpture with internal lighting"
                    className="module-image w-full h-full object-cover transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpPxZnWz9h0NH-cwUnwctPxJe5adpqYS0KLuXqQt_xpAwHevz9DpJKGDVNn1BKnzer5AdDhDQxzm5bJK0atKrRCdyjEfLULgox1cGtuV4MQcwoegVX0XswOTCQcu3B46SL_HQjp5jz2RS7ir4PP-6wvRk0r75U7ad1KqFiquCAGlx8mS6rF9k6OnYRr9bUIFrszvQbgKlntH2nTuq4JIquT7Cz1SgYxq3m-oP6KJqcaKxWubZqS9qQzQENVh4OmKtSzeGNA_WZ8a_Y"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#F5F5F5]/90 dark:bg-[#121212]/90 p-4 font-['Roboto_Mono'] text-xs uppercase tracking-widest border-t border-l border-[#BFA37E] text-right">
                    Рис. 02 — Светящийся Кортен
                  </div>
                </div>
              </div>
            </section>

            <section className="group module-card">
              <div className="grid grid-cols-12 gap-0 lg:gap-6 items-stretch">
                <div className="col-span-12 lg:col-span-7 relative h-[600px] overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-[#BFA37E]">
                  <img
                    alt="Chrome infinity loop sculpture over a reflecting pool"
                    className="module-image w-full h-full object-cover transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA7Bo7aDkE_0mQCLC7yRpdx4y5be1bv_NmrK6T51wPOIzycxj4iQvWNQvT5GoqztZSKzvJqR-4Dh5WYMvDq-QfKEt_YEzRlIWE4pSEQWlgOogEVH9XaMRm742E7djVDPST4DsMSiBsW0WcCC1q2Tlbkr5oVq72h6QsVwumXeoD1hAzfACsQeO4rkqsqQGTpjkomeGMY5WiwXan4pYn2K1UyqTRTOHN3nKl6EVrvw1EM0N5beMSDZxRYTv8Z4ZI5UUI-wElPrRaKBXO"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#F5F5F5]/90 dark:bg-[#121212]/90 p-4 font-['Roboto_Mono'] text-xs uppercase tracking-widest border-t border-r border-[#BFA37E]">
                    Рис. 03 — Гидродинамика
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-5 flex flex-col justify-center py-12 lg:pl-12">
                  <span className="font-['Roboto_Mono'] text-[#BFA37E] text-sm mb-4">
                    03 / КАТЕГОРИЯ
                  </span>
                  <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-8">
                    Кинетика и Вода
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light">
                    Искусство в движении. Мы проектируем точные механические
                    системы и гидравлические элементы, оживляющие скульптуры. От
                    ветровых мобилей до компьютерно-управляемых фонтанов.
                  </p>
                  <div className="mb-10">
                    <h3 className="font-['Roboto_Mono'] text-xs uppercase tracking-widest text-[#BFA37E] mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                      Технические Характеристики
                    </h3>
                    <ul className="font-['Roboto_Mono'] text-sm space-y-3 text-gray-500 dark:text-gray-400">
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Механика: Прецизионные подшипники, Противовесы
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Гидравлика: Замкнутая система фильтрации
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Материал: Морская нержавеющая сталь 316
                      </li>
                    </ul>
                  </div>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-4 group/btn w-max"
                  >
                    <span className="font-['Roboto_Mono'] text-sm uppercase tracking-widest border-b border-transparent group-hover/btn:border-[#BFA37E] transition-colors">
                      СМОТРЕТЬ ПРОЕКТЫ
                    </span>
                    <span className="material-icons-outlined text-[#BFA37E] group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            <section className="group module-card">
              <div className="grid grid-cols-12 gap-0 lg:gap-6 items-stretch">
                <div className="col-span-12 lg:col-span-5 flex flex-col justify-center py-12 lg:pr-12 order-2 lg:order-1">
                  <span className="font-['Roboto_Mono'] text-[#BFA37E] text-sm mb-4">
                    04 / КАТЕГОРИЯ
                  </span>
                  <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-8">
                    Павильоны и Временные Конструкции
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light">
                    Экспериментальные структуры для мероприятий и выставок.
                    Фокус на модульности, быстрой сборке и инновационном
                    использовании материалов для создания впечатляющих, но
                    временных архитектурных заявлений.
                  </p>
                  <div className="mb-10">
                    <h3 className="font-['Roboto_Mono'] text-xs uppercase tracking-widest text-[#BFA37E] mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                      Технические Характеристики
                    </h3>
                    <ul className="font-['Roboto_Mono'] text-sm space-y-3 text-gray-500 dark:text-gray-400">
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Сборка: Модульная префабрикация
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Материалы: CLT-панели, ETFE пленка
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#BFA37E]"></span>
                        Жизненный цикл: 100% перерабатываемые компоненты
                      </li>
                    </ul>
                  </div>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-4 group/btn w-max"
                  >
                    <span className="font-['Roboto_Mono'] text-sm uppercase tracking-widest border-b border-transparent group-hover/btn:border-[#BFA37E] transition-colors">
                      СМОТРЕТЬ ПРОЕКТЫ
                    </span>
                    <span className="material-icons-outlined text-[#BFA37E] group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
                <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 relative h-[600px] overflow-hidden border-b-4 lg:border-b-0 lg:border-l-4 border-[#BFA37E]">
                  <img
                    alt="Parametric wooden pavilion in a desert landscape"
                    className="module-image w-full h-full object-cover transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDmmEhrz4eDIkLb5pi0L7iyR4Yk6EpFJwbErVCxhVOZ-CtBY59S3vXpe9GDq8fZwECnLa6raK0-ZhNddF6zcMJCHWJiwsvGWBAVewZIwh1C47MDWngWV4HZzFr7_Fd2Tg0I7wu33jdX8JLjv8LxVVOEQbXo-vhyA55hqAyi3BQsZfdDzUPOsZCdbwX6PXGS5wrUx-gLKG8PEmzf_Ko2ZjdzuiOy6B1S_2RR2brRO5e7HdAWcg90UYEXNuvw6qYTofwhZSsx6q-0K7A"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#F5F5F5]/90 dark:bg-[#121212]/90 p-4 font-['Roboto_Mono'] text-xs uppercase tracking-widest border-t border-l border-[#BFA37E] text-right">
                    Рис. 04 — Параметрическая Древесина
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section
          ref={statsRef}
          className="max-w-[1440px] mx-auto px-6 pb-24 -mt-8"
        >
          <div className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium">
              О компании в цифрах
            </h2>
            <p className="font-['DM_Sans'] text-[#666666] dark:text-[#888888] mt-4 max-w-2xl">
              Короткие показатели опыта и масштаба компании.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-700 dark:bg-gray-900 border border-gray-700 dark:border-gray-900">
            {COMPANY_STATS.map((item, index) => (
              <article
                key={item.label}
                className="stat-card relative overflow-hidden bg-[#111111] p-8 min-h-[210px] flex flex-col justify-between"
              >
                <p className="stat-number text-5xl md:text-6xl font-bold leading-none pt-8">
                  {animatedStats[index]}
                  <span className="stat-number">{item.suffix}</span>
                </p>
                <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#A3A3A3] mt-6">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 pb-24">
          <div className="flex justify-between items-end mb-12 border-b border-gray-200 dark:border-gray-800 pb-6">
            <div>
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium">
                Производство
              </h2>
              <p className="font-['DM_Sans'] text-[#666666] dark:text-[#888888] mt-4 max-w-2xl">
                Собственные цеха, материалы и технологии.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={scrollLeft}
                className="border border-gray-300 dark:border-gray-700 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="material-icons">arrow_back</span>
              </button>
              <button
                onClick={scrollRight}
                className="border border-gray-300 dark:border-gray-700 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="material-icons">arrow_forward</span>
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PRODUCTION_ITEMS.map((item) => (
              <div
                key={item.id}
                className="min-w-[100%] md:min-w-[calc(33.333%-22px)] snap-start group relative bg-[#F5F5F5] dark:bg-[#111111] border border-gray-200 dark:border-gray-800 hover:border-[#C4A473] transition-colors duration-500"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200 relative">
                  <img
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                    src={item.img}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold uppercase tracking-wider font-['Space_Grotesk']">
                      {item.title}
                    </h3>
                    <span className="text-[#C4A473] font-['Space_Mono'] text-[10px] border border-[#C4A473] px-2 py-0.5">
                      {item.id}
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-[#666666] dark:text-[#999999] font-['Space_Mono'] leading-tight opacity-80">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 pb-24">
          <div className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-6">
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium">
              Клиенты
            </h2>
            <p className="font-['DM_Sans'] text-[#666666] dark:text-[#888888] mt-4 max-w-3xl">
              Нам доверяют девелоперы, торговые центры и городские проекты. Ниже
              — примеры ключевых партнеров, с которыми мы реализуем
              архитектурные и художественные задачи.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                UR
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                UrbanRise Dev
              </p>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                NP
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                NorthPoint Group
              </p>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                AT
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                Atria Malls
              </p>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                MC
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                MetroCenter
              </p>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                CG
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                CityGrid
              </p>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                UP
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                UrbanPulse
              </p>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                RC
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                RiverCity Dev
              </p>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                HF
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                Horizon Fund
              </p>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                PT
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                Plaza Tower
              </p>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                UC
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                Union Centers
              </p>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                CM
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                City Mobility
              </p>
            </article>
            <article className="bg-[#F9F9F7] dark:bg-[#0F0F0F] p-6 min-h-[140px] flex flex-col justify-between">
              <div className="h-10 w-10 border border-[#C89F5F] flex items-center justify-center font-['Space_Mono'] text-xs text-[#C89F5F]">
                LD
              </div>
              <p className="font-['Space_Mono'] text-[11px] tracking-widest uppercase text-[#666666] dark:text-[#888888]">
                Landmark District
              </p>
            </article>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 pb-24">
          <div className="border border-gray-200 dark:border-gray-800 bg-[#F9F9F7] dark:bg-[#0F0F0F] p-8 md:p-12 lg:p-14">
            <div className="max-w-3xl">
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium leading-tight">
                Готовы обсудить ваш проект?
              </h2>
              <p className="font-['DM_Sans'] text-base md:text-lg text-[#666666] dark:text-[#888888] mt-5 max-w-2xl leading-relaxed">
                Расскажите о задаче и контексте. Мы предложим архитектурное
                решение и поможем выбрать оптимальный формат консультации.
              </p>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-[#0A0A0A] dark:border-[#F0F0F0] px-8 py-3 font-['Space_Mono'] text-xs uppercase tracking-widest hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-[#F0F0F0] dark:hover:text-[#0A0A0A] transition-colors"
                >
                  Обсудить проект
                  <span className="material-icons text-sm">arrow_outward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
