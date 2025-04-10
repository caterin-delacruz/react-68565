import Navbar from "./components/layouts/navbar/Navbar";
import ItemListConteiner from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";
import Cart from "./components/pages/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router";
import Checkout from "./components/pages/checkout/Checkout";
import CartContextProvider from "./context/CardContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/category/:name" element={<ItemListConteiner />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="*" element={<h2>404 not found</h2>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;