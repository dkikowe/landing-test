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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav 
        id="site-nav" 
        className="fixed top-0 left-0 w-full z-[200] mix-blend-difference flex justify-between items-end"
        style={{ padding: "1.4rem 2.5rem" }}
      >
        <Link 
          to="/" 
          className="text-[1rem] font-normal tracking-[0.08em] uppercase text-white font-display"
          onClick={() => setIsMenuOpen(false)}
        >
          monumforma
        </Link>
        
        {/* Burger */}
        <div 
          id="burger-btn" 
          onClick={() => setIsMenuOpen(true)} 
          className="cursor-pointer flex flex-col gap-[5px] p-1 z-[201]"
        >
          <span className="block w-6 h-[1.5px] bg-white transition-all duration-300"></span>
          <span className="block w-6 h-[1.5px] bg-white transition-all duration-300"></span>
          <span className="block w-6 h-[1.5px] bg-white transition-all duration-300"></span>
        </div>
      </nav>

      {/* Slide Menu */}
      <div 
        id="slide-menu" 
        className="fixed top-0 w-[300px] h-screen bg-white z-[300] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.08)]"
        style={{ 
          right: isMenuOpen ? "0px" : "-320px",
          padding: "80px 48px 48px"
        }}
      >
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-7 right-7 bg-transparent border-none cursor-pointer p-1"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 2L18 18M18 2L2 18" stroke="#141414" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        
        <nav className="flex flex-col gap-0">
          <Link to="/" className="font-display font-light text-2xl text-[#111] hover:text-[#BFA37E] no-underline py-[14px] border-b border-black/5 transition-colors">Главная</Link>
          <Link to="/projects" className="font-display font-light text-2xl text-[#111] hover:text-[#BFA37E] no-underline py-[14px] border-b border-black/5 transition-colors">Проекты</Link>
          <Link to="/expertise" className="font-display font-light text-2xl text-[#111] hover:text-[#BFA37E] no-underline py-[14px] border-b border-black/5 transition-colors">Компетенции</Link>
          <Link to="/process" className="font-display font-light text-2xl text-[#111] hover:text-[#BFA37E] no-underline py-[14px] border-b border-black/5 transition-colors">Инженерия</Link>
          <Link to="/clients" className="font-display font-light text-2xl text-[#111] hover:text-[#BFA37E] no-underline py-[14px] border-b border-black/5 transition-colors">Клиентам</Link>
          <Link to="/company" className="font-display font-light text-2xl text-[#111] hover:text-[#BFA37E] no-underline py-[14px] border-b border-black/5 transition-colors">О компании</Link>
          <Link to="/contact" className="font-display font-light text-2xl text-[#111] hover:text-[#BFA37E] no-underline py-[14px] transition-colors">Контакты</Link>
        </nav>
        
        <p className="mt-auto font-mono text-[9px] tracking-[0.2em] uppercase text-black/25">
          monumforma studio
        </p>
      </div>

      {/* Menu Overlay */}
      <div 
        id="menu-overlay" 
        onClick={() => setIsMenuOpen(false)} 
        className="fixed inset-0 bg-black/35 z-[299] transition-opacity duration-[400ms]"
        style={{ 
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none"
        }}
      ></div>
    </>
  );
}
