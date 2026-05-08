import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Footer() {
  const location = useLocation();
  const isProjectIndexPage =
    location.pathname === "/projects" ||
    location.pathname === "/expertise" ||
    location.pathname === "/company";

  return (
    <>
      <div
        aria-hidden="true"
        className={
          isProjectIndexPage
            ? "h-[180px] md:h-[160px]"
            : "h-[440px] md:h-[360px]"
        }
      ></div>
      <footer className="fixed bottom-0 left-0 w-full bg-[#FFFFFF] border-t border-black/10 z-[0]">
        {isProjectIndexPage ? (
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-6 md:py-7">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <img
                src="/assets/logowhite.png"
                alt="MONUMFORMA"
                className="h-12 md:h-14 w-auto object-contain"
              />
              <p className="font-mono text-[11px] text-[#141414]/55 uppercase">
                © 2026 MONUMFORMA S.L. ВСЕ ПРАВА ЗАЩИЩЕНЫ
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-8 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start">
              <div className="md:col-span-3">
                <img
                  src="/assets/logowhite.png"
                  alt="MONUMFORMA"
                  className="h-14 md:h-20 w-auto object-contain mb-4"
                />
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#141414]/55 hover:text-[#BFA37E] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span className="w-1 h-1 rounded-full bg-[#141414]/25"></span>
                  <a
                    href="https://www.instagram.com/monumforma/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#141414]/55 hover:text-[#BFA37E] transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div className="md:col-span-3">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#BFA37E] mb-4">
                  Карта сайта
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#141414]/60 hover:text-[#BFA37E] transition-colors"
                      to="/projects"
                    >
                      Проекты
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#141414]/60 hover:text-[#BFA37E] transition-colors"
                      to="/expertise"
                    >
                      Компетенции
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#141414]/60 hover:text-[#BFA37E] transition-colors"
                      to="/company"
                    >
                      О компании
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#141414]/60 hover:text-[#BFA37E] transition-colors"
                      to="/contact"
                    >
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-3">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#BFA37E] mb-4">
                  Контакты
                </h4>
                <ul className="space-y-2 font-display text-[15px] text-[#141414]/70">
                  <li>hola@monumforma.es</li>
                  <li>+34 661 224 868 · Valencia, España</li>
                  <li>Trabajamos en toda España</li>
                  <li>Del concepto a la instalación</li>
                </ul>
              </div>

              <div className="md:col-span-3">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#BFA37E] mb-4">
                  Рассылка
                </h4>
                <form className="flex border-b border-black/20 pb-2 mb-4">
                  <input
                    className="bg-transparent border-none p-0 w-full font-display text-sm focus:ring-0 placeholder-black/35 text-black min-w-0"
                    placeholder="Ваш e-mail"
                    type="email"
                  />
                  <button className="text-[#BFA37E] font-mono text-[10px] uppercase tracking-[0.15em] hover:text-[#826A45] transition-colors whitespace-nowrap ml-2">
                    Подписаться
                  </button>
                </form>
                <p className="font-mono text-[10px] text-[#141414]/45 uppercase leading-relaxed">
                  Соответствие GDPR. Политика конфиденциальности и cookies.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <p className="font-mono text-[10px] text-[#141414]/45 uppercase">
                © 2026 MONUMFORMA S.L. Все права защищены.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/45 hover:text-[#BFA37E] transition-colors"
                >
                  Политика конфиденциальности
                </Link>
                <Link
                  to="/"
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#141414]/45 hover:text-[#BFA37E] transition-colors"
                >
                  Условия использования
                </Link>
              </div>
            </div>
          </div>
        )}
      </footer>
    </>
  );
}
