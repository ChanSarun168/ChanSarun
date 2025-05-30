'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const menu = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Resume", link: "#resume" },
    { label: "Service", link: "#services" },
    { label: "Contact", link: "#contact" },
  ];

  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sectionIds = menu.map((item) => item.link.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const matched = menu.find((item) => item.link === `#${sectionId}`);
            if (matched) setActive(matched.label);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full h-20 max-h-20 flex justify-center fixed top-0 left-0 z-50 bg-opacity-80 backdrop-blur-sm">
      <div className="w-[85%] max-w-[90%] h-full flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/CHAN-SARUN.png"
            alt="logo"
            width={200}
            height={100}
            priority
          />
        </Link>
        <nav className="flex space-x-8">
          {menu.map((item) => (
            <a
              href={item.link}
              key={item.label}
              className={`group relative ${
                active === item.label ? 'text-[#00FF5E]' : 'text-white'
              } font-semibold text-[16px] transition-colors`}
            >
              <span>{item.label}</span>
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-[#00FF5E] transition-all duration-300 ${
                  active === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
