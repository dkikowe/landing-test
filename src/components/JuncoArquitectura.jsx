import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./JuncoArquitectura.css";

/** Файлы из `Updated/! №17 - Junco Arquitectura/` → скопированы в `public/junco-arquitectura/` */
const IM = "/junco-arquitectura";
const img = (filename) => `${IM}/${encodeURIComponent(filename)}`;

export const JUNCO_ARQUITECTURA_SPLASH = img("1 main.PNG");

const JA = {
  hero: img("1 main.PNG"),
  alley: img("2.PNG"),
  detail1: img("3.jpg"),
  detail2: img("5.jpg"),
  detail3: img("8_1.JPG"),
  sculpture: img("8_2.PNG"),
  stonesFamily: img("6.jpg"),
  stonesAlley: img("7.jpg"),
  stonesAlley2: img("9.jpg"),
  meditation: img("10.jpg"),
  facade: img("4.jpg"),
};

export default function JuncoArquitectura() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — Концепции для архитекторов | Испания";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ja-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#junco-arquitectura-root .ja-reveal").forEach((el) => {
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /* Как в Manifest.jsx: sticky hero + translateY, opacity, veil, параллакс фона */
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
      id="junco-arquitectura-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#FAF9F7" }}
    >
      <Header />

      <div
        ref={heroWrapRef}
        id="junco-hero-wrap"
        className="sticky top-0 z-[1] flex h-[100dvh] min-h-[100dvh] w-full max-w-none flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="ja-hero-media absolute z-0 overflow-hidden bg-[#0c0b09]">
          {/* Обёртка больше блока — параллакс только здесь; картинка без transform, щель снизу не просвечивает */}
          <div
            ref={heroBgRef}
            id="junco-hero-bg"
            className="ja-hero-parallax absolute z-0 will-change-transform"
          >
            <img
              alt="Orquidea 12 — зеркальная стальная скульптура у входа в жилой комплекс, юг Испании"
              className="ja-hero-bg-img absolute inset-0 z-0 h-full w-full object-cover"
              style={{ objectPosition: "center 42%" }}
              src={JA.hero}
            />
          </div>
          <div
            className="absolute inset-0 z-[5]"
            style={{
              background:
                "linear-gradient(to top, rgba(12,11,9,.97) 0%, rgba(12,11,9,.35) 55%, rgba(12,11,9,.08) 100%)",
            }}
          />
        </div>
        <div
          ref={heroVeilRef}
          id="junco-hero-veil"
          className="pointer-events-none absolute inset-0 z-[15] min-h-full opacity-0"
          style={{ background: "#FAF9F7" }}
        />

        {/* Как в Manifest.jsx: колонка на всю высоту, контент прижат к низу (flex-1 + justify-end + pb-24) */}
        <div className="relative z-20 flex h-full min-h-0 w-full flex-col">
          <div className="absolute left-8 top-28 z-10 md:left-14">
            <p className="font-mono text-[9px] uppercase tracking-[.4em]" style={{ color: "rgba(255,255,255,.22)" }}>
              monumforma&nbsp;&nbsp;/&nbsp;&nbsp;Proyectos&nbsp;&nbsp;/&nbsp;&nbsp;Junco Arquitectura
            </p>
          </div>
          <div className="absolute right-8 top-28 z-10 text-right md:right-14">
            <p className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(255,255,255,.2)" }}>
              En colaboración con
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[.2em]" style={{ color: "rgba(191,163,126,.6)" }}>
              Junco Arquitectura
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-end px-8 pb-24 md:px-14">
            <div className="mx-auto w-full max-w-[1400px]">
              <div className="grid items-end gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="mb-6 font-mono text-[9px] uppercase tracking-[.32em]" style={{ color: "rgba(255,255,255,.3)" }}>
                    Концепция · В разработке · Юг Испании
                  </p>
                  <h1
                    className="font-light leading-none tracking-tight text-white"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2.8rem,7vw,6.5rem)" }}
                  >
                    Архитектурный
                    <br />
                    декор как часть
                    <br />
                    проекта
                  </h1>
                  <p
                    className="mt-6 font-light"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(255,255,255,.4)",
                      fontSize: "clamp(.9rem,1.2vw,1.05rem)",
                      letterSpacing: ".02em",
                      maxWidth: "38rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Совместно с Junco Arquitectura мы разрабатываем декоративный слой жилого комплекса в Андалусии — не как финишный штрих, а как часть архитектурного замысла с первой стадии.
                  </p>
                </div>
                <div className="lg:col-span-3 lg:col-start-10">
                  <div className="flex flex-col gap-4">
                    {[
                      ["Статус", "В разработке"],
                      ["Локация", "Малага, Андалусия"],
                      ["Партнёр", "Junco Arquitectura"],
                    ].map(([k, v]) => (
                      <div key={k} style={{ borderLeft: "1px solid rgba(191,163,126,.3)", paddingLeft: "1.25rem" }}>
                        <p className="mb-1 font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.2)" }}>
                          {k}
                        </p>
                        <p className="font-light text-sm text-white" style={{ fontFamily: "Inter, sans-serif" }}>
                          {v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
            <div className="relative h-10 w-px overflow-hidden" style={{ background: "rgba(255,255,255,.1)" }}>
              <div className="ja-sl absolute inset-0" style={{ background: "#BFA37E" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2]" style={{ background: "#FAF9F7" }}>
        <section className="py-32 px-8 md:px-14" style={{ background: "#FAF9F7" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="grid items-start gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4 ja-reveal">
                <div className="ja-label-line">
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.3)" }}>
                    Подход
                  </span>
                </div>
                <p className="font-light leading-[1.25] tracking-tight" style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", color: "#141414" }}>
                  «Мы входим в проект до финальной архитектуры. Декоративный слой — часть концепции, а не финишный штрих.»
                </p>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 ja-reveal ja-d1">
                <p className="mb-6 font-light leading-relaxed" style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}>
                  Это один из нескольких проектов, которые мы ведём совместно с архитектурными бюро в Испании. Junco Arquitectura пригласила нас на стадии концепции жилого комплекса в Андалусии — чтобы декоративный слой рождался из той же логики, что и архитектура: оси движения, ритм фасадов, климат, поведение людей в пространстве.
                </p>
                <p className="mb-8 font-light leading-relaxed" style={{ color: "rgba(20,20,20,.48)" }}>
                  Каждый элемент — инженерный продукт. Сталь 316, качественно отполированная, PMMA литьевой (акрил), интегрированный свет — материалы выбраны под климат Андалусии: UV-стойкость, температурные деформации, безопасность контакта.
                </p>
                <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(20,20,20,.07)" }}>
                  {[
                    ["I", "Навигационный", "Человек интуитивно понимает, куда идти"],
                    ["II", "Эмоциональный", "Пространство ощущается, а не просто используется"],
                    ["III", "Ценностный", "Среда выглядит дороже своей реализации"],
                  ].map(([rom, title, desc]) => (
                    <div key={rom} className="p-7" style={{ background: "#FAF9F7" }}>
                      <p className="mb-3 font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "#BFA37E" }}>
                        {rom}
                      </p>
                      <p className="mb-2 font-light text-sm uppercase tracking-tight">{title}</p>
                      <p className="font-light text-xs" style={{ color: "rgba(20,20,20,.4)" }}>
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: "#F0EFEB" }}>
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 pb-1 pt-3 md:px-14">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.25)" }}>
              Входная зона — первый контакт
            </p>
            <span
              className="font-mono uppercase"
              style={{
                fontSize: ".6rem",
                letterSpacing: ".22em",
                border: "1px solid rgba(20,20,20,.15)",
                padding: ".3rem .75rem",
                display: "inline-block",
              }}
            >
              Render
            </span>
          </div>
        </div>

        <div className="ja-gal-img ja-reveal" style={{ height: "clamp(400px,60vw,820px)", background: "#eae9e5" }}>
          <img alt="Orquidea 12 — аллея с эпоксидными скамьями, перфорированные стены, кипарисы" className="h-full w-full object-cover" src={JA.alley} />
        </div>
        <div style={{ background: "#F0EFEB" }}>
          <div className="mx-auto flex max-w-[1400px] justify-between px-8 py-4 md:px-14">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.25)" }}>
              Акриловые скамьи / Сталь 316 / Кипарисы
            </p>
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.25)" }}>
              Orquidea 12 · Málaga
            </p>
          </div>
        </div>

        <section className="py-32 px-8 md:px-14" style={{ background: "#FAF9F7" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-16 grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4 ja-reveal">
                <div className="ja-label-line">
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.3)" }}>
                    Материал
                  </span>
                </div>
                <h2 className="font-light leading-none" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem,3.2vw,3rem)" }}>
                  Вода,
                  <br />
                  застывшая
                  <br />в акриле.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 ja-reveal ja-d1">
                <p className="mb-6 font-light leading-relaxed" style={{ color: "rgba(20,20,20,.6)", fontSize: "1.02rem" }}>
                  Скамьи выполнены из полиметилметакрилата литьевого (PMMA) с текстурой воды. Акрил прочен, долговечен и сохраняет прозрачность и цвет на протяжении всего срока службы. Днём солнечный свет проходит сквозь акриловую поверхность и отбрасывает на землю подвижные переливы — эффект воды без воды, усиливающий связь с морем. Подсветки в скамьях нет — весь эффект создаётся только светом и материалом. Основание — сталь 316, качественно отполированная.
                </p>
                <div>
                  {[
                    ["Полиметилметакрилат литьевой (PMMA)", "UV-стойкий, наружный"],
                    ["Сталь 316, качественно отполированная", "Устойчива к агрессивной среде"],
                    ["Свет, интегрированный в объект", "Тёплый спектр"],
                    ["Допуск к температурным деформациям", "Климат Андалусии"],
                  ].map(([a, b]) => (
                    <div key={a} className="ja-mat-pair">
                      <p className="font-light text-sm">{a}</p>
                      <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.35)" }}>
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Вместо трёх колонок из вёрстки — 8_1 (вертикаль) + 8_2 (горизонталь) на тёмном фоне */}
            <div className="mt-16" style={{ background: "#0c0b09" }}>
              <div className="mx-auto max-w-[1400px] px-8 py-3 md:px-14">
                <p
                  className="font-mono text-[8px] uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,.18)" }}
                >
                  PMMA и сталь 316 — детали материала
                </p>
              </div>
              <div className="mx-auto max-w-[1400px] px-8 pb-3 md:px-14">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-12 ja-reveal ja-d1">
                  <div className="ja-gal-img md:col-span-4">
                    <img
                      alt="Orquidea 12 — деталь материала, вертикальный кадр 8_1"
                      className="h-full w-full object-cover"
                      style={{ aspectRatio: "3/4" }}
                      src={JA.detail3}
                    />
                  </div>
                  <div className="ja-gal-img md:col-span-8">
                    <img
                      alt="Orquidea 12 — контекст, горизонтальный кадр 8_2"
                      className="h-full w-full object-cover"
                      style={{ aspectRatio: "4/3" }}
                      src={JA.sculpture}
                    />
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-[1400px] px-8 py-4 md:px-14">
                <p
                  className="font-mono text-[8px] uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,.18)" }}
                >
                  Литьевой PMMA · Сталь 316 · Orquidea 12
                </p>
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: "#eae9e5" }}>
          <div className="mx-auto max-w-[1400px] px-8 py-3 md:px-14">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.25)" }}>
              Входная скульптура — зеркальная полированная сталь
            </p>
          </div>
        </div>

        <div className="grid gap-px md:grid-cols-12" style={{ background: "rgba(20,20,20,.06)" }}>
          <div className="ja-gal-img md:col-span-7 ja-reveal" style={{ height: "clamp(380px,55vw,740px)" }}>
            <img
              alt="Orquidea 12 — зеркальная стальная скульптура у входа в жилой комплекс, пальмы, белые стены"
              className="h-full w-full object-cover"
              src={JA.detail1}
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:col-span-5 md:p-16 ja-reveal ja-d1" style={{ background: "#FAF9F7" }}>
            <div className="ja-label-line">
              <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.3)" }}>
                Входная зона
              </span>
            </div>
            <h2 className="mb-8 font-light leading-none" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.8rem,2.8vw,2.6rem)" }}>
              Первое что
              <br />
              видит жилец —
              <br />
              своё отражение.
            </h2>
            <p className="mb-8 font-light leading-relaxed" style={{ color: "rgba(20,20,20,.55)", fontSize: ".95rem" }}>
              Скульптура из стали 316, качественно отполированной до зеркального состояния. Полировка устраняет шероховатость — поверхность устойчива к агрессивной морской среде и не накапливает загрязнений. Лучи отражаются, а не поглощаются: объект не нагревается на андалусийском солнце. Мягкие изломы отражают пространство вокруг — небо, пальмы, силуэт человека — трансформируя реальность без разрушения архитектурной чистоты.
            </p>
            <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.38)", fontSize: ".9rem" }}>
              Объект не спорит с архитектурой — он усиливает её, работая через отражение, а не через форму.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Сталь 316", "Зеркальная полировка"].map((t) => (
                <span
                  key={t}
                  className="font-mono uppercase"
                  style={{
                    fontSize: ".6rem",
                    letterSpacing: ".22em",
                    border: "1px solid rgba(20,20,20,.15)",
                    padding: ".3rem .75rem",
                    display: "inline-block",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="py-32 px-8 md:px-14" style={{ background: "#FAF9F7" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-14 grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5 ja-reveal">
                <div className="ja-label-line">
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.3)" }}>
                    Маршрут
                  </span>
                </div>
                <h2 className="mb-8 font-light leading-none" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem,3.2vw,3rem)" }}>
                  Объекты встроены
                  <br />в траектории.
                  <br />
                  Задают ритм.
                </h2>
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.55)", fontSize: ".95rem" }}>
                  Камни из стали 316, качественно отполированной, расставлены вдоль маршрутов движения. Полировка обеспечивает максимальную износостойкость: поверхность без шероховатости, устойчива к морскому климату и агрессивной среде. Лучи отражаются — объект не нагревается и комфортен при контакте. Это одновременно функциональная мебель для сидения и ориентиры в пространстве.
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 ja-reveal ja-d1">
                <div className="ja-gal-img">
                  <img
                    alt="Polished steel stones — пара с ребёнком сидит на зеркальных стальных объектах в саду"
                    className="w-full object-cover"
                    style={{ aspectRatio: "16/10" }}
                    src={JA.stonesFamily}
                  />
                </div>
                <p className="mt-3 font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.25)" }}>
                  Функциональная скульптура — сидение + навигационный ориентир
                </p>
              </div>
            </div>
            <div className="ja-gal-img ja-reveal ja-d2">
              <img
                alt="Orquidea 12 — аллея с полированными стальными объектами, белые перфорированные стены, кипарисы"
                className="w-full object-cover"
                style={{ aspectRatio: "21/8" }}
                src={JA.stonesAlley}
              />
            </div>
            <p className="mt-3 font-mono text-[8px] uppercase tracking-widest ja-reveal ja-d2" style={{ color: "rgba(20,20,20,.25)" }}>
              Маршрут · Сталь 316, качественно отполированная · Перфорированные стены · Junco Arquitectura
            </p>
            <div className="ja-gal-img ja-reveal ja-d3 mt-3">
              <img
                alt="Orquidea 12 — аллея с полированными стальными объектами, дополнительный ракурс"
                className="w-full object-cover"
                style={{ aspectRatio: "21/8" }}
                src={JA.stonesAlley2}
              />
            </div>
            <p className="mt-3 font-mono text-[8px] uppercase tracking-widest ja-reveal ja-d3" style={{ color: "rgba(20,20,20,.25)" }}>
              Маршрут · Orquidea 12 · Málaga
            </p>
          </div>
        </section>

        <div className="relative overflow-hidden">
          <div className="ja-gal-img" style={{ height: "clamp(500px,70vw,960px)" }}>
            <img
              alt="Зона медитации — зеркальная стальная конструкция с подсветкой на закате, пальмы, горы"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 40%" }}
              src={JA.meditation}
            />
          </div>
          <div
            className="absolute inset-0 z-[1]"
            style={{ background: "linear-gradient(135deg, rgba(10,8,6,.96) 0%, rgba(20,16,12,.88) 100%)" }}
          />
          <div className="absolute inset-0 z-[2] flex flex-col justify-end px-8 pb-16 md:px-14 md:pb-24">
            <div className="mx-auto w-full max-w-[1400px]">
              <div className="grid items-end gap-16 lg:grid-cols-12 ja-reveal">
                <div className="lg:col-span-5">
                  <p className="mb-6 font-mono text-[9px] uppercase tracking-[.35em]" style={{ color: "rgba(191,163,126,.5)" }}>
                    Зона без времени
                  </p>
                  <h2 className="mb-8 font-light leading-none text-white" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2.2rem,4.5vw,4rem)" }}>
                    Водопад
                    <br />
                    из стали.
                    <br />
                    Без воды.
                  </h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="mb-8 font-light leading-relaxed" style={{ color: "rgba(255,255,255,.5)", fontSize: "1rem" }}>
                    В зелёной зоне комплекса устанавливается особая конструкция. Сталь 316, качественно отполированная, с мягкими изломами — каждый изгиб создаёт образ водопада без воды. Форма как будто капли, остановившиеся в движении. Полировка устраняет шероховатость, делает поверхность устойчивой к агрессивной морской среде и предотвращает нагрев.
                  </p>
                  <div className="flex flex-col gap-0">
                    {[
                      ["↑", "Днём", "Зеркальная поверхность отражает небо, облака, пальмы и силуэт человека — пространство умножается."],
                      ["↓", "Вечером", "Интегрированная тёплая подсветка превращает конструкцию в источник света. Она не освещается снаружи — она светится изнутри."],
                      ["∞", "Время", "Это место, где время останавливается. Не в метафорическом смысле — в физическом: человек замедляется и остаётся."],
                    ].map(([sym, title, text]) => (
                      <div key={title} className="ja-layer-row">
                        <p className="font-mono text-[8px]" style={{ color: "#BFA37E", paddingTop: ".2rem" }}>
                          {sym}
                        </p>
                        <div>
                          <p className="mb-1 font-light text-sm text-white">{title}</p>
                          <p className="font-light text-xs" style={{ color: "rgba(255,255,255,.38)" }}>
                            {text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#0c0b09", padding: "1rem 2.5rem" }}>
          <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.15)" }}>
            Сталь 316, качественно отполированная · Мягкие изломы · Интегрированный тёплый свет · Зелёная зона
          </p>
        </div>

        <section className="py-32 px-8 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-12 grid items-end gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4 ja-reveal">
                <div className="ja-label-line">
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.3)" }}>
                    Фасад
                  </span>
                </div>
                <h2 className="font-light leading-none" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem,3vw,2.8rem)" }}>
                  Акрил на фасаде.
                  <br />
                  Первый взгляд
                  <br />с улицы.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 ja-reveal ja-d1">
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.55)", fontSize: ".95rem" }}>
                  Архитектурная панель из PMMA литьевого (акрила) устанавливается на фасад жилого дома у входа. Бирюзовая текстура воды создаёт мгновенный визуальный ориентир и сигнализирует о качестве среды ещё с улицы.
                </p>
              </div>
            </div>
            <div className="ja-gal-img ja-reveal ja-d1">
              <img
                alt="Orquidea 12 — эпоксидная панель с текстурой воды на фасаде входной зоны, пальмы"
                className="w-full object-cover"
                style={{ aspectRatio: "16/8" }}
                src={JA.facade}
              />
            </div>
            <p className="mt-4 font-mono text-[8px] uppercase tracking-widest ja-reveal ja-d2" style={{ color: "rgba(20,20,20,.25)" }}>
              Архитектурный PMMA (акрил) на фасаде · Входная группа
            </p>
          </div>
        </section>

        <section className="py-32 px-8 md:px-14" style={{ background: "#141414" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-16 grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4 ja-reveal">
                <div className="ja-label-line mb-8" style={{ marginBottom: "2rem" }}>
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(255,255,255,.22)" }}>
                    Для архитекторов
                  </span>
                </div>
                <h2 className="font-light leading-none text-white" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem,3vw,2.8rem)" }}>
                  Работаем
                  <br />
                  системно —
                  <br />
                  не разово.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 ja-reveal ja-d1">
                <p className="mb-8 font-light leading-relaxed" style={{ color: "rgba(255,255,255,.4)", fontSize: ".95rem" }}>
                  Junco Arquitectura — один из нескольких партнёров, с которыми мы работаем на постоянной основе. Мы не подбираем декор под готовый объект. Мы входим в диалог с архитектором на стадии концепции и проектируем декоративный слой как часть архитектурного решения — с учётом осей движения, ритма фасадов, зон приватности и светового сценария. Это воспроизводимая модель сотрудничества, не единичный проект.
                </p>
                <div className="grid grid-cols-1 gap-0">
                  {[
                    ["01", "Сценарии поведения", "Как человек входит, движется, останавливается — это первичные параметры. Форма появляется только после."],
                    ["02", "Архитектурная логика", "Объект = продолжение архитектуры. Никакого визуального шума. Размещение вне композиционных центров, работа через отражение."],
                    ["03", "Материальная инженерия", "UV-стойкость, температурные деформации, механическая нагрузка, безопасность контакта — всё просчитано до производства."],
                  ].map(([num, title, text]) => (
                    <div key={num} className="ja-layer-row-dark">
                      <p className="font-mono text-[8px]" style={{ color: "#BFA37E", paddingTop: ".3rem" }}>
                        {num}
                      </p>
                      <div>
                        <p className="mb-1 font-light text-sm uppercase tracking-tight text-white">{title}</p>
                        <p className="font-light text-xs" style={{ color: "rgba(255,255,255,.32)" }}>
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-28 md:px-14" style={{ background: "#FAF9F7" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="ja-reveal mb-24 border-b pb-24" style={{ borderColor: "rgba(20,20,20,.07)" }}>
              <div className="grid items-end gap-12 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <p className="mb-5 font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.3)" }}>
                    Концепции для архитекторов · Andalucía, España
                  </p>
                  <h2 className="font-light leading-none" style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem,4vw,3.8rem)" }}>
                    Работаете над жилой средой
                    <br />в Испании или Европе?
                  </h2>
                </div>
                <div className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9">
                  <Link to="/contact" className="btn-cta flex justify-center gap-4">
                    Обсудить проект
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                      arrow_forward
                    </span>
                  </Link>
                  <p className="text-center font-light text-xs" style={{ color: "rgba(20,20,20,.35)" }}>
                    Valencia &amp; Barcelona, España
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px md:grid-cols-2 ja-reveal" style={{ background: "rgba(20,20,20,.06)" }}>
              <Link
                to="/projects"
                className="flex items-center gap-6 p-8 transition-colors"
                style={{ background: "#FAF9F7", textDecoration: "none" }}
              >
                <span className="material-symbols-outlined text-2xl" style={{ color: "#BFA37E" }}>
                  arrow_back
                </span>
                <div>
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.35)" }}>
                    Все проекты
                  </p>
                  <p className="font-light uppercase tracking-tight" style={{ color: "#141414" }}>
                    Вернуться в архив
                  </p>
                </div>
              </Link>
              <Link
                to="/fairy-forest"
                className="flex items-center justify-end gap-6 p-8 transition-colors"
                style={{ background: "#FAF9F7", textDecoration: "none" }}
              >
                <div className="text-right">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.35)" }}>
                    Предыдущий проект
                  </p>
                  <p className="font-light uppercase tracking-tight" style={{ color: "#141414" }}>
                    МЕГА Дыбенко
                  </p>
                </div>
                <span className="material-symbols-outlined text-2xl" style={{ color: "#BFA37E" }}>
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t px-8 py-14 md:px-14" style={{ background: "#141414", color: "#FAF9F7", borderColor: "rgba(255,255,255,.05)" }}>
        <div className="mx-auto flex max-w-[1400px] flex-col items-end justify-between gap-10 md:flex-row">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center" style={{ background: "#BFA37E" }}>
                <span className="material-symbols-outlined" style={{ color: "#141414", fontSize: 14 }}>
                  architecture
                </span>
              </div>
              <span className="text-lg font-light tracking-tight">monumforma</span>
            </div>
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.18)" }}>
              En colaboración con Junco Arquitectura · Andalucía
            </p>
          </div>
          <p className="font-mono text-[9px] uppercase leading-loose" style={{ color: "rgba(255,255,255,.2)" }}>
            © 2025 monumforma studio — Valencia &amp; Barcelona, España
          </p>
        </div>
      </footer>
    </div>
  );
}
