"use client";

import {
  EyeIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: EyeIcon,
    title: "Our Vision",
    description:
      "To transform government-citizen engagement through transparent, connected communication.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Our Mission",
    description:
      "To deliver innovative digital marketing solutions that bridge governments and communities, enabling clear communication, local growth, and measurable impact.",
  },
  {
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
          ABOUT / INTRODUCTION SECTION
      ========================================================== */}
      <section
        id="about"
        className="relative overflow-hidden bg-white px-6 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28"
      >
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#58B947]/5 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* =====================================================
                LEFT IMAGE / LOGO
            ====================================================== */}
            <div className="relative flex min-h-[380px] items-center justify-center lg:min-h-[550px]">
              {/* Outer Circle */}
              <div
                className="
                  absolute
                  h-[280px]
                  w-[280px]
                  rounded-full
                  border
                  border-[#58B947]/20
                  sm:h-[390px]
                  sm:w-[390px]
                  lg:h-[500px]
                  lg:w-[500px]
                "
              />

              {/* Inner Circle */}
              <div
                className="
                  absolute
                  h-[215px]
                  w-[215px]
                  rounded-full
                  border
                  border-[#123B66]/10
                  sm:h-[310px]
                  sm:w-[310px]
                  lg:h-[400px]
                  lg:w-[400px]
                "
              />

              {/* Glow */}
              <div
                className="
                  absolute
                  h-[220px]
                  w-[220px]
                  rounded-full
                  bg-[#58B947]/10
                  blur-3xl
                  sm:h-[250px]
                  sm:w-[250px]
                "
              />

              {/* Logo */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-[260px]
                  w-[260px]
                  items-center
                  justify-center
                  sm:h-[360px]
                  sm:w-[360px]
                  lg:h-[450px]
                  lg:w-[500px]
                "
              >
                <img
                  src="/image/x%20png.png"
                  alt="Nexagram - The Digital Standard"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* =====================================================
                RIGHT CONTENT
            ====================================================== */}
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#123B66]" />

                <span className="text-xs font-bold uppercase tracking-[0.35em] text-gray-500">
                  Who We Are
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-[#0d0d4f] sm:text-5xl lg:text-6xl">
                Digital Ideas.
                <span className="block text-[#58B947]">Real Impact.</span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-lg leading-8 text-gray-500">
                Nexagram is a forward-thinking digital marketing company focused
                on transforming communication between governments and citizens
                through innovative and transparent strategies.
              </p>

              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-gray-500 md:text-lg">
                From panchayat to district level, we undertake and execute
                marketing initiatives that strengthen public engagement using
                digital platforms.
              </p>

              <p className="mt-5 max-w-xl text-base font-normal leading-8 text-gray-500 md:text-lg">
                Our approach is rooted in understanding local communities and
                delivering customized solutions that drive real impact. By
                leveraging modern technology and creative communication,
                Nexagram ensures that government services and initiatives reach
                people clearly and effectively.
              </p>

              {/* Bottom Accent */}
              <div className="mt-9 flex items-center gap-3">
                <span className="h-1 w-16 rounded-full bg-[#58B947]" />
                <span className="h-1 w-8 rounded-full bg-[#123B66]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIGITAL COMMUNICATION SECTION
      ========================================================== */}
      <section className="bg-white px-6 py-20 sm:px-8 md:py-24 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-16
              lg:grid-cols-3
              lg:gap-12
            "
          >
            {/* =====================================================
                LEFT IMAGE
            ====================================================== */}
            <div className="flex items-center justify-center lg:col-span-1">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/image/nexa hand.png"
                  alt="Nexagram Digital Communication"
                  className="
                    h-auto
                    max-h-[500px]
                    w-auto
                    max-w-[300px]
                    object-contain
                    sm:max-h-[550px]
                    sm:max-w-[340px]
                    lg:max-h-[600px]
                    lg:max-w-[380px]
                  "
                />
              </div>
            </div>

            {/* =====================================================
                RIGHT CONTENT
            ====================================================== */}
            <div className="lg:col-span-2 lg:pl-12">
              {/* Heading */}
              <h2
                className="
                  mb-4
                  text-3xl
                  font-bold
                  leading-tight
                  text-gray-900
                  md:text-4xl
                "
              >
                Digital Communication & Marketing Solutions
              </h2>

              {/* Description */}
              <p
                className="
                  mb-10
                  max-w-3xl
                  text-left
                  text-lg
                  leading-relaxed
                  text-gray-500
                "
              >
                Nexagram is a forward-thinking digital marketing company focused
                on transforming communication between governments, businesses,
                and citizens through innovative, transparent, and impactful
                digital strategies.
              </p>

              {/* =================================================
                  VISION / MISSION / VALUES
              ================================================== */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-8
                  sm:grid-cols-3
                "
              >
                {FEATURES.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="
                      rounded-xl
                      border
                      border-gray-100
                      bg-white
                      p-6
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-lg
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        mb-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-lg
                        bg-gray-900
                        text-white
                      "
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mb-3
                        text-xl
                        font-semibold
                        text-gray-900
                      "
                    >
                      {title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        text-sm
                        leading-6
                        text-gray-500
                      "
                    >
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OnlineCourse;
