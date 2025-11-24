import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element/> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
