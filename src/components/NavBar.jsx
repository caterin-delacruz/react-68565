import ButtonComponent from "./ButtonComponent";
import CartWidget from "./CartWidget";
import Brand from "./Brand"

export default function NavBar(){
    return(<>
    <nav style={{ display: "flex", alignItems: "center", padding: "20px" }}>
    <div style={{ flex: 1 }}>
        <Brand />
    </div>
    <div style={{ display: "flex", justifyContent: "center", flex: 2 }}>
        <ButtonComponent texto="Productos" />
        <ButtonComponent texto="Equipos Electronicos" />
        <ButtonComponent texto="Agujas y Cartuchos" />
        <ButtonComponent texto="Accesorios" />
      </div>
    <div style={{ marginLeft: "auto" }}>
        <CartWidget />
    </div>
    </nav>
    </>)
}
