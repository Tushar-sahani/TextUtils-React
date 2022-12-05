import "./App.css";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
// import About from "./components/About";
import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#192841";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="Text Utils" mode={mode} togglemode={togglemode} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            
            {/* <Route exact path="/" > */}
              <Input />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
