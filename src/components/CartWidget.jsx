import React from "react";
import cartIcon from "../components/assets/carrito.png"

const CartWidget = () => {
  return (
    <div>
      <img src={cartIcon} alt="Carrito" width="30" />
      <span
        style={{
          top: "-5px",
          right: "-10px",
        }}
      >
        4
      </span>
    </div>
  );
};

export default CartWidget;