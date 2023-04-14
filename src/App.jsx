import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ServicesPage from "./pages/ServicesPage";
import RequestsPage from "./pages/RequestsPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useState } from "react";
import MorePage from "./pages/MorePage";
import ApplicationMorePage from "./pages/ApplicationMorePage";
import CreatePage from "./pages/CreatePage";

function App() {
  // Обьявляем состояние для модального окна
  const [activeModal, setActive] = useState(false);
  // Обьявляем состояние для корзины
  const [basket, setBasket] = useState([]);
  return (
    <div className="wrapper">
      <CartPage
        activeModal={activeModal}
        setActive={setActive}
        basket={basket}
        setBasket={setBasket}
      />
      <Header setActive={setActive} />
      <main onClick={() => setActive(false)}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route
            path="/products"
            element={<ServicesPage />}
            setBasket={setBasket}
          />
          <Route
            path="/products/:id"
            element={<MorePage setBasket={setBasket} basket={basket} />}
          />
          <Route path="/applications" element={<RequestsPage />} />
          <Route path="/applications/create" element={<CreatePage />} />
          <Route
            path="/applications/:id"
            element={
              <ApplicationMorePage setBasket={setBasket} basket={basket} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
