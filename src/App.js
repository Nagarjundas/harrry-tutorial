import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Nav from "./components/Nav";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textmode, settextMode] = useState("Click For dark-Mode");

  const [alert, setAlert] = useState(null);

  const toggleFunc = () => {
    // eslint-disable-next-line eqeqeq
    if (mode == "light") {
      setMode("dark");
      settextMode("Click For lightMode");
      document.body.style.backgroundColor = "#0a8b7f";
      document.body.style.color = "white";
      document.title = "textUtils - Darkmood";
      showAlert("light mood is activated", "success");
    } else {
      setMode("light");
      settextMode("Click For darkyMode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "textUtils - lightmood";
      showAlert("dark mood is activated", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <Nav
          title="Ecommerce"
          about="AboutUs"
          mode={mode}
          togglefun={toggleFunc}
          textmode={textmode}
        />
        <Alert alerts={alert}></Alert>
        <div
          className="container"
          mode={mode}
          // togglefun={toggleFunc}
          textmode={textmode}
        >
          <Routes>
          <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
