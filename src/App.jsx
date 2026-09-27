import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";

import Home from "./pages/Home/Home";
import Java from "./pages/Java/Java";
import Spring from "./pages/Spring/Spring";
import SQL from "./pages/SQL/SQL";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/java"
            element={<Java />}
          />

          <Route
            path="/spring"
            element={<Spring />}
          />

          <Route
            path="/sql"
            element={<SQL />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;