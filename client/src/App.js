import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login/Login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
}

export default App;
