import { useState } from 'react'

// Obtén la lista de imágenes desde la carpeta public/images


export default function NuestrasCategorias() {
  const imageList = Array.from({ length: 18 }, (_, i) => `img/imagen${i + 1}.png`);
  //const [mostrarTodasLasImagenes, setMostrarTodasLasImagenes] = useState(false);
  const [totalMostradas, setTotalMostradas] = useState(6);

  const mostrarImagenes = imageList.slice(0, totalMostradas);

  const handleVerMasClick = () => {
   // setMostrarTodasLasImagenes(true);
    setTotalMostradas(totalMostradas + 6); 
  };

  const handleOcultarClick = () => {
    //setMostrarTodasLasImagenes(false);
    setTotalMostradas(totalMostradas - 6); 
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#FAC4C4]'>
      <div className='text-3xl font-bold mb-4 text-brown'>Nuestras </div>
      <div className='text-5xl font-bold mb-8 text-white  drop-shadow-[2px_3px_var(--tw-shadow-color)] shadow-pinkShadow '>Categorias</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 justify-center mb-8">
        {mostrarImagenes.map((image, index) => (
          <div key={index} className="w-48 h-48 md:w-64 md:h-64 lg:w-64 lg:h-64 xl:w-64 xl:h-64 rounded-lg  overflow-hidden  ">
            <img
              src={`./${image}`}
              alt={`Imagen ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
      {totalMostradas <  imageList.length && (
        <button onClick={handleVerMasClick} className="mb-4 bg-custom-color-brown text-white font-bold py-2 px-4 rounded-full">
          Ver más
        </button>
      )}
      {totalMostradas > 6 && (
        <button onClick={handleOcultarClick} className="mb-4 bg-custom-color-brown text-white font-bold py-2 px-4 rounded-full">
          Ocultar
        </button>
      )}
    </div>
  );
}
