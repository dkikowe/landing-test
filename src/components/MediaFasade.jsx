import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./MediaFasade.css";

const IM = "/media-fasade";
export const MEDIA_FASADE_SPLASH = `${IM}/1-hero.png`; // user: 1 is splash + hero

const MF = {
  hero: `${IM}/1-hero.png`,
  second: `${IM}/2.png`,
  third: `${IM}/3.png`,
  fourth: `${IM}/4.png`,
  fifth: `${IM}/5.png`,
  sixth: `${IM}/6.png`,
  seventh: `${IM}/7.png`,
  eighth: `${IM}/8.jpg`,
  last: `${IM}/posled.jpg`,
  video: `${IM}/video.mp4`,
};

export default function MediaFasade() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — Медиафасад 220 м | 1 760 м²";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mf-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#media-fasade-root .mf-reveal").forEach((el) => {
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Hero animation as Manifest.jsx
  useEffect(() => {
    const heroWrap = heroWrapRef.current;
    const heroBg = heroBgRef.current;
    const heroVeil = heroVeilRef.current;
    const updateHero = () => {
      if (!heroWrap || !heroBg || !heroVeil) return;
      const s = window.scrollY;
      const p = Math.min(1, s / (window.innerHeight || 800));
      heroWrap.style.transform = `translateY(${s * 0.3}px)`;
      heroWrap.style.opacity = String(1 - p);
      heroVeil.style.opacity = String(p);
      heroBg.style.transform = `translateY(${s * 0.2}px)`;
    };
    window.addEventListener("scroll", updateHero, { passive: true });
    updateHero();
    return () => window.removeEventListener("scroll", updateHero);
  }, []);

  return (
    <div
      id="media-fasade-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      <div
        ref={heroWrapRef}
        className="sticky top-0 z-[1] flex h-screen min-h-[100dvh] w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#050810]">
          <img
            ref={heroBgRef}
            alt="Медиафасад — ночной вид"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 40%" }}
            src={MF.hero}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(5,8,16,.97) 0%, rgba(5,8,16,.4) 50%, rgba(5,8,16,.15) 100%)",
            }}
          />
        </div>
        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="mf-h0 absolute left-8 top-28 z-10 md:left-14">
            <p className="font-mono text-[9px] uppercase tracking-[.4em]" style={{ color: "rgba(255,255,255,.22)" }}>
              monumforma / Проекты / Медиафасад
            </p>
          </div>

          <div className="mt-auto mx-auto w-full max-w-[1400px] px-8 pb-14 md:px-14">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-6">
                <p className="mf-h0 font-mono text-[9px] uppercase tracking-[.28em] mb-4" style={{ color: "rgba(255,255,255,.28)" }}>
                  LED Медиафасад
                </p>
                <div className="mf-h1 flex items-baseline gap-4 flex-wrap">
                  <span className="text-white font-light" style={{ fontSize: "clamp(5rem,11vw,10rem)", lineHeight: 0.88 }}>
                    220
                  </span>
                  <span className="font-light text-white" style={{ fontSize: "clamp(1.2rem,2.5vw,2rem)", opacity: 0.45 }}>
                    ×
                  </span>
                  <span className="text-white font-light" style={{ fontSize: "clamp(5rem,11vw,10rem)", lineHeight: 0.88 }}>
                    8
                  </span>
                  <span style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "rgba(255,255,255,.3)" }}>
                    м
                  </span>
                </div>
                <p className="mf-h2 font-light mt-4" style={{ color: "rgba(255,255,255,.35)", fontSize: "clamp(.85rem,1.1vw,.95rem)", maxWidth: "34rem" }}>
                  Медиафасад площадью 1 760 м² с шагом пикселя 40 см. Видимость с
                  шоссе и парковки. 4 эксплуатационных сезона.
                </p>
              </div>

              <div className="mf-h3 lg:col-span-4 lg:col-start-9 flex flex-col gap-4">
                {[
                  ["Площадь", "1 760 м²"],
                  ["Оборудование", "Итальянский партнёр"],
                  ["Конструктив", "Собственная разработка"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4">
                    <div className="w-px flex-shrink-0 self-stretch" style={{ background: "rgba(191,163,126,.2)" }} />
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,.22)" }}>
                        {k}
                      </p>
                      <p className="font-light text-white" style={{ fontSize: ".9rem" }}>
                        {v}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-px h-9 relative overflow-hidden" style={{ background: "rgba(255,255,255,.1)" }}>
              <div className="mf-sl absolute inset-0" style={{ background: "#BFA37E" }} />
            </div>
          </div>
        </div>
      </div>

      <div id="mf-page-content" className="relative z-[2] bg-[#F9F9F7]">
        <div style={{ background: "#141414", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 grid grid-cols-2 md:grid-cols-5">
            {[
              ["Размер", "220 × 8 м / 1 760 м²"],
              ["Пиксель", "Шаг P40 (40 см)"],
              ["Инженерия и установка", "23 дня под ключ"],
              ["Использование", "4 сезона в эксплуатации"],
              ["Гарантия", "До 5 лет"],
            ].map(([k, v], i) => (
              <div key={k} className={`py-6 ${i === 0 ? "pr-6" : "px-6"} ${i < 4 ? "border-r" : "pl-6"}`} style={{ borderColor: "rgba(255,255,255,.06)" }}>
                <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-2" style={{ color: "rgba(255,255,255,.22)" }}>
                  {k}
                </p>
                <p className="font-light text-sm" style={{ color: "rgba(255,255,255,.7)" }}>
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>

        <section className="py-28 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-4 mf-reveal">
                <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-6" style={{ color: "rgba(20,20,20,.3)" }}>
                  О проекте
                </p>
                <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                  Виден с шоссе.
                  <br />
                  Работает
                  <br />
                  четыре сезона.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 mf-reveal mf-d1">
                <p className="font-light leading-relaxed mb-6" style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}>
                  Медиафасад 220 × 8 метров расположен на внешнем периметре
                  торгового центра. Шаг пикселя 40 см — оптимальный для наружной
                  демонстрации контента с дальних дистанций.
                </p>
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.45)" }}>
                  За четыре сезона эксплуатации фасад использовался для
                  информирования о распродажах, праздничных программах и других
                  событиях торгового центра.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: "#050810" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-3 flex justify-between items-center">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.15)" }}>
              Медиафасад в работе — вечерний режим
            </p>
            <span className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.3)" }}>
              Видео
            </span>
          </div>
          <div style={{ position: "relative", aspectRatio: "16/9", background: "#020408", overflow: "hidden" }}>
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            >
              <source src={MF.video} type="video/mp4" />
            </video>
          </div>
        </div>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-3 mf-reveal">
              <div className="mf-gal-img md:col-span-4">
                <img
                  alt="Монтаж медиафасада"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={MF.fifth}
                />
              </div>
              <div className="md:col-span-8 grid md:grid-cols-3 gap-px" style={{ background: "rgba(20,20,20,.07)" }}>
                {[
                  ["12", "дней предмонтажной сборки"],
                  ["8", "дней монтажа на фасад"],
                  ["3", "дня пусконаладки"],
                ].map(([n, t]) => (
                  <div key={n} className="p-8" style={{ background: "#F0EFEB" }}>
                    <p className="font-light" style={{ fontSize: "clamp(3rem,5vw,4.5rem)", lineHeight: 1 }}>
                      {n}
                    </p>
                    <p className="font-light" style={{ fontSize: ".85rem", color: "rgba(20,20,20,.45)" }}>
                      {t}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-3 mf-reveal">
              <div className="mf-gal-img">
                <img
                  alt="Медиафасад — ночной вид"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/7" }}
                  src={MF.fourth}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mf-reveal mf-d1">
              <div className="mf-gal-img">
                <img
                  alt="Медиафасад — уличный вид"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  src={MF.eighth}
                />
              </div>
              <div className="mf-gal-img">
                <img
                  alt="Медиафасад — дополнительный ракурс"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  src={MF.seventh}
                />
              </div>
            </div>
          </div>
        </section>

        <div style={{ position: "relative", background: "#050810", overflow: "hidden" }}>
          <div className="mf-gal-img" style={{ height: "clamp(420px,65vw,860px)" }}>
            <img
              alt="Медиафасад — финальный ночной кадр"
              className="w-full h-full object-cover"
              style={{ opacity: 0.4 }}
              src={MF.last}
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14" style={{ zIndex: 2 }}>
            <div className="max-w-[1400px] mx-auto w-full mf-reveal">
              <h2 className="font-light text-white leading-none tracking-tight mb-10" style={{ fontSize: "clamp(1.6rem,4.5vw,3rem)" }}>
                1 760 м²
                <br />
                видны с шоссе.
                <br />
                Работают круглый год.
              </h2>
            </div>
          </div>
        </div>

        <section className="py-24 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="mf-reveal mb-20 pb-20 border-b" style={{ borderColor: "rgba(20,20,20,.08)" }}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <h2 className="font-light tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}>
                  Нужен медиафасад или наружная
                  <br />
                  световая система для вашего объекта?
                </h2>
                <Link to="/contact" className="btn-cta flex-shrink-0">
                  Обсудить проект
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

