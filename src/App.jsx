import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Watch from "./Pages/Watch/Watch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Register />} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
