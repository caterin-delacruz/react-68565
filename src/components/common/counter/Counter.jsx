import { useContext, useState } from "react";
import { CartContext } from "../../../context/CardContext";
import Swal from "sweetalert2";
import "../counter/counter.css";

const Counter = ({ item }) => {
    const [contador, setContador] = useState(1);
    const { addToCart } = useContext(CartContext);

    const sumar = () => {
        if (contador < item.stock) {
            setContador(contador + 1);
        } else {
            alert("no hay stock");
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } else {
            alert("minimo un producto");
        }
    };

    //para saber cuantos productos quedan y cuantos se van a comprar
    const onAdd = () => {
        let cartObject = { ...item, quantity: contador };
        addToCart(cartObject);
        Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "producto agregado al carrito",
            showConfirmButton: false,
        });
    };

    return (
        <div>
            <div className="counter-container">
                <button onClick={restar} className="counter-button">
                    restar
                </button>
                <h2>{contador}</h2>
                <button onClick={sumar} className="counter-button">
                    sumar
                </button>
            </div>
            <button onClick={onAdd} className="counter-button">
                agregar al carrito
            </button>
        </div>
    );
};

export default Counter;