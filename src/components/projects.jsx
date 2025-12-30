import React from "react";

const projects = [
  {
    title: "Pokédex",
    descripcion:
      "Proyecto Pokédex inspirado en la estética de la Pokédex clásica y la pantalla de Game Boy Advance, desarrollado como ejercicio de front-end y consumo de APIs, con foco en UI retro y arquitectura limpia en React.",
    tags: ["React", "CSS", "JavaScript", "UI", "API REST", "PokeApi"],
    image: "/images/pokedex.jpg",
    code: "https://github.com/quints-dev/pokedexGba",
    live: "https://pokedex-kappa-sepia.vercel.app/",
  },
  {
    title: "Clin!",
    descripcion:
      "CLIN! es una billetera digital para Chile, inspirada en Yape. Permite transacciones con QR y número de teléfono.",
    tags: ["Figma", "Prototipo", "UX/UI"],
    image: "/images/CLIN!.png",
    live: "https://www.figma.com/design/QQsg5M15xPqTO36xmqObct/clin-ux-ui?node-id=0-1",
  },
  {
    title: "eShop Reimaginada",
    descripcion:
      "Reimaginación de la Nintendo eShop con enfoque móvil y mejor experiencia de usuario.",
    tags: ["Figma", "Prototipo", "UX/UI"],
    image: "/images/eshop.png",
    live: "https://www.figma.com/design/kVw7rt0d9IGGrqA6zsSkin/newEshop?node-id=0-1",
  },
  {
    title: "Spotify clone",
    descripcion:
      "Clon visual de Spotify hecho con React y Tailwind. Fiel a la interfaz original.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: "/images/spotifyClone.png",
    code: "https://github.com/quints-dev/spotifyClone",
    live: "https://spotify-clone800.netlify.app/",
  },
  {
    title: "Animales Salvajes",
    descripcion:
      "App web en HTML, CSS y JS para explorar animales salvajes, con sonidos e info básica.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/animales.png",
    code: "https://github.com/quints-dev/animalesSalvajes",
    live: "https://animalessalvajes.netlify.app/", // si está publicado
  },
  {
    title: "API Rick & Morty",
    descripcion:
      "App React para explorar personajes y episodios desde la API oficial de Rick & Morty.",
    tags: ["React", "API", "JavaScript"],
    image: "/images/rick.png",
    code: "https://github.com/quints-dev/rickmortyapi",
    live: "https://rickmortyapi-sooty.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-zinc-900"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
        Proyectos
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                {project.descripcion}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-black text-white dark:bg-white dark:text-black text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-black rounded hover:opacity-80 transition"
                >
                  Ver código
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Ver online
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
