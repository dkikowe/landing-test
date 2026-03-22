const fs = require('fs');

let code = fs.readFileSync('src/components/Company.jsx', 'utf8');

const css = `
<style>{\`
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .h0 { animation: heroFadeUp 1.4s cubic-bezier(0.16,1,0.3,1) both; }
  .h1 { animation: heroFadeUp 1.4s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
  .h2 { animation: heroFadeUp 1.4s 0.3s cubic-bezier(0.16,1,0.3,1) both; }
  .h3 { animation: heroFadeUp 1.4s 0.45s cubic-bezier(0.16,1,0.3,1) both; }

  @keyframes scrollDrop {
    0%   { transform: scaleY(0); transform-origin: top; }
    50%  { transform: scaleY(1); transform-origin: top; }
    51%  { transform: scaleY(1); transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }
  .scroll-line { animation: scrollDrop 2.2s cubic-bezier(0.76,0,0.24,1) infinite; }

  /* Base reveal */
  .reveal {
    opacity: 0; transform: translateY(28px);
    transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .d1 { transition-delay: 0.1s; }
  .d2 { transition-delay: 0.2s; }
  .d3 { transition-delay: 0.3s; }

  /* Clip-path reveal */
  .clip-reveal {
    clip-path: inset(8% 0 8% 0);
    opacity: 0;
    transition: clip-path 1.2s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease;
  }
  .clip-reveal.visible {
    clip-path: inset(0% 0 0% 0);
    opacity: 1;
  }

  /* Slide-in from left */
  .slide-left {
    opacity: 0; transform: translateX(-32px);
    transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
  }
  .slide-left.visible { opacity: 1; transform: translateX(0); }

  /* Slide-in from right */
  .slide-right {
    opacity: 0; transform: translateX(32px);
    transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
  }
  .slide-right.visible { opacity: 1; transform: translateX(0); }

  /* Scale reveal */
  .scale-reveal {
    opacity: 0; transform: scale(0.96) translateY(20px);
    transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
  }
  .scale-reveal.visible { opacity: 1; transform: scale(1) translateY(0); }

  /* Timeline */
  .tl-item {
    opacity: 0;
    transform: translateX(-16px);
    transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1), background 0.35s ease;
    cursor: default;
  }
  .tl-item.visible { opacity: 1; transform: translateX(0); }
  .tl-item:hover { background: rgba(191,163,126,0.05); }
  .tl-item:hover .tl-year { color: #BFA37E; }
  .tl-year { transition: color 0.3s; }

  /* Timeline header */
  .tl-header {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);
  }
  .tl-header.visible { opacity: 1; transform: translateY(0); }

  /* Team cards */
  .team-col { transition: background 0.35s ease; }
  .team-col:hover { background: rgba(191,163,126,0.04); }

  /* Client cards */
  .client-card {
    position: relative;
    cursor: default;
  }
  .client-card svg.border-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .client-card svg.border-svg rect {
    fill: none;
    stroke: #BFA37E;
    stroke-width: 0.7;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    transition: stroke-dashoffset 0s;
    vector-effect: non-scaling-stroke;
  }
  .client-card:hover svg.border-svg rect {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 1.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* CTA button */
  .btn-cta { display:inline-flex; align-items:center; gap:1rem; font-family:'Roboto Mono',monospace; font-size:.65rem; letter-spacing:.2em; text-transform:uppercase; background:#BFA37E; color:#141414; padding:1rem 2rem; text-decoration:none; border:1px solid #BFA37E; transition:background .3s,color .3s; }
  .btn-cta:hover { background:transparent; color:#141414; }

  .founder-photo-wrap:hover #founder-img {
    filter: grayscale(0%) !important;
    transform: scale(1.04) !important;
  }
\`}</style>
`;

code = code.replace('<main className="pt-0">', '<main className="pt-0">\n        ' + css);

fs.writeFileSync('src/components/Company.jsx', code);
console.log('Added CSS');
