import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Manifest() {
  // Theme toggle logic (if needed for this component specifically, though usually handled globally)
  useEffect(() => {
    // Ensure dark mode class is respected if set in local storage or system preference
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 overflow-x-hidden">
      {/* 1.1 Hero Section (Video from original Manifest.jsx) */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="relative z-20 text-right px-6 md:px-12 max-w-4xl ml-auto pt-20">
          <div className="flex justify-end items-center gap-4 mb-8">
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
              Скульптурная Инженерия
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-light leading-[0.9] tracking-tight mb-8 text-white">
            Инженерия
            <br />
            <span className="italic font-normal text-primary">
              Эмоциональной
            </span>
            <br />
            Формы
          </h1>

          <p className="text-lg lg:text-xl text-white/90 max-w-xxl leading-relaxed mb-12 mt-4">
            16 лет создания постоянных и временных архитектурных конструкций.
            От технического света до монументальных форм.
          </p>

          <div className="flex flex-col sm:flex-row items-end justify-end gap-4">
            <Link
              to="/projects"
              className="group flex items-center gap-2 border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 text-white mt-6"
            >
              <span className="font-mono text-sm uppercase tracking-wider">
                ИССЛЕДОВАТЬ КОЛЛЕКЦИЮ
              </span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="absolute bottom-14 left-0 w-full px-12 hidden lg:flex justify-between items-end text-white/70 font-mono text-[10px] uppercase tracking-widest">
            <div className="text-left">
              <span className="block text-primary mb-1">МАТЕРИАЛЫ</span>
              Кортен / Бронза / Стекло
            </div>
            <div className="text-center">
              <span className="block text-primary mb-1">МАСШТАБ</span>
              Монументальный / Средовой
            </div>
            <div className="text-right">
              <span className="block text-primary mb-1">ПРОЦЕСС</span>
              Параметрика / Фабрикация
            </div>
          </div>
        </div>
      </section>

      {/* 1.2 Split-Navigation */}
      <section className="bg-background-light dark:bg-background-dark">
        {/* First Row: Two equal columns */}
        <div className="flex flex-col md:flex-row border-y border-primary/20">
          <Link to="/projects" className="relative flex-1 h-[60vh] md:h-[70vh] group overflow-hidden border-r border-primary/10 block">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGAdx3ehF7y0gAaYtnrWx_b-8_t3K_UkNMbYnHZQQW-gtbmGZftglyZ3GebqzeUVJa90OOx2QP_xgCZ0HWbXWaDyjr_arrL7NNoz3yeqSfJMOjUuFR5ZgR3p9fEdrF9WbJPAR7mM97Uyv-W55RFmuthsb1CLhUsWR2UItDqXqarSjFsHsL_WZBsLQFJ2CnG6SOq7cXA58iMDgzVmMxJ2s9moI9Xh3S6Ey_3eXl-G3_gFF8Gzjc5polQyI5ZnS_vtH5AYQghME9_Eeb')" }}
            ></div>
            <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-background-dark/20 transition-all duration-500"></div>
            <div className="relative h-full flex flex-col justify-end p-10 z-10">
              <span className="font-mono text-primary text-[10px] mb-4 uppercase tracking-[0.3em]">
                SECTION 01 / ARH
              </span>
              <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                Архитектурные объекты <br />и инсталляции
              </h3>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="material-symbols-outlined text-white text-3xl">
                  arrow_forward
                </span>
              </div>
            </div>
          </Link>
          <Link to="/expertise" className="relative flex-1 h-[60vh] md:h-[70vh] group overflow-hidden block">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRfGRnRhZ4D_ZLaJm-8P4h9_JU-Jl99xO7G0KcjUIB6SCvz2ubgTmgl97ezTmWtOaYIqCogjZsIVwIbTFB5FI1kMDOD0W9EC4bqxAoJCCyT1P00TjOhDSyF7px2Hwe-4CHR_idWFDMUGPuyxVU7KiERxBFi1EEzyFj_-QtVYzrmnRVTtVZ9OqWBlsj6NwAq0TPsF_yteEA4Z1zxznU2qC-MCaeszmtqvy_vHhyAi6HVQZ6S7IEK7K4kQtB2rv3EgmY9hwDs4lXCOIC')" }}
            ></div>
            <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-background-dark/20 transition-all duration-500"></div>
            <div className="relative h-full flex flex-col justify-end p-10 z-10">
              <span className="font-mono text-primary text-[10px] mb-4 uppercase tracking-[0.3em]">
                SECTION 02 / MEDIA
              </span>
              <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                Медиаархитектура и <br />кинетические системы
              </h3>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="material-symbols-outlined text-white text-3xl">
                  arrow_forward
                </span>
              </div>
            </div>
          </Link>
        </div>
        {/* Second Row: Large block + Manifest */}
        <div className="flex flex-col md:flex-row border-b border-primary/20">
          <Link to="/projects" className="relative md:w-2/3 h-[60vh] md:h-[60vh] group overflow-hidden border-r border-primary/10 block">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMs0orzF2FtEs4LE-uOY-0z7ro0xTiF9WZoyF1NKa2ZhdjnWJAQfk35VBK31gsvmSGA-S8Oy5J7uwiyT0WKogBRr5UNOiRnyv71rBU-Au51AZKMor1BwM5kFHar2c7Ndqdrk3EMnrv5KLcSl-7sGKucBLgZGZT3Pio9QSa0seMRNzkAFjYFs77dOFwXXxp1SaPQUBQnyCgY5_Pu0HvGDPQ8R9Axgrz3YFA2Spl1ni-9NAZ9Ag3NBwSGJcBUcnOOSU_OJ4DvQvqH61u')" }}
            ></div>
            <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-background-dark/20 transition-all duration-500"></div>
            <div className="relative h-full flex flex-col justify-end p-10 z-10">
              <span className="font-mono text-primary text-[10px] mb-4 uppercase tracking-[0.3em]">
                SECTION 03 / LIGHT
              </span>
              <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                Световые и <br />праздничные инсталляции
              </h3>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="material-symbols-outlined text-white text-3xl">
                  arrow_forward
                </span>
              </div>
            </div>
          </Link>
          <div className="md:w-1/3 p-10 flex flex-col justify-between bg-background-light dark:bg-background-dark">
            <div>
              <span className="font-mono text-primary text-[10px] uppercase tracking-[0.4em] mb-8 block">
                Manifest / 01
              </span>
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-6">
                Геометрия чувства
              </h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Мы верим, что архитектура — это не только объем, но и
                эмоциональный отклик. Наша миссия — синтез точных инженерных
                расчетов и глубинных человеческих переживаний через форму и
                свет.
              </p>
            </div>
            <div className="mt-12">
              <p className="font-mono text-[9px] text-slate-400 uppercase leading-loose">
                [ Vision ]<br />
                Инженерия как искусство.<br />
                Форма как сообщение.<br />
                Свет как материя.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1.3 Featured Projects (Asymmetric Grid) */}
      <section className="px-6 md:px-12 py-24 bg-background-light dark:bg-background-dark">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">
            Избранные<br />проекты
          </h2>
          <div className="font-mono text-xs text-primary text-right hidden md:block">
            [ GRID_SYSTEM_V.02 ]<br />
            ESTABLISHED 2008
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Project 1 */}
          <Link to="/projects/22" className="md:col-span-8 group cursor-pointer block">
            <div className="aspect-[16/9] overflow-hidden mb-4">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNS-FWZUsMYZTSMtIKH0U4Ozhdd5_85qa_0sSyTCpIZjOTLa8PswOFtP-rRj5gnL338tZWO2DIRmiLfTENKu0FMHkxvBLrZXAbRq6hRExk2cUZhB3Q9d0_RmjMqYnCNYDU1SKwEyt4_PQ45bx6ECUkN9-kdWBfyls1TBSD7hxRtgC6atNdaxOJYxzTIlfBUo4SywMBaTq4xw6ciVTNVKRydN3NDXvHjGh4bKtB7FtcogH9cFrc9d77UY6uC3HMO89MMQbdMGy5xqSl')" }}
              ></div>
            </div>
            <div className="flex justify-between items-start">
              <h4 className="text-2xl font-bold uppercase tracking-tight">
                Проект #22 Passage
              </h4>
              <div className="font-mono text-[10px] text-slate-500 space-y-1">
                <p>
                  ID: <span className="text-primary">22</span>
                </p>
                <p>
                  МАТЕРИАЛ:{" "}
                  <span className="text-slate-900 dark:text-slate-100">
                    БРОНЗА
                  </span>
                </p>
                <p>
                  ГОД:{" "}
                  <span className="text-slate-900 dark:text-slate-100">
                    2023
                  </span>
                </p>
              </div>
            </div>
          </Link>
          {/* Project 2 */}
          <Link to="/projects/11" className="md:col-span-4 mt-12 group cursor-pointer block">
            <div className="aspect-[3/4] overflow-hidden mb-4">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA80MRThVqC3YVgIyDl9IsVFpdu600EKOQhJndQTgYXoXDwW6jENlQYHDAUdmbUxutNhjegTYPqxfjm3gjLbydzmEKssQGAQxHkYYdIhC2QC3hYwZLuKNAzF9myYgJoIm4IHlraWMUPiI6LglCtyPtcf06_chlSYeONGkoLc8Ud9zZgUeecZhILn19m1c9xjovdjKCafOggER35nuWoOXQbYJYETxdtXQqFMpkEHuP2smZXeM5xriS1-XFTYS9l8GiUW5cTXyekxITJ')" }}
              ></div>
            </div>
            <div className="flex justify-between items-start">
              <h4 className="text-xl font-bold uppercase tracking-tight">
                Проект #11 Hotel
              </h4>
              <div className="font-mono text-[10px] text-slate-500 space-y-1">
                <p>
                  ID: <span className="text-primary">11</span>
                </p>
                <p>
                  МАТЕРИАЛ:{" "}
                  <span className="text-slate-900 dark:text-slate-100">
                    СТАЛЬ
                  </span>
                </p>
                <p>
                  ГОД:{" "}
                  <span className="text-slate-900 dark:text-slate-100">
                    2022
                  </span>
                </p>
              </div>
            </div>
          </Link>
          {/* Project 3 */}
          <Link to="/projects/09" className="md:col-span-4 group cursor-pointer block">
            <div className="aspect-square overflow-hidden mb-4">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXkSqJWpXEKjKOWDQG8lecsnzd40ExKTdGfiPpg-N9TtKpcGvtlzSTYuGyaEXYjA8jdMl8p6jhRNw15ULv1xsfny9RM2YT5mstgOX-KHg5jICP7ZCJ_xRPGUX90cs5h-g5q4kn_FVL0o2NJY-mB3RamIipdKBtdOCsl3FsGxE5V68D3_HWx85lfNzdPajXy_Ke5-RjWnfZlacdmbLWfngblOybjCkDu3vPmLzdT7ojtm_lnpQRub_0eFA0BY87-Jasq47mtFc2LM5m')" }}
              ></div>
            </div>
            <div className="flex justify-between items-start">
              <h4 className="text-xl font-bold uppercase tracking-tight">
                Проект #09 Atrium
              </h4>
              <div className="font-mono text-[10px] text-slate-500 space-y-1">
                <p>
                  ID: <span className="text-primary">09</span>
                </p>
                <p>
                  МАТЕРИАЛ:{" "}
                  <span className="text-slate-900 dark:text-slate-100">
                    АЛЮМИНИЙ
                  </span>
                </p>
                <p>
                  ГОД:{" "}
                  <span className="text-slate-900 dark:text-slate-100">
                    2021
                  </span>
                </p>
              </div>
            </div>
          </Link>
          {/* Project 4 */}
          <Link to="/projects/15" className="md:col-span-8 group cursor-pointer block">
            <div className="aspect-[16/7] overflow-hidden mb-4">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMs0orzF2FtEs4LE-uOY-0z7ro0xTiF9WZoyF1NKa2ZhdjnWJAQfk35VBK31gsvmSGA-S8Oy5J7uwiyT0WKogBRr5UNOiRnyv71rBU-Au51AZKMor1BwM5kFHar2c7Ndqdrk3EMnrv5KLcSl-7sGKucBLgZGZT3Pio9QSa0seMRNzkAFjYFs77dOFwXXxp1SaPQUBQnyCgY5_Pu0HvGDPQ8R9Axgrz3YFA2Spl1ni-9NAZ9Ag3NBwSGJcBUcnOOSU_OJ4DvQvqH61u')" }}
              ></div>
            </div>
            <div className="flex justify-between items-start">
              <h4 className="text-2xl font-bold uppercase tracking-tight">
                Проект #15 Gallery
              </h4>
              <div className="font-mono text-[10px] text-slate-500 space-y-1">
                <p>
                  ID: <span className="text-primary">15</span>
                </p>
                <p>
                  МАТЕРИАЛ:{" "}
                  <span className="text-slate-900 dark:text-slate-100">
                    СТЕКЛО
                  </span>
                </p>
                <p>
                  ГОД:{" "}
                  <span className="text-slate-900 dark:text-slate-100">
                    2023
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 1.4 Stats Bar */}
      <section className="bg-primary py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 md:gap-4">
          <div className="flex flex-col">
            <span className="font-mono text-background-dark/60 text-xs uppercase">
              Experience
            </span>
            <p className="font-black text-3xl text-background-dark">16 Лет</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-background-dark/20"></div>
          <div className="flex flex-col">
            <span className="font-mono text-background-dark/60 text-xs uppercase">
              Success
            </span>
            <p className="font-black text-3xl text-background-dark">
              250+ Реализованных проектов
            </p>
          </div>
          <div className="hidden md:block w-px h-12 bg-background-dark/20"></div>
          <div className="flex flex-col">
            <span className="font-mono text-background-dark/60 text-xs uppercase">
              Geography
            </span>
            <p className="font-black text-3xl text-background-dark">4 Страны</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-background-dark/20"></div>
          <div className="flex flex-col">
            <span className="font-mono text-background-dark/60 text-xs uppercase">
              Facilities
            </span>
            <p className="font-black text-3xl text-background-dark">
              Собственное производство
            </p>
          </div>
        </div>
      </section>

      {/* 1.5 Production Teaser */}
      <section className="flex flex-col md:flex-row min-h-[600px] bg-background-dark">
        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-primary font-mono text-xs mb-6 uppercase tracking-[0.4em]">
            Fabrication Technology
          </h2>
          <h3 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            От проекта
            <br />
            до воплощения.
          </h3>
          <p className="text-slate-400 max-w-md text-lg leading-relaxed mb-10">
            Мы контролируем каждый микрон. Сочетание высокоточного
            ЧПУ-фрезерования с традиционным литьем и ручной полировкой бронзы.
          </p>
          <Link to="/process" className="flex items-center gap-4 group cursor-pointer w-max">
            <div className="w-12 h-px bg-primary group-hover:w-20 transition-all"></div>
            <span className="font-mono text-primary text-xs uppercase tracking-widest">
              Explore workshop
            </span>
          </Link>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-1 p-1 bg-primary/20">
          <div
            className="bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAF9s7FPrS5VQPbrlIL0AT3xCpoMIQA5ESJN2DPw45D_5HS815Egc1YMZl_sQwWMYVc6MAViMzabOkxC8TH8Whdrdwg7Gc8fp-aheGH7Ghsdx4Yakryac4_8UfCFD14LHZBKJSwLSFUgsYihzwfmlJOLWC2vR-ebIeAwNZJLH5xp3cdjGBGUDt4HlwGtrN80dSLXLp0lwYpUmcNZYN3p6NlLNSO2SW3T2Dyw4zKfofINYb726xBuJjdMosaMCaFuBj1jpDOgVvklMdu')" }}
          ></div>
          <div
            className="bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1uzqlT1Sr4tVtX27b1DvLay-Px56xMBdxevn__-Hg_lGY-1CEInhzKd6X1nBxriS0xsx0nqAQYpvGLMFftJAfWXrylmap8zkT9Z1MkP6Wi5nCeNpsG_s0MfT7XQanB1PwvHuomuqy3BLLeSOs5vud_S0skwCiRohBoiofkSCzTdsXAegXcNmA5WYjZ-hXBXy5o5Lya9Emzjcr1_JT5j843IdljFh6jEkHK_ml37iHCEN7FYK7_3ynP1W3ZFIbts97TL-Y1ILWgRII')" }}
          ></div>
          <div
            className="bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCldUVennI4I72et6AuVe32w-YlxSfQ0R38jKo5B5P-XJymM8WIfFZ9bzsdLK-9EiP4Aod628-0yPk5Qd0P4fH2xedJ61ejgvtwQIRrAHBEpmSIRSF_3jM4bi-IzUv3NqSPJ0yUC0BmlxMSf0qwZuaeJG_u86SS5hAvEdMzhMfcWm6_PLgzklpzlEcQKHeuvSxiWEwTn2go_LINB_7FEI2U8vzKSlNFTmo_LfeGgthMeiCrTundUjsfP1Z6vPhX9D4n_rpWph4NfbeF')" }}
          ></div>
          <div
            className="bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiIIwDbqr_CcrslusL86n9nQSOhqTqiMXIpT_Zy7Ln4UziNbaqL8tlFpdSHpXkqEm-hC092Epr58xOr0hP5AWbCSa28gAVxXKI9F5TKvInR-4-wfRjlLwdEnEwSNNd2wHso0vqd3h09YrqSKWDns0Jnp52q78bHBRgVRWIeBDMdr_uuc75q7tKE4BHFbSYmko-Nog6COG6v_oKdhVMdwUYEdwGOJB1IgEVMyuV3R-9WEaTAeo7Dw94xWqC6qi8EuA2mT0B7KvQ11aZ')" }}
          ></div>
        </div>
      </section>

      {/* 1.6 Clients Logo Cloud */}
      <section className="py-24 px-6 md:px-12 bg-background-light">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            Trusted Partners &amp; Clients
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale contrast-125">
          <div className="h-12 w-32 bg-slate-900 rounded-sm"></div>
          <div className="h-10 w-24 bg-slate-900 rounded-sm"></div>
          <div className="h-14 w-36 bg-slate-900 rounded-sm"></div>
          <div className="h-8 w-28 bg-slate-900 rounded-sm"></div>
          <div className="h-12 w-32 bg-slate-900 rounded-sm"></div>
          <div className="h-10 w-40 bg-slate-900 rounded-sm"></div>
        </div>
      </section>
    </div>
  );
}
