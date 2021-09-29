import Intro from "./components/intro/Intro"
import Portfolio from "./componenents/portfolio/Portfolio";
import Projects from "./componenents/projects/Projects";
import Testimonials from "./componenents/testimonials/Testimonials"
import Contact from "./componenents/contact/Contact";
import Topbar from "./componenents/topbar/Topbar";

function App() {
  return (
    <div className="app">
      <Topbar />
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
