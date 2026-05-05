import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./IkeaMall.css";

const IM = "/ikea-mall";

const GALLERY_FILES = [
  "IMG_1148.jpg",
  "IMG_1173.jpg",
  "IMG_1232.jpg",
  "IMG_1234.jpg",
  "IMG_12340.png",
  "IMG_12345.png",
  "IMG_12349.png",
  "IMG_123498.png",
  "IMG_1235.jpg",
  "IMG_1236.jpg",
  "IMG_1237.jpg",
  "IMG_1238.jpg",
  "IMG_1264.jpg",
  "IMG_1904.jpg",
  "IMG_1971.jpg",
];

const GALLERY_ALTS = [
  "Фонари IKEA — внешняя зона ночью",
  "Световые листья и звёзды в атриуме",
  "Галерея — звёзды STRÅLA и гирлянды",
  "Подвесные кольцевые системы на колоннах",
  "Авторские световые листья — крупный план",
  "Гирлянды plug&play — детали производства",
];

export default function IkeaMall() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — IKEA | Световое оформление";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("im-visible");
            obs.unobserve(x.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#ikea-mall-root .im-reveal").forEach((el) => {
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

  const g = GALLERY_FILES.map((f) => `${IM}/${f}`);
  const alt = (i) =>
    GALLERY_ALTS[i] ?? `Проект IKEA — кадр ${i + 1}`;

  return (
    <div
      id="ikea-mall-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      <div
        ref={heroWrapRef}
        id="im-hero-sticky-wrap"
        className="sticky top-0 z-[1] flex h-screen w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={heroBgRef}
            alt="Световое оформление IKEA — фонари снаружи"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 45%" }}
            src={`${IM}/it1.jpg`}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(20,20,20,.92) 0%, rgba(20,20,20,.35) 55%, rgba(20,20,20,.2) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="im-h0 absolute left-8 top-28 z-10 md:left-14">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.35)" }}
            >
              monumforma&nbsp;&nbsp;/&nbsp;&nbsp;Проекты&nbsp;&nbsp;/&nbsp;&nbsp;IKEA
              — Световое оформление
            </p>
          </div>

          <div className="mt-auto mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-8 pb-16 md:px-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1
                className="im-h1 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)" }}
              >
                Световое
                <br />
                оформление IKEA
              </h1>
              <p
                className="im-h2 mt-4 font-light"
                style={{
                  color: "rgba(255,255,255,.45)",
                  fontSize: "clamp(.85rem,1.2vw,1rem)",
                  letterSpacing: ".02em",
                }}
              >
                Комплексная световая система — внутри и снаружи, 157 000 м²
              </p>
            </div>
            <div className="im-h2 flex flex-col gap-4 pb-2 lg:col-span-4 lg:col-start-9 lg:mt-14">
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
                    Элементы
                  </p>
                  <p className="font-light text-white">
                    ~ 500+ световых элементов
                  </p>
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
                    Сборка
                  </p>
                  <p className="font-light text-white">
                    Модульная система plug&play
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
                className="im-sl absolute inset-0"
                style={{ background: "#BFA37E" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="im-page-content" className="relative z-[2] bg-[#F9F9F7]">
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
                Световое оформление
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
              <p className="font-light text-base">157 000 м²</p>
            </div>
            <div
              className="border-r px-6 py-7"
              style={{ borderColor: "rgba(20,20,20,.07)" }}
            >
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Световых изделий
              </p>
              <p className="font-light text-base">500+</p>
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
            <div
              className="border-r px-6 py-7"
              style={{ borderColor: "rgba(20,20,20,.07)" }}
            >
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
            <div className="py-7 pl-6">
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Сборка
              </p>
              <p className="font-light text-base">Система plug&play</p>
            </div>
          </div>
        </div>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="im-reveal lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Сезон закончится.
                  <br />
                  Объект — останется.
                </h2>
              </div>
              <div className="im-reveal im-d1 lg:col-span-7 lg:col-start-6">
                <p
                  className="mb-6 font-light leading-relaxed"
                  style={{
                    fontSize: "1.05rem",
                    color: "rgba(20,20,20,.65)",
                  }}
                >
                  Большинство праздничных оформлений — расход. Демонтировал,
                  выбросил, повторил на следующий год. Мы проектировали иначе:
                  часть решений изначально создавалась как постоянная
                  инфраструктура объекта.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.5)" }}
                >
                  Световые листья и кольцевые световые системы на колоннах в
                  атриуме работают круглый год. Бюджет сезона частично
                  конвертировался в долгосрочный актив.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="im-reveal bg-[#141414]">
          <div className="mx-auto max-w-[1400px] px-8 py-3 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Внешняя зона — фонари IKEA и световые объекты
            </p>
          </div>
          <div
            className="im-gal-img"
            style={{ height: "clamp(340px,60vw,780px)" }}
          >
            <img
              alt="Световые фонари IKEA — внешняя зона в ночи"
              className="h-full w-full object-cover"
              src={`${IM}/it2.png`}
            />
          </div>
          <div className="mx-auto max-w-[1400px] px-8 py-4 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Авторские фонари и символика бренда в масштабе архитектуры
            </p>
          </div>
        </div>

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="im-reveal mb-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Узнаваемость —
                  <br />
                  это не логотип.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Посетитель должен понимать, куда он идёт, ещё до входа. И
                  помнить, где был — после.
                  <br />
                  Три зоны, три задачи — один характер.
                </p>
              </div>
            </div>

            <div
              className="im-reveal im-d1 grid grid-cols-1 gap-px md:grid-cols-3"
              style={{ background: "rgba(20,20,20,.07)" }}
            >
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-3 font-light text-base uppercase tracking-tight">
                  Снаружи
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  Крупноформатные фонари и фигура серии STRÅLA — за 200 метров
                  понятно, что здесь IKEA. Визуальный магнит, а не просто
                  подсветка фасада.
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-3 font-light text-base uppercase tracking-tight">
                  В галерее
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  Звёзды STRÅLA — прямой визуальный код IKEA внутри ТЦ.
                  Посетитель видит не просто оформление, а бренд в масштабе
                  архитектуры.
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-3 font-light text-base uppercase tracking-tight">
                  В атриуме
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  Авторские световые листья — уникальный элемент проекта.
                  Формируют визуальный акцент и узнаваемость, оставаясь в
                  пространстве после сезона как постоянная часть среды.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="im-reveal mb-12">
              <h2
                className="font-light uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(1.4rem,2vw,2rem)" }}
              >
                Проект в кадрах
              </h2>
            </div>

            <div className="im-reveal mb-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="im-gal-img">
                <img
                  alt={alt(0)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  src={g[0]}
                />
              </div>
              <div className="im-gal-img">
                <img
                  alt={alt(1)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  src={g[1]}
                />
              </div>
            </div>

            <div className="im-reveal mb-3 im-d1">
              <div className="im-gal-img">
                <img
                  alt={alt(2)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "21/9" }}
                  src={g[2]}
                />
              </div>
            </div>

            <div className="im-reveal im-d2 mb-3 grid grid-cols-1 gap-3 md:grid-cols-3">
              <div className="im-gal-img">
                <img
                  alt={alt(3)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={g[3]}
                />
              </div>
              <div className="im-gal-img">
                <img
                  alt={alt(4)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={g[4]}
                />
              </div>
              <div className="im-gal-img">
                <img
                  alt={alt(5)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={g[5]}
                />
              </div>
            </div>

            <div className="im-reveal mb-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="im-gal-img">
                <img
                  alt={alt(6)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  src={g[6]}
                />
              </div>
              <div className="im-gal-img">
                <img
                  alt={alt(7)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  src={g[7]}
                />
              </div>
            </div>

            <div className="im-reveal mb-3 im-d1">
              <div className="im-gal-img">
                <img
                  alt={alt(8)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "21/9" }}
                  src={g[8]}
                />
              </div>
            </div>

            <div className="im-reveal im-d2 grid grid-cols-1 gap-3 md:grid-cols-3">
              <div className="im-gal-img">
                <img
                  alt={alt(9)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={g[9]}
                />
              </div>
              <div className="im-gal-img">
                <img
                  alt={alt(10)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={g[10]}
                />
              </div>
              <div className="im-gal-img">
                <img
                  alt={alt(11)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={g[11]}
                />
              </div>
            </div>

            <div className="im-reveal mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
              <div className="im-gal-img md:col-span-1">
                <img
                  alt={alt(12)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={g[12]}
                />
              </div>
              <div className="im-gal-img md:col-span-1">
                <img
                  alt={alt(13)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={g[13]}
                />
              </div>
              <div className="im-gal-img md:col-span-1">
                <img
                  alt={alt(14)}
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={g[14]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="im-reveal mb-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Объект не
                  <br />
                  останавливался.
                </h2>
              </div>
            </div>
            <div className="im-reveal im-d1 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <p
                  className="mb-6 font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.6)" }}
                >
                  Монтаж 500+ изделий и тысяч гирлянд в действующем торговом
                  центре. Всё — ночью, без остановки работы молла, ровно в срок.
                  Три недели в режиме, когда ошибка стоит дорого.
                </p>
                <p
                  className="mb-8 font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.5)" }}
                >
                  Это стало возможным за счёт системы plug&play: унифицированные
                  узлы подключения разработаны заранее, бригада не решает
                  головоломки на месте — она просто собирает.
                </p>
                <div
                  className="grid grid-cols-2 gap-6 pt-8"
                  style={{ borderTop: "1px solid rgba(20,20,20,.08)" }}
                >
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-primary">
                      Нагрузки
                    </p>
                    <p
                      className="font-mono text-[10px] uppercase leading-loose"
                      style={{ color: "rgba(20,20,20,.45)" }}
                    >
                      Расчёт на каждую точку подвеса, тросовые системы, анкеры
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-primary">
                      Скорость
                    </p>
                    <p
                      className="font-mono text-[10px] uppercase leading-loose"
                      style={{ color: "rgba(20,20,20,.45)" }}
                    >
                      Унификация узлов сократила монтажное время в 2 раза
                    </p>
                  </div>
                </div>
              </div>
              <div className="im-gal-img">
                <img
                  alt="Монтаж подвесных конструкций в галерее"
                  className="w-full h-auto"
                  src={`${IM}/predposled.png`}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="im-reveal mb-16">
              <h2
                className="font-light uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
              >
                Один подрядчик.
                <br />
                Полный цикл.
              </h2>
            </div>
            <div
              className="im-reveal grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4"
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
                  Гибридное решение: что уходит после сезона, что остаётся
                  навсегда — разграничено до начала производства
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
                  Каждое изделие — по чертежу. Никаких «подберём на месте».
                  Нагрузки рассчитаны, узлы унифицированы до производства
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
                  500+ изделий, 10 недель. Каждое — с электрикой, готово к
                  подключению. На объект приезжает не груз, а система
                </p>
              </div>
              <div className="p-10" style={{ background: "#F9F9F7" }}>
                <p className="mb-4 font-light text-lg uppercase tracking-tight">
                  Сервис
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}
                >
                  Полный цикл включает сервисное обслуживание после сдачи.
                  Постоянные элементы работают — мы за это отвечаем
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
              <div className="im-reveal lg:col-span-5">
                <h2
                  className="mb-8 font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Конкуренты рядом.
                  <br />
                  Трафик — здесь.
                </h2>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  +35% к посещаемости относительно сопоставимых объектов в той
                  же зоне охвата. Рост арендной ставки выше рынка. Качество
                  арендаторов улучшилось — следствие изменившегося восприятия
                  объекта.
                </p>
              </div>
              <div className="im-reveal im-d1 lg:col-span-6 lg:col-start-7">
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
                      +35%
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      трафик vs аналоги в окружении
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
                      ~500K€
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      бюджет проекта под ключ
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
                      157K
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      м² — весь объект в системе
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F0EFEB" }}>
                    <p
                      className="mb-2 font-light leading-tight"
                      style={{
                        fontSize: "clamp(1.1rem,1.5vw,1.4rem)",
                      }}
                    >
                      Аренда
                      <br />
                      выше рынка
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      рост ставки после запуска
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="relative overflow-hidden bg-[#141414]"
          style={{ position: "relative" }}
        >
          <div
            className="im-gal-img"
            style={{ height: "clamp(420px,65vw,820px)" }}
          >
            <img
              alt="Световое оформление IKEA — финальный кадр"
              className="h-full w-full object-cover"
              style={{ opacity: 0.4 }}
              src={`${IM}/posledn.jpg`}
            />
          </div>
          <div
            className="absolute inset-0 flex flex-col justify-center px-8 md:px-14"
            style={{ zIndex: 2 }}
          >
            <div className="im-reveal mx-auto w-full max-w-[1400px]">
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
                    Это световая инфраструктура, которая работает на стоимость
                    вашего объекта
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 z-[2] md:left-14 md:bottom-8">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.25)" }}
            >
              Авторские световые листья — атриум, постоянная инсталляция
            </p>
          </div>
        </div>

        <section className="bg-[#F9F9F7] px-8 py-24 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div
              className="im-reveal mb-20 border-b pb-20"
              style={{ borderColor: "rgba(20,20,20,.08)" }}
            >
              <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
                <div>
                  <h2
                    className="font-light leading-none tracking-tight"
                    style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}
                  >
                    Нужна световая система
                    <br />
                    для вашего объекта?
                  </h2>
                </div>
                <Link
                  to="/contact"
                  className="im-btn-cta flex-shrink-0"
                >
                  Получить оценку за 24 часа
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 16 }}
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="im-reveal grid grid-cols-1 gap-px md:grid-cols-2"
              style={{ background: "rgba(20,20,20,.06)" }}
            >
              <Link
                to="/projects"
                className="flex items-center gap-6 bg-[#F9F9F7] p-8 transition-colors hover:bg-[rgba(20,20,20,.02)]"
                style={{ textDecoration: "none" }}
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
                to="/projects"
                className="flex items-center justify-end gap-6 bg-[#F9F9F7] p-8 transition-colors hover:bg-[rgba(20,20,20,.02)]"
                style={{ textDecoration: "none" }}
              >
                <div className="text-right">
                  <p
                    className="mb-2 font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "rgba(20,20,20,.35)" }}
                  >
                    Следующий проект
                  </p>
                  <p className="font-light uppercase tracking-tight text-[#141414]">
                    IKEA — Новогоднее оформление
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
