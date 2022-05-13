import logo from "./logo.svg";
import "./App.css";

import UserRegitstion from "./component/User/UserRegistaion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@material-ui/icons";
import HomePage from "./component/Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRegitstion />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
