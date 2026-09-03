// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OnlineCourse from "./about";
import Founders from "./founders";
import Pricing from "./brands";
import Achivements from "./achivements";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OnlineCourse />
      <Founders />
      <Pricing />
      <Achivements />
      <Footer />
    </>
  );
}
