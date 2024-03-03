import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import routeList from "./components/helpers/routeList";
import { ThemeProvider, colors, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: colors.brown[500],
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <div className="center">
          <Routes>
            {routeList.map(({ path, element }, i) => (
              <Route path={path} element={element} key={i}></Route>
            ))}
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
