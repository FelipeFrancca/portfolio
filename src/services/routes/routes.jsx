import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/dashboard";
import Home from "../../components/pages/home";
import ProjectList from "../../components/pages/projectList";
import AboutMe from "../../components/pages/aboutMe";
import NotFound from "../../components/pages/notFound";
import Contact from "../../components/pages/contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/portfolio" element={<Dashboard />}>
        <Route path="" element={<Home />} />
        <Route path="/portfolio/projects" element={<ProjectList />} />
        <Route path="/portfolio/about" element={<AboutMe />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="/portfolio/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
