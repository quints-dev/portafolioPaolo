/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

const About = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 bg-white dark:bg-zinc-950 text-black dark:text-white"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Sobre mí
        </h2>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
          <p>
            Soy <strong>Paolo Quintiliani</strong>, diseñador UX y desarrollador
            web en constante aprendizaje. Me especializo en crear experiencias
            digitales simples, funcionales y centradas en las personas.
          </p>
          <p>
            He trabajado en proyectos como <em>Clin</em> (una billetera digital
            para Chile) y varios ejercicios de diseño y desarrollo full stack.
          </p>
          <p>
            Combino herramientas como <strong>Figma</strong>,{" "}
            <strong>React</strong>, <strong>Node.js</strong>, y{" "}
            <strong>Tailwind CSS</strong> para diseñar y construir productos
            digitales.
          </p>
          <p>
            También soy fan de la tecnología, los videojuegos, y las interfaces
            bien pensadas.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          {[
            "Figma",
            "React",
            "Tailwind",
            "Node.js",
            "PostgreSQL",
            "Framer Motion",
            "UX Research",
            "Design Thinking",
            "JavaScript",
          ].map((tech, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="border dark:border-white border-black px-4 py-2 rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
// Compare this snippet from portafolio/src/components/projects.jsx:
