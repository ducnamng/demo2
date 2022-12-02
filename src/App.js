import { Route, Routes } from "react-router";
import "./App.css";
import "./index.css";
import Menu from "./Layout/Menu/Menu";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Home2Page from "./Pages/Home2Page/Home2Page";
import TeamPage from "./Pages/TeamPage/TeamPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import ServicePage from "./Pages/ServicePage/ServicePage";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    // <div className="App font-pop">
    <div className="App font-pop">
      <Menu />
      <Routes>
        <Route path="/" element={<Home2Page />} />
        <Route path="home+" element={<Home2Page />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="gallery" element={<TeamPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="service" element={<ServicePage />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
    // </div>
  );
}

export default App;
