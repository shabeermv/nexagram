"use client";

export function Hero() {
  return (
    <div id="home" className="relative w-full overflow-hidden">
      {/* Hero Background Image */}
      <img
        src="/image/NEXAGRAM HERO BANER.jpg.jpeg"
        alt="Nexagram Hero"
        className="block h-auto w-full"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Center Logo */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <img
          src="/image/nexa%20logo%20png.png"
          alt="Nexagram - The Digital Standard"
          className="h-auto w-[700px] max-w-[80vw] object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
