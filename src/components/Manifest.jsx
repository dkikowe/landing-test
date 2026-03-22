import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Manifest() {
  const [openComp, setOpenComp] = useState(null);

  useEffect(() => {
    // Reveal animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Hero scroll animation
    const heroWrap = document.getElementById("hero-wrap");
    const heroBg = document.getElementById("hero-bg");
    const heroVeil = document.getElementById("hero-veil");

    const updateHero = () => {
      if (!heroWrap || !heroBg || !heroVeil) return;

      const s = window.scrollY;
      // Ускоряем анимацию: теперь она завершается за первые 150px скролла (при малейшем скролле)
      const p = Math.min(1, s / 150);

      // Весь hero вниз + исчезает
      heroWrap.style.transform = `translateY(${p * 120}px)`;
      heroWrap.style.opacity = 1 - p;

      // Тёмно-графитовый veil нарастает динамически
      heroVeil.style.opacity = Math.min(1, p * 2.2);

      // Фон параллакс внутри
      heroBg.style.transform = `translateY(${s * 0.3}px)`;
    };

    window.addEventListener("scroll", updateHero, { passive: true });
    updateHero(); // Initial call

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateHero);
    };
  }, []);

  const toggleComp = (index) => {
    setOpenComp(openComp === index ? null : index);
  };

  return (
    <div className="bg-[#F9F9F7] text-[#141414] font-display overflow-x-hidden">
      {/* 1.1 Hero Section (Video from original Manifest.jsx) */}
      <div
        id="hero-wrap"
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col z-[1] will-change-transform"
      >
        <video
          id="hero-bg"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 will-change-transform"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
        {/* Графитовый veil — нарастает при скролле */}
        <div
          id="hero-veil"
          className="absolute inset-0 z-[15] bg-white opacity-0 pointer-events-none"
        ></div>

        {/* Hero content */}
        <div className="relative z-20 h-full flex flex-col">
          <div className="flex-1 flex flex-col justify-end px-8 md:px-14 pb-24">
            <div className="max-w-5xl">
              <h1 className="hero-text-delay text-white font-light leading-[1.05] tracking-tight mb-8 text-[clamp(2rem,3.8vw,4rem)]">
                Сложные{" "}
                <em className="text-[#BFA37E] italic font-light">
                  архитектурные формы
                </em>
                <br />и{" "}
                <em className="text-[#BFA37E] italic font-light">
                  световые решения
                </em>
                <br />
                для городской и общественной среды.
              </h1>
              <p className="hero-text-delay-2 text-white/60 font-light leading-relaxed max-w-2xl text-[clamp(1rem,1.4vw,1.2rem)]">
                Международная студия дизайна и инженерии. Реализуем знаковые
                объекты для мировых брендов и современных мегаполисов.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div id="page-content" className="relative z-[2] bg-white">
        {/* ЧЕТЫРЕ НАПРАВЛЕНИЯ */}
        <section className="relative z-10 bg-white px-8 pb-12 pt-8">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-1.5 items-start">
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block reveal h-[74vh] mt-0"
            >
              <img
                alt="Архитектурные объекты"
                className="w-full h-full object-cover absolute inset-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGAdx3ehF7y0gAaYtnrWx_b-8_t3K_UkNMbYnHZQQW-gtbmGZftglyZ3GebqzeUVJa90OOx2QP_xgCZ0HWbXWaDyjr_arrL7NNoz3yeqSfJMOjUuFR5ZgR3p9fEdrF9WbJPAR7mM97Uyv-W55RFmuthsb1CLhUsWR2UItDqXqarSjFsHsL_WZBsLQFJ2CnG6SOq7cXA58iMDgzVmMxJ2s9moI9Xh3S6Ey_3eXl-G3_gFF8Gzjc5polQyI5ZnS_vtH5AYQghME9_Eeb"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight tracking-tight text-[clamp(1rem,1.5vw,1.4rem)]">
                  Архитектурные
                  <br />
                  объекты и инсталляции
                </h3>
                <div className="mt-5 card-arrow inline-flex items-center gap-3">
                  <div className="w-8 h-px bg-[#BFA37E]"></div>
                  <span className="font-mono text-[#BFA37E] text-[10px] uppercase tracking-widest">
                    Подробнее
                  </span>
                  <span className="material-symbols-outlined text-[#BFA37E] text-base">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block reveal reveal-delay-1 h-[74vh] mt-[80px]"
            >
              <img
                alt="Малые архитектурные формы"
                className="w-full h-full object-cover absolute inset-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMs0orzF2FtEs4LE-uOY-0z7ro0xTiF9WZoyF1NKa2ZhdjnWJAQfk35VBK31gsvmSGA-S8Oy5J7uwiyT0WKogBRr5UNOiRnyv71rBU-Au51AZKMor1BwM5kFHar2c7Ndqdrk3EMnrv5KLcSl-7sGKucBLgZGZT3Pio9QSa0seMRNzkAFjYFs77dOFwXXxp1SaPQUBQnyCgY5_Pu0HvGDPQ8R9Axgrz3YFA2Spl1ni-9NAZ9Ag3NBwSGJcBUcnOOSU_OJ4DvQvqH61u"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight tracking-tight text-[clamp(1rem,1.5vw,1.4rem)]">
                  Малые архитектурные
                  <br />
                  формы и благоустройство
                </h3>
                <div className="mt-5 card-arrow inline-flex items-center gap-3">
                  <div className="w-8 h-px bg-[#BFA37E]"></div>
                  <span className="font-mono text-[#BFA37E] text-[10px] uppercase tracking-widest">
                    Подробнее
                  </span>
                  <span className="material-symbols-outlined text-[#BFA37E] text-base">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block reveal reveal-delay-2 h-[74vh] mt-[40px]"
            >
              <img
                alt="Медиа-архитектура"
                className="w-full h-full object-cover absolute inset-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRfGRnRhZ4D_ZLaJm-8P4h9_JU-Jl99xO7G0KcjUIB6SCvz2ubgTmgl97ezTmWtOaYIqCogjZsIVwIbTFB5FI1kMDOD0W9EC4bqxAoJCCyT1P00TjOhDSyF7px2Hwe-4CHR_idWFDMUGPuyxVU7KiERxBFi1EEzyFj_-QtVYzrmnRVTtVZ9OqWBlsj6NwAq0TPsF_yteEA4Z1zxznU2qC-MCaeszmtqvy_vHhyAi6HVQZ6S7IEK7K4kQtB2rv3EgmY9hwDs4lXCOIC"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/50"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight tracking-tight text-[clamp(1rem,1.5vw,1.4rem)]">
                  Медиа-архитектура
                  <br />и световые системы
                </h3>
                <div className="mt-5 card-arrow inline-flex items-center gap-3">
                  <div className="w-8 h-px bg-[#BFA37E]"></div>
                  <span className="font-mono text-[#BFA37E] text-[10px] uppercase tracking-widest">
                    Подробнее
                  </span>
                  <span className="material-symbols-outlined text-[#BFA37E] text-base">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block reveal reveal-delay-3 h-[74vh] mt-[120px]"
            >
              <img
                alt="Праздничная иллюминация"
                className="w-full h-full object-cover absolute inset-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF9s7FPrS5VQPbrlIL0AT3xCpoMIQA5ESJN2DPw45D_5HS815Egc1YMZl_sQwWMYVc6MAViMzabOkxC8TH8Whdrdwg7Gc8fp-aheGH7Ghsdx4Yakryac4_8UfCFD14LHZBKJSwLSFUgsYihzwfmlJOLWC2vR-ebIeAwNZJLH5xp3cdjGBGUDt4HlwGtrN80dSLXLp0lwYpUmcNZYN3p6NlLNSO2SW3T2Dyw4zKfofINYb726xBuJjdMosaMCaFuBj1jpDOgVvklMdu"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight tracking-tight text-[clamp(1rem,1.5vw,1.4rem)]">
                  Праздничная иллюминация
                  <br />и событийное оформление
                </h3>
                <div className="mt-5 card-arrow inline-flex items-center gap-3">
                  <div className="w-8 h-px bg-[#BFA37E]"></div>
                  <span className="font-mono text-[#BFA37E] text-[10px] uppercase tracking-widest">
                    Подробнее
                  </span>
                  <span className="material-symbols-outlined text-[#BFA37E] text-base">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-1 md:hidden gap-1.5">
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block h-[60vw]"
            >
              <img
                alt="Архитектурные объекты"
                className="w-full h-full object-cover absolute inset-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGAdx3ehF7y0gAaYtnrWx_b-8_t3K_UkNMbYnHZQQW-gtbmGZftglyZ3GebqzeUVJa90OOx2QP_xgCZ0HWbXWaDyjr_arrL7NNoz3yeqSfJMOjUuFR5ZgR3p9fEdrF9WbJPAR7mM97Uyv-W55RFmuthsb1CLhUsWR2UItDqXqarSjFsHsL_WZBsLQFJ2CnG6SOq7cXA58iMDgzVmMxJ2s9moI9Xh3S6Ey_3eXl-G3_gFF8Gzjc5polQyI5ZnS_vtH5AYQghME9_Eeb"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight text-[1.3rem]">
                  Архитектурные объекты и инсталляции
                </h3>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block h-[60vw]"
            >
              <img
                alt="Малые формы"
                className="w-full h-full object-cover absolute inset-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMs0orzF2FtEs4LE-uOY-0z7ro0xTiF9WZoyF1NKa2ZhdjnWJAQfk35VBK31gsvmSGA-S8Oy5J7uwiyT0WKogBRr5UNOiRnyv71rBU-Au51AZKMor1BwM5kFHar2c7Ndqdrk3EMnrv5KLcSl-7sGKucBLgZGZT3Pio9QSa0seMRNzkAFjYFs77dOFwXXxp1SaPQUBQnyCgY5_Pu0HvGDPQ8R9Axgrz3YFA2Spl1ni-9NAZ9Ag3NBwSGJcBUcnOOSU_OJ4DvQvqH61u"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight text-[1.3rem]">
                  Малые архитектурные формы
                </h3>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block h-[60vw]"
            >
              <img
                alt="Медиа"
                className="w-full h-full object-cover absolute inset-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRfGRnRhZ4D_ZLaJm-8P4h9_JU-Jl99xO7G0KcjUIB6SCvz2ubgTmgl97ezTmWtOaYIqCogjZsIVwIbTFB5FI1kMDOD0W9EC4bqxAoJCCyT1P00TjOhDSyF7px2Hwe-4CHR_idWFDMUGPuyxVU7KiERxBFi1EEzyFj_-QtVYzrmnRVTtVZ9OqWBlsj6NwAq0TPsF_yteEA4Z1zxznU2qC-MCaeszmtqvy_vHhyAi6HVQZ6S7IEK7K4kQtB2rv3EgmY9hwDs4lXCOIC"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/50"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight text-[1.3rem]">
                  Медиа-архитектура и световые системы
                </h3>
              </div>
            </Link>
            <Link
              to="/expertise"
              className="dir-card relative overflow-hidden cursor-pointer block h-[60vw]"
            >
              <img
                alt="Иллюминация"
                className="w-full h-full object-cover absolute inset-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF9s7FPrS5VQPbrlIL0AT3xCpoMIQA5ESJN2DPw45D_5HS815Egc1YMZl_sQwWMYVc6MAViMzabOkxC8TH8Whdrdwg7Gc8fp-aheGH7Ghsdx4Yakryac4_8UfCFD14LHZBKJSwLSFUgsYihzwfmlJOLWC2vR-ebIeAwNZJLH5xp3cdjGBGUDt4HlwGtrN80dSLXLp0lwYpUmcNZYN3p6NlLNSO2SW3T2Dyw4zKfofINYb726xBuJjdMosaMCaFuBj1jpDOgVvklMdu"
              />
              <div className="card-overlay absolute inset-0 z-10 bg-black/40"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-light uppercase leading-tight text-[1.3rem]">
                  Праздничная иллюминация
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* ПРОЕКТЫ */}
        <section className="bg-[#F9F9F7] py-20 px-8 md:px-14 border-t border-[#BFA37E]/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-14 reveal">
              <div>
                <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight leading-none text-[#111]">
                  Избранные проекты
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Project 1 */}
              <Link
                to="/projects/022"
                className="md:col-span-8 proj-card group cursor-pointer reveal block"
              >
                <div className="aspect-[16/9] overflow-hidden mb-4">
                  <img
                    alt="PASSAGE | Urban Art"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNS-FWZUsMYZTSMtIKH0U4Ozhdd5_85qa_0sSyTCpIZjOTLa8PswOFtP-rRj5gnL338tZWO2DIRmiLfTENKu0FMHkxvBLrZXAbRq6hRExk2cUZhB3Q9d0_RmjMqYnCNYDU1SKwEyt4_PQ45bx6ECUkN9-kdWBfyls1TBSD7hxRtgC6atNdaxOJYxzTIlfBUo4SywMBaTq4xw6ciVTNVKRydN3NDXvHjGh4bKtB7FtcogH9cFrc9d77UY6uC3HMO89MMQbdMGy5xqSl"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-light uppercase tracking-tight text-[#111]">
                      PASSAGE | Urban Art
                    </h4>
                    <p className="font-mono text-[9px] text-[#141414]/40 mt-1 uppercase tracking-wide">
                      Валенсия, Испания — Флагманский объект
                    </p>
                  </div>
                  <div className="font-mono text-[9px] text-[#141414]/40 space-y-1 text-right">
                    <p>
                      Год: <span className="text-[#141414]">2023</span>
                    </p>
                  </div>
                </div>
              </Link>
              {/* Project 2 */}
              <Link
                to="/projects/011"
                className="md:col-span-4 md:mt-12 proj-card group cursor-pointer reveal reveal-delay-1 block"
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    alt="PRIME RESIDENCE"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA80MRThVqC3YVgIyDl9IsVFpdu600EKOQhJndQTgYXoXDwW6jENlQYHDAUdmbUxutNhjegTYPqxfjm3gjLbydzmEKssQGAQxHkYYdIhC2QC3hYwZLuKNAzF9myYgJoIm4IHlraWMUPiI6LglCtyPtcf06_chlSYeONGkoLc8Ud9zZgUeecZhILn19m1c9xjovdjKCafOggER35nuWoOXQbYJYETxdtXQqFMpkEImhqwZi-KoMlXHKT12bIa4CqkBuiS4OiH3hAXEH8qj"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-light uppercase tracking-tight text-[#111]">
                      PRIME RESIDENCE
                    </h4>
                    <p className="font-mono text-[9px] text-[#141414]/40 mt-1 uppercase tracking-wide">
                      Жилой комплекс премиум-класса
                    </p>
                  </div>
                  <div className="font-mono text-[9px] text-[#141414]/40 space-y-1 text-right">
                    <p>
                      Год: <span className="text-[#141414]">2022</span>
                    </p>
                  </div>
                </div>
              </Link>
              {/* Project 3 */}
              <Link
                to="/projects/09"
                className="md:col-span-4 proj-card group cursor-pointer reveal reveal-delay-2 block"
              >
                <div className="aspect-square overflow-hidden mb-4">
                  <img
                    alt="ENERGY TOWER"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXkSqJWpXEKjKOWDQG8lecsnzd40ExKTdGfiPpg-N9TtKpcGvtlzSTYuGyaEXYjA8jdMl8p6jhRNw15ULv1xsfny9RM2YT5mstgOX-KHg5jICP7ZCJ_xRPGUX90cs5h-g5q4kn_FVL0o2NJY-mB3RamIipdKBtdOCsl3FsGxE5V68D3_HWx85lfNzdPajXy_Ke5-RjWnfZlacdmbLWfngblOybjCkDu3vPmLzdT7ojtm_lnpQRub_0eFA0BY87-Jasq47mtFc2LM5m"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-light uppercase tracking-tight text-[#111]">
                      ENERGY TOWER
                    </h4>
                    <p className="font-mono text-[9px] text-[#141414]/40 mt-1 uppercase tracking-wide">
                      Штаб-квартира глобальной компании
                    </p>
                  </div>
                  <div className="font-mono text-[9px] text-[#141414]/40 space-y-1 text-right">
                    <p>
                      Год: <span className="text-[#141414]">2021</span>
                    </p>
                  </div>
                </div>
              </Link>
              {/* Project 4 */}
              <Link
                to="/projects/015"
                className="md:col-span-8 proj-card group cursor-pointer reveal reveal-delay-1 block"
              >
                <div className="aspect-[16/7] overflow-hidden mb-4">
                  <img
                    alt="NORDIC WINTER"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMs0orzF2FtEs4LE-uOY-0z7ro0xTiF9WZoyF1NKa2ZhdjnWJAQfk35VBK31gsvmSGA-S8Oy5J7uwiyT0WKogBRr5UNOiRnyv71rBU-Au51AZKMor1BwM5kFHar2c7Ndqdrk3EMnrv5KLcSl-7sGKucBLgZGZT3Pio9QSa0seMRNzkAFjYFs77dOFwXXxp1SaPQUBQnyCgY5_Pu0HvGDPQ8R9Axgrz3YFA2Spl1ni-9NAZ9Ag3NBwSGJcBUcnOOSU_OJ4DvQvqH61u"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-light uppercase tracking-tight text-[#111]">
                      NORDIC WINTER
                    </h4>
                    <p className="font-mono text-[9px] text-[#141414]/40 mt-1 uppercase tracking-wide">
                      Флагманский молл международной сети
                    </p>
                  </div>
                  <div className="font-mono text-[9px] text-[#141414]/40 space-y-1 text-right">
                    <p>
                      Год: <span className="text-[#141414]">2024</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* TIZER */}
            <div className="mt-16 pt-12 border-t border-[#BFA37E]/15 reveal">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[9px] text-[#BFA37E] uppercase tracking-[0.4em]">
                  Future Projects / В разработке
                </span>
                <div className="h-px flex-1 bg-[#BFA37E]/15"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div
                  className="md:col-span-6 overflow-hidden relative"
                  style={{ aspectRatio: "16/7", background: "#e8e6e0" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[9px] text-[#141414]/25 uppercase tracking-[0.4em]">
                      Визуализация в работе
                    </span>
                  </div>
                </div>
                <div className="md:col-span-6 md:pl-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="inline-block w-[7px] h-[7px] rounded-full bg-[#BFA37E]"></span>
                    <span className="font-mono text-[9px] text-[#BFA37E] uppercase tracking-[0.3em]">
                      В стадии реализации / Проектирование
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tight leading-none mb-4 text-[#111]">
                    ORQUÍDEA
                    <br />
                    Junco Houses
                  </h3>
                  <p className="font-mono text-[9px] text-[#141414]/40 uppercase tracking-wide mb-6">
                    Аликанте, Испания
                  </p>
                  <p className="text-[#141414]/50 font-light leading-relaxed text-sm max-w-sm">
                    Комплекс резиденций с авторской концепцией светового и
                    архитектурного решения. Знаковый объект испанского
                    побережья.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center reveal">
              <Link
                to="/projects"
                className="flex items-center gap-4 border border-[#141414]/15 px-10 py-4 font-mono text-[10px] uppercase tracking-widest text-[#141414]/45 hover:border-[#BFA37E] hover:text-[#111] transition-all"
              >
                Смотреть все проекты
                <span className="material-symbols-outlined text-base text-[#BFA37E]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* СТАТИСТИКА */}
        <section className="bg-[#F9F9F7] border-t border-b border-[#141414]/[0.08]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 px-8 md:px-14">
            <div className="flex flex-col py-12 pr-8 border-r border-[#141414]/[0.08]">
              <span className="font-mono uppercase tracking-[0.3em] mb-2 text-[9px] text-[#141414]/30">
                Опыт работы
              </span>
              <p className="font-light leading-none stat-num text-[clamp(1.6rem,2.5vw,2.4rem)] text-[#141414]">
                17 лет
              </p>
              <span className="font-mono uppercase mt-2 text-[9px] text-[#141414]/20 tracking-[0.15em]">
                с 2009 года
              </span>
            </div>
            <div className="flex flex-col py-12 px-8 border-r border-[#141414]/[0.08]">
              <span className="font-mono uppercase tracking-[0.3em] mb-2 text-[9px] text-[#141414]/30">
                Реализовано
              </span>
              <p className="font-light leading-none stat-num text-[clamp(1.6rem,2.5vw,2.4rem)] text-[#141414]">
                180+
              </p>
              <span className="font-mono uppercase mt-2 text-[9px] text-[#141414]/20 tracking-[0.15em]">
                объектов
              </span>
            </div>
            <div className="flex flex-col py-12 px-8 border-r border-[#141414]/[0.08]">
              <span className="font-mono uppercase tracking-[0.3em] mb-2 text-[9px] text-[#141414]/30">
                Изготовлено
              </span>
              <p className="font-light leading-none stat-num text-[clamp(1.6rem,2.5vw,2.4rem)] text-[#141414]">
                2500+
              </p>
              <span className="font-mono uppercase mt-2 text-[9px] text-[#141414]/20 tracking-[0.15em]">
                изделий
              </span>
            </div>
            <div className="flex flex-col py-12 pl-8">
              <span className="font-mono uppercase tracking-[0.3em] mb-2 text-[9px] text-[#141414]/30">
                Партнёры
              </span>
              <p className="font-light leading-none stat-num text-[clamp(1.6rem,2.5vw,2.4rem)] text-[#141414]">
                12
              </p>
              <span className="font-mono uppercase mt-2 text-[9px] text-[#141414]/20 tracking-[0.15em]">
                фабрик в Европе и мире
              </span>
            </div>
          </div>
        </section>

        {/* ПРОИЗВОДСТВО */}
        <section className="bg-[#f5f5f3] py-28 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <span className="font-mono text-[9px] text-[#BFA37E] uppercase tracking-[0.4em] mb-5 block">
                Производство
              </span>
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-[#111] leading-none mb-8">
                От чертежа
                <br />
                до объекта.
              </h2>
              <p className="text-[#111]/60 font-light leading-relaxed max-w-md mb-10 text-[1rem]">
                Три собственных производственных цеха — металлообработка и
                каркасные конструкции, стеклопластик и эпоксидные смолы,
                промышленная покраска и чистовая сборка. Каждый объект проходит
                через все этапы производства под авторским надзором — от первого
                чертежа до финального контроля качества перед отгрузкой.
              </p>
              <p className="text-[#111]/60 font-light leading-relaxed max-w-md mb-6 text-[1rem]">
                Световые системы строятся на базе протоколов DMX и Madrix: мы
                проектируем не только объект, но и сценарий его работы — от
                статичной иллюминации до кинетических инсталляций с
                динамическими программами. Параметрическое моделирование и
                CNC-производство позволяют реализовывать формы любой сложности
                без потери точности.
              </p>
              <p className="text-[#111]/60 font-light leading-relaxed max-w-md mb-10 text-[1rem]">
                Партнёрская сеть из 12 специализированных фабрик в Европе и мире
                расширяет наши возможности по материалам и тиражности — при
                сохранении единого стандарта качества на каждом объекте.
              </p>
              <Link
                to="/process"
                className="inline-flex items-center gap-4 group"
              >
                <div className="w-10 h-px bg-[#111]/15 group-hover:w-16 transition-all duration-500"></div>
                <span className="font-mono text-[#BFA37E] text-[10px] uppercase tracking-widest">
                  Узнать больше
                </span>
              </Link>
            </div>

            {/* Production grid */}
            <div className="grid grid-cols-2 gap-px bg-[#111]/5 border border-[#111]/5">
              <div className="prod-item p-8 bg-[#eeede9] reveal">
                <h4 className="text-[#111] text-base font-light uppercase tracking-tight mb-4">
                  Металлообработка
                </h4>
                <p className="text-[#111]/45 font-mono text-[12px] uppercase leading-relaxed">
                  Сталь, алюминий, кортен. Резка, сварка, шлифовка.
                </p>
              </div>
              <div className="prod-item p-8 bg-[#eeede9] reveal reveal-delay-1">
                <h4 className="text-[#111] text-base font-light uppercase tracking-tight mb-4">
                  Смолы и композиты
                </h4>
                <p className="text-[#111]/45 font-mono text-[12px] uppercase leading-relaxed">
                  Стеклопластик, смолы, эпоксиды. Ручное формование.
                </p>
              </div>
              <div className="prod-item p-8 bg-[#eeede9] reveal reveal-delay-2">
                <h4 className="text-[#111] text-base font-light uppercase tracking-tight mb-4">
                  Цифровое производство
                </h4>
                <p className="text-[#111]/45 font-mono text-[12px] uppercase leading-relaxed">
                  CNC-фрезерование. Сложная геометрия.
                </p>
              </div>
              <div className="prod-item p-8 bg-[#eeede9] reveal reveal-delay-1">
                <h4 className="text-[#111] text-base font-light uppercase tracking-tight mb-4">
                  Световые системы
                </h4>
                <p className="text-[#111]/45 font-mono text-[12px] uppercase leading-relaxed">
                  LED, DMX, Madrix. Световые конструкции.
                </p>
              </div>
              <div className="prod-item p-8 bg-[#eeede9] reveal reveal-delay-2">
                <h4 className="text-[#111] text-base font-light uppercase tracking-tight mb-4">
                  Покраска и сборка
                </h4>
                <p className="text-[#111]/45 font-mono text-[12px] uppercase leading-relaxed">
                  Промышленная покраска. Контроль качества.
                </p>
              </div>
              <div className="prod-item p-8 bg-[#eeede9] reveal reveal-delay-3">
                <h4 className="text-[#111] text-base font-light uppercase tracking-tight mb-4">
                  Логистика и монтаж
                </h4>
                <p className="text-[#111]/45 font-mono text-[12px] uppercase leading-relaxed">
                  Упаковка, доставка, монтаж на площадке.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* КОМПЕТЕНЦИИ */}
        <section className="bg-[#e8e6e0] border-t border-[#111]/5 py-28 px-8 md:px-14">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-end justify-between mb-0 reveal">
              <div className="flex items-baseline gap-6">
                <h2 className="font-light uppercase text-[#111] leading-none tracking-tight text-[clamp(2rem,4vw,3.8rem)]">
                  Экосистема компетенций
                </h2>
              </div>
            </div>
            <div className="h-px w-full bg-[#111]/10 mt-10 mb-0"></div>

            <div>
              {[
                {
                  num: "01",
                  title: "Art-direction & Concept",
                  sub: "Visual Identity & Narrative Design",
                  text: "Разработка уникальной визуальной идентичности объекта. Формирование нарратива и архитектурного образа с учётом контекста места и стратегии бренда заказчика.",
                },
                {
                  num: "02",
                  title: "Advanced Engineering",
                  sub: "Parametric Design & Structural Analysis",
                  text: "Параметрическое проектирование и расчёт сложных нагрузок. Разработка конструктивных решений для объектов нестандартной геометрии с полным инженерным обоснованием.",
                },
                {
                  num: "03",
                  title: "Light Design",
                  sub: "Dynamic Lighting Scenarios — DMX, Madrix",
                  text: "Создание динамических световых сценариев (DMX, Madrix). Проектирование кинетических световых инсталляций и синхронизация медиа-контента с архитектурной оболочкой.",
                },
                {
                  num: "04",
                  title: "Implementation Management",
                  sub: "Turnkey Delivery & Author's Supervision",
                  text: "Авторский надзор и реализация «под ключ». Полное управление проектом от рабочей документации до монтажа на объекте — в любой точке мира.",
                },
              ].map((comp, idx) => (
                <div
                  key={idx}
                  className="comp-acc border-b border-[#111]/10 hover:bg-[#BFA37E]/[0.08] transition-colors"
                >
                  <div
                    className="grid grid-cols-12 gap-4 items-center py-6 px-2 cursor-pointer select-none"
                    onClick={() => toggleComp(idx)}
                  >
                    <div className="col-span-1">
                      <span
                        className="comp-num font-mono text-3xl font-light transition-colors duration-300"
                        style={{
                          color:
                            openComp === idx ? "#BFA37E" : "rgba(0,0,0,0.12)",
                        }}
                      >
                        {comp.num}
                      </span>
                    </div>
                    <div className="col-span-9 lg:col-span-4">
                      <h4 className="text-lg font-light text-[#111] uppercase tracking-tight">
                        {comp.title}
                      </h4>
                    </div>
                    <div className="hidden lg:block lg:col-span-6 font-mono text-[#111]/40 text-[10px] uppercase tracking-widest">
                      {comp.sub}
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-end">
                      <span
                        className="comp-toggle material-symbols-outlined text-[#BFA37E] text-xl transition-transform duration-400"
                        style={{
                          transform:
                            openComp === idx ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        add
                      </span>
                    </div>
                  </div>
                  <div
                    className="comp-body overflow-hidden transition-all duration-500"
                    style={{ maxHeight: openComp === idx ? "200px" : "0px" }}
                  >
                    <p className="px-2 pb-8 lg:ml-[8.33%] max-w-2xl text-[#111]/55 font-mono text-[11px] uppercase leading-loose">
                      {comp.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center reveal">
              <Link
                to="/expertise"
                className="flex items-center gap-4 border border-[#111]/20 px-10 py-4 font-mono text-[10px] uppercase tracking-widest text-[#111]/50 hover:border-[#BFA37E] hover:text-[#111] transition-all"
              >
                Полный список компетенций
                <span className="material-symbols-outlined text-base text-[#BFA37E]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* О КОМПАНИИ */}
        <section className="bg-[#F9F9F7] py-28 px-8 md:px-14 border-t border-[#BFA37E]/10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight leading-none mb-8 text-[#111]">
                Константин Бурцев
              </h2>
              <blockquote className="text-2xl font-light italic text-[#141414]/60 border-l-2 border-[#BFA37E] pl-6 mb-8 leading-snug">
                "Объект становится архитектурой тогда, когда он меняет
                восприятие места."
              </blockquote>
              <p className="text-[#141414]/50 font-light leading-relaxed mb-6">
                Основатель monumforma. Более 17 лет в реализации сложных
                архитектурных объектов и световых инсталляций. Методология
                студии основана на одном принципе: художественное решение должно
                быть производственно реализуемым с первого чертежа.
              </p>
              <Link
                to="/company"
                className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-[#141414]/40 hover:text-[#BFA37E] transition-colors"
              >
                <span>О компании</span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="reveal reveal-delay-1">
              <div className="aspect-[4/5] overflow-hidden bg-[#141414]/5">
                <img
                  alt="Константин Бурцев"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="/assets/konst.JPG"
                  onError={(e) => {
                    if (!e.target.dataset.failed) {
                      e.target.dataset.failed = true;
                      e.target.src =
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCldUVennI4I72et6AuVe32w-YlxSfQ0R38jKo5B5P-XJymM8WIfFZ9bzsdLK-9EiP4Aod628-0yPk5Qd0P4fH2xedJ61ejgvtwQIRrAHBEpmSIRSF_3jM4bi-IzUv3NqSPJ0yUC0BmlxMSf0qwZuaeJG_u86SS5hAvEdMzhMfcWm6_PLgzklpzlEcQKHeuvSxiWEwTn2go_LINB_7FEI2U8vzKSlNFTmo_LfeGgthMeiCrTundUjsfP1Z6vPhX9D4n_rpWph4NfbeF";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* КЛИЕНТЫ */}
        <section className="bg-[#F9F9F7] py-28 px-8 md:px-14 border-t border-[#BFA37E]/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight leading-none text-[#111]">
                Работаем с теми,
                <br />
                кто формирует городскую среду.
              </h2>
            </div>

            <div className="mb-8 reveal">
              <div
                className="client-card bg-white border border-[#111]/[0.08] p-10"
                style={{ borderLeft: "3px solid #BFA37E" }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-2xl font-light uppercase tracking-tight mb-2 text-[#111]">
                      IKEA
                    </h4>
                    <p className="font-mono text-[9px] text-[#BFA37E] uppercase tracking-widest mb-4">
                      Глобальный контракт на 13+ объектов
                    </p>
                    <p className="text-[#141414]/50 font-light leading-relaxed text-sm max-w-lg">
                      Постоянный партнёр крупнейшей мировой сети. Разработка и
                      реализация флагманских объектов — навигационные
                      скульптуры, входные группы и световые инсталляции в
                      магазинах по всей Европе.
                    </p>
                  </div>
                  <div className="hidden md:block font-mono text-[9px] text-[#141414]/25 text-right">
                    <p className="text-[#BFA37E] uppercase tracking-widest mb-1">
                      Global Retail
                    </p>
                    <p>13+ объектов</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12 reveal">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-[#111]/[0.05]">
                {[
                  "Samsung",
                  "Adidas",
                  "Marriott",
                  "Gazprom",
                  "Lukoil",
                  "Hilton",
                ].map((client, i) => (
                  <div
                    key={i}
                    className="bg-[#F9F9F7] flex items-center justify-center py-8 px-6 group transition-all duration-300 hover:bg-white"
                  >
                    <span className="font-light text-[#141414]/40 uppercase tracking-[0.15em] text-sm group-hover:text-[#141414] transition-colors">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111]/[0.05]">
              {[
                {
                  title: "Global Energy Corporations",
                  sub: "Штаб-квартиры и представительства",
                  text: "Знаковые объекты для корпоративных кампусов и офисов мировых энергетических компаний. Архитектурные инсталляции, отражающие ценности бренда.",
                  delay: "",
                },
                {
                  title: "Tier-1 Developers",
                  sub: "Премиальная жилая среда",
                  text: "Арт-объекты и архитектурные формы для жилых комплексов класса premium и ultra-premium. Объекты, которые становятся лицом проекта.",
                  delay: "reveal-delay-1",
                },
                {
                  title: "International Hotel Chains",
                  sub: "Общественные зоны и лобби",
                  text: "Авторские объекты для международных гостиничных сетей. Световые и пространственные сценарии под концепцию бренда.",
                  delay: "reveal-delay-2",
                },
                {
                  title: "Metropolitan Areas",
                  sub: "Общественные пространства",
                  text: "Объекты для площадей, набережных и парков. Опыт реализации в рамках государственных тендеров и международных конкурсов.",
                  delay: "",
                },
                {
                  title: "Architecture Studios",
                  sub: "Партнёрские бюро",
                  text: "Производство и реализация объектов по проектам ведущих архитектурных студий Европы. Полное техническое сопровождение.",
                  delay: "reveal-delay-1",
                },
                {
                  title: "Cultural Institutions",
                  sub: "Музеи и фестивали",
                  text: "Временные и постоянные инсталляции для музеев, биеннале и городских событий. Сжатые сроки — наш стандарт.",
                  delay: "reveal-delay-2",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`client-card bg-white border border-[#111]/[0.08] p-10 reveal ${item.delay}`}
                >
                  <h4 className="text-xl font-light uppercase tracking-tight mb-2 text-[#111]">
                    {item.title}
                  </h4>
                  <p className="font-mono text-[9px] text-[#BFA37E] uppercase tracking-widest mb-4">
                    {item.sub}
                  </p>
                  <p className="text-[#141414]/50 font-light leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-start reveal">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#BFA37E] text-[#141414] px-10 py-3.5 font-mono text-[10px] tracking-[0.2em] uppercase border-2 border-[#BFA37E] transition-all duration-300 hover:bg-transparent hover:text-[#BFA37E]"
              >
                Узнать больше о работе с нами
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F9F9F7] pt-36 pb-14 px-8 md:px-14 border-t border-[#BFA37E]/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col items-center text-center mb-36 reveal">
              <h2 className="text-[#111] font-light uppercase tracking-tight leading-none mb-8 text-[clamp(2.4rem,5vw,5rem)]">
                Расскажите нам
                <br />о вашем проекте.
              </h2>
              <p className="text-[#141414]/50 font-light leading-relaxed max-w-xl mb-14 text-lg">
                Работаем с девелоперами, управляющими компаниями, архитектурными
                бюро и городскими службами. Каждый проект начинается с разговора
                — без обязательств, без шаблонных предложений.
              </p>
              <Link
                to="/contact"
                className="bg-[#BFA37E] hover:bg-transparent text-[#141414] hover:text-[#BFA37E] border-2 border-[#BFA37E] px-16 py-6 font-light text-xl uppercase tracking-tight transition-all inline-block"
              >
                Начать разговор
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
