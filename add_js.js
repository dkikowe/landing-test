const fs = require('fs');

let code = fs.readFileSync('src/components/Company.jsx', 'utf8');

const jsCode = `
    const allAnimated = ".reveal, .clip-reveal, .scale-reveal, .slide-left, .slide-right, .tl-item, .tl-header, .text-reveal";
    document.querySelectorAll(allAnimated).forEach(el => observer.observe(el));

    // SVG border perimeter
    function initCardBorders() {
      document.querySelectorAll('.client-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const perimeter = Math.round((rect.width + rect.height) * 2);
        const svgRect = card.querySelector('svg.border-svg rect');
        if (svgRect) {
          svgRect.style.strokeDasharray = perimeter;
          svgRect.style.strokeDashoffset = perimeter;
        }
      });
    }
    
    // Run after a short delay to ensure layout is computed
    setTimeout(initCardBorders, 100);
    window.addEventListener('resize', initCardBorders);
`;

code = code.replace(
  'const reveals = document.querySelectorAll(".reveal");\n    reveals.forEach((el) => observer.observe(el));',
  jsCode
);

code = code.replace(
  'reveals.forEach((el) => observer.unobserve(el));',
  `document.querySelectorAll(allAnimated).forEach(el => observer.unobserve(el));
      window.removeEventListener('resize', initCardBorders);`
);

fs.writeFileSync('src/components/Company.jsx', code);
console.log('Added JS');
