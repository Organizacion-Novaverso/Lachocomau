import { useState } from "react"

function Vendidos({ image, title, description, price }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-12 items-center rounded-3xl text-center md:text-left w-11/12 md:max-w-screen-lg mx-auto cursor-default ${isHovered ? 'bg-[#F78A8B] text-[#372418]' : 'bg-[#372418] text-white'} hover:duration-700 duration-700	`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <div className="col-span-12 md:col-span-12 flex justify-center">
          <img
            src={image}
            alt={title}
            className={`mx-auto block max-w-52 max-h-44 transform ${isHovered ? 'scale-125 -translate-y-1/4 w-screen h-screen -mb-4' : ''}`}
          />
        </div>
        <div className="col-span-12 md:col-span-12 flex flex-col items-center justify-center">
          <h3 className="text-4xl mb-5 font-bold">{title}</h3>
          <p className={`mb-5 px-8 ${isHovered ? 'font-bold' : ''}`}>{description}</p>
          <p className="font-bold mb-5 text-xl">${price}</p>
          {isHovered && (
            <button
              className="bg-[#372418] text-white mr-10 ml-10 mb-8 py-3 px-6 rounded-3xl font-bold drop-shadow-lg"
            >
              Realizar pedido
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Vendidos
