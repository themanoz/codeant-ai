"use client";
import { ChevronRight, Sparkles } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const elements = heroRef.current.querySelectorAll(".parallax");

      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = Number.parseFloat(element.dataset.speed || "0.1");
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="container mx-auto px-4 py-4 sm:py-24 relative z-10 text-center place-items-center">
      <div className="flex flex-col items-center text-center">
        <div
          className={`inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-transparent dark:text-white border border-[#E6E8EB] dark:border-sidebar-border text-[#1E293B] text-sm font-medium mb-8 shadow-sm transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] mr-2">
            <Sparkles size={12} className="text-white" />
          </span>
          <span>Introducing AI-Powered Code Reviews</span>
          <ChevronRight size={16} className="ml-1 text-[#94A3B8]" />
        </div>
      </div>

      <h1
        className={`max-w-3xl text-3xl md:text-4xl lg:text-6xl font-normal tracking-tight text-[#0F172A] mb-6 transition-all duration-1000 ease-out ${
          isLoaded
            ? "opacity-100 translate-y-0 dark:text-white"
            : "opacity-0 translate-y-4"
        }`}
      >
        Elevate Your Code with
        <span className="relative inline-block">
          <span className="relative z-10 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">
            Intelligent Reviews
          </span>
          {/* <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#FFFFFF] opacity-70 -z-10 transform -rotate-1"></span> */}
        </span>
      </h1>
      <p
        className={`text-lg text-muted-foreground mb-6 max-w-2xl transition-all duration-1000 ease-out delay-100 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Modern, minimal, and powered by advanced AI – designed to transform how
        developers write, review, and improve code.
      </p>

      <div
        className={`flex flex-wrap justify-center gap-2 transition-all duration-1000 ease-out delay-200 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Button className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white">
          Get Started
        </Button>
        <Button variant={"secondary"}>Book Call</Button>
        {/* <Button
          variant="secondary"
          // className="border-[#E2E8F0] bg-white text-[#475569] hover:bg-[#F8FAFC] px-8 py-7 text-base font-medium rounded-xl transition-all duration-300 hover:border-[#CBD5E1]"
        >
          Watch Demo
        </Button> */}
      </div>
      {/* <p className="text-md text-muted-foreground mt-2 flex items-center gap-2">
        Backed by <Image src="https://framerusercontent.com/images/H41aKYQauqiDdoCLJXy3OtIU0I.png?scale-down-to=512" alt="yc" width={120} height={120} className="pt-1" />
      </p> */}
      <Image
        src={
          "https://framerusercontent.com/images/aid8YW73qTpl9D5eJxrw4SLMImU.png?scale-down-to=2048"
        }
        alt="dashboard"
        width={980}
        height={1000}
        className="rounded-md mt-6"
      />
    </section>
  );
}

export default Hero;
