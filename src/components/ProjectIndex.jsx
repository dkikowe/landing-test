import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IKEA_XMAS_SPLASH } from "./IkeaXmas";
import { IKEA_PARK_SPLASH } from "./IkeaPark";
import { FOREST_SPLASH } from "./Forest";
import { TVER_SPLASH } from "./Tver";
import { RADDISON_SPLASH } from "./Raddison";
import { PASSAGE_SPLASH } from "./Passage";
import { LUSTRA_SPLASH } from "./Lustra";
import { KURSK_SPLASH } from "./Kursk";

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
          <h1>Архив проектов</h1>
          <p className="sub">
            Архив реализованных и текущих проектов.
            <br />
            Пространственные объекты, световые инсталляции, медиаархитектура.
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
                Все работы
              </button>
              <button
                className={`fb px-5 py-1.5 border text-[10px] font-mono uppercase tracking-widest whitespace-nowrap ${filter === "light" ? "active" : ""}`}
                style={{
                  borderColor: "rgba(20,20,20,.12)",
                  color: filter === "light" ? "" : "rgba(20,20,20,.5)",
                }}
                onClick={() => setFilter("light")}
              >
                Праздничное оформление
              </button>
              <button
                className={`fb px-5 py-1.5 border text-[10px] font-mono uppercase tracking-widest whitespace-nowrap ${filter === "media" ? "active" : ""}`}
                style={{
                  borderColor: "rgba(20,20,20,.12)",
                  color: filter === "media" ? "" : "rgba(20,20,20,.5)",
                }}
                onClick={() => setFilter("media")}
              >
                Мультимедиа
              </button>
              <button
                className={`fb px-5 py-1.5 border text-[10px] font-mono uppercase tracking-widest whitespace-nowrap ${filter === "objects" ? "active" : ""}`}
                style={{
                  borderColor: "rgba(20,20,20,.12)",
                  color: filter === "objects" ? "" : "rgba(20,20,20,.5)",
                }}
                onClick={() => setFilter("objects")}
              >
                Арт-объекты
              </button>
              <button
                className={`fb px-5 py-1.5 border text-[10px] font-mono uppercase tracking-widest whitespace-nowrap ${filter === "dev" ? "active" : ""}`}
                style={{
                  borderColor: "rgba(20,20,20,.12)",
                  color: filter === "dev" ? "" : "rgba(20,20,20,.5)",
                }}
                onClick={() => setFilter("dev")}
              >
                В разработке
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
          {/* ROW 1: ТВЕРСКАЯ ПЛОЩАДЬ (7) + РАДISSON (5) */}
          <div className="swiss mb-8">
            <Link
              to="/tver"
              className={`pc reveal col-span-12 lg:col-span-7 ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "16/10" }}>
                <img alt="Тверская площадь" src={TVER_SPLASH} />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                Тверская площадь
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Городское оформление
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Мэрия города Москвы
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Центр города
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
                Матрёшки
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Скульптурная инсталляция
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Radisson Collection
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Москва
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 2: ВОЛШЕБНОЕ ФОРТЕПИАНО (4) + IKEA (8 — на месте Digital Canvas) */}
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
                  Мультимедиа
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Интерактивная инсталляция
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Торговый центр · 2019
                </span>
              </div>
            </Link>
            <Link
              to="/ikea-mall"
              className={`pc reveal col-span-12 lg:col-span-8 lg:mt-[-25px] ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "16/10" }}>
                <img
                  alt="IKEA — световое оформление торгового центра"
                  src="/ikea-mall/it1.jpg"
                />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                IKEA — Световое оформление
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Праздничное оформление
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Торговый центр · 157 000 м²
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Световая инфраструктура
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
                Новогоднее оформление mall
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Праздничное оформление
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  IKEA · Mall
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  160 000 м²
                </span>
              </div>
            </Link>
            <Link
              to="/ikea-park"
              className={`pc reveal col-span-12 lg:col-span-5 lg:mt-20 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "4/5" }}>
                <img alt="Парк IKEA" src={IKEA_PARK_SPLASH} />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                Парк IKEA
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Арт-инсталляция
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Public space
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  58 объектов
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 4: РОЖДЕСТВЕНСКИЙ ЛЕС (4) + CENTRAL PLAZA (8) */}
          <div className="swiss mb-8">
            <Link
              to="/forest"
              className={`pc reveal col-span-12 lg:col-span-4 ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "1/1" }}>
                <img alt="Рождественский лес IKEA" src={FOREST_SPLASH} />
              </div>
              <h3 className="text-xl font-light uppercase tracking-tight">
                Рождественский лес
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Праздничное оформление
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  IKEA
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  150 000 м² · галерея
                </span>
              </div>
            </Link>
            <Link
              to="/lustra"
              className={`pc reveal col-span-12 lg:col-span-8 ${
                !isVisible("light") ? "hidden" : ""
              }`}
            >
              <div className="pc-img" style={{ aspectRatio: "21/9" }}>
                <img
                  alt="Кинетическая люстра"
                  src={LUSTRA_SPLASH}
                />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                Люстра
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Кинетическая световая система
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Лебёдочная система
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Цифровое DMX
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 5: AURORA + KINETIC CHANDELIER */}
          <div className="swiss mb-8">
            <Link
              to="/kursk"
              className={`pc reveal col-span-12 lg:col-span-6 ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img
                  alt="Дополненная реальность — экран КУРСК+++"
                  src={KURSK_SPLASH}
                />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                KURSK+++
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Мультимедиа · AR
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  LED 7×4 м / P4
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Трекинг движения
                </span>
              </div>
            </Link>
            <Link
              to="/passage"
              className={`pc reveal col-span-12 lg:col-span-6 ${!isVisible("media") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img alt="Невский пассаж" src={PASSAGE_SPLASH} />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                Пассаж
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Временная инсталляция
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Исторический объект XIX века
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Санкт-Петербург
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 6: FOREST CAMPUS (8) + NORDIC WINTER (4) */}
          <div className="swiss mb-8">
            <Link
              to="/projects/022"
              className={`pc reveal col-span-12 lg:col-span-8 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "16/9" }}>
                <img
                  alt="Forest Campus"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxfj8-imnVbLN4qJfMR3cUThBizt4wIHcqbioDUj9GO3MeNf-4W2BJU5EqvDCAMZzy9rjTB44rsVEEC6HnBnTOAR9YnzHYCdgeIvIVRVuIWlZ1ZbaWaNAS8DEeBnZZa26yCMcJexMRmwxMSZxSl3f6trytG1pnwBBwT2sHtWYFY-Gk98NTIjIDKdYhRIQzX1tDeu3Hva0nOlliKIfo5U-BHY7myaWGtUxCQT6zIpROUs9VdpM1uc-q3wT4INQUU7UWXvzxEU_O7pC8"
                />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                Forest Campus
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Арт-объект
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Swedish Global Retailer
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Regional Flagship
                </span>
              </div>
            </Link>
            <Link
              to="/projects/022"
              className={`pc reveal col-span-12 lg:col-span-4 lg:mt-16 ${!isVisible("light") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img
                  alt="Nordic Winter"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRfGRnRhZ4D_ZLaJm-8P4h9_JU-Jl99xO7G0KcjUIB6SCvz2ubgTmgl97ezTmWtOaYIqCogjZsIVwIbTFB5FI1kMDOD0W9EC4bqxAoJCCyT1P00TjOhDSyF7px2Hwe-4CHR_idWFDMUGPuyxVU7KiERxBFi1EEzyFj_-QtVYzrmnRVTtVZ9OqWBlsj6NwAq0TPsF_yteEA4Z1zxznU2qC-MCaeszmtqvy_vHhyAi6HVQZ6S7IEK7K4kQtB2rv3EgmY9hwDs4lXCOIC"
                />
              </div>
              <h3 className="text-xl font-light uppercase tracking-tight">
                Nordic Winter
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Праздничное оформление
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Swedish Global Retailer
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Capital Region
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 7: WIND (4) + OWL (4) + AERIAL GARDEN (4) */}
          <div className="swiss mb-8">
            <Link
              to="/lustra"
              className={`pc reveal col-span-12 lg:col-span-4 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img
                  alt="Кинетическая люстра"
                  src={LUSTRA_SPLASH}
                />
              </div>
              <h3 className="text-xl font-light uppercase tracking-tight">
                Люстра
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Кинетическая световая система
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Лебёдочная система
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Цифровое DMX
                </span>
              </div>
            </Link>
            <Link
              to="/projects/022"
              className={`pc reveal col-span-12 lg:col-span-4 lg:mt-16 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img
                  alt="Owl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoelvO_UGTW5A9ZCq3ejeW9JMqDoIEftFm9fv6laTJJN4NOC5upVWgzZj77oINPGJyTNkLftaagxjfFAUxzbj3DK8F3CfkUlHnSbF0TcJ5ArPV7g9GEPAvVGJtkNexMfKfykVa-_vRyNIfGWApATuL4cYHTPHk-ZkX6WD1ZNDKHxYBkaeTp9ki4je56gEgET8h_6GTjOB2p0uHVIMLNNiQgkWBZY_xQkgpCBRNqL0pL3c89ovfCOT0f7NqUmeruftcGkGselw5jTcP"
                />
              </div>
              <h3 className="text-xl font-light uppercase tracking-tight">
                Owl
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Арт-объект
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Educational Institution
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Regional City
                </span>
              </div>
            </Link>
            <Link
              to="/projects/022"
              className={`pc reveal col-span-12 lg:col-span-4 lg:mt-8 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "3/4" }}>
                <img
                  alt="Aerial Garden"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGAdx3ehF7y0gAaYtnrWx_b-8_t3K_UkNMbYnHZQQW-gtbmGZftglyZ3GebqzeUVJa90OOx2QP_xgCZ0HWbXWaDyjr_arrL7NNoz3yeqSfJMOjUuFR5ZgR3p9fEdrF9WbJPAR7mM97Uyv-W55RFmuthsb1CLhUsWR2UItDqXqarSjFsHsL_WZBsLQFJ2CnG6SOq7cXA58iMDgzVmMxJ2s9moI9Xh3S6Ey_3eXl-G3_gFF8Gzjc5polQyI5ZnS_vtH5AYQghME9_Eeb"
                />
              </div>
              <h3 className="text-xl font-light uppercase tracking-tight">
                Aerial Garden
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Арт-объект
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Swedish Global Retailer
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Regional Flagship
                </span>
              </div>
            </Link>
          </div>

          {/* ROW 8: MRIYA OBJECT (5) + ORQUÍDEA in dev (7) */}
          <div className="swiss mb-0">
            <Link
              to="/projects/022"
              className={`pc reveal col-span-12 lg:col-span-5 ${!isVisible("objects") ? "hidden" : ""}`}
            >
              <div className="pc-img" style={{ aspectRatio: "4/5" }}>
                <img
                  alt="Mriya Object"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXkSqJWpXEKjKOWDQG8lecsnzd40ExKTdGfiPpg-N9TtKpcGvtlzSTYuGyaEXYjA8jdMl8p6jhRNw15ULv1xsfny9RM2YT5mstgOX-KHg5jICP7ZCJ_xRPGUX90cs5h-g5q4kn_FVL0o2NJY-mB3RamIipdKBtdOCsl3FsGxE5V68D3_HWx85lfNzdPajXy_Ke5-RjWnfZlacdmbLWfngblOybjCkDu3vPmLzdT7ojtm_lnpQRub_0eFA0BY87-Jasq47mtFc2LM5m"
                />
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                Mriya Object
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Арт-объект
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Resort & Spa
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Coastal Location
                </span>
              </div>
            </Link>
            <Link
              to="/projects/022"
              className={`pc reveal col-span-12 lg:col-span-7 lg:mt-20 ${!isVisible("dev") ? "hidden" : ""}`}
            >
              <div
                className="pc-img"
                style={{ aspectRatio: "16/10", position: "relative" }}
              >
                <img
                  alt="Orquídea"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMs0orzF2FtEs4LE-uOY-0z7ro0xTiF9WZoyF1NKa2ZhdjnWJAQfk35VBK31gsvmSGA-S8Oy5J7uwiyT0WKogBRr5UNOiRnyv71rBU-Au51AZKMor1BwM5kFHar2c7Ndqdrk3EMnrv5KLcSl-7sGKucBLgZGZT3Pio9QSa0seMRNzkAFjYFs77dOFwXXxp1SaPQUBQnyCgY5_Pu0HvGDPQ8R9Axgrz3YFA2Spl1ni-9NAZ9Ag3NBwSGJcBUcnOOSU_OJ4DvQvqH61u"
                />
                <div
                  style={{
                    position: "absolute",
                    top: ".75rem",
                    left: ".75rem",
                    background: "#141414",
                    padding: ".25rem .75rem",
                  }}
                >
                  <span
                    className="font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "#BFA37E" }}
                  >
                    В разработке
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-light uppercase tracking-tight">
                ORQUÍDEA | Junco Houses
              </h3>
              <div className="pc-meta">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Арт-объект
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Residential Developer
                </span>
                <div className="pc-dot"></div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  Alfàs del Pi, Alicante — 2025
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
                  className="font-mono text-[10px] uppercase tracking-[.3em] mb-4"
                  style={{ color: "rgba(20,20,20,.4)" }}
                >
                  Полный архив
                </p>
                <h4
                  className="font-light tracking-tight mb-3"
                  style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)" }}
                >
                  182 реализованных проектов
                </h4>
                <p
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 300,
                    color: "rgba(20,20,20,.5)",
                    maxWidth: "420px",
                    lineHeight: 1.7,
                  }}
                >
                  Полное портфолио включает коммерческие и муниципальные
                  объекты, ритейл-программы и частные инсталляции. Доступно по
                  запросу.
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
                    Запросить портфолио
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
                  PDF · Отправим в течение 24 часов
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
                      <span className="font-mono text-primary">182</span>
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
                      <span className="font-mono text-primary">17</span>
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
