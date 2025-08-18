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

  const handlePrenameChange = (
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
      const formDataToSend = new FormData();
      formDataToSend.append("prename", formData.prename);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("numero", formData.numero);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://formspree.io/f/mjkodwqz", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", prename: "", email: "", message: "", numero: "" });
      } else {
        console.error("Formspree error:", data);
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
      className="
          bg-base-300 px-10 pt-10 pb-20 font-bold scroll-mt-28 relative
          bg-no-repeat 
          bg-[length:260px] bg-[right_0rem_top_2rem] 
          lg:bg-[length:300px] lg:bg-[right_20rem_top_2rem] 
        "
      style={{
        backgroundImage: "url(/paperPlane.svg)",
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <section id="form"
       style={{
        backgroundImage: "url(/paperPlane.svg)",
        backgroundPosition: "right 75rem top 40rem",
        backgroundSize: "300px",
        backgroundRepeat: "no-repeat",
      }}
      >
        <div className="md:mt-5 mb-5 md:mb-0">
          <Title title="Envoyez un message" />
        </div>
        <p className="text-center text-gray-300 font-light mb-2 mt-8 md:mt-10 md:mb-14 text-sm md:text-xl">
          Vous avez une question, une proposition, un commentaire ou vous
          souhaitez simplement <br />
          dire bonjour ? Allez-y
        </p>

        <form
          id="contact-form"
          className="max-w-3xl mx-auto pt-8"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 md:mb-20 mb-8">
            <div>
              <label className="block text-gray-200 text-sm md:text-xl font-semibold font-poppins mb-2">
                VOTRE PRENOM
              </label>
              <input
                name="prename"
                type="text"
                placeholder="Entrez votre prénom"
                className="w-full font-poppins font-normal md:font-normal py-3 text-white text-sm md:text-xl bg-base-300 border-b border-white/50 focus:border-red-500 md:focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02]"
                value={formData.prename}
                onChange={handlePrenameChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 text-sm md:text-xl font-semibold font-poppins mb-2">
                VOTRE NOM
              </label>
              <input
                name="name"
                type="text"
                placeholder="Entrez votre prénom"
                className="w-full font-poppins font-normal md:font-normal py-3 text-white text-sm md:text-xl bg-base-300 border-b border-white/50 focus:border-red-500 md:focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-200 text-sm md:text-xl font-poppins font-semibold mb-2">
                VOTRE EMAIL
              </label>
              <input
                name="email"
                type="email"
                placeholder="Entrez votre email"
                className="w-full font-poppins font-normal md:font-normal py-3 text-white text-sm md:text-xl bg-base-300 border-b border-white/50 focus:border-red-500 md:focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 text-sm md:text-xl font-poppins font-semibold mb-2">
                VOTRE NUMERO
              </label>
              <input
                name="numero"
                type="tel"
                pattern="[0-9]{10}"
                inputMode="numeric"
                placeholder="Entrez votre numéro"
                className="w-full font-poppins font-normal md:font-normal py-3 text-white text-sm md:text-xl bg-base-300 border-b border-white/50 focus:border-red-500 md:focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02]"
                value={formData.numero}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-gray-200 text-sm md:text-xl font-poppins font-semibold mb-2">
              VOTRE MESSAGE
            </label>
            <textarea
              name="message"
              placeholder="Écrivez votre message"
              rows={4}
              className="w-full font-poppins font-normal md:font-normal py-3 text-white text-sm md:text-xl bg-base-300 border-b border-white/50 focus:border-red-500 md:focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02] resize-none"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 md:bg-red-700 hover:bg-red-900 transition duration-300 ease-in-out font-semibold md:font-bold text-white py-3"
          >
            ENVOYEZ VOTRE MESSAGE
          </button>

          {/* Feedback en pop-up */}
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
                {status === "success" ? (
                  <>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-green-100 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-green-600">
                      Message envoyé avec succès !
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-base-300 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-gray-300 font-poppins">
                      Erreur d’envoi du message.
                    </p>
                  </>
                )}

                <button
                  onClick={() => setStatus("")}
                  className={`mt-6 px-5 py-2 rounded-md text-white font-semibold transition duration-300 ${status === "success"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-red-600 hover:bg-red-700"
                    }`}
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
