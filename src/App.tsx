import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import routeList from "./components/helpers/routeList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routeList.map(({ path, element }, i) => (
          <Route path={path} element={element} key={i}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
