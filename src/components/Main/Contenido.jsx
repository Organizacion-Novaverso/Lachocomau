import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
//hola
function Contenido() {
  return (


      <div className="pt-12 relative bg-[#EEEDED]">


<div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/img/FondoActualizado.png)' }}>          <div className="absolute top-4 right-4  flex space-x-6">
            <a
              href="https://wa.me/"
              className="bg-brown hover:bg-pinkShadow text-white rounded-full p-4"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/lachocomau.choco/"
              className="bg-brown hover:bg-pinkShadow text-white rounded-full p-4"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/la_chocomau/"
              className="bg-brown hover:bg-pinkShadow text-white rounded-full p-4"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>


          <div>
            <section id="inicio" className="pt-5">
              
              <div className="flex items-center justify-center pt-24">
                <h1 className="text-6xl font-extrabold text-brown text-center flex items-center ">
                  <img
                    src="/img/Lachocomau.png"
                    alt="La Chocomau"
                    className=""
                  />
                </h1>
              </div>
              <h2 className=" text-6xl text-brown text-center pb-24 font-extrabold">
                La Chocomau
              </h2>


            </section>
          </div>
        </div>
        </div>

      )
}

      export default Contenido