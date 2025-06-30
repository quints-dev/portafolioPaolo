import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I'm <span className="text-purple-900">Paolo Quintiliani</span>
      </h1>
      <p className="text-xl md:text-2xl font-light mb-6">
        UX/UI Designer & Front End JavaScript Developer
      </p>
      <a
        href="#projects"
        className="inline-block px-6 py-3 mt-6 bg-black text-white dark:bg-white dark:text-black rounded-md transition-colors duration-300"
      >
        Ver Proyectos
      </a>
    </section>
  );
};

export default Hero;
