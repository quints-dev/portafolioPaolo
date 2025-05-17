import React from "react";

const projects = [
  {
    title: "Clin!",
    descripcion:
      "CLIN! es una aplicación móvil de billetera digital diseñada para el mercado chileno, inspirada en la popular aplicación peruana Yape. El objetivo principal de CLINI es facilitar las transacciones financieras entre usuarios de manera rápida, segura y sencilla, utilizando códigos QR y números de teléfono como identificadores.",
    tags: ["Figma", "Prototipo", "UX/UI"],
    image: "/images/CLIN!.png",
    link: "https://www.figma.com/design/QQsg5M15xPqTO36xmqObct/clin-ux-ui?node-id=0-1&t=vnaZu7lZ9Gqb6Aa0-1",
  },
  {
    title: "eShop Reimaginada",
    descripcion:
      "Proyecto de reimaginación de la tienda eshop de Nintendo, con un enfoque movil y una experiencia de usuario optimizada. El objetivo es mejorar la navegación, la presentación de productos y la interacción del usuario con la tienda.",
    tags: ["Figma", "Prototipo", "UX/UI"],
    image: "/images/eshop.png",
    link: "https://www.figma.com/design/kVw7rt0d9IGGrqA6zsSkin/newEshop?node-id=0-1&t=RdDew8yxcozPyjWj-1",
  },
  {
    title: "Spotify clone",
    descripcion:
      "Clone de la aplicación Spotify, desarrollado con React y Tailwind CSS. El proyecto incluye una interfaz de usuario similar a la de Spotify, con funcionalidades básicas como reproducción de música y gestión de listas de reproducción.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: "/images/spotifyClone.png",
    link: "https://github.com/quints-dev/spotifyClone",
  },
  {
    title: "Animales Salvajes",
    descripcion:
      "Aplicación web HTML,CSS y JavaScript que permite a los usuarios explorar una variedad de animales salvajes. La aplicación incluye información detallada sobre cada animal, como su edad, tipo y sonido.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/animales.png",
    link: "https://github.com/quints-dev/animalesSalvajes/blob/main/assets/css/estilos.css",
  },
  {
    title: "Api Rick & Morty",
    descripcion:
      "Proyecto de consumo de la API de Rick & Morty, desarrollado con React. El proyecto incluye una interfaz de usuario que permite a los usuarios explorar personajes, episodios y ubicaciones de la serie.",
    tags: ["React", "API", "JavaScript"],
    image: "/images/rick.png",
    link: "https://rickmortyapi-sooty.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-zinc-900"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Proyectos
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.descripcion}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-black text-white dark:bg-white dark:text-black text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
