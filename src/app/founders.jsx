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
    name: "Lukmanul Hakeem K",
    role: "Co-founder, Sales Head",
    image: "/image/lukman png.png",
  },
  {
    name: "Mohamed Shanif p",
    role: "Co-founder, Operation Manager",
    image: "/image/shanif png.png",
  },
  {
    name: "Jasar KP",
    role: "Co-founder",
    image: "/image/jasar kp.png",
  },
];
export default function FoundersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14 lg:py-16">
      {/* ================= WHITE BACKGROUND + LOW OPACITY IMAGE ================= */}
      <div className="absolute inset-0 z-0 bg-white">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "url('/image/x%20png.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "260px auto",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        {/* ================= NEXAGRAM LOGO ================= */}
        <div className="relative mb-10 flex justify-center md:mb-12">
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[12px] font-semibold tracking-[0.35em] text-[#123B66] md:-top-7 md:text-[16px]">
            WE THE
          </span>

          <img
            src="/image/nexa blue 2.png"
            alt="Nexagram"
            className="h-24 w-auto object-contain md:h-32 lg:h-40"
          />
        </div>

        {/* ================= FOUNDERS GRID ================= */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-0">
          {" "}
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* FOUNDER IMAGE */}
              <div className="h-[190px] w-[190px] overflow-hidden rounded-full border border-[#58B947] bg-white md:h-[210px] md:w-[210px] lg:h-[220px] lg:w-[220px]">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* FOUNDER NAME */}
              <h3 className="mt-4 text-[19px] font-semibold leading-tight text-[#123B66] md:text-[20px] lg:text-[21px]">
                {founder.name}
              </h3>

              {/* FOUNDER ROLE */}
              <p className="mt-1 text-[14px] font-normal leading-6 text-[#6B7280] md:text-[15px] lg:text-[16px]">
                {founder.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
