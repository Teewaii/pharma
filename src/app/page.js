import Image from "next/image";
import TopBar from "@/components/utils/TopBar";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import ServiceInfographics from "@/components/ServiceInfographics";
import BookAppointment from "@/components/BookAppointment";
import { SpecialCare } from "@/components/SpecialCare";
import FeedBack from "@/components/FeedBack";
import WhyPharma from "@/components/WhyPharma";
import TeamContainer from "@/components/TeamContainer";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Services />
        <AboutUs />
        <ServiceInfographics />
        <BookAppointment />
        <SpecialCare />
        <FeedBack />
        <WhyPharma />
        <TeamContainer />
      </div>
    </main>
  );
}
