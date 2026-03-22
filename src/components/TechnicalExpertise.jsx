import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function TechnicalExpertise() {
  const { hash } = useLocation();
  const [openAcc, setOpenAcc] = useState(null);

  useEffect(() => {
    // Force light mode for this page
    document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const headerOffset = 120; // Height of header + padding
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100); // Small delay to ensure rendering
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [hash]);

  useEffect(() => {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

    return () => revealObs.disconnect();
  }, []);

  const toggleAcc = (index) => {
    setOpenAcc(openAcc === index ? null : index);
  };

  return (
    <div className="bg-[#F9F9F7] font-display text-[#141414] selection:bg-[#BFA37E] selection:text-white transition-colors duration-300 min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes heroFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .hero-text   { animation: heroFadeUp 1.4s cubic-bezier(.16,1,.3,1) both; }
        .hero-text-1 { animation: heroFadeUp 1.4s .15s cubic-bezier(.16,1,.3,1) both; }
        .hero-text-2 { animation: heroFadeUp 1.4s .3s cubic-bezier(.16,1,.3,1) both; }
        .hero-text-3 { animation: heroFadeUp 1.4s .45s cubic-bezier(.16,1,.3,1) both; }

        @keyframes scrollDrop {
          0%  {transform:scaleY(0);transform-origin:top}
          50% {transform:scaleY(1);transform-origin:top}
          51% {transform:scaleY(1);transform-origin:bottom}
          100%{transform:scaleY(0);transform-origin:bottom}
        }
        .scroll-line { animation: scrollDrop 2.2s cubic-bezier(.76,0,.24,1) infinite; }

        .reveal { opacity:0; transform:translateY(28px); transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1); }
        .reveal.visible { opacity:1; transform:translateY(0); }
        .d1{transition-delay:.1s} .d2{transition-delay:.2s} .d3{transition-delay:.3s}

        /* Type cards */
        .type-card img { transition:transform 1.2s cubic-bezier(.16,1,.3,1),filter .8s ease; filter:grayscale(15%); }
        .type-card:hover img { transform:scale(1.06); filter:grayscale(0%); }
        .type-card .tc-content { transition:transform .5s cubic-bezier(.16,1,.3,1); }
        .type-card:hover .tc-content { transform:translateY(-8px); }
        .type-card .tc-tags { opacity:0; transform:translateY(10px); transition:opacity .4s .05s,transform .4s .05s cubic-bezier(.16,1,.3,1); }
        .type-card:hover .tc-tags { opacity:1; transform:translateY(0); }

        /* Accordion — светлая тема */
        .acc-row { transition:background .3s; border-bottom:1px solid rgba(20,20,20,.07); }
        .acc-row:hover { background:rgba(191,163,126,.04); }
        .acc-body { overflow:hidden; transition:max-height .55s cubic-bezier(.4,0,.2,1); }
        .acc-toggle { transition:transform .4s cubic-bezier(.16,1,.3,1); }

        /* CTA button */
        .btn-cta { display:inline-flex; align-items:center; gap:1rem; font-family:'Roboto Mono',monospace; font-size:.65rem; letter-spacing:.2em; text-transform:uppercase; background:#BFA37E; color:#141414; padding:1rem 2rem; text-decoration:none; border:1px solid #BFA37E; transition:background .3s,color .3s; }
        .btn-cta:hover { background:transparent; color:#141414; }
      `}</style>

      {/* ═══ INTRO ═══ */}
      <section id="intro-section" className="bg-[#F9F9F7] min-h-screen flex items-center pt-32 pb-20 px-8 md:px-14">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Текст слева */}
            <div className="lg:col-span-6 reveal">
              <h1 className="font-light leading-[1.05] tracking-tight mb-8 text-[#141414]" style={{ fontSize: "clamp(2.4rem,4.5vw,4.8rem)" }}>
                Экспертиза в проектировании<br/><span className="italic text-[#BFA37E]">и реализации сложных форм.</span>
              </h1>
              <p className="font-light leading-relaxed text-black/50 max-w-[480px]" style={{ fontSize: "clamp(1rem,1.4vw,1.1rem)" }}>
                От концептуального эскиза до сложнейших инженерных расчётов и монтажа на объекте. На стыке искусства, технологий и архитектуры.
              </p>
            </div>

            {/* Фото справа — висит в воздухе */}
            <div className="lg:col-span-5 lg:col-start-8 reveal d2 relative py-8" id="intro-photo">
              <img src="/assets/intro_kompetencii.png" alt="Пространственный объект" className="w-full h-auto block shadow-[0_40px_100px_rgba(20,20,20,0.13),0_8px_32px_rgba(20,20,20,0.08)]" />
            </div>
          </div>
        </div>
      </section>

      <div id="page-content" className="bg-[#F9F9F7]">
        {/* ТИПОЛОГИЯ */}
        <section className="py-28 px-8 md:px-14 bg-[#F9F9F7]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-12 gap-6 mb-16 reveal">
              <div className="col-span-12 lg:col-span-5">
                <h2 className="font-light uppercase leading-none tracking-tight text-[#141414]" style={{ fontSize: "clamp(2rem,3vw,2.8rem)" }}>Типология проектов</h2>
                <div className="h-px w-14 mt-6 bg-[#BFA37E]"></div>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-end">
                <p className="font-mono text-[11px] uppercase leading-relaxed text-black/40">Студия работает с четырьмя ключевыми типами объектов. Каждый проектируется для долгосрочной эксплуатации в городской или коммерческой среде.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="type-card group cursor-pointer reveal">
                <div className="relative overflow-hidden aspect-[3/4] bg-[#e8e8e6]">
                  <img alt="Архитектурные объекты" className="w-full h-full object-cover absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2w8IigFPjT6ny3-HIssQKP1KUmsTFJbraeo4Sq0EHjzw95KL2ReLZaXefdbdxWV4PnKBQ-xYNf4a0CkoIHwO2GOuzaD5amGqGxIiwaBJiEvUzSY2jRqut5DlICi4aemN0H00xmgYhP14qjvgdWuDvsJqf-k1D5EzO7CfjwWxtKQAR_HkehnrhbP-MrLc74gabYD8foPDp6LKE4HCFp-_8zDZXomGarZwl-BkK8_kKP6ZsjCaeccalgulM9ocj_YyV8W2vamZXGrwR" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(20,20,20,.88) 0%,rgba(20,20,20,.35) 55%,transparent 100%)" }}></div>
                  <div className="absolute inset-0 p-7 flex flex-col justify-end tc-content">
                    <p className="font-mono text-[9px] text-[#BFA37E] mb-2 uppercase tracking-widest">T-01</p>
                    <h3 className="text-white text-xl font-light uppercase mb-4 leading-tight">Архитектурные<br/>объекты</h3>
                    <div className="tc-tags">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="px-2 py-0.5 border border-white/20 text-[9px] font-mono text-white/55 uppercase">Urban</span>
                        <span className="px-2 py-0.5 border border-white/20 text-[9px] font-mono text-white/55 uppercase">Metal</span>
                        <span className="px-2 py-0.5 border border-white/20 text-[9px] font-mono text-white/55 uppercase">Scale</span>
                      </div>
                      <ul className="text-[10px] font-mono text-white/55 uppercase space-y-1">
                        <li>— Городские арт-объекты</li>
                        <li>— Архитектурные доминанты</li>
                        <li>— Скульптурные входные группы</li>
                        <li>— Ландшафтные инсталляции</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="type-card group cursor-pointer reveal d1 lg:mt-10">
                <div className="relative overflow-hidden aspect-[3/4] bg-[#e8e8e6]">
                  <img alt="Малые архитектурные формы" className="w-full h-full object-cover absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMs0orzF2FtEs4LE-uOY-0z7ro0xTiF9WZoyF1NKa2ZhdjnWJAQfk35VBK31gsvmSGA-S8Oy5J7uwiyT0WKogBRr5UNOiRnyv71rBU-Au51AZKMor1BwM5kFHar2c7Ndqdrk3EMnrv5KLcSl-7sGKucBLgZGZT3Pio9QSa0seMRNzkAFjYFs77dOFwXXxp1SaPQUBQnyCgY5_Pu0HvGDPQ8R9Axgrz3YFA2Spl1ni-9NAZ9Ag3NBwSGJcBUcnOOSU_OJ4DvQvqH61u" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(20,20,20,.88) 0%,rgba(20,20,20,.35) 55%,transparent 100%)" }}></div>
                  <div className="absolute inset-0 p-7 flex flex-col justify-end tc-content">
                    <p className="font-mono text-[9px] text-[#BFA37E] mb-2 uppercase tracking-widest">T-02</p>
                    <h3 className="text-white text-xl font-light uppercase mb-4 leading-tight">Малые<br/>архитектурные формы</h3>
                    <div className="tc-tags">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="px-2 py-0.5 border border-white/20 text-[9px] font-mono text-white/55 uppercase">Steel</span>
                        <span className="px-2 py-0.5 border border-white/20 text-[9px] font-mono text-white/55 uppercase">Resin</span>
                      </div>
                      <ul className="text-[10px] font-mono text-white/55 uppercase space-y-1">
                        <li>— Перголы и навесы</li>
                        <li>— Арт-объекты для жилой среды</li>
                        <li>— Декоративные панели</li>
                        <li>— Смоляные объекты</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="type-card group cursor-pointer reveal d2 lg:mt-20">
                <div className="relative overflow-hidden aspect-[3/4] bg-[#e8e8e6]">
                  <img alt="Медиа-архитектура и свет" className="w-full h-full object-cover absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATovlV39tQpjucQSb6EsuzQdCblfsMwRPIs11mxACgXHZDS8kbhDal1XanoVV22qeI3Hf34U1Sz5S5-UKpp7VpUZBifop7nBGxsvhEI9gayPJyA42WAIWF7lxX3069DBZGG17Vie6AgofQYHFGwJruMv5VZSUfaEBUyKeXY02hUn8kNzuiF15ONzHZTL0fdlLa-Dn1W6begYVlssidwa4XzIJe98ll1rlN9DdDP1m_QpMhUql2yLwijTzvURbY2x9mcusz9prbKPcp" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(20,20,20,.88) 0%,rgba(20,20,20,.35) 55%,transparent 100%)" }}></div>
                  <div className="absolute inset-0 p-7 flex flex-col justify-end tc-content">
                    <p className="font-mono text-[9px] text-[#BFA37E] mb-2 uppercase tracking-widest">T-03</p>
                    <h3 className="text-white text-xl font-light uppercase mb-4 leading-tight">Медиа-архитектура<br/>и свет</h3>
                    <div className="tc-tags">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="px-2 py-0.5 border border-white/20 text-[9px] font-mono text-white/55 uppercase">DMX</span>
                        <span className="px-2 py-0.5 border border-white/20 text-[9px] font-mono text-white/55 uppercase">Kinetic</span>
                        <span className="px-2 py-0.5 border border-white/20 text-[9px] font-mono text-white/55 uppercase">LED</span>
                      </div>
                      <ul className="text-[10px] font-mono text-white/55 uppercase space-y-1">
                        <li>— Кинетические световые системы</li>
                        <li>— Медиа-фасады</li>
                        <li>— Объекты для ТЦ и отелей</li>
                        <li>— Управление светом DMX и Madrix</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="type-card group cursor-pointer reveal d3 lg:mt-32">
                <div className="relative overflow-hidden aspect-[3/4] bg-[#e8e8e6]">
                  <img alt="Праздничная иллюминация" className="w-full h-full object-cover absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoelvO_UGTW5A9ZCq3ejeW9JMqDoIEftFm9fv6laTJJN4NOC5upVWgzZj77oINPGJyTNkLftaagxjfFAUxzbj3DK8F3CfkUlHnSbF0TcJ5ArPV7g9GEPAvVGJtkNexMfKfykVa-_vRyNIfGWApATuL4cYHTPHk-ZkX6WD1ZNDKHxYBkaeTp9ki4je56gEgET8h_6GTjOB2p0uHVIMLNNiQgkWBZY_xQkgpCBRNqL0pL3c89ovfCOT0f7NqUmeruftcGkGselw5jTcP" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(20,20,20,.88) 0%,rgba(20,20,20,.35) 55%,transparent 100%)" }}></div>
                  <div className="absolute inset-0 p-7 flex flex-col justify-end tc-content">
                    <p className="font-mono text-[9px] text-[#BFA37E] mb-2 uppercase tracking-widest">T-04</p>
                    <h3 className="text-white text-xl font-light uppercase mb-4 leading-tight">Праздничная<br/>иллюминация</h3>
                    <div className="tc-tags">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="px-2 py-0.5 border border-white/20 text-[9px] font-mono text-white/55 uppercase">LED</span>
                        <span className="px-2 py-0.5 border border-white/20 text-[9px] font-mono text-white/55 uppercase">Seasonal</span>
                      </div>
                      <ul className="text-[10px] font-mono text-white/55 uppercase space-y-1">
                        <li>— Новогоднее оформление ТЦ</li>
                        <li>— Световые арки и тоннели</li>
                        <li>— Сезонное оформление города</li>
                        <li>— Праздничные сценарии для девелоперов</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ЭКОСИСТЕМА КОМПЕТЕНЦИЙ — светлый фон */}
        <section className="py-28 px-8 md:px-14 bg-[#F5F5F3]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-baseline gap-6 mb-0 reveal">
              <h2 className="font-light uppercase leading-none tracking-tight text-[#141414]" style={{ fontSize: "clamp(2rem,4vw,3.8rem)" }}>Экосистема компетенций</h2>
            </div>
            <div className="h-px w-full mt-10 bg-black/10"></div>

            <div id="acc-list">
              {[
                {
                  title: "Art-direction & Parametric Design",
                  subtitle: "Художественное руководство и параметрическое проектирование",
                  content: "Не просто рисуем — создаём математически выверенные формы. Работаем в Grasshopper и Rhino, формируем нарратив и технологическую стратегию. Параметрические модели контролируют геометрию, раскрой и сборку от первого эскиза до монтажа. Референс: AURORA | Festive Landmark project."
                },
                {
                  title: "Advanced Engineering & Prototyping",
                  subtitle: "Инженерный расчёт и прототипирование 1:1",
                  content: "Работаем с жёсткими допусками и ветровыми нагрузками. Создаём прототипы в масштабе 1:1 для объектов в общественных пространствах. Расчёт статических и динамических нагрузок, проектирование анкерных узлов и подвесных систем. Референс: FOREST CAMPUS | Swedish Global Retailer."
                },
                {
                  title: "Инженерный расчёт",
                  subtitle: "Structural Engineering & Load Analysis",
                  content: "Разработка конструктивных решений, расчёт статических и динамических нагрузок. Проектирование подвесных систем, тросовых конструкций и анкерных узлов для объектов любой геометрии."
                },
                {
                  title: "Digital Lighting Solutions (DMX/IoT)",
                  subtitle: "Программируемые световые сценарии и управление",
                  content: "Не просто вешаем лампочки — создаём программируемые световые сценарии и управляем ими. Протоколы DMX512, Madrix, интеллектуальные датчики присутствия. Безопасность конструктива, расчётный трафик, управление нагрузкой — то, что важно девелоперу. Референс: DIGITAL CANVAS | Swedish Global Retailer — мультимедиа-проект с управляемым световым сценарием."
                },
                {
                  title: "Производство и материалы",
                  subtitle: "Fabrication & Material Control",
                  content: "Три собственных цеха — металл и каркасы, стеклопластик и смолы, покраска и чистовая сборка. За годы работы сформирована устойчивая партнёрская сеть из 12 специализированных фабрик, с которыми студия реализует проекты по единым стандартам качества."
                },
                {
                  title: "Системная интеграция",
                  subtitle: "System Integration & Digital Infrastructure",
                  content: "Объединение технологических подсистем в единую управляемую экосистему. Программирование логики работы медиа-фасадов, кинетических систем и световых инсталляций."
                },
                {
                  title: "Городская интеграция и сопровождение",
                  subtitle: "Urban Integration & Technical Support",
                  content: "Адаптация объектов к городской и ландшафтной среде. Авторский надзор, техническое обслуживание и долгосрочное сопровождение реализованных объектов."
                }
              ].map((acc, index) => (
                <div key={index} className="acc-row reveal" style={index === 6 ? { borderBottom: 'none' } : {}}>
                  <div className="grid grid-cols-12 gap-4 items-center py-7 px-2 cursor-pointer select-none" onClick={() => toggleAcc(index)}>
                    <div className="col-span-10 lg:col-span-5"><h4 className="text-lg font-light uppercase tracking-tight text-[#141414]">{acc.title}</h4></div>
                    <div className="hidden lg:block lg:col-span-6 font-mono text-[10px] uppercase tracking-widest text-black/25">{acc.subtitle}</div>
                    <div className="col-span-2 lg:col-span-1 flex justify-end">
                      <span className="acc-toggle material-symbols-outlined text-xl text-[#BFA37E]" style={{ transform: openAcc === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>add</span>
                    </div>
                  </div>
                  <div className="acc-body" style={{ maxHeight: openAcc === index ? '500px' : '0px' }}>
                    <p className="px-2 pb-8 lg:ml-0 max-w-2xl font-mono text-[11px] uppercase leading-loose text-black/45">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ТЕХНОЛОГИИ И МАТЕРИАЛЫ */}
        <section className="py-24 px-8 md:px-14 bg-[#F9F9F7]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16 reveal">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-8 h-px bg-[#BFA37E]"></div>
                  <span className="font-mono text-[9px] uppercase tracking-[.4em] text-black/35">Материальная база</span>
                </div>
                <h2 className="font-light leading-snug tracking-tight text-[#141414]" style={{ fontSize: "clamp(1.8rem,2.8vw,2.6rem)" }}>
                  Полный цикл — от расчёта<br/>до монтажа на объекте.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="grid grid-cols-3 gap-6 mb-0">
                  <div className="border-t pt-5 border-black/10">
                    <p className="font-mono text-[#BFA37E] font-light text-[1.6rem]">17</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest mt-1 text-black/40">Лет реализации</p>
                  </div>
                  <div className="border-t pt-5 border-black/10">
                    <p className="font-mono text-[#BFA37E] font-light text-[1.6rem]">12</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest mt-1 text-black/40">Фабрик-партнёров</p>
                  </div>
                  <div className="border-t pt-5 border-black/10">
                    <p className="font-mono text-[#BFA37E] font-light text-[1.6rem]">58</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest mt-1 text-black/40">Реализованных проектов</p>
                  </div>
                </div>
                <p className="font-light leading-relaxed mt-6 text-[.95rem] text-black/45">
                  Проектируем, изготавливаем и монтируем пространственные объекты, в которых форма и свет формируют характер места. Контроль качества на каждом этапе — в рамках единых стандартов с сетью партнёрских производств.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black/10">
              <div className="py-10 pr-10 border-b md:border-b-0 md:border-r border-black/10">
                <p className="font-mono text-[9px] uppercase tracking-[.3em] mb-6 text-black/30">Metals</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0 bg-[#BFA37E]"></div><span className="font-mono text-[10px] uppercase tracking-widest text-black/60">Кортеновская сталь (Corten)</span></li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0 bg-[#BFA37E]"></div><span className="font-mono text-[10px] uppercase tracking-widest text-black/60">Нержавеющая сталь</span></li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0 bg-[#BFA37E]"></div><span className="font-mono text-[10px] uppercase tracking-widest text-black/60">Алюминиевые сплавы</span></li>
                </ul>
              </div>

              <div className="py-10 px-0 md:px-10 border-b md:border-b-0 md:border-r border-black/10">
                <p className="font-mono text-[9px] uppercase tracking-[.3em] mb-6 text-black/30">Polymers & Composites</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0 bg-[#BFA37E]"></div><span className="font-mono text-[10px] uppercase tracking-widest text-black/60">Эпоксидные смолы</span></li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0 bg-[#BFA37E]"></div><span className="font-mono text-[10px] uppercase tracking-widest text-black/60">Композитные материалы</span></li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0 bg-[#BFA37E]"></div><span className="font-mono text-[10px] uppercase tracking-widest text-black/60">Поликарбонат с UV-защитой</span></li>
                </ul>
              </div>

              <div className="py-10 pl-0 md:pl-10">
                <p className="font-mono text-[9px] uppercase tracking-[.3em] mb-6 text-black/30">Electronics</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0 bg-[#BFA37E]"></div><span className="font-mono text-[10px] uppercase tracking-widest text-black/60">Протоколы DMX512</span></li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0 bg-[#BFA37E]"></div><span className="font-mono text-[10px] uppercase tracking-widest text-black/60">Madrix управление</span></li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0 bg-[#BFA37E]"></div><span className="font-mono text-[10px] uppercase tracking-widest text-black/60">Интеллектуальные датчики присутствия</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ЕВРОПЕЙСКИЕ СТАНДАРТЫ */}
        <section className="py-24 px-8 md:px-14 border-t border-b border-black/10 bg-[#EDEDEB]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start reveal">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-8 h-px bg-[#BFA37E]"></div>
                  <span className="font-mono text-[9px] uppercase tracking-[.4em] text-black/35">Стандарты и документация</span>
                </div>
                <h2 className="font-light leading-snug tracking-tight mb-6 text-[#141414]" style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)" }}>Проектируем по европейским стандартам.</h2>
                <p className="font-light leading-relaxed text-[.95rem] text-black/50 max-w-[480px]">
                  Все решения проектируются с учётом требований безопасности и надёжности. Работаем в соответствии с международными стандартами качества, адаптируем документацию под требования локальных регуляторов — включая Eurocodes.
                </p>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="space-y-0">
                  <div className="flex items-start gap-4 py-5 border-t border-black/10">
                    <div className="w-1 h-1 mt-2 flex-shrink-0 bg-[#BFA37E]"></div>
                    <p className="font-mono text-[10px] uppercase tracking-widest leading-relaxed text-black/50">Конструктивная безопасность и расчёт нагрузок</p>
                  </div>
                  <div className="flex items-start gap-4 py-5 border-t border-black/10">
                    <div className="w-1 h-1 mt-2 flex-shrink-0 bg-[#BFA37E]"></div>
                    <p className="font-mono text-[10px] uppercase tracking-widest leading-relaxed text-black/50">Документация под требования Eurocodes</p>
                  </div>
                  <div className="flex items-start gap-4 py-5 border-t border-b border-black/10">
                    <div className="w-1 h-1 mt-2 flex-shrink-0 bg-[#BFA37E]"></div>
                    <p className="font-mono text-[10px] uppercase tracking-widest leading-relaxed text-black/50">Адаптация под требования локальных регуляторов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 px-8 md:px-14 bg-[#F9F9F7]">
          <div className="max-w-[1400px] mx-auto reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="font-mono text-[9px] uppercase tracking-[.4em] mb-8 text-black/35">Как начать с нами работу</p>
                <h2 className="font-light leading-tight tracking-tight mb-8 text-[#141414]" style={{ fontSize: "clamp(2rem,3.8vw,3.8rem)" }}>
                  Расскажите нам<br/>о вашем проекте.
                </h2>
                <p className="font-light leading-relaxed mb-10 text-[1rem] text-black/45 max-w-[480px]">
                  Работаем с девелоперами, управляющими компаниями, архитектурными бюро и городскими службами. Каждый проект начинается с разговора.
                </p>
                <Link to="/contact" className="btn-cta">
                  Написать в студию
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
