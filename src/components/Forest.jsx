import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Forest.css";

const IM = "/forest";

/** 0 — заставка; 1 — герой; 2 — крупный кадр; predposled / posled; остальное — середина + инженерия. */
export const FOREST_SPLASH = `${IM}/0-zastavka.jpg`;

const FR = {
  one: `${IM}/1-main.png`,
  two: `${IM}/2.png`,
  predposled: `${IM}/predposled.jpg`,
  last: `${IM}/posled.jpg`,
  middle: [
    `${IM}/img254210.jpg`,
    `${IM}/img254210.png`,
    `${IM}/img254211.jpg`,
    `${IM}/img254212.JPG`,
    `${IM}/img254213.JPG`,
    `${IM}/img254214.JPG`,
    `${IM}/img254215.JPG`,
    `${IM}/img254216.jpg`,
    `${IM}/img254217.jpg`,
    `${IM}/img254220.png`,
    `${IM}/img254221.jpg`,
    `${IM}/img254222.jpg`,
    `${IM}/img254224.jpg`,
    `${IM}/img254225.png`,
    `${IM}/img254230.jpg`,
  ],
};

const mid = (i) => FR.middle[i] ?? FR.middle[0];

export default function Forest() {
  const heroWrapRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    document.title = "monumforma — IKEA | Рождественский лес";
    return () => {
      document.title = "Monumforma";
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("fr-visible");
            obs.unobserve(x.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll("#forest-root .fr-reveal").forEach((el) => {
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
      id="forest-root"
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
            alt="Рождественский лес IKEA — световые деревья вдоль всей галереи"
            className="absolute left-0 top-0 z-0 h-full w-full object-cover will-change-transform"
            style={{ objectPosition: "center 40%" }}
            src={FR.one}
          />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(20,20,20,.92) 0%, rgba(20,20,20,.3) 55%, rgba(20,20,20,.15) 100%)",
            }}
          />
        </div>

        <div
          ref={heroVeilRef}
          className="pointer-events-none absolute inset-0 z-[15] bg-[#F9F9F7] opacity-0"
        />

        <div className="relative z-20 flex h-full w-full flex-col">
          <div className="fr-h0 absolute left-8 top-28 z-10 md:left-14">
            <p
              className="font-mono text-[9px] uppercase tracking-[.4em]"
              style={{ color: "rgba(255,255,255,.35)" }}
            >
              monumforma&nbsp;&nbsp;/&nbsp;&nbsp;Проекты&nbsp;&nbsp;/&nbsp;&nbsp;IKEA
              — Рождественский лес
            </p>
          </div>

          <div className="mt-auto mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-8 pb-16 md:px-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1
                className="fr-h1 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)" }}
              >
                Рождественский лес
              </h1>
              <p
                className="fr-h2 mt-4 font-light"
                style={{
                  color: "rgba(255,255,255,.45)",
                  fontSize: "clamp(.85rem,1.2vw,1rem)",
                  letterSpacing: ".02em",
                }}
              >
                Световая среда, которая продолжила работать после сезона
              </p>
            </div>
            <div className="fr-h2 flex flex-col gap-4 pb-2 lg:col-span-4 lg:col-start-9">
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
                    Площадь
                  </p>
                  <p className="font-light text-white">150 000 м²</p>
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
                    Световых изделий
                  </p>
                  <p className="font-light text-white">450+</p>
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
                className="fr-sl absolute inset-0"
                style={{ background: "#BFA37E" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="fr-page-content" className="relative z-[2] bg-[#F9F9F7]">
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
              <p className="font-light text-base leading-snug">
                Световое оформление
              </p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: border }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Площадь
              </p>
              <p className="font-light text-base">150 000 м²</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: border }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Световых изделий
              </p>
              <p className="font-light text-base">450+</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: border }}>
              <p
                className="mb-2 font-mono text-[8px] uppercase tracking-[.3em]"
                style={{ color: "rgba(20,20,20,.35)" }}
              >
                Производство
              </p>
              <p className="font-light text-base">10 недель</p>
            </div>
            <div className="border-r px-6 py-7" style={{ borderColor: border }}>
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
                Цикл
              </p>
              <p className="font-light text-base">Концепция — сервис</p>
            </div>
          </div>
        </div>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="fr-reveal lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Атмосфера — это не настроение. Это время пребывания в цифрах.
                </h2>
              </div>
              <div className="fr-reveal fr-d1 lg:col-span-7 lg:col-start-6">
                <p
                  className="mb-6 font-light leading-relaxed"
                  style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}
                >
                  Посетитель остаётся в торговом центре дольше ровно тогда, когда
                  в пространстве физически приятно находиться. Не «красиво» в
                  абстрактном смысле — а тепло, насыщенно, осязаемо и уютно. Это
                  измеряется в минутах, а минуты конвертируются в чеки.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.5)" }}
                >
                  Концепция рождественского леса превратила галерею в среду, в
                  которой хочется замедлиться. Колонны — световые деревья.
                  Потолок — плотный световой полог. Пространство перестало быть
                  коридором между магазинами и стало местом, где люди
                  останавливаются.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="fr-reveal bg-[#141414]">
          <div className="mx-auto max-w-[1400px] px-8 py-3 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Галерея — световые деревья на колоннах, плотный световой потолок
            </p>
          </div>
          <div
            className="fr-gal-img"
            style={{ height: "clamp(340px,60vw,780px)" }}
          >
            <img
              alt="Галерея IKEA — световые деревья и шары вдоль всего пространства"
              className="h-full w-full object-cover"
              src={FR.two}
            />
          </div>
          <div className="mx-auto max-w-[1400px] px-8 py-4 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              450+ световых изделий с электроподключением — единая среда от входа
              до атриума
            </p>
          </div>
        </div>

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="fr-reveal mb-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Сезонный бюджет, который не уходит вместе с сезоном.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Плетёные световые шары спроектированы с нейтральной эстетикой
                  намеренно. После окончания новогоднего сезона они остались в
                  интерьере и проработали ещё 6 месяцев как постоянный элемент
                  освещения. Часть праздничного бюджета конвертировалась в
                  долгосрочное улучшение среды — без дополнительных вложений.
                </p>
              </div>
            </div>

            <div
              className="fr-reveal fr-d1 grid grid-cols-1 gap-px md:grid-cols-3"
              style={{ background: "rgba(20,20,20,.07)" }}
            >
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-4 font-light text-base uppercase tracking-tight">
                  Световые деревья на колоннах
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".95rem", color: "rgba(20,20,20,.5)" }}
                >
                  Архитектурные элементы, которые невозможно игнорировать.
                  Колонны — обычно мёртвая зона в визуальной среде ТЦ —
                  превращены в вертикальный ритм, который ведёт взгляд и создаёт
                  эффект погружения в лес.
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-4 font-light text-base uppercase tracking-tight">
                  Световой потолок из подвесных элементов
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".95rem", color: "rgba(20,20,20,.5)" }}
                >
                  Крупные декор над головой — визуальный слой, который
                  структурирует пространство. Посетитель воспринимает себя внутри
                  продуманной среды, а не в проходном зале. Это ощущение уюта, оно
                  удерживает человека в пространстве.
                </p>
              </div>
              <div className="p-10" style={{ background: "#F0EFEB" }}>
                <p className="mb-4 font-light text-base uppercase tracking-tight">
                  Плетёные шары — постоянный актив
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: ".95rem", color: "rgba(20,20,20,.5)" }}
                >
                  Нейтральная форма, тёплый свет, без сезонной символики. После
                  Рождества — просто хорошее освещение. 6 месяцев дополнительной
                  работы без единого евро дополнительных затрат.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="fr-reveal mb-12">
              <h2
                className="font-light uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(1.4rem,2vw,2rem)" }}
              >
                Проект в кадрах
              </h2>
            </div>

            <div className="fr-reveal mb-3 grid grid-cols-1 gap-3 md:grid-cols-5">
              <div className="fr-gal-img md:col-span-3">
                <img
                  alt="Галерея IKEA — вид вдоль световых деревьев"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/10" }}
                  src={mid(1)}
                />
              </div>
              <div className="fr-gal-img md:col-span-2">
                <img
                  alt="Монтажник за работой — детальная сборка плетёного шара"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  src={mid(2)}
                />
              </div>
            </div>

            <div className="fr-reveal fr-d1 mb-3">
              <div className="fr-gal-img">
                <img
                  alt="Уличная инсталляция — главная ёлка и домики ночью"
                  className="w-full object-cover"
                  style={{ aspectRatio: "21/9" }}
                  src={mid(3)}
                />
              </div>
            </div>

            <div className="fr-reveal fr-d2 mb-3 grid grid-cols-1 gap-3 md:grid-cols-3">
              <div className="fr-gal-img">
                <img
                  alt="Детальная инсталляция в галерее"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={mid(4)}
                />
              </div>
              <div className="fr-gal-img">
                <img
                  alt="Плетёные световые шары — крупный план"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={mid(5)}
                />
              </div>
              <div className="fr-gal-img">
                <img
                  alt="Световые деревья на колоннах"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                  src={mid(6)}
                />
              </div>
            </div>

            {FR.middle.length > 7 && (
              <div className="fr-reveal fr-d2 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {FR.middle.slice(7).map((src, idx) => (
                  <div key={src} className="fr-gal-img">
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

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="fr-reveal mb-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2
                  className="font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  150 000 м². 3 недели. Ни одного закрытого часа.
                </h2>
              </div>
            </div>
            <div className="fr-reveal fr-d1 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <p
                  className="mb-6 font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.6)" }}
                >
                  Монтаж 450+ изделий в действующем торговом центре — только
                  ночью, только после закрытия, только без следов к утру.
                  Арендаторы не знали о работах. Посетители не видели
                  строительного процесса.
                </p>
                <p
                  className="mb-8 font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.5)" }}
                >
                  Это стало возможным за счёт системы plug&play: каждое изделие
                  приходит на объект готовым к подключению. Бригада не решает
                  технические головоломки на месте — она собирает. Скорость
                  монтажа и отсутствие ошибок заложены в конструкцию изделий, а не
                  в квалификацию ночной смены.
                </p>
                <div
                  className="grid grid-cols-2 gap-6 pt-8"
                  style={{ borderTop: "1px solid rgba(20,20,20,.08)" }}
                >
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-[#BFA37E]">
                      Энергопотребление
                    </p>
                    <p
                      className="font-mono text-[10px] uppercase leading-loose"
                      style={{ color: "rgba(20,20,20,.45)" }}
                    >
                      Энергоэффективные гирлянды — снижение операционных затрат
                      после запуска
                    </p>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-[#BFA37E]">
                      Подключение
                    </p>
                    <p
                      className="font-mono text-[10px] uppercase leading-loose"
                      style={{ color: "rgba(20,20,20,.45)" }}
                    >
                      Plug&play — унифицированные узлы, монтаж без ошибок,
                      скорость x2
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-gal-img">
                <img
                  alt="Монтажник — сборка плетёного шара с гирляндами"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "3/2" }}
                  src={mid(0)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F9F7] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="fr-reveal mb-16">
              <h2
                className="font-light uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
              >
                Один подрядчик.
                <br />
                Полный цикл. Включая сервис.
              </h2>
            </div>
            <div
              className="fr-reveal grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4"
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
                  Единая среда от входной группы до атриума. Каждый элемент —
                  часть системы, а не отдельное украшение. Отдельно принято
                  решение: что сезонное, что остаётся навсегда.
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
                  Все изделия разработаны по собственным чертежам. Расчёт
                  нагрузок, унификация узлов, адаптация под реальные точки
                  подвеса объекта — до начала производства, не на месте.
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
                  3 недели исключительно ночных работ. Объект работал в штатном
                  режиме. Утром — никаких следов монтажа, только готовая среда.
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
                  Постоянные элементы работают после сезона под нашей
                  ответственностью. Девелопер не занимается обслуживанием — мы за
                  это отвечаем.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F0EFEB] px-8 py-28 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
              <div className="fr-reveal lg:col-span-5">
                <h2
                  className="mb-8 font-light uppercase leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.6rem,2.2vw,2.2rem)" }}
                >
                  Среда стала премиальной. Аренда — дороже.
                </h2>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Рост времени пребывания за счёт насыщенной атмосферы. Повышение
                  привлекательности для арендаторов — среда ощущается как более
                  дорогой объект. Снижение операционных затрат через
                  энергоэффективные решения. Часть сезонного бюджета осталась
                  работать 6 месяцев после окончания праздников.
                </p>
              </div>
              <div className="fr-reveal fr-d1 lg:col-span-6 lg:col-start-7">
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
                      450+
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      световых изделий с электрикой
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
                      150.000
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      м² единой световой среды
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
                      +6 мес
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      плетёные шары работали после сезона
                    </p>
                  </div>
                  <div className="p-10" style={{ background: "#F0EFEB" }}>
                    <p
                      className="mb-2 font-light leading-tight"
                      style={{ fontSize: "clamp(1.1rem,1.5vw,1.4rem)" }}
                    >
                      Ноль часов
                      <br />
                      простоя
                    </p>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(20,20,20,.4)" }}
                    >
                      объект не останавливался при монтаже
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="fr-reveal bg-[#141414]">
          <div className="mx-auto max-w-[1400px] px-8 py-3 md:px-14">
            <p
              className="font-mono text-[8px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,.2)" }}
            >
              Предфинальный кадр
            </p>
          </div>
          <div
            className="fr-gal-img"
            style={{ height: "clamp(320px,55vw,680px)" }}
          >
            <img
              alt="Рождественский лес — кадр перед финалом"
              className="h-full w-full object-cover"
              src={FR.predposled}
            />
          </div>
        </div>

        <div style={{ position: "relative", background: "#141414", overflow: "hidden" }}>
          <div
            className="fr-gal-img"
            style={{ height: "clamp(420px,65vw,820px)" }}
          >
            <img
              alt="Рождественский лес IKEA — финальный кадр"
              className="h-full w-full object-cover"
              style={{ opacity: 0.4 }}
              src={FR.last}
            />
          </div>
          <div
            className="absolute inset-0 flex flex-col justify-center px-8 md:px-14"
            style={{ zIndex: 2 }}
          >
            <div className="fr-reveal mx-auto w-full max-w-[1400px]">
              <h2
                className="mb-10 font-light leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2rem,4.5vw,4rem)" }}
              >
                Атмосфера — это не эстетика. Это экономика.
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
                    Каждая минута, на которую посетитель задержался дольше — это
                    деньги арендатора и аргумент для вашей ставки
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
              450+ изделий — собственные чертежи, plug&play, полный цикл
            </p>
          </div>
        </div>

        <section className="bg-[#F9F9F7] px-8 py-24 md:px-14">
          <div className="mx-auto max-w-[1400px]">
            <div
              className="fr-reveal mb-20 border-b pb-20"
              style={{ borderColor: "rgba(20,20,20,.08)" }}
            >
              <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
                <div>
                  <h2
                    className="font-light leading-none tracking-tight"
                    style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}
                  >
                    Нужна световая среда,
                    <br />
                    которая работает дольше сезона?
                  </h2>
                </div>
                <Link to="/contact" className="fr-btn-cta flex-shrink-0">
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
              className="fr-reveal grid grid-cols-1 gap-px md:grid-cols-2"
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
                to="/ikea-park"
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
                    Парк IKEA
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
