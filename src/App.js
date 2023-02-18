import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/global/navbar/footer/Footer";
import Menu from "./components/global/navbar/Navbar";
import Home from "./components/pages/Home/Home";
import News from "./components/pages/News/News";
import ArticleDetails from "./components/pages/ArticleDetails/ArticleDetails";
import Magazine from "./components/pages/Magazine/Magazine";

function App() {
  const data = [
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news6.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news8.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news9.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news6.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news8.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news9.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news6.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news8.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news9.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news5.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news6.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news8.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news9.svg",
      date: "24 December      ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news1.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Are NFTs the next future of photography?",
      image: "/images/news2.svg",

      date: "24 December     ",
      duration: "7 min",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News data={data} />}></Route>
        <Route
          path="/news/:id"
          element={<ArticleDetails data={data} />}
        ></Route>
        <Route path="/magazine" element={<Magazine />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
