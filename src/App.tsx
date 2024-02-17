import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  LessonButton,
  LessonButtonGroup,
  LessonTextfield,
  LessonTypography,
} from "./components/Lessons";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/typography" element={<LessonTypography />}></Route>
        <Route path="/button" element={<LessonButton />}></Route>
        <Route path="/buttonGroup" element={<LessonButtonGroup />}></Route>
        <Route path="/textfield" element={<LessonTextfield />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
