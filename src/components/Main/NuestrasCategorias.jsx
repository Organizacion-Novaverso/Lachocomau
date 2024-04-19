import React from 'react'

// Obtén la lista de imágenes desde la carpeta public/images


export default function NuestrasCategorias() {
  const imageList = Array.from({ length: 6 }, (_, i) => `img/image${i + 1}.png`);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='text-3xl font-bold mb-4'>Nuestras Categorias</div>
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {imageList.map((image, index) => (
          <img key={index}
            src={`./${image}`}
            alt={`Imagen ${index + 1}`}
            className="w-32 h-32 transform hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        ))}
      </div>
      <button className="bg-custom-color-brown text-white font-bold py-2 px-4 rounded-full">
        Ver mas
      </button>

    </div>
  )
}
