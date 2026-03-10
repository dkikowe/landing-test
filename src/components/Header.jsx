import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Theme toggle logic
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  const isTransparent = isHome && !scrolled && !isMenuOpen;

  // Header style based on scroll and page - Theme Independent (Always Dark/Transparent)
  const headerClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isTransparent
      ? "bg-transparent border-transparent"
      : "bg-[#0F0F0F]/90 backdrop-blur-md border-b border-gray-800"
  }`;

  const textClass = "text-white hover:text-[#C89F5F] transition-colors";

  return (
    <nav className={headerClass}>
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
          <div className="h-20 w-auto relative flex items-center">
            <img
              src="/assets/logowhite.png"
              alt="monumforma logo"
              className="h-full w-auto object-contain logo-gold transition-opacity duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <Link
            to="/projects"
            className={`font-display text-xs tracking-widest uppercase transition-colors nav-link ${textClass}`}
          >
            ПРОЕКТЫ
          </Link>
          <Link
            to="/expertise"
            className={`font-display text-xs tracking-widest uppercase transition-colors nav-link ${textClass}`}
          >
            КОМПЕТЕНЦИИ
          </Link>
          <Link
            to="/process"
            className={`font-display text-xs tracking-widest uppercase transition-colors nav-link ${textClass}`}
          >
            ИНЖЕНЕРИЯ
          </Link>
          <Link
            to="/company"
            className={`font-display text-xs tracking-widest uppercase transition-colors nav-link ${textClass}`}
          >
            О КОМПАНИИ
          </Link>
          <Link
            to="/contact"
            className={`font-display text-xs tracking-widest uppercase transition-colors nav-link ${textClass}`}
          >
            КОНТАКТЫ
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <button
            className="p-2 rounded-full transition-colors text-white hover:bg-white/10"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined dark:hidden">
              dark_mode
            </span>
            <span className="material-symbols-outlined hidden dark:block">
              light_mode
            </span>
          </button>

          <div className="hidden lg:block text-right">
            <p className="font-display text-[10px] leading-tight text-white/80">
              ЦЮРИХ, CH
            </p>
            <p className="font-display text-[10px] leading-tight text-white/80">
              ОСН. 2009
            </p>
          </div>

          <Link
            to="/contact"
            className="hidden md:block px-6 py-2 border border-[#BFA37E]/30 text-[10px] font-display uppercase tracking-widest hover:bg-[#BFA37E] hover:text-[#0A0A0A] transition-all text-white"
          >
            СВЯЗАТЬСЯ
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0F0F0F] z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: 0, height: '100dvh' }}
      >
        <div className="flex flex-col items-center space-y-8">
          <Link
            to="/projects"
            className="font-display text-2xl tracking-widest uppercase text-white hover:text-[#C89F5F] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            ПРОЕКТЫ
          </Link>
          <Link
            to="/expertise"
            className="font-display text-2xl tracking-widest uppercase text-white hover:text-[#C89F5F] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            КОМПЕТЕНЦИИ
          </Link>
          <Link
            to="/process"
            className="font-display text-2xl tracking-widest uppercase text-white hover:text-[#C89F5F] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            ИНЖЕНЕРИЯ
          </Link>
          <Link
            to="/company"
            className="font-display text-2xl tracking-widest uppercase text-white hover:text-[#C89F5F] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            О КОМПАНИИ
          </Link>
          <Link
            to="/contact"
            className="font-display text-2xl tracking-widest uppercase text-white hover:text-[#C89F5F] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            КОНТАКТЫ
          </Link>
          
          <div className="pt-8 border-t border-white/10 w-full flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="font-display text-xs leading-tight text-white/60 mb-1">
                ЦЮРИХ, CH
              </p>
              <p className="font-display text-xs leading-tight text-white/60">
                ОСН. 2009
              </p>
            </div>
            
            <Link
              to="/contact"
              className="px-8 py-3 border border-[#BFA37E]/30 text-xs font-display uppercase tracking-widest hover:bg-[#BFA37E] hover:text-[#0A0A0A] transition-all text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              СВЯЗАТЬСЯ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
