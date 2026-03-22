const fs = require('fs');

let code = fs.readFileSync('src/components/Company.jsx', 'utf8');

// 1. Add imports
code = code.replace('import React from "react";', 'import React, { useEffect, useRef } from "react";');

// 2. Remove dark mode classes from root div
code = code.replace(
  'className="bg-[#F9F9F7] dark:bg-[#0F0F0F] text-[#0A0A0A] dark:text-[#F0F0F0] font-[\'DM_Sans\'] transition-colors duration-300 min-h-screen"',
  'className="bg-[#F9F9F7] text-[#0A0A0A] font-[\'DM_Sans\'] min-h-screen"'
);

// 3. Add refs and useEffect
const hookCode = `
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
      heroVeilRef.current.style.opacity = Math.min(1, Math.max(0, (sy - h * 0.3) / (h * 0.5)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);
`;

code = code.replace('export default function Company() {', 'export default function Company() {' + hookCode);

// 4. Add veil and update sticky wrap
const veilCode = `
        {/* VEIL */}
        <div 
          id="hero-veil" 
          ref={heroVeilRef} 
          style={{ position: "fixed", inset: 0, zIndex: 9, background: "#F9F9F7", opacity: 0, pointerEvents: "none", willChange: "opacity" }}
        ></div>

        {/* STICKY HERO */}
        <div id="hero-sticky-wrap" ref={heroWrapRef} style={{ position: "sticky", top: 0, zIndex: 1, height: "100vh", overflow: "hidden" }}>
`;

code = code.replace('{/* STICKY HERO */}\n        <div id="hero-sticky-wrap">', veilCode);

// 5. Update page-content
code = code.replace('<div id="page-content">', '<div id="page-content" style={{ position: "relative", zIndex: 10, background: "#F9F9F7", marginTop: "-2px" }}>');

fs.writeFileSync('src/components/Company.jsx', code);
console.log('Updated Company.jsx');
