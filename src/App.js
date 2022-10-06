import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";
import Cart from "./componentes/Cart";
import CartProvider from './context/CartContext';
import Checkout from './componentes/Checkout';
import Footer from './componentes/Footer';






function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoria" element={<ItemListContainer />} />
            <Route path="/product/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
