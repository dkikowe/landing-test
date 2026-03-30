import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Lustra.css";

const IM = "/lustra";

// 0 — заставка в раздел где все проекты
export const LUSTRA_SPLASH = `${IM}/0-zastavka.png`;

// 1 — первая фото (hero), 2 — вторая фото, остальное — в середину (включая видео)
const LU = {
  hero: `${IM}/1-hero.png`,
  second: `${IM}/2.png`,
  ing1: `${IM}/3-ing.png`,
  ing2: `${IM}/4.png`,
  imgFinal: `${IM}/8.png`,
  video1: `${IM}/video-1.mp4`,
  video1h264: `${IM}/video-1-h264.mp4`,
  video2: `${IM}/video-2.MOV`,
  video2mp4: `${IM}/video-2.mp4`,
  video3: `${IM}/video-3.MOV`,
  video3mp4: `${IM}/video-3.mp4`,
};

const aspect = {
  portrait: "3/4",
  portraitNarrow: "9/16",
  landscape: "16/9",
};

export default function Lustra() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);
  const video1Ref = useRef(null);

  // video-1 uses native controls; no need for ready/error overlay states
  // video-2 / video-3 are shown with native controls; no overlay states needed
  // NOTE: video-1 is shown with native player controls (like MagicPiano)

  useEffect(() => {
    document.title = "monumforma — Кинетическая люстра | 524 сферы";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lu-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    document
      .querySelectorAll("#lustra-root .lu-reveal")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Hero scroll animation — как в Manifest.jsx
  useEffect(() => {
    const heroWrap = heroWrapRef.current;
    const heroBg = heroBgRef.current;
    const heroVeil = heroVeilRef.current;

    const updateHero = () => {
      if (!heroWrap || !heroBg || !heroVeil) return;
      const s = window.scrollY;
      const maxScroll = window.innerHeight || 800;
      const p = Math.min(1, s / maxScroll);

      heroWrap.style.transform = `translateY(${s * 0.3}px)`;
      heroWrap.style.opacity = String(1 - p);
      heroVeil.style.opacity = String(p);
      heroBg.style.transform = `translateY(${s * 0.2}px)`;
    };

    window.addEventListener("scroll", updateHero, { passive: true });
    updateHero();
    return () => window.removeEventListener("scroll", updateHero);
  }, []);

  // video-1 is shown with native controls; no autoplay needed.

  // Intentionally no shared memoized style objects here

  return (
    <div
      id="lustra-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      <div
        ref={heroWrapRef}
        className="sticky top-0 z-[1] flex h-screen min-h-[100dvh] w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#060608]">
          <img
            ref={heroBgRef}
            alt="Кинетическая люстра — 524 светодиодные сферы"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 40%" }}
            src={LU.hero}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(6,6,8,.97) 0%, rgba(6,6,8,.55) 45%, rgba(6,6,8,.2) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="lu-h0 absolute left-8 top-28 z-10 md:left-14">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.25)" }}
            >
              monumforma&nbsp;&nbsp;/&nbsp;&nbsp;Проекты&nbsp;&nbsp;/&nbsp;&nbsp;Кинетическая
              люстра
            </p>
          </div>

          <div className="mt-auto mx-auto w-full max-w-[1400px] px-8 pb-14 md:px-14">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-6">
                <div className="lu-h0 mb-3 h-0 flex items-center">
                  <span
                    className="inline-flex"
                    style={{
                      fontFamily: "Roboto Mono, monospace",
                      fontSize: ".65rem",
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255,255,255,.15)",
                      padding: ".3rem .7rem",
                      color: "rgba(255,255,255,.5)",
                    }}
                  >
                    Кинетическая световая система
                  </span>
                </div>
                <h1
                  className="lu-h1 big-num text-white font-light leading-none tracking-tight"
                  style={{ fontSize: "clamp(4rem,9vw,8.5rem)" }}
                >
                  Люстра
                  <br />
                  532
                </h1>
                <p
                  className="lu-h2 font-light mt-5"
                  style={{
                    color: "rgba(255,255,255,.38)",
                    fontSize: "clamp(.85rem,1.1vw,.95rem)",
                    letterSpacing: ".03em",
                    maxWidth: "30rem",
                  }}
                >
                  Динамическая световая инсталляция с индивидуально управляемыми сферами.
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 lu-h3">
                <div
                  className="grid grid-cols-3 gap-px"
                  style={{ background: "rgba(255,255,255,.06)" }}
                >
                  <div
                    className="p-6 md:p-8 flex flex-col gap-1"
                    style={{
                      background: "rgba(6,6,8,.7)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <p
                      className="text-white"
                      style={{
                        fontFamily: "Barlow Condensed, sans-serif",
                        fontWeight: 200,
                        lineHeight: 0.88,
                        letterSpacing: "-.02em",
                        fontSize: "clamp(2.5rem,4vw,3.8rem)",
                      }}
                    >
                      532
                    </p>
                    <p
                      className="font-mono text-[8px] uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,.3)" }}
                    >
                      Сферы
                    </p>
                  </div>

                  <div
                    className="p-6 md:p-8 flex flex-col gap-1"
                    style={{
                      background: "rgba(6,6,8,.7)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <p
                      className="text-white"
                      style={{
                        fontFamily: "Barlow Condensed, sans-serif",
                        fontWeight: 200,
                        lineHeight: 0.88,
                        letterSpacing: "-.02em",
                        fontSize: "clamp(2.5rem,4vw,3.8rem)",
                      }}
                    >
                      14x5
                      <span style={{ fontSize: ".45em", opacity: 0.6 }}> м</span>
                    </p>
                    <p
                      className="font-mono text-[8px] uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,.3)" }}
                    >
                      Размер
                    </p>
                  </div>

                  <div
                    className="p-6 md:p-8 flex flex-col gap-1"
                    style={{
                      background: "rgba(6,6,8,.7)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <p
                      className="text-white"
                      style={{
                        fontFamily: "Barlow Condensed, sans-serif",
                        fontWeight: 200,
                        lineHeight: 0.88,
                        letterSpacing: "-.02em",
                        fontSize: "clamp(2.5rem,4vw,3.8rem)",
                      }}
                    >
                      9
                      <span style={{ fontSize: ".45em", opacity: 0.6 }}> м</span>
                    </p>
                    <p
                      className="font-mono text-[8px] uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,.3)" }}
                    >
                      Высота
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
            <div
              className="w-px h-9 relative overflow-hidden"
              style={{ background: "rgba(255,255,255,.1)" }}
            >
              <div
                className="lu-sl absolute inset-0"
                style={{ background: "#BFA37E" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="lu-page-content" className="relative z-[2] bg-[#F9F9F7]">
        {/* 2 · параметры */}
        <div style={{ background: "#141414", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 grid grid-cols-2 md:grid-cols-5">
            <div className="py-6 pr-6 border-r" style={{ borderColor: "rgba(255,255,255,.06)" }}>
              <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-2" style={{ color: "rgba(255,255,255,.25)" }}>
                Тип
              </p>
              <p className="font-light text-sm" style={{ color: "rgba(255,255,255,.75)" }}>
                Кинетическая инсталляция
              </p>
            </div>
            <div className="py-6 px-6 border-r" style={{ borderColor: "rgba(255,255,255,.06)" }}>
              <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-2" style={{ color: "rgba(255,255,255,.25)" }}>
                Механика
              </p>
              <p className="font-light text-sm" style={{ color: "rgba(255,255,255,.75)" }}>
                Лебёдочная система
              </p>
            </div>
            <div className="py-6 px-6 border-r" style={{ borderColor: "rgba(255,255,255,.06)" }}>
              <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-2" style={{ color: "rgba(255,255,255,.25)" }}>
                Управление
              </p>
              <p className="font-light text-sm" style={{ color: "rgba(255,255,255,.75)" }}>
                Цифровое DMX, 532 точки
              </p>
            </div>
            <div className="py-6 px-6 border-r" style={{ borderColor: "rgba(255,255,255,.06)" }}>
              <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-2" style={{ color: "rgba(255,255,255,.25)" }}>
                Интеграция
              </p>
              <p className="font-light text-sm" style={{ color: "rgba(255,255,255,.75)" }}>
                В ходе строительства
              </p>
            </div>
            <div className="py-6 pl-6">
              <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-2" style={{ color: "rgba(255,255,255,.25)" }}>
                Цикл
              </p>
              <p className="font-light text-sm" style={{ color: "rgba(255,255,255,.75)" }}>
                Под ключ
              </p>
            </div>
          </div>
        </div>

        {/* 3 · суть */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 lu-reveal">
                <div className="flex items-center gap-1.5 mb-0">
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                    О проекте
                  </span>
                </div>
                <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                  Не просто декор.
                  <br />
                  А инженерная система.
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6 lu-reveal lu-d1 flex flex-col gap-6">
                <p className="font-light leading-relaxed" style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}>
                  532 кинетические точки на лебёдочной системе формируют программируемую световую среду. Каждый элемент управляется индивидуально:
                  высота, свет и ритм синхронизируются в рамках заданных сценариев. Разработано 20 программ, адаптированных под разные режимы работы —
                  от повседневных сценариев до событийных и тайминговых световых шоу.
                </p>
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.5)" }}>
                  Система функционирует, как единый цифровой слой пространства, позволяя изменять восприятие среды без физического вмешательства.
                </p>

                <div className="grid grid-cols-3 gap-px mt-4" style={{ background: "rgba(20,20,20,.07)" }}>
                  <div className="p-6" style={{ background: "#F9F9F7" }}>
                    <p
                      className="text-[#141414]"
                      style={{
                        fontFamily: "Barlow Condensed, sans-serif",
                        fontSize: "clamp(2.2rem,3.5vw,3.2rem)",
                        fontWeight: 200,
                        lineHeight: 1,
                      }}
                    >
                      14x5<span style={{ fontSize: ".5em", color: "rgba(20,20,20,.4)", fontWeight: 300 }}> м</span>
                    </p>
                    <p className="font-mono text-[8px] uppercase tracking-widest mt-1" style={{ color: "rgba(20,20,20,.35)" }}>
                      размер инсталляции
                    </p>
                  </div>
                  <div className="p-6" style={{ background: "#F9F9F7" }}>
                    <p
                      className="text-[#141414]"
                      style={{
                        fontFamily: "Barlow Condensed, sans-serif",
                        fontSize: "clamp(2.2rem,3.5vw,3.2rem)",
                        fontWeight: 200,
                        lineHeight: 1,
                      }}
                    >
                      9<span style={{ fontSize: ".5em", color: "rgba(20,20,20,.4)", fontWeight: 300 }}> м</span>
                    </p>
                    <p className="font-mono text-[8px] uppercase tracking-widest mt-1" style={{ color: "rgba(20,20,20,.35)" }}>
                      высота системы
                    </p>
                  </div>
                  <div className="p-6" style={{ background: "#F9F9F7" }}>
                    <p
                      className="text-[#141414]"
                      style={{
                        fontFamily: "Barlow Condensed, sans-serif",
                        fontSize: "clamp(2.2rem,3.5vw,3.2rem)",
                        fontWeight: 200,
                        lineHeight: 1,
                      }}
                    >
                      20
                    </p>
                    <p className="font-mono text-[8px] uppercase tracking-widest mt-1" style={{ color: "rgba(20,20,20,.35)" }}>
                      светодинамических программ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 · кадр в работе (full bleed тёмный) */}
        <div style={{ background: "#060608" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-3">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.16)" }}>
              Система в работе — активный световой сценарий
            </p>
          </div>
          <div className="lu-gal-img lu-reveal" style={{ height: "clamp(380px,60vw,820px)" }}>
            <img
              alt="Кинетическая люстра — активный сценарий"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
              src={LU.second}
            />
          </div>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-4 flex justify-between items-end">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.16)" }}>
              Одновременно активны все 532 точки
            </p>
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.16)" }}>
              Central Park
            </p>
          </div>
        </div>

        {/* 5 · инжиниринг */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#141414" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-16">
              <div className="lg:col-span-4 lu-reveal">
                <div className="flex items-center gap-1.5 mb-0">
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(255,255,255,.25)" }}>
                    Конструктив
                  </span>
                </div>
                <h2 className="font-light uppercase tracking-tight leading-none text-white" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                  Несущая рама.
                  <br />
                  Собственная
                  <br />
                  разработка.
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6 lu-reveal lu-d1">
                <p className="font-light leading-relaxed" style={{ color: "rgba(255,255,255,.45)" }}>
                  Металлическая рама спроектирована и изготовлена под оборудование этой системы. Интегрирована в объект через сварку на стадии строительства — до завершения отделочных работ.
                  Фальш-потолок с точной перфорацией под тросовую систему разработан и произведён в рамках того же проекта.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3 lu-reveal lu-d2">
              <div>
                <div className="lu-gal-img mb-3">
                  <img
                    alt="Несущая металлическая рама — вид снизу"
                    className="w-full object-cover"
                    style={{ aspectRatio: aspect.portrait, objectPosition: "center" }}
                    src={LU.ing1}
                  />
                </div>
                <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.2)" }}>
                  Лебёдочные механизмы — 532 точки подвеса
                </p>
              </div>

              <div>
                <div
                  className="mb-3"
                  style={{
                    background: "#0a0a0c",
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: aspect.portrait,
                  }}
                >
                  <video
                    key="video-1-h264"
                    ref={video1Ref}
                    playsInline
                    controls
                    preload="auto"
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                    onError={() => {
                      // Keep native controls visible; browser will show fallback text below.
                    }}
                  >
                    <source src={LU.video1h264} type="video/mp4" />
                    <source src={LU.video2} type="video/quicktime" />
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
                <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.2)" }}>
                  Техническое испытание — первый запуск системы
                </p>
              </div>

              <div>
                <div className="lu-gal-img mb-3">
                  <img
                    alt="Металлическая рама — вид сбоку"
                    className="w-full object-cover"
                    style={{ aspectRatio: aspect.portrait, objectPosition: "center" }}
                    src={LU.ing2}
                  />
                </div>
                <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.2)" }}>
                  Несущая рама — интегрирована до завершения отделки
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 · спецификация */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#EEECEA" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 lu-reveal">
              <div className="flex items-center gap-1.5 mb-0">
                <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                  Спецификация
                </span>
              </div>
              <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                Точность на уровне
                <br />
                каждого элемента.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-px lu-reveal lu-d1" style={{ background: "rgba(20,20,20,.08)" }}>
              <div className="p-10" style={{ background: "#EEECEA" }}>
                <div className="flex justify-between items-start mb-6">
                  <p className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                    Кинетика
                  </p>
                  <span
                    className="inline-flex"
                    style={{ fontFamily: "Roboto Mono, monospace", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase", border: "1px solid rgba(20,20,20,.15)", padding: ".3rem .7rem" }}
                  >
                    Система
                  </span>
                </div>
                <p className="font-[Barlow Condensed]" style={{ fontSize: "clamp(2.8rem,4.5vw,4rem)", marginBottom: 8 }}>532</p>
                <p className="font-light" style={{ color: "rgba(20,20,20,.5)", fontSize: ".9rem" }}>
                  Индивидуальное управление каждой сферой. Композиция собирается из сотен элементов, где точность каждого влияет на целостность всей системы.
                </p>
                <div className="mt-6" style={{ height: 2, background: "rgba(20,20,20,.08)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: "#BFA37E", transform: "scaleX(0)", transformOrigin: "left" }} />
                </div>
              </div>

              <div className="p-10" style={{ background: "#EEECEA" }}>
                <div className="flex justify-between items-start mb-6">
                  <p className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                    Высота системы
                  </p>
                  <span
                    className="inline-flex"
                    style={{ fontFamily: "Roboto Mono, monospace", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase", border: "1px solid rgba(20,20,20,.15)", padding: ".3rem .7rem" }}
                  >
                    Особенность
                  </span>
                </div>
                <p className="font-[Barlow Condensed]" style={{ fontSize: "clamp(2.8rem,4.5vw,4rem)", marginBottom: 8 }}>9 m</p>
                <p className="font-light" style={{ color: "rgba(20,20,20,.5)", fontSize: ".9rem" }}>
                  Динамическая подвесная структура. Синхронизированная лебёдочная механика с точным позиционированием на всём диапазоне хода.
                </p>
              </div>

              <div className="p-10" style={{ background: "#EEECEA" }}>
                <div className="flex justify-between items-start mb-6">
                  <p className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                    Управление
                  </p>
                  <span
                    className="inline-flex"
                    style={{ fontFamily: "Roboto Mono, monospace", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase", border: "1px solid rgba(20,20,20,.15)", padding: ".3rem .7rem" }}
                  >
                    Цифровое DMX
                  </span>
                </div>
                <p className="font-light mb-4 uppercase tracking-tight" style={{ fontSize: "clamp(1.1rem,1.5vw,1.4rem)" }}>
                  Единая система управления
                </p>
                <p className="font-light" style={{ color: "rgba(20,20,20,.5)", fontSize: ".9rem" }}>
                  Свет и движение синхронизированы в одном медиаслое. Механика, RGB-управление и сценарии работают как единое целое.
                </p>
              </div>

              <div className="p-10" style={{ background: "#EEECEA" }}>
                <div className="flex justify-between items-start mb-6">
                  <p className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                    Фальш-потолок
                  </p>
                  <span
                    className="inline-flex"
                    style={{ fontFamily: "Roboto Mono, monospace", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase", border: "1px solid rgba(20,20,20,.15)", padding: ".3rem .7rem" }}
                  >
                    Сервис
                  </span>
                </div>
                <p className="font-light mb-4 uppercase tracking-tight" style={{ fontSize: "clamp(1.1rem,1.5vw,1.4rem)" }}>
                  Точечная перфорация
                </p>
                <p className="font-light" style={{ color: "rgba(20,20,20,.5)", fontSize: ".9rem" }}>
                  Разработка и производство декоративного фальш-потолка с перфорацией под тросовую систему конструкции с удобным сервисным обслуживанием.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 · программы */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#0c0c0e" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-16">
              <div className="lg:col-span-4 lu-reveal">
                <div className="flex items-center gap-1.5 mb-0">
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(255,255,255,.25)" }}>
                    Программы
                  </span>
                </div>
                <h2 className="font-light uppercase tracking-tight leading-none text-white" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                  20 независимых
                  <br />
                  сценариев работы.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 lu-reveal lu-d1">
                <p className="font-light leading-relaxed" style={{ color: "rgba(255,255,255,.4)" }}>
                  Контент меняется без физического вмешательства. Каждый сценарий — самостоятельная хореография из 532 точек: своя динамика высот, своя цветовая
                  партитура, свой ритм. Система адаптирована под сезонные и событийные режимы объекта.
                </p>
              </div>
            </div>

            <div className="lu-reveal lu-d2">
              {[
                ["01", "Волна", "Кинетика + цвет"],
                ["02", "Пульс", "Ритм"],
                ["03", "Рассвет", "Градиент"],
                ["04", "Дождь", "Кинетика"],
                ["05", "Архитектор", "Геоометрия"],
              ].map(([n, title, tag]) => (
                <div
                  key={n}
                  className="program-row flex items-center justify-between"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,.07)",
                    padding: "1rem 0",
                    transition: "padding-left .3s cubic-bezier(.16,1,.3,1)",
                  }}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[9px]" style={{ color: "rgba(255,255,255,.2)", minWidth: "2rem" }}>
                      {n}
                    </span>
                    <p className="font-light text-white">{title}</p>
                  </div>
                  <span
                    className="inline-flex"
                    style={{
                      fontFamily: "Roboto Mono, monospace",
                      fontSize: ".65rem",
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255,255,255,.15)",
                      padding: ".3rem .7rem",
                      color: "rgba(255,255,255,.5)",
                    }}
                  >
                    {tag}
                  </span>
                </div>
              ))}

              <div
                className="program-row flex items-center justify-between"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,.07)",
                  padding: "1rem 0",
                  transition: "padding-left .3s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[9px]" style={{ color: "rgba(255,255,255,.2)", minWidth: "2rem" }}>
                    06–20
                  </span>
                  <p className="font-light" style={{ color: "rgba(255,255,255,.4)" }}>
                    Сезонные и событийные сценарии
                  </p>
                </div>
                <span
                  className="inline-flex"
                  style={{
                    fontFamily: "Roboto Mono, monospace",
                    fontSize: ".65rem",
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(255,255,255,.15)",
                    padding: ".3rem .7rem",
                    color: "rgba(255,255,255,.5)",
                  }}
                >
                  По расписанию
                </span>
              </div>

              <p className="font-mono text-[8px] uppercase tracking-widest mt-8" style={{ color: "rgba(255,255,255,.15)" }}>
                Индивидуальные настройки программ — сценарии разрабатываются на этапе пусконаладки
              </p>
            </div>
          </div>
        </section>

        {/* 7b · видео 2 (вертикальное) */}
        <div style={{ background: "#0c0c0e", paddingBottom: "5rem" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14">
            <div className="grid md:grid-cols-12 gap-3 items-end">
              <div className="md:col-span-5 md:col-start-4">
                <div
                  className="mb-4"
                  style={{
                    background: "#080810",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <video
                    playsInline
                    controls
                    preload="metadata"
                    className="w-full object-cover"
                    style={{ display: "block", aspectRatio: aspect.portraitNarrow }}
                  >
                    <source src={LU.video2mp4} type="video/mp4" />
                    <source src={LU.video2} type="video/quicktime" />
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.2)" }}>
                    Система в штатном режиме — торговый центр
                  </p>
                  <span
                    className="inline-flex"
                    style={{
                      fontFamily: "Roboto Mono, monospace",
                      fontSize: ".65rem",
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255,255,255,.15)",
                      padding: ".3rem .7rem",
                      color: "rgba(255,255,255,.5)",
                    }}
                  >
                    Вертикальное видео
                  </span>
                </div>
              </div>

              <div className="md:col-span-3 md:col-start-9 flex flex-col justify-end pb-8 lu-reveal lu-d1">
                <div className="w-5 h-px mb-5" style={{ background: "#BFA37E" }} />
                <p className="font-light leading-relaxed" style={{ color: "rgba(255,255,255,.35)", fontSize: ".9rem" }}>
                  Пространство постоянно меняется. Программы работают по расписанию — без участия оператора.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8 · реализация */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-16 lu-reveal">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-1.5 mb-0">
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                    Реализация
                  </span>
                </div>
                <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                  Внедрено в ППР.
                  <br />
                  Не добавлено
                  <br />
                  после.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.55)" }}>
                  Проект реализован в плотной координации с генподрядчиком. Все решения — последовательность монтажа, точки крепления, доступы, электрика —
                  заложены в план производства работ до начала отделки. Работа с инженерными ограничениями строящегося объекта: параллельные процессы, жёсткие сроки, ограниченный доступ.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px lu-reveal lu-d1" style={{ background: "rgba(20,20,20,.07)" }}>
              {[
                ["01", "Проектирование", "Рама, фальш-потолок, тросовая система. Всё спроектировано в связке с общестроительными разделами. Документация передана в ППР."],
                ["02", "Производство", "Изготовление металлоконструкций. Производство фальш-потолка с точечной перфорацией. Монтаж лебёдочных блоков и калибровка кабелей."],
                ["03", "Монтаж", "Установка рамы и оборудования до завершения отделки. Разводка, подключение, интеграция системы управления в условиях строящегося объекта."],
                ["04", "Пусконаладка", "Калибровка 532 точек. Настройка движения и световых сценариев. Отладка 20 программ. Передача в эксплуатацию."],
              ].map(([n, title, desc]) => (
                <div key={n} className="p-10" style={{ background: "#F9F9F7" }}>
                  <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-5" style={{ color: "#BFA37E" }}>
                    {n}
                  </p>
                  <p className="font-light text-base mb-4 uppercase tracking-tight">{title}</p>
                  <p className="font-light leading-relaxed" style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9 · горизонтальное видео (полная ширина) */}
        <div style={{ background: "#060608" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-3 flex justify-between items-center">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.16)" }}>
              Финальная работа — 524 сферы в активном сценарии
            </p>
            <span
              className="inline-flex"
              style={{
                fontFamily: "Roboto Mono, monospace",
                fontSize: ".65rem",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,.15)",
                padding: ".3rem .7rem",
                color: "rgba(255,255,255,.5)",
              }}
            >
              Горизонтальное видео
            </span>
          </div>

          <div style={{ position: "relative", aspectRatio: aspect.landscape, background: "#030305", overflow: "hidden" }}>
            <video
              playsInline
              controls
              preload="metadata"
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            >
              <source src={LU.video3mp4} type="video/mp4" />
              <source src={LU.video3} type="video/quicktime" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>

          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-4">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.16)" }}>
              Одновременно активны все 524 точки — кинетика, цвет, ритм
            </p>
          </div>
        </div>

        {/* 10 · финальный кадр */}
        <div style={{ position: "relative", background: "#060608", overflow: "hidden" }}>
          <div className="lu-gal-img" style={{ height: "clamp(420px,65vw,860px)" }}>
            <img
              alt="Кинетическая люстра — финальный кадр"
              className="w-full h-full object-cover"
              style={{ opacity: 0.45, objectPosition: "center" }}
              src={LU.imgFinal}
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14" style={{ zIndex: 2 }}>
            <div className="max-w-[1400px] mx-auto w-full lu-reveal">
              <h2 className="font-light text-white leading-none tracking-tight mb-10" style={{ fontSize: "clamp(1.6rem,4.5vw,3rem)" }}>
                Механика, свет
                <br />
                и управление —<br />
                единая система.
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px flex-shrink-0" style={{ background: "#BFA37E" }} />
                  <p className="font-light" style={{ color: "rgba(255,255,255,.5)", fontSize: "clamp(.9rem,1.2vw,1.05rem)" }}>
                    Полный цикл: проектирование → производство → монтаж → пусконаладка
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px flex-shrink-0" style={{ background: "rgba(191,163,126,.3)" }} />
                  <p className="font-light" style={{ color: "rgba(255,255,255,.28)", fontSize: "clamp(.9rem,1.2vw,1.05rem)" }}>
                    Интеграция в здание на стадии строительства
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "2rem", right: "3rem", zIndex: 2 }}>
            <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "clamp(5rem,10vw,9rem)", color: "rgba(255,255,255,.04)", lineHeight: 1 }}>
              524
            </p>
          </div>
        </div>

        {/* CTA */}
        <section className="py-24 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="lu-reveal mb-20 pb-20 border-b" style={{ borderColor: "rgba(20,20,20,.08)" }}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <div>
                  <h2 className="font-light tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}>
                    Нужна кинетическая или световая система
                    <br />
                    для вашего объекта?
                  </h2>
                </div>
                <Link to="/contact" className="lu-btn-cta flex-shrink-0">
                  Обсудить проект
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px lu-reveal" style={{ background: "rgba(20,20,20,.06)" }}>
              <Link
                to="/projects"
                className="flex items-center gap-6 p-8"
                style={{
                  background: "#F9F9F7",
                  textDecoration: "none",
                  transition: "background .3s",
                }}
              >
                <span className="material-symbols-outlined text-2xl" style={{ color: "#BFA37E" }}>
                  arrow_back
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: "rgba(20,20,20,.35)" }}>
                    Все проекты
                  </p>
                  <p className="font-light uppercase tracking-tight">Вернуться в архив</p>
                </div>
              </Link>

              <Link
                to="/passage"
                className="flex items-center justify-end gap-6 p-8"
                style={{
                  background: "#F9F9F7",
                  textDecoration: "none",
                  transition: "background .3s",
                }}
              >
                <div className="text-right">
                  <p className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: "rgba(20,20,20,.35)" }}>
                    Следующий проект
                  </p>
                  <p className="font-light uppercase tracking-tight">Невский пассаж</p>
                </div>
                <span className="material-symbols-outlined text-2xl" style={{ color: "#BFA37E" }}>
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

