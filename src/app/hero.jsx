"use client";

export function Hero() {
  return (
    <div
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image/hero.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Logo - Right Side */}
      <div className="relative z-10 flex min-h-screen items-center justify-end px-6 md:px-16 lg:px-24">
        <img
          src="/image/nexa%20logo%20png.png"
          alt="Nexagram - The Digital Standard"
          className="w-[700px] max-w-[55vw] h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
