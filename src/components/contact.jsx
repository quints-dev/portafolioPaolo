const Contact = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Contacto
      </h2>
      <form
        action="mailto:paoloquintiliani91@gmail.com"
        method="POST"
        className="max-w-xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="w-full px-4 py-2 rounded-md border dark:border-white border-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          className="w-full px-4 py-2 rounded-md border dark:border-white border-black"
          required
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          rows="5"
          className="w-full px-4 py-2 rounded-md border dark:border-white border-black"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
