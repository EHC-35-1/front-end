import { Route, Routes } from "react-router-dom";

import { Home, About, Project } from "./pages";
import { Header, Footer, ThemeProvider } from "./layout";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default App;
