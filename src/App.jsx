import React from "react";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";

function App() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white transition-all">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
export default App;
