"use client";

import React, { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Change logo depending on the visible section
  useEffect(() => {
    const homeSection = document.getElementById("home");

    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHome(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(homeSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About Us",
      href: "#about",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Achievements",
      href: "#achievements",
    },
    {
      name: "Contact Us",
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-transparent">
      {/* Transparent Navbar */}
      <div
        className="
          w-full
          border-b
          border-white/10
          bg-white/5
          backdrop-blur-md
          backdrop-saturate-150
          transition-all
          duration-300
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-6
            lg:px-10
          "
        >
          {/* ================= LOGO ================= */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center"
          >
            <img
              src={
                isHome ? "/image/nexa logo png.png" : "/image/nexa blue png.png"
              }
              alt="Nexagram"
              className={
                isHome
                  ? "h-[95px] w-[260px] object-contain"
                  : "h-[45px] w-[140px] object-contain"
              }
            />
          </a>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  relative
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isHome
                      ? "text-white hover:text-[#58B947]"
                      : "text-[#072F5F] hover:text-[#58B947]"
                  }
                `}
              >
                {item.name}

                {/* Hover underline */}
                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-[1px]
                    w-0
                    bg-current
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className={`
              rounded-lg
              p-2
              transition-all
              duration-300
              lg:hidden
              ${
                isHome
                  ? "text-white hover:bg-white/10"
                  : "text-[#072F5F] hover:bg-[#072F5F]/5"
              }
            `}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div
        className={`
          relative
          overflow-hidden
          transition-all
          duration-300
          lg:hidden
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            mx-4
            mb-4
            border
            border-white/20
            bg-white/10
            p-6
            shadow-lg
            backdrop-blur-xl
          "
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  text-base
                  font-medium
                  transition-colors
                  duration-300
                  ${
                    isHome
                      ? "text-white hover:text-[#58B947]"
                      : "text-[#072F5F] hover:text-[#58B947]"
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
