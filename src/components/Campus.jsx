import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Campus.css";

const IM = "/campus";
export const CAMPUS_SPLASH = `${IM}/2 bp.jpg`;

const CA = {
  hero: `${IM}/1 main.png`,
  second: `${IM}/2 bp.jpg`,
  lobby: `${IM}/3.png`,
  deerClose: `${IM}/4.png`,
  pinecone: `${IM}/5.png`,
  tree: `${IM}/6.jpg`,
  wide: `${IM}/7.png`,
  last: `${IM}/posled.jpg`,
};

export default function Campus() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — CORPORATE CAMPUS | Lobby & Landscape Art Programme";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ca-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#campus-root .ca-reveal").forEach((el) => {
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Hero animation/stretch like MagicPiano.jsx
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
      id="campus-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      <div
        ref={heroWrapRef}
        className="sticky top-0 z-[1] flex h-screen w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#141414]">
          <img
            ref={heroBgRef}
            alt="Corporate Campus hero"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 45%" }}
            src={CA.hero}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(20,20,20,.88) 0%, rgba(20,20,20,.15) 50%, transparent 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="mt-auto mx-auto w-full max-w-[1400px] px-8 pb-20 md:px-14">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <p className="ca-h0 font-mono text-[10px] text-primary tracking-[.45em] uppercase mb-5">
                  Art Programme — Landscape & Lobby
                </p>
                <h1 className="ca-h1 font-light leading-none tracking-tight">
                  <span
                    className="text-primary italic"
                    style={{ fontSize: "clamp(2.4rem,5vw,4.8rem)" }}
                  >
                    CORPORATE
                  </span>
                  <br />
                  <span
                    className="text-primary italic"
                    style={{ fontSize: "clamp(2.4rem,5vw,4.8rem)" }}
                  >
                    CAMPUS
                  </span>
                  <br />
                  <span
                    className="text-white"
                    style={{
                      fontSize: "clamp(1.3rem,2.2vw,2rem)",
                      letterSpacing: ".02em",
                    }}
                  >
                    Lobby & Landscape Art Programme
                  </span>
                </h1>
              </div>

              <div className="ca-h2 lg:col-span-4 lg:col-start-9 flex flex-col gap-4 pb-2 lg:mt-14">
                {[
                  ["Client", "Corporate Business Park"],
                  ["Scope", "Территория + лобби + сезонное оформление"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center gap-4">
                    <div
                      className="w-px h-10 flex-shrink-0"
                      style={{ background: "rgba(191,163,126,.3)" }}
                    />
                    <div>
                      <p
                        className="font-mono text-[9px] uppercase tracking-widest mb-1"
                        style={{ color: "rgba(255,255,255,.3)" }}
                      >
                        {k}
                      </p>
                      <p className="font-light text-white">{v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div
              className="w-px h-9 relative overflow-hidden"
              style={{ background: "rgba(255,255,255,.12)" }}
            >
              <div
                className="ca-sl absolute inset-0"
                style={{ background: "#BFA37E" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] bg-[#F9F9F7]">
        <div
          className="border-b"
          style={{ background: "#F0EFEB", borderColor: "rgba(20,20,20,.07)" }}
        >
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 grid grid-cols-2 md:grid-cols-5">
            {[
              ["Тип", "Территория + лобби"],
              ["Экстерьер", "Кортен-сталь"],
              ["Интерьер", "Зеркальная сталь"],
              ["Объекты", "Ландшафт + скульптура + сезон"],
              ["Обслуживание", "Без реконструкции"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`py-7 ${i === 0 ? "pr-6" : "px-6"} ${
                  i < 4 ? "border-r" : "pl-6"
                }`}
                style={{ borderColor: "rgba(20,20,20,.07)" }}
              >
                <p
                  className="font-mono text-[8px] uppercase tracking-[.3em] mb-2"
                  style={{ color: "rgba(20,20,20,.35)" }}
                >
                  {k}
                </p>
                <p className="font-light text-base">{v}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="py-28 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 ca-reveal">
              <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-5">
                The Challenge
              </p>
              <h2
                className="font-light uppercase tracking-tight leading-none"
                style={{ fontSize: "clamp(1.8rem,2.8vw,2.6rem)" }}
              >
                Среда,
                <br />
                которая
                <br />
                управляет
                <br />
                движением.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 grid lg:grid-cols-5 gap-10">
              <div className="lg:col-span-3 ca-reveal ca-d1">
                <p
                  className="font-light leading-relaxed mb-6"
                  style={{ color: "rgba(20,20,20,.7)" }}
                >
                  Повысить статус объекта, структурировать потоки на территории
                  и в лобби, снизить визуальный шум — без капитальной
                  реконструкции.
                </p>
              </div>
              <div className="lg:col-span-2 ca-reveal ca-d2">
                <div className="ca-gal-img w-full" style={{ aspectRatio: "4/5" }}>
                  <img
                    alt="Кортеновая сфера в кампусе"
                    className="w-full h-full object-cover"
                    src={CA.second}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ca-gal-img ca-reveal" style={{ height: "70vh" }}>
          <img
            alt="Скульптуры в лобби"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
            src={CA.lobby}
          />
        </div>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 ca-reveal">
            <div>
              <p className="font-light leading-relaxed mb-6" style={{ color: "rgba(20,20,20,.6)" }}>
                Экстерьер — кортеновая сталь: модульная геометрия, параметрическая
                сборка и автономная эксплуатация. Интерьер — полированная
                нержавеющая сталь: отражения света и людей, визуальное расширение
                пространства лобби.
              </p>
            </div>
            <div className="ca-gal-img">
              <img
                alt="Полигональная скульптура — крупно"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "3/4" }}
                src={CA.deerClose}
              />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-3 gap-px" style={{ background: "#E0DFDB" }}>
          <div className="ca-gal-img ca-reveal" style={{ height: "55vh" }}>
            <img alt="Экстерьер — pinecone" className="w-full h-full object-cover" src={CA.pinecone} />
          </div>
          <div className="ca-gal-img ca-reveal ca-d1" style={{ height: "55vh" }}>
            <img alt="Сезонная инсталляция в лобби" className="w-full h-full object-cover" src={CA.tree} />
          </div>
          <div className="ca-gal-img ca-reveal ca-d2" style={{ height: "55vh" }}>
            <img alt="Экстерьер — wide" className="w-full h-full object-cover" src={CA.wide} />
          </div>
        </div>

        <section className="py-24 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 ca-reveal">
            <div className="lg:col-span-4">
              <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">
                Value
              </p>
              <h2
                className="font-light uppercase tracking-tight leading-none"
                style={{ fontSize: "clamp(1.8rem,2.5vw,2.4rem)" }}
              >
                Результат
                <br />
                для заказчика.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.65)" }}>
                Лобби стало пространством взаимодействия, территория получила
                читаемую навигационную структуру, а сезонные обновления
                выполняются без перестройки инфраструктуры.
              </p>
            </div>
          </div>
        </section>

        <div className="ca-gal-img" style={{ height: "65vh" }}>
          <img
            alt="Финальный кадр Campus"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
            src={CA.last}
          />
        </div>

        <section className="py-24 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto">
            <div className="ca-reveal mb-20 pb-20 border-b" style={{ borderColor: "rgba(20,20,20,.08)" }}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <h2 className="font-light tracking-tight leading-none" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)" }}>
                  Нужна арт-программа
                  <br />
                  для вашего объекта?
                </h2>
                <Link to="/contact" className="btn-cta flex-shrink-0">
                  Получить оценку за 24 часа
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

