import Bienvenido from "./Bienvenido"
import ProductosVendidos from "./ProductosVendidos"
import NuestrasCategorias from "./NuestrasCategorias"
import Contacto from "./Contacto"


function Header() {
  return (
    <>
      <h1 className="text-6xl text-red-700">La Chocomau</h1>
   
   
   <Bienvenido />
   <ProductosVendidos/>
   <NuestrasCategorias/>
      <Contacto/>
    </>
  )
}

export default Header