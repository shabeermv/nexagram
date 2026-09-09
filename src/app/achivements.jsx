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
      className="relative overflow-hidden bg-white px-6 pb-0 pt-16 sm:px-8 md:pt-20"
    >
      <div className="relative z-10">
        <div className="container mx-auto mb-8 text-center md:mb-10">
          {/* Small Heading */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-gray-900" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
              Recognition & Excellence
            </span>

            <span className="h-[2px] w-10 bg-gray-900" />
          </div>

          {/* Main Heading */}
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3 text-4xl font-black tracking-tight md:text-5xl"
          >
            Our Achievements
          </Typography>

          {/* Description */}
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 text-base font-normal !text-gray-500 md:text-lg lg:w-6/12"
          >
            Driven by creativity, strategy, and excellence, we turn bold ideas
            into impactful results. Our achievements reflect the trust,
            recognition, and lasting impact we create for every client.
          </Typography>
        </div>

        {/* =======================================================
            ACHIEVEMENT CARDS
        ======================================================== */}

        <div className="container mx-auto grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {OTHER_COURSES.map((props, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-[30px] border border-[#58B947] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="h-[250px] w-full overflow-hidden">
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
              <div className="flex min-h-[70px] items-center justify-center px-4 py-4 text-center">
                <Typography
                  variant="h6"
                  className="text-[14px] font-medium leading-5 text-[#1f2937]"
                >
                  {props.title}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          HUGE BACKGROUND TEXT
      ========================================================== */}

      <div className="container mx-auto mt-12 overflow-hidden lg:mt-6 mb-12">
        <div className="relative h-[90px] sm:h-[110px] md:h-[130px] lg:h-[150px]">
          <h2
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              whitespace-nowrap
              text-[clamp(70px,12vw,160px)]
              font-black
              leading-none
              tracking-[-0.08em]
              text-gray-100
            "
          >
            ACHIEVEMENTS
          </h2>
        </div>
      </div>
    </section>
  );
}

export default OtherCourses;
