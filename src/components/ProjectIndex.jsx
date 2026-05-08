import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IKEA_XMAS_SPLASH } from "./IkeaXmas";
import { FOREST_SPLASH } from "./Forest";
import { TVER_SPLASH } from "./Tver";
import { RADDISON_SPLASH } from "./Raddison";
import { FAIRY_FOREST_SPLASH } from "./FairyForest";
import { JUNCO_ARQUITECTURA_SPLASH } from "./JuncoArquitectura";

export default function ProjectIndex() {
  const [filter, setFilter] = useState("all");
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [portfolioSubmitted, setPortfolioSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => {
        e.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("visible");
            obs.unobserve(x.target);
          }
        });
      },
      { threshold: 0.05 },
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [filter]);

  const submitPortfolio = () => {
    if (!name.trim() || !email.trim()) {
      alert("Укажите имя и email");
      return;
    }
    setPortfolioSubmitted(true);
  };

  const cards = [
    { f: "light" },
    { f: "light" },
    { f: "light" },
    { f: "light" },
    { f: "light" },
    { f: "light" },
    { f: "light" },
    { f: "media" },
    { f: "light" },
    { f: "media" },
    { f: "objects" },
    { f: "objects" },
    { f: "objects" },
    { f: "objects" },
    { f: "objects" },
    { f: "objects" },
    { f: "dev" },
  ];
  const visibleCount =
    filter === "all" ? 17 : cards.filter((c) => c.f === filter).length;

  const getPlural = (n) => {
    if (n % 10 === 1 && n % 100 !== 11) return "проект";
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100))
      return "проекта";
    return "проектов";
  };
  const countText = `${visibleCount} ${getPlural(visibleCount)}`;

  const isVisible = (f) => filter === "all" || filter === f;

  return (
    <div
      className="font-display"
      style={{ background: "#F9F9F7", color: "#141414", overflowX: "hidden" }}
    >
      <style>{`
        @keyframes fu { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .h1{animation:fu 1.4s .12s cubic-bezier(.16,1,.3,1) both}
        .h2{animation:fu 1.4s .28s cubic-bezier(.16,1,.3,1) both}
        .h3{animation:fu 1.4s .44s cubic-bezier(.16,1,.3,1) both}
        @keyframes sd{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
        .sl{animation:sd 2.2s cubic-bezier(.76,0,.24,1) infinite}
        .reveal{opacity:0;transform:translateY(22px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1)}
        .reveal.visible{opacity:1;transform:translateY(0)}
        .fb{transition:color .3s,border-color .3s,background .3s;cursor:pointer}
        .fb:hover{border-color:rgba(191,163,126,.6)}
        .fb.active{background:#BFA37E;color:#141414;border-color:#BFA37E}
        .swiss{display:grid;grid-template-columns:repeat(12,1fr);gap:2rem}
        .pc{display:block;text-decoration:none;color:inherit;cursor:pointer}
        .pc-img{overflow:hidden;position:relative;margin-bottom:1.25rem}
        .pc-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform 1.2s cubic-bezier(.16,1,.3,1),filter .7s ease;filter:grayscale(15%)}
        .pc:hover .pc-img img{transform:scale(1.05);filter:grayscale(0%)}
        .pc-meta{display:flex;align-items:center;gap:1rem;margin-top:.6rem;flex-wrap:wrap}
        .pc-dot{width:4px;height:4px;background:#BFA37E;border-radius:50% !important;flex-shrink:0}
        
        #intro{padding:8rem 3.5rem 3rem;background:#F9F9F7}
        #intro h1{font-size:clamp(3rem,6vw,6rem);font-weight:300;letter-spacing:-.025em;line-height:.95;color:#141414;margin:0 0 1.5rem}
        #intro .sub{font-size:clamp(.95rem,1.3vw,1.05rem);font-weight:300;color:rgba(20,20,20,.45);max-width:500px;line-height:1.6;margin:0}
        
        .btn-cta{display:inline-flex;align-items:center;gap:1rem;font-family:'Roboto Mono',monospace;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;background:#BFA37E;color:#141414;padding:1rem 2rem;text-decoration:none;border:1px solid #BFA37E;transition:background .3s,color .3s}
        .btn-cta:hover{background:transparent;color:#141414}
      `}</style>

      {/* INTRO */}
      <div id="intro">
        <div className="max-w-[1440px] mx-auto">
          <h1>Реализованные проекты</h1>
          <p className="sub">
            Проекты из портфеля 180+.
            <br />
            Как мы повышаем ценность, трафик и коммерческий результат объектов.
          </p>
        </div>
      </div>

      <div id="page-content" style={{ marginTop: 0 }}>
        <div
          className="sticky top-0 z-40 border-b"
          style={{
            background: "rgba(249,249,247,.97)",
            backdropFilter: "blur(10px)",
            borderColor: "rgba(20,20,20,.08)",
          }}
        >
          <div className="max-w-[1440px] mx-auto px-8 md:px-14 flex items-center justify-between h-14">
            <div className="flex items-center gap-2 overflow-x-auto" id="fr">
              <button
                className={`fb px-5 py-1.5 border text-[10px] font-mono uppercase tracking-widest whitespace-nowrap ${filter === "all" ? "active" : ""}`}
                style={{
                  borderColor: "rgba(20,20,20,.12)",
                  color: filter === "all" ? "" : "rgba(20,20,20,.5)",
                }}
                onClick={() => setFilter("all")}
              >
                ВСЕ ПРОЕКТЫ
              </button>
              <button
                className={`fb px-5 py-1.5 border text-[10px] font-mono uppercase tracking-widest whitespace-nowrap ${filter === "light" ? "active" : ""}`}
                style={{
                  borderColor: "rgba(20,20,20,.12)",
                  color: filter === "light" ? "" : "rgba(20,20,20,.5)",
                }}
                onClick={() => setFilter("light")}
              >
                ПОСТОЯННЫЕ РЕШЕНИЯ
              </button>
              <button
                className={`fb px-5 py-1.5 border text-[10px] font-mono uppercase tracking-widest whitespace-nowrap ${filter === "media" ? "active" : ""}`}
                style={{
                  borderColor: "rgba(20,20,20,.12)",
                  color: filter === "media" ? "" : "rgba(20,20,20,.5)",
                }}
                onClick={() => setFilter("media")}
              >
                СЕЗОННЫЕ ПРОЕКТЫ
              </button>
              <button
                className={`fb px-5 py-1.5 border text-[10px] font-mono uppercase tracking-widest whitespace-nowrap ${filter === "objects" ? "active" : ""}`}
                style={{
                  borderColor: "rgba(20,20,20,.12)",
                  color: filter === "objects" ? "" : "rgba(20,20,20,.5)",
                }}
                onClick={() => setFilter("objects")}
              >
                ИНТЕРАКТИВ И МЕДИА
              </button>
              <button
                className={`fb px-5 py-1.5 border text-[10px] font-mono uppercase tracking-widest whitespace-nowrap ${filter === "dev" ? "active" : ""}`}
                style={{
                  borderColor: "rgba(20,20,20,.12)",
                  color: filter === "dev" ? "" : "rgba(20,20,20,.5)",
                }}
                onClick={() => setFilter("dev")}
              >
                В РАЗРАБОТКЕ
              </button>
            </div>
            <span
              className="font-mono text-[10px] uppercase tracking-widest ml-4 whitespace-nowrap"
              style={{ color: "rgba(20,20,20,.3)" }}
              id="cnt"
            >
              {countText}
            </span>
          </div>
        </div>

        <main className="max-w-[1440px] mx-auto px-8 md:px-14 py-20">
          {/* ROW 1: JUNCO + RADDISON */}
          <div className="swiss mb-8">
            <Link
              to="/junco-arquitectura"
              className={`pc reveal col-span-12 lg:col-span-7 ${!isVisible("dev") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "16/10" }}>
                <img alt="Orquídea" src={JUNCO_ARQUITECTURA_SPLASH} />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                ORQUÍDEA | Junco Arquitectura
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ЖИЛОЙ ПРОЕКТ → УСКОРЕНИЕ ПРОДАЖ ЧЕРЕЗ СРЕДУ
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: ДЕВЕЛОПМЕНТ · ПРИВЛЕЧЕНИЕ · УДЕРЖАНИЕ
                </span>
              </div>
            </Link>
            <Link
              to="/raddison"
              className={`pc reveal col-span-12 lg:col-span-5 lg:mt-12 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "4/5" }}>
                <img
                  alt="Матрёшки — Radisson Collection"
                  src={RADDISON_SPLASH}
                />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                Herencia de Formas
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ГОРОДСКАЯ СРЕДА → ВОВЛЕЧЕНИЕ И ПОВТОРНЫЕ ВИЗИТЫ
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: ПРИВЛЕЧЕНИЕ
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  УДЕРЖАНИЕ · UGC
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 2: ВОЛШЕБНОЕ ФОРТЕПИАНО (4) + ТВЕРСКАЯ */}
          <div className="swiss mb-8">
            <Link
              to="/magicpiano"
              className={`pc reveal col-span-12 lg:col-span-4 ${!isVisible("media") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img alt="Волшебное фортепиано" src="/magic-piano/vf2.jpeg" />
              </div>
              <h3 className="text-xl font-light uppercase tracking-tight">
                Волшебное фортепиано
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ИНТЕРАКТИВ → УВЕЛИЧЕНИЕ ВРЕМЕНИ ПРЕБЫВАНИЯ
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: УДЕРЖАНИЕ · ВОВЛЕЧЕНИЕ
                </span>
              </div>
            </Link>
            <Link
              to="/tver"
              className={`pc reveal col-span-12 lg:col-span-8 lg:mt-[-25px] ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "16/10" }}>
                <img alt="Тверская площадь" src={TVER_SPLASH} />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                Тверская площадь
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТРАНЗИТ → ТОЧКА ПРИТЯЖЕНИЯ | 4 500 М² ГОРОДСКОГО ПРОСТРАНСТВА
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 3: IKEA — НОВОГОДНИЙ MALL (7) + ПАРК IKEA (5) */}
          <div className="swiss mb-8">
            <Link
              to="/ikea-xmas"
              className={`pc reveal col-span-12 lg:col-span-7 ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "16/10" }}>
                <img
                  alt="IKEA — новогоднее оформление mall"
                  src={IKEA_XMAS_SPLASH}
                />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                СЕМЕЙНЫЙ КОММЕРЧЕСКИЙ ЦЕНТР (210 600 М²)
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ИНТЕРАКТИВНАЯ СРЕДА → ПОСЕЩАЕМОСТЬ +14%
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: ПРИВЛЕЧЕНИЕ · УДЕРЖАНИЕ · ВОВЛЕЧЕНИЕ
                </span>
              </div>
            </Link>
            <Link
              to="/ikea-park"
              className={`pc reveal col-span-12 lg:col-span-5 lg:mt-20 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "4/5" }}>
                <img alt="ПАРК 13 500 М²" src="/photos/6.jpeg" />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                ПАРК 13 500 М²
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ПУСТАЯ ТЕРРИТОРИЯ → +22% ТРАФИКА
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: ПРИВЛЕЧЕНИЕ · УДЕРЖАНИЕ · ПОТОКИ
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 4: РОЖДЕСТВЕНСКИЙ ЛЕС (4) + ПАССАЖ (8) — правильная последовательность */}
          <div className="swiss mb-8">
            <Link
              to="/forest"
              className={`pc reveal col-span-12 lg:col-span-4 ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "1/1" }}>
                <img alt="Рождественский лес IKEA" src={FOREST_SPLASH} />
              </div>
              <h3 className="text-xl font-light uppercase tracking-tight">
                СЕМЕЙНЫЙ КОММЕРЧЕСКИЙ ЦЕНТР (150 000 М²)
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  СЕЗОННЫЙ БЮДЖЕТ → ДОЛГОСРОЧНЫЙ АКТИВ ОБЪЕКТА
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: СЕЗОН · УДЕРЖАНИЕ · АКТИВ
                </span>
              </div>
            </Link>
            <Link
              to="/passage"
              className={`pc reveal col-span-12 lg:col-span-8 lg:mt-0 ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "4/3" }}>
                <img alt="ПАССАЖ (XIX ВЕК)" src="/photos/8.jpeg" />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                ПАССАЖ (XIX ВЕК)
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ИСТОРИЧЕСКАЯ СРЕДА → СОВРЕМЕННОЕ ВОВЛЕЧЕНИЕ БЕЗ НАРУШЕНИЯ АРХИТЕКТУРЫ
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: УДЕРЖАНИЕ · ВОВЛЕЧЕНИЕ
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 5: ЛЮСТРА (8) + КУРСК (4) — правильный порядок 9→10 */}
          <div className="swiss mb-8">
            <Link
              to="/lustra"
              className={`pc reveal col-span-12 lg:col-span-8 ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "21/9" }}>
                <img alt="КИНЕТИЧЕСКАЯ ЛЮСТРА" src="/photos/9.jpeg" />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                Кинетическая люстра
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ГАЛЕРЕЯ → ЦЕНТРАЛЬНАЯ ТОЧКА ПРИТЯЖЕНИЯ
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: ПРИВЛЕЧЕНИЕ · ПОТОКИ · UGC
                </span>
              </div>
            </Link>
            <Link
              to="/kursk"
              className={`pc reveal col-span-12 lg:col-span-4 lg:mt-16 ${!isVisible("media") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img
                  alt="Дополненная реальность — экран КУРСК+++"
                  src="/photos/10.jpeg"
                />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                ДОПОЛНЕННАЯ РЕАЛЬНОСТЬ
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  АТРИУМ → УПРАВЛЕНИЕ ПОВЕДЕНИЕМ ПОСЕТИТЕЛЕЙ
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: ВОВЛЕЧЕНИЕ · УДЕРЖАНИЕ · ПОТОКИ
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 6: FOREST CAMPUS (8) + NORDIC WINTER (4) */}
          <div className="swiss mb-8">
            <Link
              to="/media-fasade"
              className={`pc reveal col-span-12 lg:col-span-8 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "16/9" }}>
                <img alt="МЕДИАФАСАД 1 760 М²" src="/photos/11.jpeg" />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                МЕДИАФАСАД 1 760 М²
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ФАСАД → ПОСТОЯННАЯ ВИДИМОСТЬ И КОММЕРЧЕСКАЯ ФУНКЦИЯ
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: ПРИВЛЕЧЕНИЕ · АКТИВ
                </span>
              </div>
            </Link>
            <Link
              to="/valentin"
              className={`pc reveal col-span-12 lg:col-span-4 lg:mt-16 ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img
                  alt="San Valentín — сезонное оформление"
                  src="/photos/12.jpeg"
                />
              </div>
              <h3 className="text-xl font-light uppercase tracking-tight">
                SAN VALENTÍN
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  СЕЗОН → РОСТ ВРЕМЕНИ ПРЕБЫВАНИЯ И ТРАФИКА
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: УДЕРЖАНИЕ · ПРИВЛЕЧЕНИЕ · UGC
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 7: WIND (4) + OWL (4) + AERIAL GARDEN (4) */}
          <div className="swiss mb-8">
            <Link
              to="/popit"
              className={`pc reveal col-span-12 lg:col-span-4 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img alt="POP IT" src="/photos/13%20new.png" />
              </div>
              <h3 className="text-xl font-light uppercase tracking-tight">
                POP IT
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  СЕМЕЙНАЯ АУДИТОРИЯ → ТРАФИК И UGC
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: ПРИВЛЕЧЕНИЕ · УДЕРЖАНИЕ · UGC
                </span>
              </div>
            </Link>
            <Link
              to="/campus"
              className={`pc reveal col-span-12 lg:col-span-4 lg:mt-16 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img
                  alt="Corporate Campus — lobby and landscape art"
                  src="/photos/14.jpeg"
                />
              </div>
              <h3 className="text-xl font-light uppercase tracking-tight">
                CENTRO DE NEGOCIOS
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  СТАНДАРТНЫЙ ОБЪЕКТ → ВОСПРИЯТИЕ ПРЕМИАЛЬНОГО УРОВНЯ
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: ИМИДЖ · ПРИВЛЕЧЕНИЕ · АКТИВ
                </span>
              </div>
            </Link>
            <Link
              to="/park"
              className={`pc reveal col-span-12 lg:col-span-4 lg:mt-8 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img
                  alt="Park — благоустройство территории"
                  src="/photos/15.png"
                />
              </div>
              <h3 className="text-xl font-light uppercase tracking-tight">
                БЛАГОУСТРОЙСТВО 13 500 М²
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ХАОТИЧНОЕ ДВИЖЕНИЕ → УПРАВЛЕНИЕ ПОТОКАМИ И УДЕРЖАНИЕ
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: ПОТОКИ · УДЕРЖАНИЕ
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 8: FAIRY FOREST + IKEA MALL */}
          <div className="swiss mb-0">
            <Link
              to="/fairy-forest"
              className={`pc reveal col-span-12 lg:col-span-5 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "4/5" }}>
                <img
                  alt="Сказочный лес — МЕГА Дыбенко"
                  src={FAIRY_FOREST_SPLASH}
                />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                СЕМЕЙНЫЙ КОММЕРЧЕСКИЙ ЦЕНТР (272 000 М²)
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  РАЗРОЗНЕННОЕ ПРОСТРАНСТВО → ЕДИНЫЙ СЦЕНАРИЙ И РОСТ ТРАФИКА
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  ТЕГИ: ПРИВЛЕЧЕНИЕ · УДЕРЖАНИЕ · ПОТОКИ
                </span>
              </div>
            </Link>
            <Link
              to="/ikea-mall"
              className={`pc reveal col-span-12 lg:col-span-7 lg:mt-20 ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div
                className="pc-img"
                style={{ aspectRatio: "16/10", position: "relative" }}
              >
                <img alt="IKEA — световое оформление торгового центра" src="/photos/4.jpeg" />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                СЕМЕЙНЫЙ КОММЕРЧЕСКИЙ ЦЕНТР (157 000 М²)
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  СЕЗОННОЕ ОФОРМЛЕНИЕ → ПОСТОЯННАЯ ИНФРАСТРУКТУРА ОБЪЕКТА
                </span>
              </div>
            </Link>
          </div>

          {/* PORTFOLIO CTA BLOCK */}
          <div
            className="border-t mt-24 pt-16"
            style={{ borderColor: "rgba(20,20,20,.08)" }}
          >
            <div className="swiss items-center">
              <div className="col-span-12 lg:col-span-6">
                <p
                  className="font-mono uppercase tracking-widest mb-2"
                  style={{ fontSize: "13px", color: "#999" }}
                >
                  180+ реализованных проектов
                </p>
                <h4
                  className="font-semibold tracking-tight mb-3"
                  style={{ fontSize: "clamp(1.7rem,3vw,2rem)" }}
                >
                  Разбор вашего проекта
                </h4>
                <p
                  style={{
                    fontSize: "clamp(.95rem,1.25vw,1.05rem)",
                    fontWeight: 300,
                    color: "rgba(20,20,20,.6)",
                    maxWidth: "560px",
                    lineHeight: 1.7,
                  }}
                >
                  Определим, какие решения увеличат трафик, вовлеченность и
                  ценность вашего объекта.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-4">
                <button
                  className="btn-cta w-fit"
                  onClick={() => {
                    setPortfolioOpen(!portfolioOpen);
                    setTimeout(() => {
                      if (!portfolioOpen) {
                        document
                          .getElementById("portfolio-request")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }
                    }, 100);
                  }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest">
                    Запросить разбор
                  </span>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "16px" }}
                  >
                    arrow_forward
                  </span>
                </button>
                <p
                  className="font-mono text-[9px] uppercase tracking-widest"
                  style={{ color: "rgba(20,20,20,.3)" }}
                >
                  Покажем 2-3 подхода под вашу задачу
                </p>
              </div>
            </div>
          </div>

          {/* PORTFOLIO REQUEST FORM */}
          {portfolioOpen && (
            <div
              id="portfolio-request"
              className="mt-12 pt-12 border-t"
              style={{ borderColor: "rgba(20,20,20,.06)" }}
            >
              <div className="swiss">
                <div className="col-span-12 lg:col-span-5">
                  <p
                    className="font-mono text-[10px] uppercase tracking-[.3em] mb-6"
                    style={{ color: "rgba(20,20,20,.4)" }}
                  >
                    Запрос портфолио
                  </p>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Имя и компания"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border-b bg-transparent pb-3 text-sm font-light outline-none"
                        style={{
                          borderColor: "rgba(20,20,20,.15)",
                          color: "#141414",
                        }}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-b bg-transparent pb-3 text-sm font-light outline-none"
                        style={{
                          borderColor: "rgba(20,20,20,.15)",
                          color: "#141414",
                        }}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Тип проекта / бюджет (опционально)"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full border-b bg-transparent pb-3 text-sm font-light outline-none"
                        style={{
                          borderColor: "rgba(20,20,20,.15)",
                          color: "#141414",
                        }}
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={submitPortfolio}
                        className="btn-cta"
                        disabled={portfolioSubmitted}
                        style={{ opacity: portfolioSubmitted ? 0.5 : 1 }}
                      >
                        {portfolioSubmitted ? (
                          <span className="font-mono text-[10px] uppercase tracking-widest">
                            Запрос отправлен
                          </span>
                        ) : (
                          <>
                            <span className="font-mono text-[10px] uppercase tracking-widest">
                              Отправить запрос
                            </span>
                            <span
                              className="material-symbols-outlined"
                              style={{ fontSize: "16px" }}
                            >
                              arrow_forward
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
                  <div className="space-y-3">
                    <div
                      className="flex justify-between items-end border-b pb-2"
                      style={{ borderColor: "rgba(20,20,20,.07)" }}
                    >
                      <span
                        className="font-mono text-[10px] uppercase tracking-widest"
                        style={{ color: "rgba(20,20,20,.5)" }}
                      >
                        Проектов в архиве
                      </span>
                      <span className="font-mono text-primary">180+</span>
                    </div>
                    <div
                      className="flex justify-between items-end border-b pb-2"
                      style={{ borderColor: "rgba(20,20,20,.07)" }}
                    >
                      <span
                        className="font-mono text-[10px] uppercase tracking-widest"
                        style={{ color: "rgba(20,20,20,.5)" }}
                      >
                        Лет опыта
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-end border-b pb-2"
                      style={{ borderColor: "rgba(20,20,20,.07)" }}
                    >
                      <span
                        className="font-mono text-[10px] uppercase tracking-widest"
                        style={{ color: "rgba(20,20,20,.5)" }}
                      >
                        Фабрик-партнёров
                      </span>
                      <span className="font-mono text-primary">12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
