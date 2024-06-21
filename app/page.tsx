import Hero from "@/components/hero";
import Services from "@/components/services";
import Work from "@/components/work";
import FAQ from "@/components/FAQ";
import Contact from "@/components/contact";


import Image from "next/image";

export const runtime = 'edge'
export default function Home() {
  return (
    
    
    <main>
      <Hero />
      <Services />
      <Work />
      <FAQ />
      <Contact/>
    </main>
    
    
  );
}
