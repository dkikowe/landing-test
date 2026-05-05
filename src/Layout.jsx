import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="relative">
      <Header />
      <main className="relative z-10 bg-white min-h-screen">
        <Outlet />
      </main>

      <a
        href="https://wa.me/34661224868"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[350] w-14 h-14 md:w-[62px] md:h-[62px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 md:w-9 md:h-9 fill-current"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.53 0 .23 5.3.23 11.82c0 2.08.54 4.12 1.57 5.92L0 24l6.44-1.68a11.77 11.77 0 0 0 5.62 1.43h.01c6.53 0 11.83-5.3 11.83-11.82 0-3.16-1.23-6.13-3.38-8.45Zm-8.46 18.3h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.82 1 1.02-3.72-.24-.38a9.84 9.84 0 0 1-1.51-5.24c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.88a9.77 9.77 0 0 1 2.89 6.96c0 5.44-4.43 9.86-9.8 9.86Zm5.4-7.39c-.29-.15-1.71-.84-1.98-.93-.27-.1-.47-.15-.66.15-.19.29-.75.93-.92 1.12-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.48a8.9 8.9 0 0 1-1.64-2.04c-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.15.2 2.05 3.12 4.97 4.38.69.3 1.24.48 1.67.61.7.22 1.33.19 1.83.11.56-.09 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.56-.34Z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
}
