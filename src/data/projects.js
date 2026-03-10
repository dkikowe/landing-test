import React from "react";

export const projects = [
  {
    id: "022",
    title: "Project #22 Passage",
    category: "architectural",
    material: "Concrete",
    scale: "Urban",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHXuLMXLHlEMep8BQcvkpxBMOMCPXMevU2rwHdwM2L5sy0FRi63q4Y_OtZHhg6pMomD1wDUH55jSW-IAYGt2oeLqCampM0s5LYqrsjnwGpZ69cwoO2pG0e6oJ3NFphVNgkmtLCI4l5xJ7CAEDw9Nm49Ml0hy23qqhPSCjR7ebWUgkDP335Vop3dA27F49-lMfAwPzMdsTjxxw9rNfhIYi2208X3vuUdMxDpQ5TFKNCVCmDVONfi6uIw8qZnr6ULrkmLVHVg4eOMhQ",
    gridClass: "col-span-12 lg:col-span-7",
    aspectClass: "aspect-[16/10]",
    overlayContent: (
        <div className="w-full h-full border border-primary/30 rotate-3 scale-90 flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-primary/20 -rotate-6"></div>
        </div>
    ),
    description: "Исследование формы, материала и пространства в масштабной архитектурной инсталляции. Портал между материей и пустотой.",
    details: {
        concept: "Концепция Passage строится вокруг взаимодействия сферических объемов и пустоты. Это портал, застывший в бронзе, приглашающий зрителя к диалогу с вечностью.",
        engineering: "От цифрового двойника до физического воплощения. Проектирование сложных внутренних каркасов и расчет нагрузок.",
        production: "Каждый фрагмент Passage проходит через руки мастеров в нашей бронзолитейной мастерской. Мы используем метод вакуумного литья по выплавляемым моделям.",
        specs: [
            { label: "Материал", value: "Бронза БрОЦС 5-5-5", note: "Художественное литье" },
            { label: "Высота", value: "4 200 мм", note: "Общая габаритная" },
            { label: "Вес", value: "1 850 кг", note: "Включая стальной каркас" },
            { label: "Покрытие", value: "Холодная патина", note: "Защитный воск Carnauba" },
            { label: "Фундамент", value: "Ж/Б монолит", note: "Анкерная группа M24" }
        ]
    }
  },
  {
    id: "011",
    title: "Project #11 Hotel",
    category: "architectural",
    material: "Glass & Steel",
    scale: "Urban",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1CHL83r5-cCPFhkW57HHyiWKCziEQmJZ0fTlKbPBH8NfVJwu6Roihtuie7VaZ0f2mkJp7l62wUFwU-Vd3bqrNXg_7EVM-MCug4xe2lzjwaYrW5cq4kexue99piI6sTC3g5PJUELrcHg07jSWDgwU3CAKj6vaDBiKc-wfXGrFDgM7xIwYRWM9Q8M9nXD6MovX5Fh4X_r_SKFcdPaSUtzcZf3AYyp5eyXnbhw0VWoiAIymttDuCqf7q-4PhC4sdLsq-IsGSiX72l3U",
    gridClass: "col-span-12 lg:col-span-5 lg:mt-24",
    aspectClass: "aspect-[4/5]",
    overlayContent: (
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 border border-primary/10"></div>
    ),
    description: "Синтез архитектурного масштаба и камерной атмосферы гостеприимства.",
    details: {
        concept: "Интеграция монументальной скульптуры в современное пространство отеля требует деликатного баланса. Объект \"Flowing Void\" для Project #11 — это исследование взаимодействия жесткой металлической формы и мягкого интерьерного освещения.",
        engineering: "Сложная геометрия потребовала 4-месячного цикла расчетов. Мы использовали параметрическое моделирование для оптимизации веса при сохранении структурной целостности 6-метровой консоли.",
        production: "Процесс создания занял 120 рабочих дней. Мы использовали авиационный алюминий и аргоновую сварку для достижения бесшовной поверхности.",
        specs: [
            { label: "Материал", value: "Алюминиевый сплав 6061-T6" },
            { label: "Покрытие", value: "Анодирование, Сатин-антрацит" },
            { label: "Габариты", value: "4200 x 2800 x 1400 мм" },
            { label: "Чистый вес", value: "485 кг" },
            { label: "Тип монтажа", value: "Анкерная система в перекрытие" },
            { label: "Освещение", value: "Интегрированный LED (3000K)" }
        ]
    }
  },
  {
    id: "009",
    title: "Kinetic Systems",
    category: "media",
    material: "Media",
    scale: "Urban",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIe92rPNWzWEsDRuk6t3DY93ZYLvxykV-YhKKYQekpAMfgkdcUGVO5f5JjfOaoXduQ13Rt4vsnPil6rd9LPx0rXjmgSeXFm0tdLjqRBwTCmwAa-bcoArh0TqDzauFuMBBAxBZq7xiu7t0_fIEmec-nsF1_Qtz42REzjl4pzyMW2wNjiajvfjZKg0PT-fAH80Lvari1Q5x-XHPlejuXiUYBIBYHaWForn7mawyoLgZmXLZXRUhEyqbJDiOemUGUuaMSa0I2Hkf4xF0",
    gridClass: "col-span-12 lg:col-span-4",
    aspectClass: "aspect-square",
    overlayContent: (
        <span className="material-symbols-outlined text-primary text-6xl">motion_mode</span>
    ),
    description: "Кинетическая инсталляция, реагирующая на движение городской среды.",
    details: {
        concept: "Живой организм в городской среде, пульсирующий в ритме мегаполиса.",
        engineering: "Система из 150 сервоприводов, управляемых единым контроллером.",
        production: "Сборка производилась в чистой комнате для обеспечения надежности механики.",
        specs: [
            { label: "Материал", value: "Карбон, Алюминий" },
            { label: "Приводы", value: "150 x Servo Motors" },
            { label: "Потребление", value: "2.5 кВт" },
            { label: "Управление", value: "Real-time Data Processing" }
        ]
    }
  },
  {
    id: "015",
    title: "Light Pavilion",
    category: "light",
    material: "Light",
    scale: "Pavilion",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOLisXaKOVYM_a5N1LUTf6G-R6skcEJUmJ37MkKqYJSVs3thNh7ybt2_j_ZVINGoJ6jdDo4gmm94OjYjgfrIZP5sYGZSMpUA3VRxTSmHRbLZjzBaEGqn9a-3AJHeS2MAXnkxaoW-0h2UWgjLkZYjLm6ois5YYRolSTbfj9c3aqyJIOLLZWRi8YjZEDj60nUTy924Wj71p_l9xC5zUkC082WBBhoG1kmrcnO5E66IsxWe28lpdxOGdHecGR6yK4GFLEMmaGUnvelOQ",
    gridClass: "col-span-12 lg:col-span-8",
    aspectClass: "aspect-[21/9]",
    overlayContent: null,
    description: "Световой павильон, создающий иммерсивное пространство из света и цвета.",
    details: {
        concept: "Пространство, где свет становится материалом, формирующим архитектуру.",
        engineering: "Программируемая LED-матрица высокого разрешения.",
        production: "Модульная конструкция для быстрой сборки и разборки.",
        specs: [
            { label: "Материал", value: "Поликарбонат, LED" },
            { label: "Площадь", value: "120 кв.м" },
            { label: "Световой поток", value: "500 000 лм" },
            { label: "Управление", value: "DMX512" }
        ]
    }
  },
  {
    id: "004",
    title: "Urban Core",
    category: "architectural",
    material: "Stone",
    scale: "Urban",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGgl-sjtEyJta31bYoZHdpmRsrkoIRVGHPv3enqqB_g1CvnRpz1TccGC8VvYueLZyEsKXpZZ9ESpPCVCNvRxw-c63Hzfr5_raFjhWpHgTH77FECas6My921-8jhi8iUovZcVdDaKk_Yp-l6KehUtiPtAocdmY2TH-6xNbiq_WIsC5Uz73WFWctiWrXSc1VLPsLYiLFcKLjdUHyua3PZ65-3CeOdSYwdf9QWG657f-GrFMd69ZkbOADfVixwVFbchW4BlpHJCddpOQ",
    gridClass: "col-span-12 lg:col-span-6 lg:mt-24",
    aspectClass: "aspect-[3/4]",
    overlayContent: null,
    description: "Монолитная каменная структура, символизирующая устойчивость в меняющемся мире.",
    details: {
        concept: "Возвращение к первоосновам архитектуры через работу с натуральным камнем.",
        engineering: "Скрытый стальной каркас для сейсмоустойчивости.",
        production: "Ручная обработка гранитных блоков весом до 5 тонн.",
        specs: [
            { label: "Материал", value: "Гранит" },
            { label: "Вес", value: "45 тонн" },
            { label: "Высота", value: "8 метров" },
            { label: "Обработка", value: "Бучардирование" }
        ]
    }
  },
  {
    id: "031",
    title: "Refraction Hub",
    category: "light",
    material: "Glass",
    scale: "Interior",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5X0eB_9H21Pa1JAV-W-wsqgI5cLjT1t4J8v3atLSthmiDsFBRG3RK_2SWwvpmh0vPWtkCzBUHq4XarIkVQcsLpbQvuh6nEOfPCbrDYAEytI6lMucGtoon33ho9xqj4e5IZ4c3axB3GVtFUEcAYnPI4e1VPCks2sXGmVmseKn8wpwHHjM47qe5-Nn1cL7NK445bOU_7IjAkFopM9oXIXno9xB57CUSyy06Lo-CMrVot83MhtOc9nU9RDL6s5BgIu_i7whYBD8wrBc",
    gridClass: "col-span-12 lg:col-span-6",
    aspectClass: "aspect-square",
    overlayContent: null,
    description: "Стеклянная инсталляция, преломляющая свет и создающая новые измерения.",
    details: {
        concept: "Игра с восприятием пространства через оптические иллюзии.",
        engineering: "Склейка стекла по технологии UV-bonding.",
        production: "Использование оптического стекла К8.",
        specs: [
            { label: "Материал", value: "Оптическое стекло" },
            { label: "Вес", value: "350 кг" },
            { label: "Прозрачность", value: "99.9%" },
            { label: "Подсветка", value: "Торцевая LED" }
        ]
    }
  }
];
