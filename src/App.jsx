import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { motion, useScroll, useSpring } from "framer-motion"
import Nav from "./layouts/navbar";
import Side from "./layouts/sidebar";
import RightSide from "./layouts/rightSide";
import "./App.css";
import Hero from "./component/hero";
import Footer from "./layouts/footer";
import About from "./component/about";
import Projects from "./component/project";
import Contact from "./component/contact";
import CustomCursor from './component/customCursor';

function App() {
  const { scrollYProgress } = useScroll();
  const handleMouseEnter = () => {
    document.documentElement.style.setProperty('--cursor-scale', 'scale(1.5)');
  };

  const handleMouseLeave = () => {
    document.documentElement.style.setProperty('--cursor-scale', 'scale(1)');
  };
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  return (
    <>
     <CustomCursor />
     <div 
      className="hoverable-element"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
     >

     
      <motion.div
        className="fixed bg-indigo-600 z-50"
        style={{
          scaleX,
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          height: 5,
          transformOrigin: "0%"
        }}
      />
      <BrowserRouter>
        <Nav />
        <div className='hidden lg:block'>
        <Side />
        <RightSide />
        </div>
        
        <div className='bg-gray-100'>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
