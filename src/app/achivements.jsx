import React from "react";

import { Typography } from "@material-tailwind/react";

const OTHER_COURSES = [
  {
    img: "/image/Bridge 2024 Season2 Award.jpeg",
    title: "Associate and part of Gitex Global",
  },
  {
    img: "/image/Associate and part of Gitex Global (1).jpeg",
    title: "Bridge 2024 Season2 Award",
  },
  {
    img: "/image/2026 Election Strategy and PR for UDF.jpeg",
    title: "2026 Election Strategy and PR for UDF",
  },

  {
    img: "/image/2023 JCI India Zone Award.jpeg",
    title: "2023 JCI India Zone Award",
  },
];

export function OtherCourses() {
  return (
    <section
      id="achievements"
      className="
    relative
    overflow-hidden
    bg-gradient-to-b
    from-gray-50
    via-white
    to-gray-50
    px-6
    pb-0
    pt-20
    sm:px-8
    md:pt-24
  "
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#58B947]/[0.035] blur-3xl" />

      <div className="relative z-10">
        {/* HEADER */}
        <div className="container mx-auto mb-12 text-center md:mb-14">
          {/* Small Heading */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#58B947]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
              Recognition & Excellence
            </span>

            <span className="h-[2px] w-10 bg-[#58B947]" />
          </div>

          {/* Main Heading */}
          <Typography
            variant="h2"
            color="blue-gray"
            className="
          mb-4
          text-4xl
          font-black
          tracking-tight
          text-gray-950
          md:text-5xl
          lg:text-6xl
        "
          >
            Our Achievements
          </Typography>

          {/* Description */}
          <Typography
            variant="lead"
            className="
          mx-auto
          w-full
          px-4
          text-base
          font-normal
          leading-7
          !text-gray-500
          md:text-lg
          lg:w-6/12
        "
          >
            A reflection of the ideas we champion, the partnerships we build,
            and the impact we create. Every recognition represents our
            commitment to creativity, strategy, and meaningful results.
          </Typography>
        </div>

        {/* ACHIEVEMENT CARDS */}
        <div
          className="
        container
        mx-auto
        grid
        grid-cols-1
        gap-x-7
        gap-y-8
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
        >
          {OTHER_COURSES.map((props, idx) => (
            <div
              key={idx}
              className="
            group
            overflow-hidden
            rounded-[28px]
            border
            border-gray-200
            bg-white
            shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[#58B947]/40
            hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)]
          "
            >
              {/* Image */}
              <div className="h-[250px] w-full overflow-hidden bg-gray-100">
                <img
                  src={props.img}
                  alt={props.title}
                  className="
                h-full
                w-full
                object-cover
                grayscale
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:grayscale-0
              "
                />
              </div>

              {/* Title */}
              <div
                className="
              flex
              min-h-[76px]
              items-center
              justify-center
              px-5
              py-5
              text-center
            "
              >
                <Typography
                  variant="h6"
                  className="
                text-[14px]
                font-semibold
                leading-5
                text-gray-800
              "
                >
                  {props.title}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {/* HUGE BACKGROUND TEXT */}
        <div className="container mx-auto mb-12 mt-16 overflow-hidden lg:mt-12">
          <div
            className="
          relative
          h-[90px]
          sm:h-[110px]
          md:h-[130px]
          lg:h-[150px]
        "
          >
            <h2
              className="
    absolute inset-0
    flex items-center justify-center
    whitespace-nowrap
    text-[clamp(70px,12vw,160px)]
    font-black
    uppercase
    leading-none
    tracking-[-0.09em]
    text-gray-200
    select-none
  "
            >
              ACHIEVEMENTS
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom separation shadow */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-gray-100/80 to-transparent" />
    </section>
  );
}

export default OtherCourses;
