import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Raddison.css";

const IM = "/radisson";

/** 0 — заставка в архиве проектов */
export const RADDISON_SPLASH = `${IM}/0-zastavka.png`;

const RD = {
  hero: `${IM}/1.png`,
  second: `${IM}/2.png`,
  predposled: `${IM}/14.png`,
  posled: `${IM}/posled.png`,
  // Остальное — в середину
  mid: [`${IM}/11.png`, `${IM}/12.png`, `${IM}/13.png`],
};

export default function Raddison() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — IKEA | Радиссон";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("rd-visible");
            obs.unobserve(x.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    document
      .querySelectorAll("#raddison-root .rd-reveal")
      .forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  /** Герой — как в Manifest.jsx: параллакс + сдвиг/opacity + veil */
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

  // Галерея (5 кадров): 0-заставка + mid + predposled
  const gallery = {
    row1portrait: RADDISON_SPLASH,
    row1wide: RD.mid[0],
    row2ultrawide: RD.mid[1],
    row3left: RD.mid[2],
    row3right: RD.predposled,
  };

  return (
    <div
      id="raddison-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      <div
        ref={heroWrapRef}
        className="sticky top-0 z-[1] flex h-screen min-h-[100dvh] w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#141414]">
          <img
            ref={heroBgRef}
            alt="Матрёшки — скульптурная композиция у Radisson Collection"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 35%" }}
            src={RD.hero}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(20,20,20,.88) 0%, rgba(20,20,20,.2) 50%, rgba(20,20,20,.1) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="rd-h0 absolute left-8 top-28 z-10 md:left-14">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.35)" }}
            >
              monumforma&nbsp;&nbsp;/&nbsp;&nbsp;Проекты&nbsp;&nbsp;/&nbsp;&nbsp;Матрёшки
            </p>
          </div>

          <div className="mt-auto mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-8 pb-16 md:px-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1
                className="rd-h1 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)" }}
              >
                Матрёшки
              </h1>
              <p
                className="rd-h2 mt-4 font-light"
                style={{
                  color: "rgba(255,255,255,.45)",
                  fontSize: "clamp(.85rem,1.2vw,1rem)",
                  letterSpacing: ".02em",
                }}
              >
                Скульптурная композиция в общественном пространстве. Radisson Collection, Москва
              </p>
            </div>

            <div className="rd-h2 flex flex-col gap-4 pb-2 lg:col-span-4 lg:col-start-9 lg:mt-14">
              <div className="flex items-center gap-4">
                <div
                  className="h-10 w-px flex-shrink-0"
                  style={{ background: "rgba(191,163,126,.3)" }}
                />
                <div>
                  <p
                    className="mb-1 font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,.3)" }}
                  >
                    Высота
                  </p>
                  <p className="font-light text-white">1,7 — 4,8 м</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="h-10 w-px flex-shrink-0"
                  style={{ background: "rgba(191,163,126,.3)" }}
                />
                <div>
                  <p
                    className="mb-1 font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,.3)" }}
                  >
                    Заказчик
                  </p>
                  <p className="font-light text-white">Городская структура</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
            <div
              className="relative h-9 w-px overflow-hidden"
              style={{ background: "rgba(255,255,255,.12)" }}
            >
              <div className="rd-sl absolute inset-0" style={{ background: "#BFA37E" }} />
            </div>
          </div>
        </div>
      </div>

      <div id="raddison-page-content" className="relative z-[2] bg-[#F9F9F7]">
        <div
          className="border-b"
          style={{ background: "#F0EFEB", borderColor: "rgba(20,20,20,.07)" }}
        >
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-8 md:grid-cols-6 md:px-14">
            <div className="border-r py-7 pr-6" style={{ borderColor: "rgba(20,20,20,.07)" }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Тип
              </p>
              <p className="font-light text-base leading-snug">Скульптурная инсталляция</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: "rgba(20,20,20,.07)" }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Тип проекта
              </p>
              <p className="font-light text-base">Public art</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: "rgba(20,20,20,.07)" }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Высота
              </p>
              <p className="font-light text-base">1,7 — 4,8 м</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: "rgba(20,20,20,.07)" }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Материал
              </p>
              <p className="font-light text-base">Сталь 316L,<br />полированная</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: "rgba(20,20,20,.07)" }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Локация
              </p>
              <p className="font-light text-base">Radisson Collection, Москва</p>
            </div>
            <div className="py-7 pl-6">
              <p className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                Авторы
              </p>
              <p className="font-light text-base leading-snug">Т. Ликсутова,<br />Н. Крихели</p>
            </div>
          </div>
        </div>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="rd-reveal lg:col-span-4">
                <h2
                  className="font-light uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Знаковый объект в стратегической локации города.
                </h2>
              </div>
              <div className="rd-reveal rd-d1 lg:col-span-7 lg:col-start-6">
                <p
                  className="font-light leading-relaxed mb-8"
                  style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}
                >
                  Пространство перед Radisson Collection требовало объекта соразмерного локации — премиальному адресу, вековой архитектуре за спиной, высокому туристическому трафику. Все это означало: никаких компромиссов по качеству и срокам.
                </p>
                <div className="rd-reveal rd-d2" style={{ borderLeft: "1px solid #BFA37E", paddingLeft: "2rem" }}>
                  <p
                    className="font-light leading-relaxed"
                    style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.7)" }}
                  >
                    Полированная до зеркального состояния сталь отражает архитектуру, небо и людей вокруг. Объект меняется каждую минуту — вместе с городом.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="rd-reveal" style={{ background: "#141414" }}>
          <div className="max-w-[1400px] mx-auto px-8 py-3 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Сталь 316L, полированная до зеркального состояния
            </p>
          </div>
          <div className="rd-gal-img" style={{ height: "clamp(340px,65vw,860px)" }}>
            <img
              alt="Матрёшка крупным планом — отражение Radisson Collection в зеркальной стали"
              className="w-full h-full object-cover"
              src={RD.second}
            />
          </div>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-4">
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.2)" }}>
              Высота 4,8 м — золотой кокошник с ручной проработкой
            </p>
          </div>
        </div>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-14">
              <div className="rd-reveal lg:col-span-4">
                <h2
                  className="font-light uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Культурный код, понятный без перевода.
                </h2>
              </div>
              <div className="rd-reveal rd-d1 lg:col-span-7 lg:col-start-6">
                <p className="font-light leading-relaxed mb-6" style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}>
                  Матрёшка — один из немногих визуальных образов, мгновенно считываемых в любой точке мира. Авторы проекта — Татьяна Ликсутова и архитектор Николь Крихели — задумали перевести его в масштаб городской скульптуры: форма узнаваема, материал и исполнение — современные.
                </p>
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.5)" }}>
                  Сталь 316L, полированная до зеркального состояния, задаёт объём и отражает контекст. Золотые кокошники с ручной резьбой — ювелирная точность в архитектурном масштабе. Семь скульптур разной высоты выстроены в градуированный ряд, формируя единую пространственную композицию.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="rd-reveal mb-12">
              <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.4rem,2vw,2rem)" }}>
                Проект в кадрах
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-3 rd-reveal">
              <div className="rd-gal-img md:col-span-2">
                <img alt="Матрёшка крупным планом — золотой кокошник и зеркальная поверхность" className="w-full object-cover" style={{ aspectRatio: "3/4" }} src={gallery.row1portrait} />
              </div>
              <div className="rd-gal-img md:col-span-3">
                <img alt="Ряд матрёшек в перспективе — высотка Radisson за ними" className="w-full object-cover" style={{ aspectRatio: "16/10" }} src={gallery.row1wide} />
              </div>
            </div>

            <div className="mb-3 rd-reveal rd-d1">
              <div className="rd-gal-img">
                <img alt="Все семь матрёшек — вид сверху с высоткой Radisson на фоне" className="w-full object-cover" style={{ aspectRatio: "21/9" }} src={gallery.row2ultrawide} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 rd-reveal rd-d2">
              <div className="rd-gal-img">
                <img alt="Девушка фотографируется у матрёшек — туристическая точка" className="w-full object-cover" style={{ aspectRatio: "4/3" }} src={gallery.row3left} />
              </div>
              <div className="rd-gal-img">
                <img alt="Матрёшки весной — вид на весь ансамбль" className="w-full object-cover" style={{ aspectRatio: "4/3" }} src={gallery.row3right} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-14">
              <div className="rd-reveal lg:col-span-4">
                <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                  Городской масштаб — отдельная компетенция.
                </h2>
              </div>
              <div className="rd-reveal lg:col-span-7 lg:col-start-6 rd-d1">
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.55)" }}>
                  Публичное пространство с городским заказчиком — это высокий уровень требований: согласования, регламенты, исторический контекст, сроки исполнения строго зафискированы. Реализация проекта предусматривала инженерные расчёты и монтаж с учётом условий городской среды.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-px rd-reveal rd-d1" style={{ background: "rgba(20,20,20,.07)" }}>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="font-light text-base mb-4 uppercase tracking-tight">Локация</p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".95rem", color: "rgba(20,20,20,.5)" }}>
                  Radisson Collection — один из наиболее статусных адресов Москвы. Объект соразмерен архитектурному фону.
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="font-light text-base mb-4 uppercase tracking-tight">Городской заказчик</p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".95rem", color: "rgba(20,20,20,.5)" }}>
                  Понимаем работу с городскими структурами — регламенты, согласование и ответственность за результат.
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="font-light text-base mb-4 uppercase tracking-tight">Материал и инженерия</p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".95rem", color: "rgba(20,20,20,.5)" }}>
                  Сталь 316L полирована до зеркального состояния. Антикоррозийная стойкость и ветровые расчёты.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 rd-reveal">
                <h2 className="font-light uppercase tracking-tight leading-none mb-8" style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}>
                  Устойчивая точка притяжения в одной из самых посещаемых локаций города.
                </h2>
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.55)" }}>
                  Туристический фотомагнит с первого дня установки. Органический охват в соцсетях без продвижения.
                </p>
              </div>

              <div className="lg:col-span-6 lg:col-start-7 rd-reveal rd-d1">
                <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(20,20,20,.07)" }}>
                  <div className="p-10" style={{ background: "#F0EFEB" }}>
                    <p className="font-light mb-2" style={{ fontSize: "clamp(2.5rem,4vw,3.5rem)", lineHeight: 1 }}>7</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      скульптур в единой композиции
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F0EFEB" }}>
                    <p className="font-light mb-2" style={{ fontSize: "clamp(2.5rem,4vw,3.5rem)", lineHeight: 1 }}>4,8 м</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      высота главного объекта
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F0EFEB" }}>
                    <p className="font-light mb-2 leading-tight" style={{ fontSize: "clamp(1.1rem,1.5vw,1.4rem)" }}>
                      Сталь<br />316L
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      полированная, постоянная уличная эксплуатация
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F0EFEB" }}>
                    <p className="font-light mb-2 leading-tight" style={{ fontSize: "clamp(1.1rem,1.5vw,1.4rem)" }}>
                      Городской<br />заказчик
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      публичное пространство, полный цикл
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ position: "relative", background: "#141414", overflow: "hidden" }}>
          <div className="rd-gal-img" style={{ height: "clamp(420px,65vw,860px)" }}>
            <img alt="Матрёшки — финальный кадр" className="w-full h-full object-cover" style={{ opacity: 0.42 }} src={RD.posled} />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14" style={{ zIndex: 2 }}>
            <div className="max-w-[1400px] mx-auto w-full rd-reveal">
              <h2 className="font-light text-white leading-none tracking-tight mb-10" style={{ fontSize: "clamp(1.6rem,4.5vw,3rem)" }}>
                Работаете с городской средой?<br />
                Создадим проект, который повысит ценность пространства.
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px flex-shrink-0" style={{ background: "#BFA37E" }} />
                  <p className="font-light" style={{ color: "rgba(255,255,255,.6)", fontSize: "clamp(.9rem,1.2vw,1.1rem)" }}>
                    Публичный арт-проект, который работает на имидж и поток
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "2rem", left: "2.5rem", zIndex: 2 }}>
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.2)" }}>
              Radisson Collection — Москва
            </p>
          </div>
        </div>

        <section className="py-24 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="rd-reveal mb-20 pb-20 border-b" style={{ borderColor: "rgba(20,20,20,.08)" }}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <div>
                  <h2 className="font-light tracking-tight leading-none" style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}>
                    Ищете решение для усиления городской локации?<br />
                    Спроектируем и реализуем под ключ.
                  </h2>
                </div>
                <Link to="/contact" className="rd-btn-cta flex-shrink-0">
                  Обсудить проект
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px rd-reveal" style={{ background: "rgba(20,20,20,.06)" }}>
              <Link
                to="/projects"
                className="flex items-center gap-6 p-8"
                style={{ background: "#F9F9F7", textDecoration: "none" }}
              >
                <span className="material-symbols-outlined text-2xl" style={{ color: "#BFA37E" }}>
                  arrow_back
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: "rgba(20,20,20,.35)" }}>
                    Все проекты
                  </p>
                  <p className="font-light uppercase tracking-tight" style={{ color: "#141414" }}>
                    Вернуться в архив
                  </p>
                </div>
              </Link>
              <Link
                to="/magicpiano"
                className="flex items-center justify-end gap-6 p-8"
                style={{ background: "#F9F9F7", textDecoration: "none" }}
              >
                <div className="text-right">
                  <p className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: "rgba(20,20,20,.35)" }}>
                    Следующий проект
                  </p>
                  <p className="font-light uppercase tracking-tight" style={{ color: "#141414" }}>
                    Волшебное фортепиано
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

      <Footer />
    </div>
  );
}

