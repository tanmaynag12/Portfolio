import Achievements from "./Achivements";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Background from "./Background";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-neutral-100">
      <Background />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
