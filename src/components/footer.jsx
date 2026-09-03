import React from "react";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0d0d4f] text-white">
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================== */}

      {/* Green Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#58B947]/10 blur-[120px]" />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[130px]" />

      {/* Large X Background */}
      <img
        src="/image/x png.png"
        alt=""
        className="pointer-events-none absolute -right-16 top-0 h-auto w-[380px] select-none opacity-5"
      />

      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}

      <div className="container relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-10">
        {/* =======================================================
            TOP FOOTER CONTENT
        ======================================================== */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16 lg:gap-20">
          {/* =====================================================
              LOGO
          ====================================================== */}

          <div className="flex flex-col items-start">
            <a href="#home" className="inline-block">
              <img
                src="/image/nexa logo png.png"
                alt="Nexagram"
                className="w-[190px] object-contain sm:w-[220px]"
              />
            </a>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
              The Digital Standard
            </p>
          </div>

          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#58B947]">
              Navigation
            </h3>

            <nav className="mt-6">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-white/60 transition-colors duration-300 hover:text-[#58B947]"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* =====================================================
              CONTACT
          ====================================================== */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#58B947]">
              Contact
            </h3>

            {/* Address */}
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07]">
                <MapPinIcon className="h-4 w-4 text-[#58B947]" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/30">
                  Office
                </p>

                <p className="mt-1 text-sm leading-6 text-white/60">
                  Thirunavaya Road,
                  <br />
                  Near Supriya Hospital
                  <br />
                  Puthanathani, Malappuram Dt,
                  <br />
                  Kerala
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07]">
                <PhoneIcon className="h-4 w-4 text-[#58B947]" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/30">
                  Phone
                </p>

                <a
                  href="tel:+919496699405"
                  className="mt-1 block text-sm font-medium text-white/70 transition-colors hover:text-[#58B947]"
                >
                  +91 94966 99405
                </a>

                <a
                  href="tel:+919745205059"
                  className="mt-1 block text-sm font-medium text-white/70 transition-colors hover:text-[#58B947]"
                >
                  +91 97452 05059
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="mt-6 flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07]">
                <EnvelopeIcon className="h-4 w-4 text-[#58B947]" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/30">
                  Email
                </p>

                <a
                  href="mailto:info@nexagram.com"
                  className="mt-1 block text-sm text-white/70 transition-colors hover:text-[#58B947]"
                >
                  info@nexagram.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            DIVIDER
        ======================================================== */}

        <div className="my-10 h-px bg-white/10" />

        {/* =======================================================
            BOTTOM FOOTER
        ======================================================== */}

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          {/* Copyright */}
          <p className="text-center text-xs text-white/35 md:text-left">
            © {currentYear} Nexagram. All rights reserved.
          </p>

          {/* Website */}
          <a
            href="https://www.nexagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-white/50 transition-colors duration-300 hover:text-[#58B947]"
          >
            www.nexagram.com
          </a>

          {/* Privacy / Terms */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-white/35 transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </a>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <a
              href="#"
              className="text-xs text-white/35 transition-colors duration-300 hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
