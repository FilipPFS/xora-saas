import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import React from "react";

const Home = () => {
  return (
    <main className="overflow-hidden mb-20">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </main>
  );
};

export default Home;
