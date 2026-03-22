import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  const heroWrapRef = useRef(null);
  const heroVeilRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (!heroWrapRef.current || !heroVeilRef.current) return;
      const sy = window.scrollY;
      const h = heroWrapRef.current.offsetHeight;
      // Start fading out when scrolled 30% of hero height, fully faded at 80%
      heroVeilRef.current.style.opacity = Math.min(1, Math.max(0, (sy - h * 0.3) / (h * 0.5)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, [id]); // Re-run when project changes

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F7] text-[#141414]">
        <h1 className="text-2xl font-light">Project not found</h1>
      </div>
    );
  }

  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <div className="font-display bg-[#F9F9F7] text-[#141414]">
      {/* VEIL */}
      <div 
        id="hero-veil" 
        ref={heroVeilRef} 
        style={{ position: "fixed", inset: 0, zIndex: 9, background: "#F9F9F7", opacity: 0, pointerEvents: "none", willChange: "opacity" }}
      ></div>

      {/* STICKY HERO */}
      <div 
        id="hero-sticky-wrap" 
        ref={heroWrapRef}
        style={{ position: "sticky", top: 0, zIndex: 1, height: "100dvh", overflow: "hidden" }}
      >
        <section 
          id="hero-section" 
          className="bg-[#141414]"
          style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "flex-end" }}
        >
          <div className="absolute inset-0">
            <img
              alt={project.title}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 45%" }}
              src={project.image}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top,rgba(20,20,20,.85) 0%,rgba(20,20,20,.15) 55%,transparent 100%)",
              }}
            ></div>
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-14 w-full pb-20">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <p className="hero-text font-mono text-[10px] text-primary tracking-[.45em] uppercase mb-5">
                  {project.category} — {project.scale}
                </p>
                <h1
                  className="hero-text-delay font-light leading-none tracking-tight"
                  style={{ fontSize: "clamp(2.8rem,5.5vw,5.5rem)" }}
                >
                  <span className="text-primary" style={{ fontStyle: "italic" }}>
                    {project.title.split(" ")[0]}
                  </span>
                  <br />
                  <span className="text-white" style={{ fontSize: "clamp(1.4rem,2.5vw,2.2rem)", letterSpacing: ".02em" }}>
                    {project.title.split(" ").slice(1).join(" ") || project.material}
                  </span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 hero-text-delay-2 flex flex-col gap-4 pb-2">
                <div className="flex items-center gap-4">
                  <div className="w-px h-10 flex-shrink-0" style={{ background: "rgba(191,163,126,.3)" }}></div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,.3)" }}>
                      Material
                    </p>
                    <p className="font-light text-white">{project.material}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-px h-10 flex-shrink-0" style={{ background: "rgba(191,163,126,.3)" }}></div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,.3)" }}>
                      Scale
                    </p>
                    <p className="font-light text-white">{project.scale}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
            <div className="w-px h-9 relative overflow-hidden" style={{ background: "rgba(255,255,255,.12)" }}>
              <div className="absolute inset-0 scroll-indicator" style={{ background: "#BFA37E" }}></div>
            </div>
          </div>
        </section>
      </div>

      {/* PAGE CONTENT */}
      <div 
        id="page-content"
        style={{ position: "relative", zIndex: 10, background: "#F9F9F7", marginTop: "0" }}
      >
        {/* META STRIP — technical labels */}
        <div className="border-b" style={{ background: "#F5F5F3", borderColor: "rgba(20,20,20,.07)" }}>
          <div className="max-w-[1400px] mx-auto px-8 md:px-14 grid grid-cols-2 md:grid-cols-5">
            {project.details?.specs?.slice(0, 5).map((spec, index) => (
              <div
                key={index}
                className={`py-8 ${index < 4 ? "pr-8 border-r md:border-r" : "pl-8"} ${
                  index % 2 === 0 && index < 4 ? "border-r" : ""
                }`}
                style={{ borderColor: "rgba(20,20,20,.07)" }}
              >
                <p className="font-mono text-[9px] uppercase tracking-[.3em] mb-2" style={{ color: "rgba(20,20,20,.35)" }}>
                  {spec.label}
                </p>
                <p className="font-light text-lg" style={{ color: "#141414" }}>
                  {spec.value}
                </p>
                {spec.note && (
                  <p className="font-mono text-[9px] uppercase mt-1" style={{ color: "rgba(20,20,20,.3)" }}>
                    {spec.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* THE CHALLENGE */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 reveal">
              <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-5">The Challenge</p>
              <h2
                className="font-light uppercase tracking-tight leading-none"
                style={{ fontSize: "clamp(1.8rem,2.8vw,2.6rem)", color: "#141414" }}
              >
                Форма,
                <br />
                материал
                <br />и пространство.
              </h2>
              <div className="h-px w-12 mt-6" style={{ background: "#BFA37E" }}></div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 reveal reveal-delay-1">
              <p className="font-light leading-relaxed mb-8" style={{ fontSize: "1.1rem", color: "rgba(20,20,20,.7)" }}>
                {project.description}
              </p>
              <p className="font-light leading-relaxed mb-8" style={{ color: "rgba(20,20,20,.5)" }}>
                {project.details?.concept}
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY — главное фото */}
        <div className="gal-img reveal" style={{ height: "75vh" }}>
          <img alt="Project detail" className="w-full h-full object-cover" src={project.image} />
        </div>

        {/* ENGINEERING FOCUS */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#F5F5F3" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-16 reveal">
              <div className="lg:col-span-4">
                <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Engineering Focus</p>
                <h2
                  className="font-light uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(1.8rem,2.5vw,2.4rem)", color: "#141414" }}
                >
                  Что скрыто
                  <br />
                  под обшивкой.
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 reveal">
              <div>
                <p className="font-light leading-relaxed mb-6" style={{ color: "rgba(20,20,20,.6)" }}>
                  {project.details?.engineering}
                </p>
                <p className="font-light leading-relaxed mb-8" style={{ color: "rgba(20,20,20,.5)" }}>
                  {project.details?.production}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-8" style={{ borderTop: "1px solid rgba(20,20,20,.08)" }}>
                  <div>
                    <p className="font-mono text-[9px] text-primary uppercase tracking-widest mb-2">Structural</p>
                    <p className="font-mono text-[10px] uppercase leading-loose" style={{ color: "rgba(20,20,20,.45)" }}>
                      Self-supporting arch, variable cross-section, wind load optimized
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] text-primary uppercase tracking-widest mb-2">Fabrication</p>
                    <p className="font-mono text-[10px] uppercase leading-loose" style={{ color: "rgba(20,20,20,.45)" }}>
                      5-axis CNC, laser cut, &lt;0.5 mm tolerance, sectional assembly
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {/* Placeholder for technical drawing / Grasshopper script */}
                <div
                  className="w-full flex items-center justify-center"
                  style={{ height: "360px", background: "rgba(20,20,20,.04)", border: "1px solid rgba(20,20,20,.07)" }}
                >
                  <div className="text-center">
                    <span className="material-symbols-outlined mb-3" style={{ fontSize: "32px", color: "rgba(20,20,20,.15)" }}>
                      engineering
                    </span>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.25)" }}>
                      Technical drawing / Grasshopper definition
                    </p>
                    <p className="font-mono text-[8px] uppercase tracking-widest mt-1" style={{ color: "rgba(20,20,20,.15)" }}>
                      Replace with actual vector / B&W render
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY — три в ряд */}
        <div className="grid grid-cols-3 gap-px" style={{ background: "#E8E8E4" }}>
          <div className="gal-img reveal" style={{ height: "52vh" }}>
            <img
              alt="Macro detail"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXkSqJWpXEKjKOWDQG8lecsnzd40ExKTdGfiPpg-N9TtKpcGvtlzSTYuGyaEXYjA8jdMl8p6jhRNw15ULv1xsfny9RM2YT5mstgOX-KHg5jICP7ZCJ_xRPGUX90cs5h-g5q4kn_FVL0o2NJY-mB3RamIipdKBtdOCsl3FsGxE5V68D3_HWx85lfNzdPajXy_Ke5-RjWnfZlacdmbLWfngblOybjCkDu3vPmLzdT7ojtm_lnpQRub_0eFA0BY87-Jasq47mtFc2LM5m"
            />
          </div>
          <div className="gal-img reveal reveal-delay-1" style={{ height: "52vh" }}>
            <img
              alt="Elevation view"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMs0orzF2FtEs4LE-uOY-0z7ro0xTiF9WZoyF1NKa2ZhdjnWJAQfk35VBK31gsvmSGA-S8Oy5J7uwiyT0WKogBRr5UNOiRnyv71rBU-Au51AZKMor1BwM5kFHar2c7Ndqdrk3EMnrv5KLcSl-7sGKucBLgZGZT3Pio9QSa0seMRNzkAFjYFs77dOFwXXxp1SaPQUBQnyCgY5_Pu0HvGDPQ8R9Axgrz3YFA2Spl1ni-9NAZ9Ag3NBwSGJcBUcnOOSU_OJ4DvQvqH61u"
            />
          </div>
          <div className="gal-img reveal reveal-delay-2" style={{ height: "52vh" }}>
            <img
              alt="Context view"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1uzqlT1Sr4tVtX27b1DvLay-Px56xMBdxevn__-Hg_lGY-1CEInhzKd6X1nBxriS0xsx0nqAQYpvGLMFftJAfWXrylmap8zkT9Z1MkP6Wi5nCeNpsG_s0MfT7XQanB1PwvHuomuqy3BLLeSOs5vud_S0skwCiRohBoiofkSCzTdsXAegXcNmA5WYjZ-hXBXy5o5Lya9Emzjcr1_JT5j843IdljFh6jEkHml37iHCEN7FYK7_3ynP1W3ZFIbts97TL-Y1ILWgRII"
            />
          </div>
        </div>

        {/* PROCESS — implementation */}
        <section className="py-28 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 mb-16 reveal">
              <div className="lg:col-span-4">
                <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Implementation</p>
                <h2
                  className="font-light uppercase tracking-tight leading-none"
                  style={{ fontSize: "clamp(1.8rem,2.5vw,2.4rem)", color: "#141414" }}
                >
                  От концепции
                  <br />
                  до монтажа.
                </h2>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(20,20,20,.08)" }}>
              <div className="step-row reveal">
                <span className="font-mono text-[9px] text-primary uppercase tracking-widest pt-1">Concept</span>
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.6)" }}>
                  {project.details?.concept || "Анализ контекста и разработка концепции."}
                </p>
              </div>
              <div className="step-row reveal">
                <span className="font-mono text-[9px] text-primary uppercase tracking-widest pt-1">Engineering</span>
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.6)" }}>
                  {project.details?.engineering || "Инженерные расчеты и параметрическое моделирование."}
                </p>
              </div>
              <div className="step-row reveal">
                <span className="font-mono text-[9px] text-primary uppercase tracking-widest pt-1">Fabrication</span>
                <p className="font-light leading-relaxed" style={{ color: "rgba(20,20,20,.6)" }}>
                  {project.details?.production || "Изготовление на производстве monumforma."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE */}
        <section
          className="py-24 px-8 md:px-14"
          style={{ background: "#F5F5F3", borderTop: "1px solid rgba(20,20,20,.06)" }}
        >
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 reveal">
            <div className="lg:col-span-4">
              <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Value</p>
              <h2
                className="font-light uppercase tracking-tight leading-none"
                style={{ fontSize: "clamp(1.8rem,2.5vw,2.4rem)", color: "#141414" }}
              >
                Результат
                <br />
                для заказчика.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-light leading-relaxed mb-6" style={{ fontSize: "1.05rem", color: "rgba(20,20,20,.65)" }}>
                Объект стал визуальным маркером локации — жители используют его как точку встречи и адресный ориентир.
                Девелопер включил конструкцию в маркетинговые материалы как ключевой элемент идентичности проекта.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8" style={{ borderTop: "1px solid rgba(20,20,20,.08)" }}>
                <div>
                  <span className="block font-light leading-none mb-2" style={{ fontSize: "1.8rem", color: "#BFA37E" }}>
                    0
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.3)" }}>
                    Service requests
                    <br />
                    year one
                  </span>
                </div>
                <div>
                  <span className="block font-light leading-none mb-2" style={{ fontSize: "1.8rem", color: "#BFA37E" }}>
                    4
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.3)" }}>
                    Days on-site
                    <br />
                    assembly
                  </span>
                </div>
                <div>
                  <span className="block font-light leading-none mb-2" style={{ fontSize: "1.8rem", color: "#BFA37E" }}>
                    3
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(20,20,20,.3)" }}>
                    Street views
                    <br />
                    visibility
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WIDE PHOTO */}
        <div className="gal-img" style={{ height: "65vh" }}>
          <img
            alt="Completed object"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCldUVennI4I72et6AuVe32w-YlxSfQ0R38jKo5B5P-XJymM8WIfFZ9bzsdLK-9EiP4Aod628-0yPk5Qd0P4fH2xedJ61ejgvtwQIRrAHBEpmSIRSF_3jM4bi-IzUv3NqSPJ0yUC0BmlxMSf0qwZuaeJG_u86SS5hAvEdMzhMfcWm6_PLgzklpzlEcQKHeuvSxiWEwTn2go_LINB_7FEI2U8vzKSlNFTmo_LfeGgthMeiCrTundUjsfP1Z6vPhX9D4n_rpWph4NfbeF"
          />
        </div>

        {/* CTA + NEXT/PREV */}
        <section className="py-24 px-8 md:px-14" style={{ background: "#F9F9F7" }}>
          <div className="max-w-[1400px] mx-auto">
            {/* CTA */}
            <div className="reveal mb-20 pb-20 border-b" style={{ borderColor: "rgba(20,20,20,.08)" }}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <div>
                  <p className="font-mono text-[9px] text-primary uppercase tracking-[.4em] mb-4">Similar challenge?</p>
                  <h2
                    className="font-light tracking-tight leading-none"
                    style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#141414" }}
                  >
                    Обсудим вашу задачу.
                  </h2>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 font-mono text-[10px] tracking-widest uppercase bg-[#BFA37E] text-[#141414] px-8 py-4 border border-[#BFA37E] transition-colors hover:bg-transparent hover:text-[#141414]"
                >
                  <span>Обсудить проект</span>
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Next / Prev */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px reveal" style={{ background: "rgba(20,20,20,.06)" }}>
              <Link
                to="/projects"
                className="nav-proj flex items-center gap-6 p-8 group"
                style={{ background: "#F9F9F7" }}
              >
                <span className="material-symbols-outlined text-2xl" style={{ color: "#BFA37E" }}>
                  arrow_back
                </span>
                <div>
                  <p
                    className="font-mono text-[9px] uppercase tracking-widest mb-2"
                    style={{ color: "rgba(20,20,20,.35)" }}
                  >
                    All Projects
                  </p>
                  <p className="font-light uppercase tracking-tight" style={{ fontSize: "1rem", color: "#141414" }}>
                    Back to Archive
                  </p>
                </div>
              </Link>
              <Link
                to={`/projects/${nextProject.id}`}
                className="nav-proj flex items-center justify-between gap-6 p-8 group"
                style={{ background: "#F9F9F7" }}
              >
                <div className="overflow-hidden flex-shrink-0" style={{ width: "80px", height: "60px" }}>
                  <img alt="Next project" className="w-full h-full object-cover" src={nextProject.image} />
                </div>
                <div className="flex-1 text-right">
                  <p
                    className="font-mono text-[9px] uppercase tracking-widest mb-2"
                    style={{ color: "rgba(20,20,20,.35)" }}
                  >
                    Next Project
                  </p>
                  <p className="font-light uppercase tracking-tight" style={{ fontSize: "1rem", color: "#141414" }}>
                    {nextProject.title}
                  </p>
                </div>
                <span className="material-symbols-outlined text-2xl" style={{ color: "#BFA37E" }}>
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
