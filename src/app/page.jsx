// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OnlineCourse from "./about";
import Services from "./services";
import Founders from "./founders";
import Pricing from "./Brands";
import Achivements from "./achivements";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OnlineCourse />
      <Services />
      <Founders />
      <Pricing />
      <Achivements />
      <Footer />
    </>
  );
}
