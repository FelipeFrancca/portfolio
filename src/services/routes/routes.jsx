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
      <Route path="/" element={<Dashboard />}>
        <Route path="" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;