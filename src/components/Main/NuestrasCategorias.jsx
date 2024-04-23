import { useState } from 'react'

// Obtén la lista de imágenes desde la carpeta public/images


export default function NuestrasCategorias() {
  const imageList = Array.from({ length: 18 }, (_, i) => `img/imagen${i + 1}.png`);
  const [startIndex, setStartIndex] = useState(0);
  const [isFirstPage, setIsFirstPage] = useState(true);

  // Seleccionar los siguientes 6 elementos de imageList
  const selectedImages = imageList.slice(startIndex, startIndex + 6);

  //const [mostrarTodasLasImagenes, setMostrarTodasLasImagenes] = useState(false);

  //const mostrarImagenes = mostrarTodasLasImagenes ? imageList : imageList.slice(0, 6);

  const handleVerMasClick = () => {
    setStartIndex(startIndex + 6);
    setIsFirstPage(false);
  };
  const handleAtrasClick = () => {
    setStartIndex(startIndex - 6);
    if (startIndex === 6) {
      setIsFirstPage(true);
    }
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#FAC4C4]'>
      <div className='text-3xl font-bold mb-4 text-brown'>Nuestras </div>
      <div className='text-5xl font-bold mb-8 text-white  drop-shadow-[2px_3px_var(--tw-shadow-color)] shadow-pinkShadow '>Categorias</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 justify-center mb-8">
        {selectedImages.map((image, index) => (
          <>
            <div key={index} className="w-48 h-48 md:w-64 md:h-64 lg:w-64 lg:h-64 xl:w-64 xl:h-64 rounded-lg  overflow-hidden  ">
              <img
                src={`./${image}`}
                alt={`Imagen ${index + 1}`}
                className=" object-cover w-full h-full  transform hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>

          </>
        ))}
      </div>
      {!isFirstPage && (
        <button className="mb-4 bg-custom-color-brown text-white font-bold py-2 px-4 rounded-full" onClick={handleAtrasClick}>Atras</button>
      )}
      {startIndex + 6 < imageList.length && (
        <button className="mb-4 bg-custom-color-brown text-white font-bold py-2 px-4 rounded-full" onClick={handleVerMasClick}>Siguiente</button>
      )}
    </div>
  )
}
