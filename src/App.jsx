import React from "react";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";
import Switch from "./components/switch";
import Contact from "./components/contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all">
      <main className="max-w-screen-xl mx-auto px-4 md:px-8 bg-white text-black dark:bg-black dark:text-white transition-all">
        <div className="p-4 flex justify-end">
          <Switch />
        </div>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
export default App;
