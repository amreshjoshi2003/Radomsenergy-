import Hero from "@/components/Hero";
import Residential from "@/components/Residential";
import Commercial from "@/components/Commercial";
import FarmerSolar from "@/components/FarmerSolar";

export default function Home() {
  return (
    <>
      <Hero />
      <Residential /> 
      <FarmerSolar />
      <Commercial />
      
    </>
  );
}