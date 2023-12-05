import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/page/login/LoginPage";
import OrderPage from "./components/page/order/OrderPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="order" element={<OrderPage />} />
    </Routes>
  );
}

export default App;
