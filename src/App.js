import React from "react";
import "./App.css";
// import "./Reset.css";
import Image from "./components/Image";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="Outer-Layer">
      <div className="App">
        <Image />
        <div className="App-Body">
          <Info />
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
