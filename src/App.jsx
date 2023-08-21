import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "./layouts/navbar";
import "./App.css";
import Hero from "./component/hero";
import Footer from "./layouts/footer";
import About from "./component/about";

function App() {
  return (
    <>
    <BrowserRouter>
          <Nav />
          <div>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/project" element={<Projects />} />
              <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
