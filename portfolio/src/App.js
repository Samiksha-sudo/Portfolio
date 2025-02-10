import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Children, lazy, Suspense } from 'react';
import Footer from "./components/Footer/Footer";
import Navbaar from "./components/Navbaar/Navbaar";
import Aboutme from './components/DashboardFile/Aboutme';
import Skills from './components/DashboardFile/Skills';
import Experience from './components/DashboardFile/Experience';
import Projects from './components/DashboardFile/Projects';
import Contact from './components/DashboardFile/Contact';

const Dashboard = lazy(()=>import('./components/DashboardFile/dashboard'))

function App() {
  return (
    <div className="app">
        <Router>
            <div className='content'>
            <Navbaar style={{ margin: '200%' }} />
              <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/about" element={<Aboutme/>} />
              <Route path="/skills" element={<Skills/>} />
              <Route path="/experience" element={<Experience/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<img width="100%" height="750px" src="https://miro.medium.com/max/1400/1*zBFBJktPD3_z0S_35kO5Hg.gif" alt="not found" />} />
              </Routes>
              {/* <Footer /> */}
            </div>
        </Router>
    </div>
  );
}



export default App;