import React from "react";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";
import Switch from "./components/switch";

function App() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white transition-all">
      <div className="p-4 flex justify-end">
        <Switch />
      </div>
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
export default App;
