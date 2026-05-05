import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./IkeaPark.css";

/** Ассеты из `Updated/! №6 Парк IKEA` → `public/ikea-park` */
const IM = "/ikea-park";

/** 0 — заставка в архиве; 1 — герой; 2 — крупный кадр; posled — финал; остальное — «Проект в кадрах». */
export const IKEA_PARK_SPLASH = `${IM}/0-zastavka.jpg`;

const IP = {
  one: `${IM}/1-main.jpg`,
  two: `${IM}/2.jpg`,
  last: `${IM}/posled.jpg`,
  middle: [
    `${IM}/DP0A5961-10.18.33.jpg`,
    `${IM}/GE2A29360.jpg`,
    `${IM}/GE2A29369.png`,
    `${IM}/GE2A2958.jpg`,
    `${IM}/GE2A2994.jpg`,
    `${IM}/GE2A2996.jpg`,
    `${IM}/GE2A3021.jpg`,
    `${IM}/GE2A3027.jpg`,
  ],
};

const mid = (i) => IP.middle[i] ?? IP.middle[0];

export default function IkeaPark() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — IKEA | Парк";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("ip-visible");
            obs.unobserve(x.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#ikea-park-root .ip-reveal").forEach((el) => {
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

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

  return (
    <div
      id="ikea-park-root"
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
            alt="Парк IKEA — арт-объекты из переработанного пластика"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 50%" }}
            src={IP.one}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(20,20,20,.9) 0%, rgba(20,20,20,.3) 55%, rgba(20,20,20,.15) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="ip-h0 absolute left-8 top-28 z-10 md:left-14">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.35)" }}
            >
              monumforma&nbsp;&nbsp;/&nbsp;&nbsp;Проекты&nbsp;&nbsp;/&nbsp;&nbsp;Парк
              IKEA
            </p>
          </div>

          <div className="mt-auto mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-8 pb-16 md:px-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1
                className="ip-h1 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)" }}
              >
                Парк IKEA
              </h1>
              <p
                className="ip-h2 mt-4 font-light"
                style={{
                  color: "rgba(255,255,255,.45)",
                  fontSize: "clamp(.85rem,1.2vw,1rem)",
                  letterSpacing: ".02em",
                }}
              >
                Уличная инсталляция, которая превратила транзитную зону в причину
                приехать
              </p>
            </div>
            <div className="ip-h2 flex flex-col gap-4 pb-2 lg:col-span-4 lg:col-start-9">
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
                    Объекты
                  </p>
                  <p className="font-light text-white">58 фигур</p>
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
                    Режим
                  </p>
                  <p className="font-light text-white">Круглогодичный</p>
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
                className="ip-sl absolute inset-0"
                style={{ background: "#BFA37E" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="ip-page-content" className="relative z-[2] bg-[#F9F9F7]">
        <div
          className="border-b"
          style={{ background: "#F0EFEB", borderColor: border }}
        >
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-8 md:grid-cols-6 md:px-14">
            <div className="border-r py-7 pr-6" style={{ borderColor: border }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Тип
              </p>
              <p className="font-light text-base leading-snug">Арт-инсталляция</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: border }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Формат
              </p>
              <p className="font-light text-base">Public space, улица</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: border }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Объектов
              </p>
              <p className="font-light text-base">58 фигур</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: border }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Материал
              </p>
              <p className="font-light text-base">Переработанный пластик</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: border }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Режим
              </p>
              <p className="font-light text-base">Круглогодичный</p>
            </div>
            <div className="py-7 pl-6">
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Цикл
              </p>
              <p className="font-light text-base">Концепция — монтаж</p>
            </div>
          </div>
        </div>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="ip-reveal lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Онлайн забрал у ТЦ повод приехать.
                  <br />
                  Это — возвращает его.
                </h2>
              </div>
              <div className="ip-reveal ip-d1 lg:col-span-7 lg:col-start-6">
                <p
                  className="mb-6 font-light leading-relaxed"
                  style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}
                >
                  Человек не едет в торговый центр «просто так». Ему нужен повод,
                  который экран не заменит — место, в котором хочется быть
                  физически, к которому хочется вернуться не за товаром, а за
                  ощущением.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.65)" }}
                >
                  58 фигур из переработанного пластика — слоны, лисы, улитки в
                  человеческий рост и выше — превратили территорию перед моллом в
                  такое место. Не аттракцион с билетами. Не временная акция.
                  Постоянная городская точка, которая день за днем меняет
                  поведение аудитории вокруг объекта.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="ip-reveal bg-[#141414]">
          <div className="mx-auto max-w-[1400px] px-8 py-3 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Физический контакт — намеренно заложен в форму
            </p>
          </div>
          <div
            className="ip-gal-img"
            style={{ height: "clamp(340px,60vw,780px)" }}
          >
            <img
              alt="Ребёнок верхом на синем слоне — арт-объект из переработанного пластика"
              className="h-full w-full object-cover"
              src={IP.two}
            />
          </div>
          <div className="mx-auto max-w-[1400px] px-8 py-4 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Объекты рассчитаны на эксплуатацию — залезть, обнять,
              сфотографироваться
            </p>
          </div>
        </div>

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="ip-reveal mb-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Девелопер платит один раз. Механика работает постоянно.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Четыре экономических эффекта, которые запускаются одновременно
                  — и не требуют поддержки после запуска.
                </p>
              </div>
            </div>

            <div
              className="ip-reveal ip-d1 grid grid-cols-1 gap-px md:grid-cols-2"
              style={{ background: "rgba(20,20,20,.07)" }}
            >
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-4 font-light text-base uppercase tracking-tight">
                  Новая аудитория без рекламного бюджета
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".95rem", color: "rgba(20,20,20,.55)" }}
                >
                  Семьи с детьми и локальные жители — аудитория, у которой раньше
                  не было повода приехать именно сюда. Эти люди не конкурируют с
                  вашим существующим трафиком — они добавляются к нему. И
                  возвращаются регулярно, независимо от сезона и акций.
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-4 font-light text-base uppercase tracking-tight">
                  Посетитель заходит внутрь уже готовым тратить
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".95rem", color: "rgba(20,20,20,.55)" }}
                >
                  Человек, который провёл 20 минут снаружи — с детьми, с
                  удовольствием, в хорошем настроении — заходит в ТЦ в другом
                  состоянии, чем тот, кто приехал по делу. Импульсная покупка в
                  этом состоянии не случайность. Это физиология.
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-4 font-light text-base uppercase tracking-tight">
                  Медиаохват, который не отключается
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".95rem", color: "rgba(20,20,20,.55)" }}
                >
                  Яркий цвет, масштаб выше человеческого роста, возможность
                  физического контакта — три условия, при которых люди достают
                  телефон сами. Каждое фото в соцсетях — охват без CPM. Этот
                  канал работает пока стоит объект.
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-4 font-light text-base uppercase tracking-tight">
                  Аргумент при следующей индексации аренды
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".95rem", color: "rgba(20,20,20,.55)" }}
                >
                  Трафик у входной группы — измеримый показатель. Когда он растёт
                  устойчиво, арендатор в этой точке видит это в своей выручке.
                  Девелопер получает не красивую территорию, а обоснование для
                  роста ставки на конкретных позициях.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="ip-reveal mb-12">
              <h2
                className="font-light uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(1.4rem,2vw,2rem)" }}
              >
                Проект в кадрах
              </h2>
            </div>

            <div className="ip-reveal mb-3 grid grid-cols-1 gap-3 md:grid-cols-5">
              <div className="ip-gal-img md:col-span-3">
                <img
                  alt="Общий план парка — фигуры на территории перед IKEA"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/10" }}
                  src={mid(0)}
                />
              </div>
              <div className="ip-gal-img md:col-span-2">
                <img
                  alt="Зелёная лиса — арт-объект из переработанного пластика"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  src={mid(1)}
                />
              </div>
            </div>

            <div className="ip-reveal ip-d1 mb-3">
              <div className="ip-gal-img">
                <img
                  alt="Ребёнок на синем слоне — взаимодействие с объектом"
                  className="w-full object-cover"
                  style={{ aspectRatio: "21/9" }}
                  src={mid(2)}
                />
              </div>
            </div>

            <div className="ip-reveal ip-d2 mb-3 grid grid-cols-1 gap-3 md:grid-cols-3">
              <div className="ip-gal-img">
                <img
                  alt="Упакованные фигуры перед отправкой"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={mid(3)}
                />
              </div>
              <div className="ip-gal-img">
                <img
                  alt="Фигура в парке — крупный план"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={mid(4)}
                />
              </div>
              <div className="ip-gal-img">
                <img
                  alt="Посетители в парке — взаимодействие с объектами"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={mid(5)}
                />
              </div>
            </div>

            {IP.middle.length > 6 && (
              <div className="ip-reveal ip-d2 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2">
                {IP.middle.slice(6).map((src, idx) => (
                  <div key={src} className="ip-gal-img">
                    <img
                      alt={`Проект в кадрах — ${idx + 7}`}
                      className="h-full w-full object-cover"
                      style={{ aspectRatio: "16/9" }}
                      src={src}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="ip-reveal lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Переработанный пластик. Эксплуатационное решение.
                </h2>
              </div>
              <div className="ip-reveal ip-d1 lg:col-span-7 lg:col-start-6">
                <p
                  className="mb-6 font-light leading-relaxed"
                  style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}
                >
                  Переработанный пластик выбран потому, что объект эксплуатируется
                  круглый год под открытым небом — солнце, влажность, тысячи
                  касаний в день. Материал выбран под эти условия: не требует
                  замены элементов, не требует сервисного обслуживания.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.65)" }}
                >
                  Экологический контекст считывается без пояснений. Для
                  ESG-отчётности девелопера — это готовая строка. Для
                  коммуникации с аудиторией — уже встроенная история.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="ip-reveal mb-16">
              <h2
                className="font-light uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
              >
                Маршрут,
                <br />
                а не расстановка объектов.
              </h2>
            </div>
            <div
              className="ip-reveal grid grid-cols-1 gap-px md:grid-cols-3"
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
                  Территория спроектирована как сценарий движения: каждая фигура
                  создаёт следующую точку интереса и ведёт посетителя к входу.
                  Человек идёт сам — и не замечает, что пространство его
                  направляет.
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
                  Размещение, масштаб, угол разворота каждой фигуры рассчитаны под
                  реальный пешеходный поток. Ни одна фигура не стоит «просто так»
                  — каждая выполняет функцию в маршруте.
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
                  Установка без остановки работы территории. Объект и парковка
                  функционировали в штатном режиме весь период монтажа — без
                  ограждений, без закрытых зон, без потерянного трафика.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
              <div className="ip-reveal lg:col-span-5">
                <h2
                  className="mb-8 font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Территория перестала быть затратой. Она стала активом.
                </h2>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Парк стал самостоятельным поводом приехать к объекту — без
                  акций, без рекламы, без сезонной привязки. Устойчивый
                  органический контент. Повторные визиты аудитории, которая раньше
                  не была целевой. Рост активности у входной группы.
                </p>
              </div>
              <div className="ip-reveal ip-d1 lg:col-span-6 lg:col-start-7">
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
                      58
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      арт-объектов на территории
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
                      365
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      дней в году — без сезонной зависимости
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F0EFEB" }}>
                    <p
                      className="mb-2 font-light leading-tight"
                      style={{
                        fontSize: "clamp(1.1rem,1.5vw,1.4rem)",
                      }}
                    >
                      25% прироста
                      <br />
                      трафика
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      у входной группы
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
                      0
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      расходы на обслуживание
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ position: "relative", background: "#141414", overflow: "hidden" }}>
          <div
            className="ip-gal-img"
            style={{ height: "clamp(420px,65vw,820px)" }}
          >
            <img
              alt="Парк IKEA — финальный кадр"
              className="h-full w-full object-cover"
              style={{ opacity: 0.45 }}
              src={IP.last}
            />
          </div>
          <div
            className="absolute inset-0 flex flex-col justify-center px-8 md:px-14"
            style={{ zIndex: 2 }}
          >
            <div className="ip-reveal mx-auto w-full max-w-[1400px]">
              <h2
                className="mb-10 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(1.6rem,4.5vw,3rem)" }}
              >
                Площадь перед вашим объектом — это медиа.
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
                    Вопрос только в том, работает ли оно на вас — или просто
                    существует
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
              58 объектов — переработанный пластик, круглогодичная эксплуатация
            </p>
          </div>
        </div>

        <section className="bg-[#F9F9F7] px-8 py-24 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div
              className="ip-reveal mb-20 border-b pb-20"
              style={{ borderColor: "rgba(20,20,20,.08)" }}
            >
              <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
                <div>
                  <h2
                    className="font-light leading-none tracking-tight"
                    style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}
                  >
                    Есть территория, которая пока
                    <br />
                    не работает на ваш объект?
                  </h2>
                </div>
                <Link to="/contact" className="ip-btn-cta flex-shrink-0">
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
              className="ip-reveal grid grid-cols-1 gap-px md:grid-cols-2"
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
                to="/ikea-mall"
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
                    IKEA — Световое оформление
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
