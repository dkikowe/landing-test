import React, { useEffect } from "react";

// Fonts to include in index.html:
// <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

export default function ProjectIndex() {
  useEffect(() => {
    // Dark mode logic
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const projects = {
    architectural: [
      {
        id: "07",
        title: "CHROME INFINITY",
        location: "US",
        client: "Tech Campus HQ",
        engineer: "Mirror Polish #8",
        weight: "Granite Plinth",
        date: "2024.01",
        material: "316L Stainless",
        scale: "8m x 3m",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuByClNMhiKwotmam20l4mm6wAdy7mqBd3WpMSpiIeWK65k0s84pSMjyk7AKKllyQQudKZPwvLAA01GyRmh6dOObdM86LLL9SNXTq34osmAl_cGdJIBeXyGBv3Ab5e0rETbyTY4TIM9n9vCGpS3iGH3Xl2MpCzNO01M3itjKpEisFEGVo7hQlNGe-PXHvMFL_Zt0lfljlvadfaIHXnZ8gR154wQJX8eC04jQ82sgdSRsHq-9HnqKpM8xivViq8hSCcQdT4ZVKr8fW1iR",
      },
      {
        id: "18",
        title: "EMBER FRACTURE",
        location: "NO",
        client: "Nordic Developments",
        engineer: "LumenPulse",
        weight: "Cor-Ten B",
        date: "2023.11",
        material: "Weathered Steel",
        scale: "12m Height",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBo-BmjO5y9sgyYZ7SXz6xvZmepJx8mYiUIKqfgh5131OfE0UrMcUvsaxjzbR19jljHMTEfYKfHN-EQxpfQcgYHc3gXg2npeHGB3gPrtDTMxIj6ooXw_NCYMr6jJ2wGIo2QkggkH7c3WABv5_2EtPBVd54w2wsBBi6pE9xA4cR6A6dwSJNAHds_3Fl6mYHfBU-tMBj6hce5jQ1QZDFToiRcoH6rylyORmz_j4PDwgmQjeOKaLPlHcQa26C4vUv9dJ62pAwIeNzjObrz",
      },
      {
        id: "31",
        title: "DUNE SHELTER",
        location: "SA",
        client: "Desert Resort",
        engineer: "Timber Tech",
        weight: "Wooden Structure",
        date: "2024.02",
        material: "CLT Panels",
        scale: "10m x 10m",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBDmmEhrz4eDIkLb5pi0L7iyR4Yk6EpFJwbErVCxhVOZ-CtBY59S3vXpe9GDq8fZwECnLa6raK0-ZhNddF6zcMJCHWJiwsvGWBAVewZIwh1C47MDWngWV4HZzFr7_Fd2Tg0I7wu33jdX8JLjv8LxVVOEQbXo-vhyA55hqAyi3BQsZfdDzUPOsZCdbwX6PXGS5wrUx-gLKG8PEmzf_Ko2ZjdzuiOy6B1S_2RR2brRO5e7HdAWcg90UYEXNuvw6qYTofwhZSsx6q-0K7A",
      },
    ],
    media: [
      {
        id: "03",
        title: "AERIS VORTEX",
        location: "UAE",
        client: "City of Dubai",
        engineer: "Kinetic Systems",
        weight: "Titanium",
        date: "2023.05",
        material: "Titanium Alloy",
        scale: "15m Height",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAu591dnwDxCYCHNCdPzQ_-7PFx1C-m_G-kO4Uy741aUszv3IdEzrh8IbHHhrWdQN07WOYxcClZ6NDUK4XWdoUpll8yoZDhhpgEXq2VXedWBhld5tG-PJDivNP0jrU73twiiF3LE5Cv5JJIZZO_RMCAJSvlyYNjUQD-TjNpN02IxUs_g5yQMi8znb7lj6mgGzL63idQzq65-MNMFfappgkcugv7q6T5mkp9pjfHwYblz5_EQsml4rE033KVQs7qb0b_7VVx209OaLWB",
      },
      {
        id: "12",
        title: "SILENT WAVE",
        location: "JP",
        client: "Tokyo Midtown",
        engineer: "Facade Lab",
        weight: "Concrete",
        date: "2023.08",
        material: "UHPC Concrete",
        scale: "Facade Series",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC5wMZAA0WCQb2rsa5DkrOpVY3WDFwdzkiF5h17oqVeDk-lsuAfStRMJxkeVzg_B3O26-Rze0IWIRajcUJsU7QecyXN5Q7aJnBvY3s_feTIKajAB54eH7v-RWetvAyadPxfAv3MseY5V4nndyhZ351z9Bv3ScEDFTYfCXrBWSUMO3KlCLF2XdpD_nVFYQ6lujRlrVrDrXK3geeqCpasgVH-pI4HnIkufOEV5alqRde1eC0EAkOdxBSz0I-grobTnt3VCiG0RCkymyCc",
      },
      {
        id: "05",
        title: "AETERNA LOOP",
        location: "CN",
        client: "Urban Plaza",
        engineer: "Fluid Dynamics",
        weight: "Stainless Steel",
        date: "2023.06",
        material: "Polished Steel",
        scale: "5m Diameter",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCFf1q8N6UYXHzDiZuwKk-FESb7Thu7OWTU3SChxUmO7PVazcZFdvkxb8docjQqduzLFmj3vLK772yvL1-6dmT_ax3GBjH62FmY78-7U1RqF-_qKuGYp1-SP6XQhEQSXGbRhjBpPGm5SfMgCETr5Ylz5xZ_ae8GTzTNNDADSx8k8FyGbCCZ0qebVKt9AQeF-drxUfwNoN7h6OiP16vS_6w_LCB6ViEGIgol9YOsQX1u0Lih27YndKTjqmVHpzrrYvjZwtsVAUmJ1HJG",
      },
    ],
    light: [
      {
        id: "29",
        title: "SYNAPTIC LIGHT",
        location: "UK",
        client: "Science Museum",
        engineer: "Photonics",
        weight: "Lightweight",
        date: "2023.12",
        material: "Fiber Optics",
        scale: "Variable",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB4iXIu_HKqapXdE4xtR-b46vfe0la2LE4Aiwf21uBrvp9kLXLS42R3-9mK85a5qcIsNtNjyp5g4MvFk6khg2Jp8m6FV1Wkv3e_8mO9uMCP90_ElPEMu6GsD952Zretl_3NmWPyqk_IZU2dyclI8Fk3-Z8lXEkdmNfIvT388hp2tislbsasQqDeuQXYdZWD4nmzm2QCv3BxpngGHX_BPcggj7-8G_D4iL9FFrstv1P_fEhW3gnnpo5VYYyPbaQfGX9low9UgdWlfREK",
      },
      {
        id: "22",
        title: "AQUA RESONANCE",
        location: "ES",
        client: "City of Valencia",
        engineer: "Arup Group",
        weight: "4.2 Тонны",
        date: "2023.09",
        material: "Fused Silica Glass",
        scale: "6.5m x 4.2m",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDBhsSlSP2is0VUCgf_W_XI9ipzfmoiqXoF7YMxOHEh68Lng6rIxFTnwwGvCS_i6L7B4o7wHVtRKClyosRGI78Xuct3JMsuuJgBX2-D-NqxJ0gcG75BNRs8AKinWnyofgwR2jLo6yUfACNTRh68W2AthWnUSSGL_66Is51terr-PSl6-QuwkF6qjUdNoQVbS17qI5rYsaR_j28aOu_sjqVwbIr8iPH-mh--7ywgTedEVCArdLkbmaVPGJI4OSuFxHSB98wFQwzEAa6n",
      },
      {
        id: "15",
        title: "IGNIS MONOLITH",
        location: "DE",
        client: "Art Fair",
        engineer: "Lumen Struct",
        weight: "Corten Steel",
        date: "2023.10",
        material: "Corten / LED",
        scale: "4m Height",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDVSJF_9W55dwjFPjui6G68lMDOpK02hzWFFJHaIESXm0R2P23I0ra5ogwYCPQHguY7yb8ziDclQ884qQ4qs6wnj5dcd01n_1ntO6ksvpEo00mSbOHBz31UgQ4PHWoBofWASxzK_fzrsi-Bm6HCc_ykXsrfW2N_ieu_BOHOpXziDm8Lf7ZRY_QV8ZTMxTMCmvVFyXi7mS6He0kGFTvXNTTgp_xkPL4T87QJtvw4yimkdprCZEst2BjSJ3bxKTpgT8ra8BRavB3Jqp2V",
      },
    ],
  };

  const ProjectCard = ({ project }) => (
    <article className="group relative bg-[#F7F7F7] dark:bg-[#1A1A1A] min-h-[500px] flex flex-col border border-[#E5E5E5] dark:border-[#404040]">
      <div className="relative flex-grow overflow-hidden aspect-[4/5] md:aspect-auto">
        <img
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
          src={project.image}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-8 backdrop-blur-sm">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 font-['Space_Mono'] text-sm space-y-4">
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 border-l-2 border-[#D4AF37] pl-4">
              <span className="text-gray-400 uppercase text-xs">КЛИЕНТ</span>
              <span>{project.client}</span>
              <span className="text-gray-400 uppercase text-xs">ИНЖЕНЕР</span>
              <span>{project.engineer}</span>
              <span className="text-gray-400 uppercase text-xs">ВЕС</span>
              <span>{project.weight}</span>
              <span className="text-gray-400 uppercase text-xs">МОНТАЖ</span>
              <span>{project.date}</span>
            </div>
            <button className="mt-6 border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors uppercase text-xs tracking-widest w-full">
              СМОТРЕТЬ ТЕХНИЧЕСКИЙ ПАСПОРТ
            </button>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-[#F7F7F7]/90 dark:bg-[#1A1A1A]/90 px-3 py-1 font-['Space_Mono'] text-xs font-bold border border-[#E5E5E5] dark:border-[#404040]">
          ПРОЕКТ №{project.id}
        </div>
      </div>
      <div className="p-6 bg-[#FFFFFF] dark:bg-[#262626] border-t border-[#E5E5E5] dark:border-[#404040] relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-['Syne'] font-bold group-hover:text-[#D4AF37] transition-colors">
            {project.title}
          </h3>
          <span className="font-['Space_Mono'] text-xs text-[#666666] dark:text-[#999999]">
            {project.location}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 font-['Space_Mono'] text-xs text-[#666666] dark:text-[#999999] mt-4 pt-4 border-t border-[#E5E5E5] dark:border-[#404040] border-dashed">
          <div>
            <span className="block text-[10px] uppercase tracking-widest opacity-60">
              Материал
            </span>
            {project.material}
          </div>
          <div className="text-right">
            <span className="block text-[10px] uppercase tracking-widest opacity-60">
              Масштаб
            </span>
            {project.scale}
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div className="bg-[#F7F7F7] dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-[#E5E5E5] transition-colors duration-300 font-['Syne'] selection:bg-[#D4AF37] selection:text-white min-h-screen">
      <style>{`
        body { font-feature-settings: "ss01", "ss02", "cv01", "cv02"; }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <header className="pt-32 pb-12 px-6 max-w-[1440px] mx-auto border-b border-[#E5E5E5] dark:border-[#404040]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Syne'] font-bold tracking-tighter leading-[0.9] mb-6">
              <span className="text-[#D4AF37] italic">ПРОЕКТЫ</span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4 font-['Space_Mono'] text-sm text-[#666666] dark:text-[#999999] border-l border-[#E5E5E5] dark:border-[#404040] pl-6">
            <p>ГЛАВНЫЙ РАЗДЕЛ ДОВЕРИЯ</p>
            <p>ДЕМОНСТРИРУЕТ РЕАЛИЗОВАННЫЕ РАБОТЫ КОМПАНИИ</p>
            <p className="mt-4">
              Короткое описание раздела: какие проекты делает компания, в каких
              масштабах и для каких типов пространств.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto pb-20">
        {/* 2.1 Architectural */}
        <section className="px-6 py-16 border-b border-[#E5E5E5] dark:border-[#404040]">
          <div className="mb-12 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Архитектурные объекты и инсталляции
            </h2>
            <p className="font-['Space_Mono'] text-sm md:text-base text-[#666666] dark:text-[#999999] max-w-2xl">
              Проекты, связанные с архитектурными формами и пространственными
              объектами.
            </p>
            <ul className="mt-4 font-['Space_Mono'] text-xs md:text-sm text-[#666666] dark:text-[#999999] list-disc list-inside space-y-1">
              <li>арт-объекты</li>
              <li>скульптуры</li>
              <li>малые архитектурные формы</li>
              <li>городские пространства</li>
              <li>объекты для девелоперских проектов</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.architectural.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 2.2 Media/Kinetic */}
        <section className="px-6 py-16 border-b border-[#E5E5E5] dark:border-[#404040]">
          <div className="mb-12 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Медиаархитектура и кинетические системы
            </h2>
            <p className="font-['Space_Mono'] text-sm md:text-base text-[#666666] dark:text-[#999999] max-w-2xl">
              Инсталляции, где архитектура соединяется с технологией, движением
              и светом.
            </p>
            <ul className="mt-4 font-['Space_Mono'] text-xs md:text-sm text-[#666666] dark:text-[#999999] list-disc list-inside space-y-1">
              <li>мультимедийные фасады</li>
              <li>кинетические инсталляции</li>
              <li>интерактивные объекты</li>
              <li>светодинамические системы</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.media.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 2.3 Light */}
        <section className="px-6 py-16">
          <div className="mb-12 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Световые и праздничные инсталляции
            </h2>
            <p className="font-['Space_Mono'] text-sm md:text-base text-[#666666] dark:text-[#999999] max-w-2xl">
              Световые проекты для городских и коммерческих пространств.
            </p>
            <ul className="mt-4 font-['Space_Mono'] text-xs md:text-sm text-[#666666] dark:text-[#999999] list-disc list-inside space-y-1">
              <li>городская иллюминация</li>
              <li>сезонные пространства</li>
              <li>праздничные концепции</li>
              <li>световые инсталляции для торговых центров</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.light.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
