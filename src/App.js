import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
 function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({ msg: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#122440";
      showAlert("Dark mode active successfully", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("light mode active successfully", "danger");
    }
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <TextForm heading="Enter text to analyze" mode={mode} />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ]);
  return (
    <>
      {" "}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      <TextForm heading="Enter text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
