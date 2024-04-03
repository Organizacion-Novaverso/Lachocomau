import { useState } from "react"

function Vendidos({ image, title, description, price }) {
  const [isHovered, setIsHovered] = useState(false)


  return (
    <>
      <div className={`flex flex-col justify-center rounded-3xl text-center w-80 cursor-default	 ${isHovered ? 'bg-[#F78A8B] text-[#372418]' : 'bg-[#372418] text-white'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt={title} className={`mx-auto block max-w-52 max-h-44 transform ${isHovered ? 'scale-125 -translate-y-1/4 w-screen	h-screen -mb-4' : ''}`}
        />
        <h3 className="text-4xl mb-5 font-bold">{title}</h3>
        <p className={`mb-5 px-8 ${isHovered ? 'font-bold' : ''}`}>{description}</p>
        <p className="font-bold mb-5 text-xl">${price}</p>
        {isHovered && <button className="bg-[#372418] text-white mr-10 ml-10 mb-8 py-2 rounded-3xl font-bold drop-shadow-lg">Realizar pedido</button>}
      </div>
    </>
  )
}

export default Vendidos