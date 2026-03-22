import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ArchitecturalProcess() {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (index) => {
    setOpenStep(openStep === index ? null : index);
  };

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="font-display"
      style={{ background: "#F9F9F7", color: "#141414" }}
    >
      <style>{`
        @keyframes heroFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .hero-text   { animation: heroFadeUp 1.4s cubic-bezier(.16,1,.3,1) both; }
        .hero-text-1 { animation: heroFadeUp 1.4s .15s cubic-bezier(.16,1,.3,1) both; }
        .hero-text-2 { animation: heroFadeUp 1.4s .3s cubic-bezier(.16,1,.3,1) both; }
        .hero-text-3 { animation: heroFadeUp 1.4s .45s cubic-bezier(.16,1,.3,1) both; }

        .reveal { opacity:0; transform:translateY(28px); transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1); }
        .reveal.visible { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.1s} .d2{transition-delay:.2s} .d3{transition-delay:.3s}

        .step-item { transition:background .3s; }
        .step-item:hover { background:rgba(191,163,126,.05); }
        .step-detail { max-height:0; overflow:hidden; transition:max-height .5s cubic-bezier(.4,0,.2,1); }
        .step-detail.open { max-height: 500px; }
        .step-toggle { transition:transform .4s cubic-bezier(.16,1,.3,1); }
        .step-item.open .step-toggle { transform: rotate(45deg); }

        .fac-card { transition:background .35s,border-color .35s; position:relative; }
        .fac-card::after { content:''; position:absolute; bottom:0; left:0; width:0; height:2px; background:#BFA37E; transition:width .5s cubic-bezier(.16,1,.3,1); }
        .fac-card:hover { background:rgba(255,255,255,.06) !important; border-color:rgba(191,163,126,.25) !important; }
        .fac-card:hover::after { width:100%; }

        .mat-item { transition:background .35s; }
        .mat-item:hover { background:rgba(191,163,126,.06); }

        .btn-cta { display:inline-flex; align-items:center; gap:1rem; font-family:'Roboto Mono',monospace; font-size:.65rem; letter-spacing:.2em; text-transform:uppercase; background:#BFA37E; color:#141414; padding:1rem 2rem; text-decoration:none; border:1px solid #BFA37E; transition:background .3s,color .3s; }
        .btn-cta:hover { background:transparent; color:#141414; }

        #intro-section { background:#F9F9F7; min-height:100vh; display:flex; align-items:center; padding:28px 3.5rem 5rem; }
        #intro-photo { position:relative; }
        #intro-photo img {
          width:100%;
          height:auto;
          display:block;
          box-shadow: 0 40px 100px rgba(20,20,20,.13), 0 8px 32px rgba(20,20,20,.08);
        }
      `}</style>

      <section id="intro-section" className="pt-8">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div
              className="lg:col-span-6 reveal"
              style={{ marginTop: "-3rem" }}
            >
              <h1
                className="font-light leading-[1.05] tracking-tight mb-8"
                style={{
                  fontSize: "clamp(2.4rem,4.5vw,4.8rem)",
                  color: "#141414",
                }}
              >
                Advanced Engineering:
                <br />
                <span style={{ fontStyle: "italic", color: "#BFA37E" }}>
                  От алгоритма до реализации.
                </span>
              </h1>
              <p
                className="font-light leading-relaxed"
                style={{
                  fontSize: "clamp(1rem,1.4vw,1.1rem)",
                  color: "rgba(20,20,20,.5)",
                  maxWidth: "480px",
                }}
              >
                Проектирование сложных пространственных структур с
                использованием параметрических методов и современных стандартов
                надёжности.
              </p>
              <div
                className="flex gap-10 mt-12 pt-8 border-t"
                style={{ borderColor: "rgba(20,20,20,.08)" }}
              >
                <div>
                  <span
                    className="font-light text-xl leading-none"
                    style={{ color: "#141414" }}
                  >
                    06
                  </span>
                  <span
                    className="font-mono text-[8px] block mt-1 uppercase tracking-widest"
                    style={{ color: "rgba(20,20,20,.32)" }}
                  >
                    Этапов цикла
                  </span>
                </div>
                <div>
                  <span
                    className="font-light text-xl leading-none"
                    style={{ color: "#141414" }}
                  >
                    12
                  </span>
                  <span
                    className="font-mono text-[8px] block mt-1 uppercase tracking-widest"
                    style={{ color: "rgba(20,20,20,.32)" }}
                  >
                    Партнёрских фабрик
                  </span>
                </div>
                <div>
                  <span
                    className="font-light text-xl leading-none"
                    style={{ color: "#141414" }}
                  >
                    2009
                  </span>
                  <span
                    className="font-mono text-[8px] block mt-1 uppercase tracking-widest"
                    style={{ color: "rgba(20,20,20,.32)" }}
                  >
                    Год основания
                  </span>
                </div>
              </div>
            </div>

            <div
              className="lg:col-span-5 lg:col-start-8 reveal d2"
              id="intro-photo"
              style={{ padding: "2rem 0" }}
            >
              <img
                alt="Инженерия и эстетика"
                src="/assets/engineering_intro.png"
                style={{
                  boxShadow:
                    "0 40px 100px rgba(20,20,20,.13), 0 8px 32px rgba(20,20,20,.08)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div id="page-content">
        <section
          className="py-28 px-8 md:px-14"
          style={{ background: "#F9F9F7", color: "#141414" }}
        >
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-start">
            <div className="relative group sticky top-32 reveal">
              <img
                alt="Generative Design"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyVRLjxwBFDjdiIQmiWSt2UCvAmsQfbWOR8ofnOJ3Koxy02C0gCCC9IlSay-oz9dS8qTuoZJaJp1X5qCFeETncy4Np27xBLvn1WavkZ4-VshVr83ALo05FCFz9WkD5HwEbvozjZoQsa5KLBX_8KXtZUWBFTQ4Kyni5LeIToib3qL0N-DdDHNeUK4Rr8sIlb0l_qfr5UBQvcY07oRLr7WFOoE7ntwYwL6lIHUAGC11rluwLKZbpDRflxk_d8lgoaoTAz8IIsVkFKxTZ"
              />
            </div>
            <div className="space-y-16 reveal d1">
              <div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-5">
                  Концепция и метод
                </span>
                <h2
                  className="font-light tracking-tight leading-none mb-8"
                  style={{
                    fontSize: "clamp(2.4rem,4vw,3.8rem)",
                    color: "#141414",
                  }}
                >
                  Как мы думаем
                  <br />
                  над задачей
                </h2>
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: "1.1rem", color: "rgba(20,20,20,.55)" }}
                >
                  Каждый объект начинается с анализа места, функции и нагрузки.
                  Художественная идея формируется параллельно с техническими
                  ограничениями — не после.
                </p>
              </div>
              <div
                className="grid grid-cols-1 gap-px"
                style={{ background: "rgba(20,20,20,.06)" }}
              >
                <div className="p-8" style={{ background: "#F9F9F7" }}>
                  <h4
                    className="text-xl font-light tracking-tight mb-3"
                    style={{ color: "#141414" }}
                  >
                    Анализ контекста
                  </h4>
                  <p
                    className="font-mono text-[11px] uppercase leading-relaxed"
                    style={{ color: "rgba(20,20,20,.45)" }}
                  >
                    Ветровые потоки, освещённость, пешеходный трафик — все
                    данные о месте становятся параметрами формы до начала
                    проектирования.
                  </p>
                </div>
                <div className="p-8" style={{ background: "#F9F9F7" }}>
                  <h4
                    className="text-xl font-light tracking-tight mb-3"
                    style={{ color: "#141414" }}
                  >
                    Параметрическое моделирование
                  </h4>
                  <p
                    className="font-mono text-[11px] uppercase leading-relaxed"
                    style={{ color: "rgba(20,20,20,.45)" }}
                  >
                    Параметрические инструменты применяются для структурирования
                    геометрии и подготовки производственной документации. Модель
                    становится основой для раскроя и спецификаций.
                  </p>
                </div>
                <div className="p-8" style={{ background: "#F9F9F7" }}>
                  <h4
                    className="text-xl font-light tracking-tight mb-3"
                    style={{ color: "#141414" }}
                  >
                    Редефиниция пространства
                  </h4>
                  <p
                    className="font-mono text-[11px] uppercase leading-relaxed"
                    style={{ color: "rgba(20,20,20,.45)" }}
                  >
                    Финальная стадия перевода математической модели в
                    эмоциональный опыт. Сценарии взаимодействия, меняющие
                    восприятие привычной среды.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-28 px-8 md:px-14"
          style={{ background: "#252523" }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 reveal">
              <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-5">
                Производственная база
              </span>
              <h2
                className="font-light uppercase tracking-tight leading-none mb-8"
                style={{
                  fontSize: "clamp(2.4rem,4vw,3.8rem)",
                  color: "#F9F9F7",
                }}
              >
                Три цеха.
                <br />
                Двенадцать фабрик.
                <br />
                Один стандарт.
              </h2>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{ color: "rgba(255,255,255,.5)", fontSize: "1rem" }}
              >
                Большинство студий проектируют — и передают производство на
                сторону. Мы работаем иначе. Три собственных цеха и сеть из 12
                проверенных партнёрских фабрик в Европе — всё под единым
                авторским надзором. Заказчик подписывает один договор и получает
                один результат: объект, который выглядит так же, как на
                утверждённом рендере.
              </p>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
              style={{ background: "rgba(255,255,255,.04)" }}
            >
              <div
                className="fac-card p-10 border border-transparent reveal"
                style={{ background: "#303030" }}
              >
                <h3
                  className="text-2xl font-light uppercase tracking-tight mb-5"
                  style={{ color: "#F9F9F7" }}
                >
                  Металлообработка
                </h3>
                <p
                  className="font-mono text-[11px] uppercase leading-loose"
                  style={{ color: "rgba(255,255,255,.45)" }}
                >
                  Сталь, алюминий, кортен, нержавеющая сталь. Лазерная резка,
                  гибка, сварка, шлифовка. Антикоррозийная обработка и
                  подготовка поверхностей.
                </p>
              </div>
              <div
                className="fac-card p-10 border border-transparent reveal d1"
                style={{ background: "#303030" }}
              >
                <h3
                  className="text-2xl font-light uppercase tracking-tight mb-5"
                  style={{ color: "#F9F9F7" }}
                >
                  Смолы и композиты
                </h3>
                <p
                  className="font-mono text-[11px] uppercase leading-loose"
                  style={{ color: "rgba(255,255,255,.45)" }}
                >
                  Ручное и вакуумное формование. Стеклопластик, углеткань,
                  эпоксидные и полиэфирные смолы. Литьё прозрачных и цветных
                  смол для декоративных и функциональных элементов.
                </p>
              </div>
              <div
                className="fac-card p-10 border border-transparent reveal d2"
                style={{ background: "#303030" }}
              >
                <h3
                  className="text-2xl font-light uppercase tracking-tight mb-5"
                  style={{ color: "#F9F9F7" }}
                >
                  Цифровое производство
                </h3>
                <p
                  className="font-mono text-[11px] uppercase leading-loose"
                  style={{ color: "rgba(255,255,255,.45)" }}
                >
                  CNC-фрезерование, подготовка мастер-моделей и форм. Точная
                  обработка элементов сложной геометрии и многокомпонентных
                  конструкций.
                </p>
              </div>
              <div
                className="fac-card p-10 border border-transparent reveal"
                style={{ background: "#303030" }}
              >
                <h3
                  className="text-2xl font-light uppercase tracking-tight mb-5"
                  style={{ color: "#F9F9F7" }}
                >
                  Световые системы
                </h3>
                <p
                  className="font-mono text-[11px] uppercase leading-loose"
                  style={{ color: "rgba(255,255,255,.45)" }}
                >
                  Производство световых конструкций. Интеграция LED-систем.
                  Программирование DMX и Madrix для динамического и
                  медиа-освещения.
                </p>
              </div>
              <div
                className="fac-card p-10 border border-transparent reveal d1"
                style={{ background: "#303030" }}
              >
                <h3
                  className="text-2xl font-light uppercase tracking-tight mb-5"
                  style={{ color: "#F9F9F7" }}
                >
                  Покраска и чистовая сборка
                </h3>
                <p
                  className="font-mono text-[11px] uppercase leading-loose"
                  style={{ color: "rgba(255,255,255,.45)" }}
                >
                  Многоступенчатая подготовка поверхностей. Промышленная
                  покраска и защитные покрытия. Финальная сборка объектов и
                  контроль качества.
                </p>
              </div>
              <div
                className="fac-card p-10 border border-transparent reveal d2"
                style={{ background: "#303030" }}
              >
                <h3
                  className="text-2xl font-light uppercase tracking-tight mb-5"
                  style={{ color: "#F9F9F7" }}
                >
                  Логистика и монтаж
                </h3>
                <p
                  className="font-mono text-[11px] uppercase leading-loose"
                  style={{ color: "rgba(255,255,255,.45)" }}
                >
                  Подготовка объектов к транспортировке. Упаковка и доставка
                  крупногабаритных элементов. Координация и монтаж на площадке.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-24 px-8 md:px-14"
          style={{ background: "#F9F9F7", color: "#141414" }}
        >
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center reveal">
            <div>
              <h2
                className="font-light uppercase tracking-tight leading-none mb-8"
                style={{
                  fontSize: "clamp(2rem,3.5vw,3.2rem)",
                  color: "#141414",
                }}
              >
                Производственная сеть,
                <br />
                выстроенная за 17 лет.
              </h2>
              <p
                className="font-light leading-relaxed mb-10"
                style={{ color: "rgba(20,20,20,.55)", fontSize: "1rem" }}
              >
                За годы работы monumforma сформировала устойчивую сеть из 12
                специализированных фабрик в Европе — каждая отобрана под
                конкретный материал и технологию. Для заказчика это означает
                предсказуемое качество на любом объёме и в любой географии.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-primary border-b pb-px"
                style={{ borderColor: "rgba(191,163,126,.4)" }}
              >
                Обсудить производственные возможности
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div
              className="grid grid-cols-2 gap-px"
              style={{ background: "rgba(20,20,20,.07)" }}
            >
              <div className="mat-item p-8" style={{ background: "#F9F9F7" }}>
                <h4
                  className="font-light uppercase tracking-tight mb-3"
                  style={{ color: "#BFA37E", fontSize: "1rem" }}
                >
                  Металл / Сталь
                </h4>
                <p
                  className="font-mono text-[10px] uppercase leading-loose"
                  style={{ color: "rgba(20,20,20,.4)" }}
                >
                  Corten, алюминий. Несущая способность, прецизионная резка.
                </p>
              </div>
              <div className="mat-item p-8" style={{ background: "#F9F9F7" }}>
                <h4
                  className="font-light uppercase tracking-tight mb-3"
                  style={{ color: "#BFA37E", fontSize: "1rem" }}
                >
                  Композиты
                </h4>
                <p
                  className="font-mono text-[10px] uppercase leading-loose"
                  style={{ color: "rgba(20,20,20,.4)" }}
                >
                  Смолы, стеклопластик. Бесшовная пластика, лёгкость и
                  прочность.
                </p>
              </div>
              <div className="mat-item p-8" style={{ background: "#F9F9F7" }}>
                <h4
                  className="font-light uppercase tracking-tight mb-3"
                  style={{ color: "#BFA37E", fontSize: "1rem" }}
                >
                  Свет / LED
                </h4>
                <p
                  className="font-mono text-[10px] uppercase leading-loose"
                  style={{ color: "rgba(20,20,20,.4)" }}
                >
                  DMX, RGB. Интерактивные сценарии, архитектурная подсветка.
                </p>
              </div>
              <div className="mat-item p-8" style={{ background: "#F9F9F7" }}>
                <h4
                  className="font-light uppercase tracking-tight mb-3"
                  style={{ color: "#BFA37E", fontSize: "1rem" }}
                >
                  CNC / Цифра
                </h4>
                <p
                  className="font-mono text-[10px] uppercase leading-loose"
                  style={{ color: "rgba(20,20,20,.4)" }}
                >
                  Фрезерование, точная обработка сложной геометрии.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="process"
          className="py-28 px-8 md:px-14"
          style={{ background: "#252523" }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4 reveal">
                <h2
                  className="font-light uppercase tracking-tight leading-none mb-8"
                  style={{
                    fontSize: "clamp(2.2rem,3.5vw,3.2rem)",
                    color: "#F9F9F7",
                  }}
                >
                  Цикл
                  <br />
                  реализации
                </h2>
                <p
                  className="font-mono text-[11px] uppercase leading-loose mb-10"
                  style={{ color: "rgba(255,255,255,.4)" }}
                >
                  Шесть этапов с фиксированным результатом на каждом. Ни один
                  этап не начинается без качественного завершения предыдущего.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 flex-shrink-0"
                      style={{ background: "rgba(191,163,126,.4)" }}
                    ></div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,.35)" }}
                    >
                      Анализ среды
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 flex-shrink-0"
                      style={{ background: "rgba(191,163,126,.4)" }}
                    ></div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,.35)" }}
                    >
                      Параметрическое моделирование
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 flex-shrink-0"
                      style={{ background: "rgba(191,163,126,.4)" }}
                    ></div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,.35)" }}
                    >
                      Технический аудит
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 flex-shrink-0"
                      style={{ background: "rgba(191,163,126,.4)" }}
                    ></div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,.35)" }}
                    >
                      Высокотехнологичная реализация
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 flex-shrink-0"
                      style={{ background: "rgba(191,163,126,.4)" }}
                    ></div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,.35)" }}
                    >
                      Контроль качества
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 flex-shrink-0"
                      style={{ background: "rgba(191,163,126,.4)" }}
                    ></div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,.35)" }}
                    >
                      Монтаж и запуск
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="lg:col-span-8 reveal d1"
                style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}
              >
                {[
                  {
                    title: "Анализ среды и постановка задачи",
                    content:
                      "3D-сканирование площадки, анализ ветровых и снеговых нагрузок, исследование пешеходных потоков и условий освещённости. Все данные о месте становятся параметрами формы до начала проектирования. Техническое задание фиксируется до старта любой проектной работы.",
                  },
                  {
                    title: "Параметрическое моделирование",
                    subtitle: "(Parametric Design)",
                    content:
                      "Rhino + Grasshopper: параметрическая модель управляет геометрией, раскроем и сборкой. Алгоритмическая оптимизация веса конструкций и расхода материалов. Точная стоимость изготовления фиксируется до старта производства — никаких доплат за сложность формы.",
                  },
                  {
                    title: "Технический аудит и соответствие стандартам",
                    content:
                      "Расчёты конструктивной надёжности ведутся с опорой на международные стандарты (Eurocodes). Полный комплект рабочей документации: деталировочные чертежи, спецификации узлов, схемы сборки. Документация передаётся в производство в формате, исключающем разночтения.",
                  },
                  {
                    title: "Высокотехнологичная реализация",
                    subtitle: "(Implementation)",
                    content:
                      "Лазерная резка с ЧПУ, пятиосевая фрезеровка, роботизированная сварка. Производство ведётся на собственных мощностях или у проверенных партнёров — под постоянным авторским надзором студии. Единая точка контакта по срокам и статусу на всём этапе изготовления.",
                  },
                  {
                    title: "Контроль качества",
                    content:
                      "Перед отправкой на объект каждый узел проходит выходной контроль: геометрия, покрытия, сборка, световые и механические системы. Дефекты устраняются на производстве — не на площадке заказчика.",
                  },
                  {
                    title: "Монтаж и запуск",
                    content:
                      "Монтажная бригада студии работает по согласованному графику с минимальным вмешательством в жизнь объекта заказчика. Подключаем инженерные и медиа-системы, проводим пусконаладку, передаём объект с инструкцией по эксплуатации.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`step-item border-b cursor-pointer ${openStep === index ? "open" : ""}`}
                    style={{ borderColor: "rgba(255,255,255,.07)" }}
                    onClick={() => toggleStep(index)}
                  >
                    <div className="grid grid-cols-12 gap-4 items-center py-6 px-2">
                      <div className="col-span-10">
                        <h4
                          className="text-lg font-light uppercase tracking-tight"
                          style={{ color: "#F9F9F7" }}
                        >
                          {step.title}{" "}
                          {step.subtitle && (
                            <span
                              style={{
                                color: "rgba(255,255,255,.3)",
                                fontSize: ".8em",
                              }}
                            >
                              {step.subtitle}
                            </span>
                          )}
                        </h4>
                      </div>
                      <div className="col-span-2 flex justify-end">
                        <span
                          className="step-toggle material-symbols-outlined text-lg"
                          style={{ color: "#BFA37E" }}
                        >
                          add
                        </span>
                      </div>
                    </div>
                    <div
                      className={`step-detail ${openStep === index ? "open" : ""}`}
                    >
                      <p
                        className="px-2 pb-6 max-w-xl font-mono text-[11px] uppercase leading-loose"
                        style={{ color: "rgba(255,255,255,.4)" }}
                      >
                        {step.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-28 px-8 md:px-14"
          style={{ background: "#eeede9", color: "#141414" }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 reveal">
              <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-5">
                Инженерные решения
              </span>
              <h2
                className="font-light uppercase tracking-tight leading-none"
                style={{
                  fontSize: "clamp(2.2rem,3.5vw,3.2rem)",
                  color: "#141414",
                }}
              >
                Три проекта.
                <br />
                Три инженерных вызова.
              </h2>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-px"
              style={{ background: "rgba(20,20,20,.07)" }}
            >
              <div className="p-10 reveal" style={{ background: "#eeede9" }}>
                <span
                  className="font-mono text-[9px] uppercase tracking-widest block mb-4"
                  style={{ color: "rgba(20,20,20,.3)" }}
                >
                  Кинетический фасад
                </span>
                <h3
                  className="font-light text-2xl uppercase tracking-tight mb-4"
                  style={{ color: "#141414" }}
                >
                  ENERGY TOWER
                </h3>
                <p
                  className="font-mono text-[9px] uppercase tracking-widest mb-6"
                  style={{ color: "#BFA37E" }}
                >
                  Kinetic Facade
                </p>
                <p
                  className="font-light leading-relaxed text-sm"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Кинетическая фасадная система с механизмом цикличного
                  движения. Инженерный акцент: расчёт усталостных нагрузок на
                  подвижные узлы, обеспечение долговечности при непрерывной
                  эксплуатации.
                </p>
              </div>
              <div className="p-10 reveal d1" style={{ background: "#eeede9" }}>
                <span
                  className="font-mono text-[9px] uppercase tracking-widest block mb-4"
                  style={{ color: "rgba(20,20,20,.3)" }}
                >
                  Подвесная инсталляция
                </span>
                <h3
                  className="font-light text-2xl uppercase tracking-tight mb-4"
                  style={{ color: "#141414" }}
                >
                  CONSTELLATION
                </h3>
                <p
                  className="font-mono text-[9px] uppercase tracking-widest mb-6"
                  style={{ color: "#BFA37E" }}
                >
                  Suspension Art
                </p>
                <p
                  className="font-light leading-relaxed text-sm"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Многоточечная подвесная инсталляция в атриуме торгового
                  центра. Инженерный акцент: расчёт распределённых нагрузок на
                  перекрытия, проектирование системы подвески с учётом
                  динамических воздействий.
                </p>
              </div>
              <div className="p-10 reveal d2" style={{ background: "#eeede9" }}>
                <span
                  className="font-mono text-[9px] uppercase tracking-widest block mb-4"
                  style={{ color: "rgba(20,20,20,.3)" }}
                >
                  Параметрическая скульптура
                </span>
                <h3
                  className="font-light text-2xl uppercase tracking-tight mb-4"
                  style={{ color: "#141414" }}
                >
                  PRIME OFFICE
                </h3>
                <p
                  className="font-mono text-[9px] uppercase tracking-widest mb-6"
                  style={{ color: "#BFA37E" }}
                >
                  Parametric Sculpture
                </p>
                <p
                  className="font-light leading-relaxed text-sm"
                  style={{ color: "rgba(20,20,20,.55)" }}
                >
                  Объект сложной параметрической геометрии для офисного лобби.
                  Инженерный акцент: алгоритмическая оптимизация раскроя,
                  минимизация отходов материала при сохранении точности формы.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative py-48 px-8 md:px-14 overflow-hidden text-center"
          style={{ background: "#252523" }}
        >
          <div
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
            style={{ opacity: ".025" }}
          >
            <span
              className="font-black leading-none uppercase"
              style={{ fontSize: "40vw", color: "#F9F9F7" }}
            >
              MF
            </span>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto reveal">
            <div
              className="w-16 h-px mx-auto mb-14"
              style={{ background: "rgba(191,163,126,.4)" }}
            ></div>
            <h2
              className="font-light tracking-tight leading-snug mb-14"
              style={{
                fontSize: "clamp(1.8rem,3.5vw,3.2rem)",
                color: "#F9F9F7",
              }}
            >
              "Каждый изгиб, каждый расчёт ветра — это акт любви к точности"
            </h2>
            <div
              className="w-px h-20 mx-auto"
              style={{ background: "rgba(191,163,126,.4)" }}
            ></div>
          </div>
        </section>

        <section
          className="py-28 px-8 md:px-14"
          style={{ background: "#F9F9F7", color: "#141414" }}
        >
          <div className="max-w-[1400px] mx-auto reveal">
            <div className="grid lg:grid-cols-2 gap-16 items-end">
              <div>
                <div className="flex items-center gap-6 mb-10">
                  <div
                    className="w-8 h-px"
                    style={{ background: "#BFA37E" }}
                  ></div>
                  <span
                    className="font-mono text-[9px] uppercase tracking-[.4em]"
                    style={{ color: "rgba(20,20,20,.35)" }}
                  >
                    Как начать с нами работу
                  </span>
                </div>
                <h2
                  className="font-light tracking-tight leading-none mb-8"
                  style={{
                    fontSize: "clamp(2rem,3.8vw,3.8rem)",
                    color: "#141414",
                  }}
                >
                  Сложный объект
                  <br />
                  требует правильного партнёра.
                </h2>
                <p
                  className="font-light leading-relaxed mb-12"
                  style={{
                    color: "rgba(20,20,20,.5)",
                    fontSize: "1rem",
                    maxWidth: "480px",
                  }}
                >
                  Мы работаем с задачами, где важна точность — в форме, в
                  сроках, в производстве. Расскажите о проекте: опишем подход,
                  оценим реализуемость, предложим конкретное решение. Без
                  шаблонных презентаций.
                </p>
                <Link to="/contact" href="/contact" className="btn-cta">
                  Обсудить техническое задание
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "16px" }}
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div
                  className="space-y-6 border-l pl-16"
                  style={{ borderColor: "rgba(20,20,20,.08)" }}
                >
                  <div>
                    <p
                      className="font-light"
                      style={{ color: "rgba(20,20,20,.55)" }}
                    >
                      Описываете задачу в свободной форме — без ТЗ, без
                      презентации.
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-light"
                      style={{ color: "rgba(20,20,20,.55)" }}
                    >
                      В течение 48 часов возвращаемся с первым видением и
                      вопросами.
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-light"
                      style={{ color: "rgba(20,20,20,.55)" }}
                    >
                      Фиксируем объём, сроки и бюджет до начала любой проектной
                      работы.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
