import { JSX } from "react";
import Header from './components/header/Header';
import Waves from './components/waves/Waves';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import "./App.css"

function App(): JSX.Element {
  return (
    <>
        <Header />
        <Waves />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
    </>
  );
}

export default App;