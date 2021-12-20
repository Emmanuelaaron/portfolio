import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TopPage from './components/TopPage/TopPage';
import Projects from './components/Project/Projects';
import AboutMe from './components/LowerPage/AboutMe';

const App = () => (
  <>
    <TopPage />
    <Projects />
    <AboutMe />
  </>
);

export default App;
