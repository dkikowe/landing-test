import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Kursk.css";

const IM = "/kursk";

export const KURSK_SPLASH = `${IM}/0-zastavka.jpg`;

const KU = {
  // 1 — hero (по HTML: лучший AR-кадр с людьми)
  hero: `${IM}/dop-real-3.png`,
  // 2 — второе фото
  second: `${IM}/2.png`,
  // далее
  build1: `${IM}/3.png`,
  build2: `${IM}/2.png`,
  ar1: `${IM}/dop-real-2.png`,
  ar2: `${IM}/dop-real-3.png`,
  ar3: `${IM}/dop-real-4.png`,
  arExtra1: `${IM}/1-hero.png`,
  arExtra2: `${IM}/dop-real-5.jpg`,
  arExtra3: `${IM}/3.png`,
  last: `${IM}/posled.jpg`,
};

export default function Kursk() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — Дополненная реальность | LED 7×4 м";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ku-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#kursk-root .ku-reveal").forEach((el) => {
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Hero — как Manifest.jsx
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

  const darkBorder = "rgba(255,255,255,.06)";

  return (
    <div
      id="kursk-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      {/* HERO */}
      <div
        ref={heroWrapRef}
        className="sticky top-0 z-[1] flex h-screen min-h-[100dvh] w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0f]">
          <img
            ref={heroBgRef}
            alt="Дополненная реальность — посетители взаимодействуют с виртуальными животными"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 35%" }}
            src={KU.hero}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,15,.96) 0%, rgba(10,10,15,.45) 50%, rgba(10,10,15,.15) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="ku-h0 absolute left-8 top-28 z-10 md:left-14">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.25)" }}
            >
              monumforma&nbsp;&nbsp;/&nbsp;&nbsp;Проекты&nbsp;&nbsp;/&nbsp;&nbsp;Дополненная
              реальность
            </p>
          </div>

          <div className="mt-auto mx-auto w-full max-w-[1400px] px-8 pb-14 md:px-14">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="ku-h0 mb-4">
                  <span
                    className="inline-flex"
                    style={{
                      fontFamily: "Roboto Mono, monospace",
                      fontSize: ".65rem",
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255,255,255,.15)",
                      padding: ".3rem .7rem",
                      whiteSpace: "nowrap",
                      color: "rgba(255,255,255,.45)",
                    }}
                  >
                    Интерактивная система AR
                  </span>
                </div>
                <h1
                  className="ku-h1 font-light text-white leading-none tracking-tight"
                  style={{ fontSize: "clamp(2.8rem,5.5vw,5.2rem)" }}
                >
                  Дополненная
                  <br />
                  реальность
                </h1>
                <p
                  className="ku-h2 font-light mt-5"
                  style={{
                    color: "rgba(255,255,255,.38)",
                    fontSize: "clamp(.85rem,1.1vw,.95rem)",
                    letterSpacing: ".03em",
                    maxWidth: "36rem",
                  }}
                >
                  LED-видеостена 7×4 м с системой трекинга движения. Посетитель
                  становится частью цифровой среды — управляет сюжетом и
                  взаимодействует с виртуальными животными в реальном времени.
                </p>
              </div>

              <div className="ku-h3 lg:col-span-4 lg:col-start-9 lg:mt-14">
                <div className="flex flex-col gap-4">
                  {[
                    ["Экран", "7 × 4 м, шаг пикселя P4"],
                    ["Взаимодействие", "Трекинг тела, жестов, присутствия"],
                    ["Интеграция", "В ходе строительства объекта"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-4">
                      <div
                        className="w-px flex-shrink-0 self-stretch"
                        style={{ background: "rgba(191,163,126,.22)" }}
                      />
                      <div>
                        <p
                          className="font-mono text-[8px] uppercase tracking-widest mb-1"
                          style={{ color: "rgba(255,255,255,.25)" }}
                        >
                          {k}
                        </p>
                        <p
                          className="font-light text-white"
                          style={{ fontSize: ".9rem" }}
                        >
                          {v}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
            <div
              className="w-px h-9 relative overflow-hidden"
              style={{ background: "rgba(255,255,255,.1)" }}
            >
              <div className="ku-sl absolute inset-0" style={{ background: "#BFA37E" }} />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div id="ku-page-content" className="relative z-[2] bg-[#F9F9F7]">
        {/* параметры */}
        <div style={{ background: "#141414", borderBottom: `1px solid ${darkBorder}` }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 grid grid-cols-2 md:grid-cols-4">
            {[
              ["Экран", "LED 7 × 4 м / P4"],
              ["Сценариев", "15 животных, мультисцена"],
              ["Конструктив", "Металлорама + подиум"],
              ["Цикл", "Под ключ"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`py-6 ${i === 0 ? "pr-6" : "px-6"} ${
                  i < 3 ? "border-r" : "pl-6"
                }`}
                style={{ borderColor: darkBorder }}
              >
                <p
                  className="font-mono text-[8px] uppercase tracking-[.3em] mb-2"
                  style={{ color: "rgba(255,255,255,.25)" }}
                >
                  {k}
                </p>
                <p
                  className="font-light text-sm"
                  style={{ color: "rgba(255,255,255,.7)" }}
                >
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* концепция */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 ku-reveal">
                <div className="mb-8 flex items-center gap-6">
                  <span
                    className="font-mono text-[8px] uppercase tracking-[.3em]"
                    style={{ color: "rgba(20,20,20,.35)" }}
                  >
                    Концепция
                  </span>
                  <div className="h-px flex-1" style={{ background: "rgba(20,20,20,.1)" }} />
                </div>
                <h2
                  className="font-light uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Не экран
                  <br />с контентом.
                  <br />А управляемая среда.
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6 ku-reveal ku-d1 flex flex-col gap-6">
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}
                >
                  Посетитель подходит к определённой зоне атриума — система фиксирует
                  его присутствие и запускает сценарий. На экране 7×4 метра он
                  видит себя в окружении виртуальных животных: тигра,
                  тираннозавра, крокодила, панды.
                </p>
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.5)" }}>
                  В основе — три уровня: LED-видеостена, система трекинга камер и
                  датчиков, и управляющий слой со сценарным контентом.
                </p>

                <div className="mt-4 flex flex-col" style={{ border: "1px solid rgba(20,20,20,.08)" }}>
                  {[
                    ["01", "Визуальный слой", "LED-видеостена 7×4 м, шаг пикселя P4. Чёткое изображение на близкой дистанции — обязательное условие для работы AR."],
                    ["02", "Система трекинга", "Камеры и датчики над экраном: определение входа в зону, трекинг положения в пространстве, считывание жестов и движения тела."],
                    ["03", "Управление и контент", "Сценарная система с набором интерактивных программ. Контент адаптируется под поведение пользователя в реальном времени — не линейное видео."],
                  ].map(([n, t, d], idx) => (
                    <div
                      key={n}
                      className="p-6 flex items-start gap-5"
                      style={{ borderBottom: idx < 2 ? "1px solid rgba(20,20,20,.06)" : "none" }}
                    >
                      <span className="font-mono text-[8px] pt-1 flex-shrink-0" style={{ color: "#BFA37E" }}>
                        {n}
                      </span>
                      <div>
                        <p className="font-light uppercase tracking-tight mb-1">{t}</p>
                        <p className="font-light" style={{ fontSize: ".88rem", color: "rgba(20,20,20,.45)" }}>
                          {d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* строительство — 2 горизонтальных */}
        <div style={{ background: "#1a1612" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-4">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.15)" }}>
              До запуска — строительная фаза
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px ku-reveal" style={{ background: "rgba(255,255,255,.04)" }}>
            <div className="ku-gal-img" style={{ height: "clamp(280px,38vw,520px)" }}>
              <img
                alt="LED-экран 7×4 м — установка в атриуме"
                className="w-full h-full object-cover"
                src={KU.build1}
              />
            </div>
            <div className="ku-gal-img" style={{ height: "clamp(280px,38vw,520px)" }}>
              <img
                alt="Строительная стадия — атриум и металлоконструкции"
                className="w-full h-full object-cover"
                src={KU.build2}
              />
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-4 flex justify-between">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.15)" }}>
              Экран смонтирован до завершения отделочных работ
            </p>
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.15)" }}>
              Металлорама — собственная разработка
            </p>
          </div>
        </div>

        {/* конструктив — блоки */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#EEECEA" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-16 ku-reveal">
              <div className="lg:col-span-4">
                <div className="mb-8 flex items-center gap-6">
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                    Конструктив
                  </span>
                  <div className="h-px flex-1" style={{ background: "rgba(20,20,20,.1)" }} />
                </div>
                <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                  Встроено в объект.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.55)" }}>
                  Несущая металлоконструкция под экран рассчитана и изготовлена специально — с учётом нагрузки от экрана, оборудования и акустики. Подиум,
                  в котором скрыта инфраструктура — спроектирован как часть архитектуры атриума с доступом для обслуживания.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px ku-reveal ku-d1" style={{ background: "rgba(20,20,20,.08)" }}>
              {[
                ["01", "Металлоконструкция", "Проектирование и изготовление несущей рамы под экран. Расчёт нагрузок, согласование с проектировщиком здания."],
                ["02", "Подиум-инфраструктура", "Разработка подиума со скрытым размещением оборудования, вентиляцией и техническим доступом для обслуживания."],
                ["03", "Монтаж в стройке", "Установка экрана и оборудования на стадии строительства. Интеграция в план работ, координация с генподрядчиком."],
                ["04", "Пусконаладка", "Калибровка зоны трекинга, настройка датчиков и камер, отладка сценариев взаимодействия. Тестирование в потоке."],
              ].map(([n, t, d]) => (
                <div key={n} className="p-10" style={{ background: "#EEECEA" }}>
                  <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-5" style={{ color: "#BFA37E" }}>
                    {n}
                  </p>
                  <p className="font-light text-base mb-3 uppercase tracking-tight">{t}</p>
                  <p className="font-light leading-relaxed" style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}>
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* галерея — система в работе */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="ku-reveal mb-14">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="mb-6 flex items-center gap-6">
                    <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                      Система в работе
                    </span>
                    <div className="h-px flex-1" style={{ background: "rgba(20,20,20,.1)" }} />
                  </div>
                  <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.4rem,2vw,2rem)" }}>
                    Посетитель внутри сцены.
                  </h2>
                </div>
                <div className="flex gap-2 flex-wrap pb-1">
                  {["Трекинг тела", "Реакция на жест", "Звуковая среда", "Мультипользователь"].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "Roboto Mono, monospace",
                        fontSize: ".65rem",
                        letterSpacing: ".2em",
                        textTransform: "uppercase",
                        border: "1px solid rgba(20,20,20,.15)",
                        padding: ".3rem .7rem",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-3 ku-reveal">
              <div className="ku-gal-img">
                <img
                  alt="AR — посетители взаимодействуют с виртуальным тигром"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                  src={KU.ar1}
                />
              </div>
              <div className="flex justify-between mt-3">
                <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.3)" }}>
                  Сценарий «Тигр» — групповое взаимодействие
                </p>
                <span
                  style={{
                    fontFamily: "Roboto Mono, monospace",
                    fontSize: ".6rem",
                    letterSpacing: ".15em",
                    textTransform: "uppercase",
                    padding: ".25rem .65rem",
                    background: "rgba(20,20,20,.06)",
                  }}
                >
                  Реальное время
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3 mb-3 ku-reveal ku-d1">
              <div>
                <div className="ku-gal-img">
                  <img
                    alt="AR — тираннозавр"
                    className="w-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                    src={KU.ar2}
                  />
                </div>
                <p className="font-mono text-[8px] uppercase tracking-widest mt-3" style={{ color: "rgba(20,20,20,.3)" }}>
                  Сценарий «Тираннозавр» — одиночное взаимодействие
                </p>
              </div>
              <div>
                <div className="ku-gal-img">
                  <img
                    alt="AR — крокодил"
                    className="w-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                    src={KU.ar3}
                  />
                </div>
                <p className="font-mono text-[8px] uppercase tracking-widest mt-3" style={{ color: "rgba(20,20,20,.3)" }}>
                  Сценарий «Крокодил» — семейный сценарий
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3 ku-reveal ku-d2">
              {[KU.arExtra1, KU.arExtra2, KU.arExtra3].map((src, i) => (
                <div key={src + i} className="ku-gal-img">
                  <img
                    alt={`Дополненная реальность — дополнительный кадр ${i + 1}`}
                    className="w-full object-cover"
                    style={{ aspectRatio: "3/4" }}
                    src={src}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* финал */}
        <div style={{ position: "relative", background: "#0a0a0f", overflow: "hidden" }}>
          <div className="ku-gal-img" style={{ height: "clamp(420px,65vw,860px)" }}>
            <img
              alt="Дополненная реальность — финальный атмосферный кадр"
              className="w-full h-full object-cover"
              style={{ opacity: 0.4 }}
              src={KU.last}
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14" style={{ zIndex: 2 }}>
            <div className="max-w-[1400px] mx-auto w-full ku-reveal">
              <h2 className="font-light text-white leading-none tracking-tight mb-10" style={{ fontSize: "clamp(1.6rem,4.5vw,3rem)" }}>
                Не просто экран с контентом.
                <br />
                Это инженерная система.
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px flex-shrink-0" style={{ background: "#BFA37E" }} />
                  <p className="font-light" style={{ color: "rgba(255,255,255,.5)", fontSize: "clamp(.9rem,1.2vw,1.05rem)" }}>
                    Встроена в здание. Управляет поведением пространства.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px flex-shrink-0" style={{ background: "rgba(191,163,126,.3)" }} />
                  <p className="font-light" style={{ color: "rgba(255,255,255,.28)", fontSize: "clamp(.9rem,1.2vw,1.05rem)" }}>
                    Полный цикл: концепция → проектирование → монтаж → пусконаладка
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="py-24 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="ku-reveal mb-20 pb-20 border-b" style={{ borderColor: "rgba(20,20,20,.08)" }}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <div>
                  <h2 className="font-light tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}>
                    Внедрим интерактивные системы,
                    <br />
                    работающие на трафик и вовлечение.
                  </h2>
                </div>
                <Link to="/contact" className="btn-cta flex-shrink-0">
                  Обсудить проект
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px ku-reveal" style={{ background: "rgba(20,20,20,.06)" }}>
              <Link
                to="/projects"
                className="flex items-center gap-6 p-8"
                style={{ background: "#F9F9F7", textDecoration: "none", transition: "background .3s" }}
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
                to="/lustra"
                className="flex items-center justify-end gap-6 p-8"
                style={{ background: "#F9F9F7", textDecoration: "none", transition: "background .3s" }}
              >
                <div className="text-right">
                  <p className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: "rgba(20,20,20,.35)" }}>
                    Следующий проект
                  </p>
                  <p className="font-light uppercase tracking-tight">Кинетическая люстра — 524 сферы</p>
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

