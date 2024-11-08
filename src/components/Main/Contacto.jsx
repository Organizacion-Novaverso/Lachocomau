import React, { useEffect, useState } from "react";
import Separacion from "./Separacion";
import SmoothScroll from "smooth-scroll";
import smoothscroll from "smoothscroll-polyfill";

export default function Contacto() {
  const [formStatus, setFormStatus] = useState(""); // Estado para manejar el mensaje de estado del formulario

  // Inicializar smoothscroll
  useEffect(() => {
    smoothscroll.polyfill(); // Aplica smoothscroll en todos los enlaces
    const scroll = new SmoothScroll('a[href*="#"]'); // Habilita el smoothscroll para los enlaces internos
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto de envío del formulario

    const formData = new FormData(event.target); // Recoger los datos del formulario

    // Mostrar los valores del formulario en la consola para depuración
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`); // Esto ayuda a verificar los datos
    });

    // Verificar que todos los campos sean válidos
    const nombre = formData.get("nombre");
    const telefono = formData.get("telefono");
    const email = formData.get("email");
    const motivo = formData.get("motivo");
    const mensaje = formData.get("mensaje");

    if (!nombre || !telefono || !email || !motivo || !mensaje) {
      setFormStatus("Por favor, completa todos los campos.");
      return;
    }

    // Crear un objeto para enviar los datos como JSON
    const data = {
      nombre,
      telefono,
      email,
      motivo,
      mensaje,
    };

    // Enviar los datos al servidor
    fetch("https://servidor-correo-chocomau.vercel.app/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convertir a JSON
    })
      .then((response) => response.json())
      .then((data) => {
        setFormStatus("¡Mensaje enviado correctamente!");
      })
      .catch((error) => {
        setFormStatus("Hubo un error. Intenta de nuevo.");
      });
  };

  return (
    <div className="bg-[#372418] pb-5" id="contacto">
      <Separacion fillColor="#FAC4C4" />
      <section className="text-gray-600 body-font relative">
        <h1 className="text-neutral-50 text-4xl pt-10 title-font text-center font-bold">
          Contáctanos
        </h1>
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 overflow-hidden sm:mr-10 p-10 items-end justify-start relative hidden md:flex">
            <img
              className="object-cover object-center w-full h-full rounded-3xl"
              src="https://images.hola.com/imagenes/estar-bien/20190617143878/tipos-chocolate-cuanto-engordan-cs/0-690-657/tipos-chocolate-t.jpg?tx=w_1200"
              alt="chocolate"
            />
          </div>

          <form
            className="lg:w-1/3 md:w-1/2 bg-[#372418] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            onSubmit={handleSubmit}
          >
            <div className="relative mb-4">
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                required
                className="rounded-3xl w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                style={{
                  paddingTop: "0.5rem",
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>

            <div className="relative mb-4">
              <input
                type="text"
                id="telefono"
                name="telefono"
                placeholder="Número de teléfono"
                required
                className="rounded-3xl w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                style={{
                  paddingTop: "0.5rem",
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>

            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                required
                className="rounded-3xl w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                style={{
                  paddingTop: "0.5rem",
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>

            <div className="relative mb-4 text-[#8e8e8e]">
              <select
                id="motivo"
                name="motivo"
                placeholder="motivo"
                required
                defaultValue=""
                className="rounded-3xl w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                style={{
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                <option value="" disabled>
                  Motivo
                </option>
                <option value="Felicitaciones" className="text-[#372418]">
                  Felicitaciones
                </option>
                <option value="Ayuda" className="text-[#372418]">
                  Ayuda
                </option>
                <option value="Reclamo" className="text-[#372418]">
                  Reclamo
                </option>
              </select>
            </div>

            <div className="relative mb-4">
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Mensaje"
                required
                className="rounded-3xl w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                style={{
                  paddingTop: "0.5rem",
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-[#F78A8B] rounded-2xl py-2 px-6 focus:outline-none hover:bg-rose-500 text-lg font-bold"
              style={{ textShadow: "0 0 2px black" }}
            >
              Enviar
            </button>
            <div className="mt-4 text-center text-white">{formStatus}</div>
          </form>
        </div>
      </section>
    </div>
  );
}
