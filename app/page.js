import BenefitsSection from "@/components/BenefitSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import SuccessStories from "@/components/SuccessStories";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";
export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar/>
      <HeroSection/>
      <WhyChooseUsSection/>
      <Results/>
      <HowItWorksSection/>
      <BenefitsSection/>
      
      <SuccessStories/>
      <ContactUs/>
    </div>
  );
}
