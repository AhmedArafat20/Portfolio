import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
