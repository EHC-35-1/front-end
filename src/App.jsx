import { Route, Routes } from "react-router-dom";

import { Home, About, Project } from "./pages";
import { Header, Footer } from "./layout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
