import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Title from "./Title";

interface FormData {
  prename: string;
  name: string;
  email: string;
  message: string;
  numero: string;
}

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    prename: "",
    name: "",
    email: "",
    message: "",
    numero: "",
  });

  const [status, setStatus] = useState<"" | "success" | "error" | "invalid">(
    ""
  );

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
    setStatus("");

    try {
      const capitalize = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

      const formatMessage = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

      const formDataToSend = new FormData();
      formDataToSend.append("Prename", capitalize(formData.prename));
      formDataToSend.append("Name", capitalize(formData.name));
      formDataToSend.append("Email", formData.email);
      formDataToSend.append("Tel", formData.numero);
      formDataToSend.append("Message", formatMessage(formData.message));

      const response = await fetch("https://formspree.io/f/mjkodwqz", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();
      console.log("Response:", response.status, data); // 🔥 Debug

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          prename: "",
          email: "",
          message: "",
          numero: "",
        });
      } else if (response.status === 422) {
        // Cas formulaire invalide (ex: email mal écrit)
        setStatus("invalid");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    }
  };

  return (
    <motion.div
      id="Contact"
      className="bg-base-300 px-10 pt-10 pb-20 font-bold scroll-mt-28 relative"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <section>
        <div className="md:mt-5 mb-5 md:mb-0">
          <Title title="Envoyez un message" />
        </div>
        <p className="text-center text-gray-300 font-light mb-2 mt-8 md:mt-10 md:mb-14 text-sm md:text-xl">
          Vous avez une question, une proposition, un commentaire ou vous
          souhaitez simplement dire bonjour ? Allez-y
        </p>

        <form className="max-w-3xl mx-auto pt-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 md:mb-20 mb-8">
            <div>
              <label className="block text-gray-200 text-sm md:text-xl font-bold mb-2">
                VOTRE PRENOM
              </label>
              <input
                name="prename"
                type="text"
                placeholder="Entrez votre prénom"
                className="w-full py-3 text-white text-sm font-semibold md:text-xl bg-base-300 border-b border-white/50 focus:border-red-500 outline-none"
                value={formData.prename}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 text-sm md:text-xl font-bold mb-2">
                VOTRE NOM
              </label>
              <input
                name="name"
                type="text"
                placeholder="Entrez votre nom"
                className="w-full py-3 text-white text-sm font-semibold md:text-xl bg-base-300 border-b border-white/50 focus:border-red-500 outline-none"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 text-sm md:text-xl font-bold mb-2">
                VOTRE EMAIL
              </label>
              <input
                name="email"
                type="email"
                placeholder="Entrez votre email"
                className="w-full py-3 text-white text-sm font-semibold md:text-xl bg-base-300 border-b border-white/50 focus:border-red-500 outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 text-sm md:text-xl font-bold mb-2">
                VOTRE NUMERO
              </label>
              <input
                name="numero"
                type="tel"
                pattern="^\+?[0-9]{8,15}$"
                inputMode="numeric"
                placeholder="Entrez votre numéro"
                className="w-full py-3 text-white text-sm font-semibold md:text-xl bg-base-300 border-b border-white/50 focus:border-red-500 outline-none"
                value={formData.numero}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-gray-200 text-sm md:text-xl font-bold mb-2">
              VOTRE MESSAGE
            </label>
            <textarea
              name="message"
              placeholder="Écrivez votre message"
              rows={4}
              className="w-full py-3 text-white text-sm md:text-xl bg-base-300 font-semibold border-b border-white/50 focus:border-red-500 outline-none resize-none"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-900 text-white py-3 font-bold"
          >
            ENVOYEZ VOTRE MESSAGE
          </button>

          {/* Pop-up */}
          {status && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.1 }}
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
              onClick={() => setStatus("")}
            >
              <div
                className="bg-base-100 rounded-2xl shadow-2xl px-6 py-8 text-center max-w-sm w-80 border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {status === "success" && (
                  <p className="text-lg font-semibold text-green-600">
                    Message envoyé avec succès !
                  </p>
                )}
                {status === "invalid" && (
                  <p className="text-lg font-semibold text-yellow-500">
                    Vérifiez vos champs et réessayez.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-lg font-normal font-poppins text-white">
                    Erreur d’envoi du message.
                  </p>
                )}

                <button
                  onClick={() => setStatus("")}
                  className="mt-6 px-5 py-2 rounded-md text-white font-semibold bg-red-600 hover:bg-red-700"
                >
                  OK
                </button>
              </div>
            </motion.div>
          )}
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
