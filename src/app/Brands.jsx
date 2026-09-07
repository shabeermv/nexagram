"use client";

const CLIENTS = [
  {
    name: "CLICKCART",
    logo: "/image/clients/travel vista.PNG",
  },

  {
    name: "GRILLSPOT",
    logo: "/image/clients/optaxwave logo png.png",
  },

  {
    name: "CLICKCART",
    logo: "/image/clients/ventreads.png",
  },
  {
    name: "CLICKCART",
    logo: "/image/clients/caplineedu_logo.png",
  },
];

const logoStyles = [
  "font-black tracking-tight",
  "font-bold tracking-[0.12em]",
  "font-extrabold tracking-[-0.04em]",
  "font-semibold tracking-wide",
  "font-black italic",
  "font-bold tracking-tight",
];

function ClientLogo({ client }) {
  return (
    <div
      className="
        group
        flex
        h-40
        min-w-[300px]
        items-center
        justify-center
        border-r
        border-gray-200
        bg-white
        px-8
        transition-all
        duration-300
        hover:bg-gray-50
        md:h-36
        md:min-w-[260px]
        md:px-12
      "
    >
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="
          max-h-36
          max-w-[200px]
          object-contain
          grayscale
          opacity-60
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:grayscale-0
          group-hover:opacity-100
          md:max-h-40
          md:max-w-[140px]
        "
      />
    </div>
  );
}

export default function Clients() {
  return (
    <section
      id="clients"
      className=" relative overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-16 "
    >
      {" "}
      <div className="mx-auto max-w-7xl">
        {" "}
        {/* HEADER */} {/* HEADER */}
        <div className="mb-20 text-center">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#58B947]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#58B947]">
              Our Brother Ventures
            </span>

            <span className="h-px w-12 bg-[#58B947]" />
          </div>

          {/* Main Heading */}
          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Building Brands.
            <br />
            <span className="text-gray-300">Creating Impact.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            We partner with ambitious businesses to build stronger brands,
            unlock new opportunities, and achieve sustainable growth through
            strategic thinking, meaningful connections, and measurable results.
          </p>
        </div>
        {/* CLIENT MARQUEE */}{" "}
        <div className=" relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-5 md:p-8 lg:p-10 ">
          {" "}
          {/* LEFT FADE */}{" "}
          <div className=" pointer-events-none absolute left-5 top-5 z-20 h-[calc(100%-40px)] w-20 rounded-l-2xl bg-gradient-to-r from-white via-white/90 to-transparent md:left-8 md:top-8 md:h-[calc(100%-64px)] md:w-28 " />{" "}
          {/* RIGHT FADE */}{" "}
          <div className=" pointer-events-none absolute right-5 top-5 z-20 h-[calc(100%-40px)] w-20 rounded-r-2xl bg-gradient-to-l from-white via-white/90 to-transparent md:right-8 md:top-8 md:h-[calc(100%-64px)] md:w-28 " />{" "}
          {/* MARQUEE VIEWPORT */}{" "}
          <div className=" overflow-hidden rounded-2xl border border-gray-200 bg-white ">
            {" "}
            {/* MOVING TRACK */}{" "}
            <div className=" flex w-max animate-client-marquee hover:[animation-play-state:paused] ">
              {" "}
              {/* FIRST SET */}{" "}
              <div className="flex shrink-0">
                {" "}
                {CLIENTS.map((client, index) => (
                  <ClientLogo
                    key={`first-${client.name}-${index}`}
                    client={client}
                  />
                ))}{" "}
              </div>{" "}
              {/* DUPLICATE SET */}{" "}
              <div className="flex shrink-0">
                {" "}
                {CLIENTS.map((client, index) => (
                  <ClientLogo
                    key={`second-${client.name}-${index}`}
                    client={client}
                  />
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* BOTTOM TEXT */}{" "}
        <div className="mt-8 flex items-center justify-center">
          {" "}
          <p className=" text-center text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 ">
            {" "}
            Building partnerships that move brands forward{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
