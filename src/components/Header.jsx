import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Theme toggle logic
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  // Dynamic classes based on route and scroll state
  const headerClass = isHome
    ? "fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300"
    : "fixed top-0 left-0 w-full z-50 bg-[#F9F9F7]/90 dark:bg-[#0F0F0F]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300";

  const textClass = isHome
    ? "text-white hover:text-[#C89F5F]"
    : "text-[#0A0A0A] dark:text-[#F0F0F0] hover:text-[#C89F5F]";

  const buttonClass = isHome
    ? "bg-white hover:bg-[#C89F5F] text-black hover:text-white"
    : "bg-[#C89F5F] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-white";

  return (
    <nav className={headerClass}>
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-20 w-auto relative">
            <img
              src="/assets/logowhite.png"
              alt="monumforma logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          <Link
            to="/"
            className={`font-['Space_Mono'] text-xs tracking-widest uppercase transition-colors ${textClass}`}
          >
            МАНИФЕСТ
          </Link>
          <Link
            to="/projects"
            className={`font-['Space_Mono'] text-xs tracking-widest uppercase transition-colors ${textClass}`}
          >
            ПРОЕКТЫ
          </Link>
          <Link
            to="/expertise"
            className={`font-['Space_Mono'] text-xs tracking-widest uppercase transition-colors ${textClass}`}
          >
            АТЕЛЬЕ
          </Link>
          <Link
            to="/process"
            className={`font-['Space_Mono'] text-xs tracking-widest uppercase transition-colors ${textClass}`}
          >
            ИНЖЕНЕРИЯ
          </Link>
          <Link
            to="/company"
            className={`font-['Space_Mono'] text-xs tracking-widest uppercase transition-colors ${textClass}`}
          >
            О КОМПАНИИ
          </Link>
          <Link
            to="/contact"
            className={`font-['Space_Mono'] text-xs tracking-widest uppercase transition-colors ${textClass}`}
          >
            КОНТАКТЫ
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <button
            className={`p-2 rounded-full transition-colors ${
              isHome
                ? "text-white hover:bg-white/10"
                : "text-[#666666] dark:text-[#A3A3A3] hover:bg-gray-200 dark:hover:bg-gray-800"
            }`}
            onClick={toggleTheme}
          >
            <span className="material-symbols-outlined dark:hidden">
              dark_mode
            </span>
            <span className="material-symbols-outlined hidden dark:block">
              light_mode
            </span>
          </button>

          <div className="hidden lg:block text-right">
            <p
              className={`font-['Space_Mono'] text-[10px] leading-tight ${
                isHome ? "text-white/70" : "text-[#666666] dark:text-[#888888]"
              }`}
            >
              ЦЮРИХ, CH
            </p>
            <p
              className={`font-['Space_Mono'] text-[10px] leading-tight ${
                isHome ? "text-white/70" : "text-[#666666] dark:text-[#888888]"
              }`}
            >
              ОСН. 2009
            </p>
          </div>

          <Link
            to="/contact"
            className={`${buttonClass} px-6 py-2 font-['Space_Mono'] text-xs uppercase tracking-wider transition-all duration-300 rounded-none`}
          >
            СВЯЗАТЬСЯ
          </Link>
        </div>
      </div>
    </nav>
  );
}
