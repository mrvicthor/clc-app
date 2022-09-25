import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Header, Banner } from "./components";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/*<About />
      <Vision />
      <Footer /> */}
    </div>
  );
}

export default App;
