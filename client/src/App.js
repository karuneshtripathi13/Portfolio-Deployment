import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme/Aboutme";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  window.addEventListener("scroll", () => {
    const scrollsz = window.innerHeight;
    const scrolledy = window.scrollY;
    console.log(scrolledy);
      if (Math.ceil(scrolledy) <= scrollsz - 50) {
        if (document.getElementById("navpos") != null)
          document.getElementById("navpos").style.display = "none";
      } else if (
        Math.ceil(scrolledy) >= scrollsz - window.innerHeight / 5 &&
        Math.ceil(scrolledy) < 2 * scrollsz - window.innerHeight / 2
      ) {
        document.getElementById("navpos").style.display = "flex";
        document.getElementById("sk").style.cssText =
          "color:;font-weight:;font-size:;";
        document.getElementById("ab").style.cssText =
          "color: black !important;background-color: gold;border-radius: 0.2vw;transition: background-color 0.5s ease-in;";
      } else if (
        Math.ceil(scrolledy) >= 2 * scrollsz - window.innerHeight / 2 &&
        Math.ceil(scrolledy) < 3 * scrollsz - window.innerHeight / 2
      ) {
        document.getElementById("navpos").style.display = "flex";
        document.getElementById("ab").style.cssText =
          "color:;font-weight:;font-size:;";
        document.getElementById("sk").style.cssText =
          "color: black !important;background-color: gold;border-radius: 0.2vw;transition: background-color 0.5s ease-in;";
        document.getElementById("ed").style.cssText =
          "color:;font-weight:;font-size:;";
      } else if (
        Math.ceil(scrolledy) >= 3 * scrollsz - window.innerHeight / 2 &&
        Math.ceil(scrolledy) <
          Math.ceil(4.4 * scrollsz) - window.innerHeight / 2
      ) {
        document.getElementById("navpos").style.display = "flex";
        document.getElementById("pr").style.cssText =
          "color:;font-weight:;font-size:;";
        document.getElementById("sk").style.cssText =
          "color:;font-weight:;font-size:;";
        document.getElementById("ed").style.cssText =
          "color: black !important;background-color: gold;border-radius: 0.2vw;transition: background-color 0.5s ease-in;";
      } else if (
        Math.ceil(scrolledy) >=
          Math.ceil(4.4 * scrollsz) - window.innerHeight / 2 &&
        Math.ceil(scrolledy) <
          Math.ceil(5.7 * scrollsz) - window.innerHeight / 2
      ) {
        document.getElementById("navpos").style.display = "flex";
        document.getElementById("co").style.cssText =
          "color:;font-weight:;font-size:;";
        document.getElementById("ed").style.cssText =
          "color:;font-weight:;font-size:;";
        document.getElementById("pr").style.cssText =
          "color: black !important;background-color: gold;border-radius: 0.2vw;transition: background-color 0.5s ease-in;";
      } else if (
        Math.ceil(scrolledy) >=
          Math.ceil(5.7 * scrollsz) - window.innerHeight / 2 &&
        Math.ceil(scrolledy) < 7 * scrollsz - window.innerHeight / 2
      ) {
        document.getElementById("navpos").style.display = "flex";
        document.getElementById("pr").style.cssText =
          "color:;font-weight:;font-size:;";
        document.getElementById("co").style.cssText =
          "color: black !important;background-color: gold;border-radius: 0.2vw;transition: background-color 0.5s ease-in;";
      }
  });
  return (
    <div className="overflowhandling">
      <section id="Home">
        <Home />
      </section>
      <div className="all">
        <Navbar />
        <section id="AboutMe">
          <Aboutme />
        </section>
        <section id="Skillset">
          <Skills />
        </section>
        <section id="Education">
          <Education />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
