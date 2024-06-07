import Vendidos from "./Vendidos"
import Waffles from "../../../src/assets/Foto waffles.png"
import Torta from "../../../src/assets/Foto torta oreo.png"
import Cupcakes from "../../../src/assets/Foto cupcake.png"

export default function ProductosVendidos() {
  return (
    <div className="bg-[#EEEDED] p-8" id="productos">
      <h3 className="text-center text-4xl font-bold	">Productos</h3>
      <h2 className="text-center text-6xl	text-[#F78A8B] font-bold pb-6">Más vendidos</h2>

      <div className="grid grid-cols-3 gap-2 mx-auto my-10 justify-items-center items-center">
        <Vendidos
          image={Waffles}
          title="Waffles"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut nemo quasi, reprehenderit quidem, voluptates asperiores doloribus consectetur cumque et ipsum tenetur ab voluptatibus recusandae. Maiores delectus dolore atque suscipit."
          price={"10.000"}
        />

        <Vendidos
          image={Torta}
          title="Torta"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut nemo quasi, reprehenderit quidem, voluptates asperiores doloribus consectetur cumque et ipsum tenetur ab voluptatibus recusandae. Maiores delectus dolore atque suscipit."
          price={"20.000"}
        />

        <Vendidos
          image={Cupcakes}
          title="Cupcakes"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut nemo quasi, reprehenderit quidem, voluptates asperiores doloribus consectetur cumque et ipsum tenetur ab voluptatibus recusandae. Maiores delectus dolore atque suscipit."
          price={"5.000"}
        />
      </div>
    </div>
  )
}
