import React from "react";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

const Home = () => {
  const backgroundImage = '/img/background.jpeg';

  return (
    <section
      className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center bg-black overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">carlo kruger</h1>
        <p className="text-lg md:text-xl text-white/90">this is my space</p>
      </div>
    </section>
  );
};

export default Home;