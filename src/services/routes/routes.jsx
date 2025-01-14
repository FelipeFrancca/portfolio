import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../components/home";
import ProjectList from "../../components/projectList";
import AboutMe from "../../components/aboutMe";
import NotFound from "../../components/notFound";
import Contact from "../../components/contact";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/projects" element={<ProjectList />} />
        <Route path="/portfolio/about" element={<AboutMe />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="/portfolio/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
