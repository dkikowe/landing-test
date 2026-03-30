import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Tver.css";

const IM = "/tver";

/** 0 — заставка в архиве проектов */
export const TVER_SPLASH = `${IM}/0-zastavka.webp`;

const TV = {
  hero: `${IM}/1.webp`,
  second: `${IM}/2.png`,
  predposled: `${IM}/predposled.png`,
  posled: `${IM}/posled.png`,
  // Для галереи (5 слотов): 4 mid + пред-последний (predposled).
  // Важно: predposled кладём в самый последний слот галереи (как просили).
  mid: [
    `${IM}/mid1.png`,
    `${IM}/mid2.jpg`,
    `${IM}/mid3.png`,
    `${IM}/mid4.png`,
  ],
};

export default function Tver() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — IKEA | Тверская площадь";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("tv-visible");
            obs.unobserve(x.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document
      .querySelectorAll("#tver-root .tv-reveal")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /** Герой — как в Manifest.jsx: параллакс фона + сдвиг/opacity + veil */
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

  // Галерея: row1 (2 кадра) + row2 (1 ultra wide) + row3 (wide + portrait)
  const gallery = {
    row1a: TV.mid[0],
    row1b: TV.mid[1],
    row2: TV.mid[2],
    row3wide: TV.mid[3],
    row3portrait: TV.predposled,
  };

  return (
    <div
      id="tver-root"
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
            alt="Тверская площадь — световые арки и ёлки в ночной Москве"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 40%" }}
            src={TV.hero}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(20,20,20,.92) 0%, rgba(20,20,20,.25) 55%, rgba(20,20,20,.1) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="tv-h0 absolute left-8 top-28 z-10 md:left-14">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.35)" }}
            >
              monumforma&nbsp;&nbsp;/&nbsp;&nbsp;Проекты&nbsp;&nbsp;/&nbsp;&nbsp;Тверская
              площадь
            </p>
          </div>

          <div className="mt-auto mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-8 pb-16 md:px-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1
                className="tv-h1 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)" }}
              >
                Тверская
                <br />
                площадь
              </h1>
              <p
                className="tv-h2 mt-4 font-light"
                style={{
                  color: "rgba(255,255,255,.45)",
                  fontSize: "clamp(.85rem,1.2vw,1rem)",
                  letterSpacing: ".02em",
                }}
              >
                Комплексное праздничное оформление центральной площади Москвы
              </p>
            </div>

            <div className="tv-h2 flex flex-col gap-4 pb-2 lg:col-span-4 lg:col-start-9 lg:mt-14">
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
                    Проект реализован для
                  </p>
                  <p className="font-light text-white">Мэрия города Москвы</p>
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
                  <p className="font-light text-white">
                    Центр города, главный туристический маршрут
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
            <div
              className="relative h-9 w-px overflow-hidden"
              style={{ background: "rgba(255,255,255,.12)" }}
            >
              <div className="tv-sl absolute inset-0" style={{ background: "#BFA37E" }} />
            </div>
          </div>
        </div>
      </div>

      <div id="tver-page-content" className="relative z-[2] bg-[#F9F9F7]">
        <div
          className="border-b"
          style={{ background: "#F0EFEB", borderColor: "rgba(20,20,20,.07)" }}
        >
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-8 md:grid-cols-5 md:px-14">
            <div className="border-r py-7 pr-6" style={{ borderColor: "rgba(20,20,20,.07)" }}>
              <p className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                Тип
              </p>
              <p className="font-light text-base leading-snug">
                Городское оформление
              </p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: "rgba(20,20,20,.07)" }}>
              <p className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                Сезон
              </p>
              <p className="font-light text-base">2022 год</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: "rgba(20,20,20,.07)" }}>
              <p className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                Формат
              </p>
              <p className="font-light text-base">Сезонная инсталляция</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: "rgba(20,20,20,.07)" }}>
              <p className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                Цикл
              </p>
              <p className="font-light text-base">
                Концепция/монтаж/эксплуатация
              </p>
            </div>
            <div className="py-7 pl-6">
              <p className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]" style={{ color: "rgba(20,20,20,.35)" }}>
                Площадь
              </p>
              <p className="font-light text-base">4.500 м²</p>
            </div>
          </div>
        </div>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="mx-auto max-w-[1400px]">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="tv-reveal lg:col-span-4">
                <h2
                  className="font-light uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Самая сложная аудитория — весь город сразу.
                </h2>
              </div>
              <div className="tv-reveal tv-d1 lg:col-span-7 lg:col-start-6">
                <p
                  className="font-light leading-relaxed mb-6"
                  style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}
                >
                  Тверская площадь — центральная публичная точка города с непрерывным пешеходным и туристическим трафиком. Здесь нет права на эстетическую небрежность: объект читается с расстояния ста метров с магистрали и одновременно выдерживает рассмотрение вплотную.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.5)" }}
                >
                  Задача — создать цельную праздничную среду, которая работает на трёх уровнях восприятия: силуэт в городском масштабе, структура маршрута на площади, детальность вблизи. Именно детальная проработка становится ключевым фактором качества в городских проектах.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="tv-reveal" style={{ background: "#141414" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-3">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Центральный световой портал — главная архитектурная доминанта площади
            </p>
          </div>
          <div className="tv-gal-img" style={{ height: "clamp(340px,62vw,800px)" }}>
            <img
              alt="Световые арки на Тверской площади — ночной вид"
              className="w-full h-full object-cover"
              src={TV.second}
            />
          </div>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-4">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Ажурный орнамент ручной проработки — читается как с городской магистрали, так и вблизи
            </p>
          </div>
        </div>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-14 tv-reveal">
              <div className="lg:col-span-4">
                <h2
                  className="font-light uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Архитектурная логика, а не декоративная.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 tv-reveal tv-d1">
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.55)" }}>
                  Пространство спроектировано как последовательность сценариев: входной портал задаёт масштаб и направление, ёлочный партер структурирует площадь, боковые галереи формируют маршрут вдоль периметра. Посетитель движется по логике, заложенной в планировку, — и воспринимает это как естественное поведение в пространстве.
                </p>
              </div>
            </div>

            <div
              className="grid md:grid-cols-3 gap-px tv-reveal tv-d1"
              style={{ background: "rgba(20,20,20,.07)" }}
            >
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="font-light text-base mb-4 uppercase tracking-tight">Дальний план</p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".95rem", color: "rgba(20,20,20,.5)" }}>
                  Световой портал высотой в несколько этажей читается с Тверской улицы и Охотного ряда. Силуэт площади опознаётся издалека — это работает на трафик ещё до того, как человек принял решение подойти.
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="font-light text-base mb-4 uppercase tracking-tight">Средний план</p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".95rem", color: "rgba(20,20,20,.5)" }}>
                  Ритмика ёлок в кашпо с подсветкой и боковые галереи делят площадь на читаемые зоны. Человек интуитивно понимает, куда идти, и проводит на площади больше времени, чем планировал.
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="font-light text-base mb-4 uppercase tracking-tight">Ближний план</p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".95rem", color: "rgba(20,20,20,.5)" }}>
                  Ажурный орнамент арок, декоративные элементы ёлок, детальность кашпо — уровень проработки, который удерживает внимание вблизи и провоцирует фотосъёмку. Каждый элемент выдерживает рассмотрение в упор.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="tv-reveal mb-12">
              <h2
                className="font-light uppercase tracking-tight leading-none"
                style={{ fontSize: "clamp(1.4rem,2vw,2rem)" }}
              >
                Проект в кадрах
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 tv-reveal">
              <div className="tv-gal-img">
                <img
                  alt="Световые арки — вид с уровня площади"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  src={gallery.row1a}
                />
              </div>
              <div className="tv-gal-img">
                <img
                  alt="Ёлки на площади — ночная съёмка с деталями"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  src={gallery.row1b}
                />
              </div>
            </div>

            <div className="mb-3 tv-reveal tv-d1">
              <div className="tv-gal-img">
                <img
                  alt="Ночная визуализация — общий вид площади сверху"
                  className="w-full object-cover"
                  style={{ aspectRatio: "21/9" }}
                  src={gallery.row2}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 tv-reveal tv-d2">
              <div className="tv-gal-img md:col-span-3">
                <img
                  alt="Дневная концепция — ёлки и оранжереи"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/10" }}
                  src={gallery.row3wide}
                />
              </div>
              <div className="tv-gal-img md:col-span-2">
                <img
                  alt="Декоративные ёлки в кашпо — детальный кадр"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={gallery.row3portrait}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F0EFEB" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-14 tv-reveal">
              <div className="lg:col-span-4">
                <h2
                  className="font-light uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Город не останавливается. Монтаж — тоже.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 tv-reveal tv-d1">
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.55)" }}>
                  Тверская площадь работает без перерывов. Монтаж крупногабаритных конструкций, установка портальных арок, подключение световой системы — всё выполнено без закрытия пространства. Строгие регламенты городской среды, согласование с эксплуатирующими службами, ночные окна для тяжёлой техники.
                </p>
              </div>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-px tv-reveal tv-d1"
              style={{ background: "rgba(20,20,20,.07)" }}
            >
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="font-light text-lg mb-4 uppercase tracking-tight">Концепция</p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}>
                  Архитектурная и световая концепция разработана с учётом охранного статуса исторической среды и регламентов городских праздничных мероприятий
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="font-light text-lg mb-4 uppercase tracking-tight">Проектирование</p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}>
                  Расчёт ветровых и снеговых нагрузок для крупногабаритных порталов. Интеграция в существующую инфраструктуру — без капитальных вмешательств в покрытие площади
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="font-light text-lg mb-4 uppercase tracking-tight">Производство</p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}>
                  Все элементы выполнены по проектной документации с учетом нагрузок, условий городской эксплуатации и сроков монтажа. Ажурный орнамент порталов реализован с высокой детализацией
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="font-light text-lg mb-4 uppercase tracking-tight">Монтаж</p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}>
                  Установка в условиях действующей городской площади. Координация с городскими службами, соблюдение сроков праздничного календаря — без единого дня переноса
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 tv-reveal">
                <h2
                  className="font-light uppercase tracking-tight leading-none mb-8"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Площадь вошла в туристический маршрут города.
                </h2>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Тверская площадь в период праздничного оформления стала одной из ключевых точек московского маршрута «Путешествие в Рождество». Устойчивый пешеходный поток, высокий уровень пользовательского контента в соцсетях, присутствие в федеральных и международных медиа.
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 tv-reveal tv-d1">
                <div
                  className="grid grid-cols-2 gap-px"
                  style={{ background: "rgba(20,20,20,.07)" }}
                >
                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p className="font-light mb-2 leading-tight" style={{ fontSize: "clamp(1.1rem,1.5vw,1.4rem)" }}>
                      Туристический
                      <br />
                      поток
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      рост посещения со стороны туристов
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p className="font-light mb-2 leading-tight" style={{ fontSize: "clamp(1.1rem,1.5vw,1.4rem)" }}>
                      3 уровня
                      <br />
                      восприятия
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      дальний / средний / ближний план
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p className="font-light mb-2" style={{ fontSize: "clamp(2.5rem,4vw,3.5rem);lineHeight:1" }}>
                      30+
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      событий (ярамарки, концерты, активности)
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p className="font-light mb-2" style={{ fontSize: "clamp(2.5rem,4vw,3.5rem);lineHeight:1" }}>
                      4.500
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      м² площади оформления
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ position: "relative", background: "#141414", overflow: "hidden" }}>
          <div className="tv-gal-img" style={{ height: "clamp(420px,65vw,860px)" }}>
            <img
              alt="Тверская площадь — финальный кадр"
              className="w-full h-full object-cover"
              style={{ opacity: 0.4 }}
              src={TV.posled}
            />
          </div>
          <div
            className="absolute inset-0 flex flex-col justify-center px-8 md:px-14"
            style={{ zIndex: 2 }}
          >
            <div className="max-w-[1400px] mx-auto w-full tv-reveal">
              <h2
                className="font-light text-white leading-none tracking-tight mb-10"
                style={{ fontSize: "clamp(1.6rem,4.5vw,3rem)" }}
              >
                Городской уровень.
                <br />
                Сложная среда.
                <br />
                Точная реализация.
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px flex-shrink-0" style={{ background: "#BFA37E" }} />
                  <p
                    className="font-light"
                    style={{
                      color: "rgba(255,255,255,.6)",
                      fontSize: "clamp(.9rem,1.2vw,1.1rem)",
                    }}
                  >
                    Полный цикл реализации в условиях действующей городской среды
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "2rem", left: "2.5rem", zIndex: 2 }}>
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.2)" }}>
              Тверская площадь, Москва
            </p>
          </div>
        </div>

        <section className="py-24 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div
              className="tv-reveal mb-20 pb-20 border-b"
              style={{ borderColor: "rgba(20,20,20,.08)" }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <div>
                  <h2
                    className="font-light tracking-tight leading-none"
                    style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}
                  >
                    Работаете с городским
                    <br />
                    или общественным пространством?
                  </h2>
                </div>
                <Link to="/contact" className="tv-btn-cta flex-shrink-0">
                  Обсудить проект
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "16px" }}
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-px tv-reveal"
              style={{ background: "rgba(20,20,20,.06)" }}
            >
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
                to="/forest"
                className="flex items-center justify-end gap-6 p-8"
                style={{ background: "#F9F9F7", textDecoration: "none" }}
              >
                <div className="text-right">
                  <p className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: "rgba(20,20,20,.35)" }}>
                    Следующий проект
                  </p>
                  <p className="font-light uppercase tracking-tight" style={{ color: "#141414" }}>
                    Матрёшки — Radisson Collection
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

