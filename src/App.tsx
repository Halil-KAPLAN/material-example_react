import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home, LessonButton, LessonTypography } from "./components/Lessons";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/typography" element={<LessonTypography />}></Route>
        <Route path="/button" element={<LessonButton />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
