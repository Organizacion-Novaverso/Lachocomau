import React from "react";

export default function Contacto() {
  return (
    <div>
      <section className="text-gray-600 body-font relative bg-[#372418]">
        <h1 className="text-neutral-50 text-4xl pt-10 font-medium title-font text-center font-bold">
          Contáctanos
        </h1>
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative hidden md:block">
            <img
              className="object-cover object-center w-1/1 h-full rounded-3xl"
              src="https://images.hola.com/imagenes/estar-bien/20190617143878/tipos-chocolate-cuanto-engordan-cs/0-690-657/tipos-chocolate-t.jpg?tx=w_1200"
              alt="chocolate"
            />
          </div>

          <form
            className="lg:w-1/3 md:w-1/2 bg-[#372418] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            action="URL_DE_DESTINO_DEL_FORMULARIO"
            method="POST"
          >
            <div className="relative mb-4">
              <input
                type="text"
                id="Nombre"
                name="Nombre"
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
                id="Telefono"
                name="Telefono"
                placeholder="Número Telefono"
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
                placeholder="Email"
                required
                className="rounded-3xl w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                style={{
                  paddingTop: "0.5rem",
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>

            <div className="relative mb-4">
              <select
                id="Motivo"
                name="Motivo"
                placeholder="Correo"
                required
                className="rounded-3xl w-full bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                style={{
                  paddingTop: "0.5rem",
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                <option value="" className="text-gray-700">
                  Motivo
                </option>
                <option value="1" className="text-[#372418]">
                  Felicitaciones
                </option>
                <option value="2" className="text-[#372418]">
                  Ayuda
                </option>
                <option value="3" className="text-[#372418]">
                  Reclamo
                </option>
              </select>
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                {/* Message */}
              </label>
              <textarea
                id="Mensaje"
                name="Mensaje"
                placeholder="Mensaje"
                required
                className="rounded-3xl w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
          </form>
        </div>
      </section>
    </div>
  );
}
