import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CardContext";
import Swal from "sweetalert2";

const Cart = () => {
    const { resetCart, cart, removeById, getTotalAmount } =
        useContext(CartContext);

    let total = getTotalAmount();
    const resetCartWithAlert = () => {
        Swal.fire({
            title: "Quieres limpiar el carrito?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "aceptar",
            denyButtonText: `cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                resetCart();
                Swal.fire({
                    title: "Carrito vaciado",
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: "ok",
                    icon: "success",
                });
            } else if (result.isDenied) {
                Swal.fire({
                    title: "Carrito conservado",
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: "ok",
                    icon: "info",
                });
            }
        });
    };
    return (
        <div>
            {cart.map((elemento) => {
                return (
                    <div key={elemento.id}>
                        <h2>{elemento.title}</h2>
                        <h2>Cantidad: {elemento.quantity}</h2>
                        <h2>Cantidad: {elemento.price}</h2>

                        <button
                            onClick={() => {
                                removeById(elemento.id);
                                Swal.fire({
                                    position: "bottom-end",
                                    icon: "success",
                                    title: "producto eliminado",
                                    showConfirmButton: false,
                                });
                            }}
                        >
                            eliminar
                        </button>
                    </div>
                );
            })}

            {cart.length > 0 && <h2>el total a pagar es {total}</h2>}

            <button onClick={resetCartWithAlert}>vaciar carito</button>
            <button>
                <Link to={"/checkout"}>finalizar compra</Link>
            </button>
        </div>
    );
};

export default Cart;