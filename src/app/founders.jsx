import React from "react";

const founders = [
  {
    name: "Mohammed Ashiq KK",
    role: "Founder, Managing Director",
    image: "/image/ashiq png.png",
  },
  {
    name: "Suhail V",
    role: "Co-founder, CRM",
    image: "/image/suhail nexagram png.png",
  },
  {
    name: "Mohamed Shanif P",
    role: "Co-founder, Operation Manager",
    image: "/image/shanif png.png",
  },
  {
    name: "Lukmanul Hakeem K",
    role: "Co-founder, Sales Head",
    image: "/image/lukman png.png",
  },
];

export default function FoundersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      {/* Background watermark */}
      <div className="absolute inset-0 bg-white">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "url('/image/x%20png.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "260px auto",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Main container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Nexagram logo */}
        <div className="relative mb-12 flex justify-center md:mb-16">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold tracking-[0.35em] text-[#123B66] md:-top-5 md:text-sm">
            WE THE
          </span>

          <img
            src="/image/nexa blue 2.png"
            alt="Nexagram"
            className="h-24 w-auto object-contain md:h-28 lg:h-32"
          />
        </div>

        {/* Founders grid */}
        <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="flex w-full max-w-[280px] flex-col items-center text-center"
            >
              {/* Founder image */}
              <div className="h-44 w-44 shrink-0 overflow-hidden rounded-full border-2 border-[#58B947] bg-white sm:h-48 sm:w-48 lg:h-52 lg:w-52">
                <img
                  src={founder.image}
                  alt={founder.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Founder name */}
              <h3 className="mt-5 min-h-[3.5rem] w-full text-center text-lg font-semibold leading-7 text-[#123B66] sm:text-xl">
                {founder.name}
              </h3>

              {/* Founder role */}
              <p className="mt-1 min-h-[3rem] w-full text-center text-sm leading-6 text-[#6B7280] sm:text-base">
                {founder.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
