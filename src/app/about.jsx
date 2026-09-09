"use client";

import {
  EyeIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    number: "01",
    icon: EyeIcon,
    title: "Our Vision",
    description:
      "To transform government-citizen engagement through transparent, connected communication.",
  },
  {
    number: "02",
    icon: RocketLaunchIcon,
    title: "Our Mission",
    description:
      "To deliver innovative digital marketing solutions that bridge governments and communities, enabling clear communication, local growth, and measurable impact.",
  },
  {
    number: "03",
    icon: SparklesIcon,
    title: "Our Values",
    description:
      "We believe in transparency, innovation, collaboration, integrity, and creating measurable value through every digital solution we deliver.",
  },
];

export function OnlineCourse() {
  return (
    <>
      {/* =========================================================
          ABOUT / INTRODUCTION
      ========================================================== */}
      <section
        id="about"
        className="relative overflow-hidden bg-white px-6 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28"
      >
        {/* Small background accent */}
        <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[#58B947]/5 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">
            {/* =====================================================
                X IMAGE
            ====================================================== */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative flex h-[320px] w-full max-w-[500px] items-center justify-center sm:h-[400px] lg:h-[500px]">
                {/* Simple X frame */}
                <div className="absolute inset-8 rounded-full border border-[#58B947]/15 sm:inset-12" />

                <div className="absolute inset-16 rounded-full border border-[#123B66]/10 sm:inset-20" />

                <div className="relative z-10 flex h-full w-full items-center justify-center">
                  <img
                    src="/image/x%20png.png"
                    alt="Nexagram - The Digital Standard"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* =====================================================
                INTRO CONTENT
            ====================================================== */}
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#123B66]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                  Who We Are
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#0d0d4f] sm:text-5xl lg:text-[58px]">
                Digital Ideas.
                <span className="block text-[#58B947]">Real Impact.</span>
              </h1>

              {/* Description */}
              <div className="mt-7 space-y-5">
                <p className="max-w-xl text-base leading-7 text-gray-500 md:text-lg">
                  Nexagram is a forward-thinking digital marketing company
                  focused on transforming communication between governments and
                  citizens through innovative and transparent strategies.
                </p>

                <p className="max-w-xl text-base leading-7 text-gray-500">
                  From panchayat to district level, we undertake and execute
                  marketing initiatives that strengthen public engagement using
                  digital platforms.
                </p>

                <p className="max-w-xl text-base leading-7 text-gray-500">
                  Our approach is rooted in understanding local communities and
                  delivering customized solutions that drive real impact. By
                  leveraging modern technology and creative communication,
                  Nexagram ensures that government services and initiatives
                  reach people clearly and effectively.
                </p>
              </div>

              {/* Accent */}
              <div className="mt-8 flex items-center gap-2">
                <span className="h-[3px] w-14 rounded-full bg-[#58B947]" />
                <span className="h-[3px] w-7 rounded-full bg-[#123B66]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIGITAL COMMUNICATION
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#f8f9fa] px-6 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28">
        <div className="container relative z-10 mx-auto max-w-7xl">
          {/* IMPORTANT:
              Desktop layout is reversed here.
              Content LEFT / Image RIGHT
          */}
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* =====================================================
                CONTENT LEFT
            ====================================================== */}
            <div className="order-2 lg:order-1">
              {/* Small Label */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#58B947]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">
                  Our Approach
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#0d0d4f] sm:text-4xl lg:text-5xl">
                Digital Communication &{" "}
                <span className="text-[#58B947]">Marketing Solutions</span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
                Nexagram is a forward-thinking digital marketing company focused
                on transforming communication between governments, businesses,
                and citizens through innovative, transparent, and impactful
                digital strategies.
              </p>

              {/* =================================================
                  FEATURES
              ================================================== */}
              <div className="mt-10 space-y-4">
                {FEATURES.map(({ number, icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#58B947]/40 hover:shadow-lg sm:p-6"
                  >
                    {/* Green side accent */}
                    <div className="absolute left-0 top-0 h-full w-[3px] bg-[#58B947] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex gap-4 sm:gap-5">
                      {/* Number */}
                      <div className="hidden pt-1 text-xs font-bold tracking-widest text-[#58B947] sm:block">
                        {number}
                      </div>

                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0d0d4f] text-white transition-colors duration-300 group-hover:bg-[#58B947]">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =====================================================
                IMAGE RIGHT
            ====================================================== */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative flex min-h-[430px] w-full max-w-[500px] items-center justify-center overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:min-h-[520px] lg:min-h-[600px]">
                {/* Background X line */}
                <div className="absolute left-0 top-1/2 h-[1px] w-full bg-[#58B947]/10" />

                <div className="overflow-hidden rounded-xl shadow-lg" />

                {/* Image */}
                <img
                  src="/image/nexa hand.png"
                  alt="Nexagram Digital Communication"
                  className="relative z-10 h-auto max-h-[420px] w-auto max-w-[270px] object-contain transition-transform duration-500 hover:scale-[1.03] sm:max-h-[480px] sm:max-w-[320px] lg:max-h-[550px] lg:max-w-[360px]"
                />

                {/* Small bottom label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">
                    Nexagram
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#58B947]">
                    Digital Standard
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OnlineCourse;
