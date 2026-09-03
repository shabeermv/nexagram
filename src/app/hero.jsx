"use client";

export function Hero() {
  return (
    <div
      id="home"
      className="relative min-h-screen w-full bg-[#0d0d4f] overflow-hidden"
    >
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <img
          src="/image/nexa%20logo%20png.png"
          alt="Nexagram - The Digital Standard"
          className="w-[1100px] max-w-[90vw] h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
