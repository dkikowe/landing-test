import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Park.css";

const IM = "/park";
export const PARK_SPLASH = `${IM}/0 - zastavka.jpg`;

const PK = {
  hero: `${IM}/1 main.png`,
  second: `${IM}/2.png`,
  third: `${IM}/3.jpg`,
  fourth: `${IM}/4.jpg`,
  fifth: `${IM}/5.jpg`,
  sixth: `${IM}/6.jpg`,
  ninth: `${IM}/9.png`,
  tenth: `${IM}/10.jpg`,
  eleventh: `${IM}/11.jpg`,
  last: `${IM}/Posled.png`,
};

export default function Park() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — Благоустройство | Парковая зона перед ТЦ";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pk-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#park-root .pk-reveal").forEach((el) => {
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Hero animation like Manifest.jsx
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
      id="park-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      <div
        ref={heroWrapRef}
        className="sticky top-0 z-[1] flex h-screen w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a1810]">
          <img
            ref={heroBgRef}
            alt="Благоустройство территории перед ТЦ"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 45%" }}
            src={PK.hero}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(20,20,16,.95) 0%, rgba(20,20,16,.3) 50%, rgba(20,20,16,.08) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="absolute top-28 left-8 md:left-14 z-10 pk-h0">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.22)" }}
            >
              monumforma / Проекты / Благоустройство
            </p>
          </div>

          <div className="mt-auto mx-auto w-full max-w-[1400px] px-8 md:px-14 pb-14">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <p
                  className="font-mono text-[9px] uppercase tracking-[.28em] mb-5 pk-h0"
                  style={{ color: "rgba(255,255,255,.25)" }}
                >
                  МАФ / Парковая зона перед ТЦ
                </p>
                <h1
                  className="font-light text-white leading-none tracking-tight pk-h1"
                  style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)" }}
                >
                  Природа
                  <br />и инженерия
                </h1>
                <p
                  className="font-light mt-5 pk-h2"
                  style={{ color: "rgba(255,255,255,.35)", maxWidth: "36rem" }}
                >
                  Проектирование и производство малых архитектурных форм для
                  парковой территории перед торговым центром.
                </p>
              </div>

              <div className="lg:col-span-4 lg:col-start-9 pk-h3 flex flex-col gap-4 lg:mt-14">
                {[
                  ["Тип", "Благоустройство / МАФ"],
                  ["Материалы", "Термодревесина / Бетон / Металл"],
                  ["Детская зона", "Совместная разработка с подрядчиком"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4">
                    <div
                      className="w-px flex-shrink-0 self-stretch"
                      style={{ background: "rgba(191,163,126,.2)" }}
                    />
                    <div>
                      <p
                        className="font-mono text-[8px] uppercase tracking-widest mb-1"
                        style={{ color: "rgba(255,255,255,.22)" }}
                      >
                        {k}
                      </p>
                      <p className="font-light text-white text-[.9rem]">{v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div
              className="w-px h-9 relative overflow-hidden"
              style={{ background: "rgba(255,255,255,.1)" }}
            >
              <div
                className="pk-sl absolute inset-0"
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
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 grid grid-cols-2 md:grid-cols-4">
            {[
              ["Тип", "МАФ / Парковая среда"],
              ["Объекты", "Навесы / Перголы / Лежаки"],
              ["Детская зона", "Горка + деревянный шалаш"],
              ["Цикл", "Проект / Произв. / Монтаж"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`py-7 ${i === 0 ? "pr-6" : "px-6"} ${
                  i < 3 ? "border-r" : "pl-6"
                }`}
                style={{ borderColor: "rgba(20,20,20,.07)" }}
              >
                <p
                  className="font-mono text-[8px] uppercase tracking-[.3em] mb-2"
                  style={{ color: "rgba(20,20,20,.35)" }}
                >
                  {k}
                </p>
                <p className="font-light text-sm">{v}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="py-28 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 pk-reveal">
              <p
                className="font-mono text-[8px] uppercase tracking-[.3em] mb-6"
                style={{ color: "rgba(20,20,20,.3)" }}
              >
                Задача
              </p>
              <h2
                className="font-light uppercase tracking-tight leading-none"
                style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
              >
                Транзитная зона —
                <br />в точку
                <br />
                назначения.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 pk-reveal pk-d1">
              <p
                className="font-light leading-relaxed"
                style={{ color: "rgba(20,20,20,.65)" }}
              >
                Территория перед ТЦ превращена в самостоятельное место
                пребывания: маршрут с остановками, зоны отдыха, детская
                активность и сценарии дневного/вечернего использования.
              </p>
            </div>
          </div>
        </section>

        <div style={{ background: "#141414" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-3">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.16)" }}
            >
              Концептуальный рендер — общий вид территории
            </p>
          </div>
          <div className="pk-gal-img pk-reveal" style={{ height: "clamp(360px,55vw,740px)" }}>
            <img
              alt="Общий вид территории"
              className="w-full h-full object-cover"
              src={PK.second}
            />
          </div>
        </div>

        <section className="py-20 px-8 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-px">
            <div className="pk-gal-img" style={{ height: "clamp(340px,48vw,660px)" }}>
              <img alt="Дневная сцена" className="w-full h-full object-cover" src={PK.third} />
            </div>
            <div className="pk-gal-img" style={{ height: "clamp(340px,48vw,660px)" }}>
              <img alt="Вечерняя сцена" className="w-full h-full object-cover" src={PK.hero} />
            </div>
          </div>
        </section>

        <section className="py-20 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-3 pk-reveal">
            <div className="pk-gal-img">
              <img alt="Деталь МАФ" className="w-full object-cover" style={{ aspectRatio: "4/3" }} src={PK.fourth} />
            </div>
            <div className="pk-gal-img">
              <img alt="Зона отдыха" className="w-full object-cover" style={{ aspectRatio: "4/3" }} src={PK.fifth} />
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-3 mt-3 pk-reveal pk-d1">
            {[PK.sixth, PK.tenth, PK.eleventh].map((src, i) => (
              <div key={src + i} className="pk-gal-img">
                <img alt={`Кадр ${i + 1}`} className="w-full object-cover" style={{ aspectRatio: "4/3" }} src={src} />
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: "#141414" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-3">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.16)" }}
            >
              Территория в вечернем режиме
            </p>
          </div>
          <div className="pk-gal-img pk-reveal" style={{ height: "clamp(300px,42vw,560px)" }}>
            <img alt="Вечерний вид" className="w-full h-full object-cover" src={PK.ninth} />
          </div>
        </div>

        <div style={{ position: "relative", background: "#0e0c08", overflow: "hidden" }}>
          <div className="pk-gal-img" style={{ height: "clamp(420px,65vw,860px)" }}>
            <img alt="Финальный кадр Park" className="w-full h-full object-cover" style={{ opacity: 0.55 }} src={PK.last} />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14" style={{ zIndex: 2 }}>
            <div className="max-w-[1400px] mx-auto w-full pk-reveal">
              <h2 className="font-light text-white leading-none tracking-tight mb-10" style={{ fontSize: "clamp(1.6rem,4.5vw,3rem)" }}>
                Снаружи —
                <br />
                так же комфортно,
                <br />
                как внутри.
              </h2>
            </div>
          </div>
        </div>

        <section className="py-24 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto">
            <div className="pk-reveal mb-20 pb-20 border-b" style={{ borderColor: "rgba(20,20,20,.08)" }}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <h2 className="font-light tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}>
                  Нужно благоустройство прилегающей
                  <br />
                  территории или разработка МАФ?
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

