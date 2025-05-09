import { JSX } from "react";
import Header from './components/header/Header';
import Waves from './components/waves/Waves';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import "./App.css"

function App(): JSX.Element {
  return (
    <>
        <Header />
        <Waves />
        <Home />
        <About />
        <Projects />
        {/* <div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div> */}
    </>
  );
}

export default App;