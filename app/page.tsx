import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoCloud />
      <Features />
    </>
  );
}
