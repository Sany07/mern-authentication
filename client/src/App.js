import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
