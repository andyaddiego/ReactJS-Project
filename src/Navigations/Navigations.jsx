import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart/Cart";
import Footer from "../Components/Footer/Footer";
import ItemDetailContainer from "../Pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../Pages/ItemListContainer/ItemListContainer";
import Main from "../Components/Main/Main";
import NavBar from "../Components/NavBar/NavBar";

const MainNavigator = () => {
  return (
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
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer>  
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default MainNavigator;
