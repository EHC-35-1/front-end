import { Route, Routes } from "react-router-dom";

import { Home, About, Project, NotFound } from "./pages";
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
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
