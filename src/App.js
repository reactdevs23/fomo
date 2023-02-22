import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/global/navbar/footer/Footer";
import Menu from "./components/global/navbar/Navbar";
import Home from "./components/pages/Home/Home";

import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
