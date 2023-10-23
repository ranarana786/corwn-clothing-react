import logo from "./logo.svg";
import "./index.scss";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
