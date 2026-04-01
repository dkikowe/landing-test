import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./FairyForest.css";

const IM = "/fairy-forest";
/** Заставка для карточки — полигональные фигуры / «Волшебный лес» */
export const FAIRY_FOREST_SPLASH = `${IM}/6.png`;

const FF = {
  hero: `${IM}/1-hero.png`,
  zoneMall: `${IM}/3-mall.jpg`,
  zonePark: `${IM}/17.png`,
  figureVert: `${IM}/6.png`,
  figureHoriz: `${IM}/4.jpeg`,
  lightVert: `${IM}/7.jpg`,
  lightHoriz: `${IM}/10.jpg`,
  extra1: `${IM}/8.jpg`,
  extra2: `${IM}/9.jpeg`,
  extra3: `${IM}/11.jpg`,
};

const TIMELINE = [
  [
    "2018",
    "Запуск концепции",
    "Разработка художественной линии «Волшебный лес». Первые полигональные фигуры. Установка световой инфраструктуры ТРЦ.",
  ],
  [
    "2019",
    "Расширение",
    "Пополнение коллекции фигур. Введение сезонных сценариев. Первая интеграция с территорией парка.",
  ],
  [
    "2020",
    "Адаптация",
    "Обновление сценариев под новые условия эксплуатации. Сохранение концепции при изменении контекста.",
  ],
  [
    "2021",
    "Парк",
    "Полноценное световое оформление парка. Световые маршруты. Welcome-зона с полигональными объектами.",
  ],
  [
    "2022",
    "Полная система",
    "Интеграция всех элементов в единую среду. 700+ световых элементов в работе. Максимальный охват территорий.",
  ],
  [
    "2023",
    "Завершение цикла",
    "Финальный сезон. 64 объекта в эксплуатации. Система передана в управление объекта в готовом виде.",
    true,
  ],
];

export default function FairyForest() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title =
      "monumforma — МЕГА Дыбенко | Комплексное оформление «Волшебный лес»";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ff-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#fairy-forest-root .ff-reveal").forEach((el) => {
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

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

  return (
    <div
      id="fairy-forest-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      <div
        ref={heroWrapRef}
        className="sticky top-0 z-[1] flex h-screen w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#06080e]">
          <img
            ref={heroBgRef}
            alt="МЕГА Дыбенко — комплексное оформление"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 55%" }}
            src={FF.hero}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(6,8,14,.97) 0%, rgba(6,8,14,.4) 50%, rgba(6,8,14,.1) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="absolute top-28 left-8 z-10 md:left-14 ff-h0">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.22)" }}
            >
              monumforma / Проекты / МЕГА Дыбенко
            </p>
          </div>

          <div className="mt-auto mx-auto w-full max-w-[1400px] px-8 pb-14 md:px-14">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <p
                  className="font-mono text-[9px] uppercase tracking-[.28em] mb-5 ff-h0"
                  style={{ color: "rgba(255,255,255,.25)" }}
                >
                  Комплексное оформление ТРЦ и городского парка
                </p>
                <h1
                  className="ff-h1 font-light text-white leading-none tracking-tight"
                  style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)" }}
                >
                  МЕГА Дыбенко
                </h1>
                <p
                  className="ff-h2 mt-5 font-light"
                  style={{
                    color: "rgba(255,255,255,.35)",
                    fontSize: "clamp(.85rem,1.1vw,.95rem)",
                    maxWidth: "36rem",
                  }}
                >
                  Долгосрочная система оформления двух территорий. 272 000 м²
                  под единой концепцией «Волшебный лес». 64 полигональных
                  объекта. 700+ световых элементов. 2018–2023.
                </p>
              </div>

              <div className="ff-h3 lg:col-span-4 lg:col-start-9">
                <div
                  className="flex flex-col gap-px"
                  style={{ background: "rgba(255,255,255,.06)" }}
                >
                  {[
                    ["182 000", "м²", "ТРЦ"],
                    ["90 000", "м²", "Парк"],
                  ].map(([num, unit, label]) => (
                    <div
                      key={label}
                      className="flex items-baseline gap-3 p-7"
                      style={{
                        background: "rgba(6,8,14,.65)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <p
                        className="ff-big-num text-white"
                        style={{ fontSize: "clamp(2.5rem,4vw,3.8rem)" }}
                      >
                        {num}
                      </p>
                      <div>
                        <p className="font-light text-xs text-white">{unit}</p>
                        <p
                          className="font-mono text-[8px] uppercase tracking-widest"
                          style={{ color: "rgba(255,255,255,.28)" }}
                        >
                          {label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
            <div
              className="relative h-9 w-px overflow-hidden"
              style={{ background: "rgba(255,255,255,.1)" }}
            >
              <div
                className="ff-sl absolute inset-0"
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
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-8 md:grid-cols-5 md:px-14">
            {[
              ["Период", "2018 — 2023"],
              ["Площадь", "272 000 м²"],
              ["Объекты", "64 полигональные фигуры"],
              ["Световых элементов", "700+"],
              ["Формат", "Долгосрочное сотрудничество"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`border-r py-7 ${i === 0 ? "pr-6" : "px-6"} ${
                  i === 4 ? "border-r-0 pl-6" : ""
                }`}
                style={{ borderColor: "rgba(20,20,20,.07)" }}
              >
                <p
                  className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                  style={{ color: "rgba(20,20,20,.35)" }}
                >
                  {k}
                </p>
                <p className="font-light text-sm">{v}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-16 lg:grid-cols-12">
              <div className="ff-reveal lg:col-span-4">
                <p
                  className="mb-6 font-mono text-[8px] uppercase tracking-[.3em]"
                  style={{ color: "rgba(20,20,20,.3)" }}
                >
                  Концепция
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Не декорации.
                  <br />
                  Управляемая
                  <br />
                  экосистема.
                </h2>
              </div>
              <div className="ff-reveal ff-d1 flex flex-col gap-6 lg:col-span-7 lg:col-start-6">
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}
                >
                  Проект с МЕГОЙ — пять лет постоянного развития единой
                  концепции на двух территориях. Внутри ТРЦ и в прилегающем
                  парке действует одна художественная логика: «Волшебный лес».
                  Оформление обновляется сезонно, не теряя целостности.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.5)" }}
                >
                  Это инфраструктура визуальной среды: полигональные фигуры,
                  световые маршруты, подвесные элементы — всё работает как
                  система управления пользовательским опытом.
                </p>
                <div
                  className="mt-2 grid grid-cols-3 gap-px"
                  style={{ background: "rgba(20,20,20,.07)" }}
                >
                  {[
                    ["5", "лет сотрудничества"],
                    ["64", "полигональных объекта"],
                    ["700+", "световых элементов"],
                  ].map(([n, label]) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1 px-6 py-8"
                      style={{ background: "#F9F9F7" }}
                    >
                      <p
                        className="ff-big-num"
                        style={{ fontSize: "clamp(2.8rem,4.5vw,4rem)" }}
                      >
                        {n}
                      </p>
                      <p
                        className="font-mono text-[8px] uppercase tracking-widest"
                        style={{ color: "rgba(20,20,20,.35)" }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="grid gap-px ff-reveal md:grid-cols-2"
          style={{ background: "rgba(20,20,20,.07)" }}
        >
          <div
            className="ff-zone-card relative"
            style={{ height: "clamp(320px,45vw,620px)" }}
          >
            <div className="ff-zone-label">ТРЦ — 182 000 м²</div>
            <img
              alt="ТРЦ МЕГА Дыбенко — масштаб комплекса"
              className="h-full w-full object-cover"
              src={FF.zoneMall}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(20,20,20,.5) 0%, transparent 50%)",
              }}
            />
            <div className="absolute bottom-6 left-6 z-[1]">
              <p className="text-sm font-light text-white">
                Торговый центр + внутренние маршруты
              </p>
            </div>
          </div>
          <div
            className="ff-zone-card relative"
            style={{ height: "clamp(320px,45vw,620px)" }}
          >
            <div className="ff-zone-label">Парк — 90 000 м²</div>
            <img
              alt="Парк — световое оформление"
              className="h-full w-full object-cover"
              src={FF.zonePark}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(6,8,14,.55) 0%, transparent 50%)",
              }}
            />
            <div className="absolute bottom-6 left-6 z-[1]">
              <p className="text-sm font-light text-white">
                Парк + световые маршруты + welcome-зона
              </p>
            </div>
          </div>
        </div>

        <section className="px-8 py-28 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-14 grid gap-16 ff-reveal lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p
                  className="mb-6 font-mono text-[8px] uppercase tracking-[.3em]"
                  style={{ color: "rgba(20,20,20,.3)" }}
                >
                  Художественная линия
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  «Волшебный лес»
                  <br />— 64 объекта
                  <br />
                  по маршруту.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p
                  className="mb-5 font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Единая сюжетная линия развёрнута в пространстве комплекса.
                  Полигональные фигуры животных расставлены по маршрутам
                  движения и формируют последовательный сценарий восприятия.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.4)" }}
                >
                  Собственная технология производства: геометрически точная
                  сборка, высокая прочность при малом весе. Материалы —
                  негорючие, сертифицированные.
                </p>
              </div>
            </div>

            <div className="grid gap-3 ff-reveal ff-d1 md:grid-cols-12">
              <div className="ff-gal-img md:col-span-5">
                <img
                  alt="Полигональные фигуры в интерьере ТРЦ"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={FF.figureVert}
                />
              </div>
              <div className="ff-gal-img md:col-span-7">
                <img
                  alt="Масштаб фигур в пространстве"
                  className="h-full min-h-full w-full object-cover"
                  style={{ aspectRatio: "16/10" }}
                  src={FF.figureHoriz}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-14 grid gap-16 ff-reveal lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p
                  className="mb-6 font-mono text-[8px] uppercase tracking-[.3em]"
                  style={{ color: "rgba(20,20,20,.3)" }}
                >
                  Световая среда
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  700+ элементов.
                  <br />
                  Не акцент —
                  <br />
                  световой слой.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p
                  className="mb-5 font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Подвесные световые звёзды внутри ТРЦ формируют равномерное
                  покрытие на ключевых маршрутах. В парке световое оформление
                  создаёт маршруты вечернего восприятия.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.4)" }}
                >
                  LED-решения адаптированы под длительную наружную эксплуатацию.
                  Все элементы — энергоэффективные, с возможностью сезонного
                  переключения сценариев.
                </p>
              </div>
            </div>

            <div className="grid gap-3 ff-reveal ff-d1 md:grid-cols-12">
              <div className="ff-gal-img md:col-span-4">
                <img
                  alt="Оформление парка — ночной вид"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={FF.lightVert}
                />
              </div>
              <div className="ff-gal-img md:col-span-8">
                <img
                  alt="Световая деталь"
                  className="h-full min-h-full w-full object-cover"
                  style={{ aspectRatio: "16/10" }}
                  src={FF.lightHoriz}
                />
              </div>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3 ff-reveal ff-d2">
              {[FF.extra1, FF.extra2, FF.extra3].map((src, i) => (
                <div key={src} className="ff-gal-img">
                  <img
                    alt={`Кадр ${i + 1}`}
                    className="w-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                    src={src}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-28 md:px-14" style={{ background: "#141414" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-16 grid gap-16 lg:grid-cols-12">
              <div className="ff-reveal lg:col-span-4">
                <p
                  className="mb-6 font-mono text-[8px] uppercase tracking-[.3em]"
                  style={{ color: "rgba(255,255,255,.22)" }}
                >
                  Развитие проекта
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-tight text-white"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Пять лет —
                  <br />
                  одна концепция.
                </h2>
              </div>
              <div className="ff-reveal ff-d1 lg:col-span-7 lg:col-start-6">
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,.38)" }}
                >
                  Среда обновлялась каждый сезон — но всегда в рамках единой
                  художественной логики. Новые объекты добавлялись без разрыва с
                  существующим контекстом.
                </p>
              </div>
            </div>

            <div className="grid gap-10 ff-reveal ff-d2 md:grid-cols-2 lg:grid-cols-3">
              {TIMELINE.map((row) => {
                const [year, title, desc, highlight] = row;
                return (
                  <div key={year} className="ff-tl-item">
                    <p
                      className="ff-tl-year mb-2"
                      style={
                        highlight
                          ? { color: "#BFA37E", opacity: 1 }
                          : undefined
                      }
                    >
                      {year}
                    </p>
                    <p
                      className="mb-2 font-light text-white"
                      style={{ fontSize: ".95rem" }}
                    >
                      {title}
                    </p>
                    <p
                      className="font-light"
                      style={{
                        fontSize: ".85rem",
                        color: "rgba(255,255,255,.3)",
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div
          className="relative overflow-hidden"
          style={{ background: "#06080e" }}
        >
          <div className="ff-gal-img" style={{ height: "clamp(420px,65vw,860px)" }}>
            <img
              alt="Финальный кадр — комплекс ночью"
              className="h-full w-full object-cover"
              style={{ opacity: 0.45, objectPosition: "center 40%" }}
              src={FF.hero}
            />
          </div>
          <div
            className="absolute inset-0 flex flex-col justify-center px-8 md:px-14"
            style={{ zIndex: 2 }}
          >
            <div className="ff-reveal mx-auto w-full max-w-[1400px]">
              <h2
                className="mb-10 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(1.6rem,4.5vw,3rem)" }}
              >
                272 000 м².
                <br />
                Одна концепция.
                <br />
                Пять лет непрерывно.
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="h-px w-5 flex-shrink-0"
                    style={{ background: "#BFA37E" }}
                  />
                  <p
                    className="font-light"
                    style={{
                      color: "rgba(255,255,255,.5)",
                      fontSize: "clamp(.9rem,1.2vw,1.05rem)",
                    }}
                  >
                    Долгосрочное сотрудничество — от концепции до эксплуатации
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="h-px w-5 flex-shrink-0"
                    style={{ background: "rgba(191,163,126,.3)" }}
                  />
                  <p
                    className="font-light"
                    style={{
                      color: "rgba(255,255,255,.28)",
                      fontSize: "clamp(.9rem,1.2vw,1.05rem)",
                    }}
                  >
                    ТРЦ + городской парк — интегрированная система
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute bottom-[-2rem] right-8 z-[2] leading-none md:right-8"
            style={{ lineHeight: 1 }}
          >
            <p
              className="ff-big-num"
              style={{
                fontSize: "clamp(8rem,14vw,13rem)",
                color: "rgba(255,255,255,.025)",
              }}
            >
              272К
            </p>
          </div>
        </div>

        <section className="px-8 py-24 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div
              className="ff-reveal mb-20 border-b pb-20"
              style={{ borderColor: "rgba(20,20,20,.08)" }}
            >
              <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
                <h2
                  className="font-light leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}
                >
                  Работаете с крупным объектом
                  <br />
                  или управляете несколькими территориями?
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
