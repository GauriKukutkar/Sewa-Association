import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Amenities from "../Pages/Amenities";
import Contact from "../Pages/contact";
import BookVisit from "../Pages/BookVisit";
import Advantages from "../Pages/Advantages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookvisit" element={<BookVisit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;