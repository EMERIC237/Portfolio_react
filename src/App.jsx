import React, { useState } from "react";

import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
