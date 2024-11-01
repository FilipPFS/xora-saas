import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <main className="overflow-hidden pb-20">
      <Header />
      <Hero />
      <Features />
    </main>
  );
};

export default Home;
