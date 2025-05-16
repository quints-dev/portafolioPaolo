import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I'm <span className="text-blue-500">Paolo Quintiliani</span>
      </h1>
      <p className="text-xl md:text-2xl font.light mb-6">
        UX/UI Designer & Full-Stack JavaScript Developer
      </p>
      <a
        href="#projects"
        className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full text-sm hover:scale-105 transition-transform"
      >
        Ver Proyectos
      </a>
    </section>
  );
};

export default Hero;
