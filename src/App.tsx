import { JSX } from "react";
import Header from '/src/components/header/Header';
import Waves from '/src/components/waves/Waves';
import Home from '/src/components/home/Home';
import About from '/src/components/about/About';
import Projects from '/src/components/projects/Projects';
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