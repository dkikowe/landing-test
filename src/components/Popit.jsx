import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Popit.css";

const IM = "/popit";
export const POPIT_SPLASH = `${IM}/1.jpg`;

const PI = {
  hero: `${IM}/8.png`,
  splash: `${IM}/1.jpg`,
  r1: `${IM}/2.png`,
  r2: `${IM}/111.png`,
  cad: `${IM}/3.png`,
  prod: `${IM}/6.jpeg`,
  live1: `${IM}/4.png`,
  live2: `${IM}/5.png`,
  final: `${IM}/7.png`,
};

export default function Popit() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — POP IT | Интерактивный МАФ";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pi-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#popit-root .pi-reveal").forEach((el) => {
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
      id="popit-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      <div
        ref={heroWrapRef}
        className="sticky top-0 z-[1] flex h-screen w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#F5F4F0]">
          <img
            ref={heroBgRef}
            alt="POP IT — интерактивный МАФ"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 30%" }}
            src={PI.hero}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(245,244,240,.98) 0%, rgba(245,244,240,.2) 50%, rgba(245,244,240,.05) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="absolute left-8 top-28 z-10 md:left-14 pi-h0">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(20,20,20,.3)" }}
            >
              monumforma / Проекты / POP IT
            </p>
          </div>

          <div className="mt-auto mx-auto w-full max-w-[1400px] px-8 pb-14 md:px-14">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <p
                  className="font-mono text-[9px] uppercase tracking-[.28em] mb-5 pi-h0"
                  style={{ color: "rgba(20,20,20,.3)" }}
                >
                  Интерактивная малая архитектурная форма
                </p>
                <div className="mb-5 pi-h0 flex h-[4px] w-24">
                  {["#e53935", "#fb8c00", "#fdd835", "#43a047", "#1e88e5", "#8e24aa"].map((c) => (
                    <span key={c} className="flex-1" style={{ background: c }} />
                  ))}
                </div>
                <h1
                  className="pi-h1 font-light leading-none tracking-tight"
                  style={{ fontSize: "clamp(4rem,9vw,8.5rem)", color: "#141414" }}
                >
                  POP IT
                </h1>
                <p
                  className="pi-h2 mt-5 font-light"
                  style={{ color: "rgba(20,20,20,.45)", maxWidth: "36rem" }}
                >
                  Тактильный объект в полный рост. Силиконовые полусферы,
                  металлический каркас, 2 месяца непрерывной эксплуатации в
                  high-traffic ТЦ.
                </p>
              </div>

              <div className="pi-h3 lg:col-span-4 lg:col-start-9 lg:mt-14">
                {[
                  ["Высота", "2,5 м"],
                  ["Ширина", "4 м"],
                  ["Тактильный материал", "Силикон, индивидуальный заказ"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 mb-4">
                    <div className="w-px flex-shrink-0 self-stretch" style={{ background: "rgba(20,20,20,.12)" }} />
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-widest mb-1" style={{ color: "rgba(20,20,20,.3)" }}>
                        {k}
                      </p>
                      <p className="font-light text-[.9rem]">{v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-px h-9 relative overflow-hidden" style={{ background: "rgba(20,20,20,.12)" }}>
              <div className="pi-sl absolute inset-0" style={{ background: "#BFA37E" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] bg-[#F9F9F7]">
        <div className="flex h-[3px] w-full">
          {["#e53935", "#fb8c00", "#fdd835", "#43a047", "#1e88e5", "#8e24aa"].map((c) => (
            <span key={c} className="flex-1" style={{ background: c }} />
          ))}
        </div>

        <div className="border-b" style={{ background: "#F0EFEB", borderColor: "rgba(20,20,20,.07)" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 grid grid-cols-2 md:grid-cols-5">
            {[
              ["Тип", "Интерактивный МАФ"],
              ["Габариты", "2,5 × 4 × 1,15 м"],
              ["Цвета", "7 оттенков радуги"],
              ["Эксплуатация", "2 месяца / high-traffic"],
              ["Цикл", "Проект / Производство / Монтаж"],
            ].map(([k, v], i) => (
              <div key={k} className={`py-7 ${i === 0 ? "pr-6" : "px-6"} ${i < 4 ? "border-r" : "pl-6"}`} style={{ borderColor: "rgba(20,20,20,.07)" }}>
                <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-2" style={{ color: "rgba(20,20,20,.35)" }}>
                  {k}
                </p>
                <p className="font-light text-sm">{v}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="py-28 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 pi-reveal">
              <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-6" style={{ color: "rgba(20,20,20,.3)" }}>
                Концепция
              </p>
              <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                Форма = интерфейс.
                <br />
                Материал = взаимодействие.
                <br />
                Масштаб = эффект.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 pi-reveal pi-d1">
              <p className="font-light leading-relaxed mb-6" style={{ color: "rgba(20,20,20,.55)" }}>
                Задача — воспроизвести тактильную механику массового антистресса в
                архитектурном масштабе так, чтобы взаимодействие было
                интуитивным и для детей, и для взрослых.
              </p>
            </div>
          </div>
        </section>

        <div style={{ background: "#EEECEA" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-3">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.25)" }}>
              Концепт → реализация
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px pi-reveal" style={{ background: "rgba(20,20,20,.07)" }}>
            <div className="pi-gal-img" style={{ height: "clamp(300px,42vw,580px)" }}>
              <img alt="POP IT рендер" className="w-full h-full object-cover" src={PI.r1} />
            </div>
            <div className="pi-gal-img" style={{ height: "clamp(300px,42vw,580px)" }}>
              <img alt="POP IT реализация" className="w-full h-full object-cover" src={PI.r2} />
            </div>
          </div>
        </div>

        <section className="py-28 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-3 pi-reveal">
            <div className="md:col-span-4 pi-gal-img">
              <img alt="CAD рендер узла" className="w-full object-cover" style={{ aspectRatio: "3/4" }} src={PI.cad} />
            </div>
            <div className="md:col-span-8 pi-gal-img">
              <img alt="Сборочный цех" className="w-full h-full object-cover" style={{ aspectRatio: "16/10", minHeight: "100%" }} src={PI.prod} />
            </div>
          </div>
        </section>

        <section className="py-20 px-8 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-3 pi-reveal">
            <div className="pi-gal-img">
              <img alt="POP IT в эксплуатации 1" className="w-full object-cover" style={{ aspectRatio: "1/1" }} src={PI.live1} />
            </div>
            <div className="pi-gal-img">
              <img alt="POP IT в эксплуатации 2" className="w-full object-cover" style={{ aspectRatio: "1/1" }} src={PI.live2} />
            </div>
          </div>
        </section>

        <section className="py-20 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-center pi-reveal">
            <div className="lg:col-span-5">
              <h2 className="font-light uppercase tracking-tight leading-none mb-8" style={{ fontSize: "clamp(1.6rem,2.8vw,2.8rem)" }}>
                После размещения
                <br />
                поступило более
                <br />
                50 запросов
                <br />
                на повторение.
              </h2>
            </div>
            <div className="pi-gal-img lg:col-span-6 lg:col-start-7">
              <img alt="POP IT финальный кадр" className="w-full object-cover" style={{ aspectRatio: "4/3" }} src={PI.final} />
            </div>
          </div>
        </section>

        <section className="py-24 px-8 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="pi-reveal mb-20 pb-20 border-b" style={{ borderColor: "rgba(20,20,20,.08)" }}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <h2 className="font-light tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}>
                  Нужен интерактивный объект
                  <br />
                  для вашего пространства?
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

