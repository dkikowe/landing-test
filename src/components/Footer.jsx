import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-gray-200 pt-20 pb-12 overflow-hidden relative z-20">
      {" "}
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-12 gap-y-10 gap-x-4 md:gap-8">
        {" "}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          {" "}
          <div className="flex items-center gap-4 mb-8">
            {" "}
            <img
              src="/assets/logowhite.png"
              alt="monumforma logo"
              className="h-[80px] md:h-[100px] w-auto max-w-full object-contain invert "
            />{" "}
          </div>{" "}
          <p className="font-['Roboto_Mono'] ml-0 md:ml-4 text-xs text-gray-500 leading-relaxed mb-6">
            {" "}
            Лондон • Нью-Йорк • Дубай <br /> Глобальные услуги архитектурного
            производства.{" "}
          </p>{" "}
        </div>{" "}
        <div className="col-span-6 md:col-span-4 lg:col-span-2">
          {" "}
          <h4 className="font-['Roboto_Mono'] text-xs uppercase tracking-widest text-[#BFA37E] mb-6">
            {" "}
            Карта сайта{" "}
          </h4>{" "}
          <ul className="font-['Roboto_Mono'] text-xs space-y-4 text-gray-600">
            {" "}
            <li>
              {" "}
              <Link
                className="hover:text-[#BFA37E] transition-colors uppercase"
                to="/projects"
              >
                {" "}
                ПРОЕКТЫ{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link
                className="hover:text-[#BFA37E] transition-colors uppercase"
                to="/expertise"
              >
                {" "}
                КОМПЕТЕНЦИИ{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link
                className="hover:text-[#BFA37E] transition-colors uppercase"
                to="/process"
              >
                {" "}
                ИНЖЕНЕРИЯ{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link
                className="hover:text-[#BFA37E] transition-colors uppercase"
                to="/company"
              >
                {" "}
                О КОМПАНИИ{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link
                className="hover:text-[#BFA37E] transition-colors uppercase"
                to="/contact"
              >
                {" "}
                КОНТАКТЫ{" "}
              </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          {" "}
          <h4 className="font-['Roboto_Mono'] text-xs uppercase tracking-widest text-[#BFA37E] mb-6">
            {" "}
            Контакты{" "}
          </h4>{" "}
          <ul className="font-['Roboto_Mono'] text-xs space-y-4 text-gray-600 break-words">
            {" "}
            <li>inquiries@monumforma.com</li> <li>+44 (0) 20 7123 4567</li>{" "}
            <li>12 Industrial Way, London, UK</li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
          {" "}
          <div>
            {" "}
            <h4 className="font-['Roboto_Mono'] text-xs uppercase tracking-widest text-[#BFA37E] mb-6">
              {" "}
              Рассылка{" "}
            </h4>{" "}
            <form className="flex border-b border-gray-300 pb-2">
              {" "}
              <input
                className="bg-transparent border-none p-0 w-full font-['Roboto_Mono'] text-sm focus:ring-0 placeholder-gray-500 text-gray-900 min-w-0"
                placeholder="Адрес электронной почты"
                type="email"
              />{" "}
              <button className="text-[#BFA37E] font-['Roboto_Mono'] text-xs uppercase hover:text-[#826A45] transition-colors whitespace-nowrap ml-2">
                {" "}
                Подписаться{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
          <div className="mt-8 lg:mt-0 text-left lg:text-right">
            {" "}
            <p className="font-['Roboto_Mono'] text-[10px] text-gray-400 uppercase">
              {" "}
              © 2024 Monumforma. Все права защищены.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
