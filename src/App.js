import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/global/navbar/footer/Footer";
import Menu from "./components/global/navbar/Navbar";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/news" element={<News data={data} />}></Route>
        <Route
          path="/news/:id"
          element={<ArticleDetails data={data} />}
        ></Route>
        <Route path="/magazine" element={<Magazine />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
