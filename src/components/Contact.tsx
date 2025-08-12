import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeInOut" }
  },
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"" | "success" | "error">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/TON_ID_FORM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <motion.div
      id="Contact"
      className="bg-base-300 px-10 pt-10 pb-20 font-bold"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <section id="form">
        <h2 className="lg:text-5xl text-2xl font-bold mb-4 text-center">
          Envoyez un message !
        </h2>
        <p className="text-center text-gray-300 font-light mb-8 md:mb-12 text-sm md:text-base">
          Vous avez une question, une proposition, un commentaire ou vous
          souhaitez simplement <br />
          dire bonjour ? Allez-y
        </p>

        <form
          id="contact-form"
          className="max-w-3xl mx-auto pt-8"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-gray-200 text-base md:text-xl font-semibold mb-2">
                VOTRE NOM
              </label>
              <input
                name="name"
                type="text"
                placeholder="Entrez votre nom"
                className="w-full font-normal md:font-semibold py-3  text-white text-base md:text-xl bg-base-300 border-b border-white/50 focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-200 text-base md:text-xl font-semibold mb-2">
                VOTRE EMAIL
              </label>
              <input
                name="email"
                type="email"
                placeholder="Entrez votre email"
                className="w-full font-normal md:font-semibold py-3 text-white text-base md:text-xl bg-base-300 border-b border-white/50 focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-gray-200 text-base md:text-xl font-semibold mb-2">
              VOTRE MESSAGE
            </label>
            <textarea
              name="message"
              placeholder="Écrivez votre message"
              rows={4}
              className="w-full font-normal md:font-semibold py-3 text-white text-base md:text-xl bg-base-300 border-b border-white/50 focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02] resize-none"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-800 md:bg-red-700 hover:bg-red-900 transition duration-300 ease-in-out font-semibold md:font-bold text-white py-3"
          >
            ENVOYEZ VOTRE MESSAGE
          </button>

          {/* Feedback */}
          {status === "success" && (
            <div className="text-green-400 text-center mb-6 flex flex-col items-center gap-2 success-animation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Message envoyé avec succès !</span>
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 flex items-center justify-center gap-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span>Erreur lors de l’envoi du message.</span>
            </div>
          )}
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
