import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import ShopProvider from "./Context/ShopProvider";
import "./App.css";

function App() {
  return (
    <div>
      <ShopProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <main>
            <Main />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />}/>
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </ShopProvider>
    </div>
  );
}

export default App;

//El path que va solo con slash es porque es la raiz o ruta inicial