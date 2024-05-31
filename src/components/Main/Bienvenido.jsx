import Separacion from "./Separacion";

function Bienvenido() {
  return (
    <div className='bg-[#FAC4C4]'>
      <Separacion fillColor="#EEEDED" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAC4C4]">
        <div className="text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">¡Bienvenidos!</h1>
        
        </div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Dulzura con historia
              </h2>
              <p className="mb-8 leading-relaxed">
                
Nuestra Historia

En febrero de 2021, cuando la pandemia de COVID-19 golpeó con fuerza al mundo, muchas familias se encontraron enfrentando desafíos económicos sin precedentes, debido a esto, decidimos comenzar un negocio desde casa con el apoyo de nuestra familia. Así nació "La chocomau".

Comenzamos preparando deliciosas minidonas y otros productos caseros, gestionamos las entregas y la promocion del negocio en redes sociales. Rápidamente, ganamos popularidad en el vecindario y más allá.

Gracias al apoyo de la comunidad, ampliamos nuestra cocina y lanzamos una tienda en línea. Hoy, "La chocomau" es un próspero negocio familiar, comprometido con ofrecer productos caseros de alta calidad y un servicio excepcional.
              </p>
              <div className="flex w-full md:justify-start justify-center items-end">
                <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                 
                 
                </div>
               
              </div>
              
              <div className="flex lg:flex-row md:flex-col">
               
                
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="héroe" src="img/gato sin fondo1.png" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Bienvenido;

