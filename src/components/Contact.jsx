import React, { useEffect } from "react";

// Fonts to include in index.html:
// <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

export default function Contact() {
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

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  return (
    <div className="bg-[#F9F9F7] dark:bg-[#1A1A1A] text-[#111111] dark:text-[#F9F9F7] font-['Space_Grotesk'] antialiased transition-colors duration-300 min-h-screen">
      <style>{`
        body { font-feature-settings: "ss01", "ss02"; }
        .sculpture-image {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #A68A58; }
      `}</style>

      <main className="pt-32 pb-20 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <header className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6">
              Формируя <br />
              <span className="font-medium italic text-[#A68A58]">
                Монументальное
              </span>{" "}
              Пространство
            </h1>
            <p className="text-lg text-[#666666] dark:text-[#A3A3A3] max-w-md font-['Space_Mono']">
              Параметрические структуры и скульптурные инсталляции для городской
              среды.
            </p>
          </div>
          <div className="lg:text-right">
            <div className="inline-block border-l-2 border-[#A68A58] pl-4 text-left">
              <p className="text-sm font-['Space_Mono'] text-[#666666] dark:text-[#A3A3A3] uppercase tracking-widest mb-1">
                Видение
              </p>
              <p className="text-xl font-medium">Константин Бурцев</p>
              <p className="text-sm text-[#666666] dark:text-[#A3A3A3] mt-1">
                Ведущий архитектор и скульптор
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium border-b border-gray-200 dark:border-gray-800 pb-4">
                Ателье и Офисы
              </h2>
              <p className="text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                Наша работа выходит за рамки географических границ, опираясь на
                богатое архитектурное наследие Испании. Мы приглашаем к
                сотрудничеству в проектах, требующих высокоточного
                параметрического проектирования и масштабного производства.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-['Space_Mono'] text-sm">
              <div className="group">
                <h3 className="uppercase tracking-widest text-[#A68A58] mb-2 text-xs">
                  Headquarters
                </h3>
                <p className="text-lg font-bold mb-1 group-hover:translate-x-1 transition-transform">
                  Alicante
                </p>
                <p className="text-[#666666] dark:text-[#A3A3A3]">
                  Av. de Maisonnave, 41
                </p>
                <p className="text-[#666666] dark:text-[#A3A3A3]">
                  03003 Alicante, Spain
                </p>
              </div>
              <div className="group">
                <h3 className="uppercase tracking-widest text-[#A68A58] mb-2 text-xs">
                  Design Studio
                </h3>
                <p className="text-lg font-bold mb-1 group-hover:translate-x-1 transition-transform">
                  Valencia
                </p>
                <p className="text-[#666666] dark:text-[#A3A3A3]">
                  Carrer de Colón, 12
                </p>
                <p className="text-[#666666] dark:text-[#A3A3A3]">
                  46004 Valencia, Spain
                </p>
              </div>
              <div className="group">
                <h3 className="uppercase tracking-widest text-[#A68A58] mb-2 text-xs">
                  Fabrication
                </h3>
                <p className="text-lg font-bold mb-1 group-hover:translate-x-1 transition-transform">
                  Barcelona
                </p>
                <p className="text-[#666666] dark:text-[#A3A3A3]">
                  Poblenou District
                </p>
                <p className="text-[#666666] dark:text-[#A3A3A3]">
                  08018 Barcelona, Spain
                </p>
              </div>
              <div className="group">
                <h3 className="uppercase tracking-widest text-[#A68A58] mb-2 text-xs">
                  R&D Lab
                </h3>
                <p className="text-lg font-bold mb-1 group-hover:translate-x-1 transition-transform">
                  San Sebastián
                </p>
                <p className="text-[#666666] dark:text-[#A3A3A3]">
                  Tech Park Miramón
                </p>
                <p className="text-[#666666] dark:text-[#A3A3A3]">
                  20009 Donostia, Spain
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#262626] p-8 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#A68A58]/10 rounded-bl-full"></div>
              <h3 className="text-xl font-medium mb-6">Прямая связь</h3>
              <div className="space-y-4 font-['Space_Mono'] text-sm">
                <a
                  className="flex items-center gap-3 hover:text-[#A68A58] transition-colors group"
                  href="mailto:hola@monumforma.es"
                >
                  <span className="material-icons text-[#A68A58] text-lg">
                    alternate_email
                  </span>
                  <span className="border-b border-transparent group-hover:border-[#A68A58]">
                    hola@monumforma.es
                  </span>
                </a>
                <a
                  className="flex items-center gap-3 hover:text-[#A68A58] transition-colors group"
                  href="https://wa.me/34661224868"
                >
                  <span className="material-icons text-[#A68A58] text-lg">
                    chat
                  </span>
                  <span className="border-b border-transparent group-hover:border-[#A68A58]">
                    +34 661 224 868
                  </span>
                </a>
                <a
                  className="flex items-center gap-3 hover:text-[#A68A58] transition-colors group"
                  href="tel:+34661224868"
                >
                  <span className="material-icons text-[#A68A58] text-lg">
                    call
                  </span>
                  <span className="border-b border-transparent group-hover:border-[#A68A58]">
                    +34 661 224 868
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-white dark:bg-[#262626] p-8 lg:p-12 shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
            <h2 className="text-3xl font-light mb-2">Начать проект</h2>
            <p className="text-[#666666] dark:text-[#A3A3A3] mb-10 text-sm font-['Space_Mono']">
              Расскажите нам о вашем архитектурном видении.
            </p>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 text-lg focus:outline-none focus:border-[#A68A58] transition-colors placeholder-transparent rounded-none"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-xs font-['Space_Mono'] text-[#666666] dark:text-[#A3A3A3] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#A68A58]"
                    htmlFor="name"
                  >
                    Полное имя / Компания
                  </label>
                </div>
                <div className="relative group">
                  <input
                    className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 text-lg focus:outline-none focus:border-[#A68A58] transition-colors placeholder-transparent rounded-none"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-xs font-['Space_Mono'] text-[#666666] dark:text-[#A3A3A3] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#A68A58]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-['Space_Mono'] text-[#666666] dark:text-[#A3A3A3] mb-2 uppercase tracking-wide">
                    Тип проекта
                  </label>
                  <select className="w-full bg-[#F9F9F7] dark:bg-[#1A1A1A] border-0 p-4 text-sm focus:ring-1 focus:ring-[#A68A58] rounded-none cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <option>Общественная скульптура</option>
                    <option>Интерьерная инсталляция</option>
                    <option>Фасадная система</option>
                    <option>Параметрическая структура</option>
                    <option>Ландшафтная интеграция</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-['Space_Mono'] text-[#666666] dark:text-[#A3A3A3] mb-2 uppercase tracking-wide">
                    Предпочтение по материалам
                  </label>
                  <select className="w-full bg-[#F9F9F7] dark:bg-[#1A1A1A] border-0 p-4 text-sm focus:ring-1 focus:ring-[#A68A58] rounded-none cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <option>Кортеновская сталь</option>
                    <option>Зеркальная сталь</option>
                    <option>Стекло / Кристалл</option>
                    <option>Бронза</option>
                    <option>Не определено / Нужна консультация</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 text-lg focus:outline-none focus:border-[#A68A58] transition-colors placeholder-transparent rounded-none"
                    id="location"
                    name="location"
                    placeholder="Location"
                    type="text"
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-xs font-['Space_Mono'] text-[#666666] dark:text-[#A3A3A3] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#A68A58]"
                    htmlFor="location"
                  >
                    Местоположение проекта (Город, Страна)
                  </label>
                </div>
                <div className="relative group">
                  <input
                    className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 text-lg focus:outline-none focus:border-[#A68A58] transition-colors placeholder-transparent rounded-none"
                    id="scale"
                    name="scale"
                    placeholder="Scale"
                    type="text"
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-xs font-['Space_Mono'] text-[#666666] dark:text-[#A3A3A3] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#A68A58]"
                    htmlFor="scale"
                  >
                    Технический масштаб (например, высота 5м)
                  </label>
                </div>
              </div>
              <div className="relative group mt-8">
                <textarea
                  className="peer w-full bg-transparent border border-gray-300 dark:border-gray-600 p-4 text-base focus:outline-none focus:border-[#A68A58] transition-colors placeholder-transparent rounded-none resize-none"
                  id="message"
                  placeholder="Message"
                  rows="4"
                ></textarea>
                <label
                  className="absolute left-4 -top-2.5 bg-white dark:bg-[#262626] px-1 text-xs font-['Space_Mono'] text-[#666666] dark:text-[#A3A3A3] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#A68A58]"
                  htmlFor="message"
                >
                  Дополнительный контекст
                </label>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-3">
                  <input
                    className="text-[#A68A58] focus:ring-[#A68A58] border-gray-300 rounded-none w-4 h-4 cursor-pointer"
                    id="privacy"
                    type="checkbox"
                  />
                  <label
                    className="text-xs text-[#666666] dark:text-[#A3A3A3] cursor-pointer select-none"
                    htmlFor="privacy"
                  >
                    Я согласен на обработку моих персональных данных.
                  </label>
                </div>
                <button
                  className="bg-[#A68A58] hover:bg-[#A68A58]/90 text-white px-10 py-4 uppercase tracking-widest text-xs font-bold font-['Space_Mono'] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                  type="submit"
                >
                  ОТПРАВИТЬ ЗАПРОС
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-1 h-64 md:h-80 w-full overflow-hidden">
          <div className="relative group overflow-hidden h-full">
            <img
              alt="Abstract glass monumental sculpture in forest"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE4HsjzfgMYatpXjccTZFPMq_MXJ1xEAAiBz65tqD4aceuaAZjY7uHXH0etOpPA4KWAAjpggamZr371_bjn4XR-sS3Ussz1KdKpBjeqQRcU7yWZqNl20Xp-5gZccICLQ_kvm4NXRHmSuh2eulQf2BT2WZyD7yMXMAeAfSIBvwe3hlyjpv791d4y9Oc6PzCsqVaIRB_YuzC3fOMzI5pUigl5eUn5FU5L_zdWnWYVGdQPsosDMNvqW5msH8iW1aoa4X9dS2gcC8qZlub"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="relative group overflow-hidden h-full">
            <img
              alt="Geometric corten steel sculpture illuminated at dusk"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC65cgd76PC2lW9_fFEMvGRd9hooB1wL43ZJIgT0BUWJUAH1bH3puaQIIC6JyIT1nZcgfAx5T3NF1J0AY-3djy0vYRJptSqTE2NgozHZ78hw3VjvrEki2DNlK6JmGjXWahtQcxln4CJ8W-Kpn9Bn9m2eun7oLta8WSMLzrQApeGXVyQpoE4tV4iNWkgxV5pTHK2kuitReR3_RDW-XW-jAgbisJZSF1hl-478HJ6t33ZPl3wrfiB9rTHm3Yx6SkDyQHfDlMGRCaeVvdQ"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="relative group overflow-hidden h-full">
            <img
              alt="Polished steel infinity loop sculpture reflecting sunset"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDksIOTlYQ2pkjpa8gUStnhE6rBJeCH3h-56u4w1K6c31chPetiEF5SYLg1wbOtXaDqHPSqusLF9XBYEKM3myfTCJPP8mFt-2cuCdBzSvKOYr77kJeeC2HCemxYeygYIYuCQh5hOuaR6jOOIoqR6euc83yKfKJrK9L2dwKfafzcgXt767rjrLpuDS1UUur40_exxCUWCIKm-Q98ULCiMSgvw5AQBC9RugSqGHqZPZSDzLD4efZlzXaYH-3Tlvg8FoWQ_QLCFYDAv3O_"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
