import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Valentin.css";

const IM = "/valentin";
export const VALENTIN_SPLASH = `${IM}/7.png`; // user requirement: 7.png splash

const VA = {
  hero: `${IM}/8.png`, // user requirement: 8.png hero
  one: `${IM}/1.png`,
  two: `${IM}/2.png`,
  four: `${IM}/4.png`,
  five: `${IM}/5.png`,
  six: `${IM}/6.png`,
  pred: `${IM}/Predposl.jpg`,
  last: `${IM}/Posled.jpeg`,
  video: `${IM}/3_videosanvalentin.MP4`,
};

export default function Valentin() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — San Valentín | Сезонное оформление 200 м";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("va-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#valentin-root .va-reveal").forEach((el) => {
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
      id="valentin-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      <div
        ref={heroWrapRef}
        className="sticky top-0 z-[1] flex h-screen min-h-[100dvh] w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a0a0a]">
          <img
            ref={heroBgRef}
            alt="San Valentín — инсталляция с сердцами"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 45%" }}
            src={VA.hero}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(20,8,8,.95) 0%, rgba(20,8,8,.35) 50%, rgba(20,8,8,.1) 100%)",
            }}
          />
        </div>
        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="va-h0 absolute left-8 top-28 z-10 md:left-14">
            <p className="font-mono text-[9px] uppercase tracking-[.4em]" style={{ color: "rgba(255,255,255,.25)" }}>
              monumforma / Проекты / San Valentín
            </p>
          </div>

          <div className="mt-auto mx-auto w-full max-w-[1400px] px-8 pb-14 md:px-14">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <p className="va-h0 font-mono text-[9px] uppercase tracking-[.28em] mb-5" style={{ color: "rgba(255,255,255,.3)" }}>
                  Сезонное оформление торгового центра
                </p>
                <h1 className="va-h1 font-light text-white leading-none tracking-tight" style={{ fontSize: "clamp(3.5rem,8vw,7.5rem)" }}>
                  San
                  <br />
                  Valentín
                </h1>
                <p className="va-h2 font-light mt-5" style={{ color: "rgba(255,255,255,.35)", fontSize: "clamp(.85rem,1.1vw,.95rem)", maxWidth: "38rem" }}>
                  Пространственная инсталляция на 200 метрах торговой галереи. 16
                  500 элементов. Модульная система монтажа. Собственное
                  производство.
                </p>
              </div>

              <div className="va-h3 lg:col-span-3 lg:col-start-10 flex flex-col gap-5">
                <div>
                  <p className="text-white font-light" style={{ fontSize: "clamp(2.8rem,4vw,3.8rem)", lineHeight: 1 }}>
                    200
                    <span className="font-light" style={{ fontSize: ".45em", opacity: 0.5 }}>
                      {" "}
                      м
                    </span>
                  </p>
                  <p className="font-mono text-[8px] uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,.25)" }}>
                    Протяжённость галереи
                  </p>
                </div>
                <div style={{ height: "1px", background: "rgba(255,255,255,.08)" }} />
                <div>
                  <p className="text-white font-light" style={{ fontSize: "clamp(2.8rem,4vw,3.8rem)", lineHeight: 1 }}>
                    16 500
                  </p>
                  <p className="font-mono text-[8px] uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,.25)" }}>
                    Единиц декора
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-px h-9 relative overflow-hidden" style={{ background: "rgba(255,255,255,.1)" }}>
              <div className="va-sl absolute inset-0" style={{ background: "#BFA37E" }} />
            </div>
          </div>
        </div>
      </div>

      <div id="va-page-content" className="relative z-[2] bg-[#F9F9F7]">
        <div className="border-b" style={{ background: "#F0EFEB", borderColor: "rgba(20,20,20,.07)" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 grid grid-cols-2 md:grid-cols-5">
            {[
              ["Тип", "Сезонное оформление"],
              ["Материал", "Стеклопластик"],
              ["Объекты", "20 шт. × 2 м высота"],
              ["Подвес", "1 500 элементов"],
              ["Цикл", "Производство / Монтаж"],
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
            <div className="lg:col-span-5 va-reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#BFA37E]" />
                <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                  О проекте
                </span>
              </div>
              <h2 className="font-light uppercase tracking-tight leading-none mb-8" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                Масштаб через повторяемость. Качество через систему.
              </h2>
              <p className="font-light leading-relaxed mb-6" style={{ color: "rgba(20,20,20,.6)" }}>
                Оформление охватывает всю длину торговой галереи и центральный
                атриум. Подвесной слой из сердец разного масштаба и цвета создаёт
                непрерывную визуальную среду — без провалов и разрывов на
                протяжении двухсот метров.
              </p>
              <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.45)" }}>
                Ключевая задача проекта — обеспечить масштаб без потери качества
                на повторяемых элементах. Решение — модульность: элементы
                сгруппированы в укрупнённые блоки, монтируются одной бригадой и
                рассчитаны на многократное использование.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 va-reveal va-d1">
              {[
                ["200", "метров", "Протяжённость галереи"],
                ["1 500", "подвесных гирлянд", "4 размера / 8 цветовых оттенков"],
                ["16 500", "единиц декора", "Суммарно по всему объекту"],
                ["20", "крупноформатных объектов", "Высота 2 м, стеклопластик"],
              ].map(([n, t, s], idx) => (
                <div key={n} className="flex items-baseline gap-3 py-5" style={{ borderBottom: idx < 3 ? "1px solid rgba(20,20,20,.07)" : "none" }}>
                  <p className="font-light flex-shrink-0" style={{ fontSize: "clamp(3rem,5vw,4.5rem)", color: "#141414", lineHeight: 1 }}>
                    {n}
                  </p>
                  <div>
                    <p className="font-light text-sm uppercase tracking-tight">{t}</p>
                    <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.35)" }}>
                      {s}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-16 va-reveal">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[#BFA37E]" />
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                    Производство
                  </span>
                </div>
                <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                  Серийное.
                  <br />
                  Без потери
                  <br />
                  качества.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="font-light leading-relaxed mb-6" style={{ color: "rgba(20,20,20,.55)" }}>
                  Крупноформатные сердца высотой 2 метра изготовлены из стеклопластика через созданную матрицу. Серийное производство под единую матрицу обеспечивает идентичность формы и качества поверхности на всех 20 объектах.
                </p>
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.4)" }}>
                  Многослойная система окраски с повышенной стойкостью — обязательное условие для интерьерной эксплуатации при высокой проходимости. Все объекты рассчитаны на многократное использование в следующих сезонах.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-3 va-reveal va-d1">
              <div className="va-gal-img md:col-span-4">
                <div className="pm-frame">
                  <img alt="Производство — готовое сердце" className="pm-img" src={VA.one} />
                </div>
                <p className="font-mono text-[8px] uppercase tracking-widest mt-3" style={{ color: "rgba(20,20,20,.3)" }}>
                  Финальная покраска — многослойная износостойкая система
                </p>
              </div>
              <div className="va-gal-img md:col-span-8">
                <div className="pm-frame">
                  <img alt="Производство — заготовки в цехе" className="pm-img" src={VA.two} />
                </div>
                <p className="font-mono text-[8px] uppercase tracking-widest mt-3" style={{ color: "rgba(20,20,20,.3)" }}>
                  Производство по матрице — идентичность формы на всей серии из 20 объектов
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 px-8 md:px-14" style={{ background: "#141414" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="va-gal-img lg:col-span-6 va-reveal">
                <div className="pm-frame" style={{ background: "rgba(255,255,255,.04)" }}>
                  <img alt="Подставка для хранения и транспортировки" className="pm-img" src={VA.pred} />
                </div>
                <p className="font-mono text-[8px] uppercase tracking-widest mt-4" style={{ color: "rgba(255,255,255,.2)" }}>
                  Мобильная подставка — собственная разработка под хранение и транспортировку объектов
                </p>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 va-reveal va-d1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[#BFA37E]" />
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(255,255,255,.25)" }}>
                    Эксплуатация
                  </span>
                </div>
                <h2 className="font-light uppercase tracking-tight leading-none text-white mb-8" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                  Решение для
                  <br />
                  повторного
                  <br />
                  использования.
                </h2>
                <p className="font-light leading-relaxed mb-8" style={{ color: "rgba(255,255,255,.4)" }}>
                  Для крупноформатных объектов разработаны мобильные подставки на
                  колёсах. Обеспечивают безопасное хранение между сезонами,
                  удобную транспортировку внутри объекта и снижают затраты на
                  эксплуатацию.
                </p>
                <div className="flex flex-col gap-0" style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}>
                  {[
                    "Безопасное хранение объектов 2 м",
                    "Транспортировка внутри объекта без подъёмной техники",
                    "Многосезонное использование — снижение CapEx",
                  ].map((line) => (
                    <div key={line} className="flex items-center gap-4 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                      <div className="w-4 h-px flex-shrink-0" style={{ background: "#BFA37E" }} />
                      <p className="font-light text-sm" style={{ color: "rgba(255,255,255,.55)" }}>
                        {line}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto">
            <div className="va-reveal mb-12">
              <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.4rem,2vw,2rem)" }}>
                Проект в кадрах
              </h2>
            </div>
            <div className="pm-masonry mb-6 va-reveal">
              <div className="va-gal-img">
                <div className="pm-frame">
                  <img alt="Сердца над галереей — ракурс 1" className="pm-img" src={VA.four} />
                </div>
              </div>
              <div className="va-gal-img">
                <div className="pm-frame">
                  <img alt="Сердца над галереей — ракурс 2" className="pm-img" src={VA.five} />
                </div>
              </div>
              <div className="va-gal-img pm-span-2">
                <div className="pm-frame">
                  <img alt="Галерея — кадр" className="pm-img" src={VA.six} />
                </div>
              </div>
              <div className="va-gal-img">
                <div className="pm-frame">
                  <img alt="Производство" className="pm-img" src={VA.one} />
                </div>
              </div>
              <div className="va-gal-img">
                <div className="pm-frame">
                  <img alt="Цех" className="pm-img" src={VA.two} />
                </div>
              </div>
            </div>
            <div className="mt-6 va-reveal va-d2">
              <div className="pm-video-frame">
                <video controls playsInline preload="metadata">
                  <source src={VA.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* РЕАЛИЗАЦИЯ */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-16 va-reveal">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[#BFA37E]" />
                  <span className="font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                    Реализация
                  </span>
                </div>
                <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                  Полный цикл.
                  <br />
                  Один подрядчик.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.55)" }}>
                  От проектирования матриц до демонтажа и подготовки к следующему сезону. Модульная система монтажа позволяет устанавливать всё пространство одной бригадой — без дополнительной координации и потерь времени на стыках.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px va-reveal va-d1" style={{ background: "rgba(20,20,20,.08)" }}>
              {[
                ["Проектирование", "Разработка геометрии объектов, производственных матриц и модульной системы подвесных конструкций."],
                ["Производство", "Серийное изготовление объектов и подвесных элементов. Подготовка поверхности и многослойная окраска."],
                ["Монтаж", "Установка по всей галерее и атриуму. Модульная сборка ускоряет монтаж и обеспечивает точность геометрии."],
                ["После сезона", "Демонтаж, чистка, подготовка к хранению. Все объекты укладываются в мобильные подставки для следующего сезона."],
              ].map(([title, desc]) => (
                <div key={title} className="p-10" style={{ background: "#F9F9F7" }}>
                  <p className="font-mono text-[8px] uppercase tracking-[.3em] mb-5" style={{ color: "#BFA37E" }}>
                    {title}
                  </p>
                  <p className="font-light leading-relaxed" style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ position: "relative", background: "#1a0a0a", overflow: "hidden" }}>
          <div className="va-gal-img" style={{ minHeight: "min(70vh, 860px)" }}>
            <div className="pm-frame" style={{ background: "#1a0a0a", minHeight: "min(70vh, 860px)" }}>
              <img alt="San Valentín — финальный кадр" className="pm-img" style={{ opacity: 0.42 }} src={VA.last} />
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14" style={{ zIndex: 2 }}>
            <div className="max-w-[1400px] mx-auto w-full va-reveal">
              <h2 className="font-light text-white leading-none tracking-tight mb-10" style={{ fontSize: "clamp(1.6rem,4.5vw,3rem)" }}>
                200 метров.
                <br />
                16 500 элементов.
                <br />
                Одна система.
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px flex-shrink-0" style={{ background: "#BFA37E" }} />
                  <p className="font-light" style={{ color: "rgba(255,255,255,.55)", fontSize: "clamp(.9rem,1.2vw,1.05rem)" }}>
                    Собственное производство — от матрицы до монтажа
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px flex-shrink-0" style={{ background: "rgba(191,163,126,.3)" }} />
                  <p className="font-light" style={{ color: "rgba(255,255,255,.3)", fontSize: "clamp(.9rem,1.2vw,1.05rem)" }}>
                    Рассчитано на многократное использование
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="va-reveal mb-20 pb-20 border-b" style={{ borderColor: "rgba(20,20,20,.08)" }}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <h2 className="font-light tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}>
                  Нужно сезонное оформление
                  <br />
                  торгового или публичного пространства?
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

