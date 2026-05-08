import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Clients() {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    // Reveal observer
    const obs = new IntersectionObserver(e => {
      e.forEach(x => { 
        if (x.isIntersecting) { 
          x.target.classList.add('visible'); 
          obs.unobserve(x.target); 
        } 
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    // Active client tab on scroll
    const sections = ['developers', 'retail', 'hotels', 'city', 'architects', 'culture'];
    const handleScroll = () => {
      let current = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = id;
        }
      });
      setActiveTab(current);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id, e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    const nav = document.getElementById('clients-nav');
    if (!el || !nav) return;
    const top = el.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="font-display" style={{ overflowX: 'hidden', background: '#fff' }}>
      <style>{`
        * { border-radius: 0 !important; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #ffffff; color: #111; font-weight: 300; letter-spacing: 0.01em; }
        h1, h2, h3, h4 { font-weight: 300 !important; letter-spacing: -0.01em; }

        @keyframes fu { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        .h0 { animation: fu 1.4s cubic-bezier(.16,1,.3,1) both; }
        .h1 { animation: fu 1.4s .1s cubic-bezier(.16,1,.3,1) both; }
        .h2 { animation: fu 1.4s .22s cubic-bezier(.16,1,.3,1) both; }
        .h3 { animation: fu 1.4s .34s cubic-bezier(.16,1,.3,1) both; }

        @keyframes scrollDropLine {
          0%   { transform:scaleY(0); transform-origin:top; }
          50%  { transform:scaleY(1); transform-origin:top; }
          51%  { transform:scaleY(1); transform-origin:bottom; }
          100% { transform:scaleY(0); transform-origin:bottom; }
        }
        .scroll-line-custom { animation: scrollDropLine 2.2s cubic-bezier(.76,0,.24,1) infinite; }

        .reveal {
          opacity:0; transform:translateY(22px);
          transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
        }
        .reveal.visible { opacity:1; transform:translateY(0); }
        .d1 { transition-delay:.1s; } .d2 { transition-delay:.2s; } .d3 { transition-delay:.3s; } .d4 { transition-delay:.4s; }

        /* ── HERO sticky ── */
        #hero-wrap {
          position: sticky; top:0;
          height:100vh; z-index:1;
          overflow:hidden; will-change:transform,opacity;
          background: #f5f5f3;
        }
        #hero-bg { position:absolute; inset:0; will-change:transform; }
        #hero-bg img { width:100%; height:100%; object-fit:cover; opacity:.9; object-position:center 50%; }
        #hero-veil { position:absolute; inset:0; z-index:15; background:#fff; opacity:0; pointer-events:none; }
        #page-content { position:relative; z-index:2; }

        /* ── Segment cards ── */
        .seg-card {
          position: relative; overflow: hidden;
          transition: transform .5s cubic-bezier(.16,1,.3,1), box-shadow .5s ease;
          background: #fff;
        }
        .seg-card:hover { transform: translateY(-4px); box-shadow: 0 24px 48px rgba(20,20,20,.08); }
        .seg-card img {
          transition: transform 1.4s cubic-bezier(.16,1,.3,1), filter .8s ease;
          filter: grayscale(30%);
        }
        .seg-card:hover img { transform: scale(1.04); filter: grayscale(0%); }
        .seg-num {
          font-family: 'Roboto Mono', monospace;
          font-size: 11px; letter-spacing: .3em;
          color: rgba(0,0,0,.2);
        }

        /* ── Value cards ── */
        .val-card {
          transition: background .3s ease;
          position: relative;
        }
        .val-card::after {
          content:''; position:absolute; bottom:0; left:0;
          width:0; height:2px; background:#BFA37E;
          transition: width .5s cubic-bezier(.16,1,.3,1);
        }
        .val-card:hover { background: #f2f1ef; }
        .val-card:hover::after { width:100%; }

        /* ── Partner logos ── */
        .partner-logo {
          display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px;
          height:90px;
          border:1px solid rgba(0,0,0,.08);
          transition: border-color .4s ease, background .4s ease;
          cursor: default;
        }
        .partner-logo:hover { border-color: #BFA37E; background: rgba(191,163,126,.04); }

        /* ── Client section images ── */
        .client-img-wrap { position:relative; overflow:hidden; }
        .client-img-wrap img {
          transition: transform 1.2s cubic-bezier(.16,1,.3,1), filter .8s ease;
          filter: grayscale(20%);
        }
        .client-img-wrap:hover img { transform: scale(1.03); filter: grayscale(0%); }

        /* ── Client tab nav ── */
        .client-tab {
          display: flex; align-items: center; justify-content: center;
          height: 56px; padding: 0 1.5rem;
          border: 1px solid rgba(0,0,0,.08);
          margin-right: -1px;
          cursor: pointer;
          transition: border-color .3s, color .3s, background .3s;
          white-space: nowrap;
        }
        .client-tab:hover, .client-tab.active {
          border-color: #BFA37E; color: #111 !important;
          background: rgba(191,163,126,.04); z-index:1;
        }
      `}</style>

      {/* ═══ PAGE CONTENT ═══ */}
      <div id="page-content" style={{ background: '#fff' }}>
        {/* ══ С КЕМ МЫ РАБОТАЕМ — старт страницы ══ */}
        <section className="pt-24 pb-0 px-8 md:px-14" style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,.06)' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 pb-16">
              <div className="lg:col-span-5 reveal">
                <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Отрасли</p>
                <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: 'clamp(1.8rem,2.8vw,2.6rem)' }}>С кем мы работаем.</h2>
                <div className="h-px w-12 mt-6" style={{ background: '#BFA37E' }}></div>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 flex items-end reveal d1">
                <p className="font-light leading-relaxed" style={{ color: 'rgba(0,0,0,.5)', fontSize: '1rem' }}>
                  Мы работаем с разными типами заказчиков — от девелоперов и отельеров до архитектурных бюро и культурных институций. Выберите отрасль, чтобы узнать, как именно мы можем быть полезны.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ КЛИЕНТЫ — sticky nav + секции ══ */}
        <div id="clients-nav" className="sticky z-30 overflow-x-auto" style={{ top: 0, background: 'rgba(255,255,255,.97)', backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(0,0,0,.06)', borderBottom: '1px solid rgba(0,0,0,.06)' }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14">
            <div className="flex items-stretch justify-center w-full py-4 gap-3 flex-wrap">
              <a href="#developers" className={`client-tab font-display font-light text-sm uppercase tracking-tight ${activeTab === 'developers' ? 'active' : ''}`} style={{ color: 'rgba(0,0,0,.4)' }} onClick={(e) => scrollToSection('developers', e)}>Девелоперы</a>
              <a href="#retail" className={`client-tab font-display font-light text-sm uppercase tracking-tight ${activeTab === 'retail' ? 'active' : ''}`} style={{ color: 'rgba(0,0,0,.4)' }} onClick={(e) => scrollToSection('retail', e)}>Торговые центры</a>
              <a href="#hotels" className={`client-tab font-display font-light text-sm uppercase tracking-tight ${activeTab === 'hotels' ? 'active' : ''}`} style={{ color: 'rgba(0,0,0,.4)' }} onClick={(e) => scrollToSection('hotels', e)}>Отели</a>
              <a href="#city" className={`client-tab font-display font-light text-sm uppercase tracking-tight ${activeTab === 'city' ? 'active' : ''}`} style={{ color: 'rgba(0,0,0,.4)' }} onClick={(e) => scrollToSection('city', e)}>Городская среда</a>
              <a href="#architects" className={`client-tab font-display font-light text-sm uppercase tracking-tight ${activeTab === 'architects' ? 'active' : ''}`} style={{ color: 'rgba(0,0,0,.4)' }} onClick={(e) => scrollToSection('architects', e)}>Архитектурные бюро</a>
              <a href="#culture" className={`client-tab font-display font-light text-sm uppercase tracking-tight ${activeTab === 'culture' ? 'active' : ''}`} style={{ color: 'rgba(0,0,0,.4)' }} onClick={(e) => scrollToSection('culture', e)}>Культура</a>
            </div>
          </div>
        </div>

        {/* ДЕВЕЛОПЕРЫ */}
        <section id="developers" className="py-28 px-8 md:px-14" style={{ background: '#fff' }}>
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 reveal">
              <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Девелоперы</p>
              <h2 className="font-light uppercase tracking-tight leading-none mb-6" style={{ fontSize: 'clamp(2rem,3vw,2.8rem)' }}>Жилые комплексы<br/>и девелоперские<br/>проекты.</h2>
              <div className="h-px w-12 mb-8" style={{ background: '#BFA37E' }}></div>
              <p className="font-light leading-relaxed mb-6" style={{ color: 'rgba(0,0,0,.5)' }}>Объект сдан — но среда остаётся пустой. Это обесценивает работу архитектора и снижает воспринимаемую стоимость жилья. Мы закрываем всё художественное оформление территории одним договором.</p>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Входные группы и порталы</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Арт-объекты для территории</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Перголы и навесы из металла</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Световые сценарии</span></div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 reveal d1">
              <div className="client-img-wrap mb-6" style={{ height: '380px' }}>
                <img alt="Девелопер" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMs0orzF2FtEs4LE-uOY-0z7ro0xTiF9WZoyF1NKa2ZhdjnWJAQfk35VBK31gsvmSGA-S8Oy5J7uwiyT0WKogBRr5UNOiRnyv71rBU-Au51AZKMor1BwM5kFHar2c7Ndqdrk3EMnrv5KLcSl-7sGKucBLgZGZT3Pio9QSa0seMRNzkAFjYFs77dOFwXXxp1SaPQUBQnyCgY5_Pu0HvGDPQ8R9Axgrz3YFA2Spl1ni-9NAZ9Ag3NBwSGJcBUcnOOSU_OJ4DvQvqH61u"/>
              </div>
              <div className="py-5 border-t" style={{ borderColor: 'rgba(0,0,0,.07)' }}>
                <p className="font-mono text-[9px] text-primary uppercase tracking-widest mb-1">Пример — ORQUÍDEA, Alicante</p>
                <p className="font-light text-sm" style={{ color: 'rgba(0,0,0,.5)' }}>Серия скульптурных объектов из эпоксидной смолы с интегрированной подсветкой. Параметрическое моделирование, адаптация к средиземноморскому климату.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ТОРГОВЫЕ ЦЕНТРЫ */}
        <section id="retail" className="py-28 px-8 md:px-14" style={{ background: '#f5f5f3', borderTop: '1px solid rgba(0,0,0,.06)' }}>
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 reveal">
              <div className="client-img-wrap mb-6" style={{ height: '380px' }}>
                <img alt="ТЦ" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRfGRnRhZ4D_ZLaJm-8P4h9_JU-Jl99xO7G0KcjUIB6SCvz2ubgTmgl97ezTmWtOaYIqCogjZsIVwIbTFB5FI1kMDOD0W9EC4bqxAoJCCyT1P00TjOhDSyF7px2Hwe-4CHR_idWFDMUGPuyxVU7KiERxBFi1EEzyFj_-QtVYzrmnRVTtVZ9OqWBlsj6NwAq0TPsF_yteEA4Z1zxznU2qC-MCaeszmtqvy_vHhyAi6HVQZ6S7IEK7K4kQtB2rv3EgmY9hwDs4lXCOIC"/>
              </div>
              <div className="py-5 border-t" style={{ borderColor: 'rgba(0,0,0,.07)' }}>
                <p className="font-mono text-[9px] text-primary uppercase tracking-widest mb-1">Пример — IKEA Network, 13+ объектов</p>
                <p className="font-light text-sm" style={{ color: 'rgba(0,0,0,.5)' }}>Атриумные инсталляции и сезонное оформление по единому стандарту качества. DMX-управление, ночной монтаж.</p>
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 reveal d1">
              <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Торговые и деловые центры</p>
              <h2 className="font-light uppercase tracking-tight leading-none mb-6" style={{ fontSize: 'clamp(2rem,3vw,2.8rem)' }}>Атриумы, фасады,<br/>сезонное оформление.</h2>
              <div className="h-px w-12 mb-8" style={{ background: '#BFA37E' }}></div>
              <p className="font-light leading-relaxed mb-6" style={{ color: 'rgba(0,0,0,.5)' }}>Атриум без акцента теряет трафик. Мы создаём визуальные точки притяжения, которые становятся частью идентичности объекта и генерируют органический контент.</p>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Кинетические световые инсталляции</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Праздничное оформление премиум</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>DMX-системы управления</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Ночной монтаж</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ОТЕЛИ */}
        <section id="hotels" className="py-28 px-8 md:px-14" style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,.06)' }}>
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 reveal">
              <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Отели</p>
              <h2 className="font-light uppercase tracking-tight leading-none mb-6" style={{ fontSize: 'clamp(2rem,3vw,2.8rem)' }}>Лобби, территория,<br/>общественные зоны.</h2>
              <div className="h-px w-12 mb-8" style={{ background: '#BFA37E' }}></div>
              <p className="font-light leading-relaxed mb-6" style={{ color: 'rgba(0,0,0,.5)' }}>Первое впечатление формируется в первые секунды. Арт-объект в правильном месте становится фототочкой, частью идентичности бренда и поводом для возвращения.</p>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Скульптурные доминанты для лобби</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Декоративные объекты для ресторанов</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Объекты для территории и бассейна</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Разработка под концепцию бренда</span></div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 reveal d1">
              <div className="client-img-wrap mb-6" style={{ height: '380px' }}>
                <img alt="Hotel lobby" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXkSqJWpXEKjKOWDQG8lecsnzd40ExKTdGfiPpg-N9TtKpcGvtlzSTYuGyaEXYjA8jdMl8p6jhRNw15ULv1xsfny9RM2YT5mstgOX-KHg5jICP7ZCJ_xRPGUX90cs5h-g5q4kn_FVL0o2NJY-mB3RamIipdKBtdOCsl3FsGxE5V68D3_HWx85lfNzdPajXy_Ke5-RjWnfZlacdmbLWfngblOybjCkDu3vPmLzdT7ojtm_lnpQRub_0eFA0BY87-Jasq47mtFc2LM5m"/>
              </div>
              <div className="py-5 border-t" style={{ borderColor: 'rgba(0,0,0,.07)' }}>
                <p className="font-mono text-[9px] text-primary uppercase tracking-widest mb-1">Пример — объект для лобби, Barcelona</p>
                <p className="font-light text-sm" style={{ color: 'rgba(0,0,0,.5)' }}>Параметрическая форма из анодированного алюминия, 4,2 м. Арт-объект и навигационный элемент одновременно.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ГОРОДСКАЯ СРЕДА */}
        <section id="city" className="py-28 px-8 md:px-14" style={{ background: '#f5f5f3', borderTop: '1px solid rgba(0,0,0,.06)' }}>
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 reveal">
              <div className="client-img-wrap mb-6" style={{ height: '380px' }}>
                <img alt="City installation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1uzqlT1Sr4tVtX27b1DvLay-Px56xMBdxevn__-Hg_lGY-1CEInhzKd6X1nBxriS0xsx0nqAQYpvGLMFftJAfWXrylmap8zkT9Z1MkP6Wi5nCeNpsG_s0MfT7XQanB1PwvHuomuqy3BLLeSOs5vud_S0skwCiRohBoiofkSCzTdsXAegXcNmA5WYjZ-hXBXy5o5Lya9Emzjcr1_JT5j843IdljFh6jEkHK_ml37iHCEN7FYK7_3ynP1W3ZFIbts97TL-Y1ILWgRII"/>
              </div>
              <div className="py-5 border-t" style={{ borderColor: 'rgba(0,0,0,.07)' }}>
                <p className="font-mono text-[9px] text-primary uppercase tracking-widest mb-1">Пример — световой маршрут набережной, Valencia</p>
                <p className="font-light text-sm" style={{ color: 'rgba(0,0,0,.5)' }}>18 световых объектов вдоль 420 м, единая DMX-система. Муниципальная программа благоустройства.</p>
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 reveal d1">
              <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Городская среда</p>
              <h2 className="font-light uppercase tracking-tight leading-none mb-6" style={{ fontSize: 'clamp(2rem,3vw,2.8rem)' }}>Площади,<br/>набережные,<br/>парки.</h2>
              <div className="h-px w-12 mb-8" style={{ background: '#BFA37E' }}></div>
              <p className="font-light leading-relaxed mb-6" style={{ color: 'rgba(0,0,0,.5)' }}>Понимаем тендерные процедуры и регуляторную специфику. Готовим полный пакет согласовательной документации. Опыт работы с муниципальными заказчиками в нескольких странах.</p>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Арт-объекты для площадей и парков</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Световые маршруты и инсталляции</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Праздничное оформление улиц</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Документация для тендеров</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* АРХИТЕКТУРНЫЕ БЮРО */}
        <section id="architects" className="py-28 px-8 md:px-14" style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,.06)' }}>
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 reveal">
              <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Архитектурные бюро</p>
              <h2 className="font-light uppercase tracking-tight leading-none mb-6" style={{ fontSize: 'clamp(2rem,3vw,2.8rem)' }}>Партнёр, который<br/>усиливает ваши<br/>проекты.</h2>
              <div className="h-px w-12 mb-8" style={{ background: '#BFA37E' }}></div>
              <p className="font-light leading-relaxed mb-6" style={{ color: 'rgba(0,0,0,.5)' }}>Два формата. Первый — вы приносите задачу, мы предлагаем концепцию, готовим документацию на изделие, производим и монтируем. Второй — реализация ваших готовых замыслов: производство по предоставленной документации или совместная разработка конструктива.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Концепция и визуализация под задачу</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Техническая документация</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Субподряд или прямой договор</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Оценка реализуемости</span></div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 reveal d1">
              <div className="client-img-wrap mb-6" style={{ height: '320px' }}>
                <img alt="Architecture studio collaboration" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyVRLjxwBFDjdiIQmiWSt2UCvAmsQfbWOR8ofnOJ3Koxy02C0gCCC9IlSay-oz9dS8qTuoZJaJp1X5qCFeETncy4Np27xBLvn1WavkZ4-VshVr83ALo05FCFz9WkD5HwEbvozjZoQsa5KLBX_8KXtZUWBFTQ4Kyni5LeIToib3qL0N-DdDHNeUK4Rr8sIlb0l_qfr5UBQvcY07oRLr7WFOoE7ntwYwL6lIHUAGC11rluwLKZbpDRflxk_d8lgoaoTAz8IIsVkFKxTZ"/>
              </div>
              <div className="py-5 border-t" style={{ borderColor: 'rgba(0,0,0,.07)' }}>
                <p className="font-mono text-[9px] text-primary uppercase tracking-widest mb-1">Пример совместной работы</p>
                <p className="font-light text-sm" style={{ color: 'rgba(0,0,0,.5)' }}>Параметрически построенная форма — от концепции до рабочих чертежей и монтажа на объекте.</p>
              </div>
            </div>
          </div>
        </section>

        {/* КУЛЬТУРА */}
        <section id="culture" className="py-28 px-8 md:px-14" style={{ background: '#f5f5f3', borderTop: '1px solid rgba(0,0,0,.06)' }}>
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 reveal">
              <div className="client-img-wrap mb-6" style={{ height: '380px' }}>
                <img alt="Festival installation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCldUVennI4I72et6AuVe32w-YlxSfQ0R38jKo5B5P-XJymM8WIfFZ9bzsdLK-9EiP4Aod628-0yPk5Qd0P4fH2xedJ61ejgvtwQIRrAHBEpmSIRSF_3jM4bi-IzUv3NqSPJ0yUC0BmlxMSf0qwZuaeJG_u86SS5hAvEdMzhMfcWm6_PLgzklpzlEcQKHeuvSxiWEwTn2go_LINB_7FEI2U8vzKSlNFTmo_LfeGgthMeiCrTundUjsfP1Z6vPhX9D4n_rpWph4NfbeF"/>
              </div>
              <div className="py-5 border-t" style={{ borderColor: 'rgba(0,0,0,.07)' }}>
                <p className="font-mono text-[9px] text-primary uppercase tracking-widest mb-1">Пример — световые объекты для городского события</p>
                <p className="font-light text-sm" style={{ color: 'rgba(0,0,0,.5)' }}>Временная инсталляция. Монтаж за ночь, демонтаж без следов. Конструкции адаптированы для повторного использования.</p>
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 reveal d1">
              <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Культура и события</p>
              <h2 className="font-light uppercase tracking-tight leading-none mb-6" style={{ fontSize: 'clamp(2rem,3vw,2.8rem)' }}>Музеи,<br/>фестивали,<br/>выставки.</h2>
              <div className="h-px w-12 mb-8" style={{ background: '#BFA37E' }}></div>
              <p className="font-light leading-relaxed mb-6" style={{ color: 'rgba(0,0,0,.5)' }}>Инсталляция, которую снимают и распространяют — это часть самого события. Работаем с жёсткими дедлайнами — это наша норма, не исключение.</p>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Временные и постоянные инсталляции</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Сценография выставочных пространств</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Световые объекты для фестивалей</span></div>
                <div className="flex items-center gap-3"><div className="w-1 h-1 flex-shrink-0" style={{ background: '#BFA37E' }}></div><span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.45)' }}>Монтаж и демонтаж в сжатые сроки</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* СРОКИ И ГАРАНТИЯ */}
        <section className="py-20 px-8 md:px-14" style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,.06)' }}>
          <div className="max-w-[1400px] mx-auto">

            {/* Заголовок блока */}
            <div className="grid lg:grid-cols-12 gap-8 mb-14 reveal">
              <div className="lg:col-span-5">
                <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: 'clamp(1.6rem,2.4vw,2.2rem)' }}>Сроки реализации<br/>по отраслям.</h2>
                <div className="h-px w-12 mt-6" style={{ background: '#BFA37E' }}></div>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 flex items-end reveal d1">
                <p className="font-light leading-relaxed" style={{ color: 'rgba(0,0,0,.5)', fontSize: '.95rem' }}>
                  Указанные сроки — от подписания договора до завершения монтажа. Сроки могут варьироваться в зависимости от сложности объекта и объёма комплектации.
                </p>
              </div>
            </div>

            {/* Четыре отрасли — сроки */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(0,0,0,.06)' }}>

              {/* Жилые комплексы */}
              <div className="reveal bg-white p-8 group transition-colors duration-300 hover:bg-bg-light" style={{ background: '#fff' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-8 flex-shrink-0" style={{ background: '#BFA37E' }}></div>
                  <p className="font-mono text-[9px] text-primary uppercase tracking-[.35em]">Жилые комплексы</p>
                </div>
                <div className="mb-4">
                  <span className="font-light leading-none" style={{ fontSize: 'clamp(2.2rem,3vw,3rem)', color: '#111', letterSpacing: '-0.02em' }}>2–4</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest ml-2" style={{ color: 'rgba(0,0,0,.35)' }}>месяца</span>
                </div>
                <p className="font-light text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,.45)' }}>Входные группы, арт-объекты территории, перголы, световые сценарии.</p>
              </div>

              {/* Торговые и деловые центры */}
              <div className="reveal d1 bg-white p-8 group transition-colors duration-300 hover:bg-bg-light" style={{ background: '#fff' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-8 flex-shrink-0" style={{ background: '#BFA37E' }}></div>
                  <p className="font-mono text-[9px] text-primary uppercase tracking-[.35em]">Торговые и деловые центры</p>
                </div>
                <div className="mb-4">
                  <span className="font-light leading-none" style={{ fontSize: 'clamp(2.2rem,3vw,3rem)', color: '#111', letterSpacing: '-0.02em' }}>3–6</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest ml-2" style={{ color: 'rgba(0,0,0,.35)' }}>месяцев</span>
                </div>
                <p className="font-light text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,.45)' }}>Атриумные инсталляции, кинетические системы, сезонное оформление.</p>
              </div>

              {/* Отели */}
              <div className="reveal d2 bg-white p-8 group transition-colors duration-300 hover:bg-bg-light" style={{ background: '#fff' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-8 flex-shrink-0" style={{ background: '#BFA37E' }}></div>
                  <p className="font-mono text-[9px] text-primary uppercase tracking-[.35em]">Отели</p>
                </div>
                <div className="mb-4">
                  <span className="font-light leading-none" style={{ fontSize: 'clamp(2.2rem,3vw,3rem)', color: '#111', letterSpacing: '-0.02em' }}>2–4</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest ml-2" style={{ color: 'rgba(0,0,0,.35)' }}>месяца</span>
                </div>
                <p className="font-light text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,.45)' }}>Скульптурные доминанты лобби, объекты ресторанных зон, территория.</p>
              </div>

              {/* Городская среда */}
              <div className="reveal d3 bg-white p-8 group transition-colors duration-300 hover:bg-bg-light" style={{ background: '#fff' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-8 flex-shrink-0" style={{ background: '#BFA37E' }}></div>
                  <p className="font-mono text-[9px] text-primary uppercase tracking-[.35em]">Городская среда</p>
                </div>
                <div className="mb-4">
                  <span className="font-light leading-none" style={{ fontSize: 'clamp(2.2rem,3vw,3rem)', color: '#111', letterSpacing: '-0.02em' }}>3–6</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest ml-2" style={{ color: 'rgba(0,0,0,.35)' }}>месяцев</span>
                </div>
                <p className="font-light text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,.45)' }}>Площади, набережные, парки. Масштабные объекты под открытым небом.</p>
              </div>

            </div>

            {/* Гарантия */}
            <div className="mt-px grid grid-cols-1 md:grid-cols-2 gap-px reveal" style={{ background: 'rgba(0,0,0,.06)' }}>
              <div className="p-8 flex items-start gap-6" style={{ background: '#f5f5f3' }}>
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border" style={{ borderColor: 'rgba(191,163,126,.4)' }}>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>verified_user</span>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-2">Гарантия на конструктив</p>
                  <p className="font-light leading-none mb-1" style={{ fontSize: '1.9rem', color: '#111', letterSpacing: '-0.02em' }}>5 лет</p>
                  <p className="font-light text-sm" style={{ color: 'rgba(0,0,0,.45)' }}>Металлоконструкции, несущие элементы, сварные соединения, покрытия.</p>
                </div>
              </div>
              <div className="p-8 flex items-start gap-6" style={{ background: '#f5f5f3' }}>
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border" style={{ borderColor: 'rgba(191,163,126,.4)' }}>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>light_mode</span>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-2">Гарантия на освещение</p>
                  <p className="font-light leading-none mb-1" style={{ fontSize: '1.9rem', color: '#111', letterSpacing: '-0.02em' }}>2 года</p>
                  <p className="font-light text-sm" style={{ color: 'rgba(0,0,0,.45)' }}>LED-системы, блоки управления, контроллеры DMX, световые модули.</p>
                </div>
              </div>
            </div>

          </div>
        </section>



        {/* ══ ГЕОГРАФИЯ И СТАНДАРТЫ ══ */}
        <section className="py-28 px-8 md:px-14" style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,.06)' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 reveal">
                <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-5">География и стандарты</p>
                <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: 'clamp(2rem,3vw,2.8rem)' }}>Присутствие<br/>и стандарты.</h2>
                <div className="h-px w-12 mt-6" style={{ background: '#BFA37E' }}></div>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 reveal d1">
                <p className="font-light leading-relaxed mb-8" style={{ color: 'rgba(0,0,0,.55)', fontSize: '1.05rem' }}>
                  Мы проектируем и реализуем объекты с учётом специфики европейского рынка. Студия присутствует в Валенсии и Барселоне — это обеспечивает оперативную коммуникацию и полное сопровождение документации согласно локальным требованиям.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8" style={{ borderTop: '1px solid rgba(0,0,0,.07)' }}>
                  <div>
                    <p className="font-mono text-[9px] text-primary uppercase tracking-widest mb-3">Юрисдикция</p>
                    <p className="font-light text-sm" style={{ color: 'rgba(0,0,0,.45)' }}>Реализация проектов в юрисдикции ЕС. Контракты на испанском и английском языках.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-primary uppercase tracking-widest mb-3">Стандарты</p>
                    <p className="font-light text-sm" style={{ color: 'rgba(0,0,0,.45)' }}>Технические стандарты EN / ISO. Производственные площадки в Испании и партнёрская сеть в Европе.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ══ ЯКОРНЫЕ КЛИЕНТЫ ══ */}
        <section className="py-24 px-8 md:px-14" style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,.06)' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-16">
              <div className="lg:col-span-5 reveal">
                <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Системное партнёрство</p>
                <h2 className="font-light uppercase tracking-tight leading-none" style={{ fontSize: 'clamp(1.8rem,2.8vw,2.6rem)' }}>Якорные клиенты.</h2>
                <div className="h-px w-12 mt-6" style={{ background: '#BFA37E' }}></div>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 flex items-end reveal d1">
                <p className="font-light leading-relaxed" style={{ color: 'rgba(0,0,0,.5)', fontSize: '1rem' }}>
                  Это компании, с которыми у нас не разовые заказы, а многолетняя работа: несколько объектов, единые стандарты, совместные регламенты согласования. Они нам доверяют сложные и повторяющиеся задачи.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px reveal" style={{ background: 'rgba(0,0,0,.06)' }}>
              <div className="partner-logo" style={{ background: '#fff' }}>
                <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.35)' }}>IKEA</span>
                <span className="font-mono text-[8px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.2)' }}>Global Retailer</span>
              </div>
              <div className="partner-logo" style={{ background: '#fff' }}>
                <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.35)' }}>Ingka Centres</span>
                <span className="font-mono text-[8px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.2)' }}>Global Retail Real Estate</span>
              </div>
              <div className="partner-logo" style={{ background: '#fff' }}>
                <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.35)' }}>AFI Europe</span>
                <span className="font-mono text-[8px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.2)' }}>International Developer</span>
              </div>
              <div className="partner-logo" style={{ background: '#fff' }}>
                <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.35)' }}>Marriott</span>
                <span className="font-mono text-[8px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.2)' }}>Hospitality Group</span>
              </div>
              <div className="partner-logo" style={{ background: '#fff' }}>
                <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.35)' }}>Gals / Prime Park</span>
                <span className="font-mono text-[8px] uppercase tracking-widest" style={{ color: 'rgba(0,0,0,.2)' }}>Premium Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="py-36 px-8 md:px-14" style={{ background: '#f5f5f3' }}>
          <div className="max-w-[1400px] mx-auto reveal">
            <div className="grid lg:grid-cols-12 gap-16 items-end">
              <div className="lg:col-span-7">
                <h2 className="font-light tracking-tight leading-none mb-8" style={{ fontSize: 'clamp(2rem,3.8vw,3.8rem)', color: '#111' }}>
                  Если у вас есть объект —<br/><span className="text-primary">мы готовы его обсудить.</span>
                </h2>
                <p className="font-light leading-relaxed mb-12" style={{ color: 'rgba(0,0,0,.45)', maxWidth: '520px', fontSize: '1.05rem' }}>
                  Без обязательств, без стандартных презентаций. Расскажите о задаче — мы поделимся тем, как видим решение, и что это может стоить.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 font-mono text-[10px] uppercase tracking-widest transition-all" style={{ background: '#BFA37E', color: '#111', border: '1px solid #BFA37E' }} onMouseOver={(e) => { e.currentTarget.style.background='#fff'; e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.color='#111'; }} onMouseOut={(e) => { e.currentTarget.style.background='#BFA37E'; e.currentTarget.style.borderColor='#BFA37E'; e.currentTarget.style.color='#111'; }}>
                    Обсудить проект
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                  <a href="https://wa.me/34661224868" className="inline-flex items-center gap-3 px-10 py-4 font-mono text-[10px] uppercase tracking-widest transition-all" style={{ background: '#fff', color: '#111', border: '1px solid rgba(0,0,0,.15)' }} onMouseOver={(e) => { e.currentTarget.style.background='#BFA37E'; e.currentTarget.style.borderColor='#BFA37E'; e.currentTarget.style.color='#111'; }} onMouseOut={(e) => { e.currentTarget.style.background='#fff'; e.currentTarget.style.borderColor='rgba(0,0,0,.15)'; e.currentTarget.style.color='#111'; }}>
                    Запросить консультацию инженера
                    <span className="material-symbols-outlined text-sm">engineering</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
