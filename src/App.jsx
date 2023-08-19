import Nav from "./layouts/navbar";
import "./App.css";
import Hero from "./component/hero";
import Footer from "./layouts/footer";
import Content from "./component/content";
import Tools from "./component/tools";
import Port from "./component/portfolio";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <div>
        <Hero />
        <Content />
       
        <Tools /> 
        <Port />
      </div>
      <Footer />
    </>
  );
}

export default App;
