import NavBar from "./Components/NavBar/NavBar";
// import NavBrand from "./Components/NavBrand/NavBrand";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import ItemCategoryContainer from "./Pages/ItemCategoryContainer/ItemCategoryContainer";
//import ComponenteContador from "./Components/componenteContador/ComponenteContador";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
          {/*<NavBrand/> */}
          {/*<ComponenteContador/>*/}
          {/*<ItemDetailContainer/>*/}
        </header>
        <main>
          <Main />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:id" element={<ItemCategoryContainer />} />
          </Routes>
          {/*<ItemListContainer name="Welcome to MakeÜp" />*/}
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

// el path que va solo con slash es porque es la raiz o ruta inicial
