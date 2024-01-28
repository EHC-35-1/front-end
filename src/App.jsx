import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Home, About, Project } from "./pages";
import { Header, Footer } from "./layout";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
