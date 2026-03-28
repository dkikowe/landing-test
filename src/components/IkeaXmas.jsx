import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./IkeaXmas.css";

/** Ассеты из `Updated/! №5 - mall` → скопированы в `public/ikea-xmas-mall` */
const IM = "/ikea-xmas-mall";

/** Заставка в архиве: IMG_2770. Фото 1–3: 1.png / 2.png / 3.png. Финал: Posled.png. Остальное — «Проект в кадрах». */
export const IKEA_XMAS_SPLASH = `${IM}/IMG_2770.jpg`;

const IX = {
  one: `${IM}/1.png`,
  two: `${IM}/2.png`,
  three: `${IM}/3.png`,
  last: `${IM}/Posled.png`,
  middle: [
    `${IM}/IMG_3249.jpg`,
    `${IM}/IMG_3923.jpg`,
    `${IM}/Ih11.jpg`,
    `${IM}/Ih12.jpg`,
    `${IM}/Ih13.jpg`,
    `${IM}/Ih14.jpg`,
    `${IM}/Ih15.jpg`,
    `${IM}/Ih16.png`,
    `${IM}/Ih2.png`,
    `${IM}/Ih3.png`,
    `${IM}/Ih5.png`,
    `${IM}/Ih9.png`,
    `${IM}/ih17.jpg`,
    `${IM}/ih18.jpg`,
    `${IM}/ih19.jpg`,
    `${IM}/ih6.png`,
  ],
};

const mid = (i) => IX.middle[i] ?? IX.middle[0];

export default function IkeaXmas() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — IKEA | Новогоднее оформление";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("ix-visible");
            obs.unobserve(x.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#ikea-xmas-root .ix-reveal").forEach((el) => {
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /** Hero — как в Manifest.jsx: параллакс фона, сдвиг/opacity hero, нарастание veil */
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
      id="ikea-xmas-root"
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
            alt="Новогоднее оформление IKEA — атриум торгового центра"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 35%" }}
            src={IX.one}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(20,20,20,.9) 0%, rgba(20,20,20,.3) 50%, rgba(20,20,20,.2) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="ix-h0 absolute left-8 top-28 z-10 md:left-14">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.35)" }}
            >
              monumforma&nbsp;&nbsp;/&nbsp;&nbsp;Проекты&nbsp;&nbsp;/&nbsp;&nbsp;Mall
              — Новый год
            </p>
          </div>

          <div className="mt-auto mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-8 pb-16 md:px-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1
                className="ix-h1 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)" }}
              >
                Новогоднее
                <br />
                оформление mall
              </h1>
              <p
                className="ix-h2 mt-4 font-light"
                style={{
                  color: "rgba(255,255,255,.45)",
                  fontSize: "clamp(.85rem,1.2vw,1rem)",
                  letterSpacing: ".02em",
                }}
              >
                Комплексная световая среда торгового центра — 160 000 м²
              </p>
            </div>
            <div className="ix-h2 flex flex-col gap-4 pb-2 lg:col-span-4 lg:col-start-9 lg:mt-14">
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
                    Период
                  </p>
                  <p className="font-light text-white">2022–2023</p>
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
                    Награда
                  </p>
                  <p className="font-light text-white">
                    1 место — лучшее оформление молла
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
              <div
                className="ix-sl absolute inset-0"
                style={{ background: "#BFA37E" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="ix-page-content" className="relative z-[2] bg-[#F9F9F7]">
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
                Комплексное оформление
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
                Площадь
              </p>
              <p className="font-light text-base">160 000 м²</p>
            </div>
            <div
              className="border-r px-6 py-7"
              style={{ borderColor: "rgba(20,20,20,.07)" }}
            >
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Подвесные элементы
              </p>
              <p className="font-light text-base">144 объекта</p>
            </div>
            <div
              className="border-r px-6 py-7"
              style={{ borderColor: "rgba(20,20,20,.07)" }}
            >
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Напольные объекты
              </p>
              <p className="font-light text-base">37 единиц</p>
            </div>
            <div
              className="border-r px-6 py-7"
              style={{ borderColor: "rgba(20,20,20,.07)" }}
            >
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Производство
              </p>
              <p className="font-light text-base">10 недель</p>
            </div>
            <div className="py-7 pl-6">
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Монтаж
              </p>
              <p className="font-light text-base">
                3 недели,
                <br />
                ночные смены
              </p>
            </div>
          </div>
        </div>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="ix-reveal lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Среда,
                  <br />
                  а не украшение.
                </h2>
              </div>
              <div className="ix-reveal ix-d1 lg:col-span-7 lg:col-start-6">
                <p
                  className="mb-6 font-light leading-relaxed"
                  style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}
                >
                  Задача была не «украсить торговый центр к Новому году». Задача
                  — создать среду, в которую хочется вернуться. Которая
                  продлевает время пребывания, меняет настроение и становится
                  самостоятельным поводом для визита.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.65)" }}
                >
                  160 000 м² объекта — атриум, галереи, внешние зоны —
                  объединены единым визуальным и атмосферным сценарием. Не
                  отдельные элементы, а непрерывный маршрут.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="ix-reveal bg-[#141414]">
          <div className="mx-auto max-w-[1400px] px-8 py-3 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Атриум — центральная инсталляция
            </p>
          </div>
          <div
            className="ix-gal-img"
            style={{ height: "clamp(340px,60vw,780px)" }}
          >
            <img
              alt="Новогоднее оформление IKEA — вид на атриум"
              className="h-full w-full object-cover"
              src={IX.two}
            />
          </div>
          <div className="mx-auto max-w-[1400px] px-8 py-4 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Световые облака, центральная сцена, интерактивный поезд
            </p>
          </div>
        </div>

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="ix-reveal mb-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Масштаб требует
                  <br />
                  точности.
                </h2>
              </div>
            </div>
            <div className="ix-reveal ix-d1 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <p
                  className="mb-6 font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.6)" }}
                >
                  144 подвесных элемента — каждый с расчётом нагрузки, тросовой
                  системой и анкерным креплением. 37 напольных объекта, часть
                  из которых крупногабаритные конструкции собственного
                  производства.
                </p>
                <p
                  className="mb-8 font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.5)" }}
                >
                  Монтаж — в действующем торговом центре, только ночью. Три
                  недели без остановки работы объекта, с соблюдением сроков.
                </p>
                <div
                  className="grid grid-cols-2 gap-6 pt-8"
                  style={{ borderTop: "1px solid rgba(20,20,20,.08)" }}
                >
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-[#BFA37E]">
                      Конструкции
                    </p>
                    <p
                      className="font-mono text-[10px] uppercase leading-loose"
                      style={{ color: "rgba(20,20,20,.45)" }}
                    >
                      Тросовые системы, анкерные крепления, крупногабаритные
                      объекты
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-[#BFA37E]">
                      Производство
                    </p>
                    <p
                      className="font-mono text-[10px] uppercase leading-loose"
                      style={{ color: "rgba(20,20,20,.45)" }}
                    >
                      Собственное, под ключ, 10 недель
                    </p>
                  </div>
                </div>
              </div>
              <div className="ix-gal-img">
                <img
                  alt="Монтаж подвесных конструкций — крупный план"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "3/2" }}
                  src={IX.three}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="ix-reveal mb-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Видеть, слышать,
                  <br />
                  чувствовать.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Среда работает на всех уровнях восприятия — визуальном,
                  звуковом, тактильном и обонятельном. Посетитель не смотрит на
                  оформление — он находится внутри него.
                </p>
              </div>
            </div>

            <div
              className="ix-reveal ix-d1 grid grid-cols-1 gap-px md:grid-cols-2"
              style={{ background: "rgba(20,20,20,.07)" }}
            >
              <div className="p-10" style={{ background: "#F9F9F7" }}>
                <p className="mb-3 font-light text-base uppercase tracking-tight">
                  Интерактивный поезд
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  Эффект движения по расписанию, воспроизводит звук хода и
                  генерирует сертифицированный дым. Самостоятельный аттракцион
                  внутри атриума.
                </p>
              </div>

              <div className="p-10" style={{ background: "#F9F9F7" }}>
                <p className="mb-3 font-light text-base uppercase tracking-tight">
                  Свет через смартфон
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  Световые сценарии новогодних ёлок управляются посетителями с
                  личного телефона. Оформление реагирует на присутствие человека.
                </p>
              </div>

              <div className="p-10" style={{ background: "#F9F9F7" }}>
                <p className="mb-3 font-light text-base uppercase tracking-tight">
                  Единый световой сценарий
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  Распределённая световая система охватывает весь объект.
                  Атриум, галереи, внешние зоны — единое дыхание.
                </p>
              </div>

              <div className="p-10" style={{ background: "#F9F9F7" }}>
                <p className="mb-3 font-light text-base uppercase tracking-tight">
                  Ароматизация галерей
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  Разные запаховые сценарии в галереях: хвоя, корица, цитрус,
                  мята. Атмосфера, которую невозможно не запомнить.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="ix-reveal mb-12">
              <h2
                className="font-light uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(1.4rem,2vw,2rem)" }}
              >
                Проект в кадрах
              </h2>
            </div>

            <div className="ix-reveal mb-3 grid grid-cols-1 gap-3 md:grid-cols-5">
              <div className="ix-gal-img md:col-span-3">
                <img
                  alt="Атриум — общий план оформления"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/10" }}
                  src={mid(0)}
                />
              </div>
              <div className="ix-gal-img md:col-span-2">
                <img
                  alt="Световые облака над атриумом"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  src={mid(1)}
                />
              </div>
            </div>

            <div className="ix-reveal ix-d1 mb-3 grid grid-cols-1 gap-3 md:grid-cols-3">
              <div className="ix-gal-img">
                <img
                  alt="Напольная декорация — крупный план"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={mid(2)}
                />
              </div>
              <div className="ix-gal-img">
                <img
                  alt="Интерактивный поезд в атриуме"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={mid(3)}
                />
              </div>
              <div className="ix-gal-img">
                <img
                  alt="Новогодние ёлки с управлением через смартфон"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={mid(4)}
                />
              </div>
            </div>

            <div className="ix-reveal ix-d2 mb-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="ix-gal-img">
                <img
                  alt="Внешнее оформление фасада"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                  src={mid(5)}
                />
              </div>
              <div className="ix-gal-img">
                <img
                  alt="Галерея — световой сценарий"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                  src={mid(6)}
                />
              </div>
            </div>

            {IX.middle.length > 7 && (
              <div className="ix-reveal ix-d2 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {IX.middle.slice(7).map((src, idx) => (
                  <div key={src} className="ix-gal-img">
                    <img
                      alt={`Проект в кадрах — ${idx + 8}`}
                      className="h-full w-full object-cover"
                      style={{ aspectRatio: "4/3" }}
                      src={src}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="ix-reveal mb-16">
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
              className="ix-reveal grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4"
              style={{ background: "rgba(20,20,20,.07)" }}
            >
              <div className="p-10" style={{ background: "#F9F9F7" }}>
                <p className="mb-4 font-light text-lg uppercase tracking-tight">
                  Концепция
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  Единый пространственный сценарий для всего объекта — от
                  атриума до внешних зон
                </p>
              </div>

              <div className="p-10" style={{ background: "#F9F9F7" }}>
                <p className="mb-4 font-light text-lg uppercase tracking-tight">
                  Проектирование
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  Расчёт нагрузок, адаптация конструкций под объект, проработка
                  интерактивных систем
                </p>
              </div>

              <div className="p-10" style={{ background: "#F9F9F7" }}>
                <p className="mb-4 font-light text-lg uppercase tracking-tight">
                  Производство
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  181 объект собственного изготовления. 10 недель — от материала
                  до готовой конструкции
                </p>
              </div>

              <div className="p-10" style={{ background: "#F9F9F7" }}>
                <p className="mb-4 font-light text-lg uppercase tracking-tight">
                  Монтаж
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  3 недели ночных работ в действующем молле. Объект не
                  останавливался ни на день
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
              <div className="ix-reveal lg:col-span-5">
                <h2
                  className="mb-8 font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  +14% к трафику.
                  <br />
                  1 место в отрасли.
                </h2>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Посещаемость выросла на 14% по сравнению с предыдущим сезоном.
                  Время пребывания увеличилось. Проект получил награду 1 место,
                  как лучшее оформление молла.
                </p>
                <div className="mt-8">
                  <div
                    className="inline-flex items-center gap-[.6rem] border px-4 py-2 font-mono text-[.6rem] uppercase tracking-[.2em] text-[#BFA37E]"
                    style={{ borderColor: "rgba(191,163,126,.4)" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "13px" }}
                    >
                      workspace_premium
                    </span>
                    1 место — лучшее оформление молла, 2022–2023
                  </div>
                </div>
              </div>
              <div className="ix-reveal ix-d1 lg:col-span-6 lg:col-start-7">
                <div
                  className="grid grid-cols-2 gap-px"
                  style={{ background: "rgba(20,20,20,.07)" }}
                >
                  <div className="p-10" style={{ background: "#F0EFEB" }}>
                    <p
                      className="mb-2 font-light"
                      style={{
                        fontSize: "clamp(2.5rem,4vw,3.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      +14%
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      посещаемость сезона
                    </p>
                  </div>

                  <div className="p-10" style={{ background: "#F0EFEB" }}>
                    <p
                      className="mb-2 font-light"
                      style={{
                        fontSize: "clamp(2.5rem,4vw,3.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      181
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      изделие собственного производства
                    </p>
                  </div>

                  <div className="p-10" style={{ background: "#F0EFEB" }}>
                    <p
                      className="mb-2 font-light"
                      style={{
                        fontSize: "clamp(2.5rem,4vw,3.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      160.000
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      м² охваченного пространства
                    </p>
                  </div>

                  <div className="p-10" style={{ background: "#F0EFEB" }}>
                    <p
                      className="mb-2 font-light"
                      style={{
                        fontSize: "clamp(2.5rem,4vw,3.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      4
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      сенсорных уровня среды
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ position: "relative", background: "#141414", overflow: "hidden" }}>
          <div
            className="ix-gal-img"
            style={{ height: "clamp(420px,65vw,820px)" }}
          >
            <img
              alt="Новогоднее оформление IKEA — финальный кадр"
              className="h-full w-full object-cover"
              style={{ opacity: 0.45 }}
              src={IX.last}
            />
          </div>
          <div
            className="absolute inset-0 flex flex-col justify-center px-8 md:px-14"
            style={{ zIndex: 2 }}
          >
            <div className="ix-reveal mx-auto w-full max-w-[1400px]">
              <h2
                className="mb-10 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2rem,4.5vw,4rem)" }}
              >
                Это не декор.
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
                    Это среда, которая меняет поведение людей в вашем
                    пространстве
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "2rem", left: "2.5rem", zIndex: 2 }}>
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.25)" }}
            >
              Световой сценарий — весь объект, единая система
            </p>
          </div>
        </div>

        <section className="bg-[#F9F9F7] px-8 py-24 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div
              className="ix-reveal mb-20 border-b pb-20"
              style={{ borderColor: "rgba(20,20,20,.08)" }}
            >
              <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
                <div>
                  <h2
                    className="font-light leading-none tracking-tight"
                    style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}
                  >
                    Нужно комплексное оформление
                    <br />
                    вашего объекта?
                  </h2>
                </div>
                <Link to="/contact" className="ix-btn-cta flex-shrink-0">
                  Получить предложение за 48 часов
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
              className="ix-reveal grid grid-cols-1 gap-px md:grid-cols-2"
              style={{ background: "rgba(20,20,20,.06)" }}
            >
              <Link
                to="/projects"
                className="flex items-center gap-6 p-8 transition-colors duration-300"
                style={{ background: "#F9F9F7", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(20,20,20,.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F9F9F7";
                }}
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
                    Все проекты
                  </p>
                  <p className="font-light uppercase tracking-tight text-[#141414]">
                    Вернуться в архив
                  </p>
                </div>
              </Link>
              <Link
                to="/magicpiano"
                className="flex items-center justify-end gap-6 p-8 transition-colors duration-300"
                style={{ background: "#F9F9F7", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(20,20,20,.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F9F9F7";
                }}
              >
                <div className="text-right">
                  <p
                    className="mb-2 font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "rgba(20,20,20,.35)" }}
                  >
                    Следующий проект
                  </p>
                  <p className="font-light uppercase tracking-tight text-[#141414]">
                    Волшебное фортепиано
                  </p>
                </div>
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: "#BFA37E" }}
                >
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
