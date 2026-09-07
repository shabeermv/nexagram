"use client";

export function Hero() {
  return (
    <div
      id="home"
      className="relative min-h-[120vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image/NEXAGRAM HERO BANER.jpg.jpeg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Center Logo */}
      <div className="relative z-10 flex min-h-[90vh] items-center justify-center px-6">
        <img
          src="/image/nexa%20logo%20png.png"
          alt="Nexagram - The Digital Standard"
          className="w-[700px] max-w-[80vw] h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
