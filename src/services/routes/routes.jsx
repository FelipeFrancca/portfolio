import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../../components/home';
import ProjectList from '../../components/projectList';
import AboutMe from '../../components/aboutMe';
import NotFound from '../../components/notFound';
import Contact from '../../components/contact';

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Home />} />
        <Route path='/projects' element={<ProjectList />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
