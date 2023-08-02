import Nav from "./layouts/navbar";
import "./App.css";
import Home from './component/home'

function App() {
  return (
    <>
      <div className="grid justify-items-center">
          <Nav />
          <Home />
      </div>
    </>
  );
}

export default App;
