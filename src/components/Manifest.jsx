import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Manifest() {
  const [metricsVisible, setMetricsVisible] = useState(false);
  const [metrics, setMetrics] = useState({
    years: 0,
    projects: 0,
    area: 0,
    partnerYears: 0,
    partnerProjects: 0,
  });

  useEffect(() => {
    // Reveal animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Hero scroll animation
    const heroWrap = document.getElementById("hero-wrap");
    const heroBg = document.getElementById("hero-bg");
    const heroVeil = document.getElementById("hero-veil");

    const updateHero = () => {
      if (!heroWrap || !heroBg || !heroVeil) return;

      const s = window.scrollY;
      // Плавная анимация, зависящая от высоты экрана (постепенное исчезновение)
      const maxScroll = window.innerHeight || 800;
      const p = Math.min(1, s / maxScroll);

      // Весь hero вниз + исчезает
      heroWrap.style.transform = `translateY(${s * 0.3}px)`;
      heroWrap.style.opacity = 1 - p;

      // Белый veil нарастает динамически
      heroVeil.style.opacity = p;

      // Фон параллакс внутри
      heroBg.style.transform = `translateY(${s * 0.2}px)`;
    };

    window.addEventListener("scroll", updateHero, { passive: true });
    updateHero(); // Initial call

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateHero);
    };
  }, []);

  useEffect(() => {
    const section = document.getElementById("company-metrics");
    if (!section) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMetricsVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );

    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!metricsVisible) return;

    const duration = 1400;
    const start = performance.now();
    const targets = {
      years: 17,
      projects: 180,
      area: 2,
      partnerYears: 6,
      partnerProjects: 30,
    };

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setMetrics({
        years: Math.round(targets.years * eased),
        projects: Math.round(targets.projects * eased),
        area: Number((targets.area * eased).toFixed(1)),
        partnerYears: Math.round(targets.partnerYears * eased),
        partnerProjects: Math.round(targets.partnerProjects * eased),
      });
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [metricsVisible]);

  return (
    <div className="bg-[#F9F9F7] text-[#141414] font-display overflow-x-hidden">
      {/* 1.1 Hero Section (Video from original Manifest.jsx) */}
      <div
        id="hero-wrap"
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col z-[1] will-change-transform"
      >
        <video
          id="hero-bg"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 will-change-transform"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
        {/* Графитовый veil — нарастает при скролле */}
        <div
          id="hero-veil"
          className="absolute inset-0 z-[15] bg-white opacity-0 pointer-events-none"
        ></div>

        {/* Hero content */}
        <div className="relative z-20 h-full flex flex-col">
          <div className="flex-1 flex flex-col justify-end px-8 md:px-14 pb-24">
            <div className="max-w-5xl">
              <h1 className="hero-text-delay text-white font-light leading-[1.05] tracking-tight mb-8 text-[clamp(2rem,3.8vw,4rem)]">
                Сложные{" "}
                <em className="text-[#BFA37E] italic font-light">
                  архитектурные формы
                </em>
                <br />и{" "}
                <em className="text-[#BFA37E] italic font-light">
                  световые решения
                </em>
                <br />
                для городской и общественной среды.
              </h1>
              <p className="hero-text-delay-2 text-white/60 font-light leading-relaxed max-w-2xl text-[clamp(1rem,1.4vw,1.2rem)]">
                Международная студия дизайна и инженерии. Реализуем знаковые
                объекты для мировых брендов и современных мегаполисов.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div id="page-content" className="relative z-[2] bg-white">
        {/* ЧЕТЫРЕ НАПРАВЛЕНИЯ */}
        <section className="relative z-10 bg-white px-8 pb-12 pt-8">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-1.5 items-start">
            <Link
              to="/expertise"
              className="dir-card second-screen-card relative overflow-hidden cursor-pointer block reveal h-[74vh] mt-0"
            >
              <img
                alt="Архитектурные объекты"
                className="w-full h-full object-cover absolute inset-0"
                src="/tver/1.webp"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight tracking-tight text-[clamp(1rem,1.5vw,1.4rem)]">
                  Архитектурные объекты.
                </h3>
                <p className="mt-4 text-white/80 font-light text-sm leading-relaxed max-w-[18rem]">
                  Повышают стоимость и узнаваемость проекта.
                </p>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card second-screen-card relative overflow-hidden cursor-pointer block reveal reveal-delay-1 h-[74vh] mt-[80px]"
            >
              <img
                alt="Малые архитектурные формы"
                className="w-full h-full object-cover absolute inset-0"
                src="/park/1%20main.png"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight tracking-tight text-[clamp(1rem,1.5vw,1.4rem)]">
                  Пространственные решения.
                </h3>
                <p className="mt-4 text-white/80 font-light text-sm leading-relaxed max-w-[18rem]">
                  Отличают проект от конкурентов и увеличивают его ценность.
                </p>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card second-screen-card relative overflow-hidden cursor-pointer block reveal reveal-delay-2 h-[74vh] mt-[40px]"
            >
              <img
                alt="Медиа-архитектура"
                className="w-full h-full object-cover absolute inset-0"
                src="/media-fasade/1-hero.png"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/50"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight tracking-tight text-[clamp(1rem,1.5vw,1.4rem)]">
                  Свет и медиа.
                </h3>
                <p className="mt-4 text-white/80 font-light text-sm leading-relaxed max-w-[18rem]">
                  Привлекают внимание и работают на узнаваемость места круглосуточно.
                </p>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card second-screen-card relative overflow-hidden cursor-pointer block reveal reveal-delay-3 h-[74vh] mt-[120px]"
            >
              <img
                alt="Праздничная иллюминация"
                className="w-full h-full object-cover absolute inset-0"
                src="/ikea-xmas-mall/1.png"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight tracking-tight text-[clamp(1rem,1.5vw,1.4rem)]">
                  Праздничная иллюминация и событийное оформление.
                </h3>
                <p className="mt-4 text-white/80 font-light text-sm leading-relaxed max-w-[19rem]">
                  Сезонное оформление под ключ. Увеличивает трафик и выручку арендаторов.
                </p>
              </div>
            </Link>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-1 md:hidden gap-1.5">
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block h-[60vw]"
            >
              <img
                alt="Архитектурные объекты"
                className="w-full h-full object-cover absolute inset-0"
                src="/tver/1.webp"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight text-[1.3rem]">
                  Архитектурные объекты.
                </h3>
                <p className="mt-3 text-white/80 font-light text-sm leading-relaxed">
                  Повышают стоимость и узнаваемость проекта.
                </p>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block h-[60vw]"
            >
              <img
                alt="Малые формы"
                className="w-full h-full object-cover absolute inset-0"
                src="/park/1%20main.png"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight text-[1.3rem]">
                  Пространственные решения.
                </h3>
                <p className="mt-3 text-white/80 font-light text-sm leading-relaxed">
                  Отличают проект от конкурентов и увеличивают его ценность.
                </p>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block h-[60vw]"
            >
              <img
                alt="Медиа"
                className="w-full h-full object-cover absolute inset-0"
                src="/media-fasade/1-hero.png"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/50"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight text-[1.3rem]">
                  Свет и медиа.
                </h3>
                <p className="mt-3 text-white/80 font-light text-sm leading-relaxed">
                  Привлекают внимание и работают на узнаваемость места круглосуточно.
                </p>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block h-[60vw]"
            >
              <img
                alt="Иллюминация"
                className="w-full h-full object-cover absolute inset-0"
                src="/ikea-xmas-mall/1.png"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight text-[1.3rem]">
                  Праздничная иллюминация и событийное оформление.
                </h3>
                <p className="mt-3 text-white/80 font-light text-sm leading-relaxed">
                  Сезонное оформление под ключ. Увеличивает трафик и выручку арендаторов.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* ПРОЕКТЫ */}
        <section className="bg-[#F9F9F7] py-20 px-8 md:px-14 border-t border-[#BFA37E]/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-14 reveal">
              <div>
                <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight leading-none text-[#111]">
                  Избранные проекты
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Project 1 */}
              <Link
                to="/tver"
                className="md:col-span-8 proj-card group cursor-pointer reveal block"
              >
                <div className="aspect-[16/9] overflow-hidden mb-4">
                  <img
                    alt="Тверская площадь"
                    className="w-full h-full object-cover"
                    src="/tver/1.webp"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-light uppercase tracking-tight text-[#111]">
                      Тверская площадь
                    </h4>
                    <p className="font-mono text-[9px] text-[#141414]/40 mt-1 uppercase tracking-wide">
                      Городское оформление
                    </p>
                  </div>
                  <div className="font-mono text-[9px] text-[#141414]/40 space-y-1 text-right">
                    <p>
                      Год: <span className="text-[#141414]">2021</span>
                    </p>
                  </div>
                </div>
              </Link>
              {/* Project 2 */}
              <Link
                to="/raddison"
                className="md:col-span-4 md:mt-12 proj-card group cursor-pointer reveal reveal-delay-1 block"
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    alt="Матрёшки — Radisson Collection"
                    className="w-full h-full object-cover"
                    src="/radisson/1.png"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-light uppercase tracking-tight text-[#111]">
                      Матрёшки
                    </h4>
                    <p className="font-mono text-[9px] text-[#141414]/40 mt-1 uppercase tracking-wide">
                      Radisson Collection
                    </p>
                  </div>
                  <div className="font-mono text-[9px] text-[#141414]/40 space-y-1 text-right">
                    <p>
                      Год: <span className="text-[#141414]">2020</span>
                    </p>
                  </div>
                </div>
              </Link>
              {/* Project 3 */}
              <Link
                to="/ikea-park"
                className="md:col-span-4 proj-card group cursor-pointer reveal reveal-delay-2 block"
              >
                <div className="aspect-square overflow-hidden mb-4">
                  <img
                    alt="Парк IKEA"
                    className="w-full h-full object-cover"
                    src="/ikea-park/1-main.jpg"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-light uppercase tracking-tight text-[#111]">
                      Парк IKEA
                    </h4>
                    <p className="font-mono text-[9px] text-[#141414]/40 mt-1 uppercase tracking-wide">
                      Арт-инсталляция в public space
                    </p>
                  </div>
                  <div className="font-mono text-[9px] text-[#141414]/40 space-y-1 text-right">
                    <p>
                      Год: <span className="text-[#141414]">2019</span>
                    </p>
                  </div>
                </div>
              </Link>
              {/* Project 4 */}
              <Link
                to="/fairy-forest"
                className="md:col-span-8 proj-card group cursor-pointer reveal reveal-delay-1 block"
              >
                <div className="aspect-[16/7] overflow-hidden mb-4">
                  <img
                    alt="ТЦ 282 000"
                    className="w-full h-full object-cover"
                    src="/fairy-forest/3-mall.jpg"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-light uppercase tracking-tight text-[#111]">
                      ТЦ 282 000
                    </h4>
                    <p className="font-mono text-[9px] text-[#141414]/40 mt-1 uppercase tracking-wide">
                      Масштабный объект в коммерческой среде
                    </p>
                  </div>
                  <div className="font-mono text-[9px] text-[#141414]/40 space-y-1 text-right">
                    <p>
                      Год: <span className="text-[#141414]">2023</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* TIZER */}
            <div className="mt-16 pt-12 border-t border-[#BFA37E]/15 reveal">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[9px] text-[#BFA37E] uppercase tracking-[0.4em]">
                  Future Projects / В разработке
                </span>
                <div className="h-px flex-1 bg-[#BFA37E]/15"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div
                  className="md:col-span-6 overflow-hidden relative"
                  style={{ aspectRatio: "16/7", background: "#e8e6e0" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[9px] text-[#141414]/25 uppercase tracking-[0.4em]">
                      Визуализация в работе
                    </span>
                  </div>
                </div>
                <Link to="/junco-arquitectura" className="md:col-span-6 md:pl-10 block group">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="inline-block w-[7px] h-[7px] rounded-full bg-[#BFA37E]"></span>
                    <span className="font-mono text-[9px] text-[#BFA37E] uppercase tracking-[0.3em]">
                      В стадии реализации / Проектирование
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tight leading-none mb-4 text-[#111] group-hover:text-[#BFA37E] transition-colors">
                    JUNCO
                    <br />
                    En desarrollo
                  </h3>
                  <p className="font-mono text-[9px] text-[#141414]/40 uppercase tracking-wide mb-6">
                    Малага, Андалусия
                  </p>
                  <p className="text-[#141414]/50 font-light leading-relaxed text-sm max-w-sm">
                    Совместно с Junco Arquitectura — декоративный слой жилого комплекса как часть архитектурного замысла с первой стадии.
                  </p>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-center reveal">
              <Link
                to="/projects"
                className="flex items-center gap-4 border border-[#141414]/15 px-10 py-4 font-mono text-[10px] uppercase tracking-widest text-[#141414]/45 hover:border-[#BFA37E] hover:text-[#111] transition-all"
              >
                Смотреть все проекты
                <span className="material-symbols-outlined text-base text-[#BFA37E]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* СТАТИСТИКА */}
        <section id="company-metrics" className="bg-[#F9F9F7] border-t border-b border-[#141414]/[0.08] py-16">
          <div className="max-w-[1400px] mx-auto px-8 md:px-14">
            <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-[#111] mb-10 reveal">
              О компании в цифрах
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#141414]/10 mb-8 reveal">
              <div className="bg-[#F9F9F7] p-6">
                <p className="font-light text-[2rem] text-[#BFA37E] leading-none">{metrics.years}+</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/50 mt-2">лет на рынке</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/35 mt-2">anos en el mercado</p>
              </div>
              <div className="bg-[#F9F9F7] p-6">
                <p className="font-light text-[2rem] text-[#BFA37E] leading-none">{metrics.projects}+</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/50 mt-2">проектов</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/35 mt-2">proyectos</p>
              </div>
              <div className="bg-[#F9F9F7] p-6">
                <p className="font-light text-[2rem] text-[#BFA37E] leading-none">{metrics.area}M+</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/50 mt-2">м² реализованных пространств</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/35 mt-2">m² desarrollados</p>
              </div>
              <div className="bg-[#F9F9F7] p-6">
                <p className="font-light text-[2rem] text-[#BFA37E] leading-none">{metrics.partnerYears}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/50 mt-2">лет партнёрства с международным оператором ТЦ</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/35 mt-2">anos con operador internacional de centros comerciales</p>
              </div>
              <div className="bg-[#F9F9F7] p-6">
                <p className="font-light text-[2rem] text-[#BFA37E] leading-none">{metrics.partnerProjects}+</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/50 mt-2">проектов в рамках одного партнёрства</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/35 mt-2">proyectos con un mismo cliente</p>
              </div>
            </div>
          </div>
        </section>

        {/* О КОМПАНИИ */}
        <section className="bg-[#F9F9F7] py-28 px-8 md:px-14 border-t border-[#BFA37E]/10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight leading-none mb-8 text-[#111]">
                Константин Бурцев
              </h2>
              <blockquote className="text-2xl font-light italic text-[#141414]/60 border-l-2 border-[#BFA37E] pl-6 mb-8 leading-snug">
                "Объект становится архитектурой тогда, когда он меняет
                восприятие места."
              </blockquote>
              <p className="text-[#141414]/50 font-light leading-relaxed mb-6">
                Основатель monumforma. Более 17 лет в реализации сложных
                архитектурных объектов и световых инсталляций. Методология
                студии основана на одном принципе: художественное решение должно
                быть производственно реализуемым с первого чертежа.
              </p>
              <Link
                to="/company"
                className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-[#141414]/40 hover:text-[#BFA37E] transition-colors"
              >
                <span>О компании</span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="reveal reveal-delay-1">
              <div className="aspect-[4/5] overflow-hidden bg-[#141414]/5">
                <img
                  alt="Константин Бурцев"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="/assets/konst.JPG"
                  onError={(e) => {
                    if (!e.target.dataset.failed) {
                      e.target.dataset.failed = true;
                      e.target.src =
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCldUVennI4I72et6AuVe32w-YlxSfQ0R38jKo5B5P-XJymM8WIfFZ9bzsdLK-9EiP4Aod628-0yPk5Qd0P4fH2xedJ61ejgvtwQIRrAHBEpmSIRSF_3jM4bi-IzUv3NqSPJ0yUC0BmlxMSf0qwZuaeJG_u86SS5hAvEdMzhMfcWm6_PLgzklpzlEcQKHeuvSxiWEwTn2go_LINB_7FEI2U8vzKSlNFTmo_LfeGgthMeiCrTundUjsfP1Z6vPhX9D4n_rpWph4NfbeF";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* КЛИЕНТЫ */}
        <section className="bg-[#F9F9F7] py-28 px-8 md:px-14 border-t border-[#BFA37E]/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight leading-none text-[#111]">
                Работаем с теми,
                <br />
                кто формирует городскую среду.
              </h2>
            </div>

            <div className="mb-8 reveal">
              <div
                className="client-card bg-white border border-[#111]/[0.08] p-10"
                style={{ borderLeft: "3px solid #BFA37E" }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-2xl font-light uppercase tracking-tight mb-2 text-[#111]">
                      IKEA
                    </h4>
                    <p className="font-mono text-[9px] text-[#BFA37E] uppercase tracking-widest mb-4">
                      Глобальный контракт на 13+ объектов
                    </p>
                    <p className="text-[#141414]/50 font-light leading-relaxed text-sm max-w-lg">
                      Постоянный партнёр крупнейшей мировой сети. Разработка и
                      реализация флагманских объектов — навигационные
                      скульптуры, входные группы и световые инсталляции в
                      магазинах по всей Европе.
                    </p>
                  </div>
                  <div className="hidden md:block font-mono text-[9px] text-[#141414]/25 text-right">
                    <p className="text-[#BFA37E] uppercase tracking-widest mb-1">
                      Global Retail
                    </p>
                    <p>13+ объектов</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12 reveal">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-[#111]/[0.05]">
                {[
                  "Samsung",
                  "Adidas",
                  "Marriott",
                  "Gazprom",
                  "Lukoil",
                  "Hilton",
                ].map((client, i) => (
                  <div
                    key={i}
                    className="bg-[#F9F9F7] flex items-center justify-center py-8 px-6 group transition-all duration-300 hover:bg-white"
                  >
                    <span className="font-light text-[#141414]/40 uppercase tracking-[0.15em] text-sm group-hover:text-[#141414] transition-colors">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex justify-start reveal">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#BFA37E] text-[#141414] px-10 py-3.5 font-mono text-[10px] tracking-[0.2em] uppercase border-2 border-[#BFA37E] transition-all duration-300 hover:bg-transparent hover:text-[#BFA37E]"
              >
                Узнать больше о работе с нами
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ОТЗЫВЫ */}
        <section className="bg-[#F5F5F3] py-20 px-8 md:px-14 border-t border-[#BFA37E]/10">
          <div className="max-w-[1400px] mx-auto">
            <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tight text-[#111] mb-10 reveal">
              Отзывы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#141414]/10 reveal">
              {[
                {
                  quote:
                    "Monumforma взяли на себя полный цикл: от идеи до монтажа. Всё в срок и с очень точной инженерией.",
                  author: "Commercial Director, Retail Developer",
                },
                {
                  quote:
                    "Команда умеет работать с большими потоками посетителей и сложной архитектурой. Объект сразу стал точкой притяжения.",
                  author: "Head of Marketing, Shopping Center",
                },
                {
                  quote:
                    "Сильный дизайн, понятная коммуникация и абсолютный контроль на площадке. Результат превзошёл ожидания.",
                  author: "Project Manager, International Brand",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 md:p-10">
                  <blockquote className="text-[#141414]/70 font-light leading-relaxed mb-6">
                    "{item.quote}"
                  </blockquote>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#BFA37E]">
                    {item.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F9F9F7] py-16 px-8 md:px-14 border-t border-[#BFA37E]/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col items-center text-center reveal">
              <h2 className="text-[#111] font-light uppercase tracking-tight leading-none mb-4 text-[clamp(1.3rem,2.5vw,2.2rem)]">
                Расскажите нам
                <br />о вашем проекте.
              </h2>
              <p className="text-[#141414]/50 font-light leading-relaxed max-w-xl mb-6 text-sm">
                Работаем с девелоперами, управляющими компаниями, архитектурными
                бюро и городскими службами. Каждый проект начинается с разговора
                — без обязательств, без шаблонных предложений.
              </p>
              <Link
                to="/contact"
                className="bg-[#BFA37E] hover:bg-transparent text-[#141414] hover:text-[#BFA37E] border-2 border-[#BFA37E] px-10 py-3 font-light text-sm uppercase tracking-tight transition-all inline-block"
              >
                Начать разговор
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
