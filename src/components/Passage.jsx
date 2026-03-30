import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Passage.css";

const IM = "/passage";

// 0 — заставка в раздел где все проекты
export const PASSAGE_SPLASH = `${IM}/0-zastavka.jpg`;

// 1 — первая фото (hero)
// 2 — вторая фото
// predposled / posled — отдельные блоки перед финалом
// остальное — "Проект в кадрах"
const PS = {
  hero: `${IM}/1-hero.jpg`,
  second: `${IM}/2.png`,
  predposled: `${IM}/mid4.jpg`,
  last: `${IM}/posled.jpg`,
  middle: [
    `${IM}/mid1.png`,
    `${IM}/mid2.jpg`,
    `${IM}/mid3.png`,
    `${IM}/mid5.jpg`,
  ],
};

export default function Passage() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — Невский пассаж | Временная инсталляция";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ps-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    document
      .querySelectorAll("#passage-root .ps-reveal")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Hero — как в Manifest.jsx: параллакс + нарастание veil
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

  const border = "rgba(20,20,20,.07)";

  const m = PS.middle;
  // Gallery (минимально повторяет layout из HTML; картинки берём из middle)
  const galleryRow1 = { left: m[0], right: m[1] };
  const galleryRow2 = m[3] || m[2];
  const galleryRow3 = [m[2], m[0], m[1]].filter(Boolean).slice(0, 3);

  return (
    <div
      id="passage-root"
      className="font-display overflow-x-hidden text-[#141414]"
      style={{ background: "#F9F9F7" }}
    >
      <Header />

      <div
        ref={heroWrapRef}
        className="sticky top-0 z-[1] flex h-screen min-h-[100dvh] w-full flex-col overflow-hidden will-change-[transform,opacity]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0e0e0c]">
          <img
            ref={heroBgRef}
            alt="Невский пассаж — подвесная инсталляция из сфер"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 30%" }}
            src={PS.hero}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(14,14,12,.95) 0%, rgba(14,14,12,.3) 45%, rgba(14,14,12,.15) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="ps-h0 absolute left-8 top-28 z-10 md:left-14">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.3)" }}
            >
              monumforma&nbsp;&nbsp;/&nbsp;&nbsp;Проекты&nbsp;&nbsp;/&nbsp;&nbsp;Невский
              пассаж
            </p>
          </div>

          <div className="mt-auto mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-8 pb-16 md:px-14 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7 ps-h1">
              <p
                className="font-mono text-[9px] uppercase tracking-[.3em] mb-5"
                style={{ color: "#BFA37E" }}
              >
                Временная инсталляция
              </p>
              <h1
                className="font-light text-white leading-none tracking-tight"
                style={{ fontSize: "clamp(2.8rem,6vw,5.5rem)" }}
              >
                Невский
                <br />
                пассаж
              </h1>
              <p
                className="font-light mt-5"
                style={{
                  color: "rgba(255,255,255,.4)",
                  fontSize: "clamp(.85rem,1.1vw,.95rem)",
                  letterSpacing: ".03em",
                  maxWidth: "34rem",
                }}
              >
                Подвесная композиция из зеркальных и тонированных сфер в
                пространстве исторической торговой галереи Санкт-Петербурга
              </p>
            </div>

            <div className="ps-h2 flex flex-col gap-5 pb-1 lg:col-span-4 lg:col-start-9 lg:mt-14">
              <div className="flex gap-4">
                <div
                  className="w-px flex-shrink-0 self-stretch"
                  style={{ background: "rgba(191,163,126,.25)" }}
                />
                <div>
                  <p
                    className="font-mono text-[8px] uppercase tracking-widest mb-1"
                    style={{ color: "rgba(255,255,255,.28)" }}
                  >
                    Особенность проекта
                  </p>
                  <p className="font-light text-white" style={{ fontSize: ".9rem" }}>
                    Исторический объект XIX века
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-px flex-shrink-0 self-stretch"
                  style={{ background: "rgba(191,163,126,.25)" }}
                />
                <div>
                  <p
                    className="font-mono text-[8px] uppercase tracking-widest mb-1"
                    style={{ color: "rgba(255,255,255,.28)" }}
                  >
                    Тип
                  </p>
                  <p className="font-light text-white" style={{ fontSize: ".9rem" }}>
                    Подвесная инсталляция
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
              <div className="ps-sl absolute inset-0" style={{ background: "#BFA37E" }} />
            </div>
          </div>
        </div>
      </div>

      <div id="ps-page-content" className="relative z-[2] bg-[#F9F9F7]">
        {/* ПАРАМЕТРЫ — узкая полоса */}
        <div
          className="border-b"
          style={{ background: "#EEECEA", borderColor: border }}
        >
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-8 md:grid-cols-4 md:px-14">
            <div className="border-r py-7 pr-6" style={{ borderColor: border }}>
              <p
                className="font-mono text-[8px] uppercase tracking-[.3em] mb-2"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Формат
              </p>
              <p className="font-light text-base leading-snug">
                Подвесная инсталляция
              </p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: border }}>
              <p
                className="font-mono text-[8px] uppercase tracking-[.3em] mb-2"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Среда
              </p>
              <p className="font-light text-base">Историческая галерея</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: border }}>
              <p
                className="font-mono text-[8px] uppercase tracking-[.3em] mb-2"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Элементы
              </p>
              <p className="font-light text-base">Сферы разных диаметров</p>
            </div>
            <div className="px-6 py-7">
              <p
                className="font-mono text-[8px] uppercase tracking-[.3em] mb-2"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Цикл
              </p>
              <p className="font-light text-base">Под ключ</p>
            </div>
          </div>
        </div>

        {/* 3 · Текст + верхняя секция */}
        <section className="ps-3 py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-4 ps-reveal">
                <span
                  className="block w-[2.5rem] h-[1px] bg-[#BFA37E] mb-6"
                  aria-hidden="true"
                />
                <h2
                  className="font-light uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Архитектура диктует. Инсталляция слушает.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 ps-reveal ps-d1">
                <p
                  className="font-light leading-relaxed mb-6"
                  style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}
                >
                  Невский пассаж — памятник торговой архитектуры конца XIX века.
                  Стеклянный свод, классические фасады, мраморный пол.
                  Пространство с сильной собственной идентичностью не нуждается в
                  перекрытии — ему нужен точный акцент на нужной высоте.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.5)" }}
                >
                  Подвесная инсталляция из зеркальных и тонированных сфер
                  выстроена вдоль центральной оси галереи. Она не спорит с
                  архитектурой — она работает в её ритме, поддерживает
                  перспективу и добавляет визуальный слой, не перегружая
                  исторический интерьер.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 · Крупный панорамный кадр */}
        <div style={{ background: "#0e0e0c" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-3">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.18)" }}
            >
              Вид вдоль оси галереи — инсталляция формирует перспективу и
              удерживает взгляд
            </p>
          </div>
          <div className="ps-gal-img ps-reveal" style={{ height: "clamp(360px,58vw,780px)" }}>
            <img
              alt="Невский пассаж — панорамный вид вдоль галереи со сферами"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
              src={PS.second}
            />
          </div>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-4">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.18)" }}
            >
              Сферы разных диаметров — от малых прозрачных до крупных
              зеркальных и тонированных в синем
            </p>
          </div>
        </div>

        {/* 5 · Концепция — три принципа */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#EEECEA" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-16 ps-reveal">
              <div className="lg:col-span-4">
                <span
                  className="block w-[2.5rem] h-[1px] bg-[#BFA37E] mb-6"
                  aria-hidden="true"
                />
                <h2
                  className="font-light uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Деликатность как метод.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 ps-reveal ps-d1">
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Работа в исторической среде требует точности в решениях. Каждый
                  элемент — от диаметра сфер до плотности кластеров — рассчитан
                  так, чтобы усиливать архитектуру, а не перебивать её. Результат
                  читается как органичная часть пространства.
                </p>
              </div>
            </div>

            <div
              className="grid md:grid-cols-3 gap-px ps-reveal ps-d1"
              style={{ background: "rgba(20,20,20,.08)" }}
            >
              <div className="p-10" style={{ background: "#EEECEA" }}>
                <p
                  className="font-mono text-[8px] uppercase tracking-[.3em] mb-5"
                  style={{ color: "#BFA37E" }}
                >
                  01
                </p>
                <p className="font-light text-base mb-4 uppercase tracking-tight">
                  Интеграция в геометрию
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".92rem", color: "rgba(20,20,20,.5)" }}
                >
                  Кластеры сфер расположены по центральной оси пролётов — в
                  соответствии с ритмом галереи. Плотность и масштаб элементов
                  выверены по перспективе: крупные сферы ближе к зрителю, мелкие
                  уходят в глубину.
                </p>
              </div>
              <div className="p-10" style={{ background: "#EEECEA" }}>
                <p
                  className="font-mono text-[8px] uppercase tracking-[.3em] mb-5"
                  style={{ color: "#BFA37E" }}
                >
                  02
                </p>
                <p className="font-light text-base mb-4 uppercase tracking-tight">
                  Работа с отражением
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".92rem", color: "rgba(20,20,20,.5)" }}
                >
                  Зеркальные поверхности воспроизводят архитектуру галереи —
                  классические фасады, стеклянный свод, свет. Пространство
                  визуально расширяется. Каждая сфера становится точкой нового
                  восприятия.
                </p>
              </div>
              <div className="p-10" style={{ background: "#EEECEA" }}>
                <p
                  className="font-mono text-[8px] uppercase tracking-[.3em] mb-5"
                  style={{ color: "#BFA37E" }}
                >
                  03
                </p>
                <p className="font-light text-base mb-4 uppercase tracking-tight">
                  Цвет без доминирования
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".92rem", color: "rgba(20,20,20,.5)" }}
                >
                  Насыщенный синий акцентирует глубину и добавляет цветовой
                  контраст к белому классическому интерьеру. Использован точечно —
                  чтобы не перебить нейтральную архитектурную среду.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 · Проект в кадрах */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="ps-reveal mb-12">
              <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: "clamp(1.4rem,2vw,2rem)" }}>
                Проект в кадрах
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3 ps-reveal">
              <div className="ps-gal-img md:col-span-4">
                <img
                  alt="Невский пассаж — сферы крупным планом"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={galleryRow1.left}
                />
              </div>
              <div className="ps-gal-img md:col-span-8">
                <img
                  alt="Невский пассаж — вид вдоль галереи с кластером сфер"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3", height: "100%" }}
                  src={galleryRow1.right}
                />
              </div>
            </div>

            <div className="mb-3 ps-reveal ps-d1">
              <div className="ps-gal-img">
                <img
                  alt="Невский пассаж — общий вид галереи"
                  className="w-full object-cover"
                  style={{ aspectRatio: "21/9" }}
                  src={galleryRow2}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ps-reveal ps-d2">
              {galleryRow3.map((src, i) => (
                <div key={src + i} className="ps-gal-img">
                  <img
                    alt={`Невский пассаж — кадр ${i + 1}`}
                    className="w-full object-cover"
                    style={{ aspectRatio: "3/4" }}
                    src={src}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7 · Эффект (лента) */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#EEECEA" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-16 ps-reveal">
              <div className="lg:col-span-4">
                <span
                  className="block w-[2.5rem] h-[1px] bg-[#BFA37E] mb-6"
                  aria-hidden="true"
                />
                <h2
                  className="font-light uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Действующий объект. Монтаж без остановки.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 ps-reveal ps-d1">
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Невский пассаж — живой торговый объект с непрерывным потоком
                  посетителей. Монтаж подвесной системы выполнен без закрытия
                  галереи: крепёж интегрирован в существующие конструкции свода без
                  капитального вмешательства.
                </p>
              </div>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-px ps-reveal ps-d1"
              style={{ background: "rgba(20,20,20,.08)" }}
            >
              <div className="p-10" style={{ background: "#EEECEA" }}>
                <p className="font-light text-base mb-4 uppercase tracking-tight">
                  Композиция
                </p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}>
                  Расстановка кластеров рассчитана по осям пролётов. Диаметры и плотность — по перспективе и высотам подвеса.
                </p>
              </div>
              <div className="p-10" style={{ background: "#EEECEA" }}>
                <p className="font-light text-base mb-4 uppercase tracking-tight">
                  Конструкция
                </p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}>
                  Лёгкая подвесная система с точечным крепежом. Полностью обратимое решение для исторического объекта.
                </p>
              </div>
              <div className="p-10" style={{ background: "#EEECEA" }}>
                <p className="font-light text-base mb-4 uppercase tracking-tight">
                  Производство
                </p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}>
                  Сферы изготовлены по типоразмерам, заданным в проектной документации. Покрытие в заданной цветовой гамме.
                </p>
              </div>
              <div className="p-10" style={{ background: "#EEECEA" }}>
                <p className="font-light text-base mb-4 uppercase tracking-tight">
                  Монтаж
                </p>
                <p className="font-light leading-relaxed" style={{ fontSize: ".9rem", color: "rgba(20,20,20,.5)" }}>
                  Работы скоординированы с арендаторами и управляющей компанией. Без остановки пешеходного потока.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8 · Фото предфинал + блок "цифры" (2 колонки) */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 ps-reveal">
                <span
                  className="block w-[2.5rem] h-[1px] bg-[#BFA37E] mb-8"
                  aria-hidden="true"
                />
                <h2
                  className="font-light uppercase tracking-tight leading-none mb-8"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Среда изменилась. Архитектура осталась собой.
                </h2>
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.55)" }}>
                  Инсталляция повысила визуальный статус галереи и сформировала новые точки притяжения без единого капитального изменения.
                </p>
              </div>

              <div className="lg:col-span-6 lg:col-start-7 ps-reveal ps-d1">
                <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(20,20,20,.07)" }}>
                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p className="font-light mb-2 leading-tight" style={{ fontSize: "clamp(1.1rem,1.5vw,1.4rem)" }}>
                      Премиальная<br />
                      среда
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      инсталляция поддерживает статус объекта
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p className="font-light mb-2 leading-tight" style={{ fontSize: "clamp(1.1rem,1.5vw,1.4rem)" }}>
                      Фотосценарий<br />
                      внутри
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      органический UGC и точка притяжения
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p className="font-light mb-2" style={{ fontSize: "clamp(2.5rem,4vw,3.5rem)", lineHeight: 1 }}>
                      0
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      вмешательств в историческую архитектуру
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F9F9F7" }}>
                    <p className="font-light mb-2 leading-tight" style={{ fontSize: "clamp(1.1rem,1.5vw,1.4rem)" }}>
                      Гибкость<br />
                      и сезонность
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.4)" }}>
                      формат позволяет обновлять среду регулярно
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* predposled — отдельный фото-блок перед финалом */}
        <div style={{ background: "#0e0e0c" }}>
          <div className="ps-gal-img ps-reveal" style={{ height: "clamp(360px,58vw,780px)" }}>
            <img
              alt="Невский пассаж — кадр перед финалом"
              className="w-full h-full object-cover"
              style={{ opacity: 0.85 }}
              src={PS.predposled}
            />
          </div>
        </div>

        {/* posled — финальный тёмный блок */}
        <div style={{ position: "relative", background: "#0e0e0c", overflow: "hidden" }}>
          <div className="ps-gal-img ps-reveal" style={{ height: "clamp(420px,65vw,860px)" }}>
            <img
              alt="Невский пассаж — атмосферный финальный кадр"
              className="w-full h-full object-cover"
              style={{ opacity: 0.38 }}
              src={PS.last}
            />
          </div>
          <div
            className="absolute inset-0 flex flex-col justify-center px-8 md:px-14"
            style={{ zIndex: 2 }}
          >
            <div className="max-w-[1400px] mx-auto w-full ps-reveal">
              <h2 className="font-light text-white leading-none tracking-tight mb-10" style={{ fontSize: "clamp(1.6rem,4.5vw,3rem)" }}>
                Историческая среда.<br />
                Деликатное решение.<br />
                Точный результат.
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px flex-shrink-0" style={{ background: "#BFA37E" }} />
                  <p className="font-light" style={{ color: "rgba(255,255,255,.55)", fontSize: "clamp(.9rem,1.2vw,1.05rem)" }}>
                    Полный цикл — от концепции до демонтажа
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px flex-shrink-0" style={{ background: "rgba(191,163,126,.3)" }} />
                  <p className="font-light" style={{ color: "rgba(255,255,255,.3)", fontSize: "clamp(.9rem,1.2vw,1.05rem)" }}>
                    Без вмешательств в архитектуру объекта
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* posled — подпись внизу */}
          <div style={{ position: "absolute", bottom: "2rem", left: "2.5rem", zIndex: 2 }}>
            <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,.18)" }}>
              Невский пассаж — Санкт-Петербург
            </p>
          </div>
        </div>

        {/* финал/CTA */}
        <section className="py-24 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div
              className="ps-reveal mb-20 pb-20 border-b"
              style={{ borderColor: "rgba(20,20,20,.08)" }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <div>
                  <h2
                    className="font-light tracking-tight leading-none"
                    style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}
                  >
                    Есть историческое или премиальное пространство?
                    <br />
                    Создадим инсталляцию, которая его усилит.
                  </h2>
                </div>
                <Link to="/contact" className="ps-btn-cta flex-shrink-0">
                  Обсудить проект
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-px ps-reveal"
              style={{ background: "rgba(20,20,20,.06)" }}
            >
              <Link
                to="/projects"
                className="flex items-center gap-6 p-8"
                style={{
                  background: "#F9F9F7",
                  textDecoration: "none",
                  transition: "background .3s",
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
                    className="font-mono text-[9px] uppercase tracking-widest mb-2"
                    style={{ color: "rgba(20,20,20,.35)" }}
                  >
                    Все проекты
                  </p>
                  <p className="font-light uppercase tracking-tight">Вернуться в архив</p>
                </div>
              </Link>

              <Link
                to="/raddison"
                className="flex items-center justify-end gap-6 p-8"
                style={{
                  background: "#F9F9F7",
                  textDecoration: "none",
                  transition: "background .3s",
                }}
              >
                <div className="text-right">
                  <p
                    className="font-mono text-[9px] uppercase tracking-widest mb-2"
                    style={{ color: "rgba(20,20,20,.35)" }}
                  >
                    Следующий проект
                  </p>
                  <p className="font-light uppercase tracking-tight">
                    Матрёшки — Radisson Collection
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

