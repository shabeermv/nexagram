import React from "react";
import { Navbar, Footer, FixedPlugin } from "@/components";

import Hero from "@/app/hero";
import OnlineCourse from "@/app/about";

import Founders from "@/app/founders";
import Brands from "@/app/Brands";
import OtherCourses from "@/app/achivements";
import Contact from "@/app/contact";

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <OnlineCourse />

        <Founders />
        <Brands />
        <OtherCourses />
        <Contact />
      </main>
      <Footer />
      <FixedPlugin />
    </div>
  );
}

export default App;
