import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./MagicPiano.css";

/** Медиа из public/magic-piano (папка «№3 Готовые фото») */
const MP = "/magic-piano";

export default function MagicPiano() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title =
      "monumforma — Волшебное фортепиано | Медиа-инсталляция";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("mp-visible");
            obs.unobserve(x.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#magic-piano-root .mp-reveal").forEach((el) => {
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /** Hero scroll — как в Manifest.jsx */
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
      id="magic-piano-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      {/* Hero — sticky + скролл-анимация как в Manifest (hero-wrap / hero-bg / hero-veil) */}
      <div
        ref={heroWrapRef}
        className="sticky top-0 z-[1] flex h-screen w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={heroBgRef}
            alt="Волшебное фортепиано — два интерактивных рояля в атриуме торгового центра"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 40%" }}
            src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1800&q=80"
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(20,20,20,.85) 0%, rgba(20,20,20,.25) 50%, rgba(20,20,20,.15) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-white opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="absolute left-8 top-28 z-10 md:left-14 mp-h0">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.35)" }}
            >
              monumforma&nbsp;&nbsp;/&nbsp;&nbsp;Проекты&nbsp;&nbsp;/&nbsp;&nbsp;Волшебное
              фортепиано
            </p>
          </div>

          <div className="mt-auto mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-8 pb-16 md:px-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1
                className="mp-h1 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)" }}
              >
                Волшебное
                <br />
                фортепиано
              </h1>
              <p
                className="mp-h2 mt-4 font-light"
                style={{
                  color: "rgba(255,255,255,.45)",
                  fontSize: "clamp(.85rem,1.2vw,1rem)",
                  letterSpacing: ".02em",
                }}
              >
                Точка притяжения внутри торгового центра
              </p>
            </div>
            <div className="mp-h2 flex flex-col gap-4 pb-2 lg:col-span-4 lg:col-start-9 lg:mt-14">
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
                    Год
                  </p>
                  <p className="font-light text-white">2019</p>
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
                    Локация
                  </p>
                  <p className="font-light text-white">Торговый центр</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
            <div
              className="relative h-9 w-px overflow-hidden"
              style={{ background: "rgba(255,255,255,.12)" }}
            >
              <div
                className="mp-sl absolute inset-0"
                style={{ background: "#BFA37E" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="page-content" className="relative z-[2] bg-[#F9F9F7]">
        <div
          className="border-b"
          style={{
            background: "#F0EFEB",
            borderColor: "rgba(20,20,20,.07)",
          }}
        >
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-8 md:grid-cols-6 md:px-14">
            <div
              className="border-r py-7 pr-6"
              style={{ borderColor: "rgba(20,20,20,.07)" }}
            >
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Тип
              </p>
              <p className="font-light text-base leading-snug">
                Интерактивная медиа-инсталляция
              </p>
            </div>
            <div
              className="border-r px-6 py-7"
              style={{ borderColor: "rgba(20,20,20,.07)" }}
            >
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Локация
              </p>
              <p className="font-light text-base">Торговый центр</p>
            </div>
            <div
              className="border-r px-6 py-7"
              style={{ borderColor: "rgba(20,20,20,.07)" }}
            >
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Год
              </p>
              <p className="font-light text-base">2019</p>
            </div>
            <div
              className="border-r px-6 py-7"
              style={{ borderColor: "rgba(20,20,20,.07)" }}
            >
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Элементы
              </p>
              <p className="font-light text-base">2 интерактивных рояля</p>
            </div>
            <div
              className="border-r px-6 py-7"
              style={{ borderColor: "rgba(20,20,20,.07)" }}
            >
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Режимы
              </p>
              <p className="font-light text-base">Ручной / автоматический</p>
            </div>
            <div className="py-7 pl-6">
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Системы
              </p>
              <p className="font-light text-base">Звук + свет + управление</p>
            </div>
          </div>
        </div>

        <section className="px-8 py-28 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="mp-reveal lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Любой может
                  <br />
                  выйти на сцену.
                </h2>
              </div>
              <div className="mp-reveal mp-d1 lg:col-span-7 lg:col-start-6">
                <p
                  className="mb-6 font-light leading-relaxed"
                  style={{
                    fontSize: "1.05rem",
                    color: "rgba(20,20,20,.65)",
                  }}
                >
                  Два рояля — для взрослых и детей — изготовлены идентично
                  настоящим и встроены в атриум семейного торгового центра. Внутри
                  каждого — синтезатор, подключённый к звуковой и световой
                  системам объекта.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.5)" }}
                >
                  На 10 колоннах атриума — 80 управляемых LED-светильников по
                  DMX. Внутри роялей — подсветка спрятана под молочный акрил.
                  Всё это работает как единая среда, реагирующая на человека.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mp-reveal" style={{ background: "#141414" }}>
          <div className="mx-auto max-w-[1400px] px-8 py-3 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Visual
            </p>
          </div>
          <div
            className="mp-gal-img"
            style={{ height: "clamp(340px,60vw,780px)" }}
          >
            <img
              alt="Волшебное фортепиано — крупный кадр в атриуме"
              className="h-full w-full object-cover"
              src={`${MP}/vf2.jpeg`}
            />
          </div>
          <div className="mx-auto max-w-[1400px] px-8 py-4 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Атриум — контекст размещения
            </p>
          </div>
        </div>

        <section className="px-8 py-28 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="mp-reveal mb-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Внутри всё
                  <br />
                  сложнее, чем снаружи.
                </h2>
              </div>
            </div>
            <div className="mp-reveal mp-d1 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <p
                  className="mb-6 font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.6)" }}
                >
                  Два режима работы. Если человек умеет играть — он играет сам:
                  свет и музыка реагируют именно на него, в реальном времени. Если
                  нет — включается второй режим: любое нажатие на клавишу
                  запускает одну из 70 классических мелодий, и подсветка
                  переливается по всему атриуму в такт.
                </p>
                <p
                  className="mb-8 font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.5)" }}
                >
                  Никакой инструкции. Все абсолютно интуитивно. Система считывает
                  намерение и адаптируется сама.
                </p>
                <div
                  className="grid grid-cols-2 gap-6 pt-8"
                  style={{ borderTop: "1px solid rgba(20,20,20,.08)" }}
                >
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-primary">
                      Режимы
                    </p>
                    <p
                      className="font-mono text-[10px] uppercase leading-loose"
                      style={{ color: "rgba(20,20,20,.45)" }}
                    >
                      Игра музыканта / 70+ классических мелодий
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-primary">
                      Свет
                    </p>
                    <p
                      className="font-mono text-[10px] uppercase leading-loose"
                      style={{ color: "rgba(20,20,20,.45)" }}
                    >
                      80 DMX-светильников + подсветка роялей через молочный
                      акрил
                    </p>
                  </div>
                </div>
              </div>
              <div className="mp-gal-img">
                <img
                  alt="Производство роялей — подготовка конструкции"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "3/2" }}
                  src={`${MP}/vf3-engineer.png`}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-28 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="mp-reveal mb-12">
              <h2
                className="font-light uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(1.4rem,2vw,2rem)" }}
              >
                Проект в кадрах
              </h2>
            </div>

            {/* Ряд 1 как в ref: 3+2 — видео + фото; далее те же пропорции gap-3 mb-3 */}
            <div className="mp-gallery-rail">
              <div className="mp-reveal mb-3 grid grid-cols-1 gap-3 md:grid-cols-5">
                <div className="mp-gal-img mp-gal-video-wrap md:col-span-3">
                  <video
                    className="mp-gal-video-el h-full w-full object-cover"
                    style={{ aspectRatio: "16/10" }}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label="Волшебное фортепиано — видео проекта"
                  >
                    <source src={`${MP}/result.mp4`} type="video/mp4" />
                  </video>
                </div>
                <div className="mp-gal-img md:col-span-2">
                  <img
                    alt="Проект в кадрах — кадр 1"
                    className="w-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                    src={`${MP}/vf4.png`}
                  />
                </div>
              </div>

              <div className="mp-reveal mp-d1 mb-3 grid grid-cols-1 gap-3 md:grid-cols-5">
                <div className="mp-gal-img md:col-span-3">
                  <img
                    alt="Проект в кадрах — кадр 2"
                    className="w-full object-cover"
                    style={{ aspectRatio: "16/10" }}
                    src={`${MP}/vf5.png`}
                  />
                </div>
                <div className="mp-gal-img md:col-span-2">
                  <img
                    alt="Проект в кадрах — кадр 3"
                    className="w-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                    src={`${MP}/vf7.png`}
                  />
                </div>
              </div>

              <div className="mp-reveal mp-d2 mb-3 grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="mp-gal-img">
                  <img
                    alt="Проект в кадрах — кадр 4"
                    className="w-full object-cover"
                    style={{ aspectRatio: "3/4" }}
                    src={`${MP}/vf8.png`}
                  />
                </div>
                <div className="mp-gal-img">
                  <img
                    alt="Проект в кадрах — кадр 5"
                    className="w-full object-cover"
                    style={{ aspectRatio: "3/4" }}
                    src={`${MP}/vf9.jpeg`}
                  />
                </div>
                <div className="mp-gal-img">
                  <img
                    alt="Проект в кадрах — кадр 6"
                    className="w-full object-cover"
                    style={{ aspectRatio: "3/4" }}
                    src={`${MP}/vf10.png`}
                  />
                </div>
              </div>

              <div className="mp-reveal mp-d2 grid grid-cols-1 gap-3 md:grid-cols-5">
                <div className="mp-gal-img md:col-span-5">
                  <img
                    alt="Проект в кадрах — кадр 7"
                    className="w-full object-cover"
                    style={{ aspectRatio: "16/9" }}
                    src={`${MP}/vf11.jpeg`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-28 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="mp-reveal mb-16">
              <h2
                className="font-light uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
              >
                Как это
                <br />
                создавалось.
              </h2>
            </div>
            <div
              className="mp-reveal grid gap-px md:grid-cols-2 lg:grid-cols-4"
              style={{ background: "rgba(20,20,20,.07)" }}
            >
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-4 text-lg font-light uppercase tracking-tight">
                  Концепция
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{
                    fontSize: ".9rem",
                    color: "rgba(20,20,20,.5)",
                  }}
                >
                  Создать открытый объект без барьеров — работает без персонала,
                  понятен без инструкций
                </p>
              </div>

              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-4 text-lg font-light uppercase tracking-tight">
                  Инженерия
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{
                    fontSize: ".9rem",
                    color: "rgba(20,20,20,.5)",
                  }}
                >
                  Два режима, синтезаторы, DMX-управление, синхронизация звука и
                  80 светильников
                </p>
              </div>

              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-4 text-lg font-light uppercase tracking-tight">
                  Производство
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{
                    fontSize: ".9rem",
                    color: "rgba(20,20,20,.5)",
                  }}
                >
                  Два рояля, идентичных натуральным. Взрослый и детский.
                  Изготовление — 6 недель
                </p>
              </div>

              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-4 text-lg font-light uppercase tracking-tight">
                  Монтаж
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{
                    fontSize: ".9rem",
                    color: "rgba(20,20,20,.5)",
                  }}
                >
                  Полная установка и настройка всего оборудования — за одну
                  ночь
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-28 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
              <div className="mp-reveal lg:col-span-5">
                <h2
                  className="mb-8 font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Живая точка
                  <br />
                  притяжения.
                </h2>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Объект заработал сразу. Посетители останавливались, садились,
                  слушали, играли — без подсказок. Инсталляция стала активной
                  частью атриума, а не декорацией.
                </p>
              </div>
              <div className="mp-reveal mp-d1 lg:col-span-6 lg:col-start-7">
                <div
                  className="grid grid-cols-2 gap-px"
                  style={{ background: "rgba(20,20,20,.07)" }}
                >
                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p
                      className="mb-2 font-light"
                      style={{
                        fontSize: "clamp(2.5rem,4vw,3.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      2
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      интерактивных объекта
                    </p>
                  </div>

                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p
                      className="mb-2 font-light"
                      style={{
                        fontSize: "clamp(2.5rem,4vw,3.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      70+
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      музыкальных композиций
                    </p>
                  </div>

                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p
                      className="mb-2 font-light"
                      style={{
                        fontSize: "clamp(2.5rem,4vw,3.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      2
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      режима взаимодействия
                    </p>
                  </div>

                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p
                      className="mb-2 font-light leading-tight"
                      style={{
                        fontSize: "clamp(1.1rem,1.5vw,1.4rem)",
                      }}
                    >
                      Свет
                      <br />+ музыка
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      интеграция со световой средой
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="relative overflow-hidden"
          style={{ background: "#141414" }}
        >
          <div
            className="mp-gal-img"
            style={{ height: "clamp(420px,65vw,820px)" }}
          >
            <img
              alt="Волшебное фортепиано — финальный кадр"
              className="h-full w-full object-cover"
              style={{ opacity: 0.5 }}
              src="https://images.unsplash.com/photo-1552422535-c45813c61732?w=1800&q=80"
            />
          </div>
          <div
            className="absolute inset-0 flex flex-col justify-center px-8 md:px-14"
            style={{ zIndex: 2 }}
          >
            <div className="mp-reveal mx-auto w-full max-w-[1400px]">
              <h2
                className="mb-10 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2rem,4.5vw,4rem)" }}
              >
                Это не рояль.
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
                      color: "rgba(255,255,255,.65)",
                      fontSize: "clamp(1rem,1.4vw,1.25rem)",
                    }}
                  >
                    Это интерактивная точка притяжения в вашем пространстве
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-10 z-[2]">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.25)" }}
            >
              Световой сценарий атриума — синхронизация с музыкой
            </p>
          </div>
        </div>

        <section className="px-8 py-24 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="mx-auto max-w-[1400px]">
            <div
              className="mp-reveal mb-20 border-b pb-20"
              style={{ borderColor: "rgba(20,20,20,.08)" }}
            >
              <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
                <div>
                  <h2
                    className="font-light leading-none tracking-tight"
                    style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}
                  >
                    Нужна интерактивная точка притяжения
                    <br />
                    для вашего объекта?
                  </h2>
                </div>
                <a href="/contact" className="mp-btn-cta flex-shrink-0">
                  Получить предложение за 48 часов
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 16 }}
                  >
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div
              className="mp-reveal grid grid-cols-1 gap-px md:grid-cols-2"
              style={{ background: "rgba(20,20,20,.06)" }}
            >
              <a
                href="/projects"
                className="flex items-center gap-6 p-8 transition-colors duration-300 hover:bg-[rgba(20,20,20,.02)]"
                style={{ background: "#F9F9F7", textDecoration: "none" }}
              >
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: "#BFA37E" }}
                >
                  arrow_back
                </span>
                <div>
                  <p
                    className="mb-2 font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "rgba(20,20,20,.35)" }}
                  >
                    All Projects
                  </p>
                  <p
                    className="font-light uppercase tracking-tight"
                    style={{ color: "#141414" }}
                  >
                    Back to Archive
                  </p>
                </div>
              </a>
              <a
                href="/projects"
                className="flex items-center justify-end gap-6 p-8 transition-colors duration-300 hover:bg-[rgba(20,20,20,.02)]"
                style={{ background: "#F9F9F7", textDecoration: "none" }}
              >
                <div className="text-right">
                  <p
                    className="mb-2 font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "rgba(20,20,20,.35)" }}
                  >
                    Next Project
                  </p>
                  <p
                    className="font-light uppercase tracking-tight"
                    style={{ color: "#141414" }}
                  >
                    PASSAGE | Parametric Arch Structure
                  </p>
                </div>
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: "#BFA37E" }}
                >
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
