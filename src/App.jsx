import Nav from "./layouts/navbar";
import "./App.css";
import Hero from "./component/hero";
import Footer from "./layouts/footer";

function App() {
  return (
    <>
      <nav className="bg-white-transparent">
        <Nav />
      </nav>
      <Hero />
      <Footer />
    </>
  );
}

export default App;
