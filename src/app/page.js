import Image from "next/image";

import TopBar from "@/components/utils/TopBar";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Services />
        <AboutUs />
      </div>
    </main>
  );
}
