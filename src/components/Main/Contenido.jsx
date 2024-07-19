import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
//hola
function Contenido() {
  return (


      <div className="pt-12 relative bg-[#EEEDED]">


        <div className="relative bg-[#EEEDED]">


          <div className="absolute top-4 right-4  flex space-x-6">
            <a
              href="https://wa.me/"
              className="bg-brown hover:bg-pinkShadow text-white rounded-full p-4"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a
              href="https://facebook.com"
              className="bg-brown hover:bg-pinkShadow text-white rounded-full p-4"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              className="bg-brown hover:bg-pinkShadow text-white rounded-full p-4"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>


          <div>
            <section id="inicio" className="pt-5">




              <div className="flex items-center justify-center pt-24">
                <h1 className="text-8xl font-extrabold text-brown text-center flex items-center text-stroke-white ">
                  La
                  <img
                    src="/img/Lachocomau.png"
                    alt="La Chocomau"
                    className=""
                  />
                </h1>



              </div>
              <h2 className=" text-8xl text-brown text-center pb-24 font-extrabold text-stroke-white">Chocomau</h2>



            </section>
          </div>
        </div>
        </div>

      )
}

      export default Contenido