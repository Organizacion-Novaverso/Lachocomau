import Bienvenido from "./Bienvenido"
import ProductosVendidos from "./ProductosVendidos"
import NuestrasCategorias from "./NuestrasCategorias"
import Contenido from "./Contenido"
//import NuestrasCategorias2 from "./NuestrasCategorias2"
import Contacto from "./Contacto"


function Main() {
  return (
    <>
   
   
   <Contenido/>
   <Bienvenido />
   <ProductosVendidos/>
   <NuestrasCategorias/>
   {/*<NuestrasCategorias2/>*/}
      <Contacto/>
    </>
  )
}

export default Main