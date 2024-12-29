import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../../components/home";
import ProjectList from "../../components/projectList";
import AboutMe from "../../components/aboutMe";
import NotFound from "../../components/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
