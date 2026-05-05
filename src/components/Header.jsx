import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        id="site-nav"
        className="fixed top-0 left-0 w-full z-[300] px-5 md:px-10 py-4 md:py-5"
      >
        <div className="hidden md:grid grid-cols-[auto_1fr_auto] items-center w-full gap-8 mix-blend-difference">
          <Link
            to="/"
            className="group inline-flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/assets/logowhite.png"
              alt="MONUMFORMA"
              className="logo-gold h-16 lg:h-20 w-auto object-contain"
            />
          </Link>

          <div className="flex justify-center items-center gap-9 lg:gap-12">
            <Link
              to="/"
              className="nav-link text-[13px] lg:text-[14px] uppercase tracking-[0.2em] text-white/95 font-mono"
            >
              Главная
            </Link>
            <Link
              to="/projects"
              className="nav-link text-[13px] lg:text-[14px] uppercase tracking-[0.2em] text-white/95 font-mono"
            >
              Проекты
            </Link>
            <Link
              to="/expertise"
              className="nav-link text-[13px] lg:text-[14px] uppercase tracking-[0.2em] text-white/95 font-mono"
            >
              Компетенции
            </Link>
            <Link
              to="/clients"
              className="nav-link text-[13px] lg:text-[14px] uppercase tracking-[0.2em] text-white/95 font-mono"
            >
              Клиентам
            </Link>
            <Link
              to="/company"
              className="nav-link text-[13px] lg:text-[14px] uppercase tracking-[0.2em] text-white/95 font-mono"
            >
              О компании
            </Link>
            <Link
              to="/contact"
              className="nav-link text-[13px] lg:text-[14px] uppercase tracking-[0.2em] text-white/95 font-mono"
            >
              Контакты
            </Link>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center border border-[#BFA37E] bg-[#BFA37E]/90 hover:bg-transparent px-7 py-3 text-[12px] uppercase tracking-[0.22em] text-[#141414] hover:text-[#BFA37E] transition-all font-mono"
          >
            Обсудить проект
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between w-full mix-blend-difference">
          <Link
            to="/"
            className="group inline-flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/assets/logowhite.png"
              alt="MONUMFORMA"
              className="logo-gold h-12 w-auto object-contain"
            />
          </Link>

          <button
            id="burger-btn"
            onClick={() => setIsMenuOpen(true)}
            className="cursor-pointer flex flex-col justify-center gap-[4px] p-2.5 rounded-md border border-white/20 bg-black/20 backdrop-blur-sm z-[301]"
          >
            <span className="block w-6 h-[1.5px] bg-white transition-all duration-300"></span>
            <span className="block w-6 h-[1.5px] bg-white transition-all duration-300"></span>
            <span className="block w-6 h-[1.5px] bg-white transition-all duration-300"></span>
          </button>
        </div>
      </nav>

      {/* Slide Menu */}
      <div
        id="slide-menu"
        className="fixed top-0 w-[280px] h-screen bg-white z-[400] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.08)] md:hidden"
        style={{
          right: isMenuOpen ? "0px" : "-320px",
          padding: "74px 34px 34px",
        }}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-7 right-7 bg-transparent border-none cursor-pointer p-1"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M2 2L18 18M18 2L2 18"
              stroke="#141414"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <nav className="flex flex-col gap-0">
          <Link
            to="/"
            className="font-display font-light text-[1.45rem] text-[#111] hover:text-[#BFA37E] no-underline py-[12px] border-b border-black/5 transition-colors"
          >
            Главная
          </Link>
          <Link
            to="/projects"
            className="font-display font-light text-[1.45rem] text-[#111] hover:text-[#BFA37E] no-underline py-[12px] border-b border-black/5 transition-colors"
          >
            Проекты
          </Link>
          <Link
            to="/expertise"
            className="font-display font-light text-[1.45rem] text-[#111] hover:text-[#BFA37E] no-underline py-[12px] border-b border-black/5 transition-colors"
          >
            Компетенции
          </Link>
          <Link
            to="/clients"
            className="font-display font-light text-[1.45rem] text-[#111] hover:text-[#BFA37E] no-underline py-[12px] border-b border-black/5 transition-colors"
          >
            Клиентам
          </Link>
          <Link
            to="/company"
            className="font-display font-light text-[1.45rem] text-[#111] hover:text-[#BFA37E] no-underline py-[12px] border-b border-black/5 transition-colors"
          >
            О компании
          </Link>
          <Link
            to="/contact"
            className="font-display font-light text-[1.45rem] text-[#111] hover:text-[#BFA37E] no-underline py-[12px] transition-colors"
          >
            Контакты
          </Link>
        </nav>

        <p className="mt-auto font-mono text-[9px] tracking-[0.2em] uppercase text-black/25">
          MONUMFORMA S.L.
        </p>
      </div>

      {/* Menu Overlay */}
      <div
        id="menu-overlay"
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 bg-black/35 z-[399] transition-opacity duration-[400ms] md:hidden"
        style={{
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      ></div>
    </>
  );
}
