import { JSX } from "react";
import Header from '/src/components/header/Header';
import Waves from '/src/components/waves/Waves';
import Home from '/src/components/home/Home';
import About from '/src/components/about/About';
import "./App.css"

function App(): JSX.Element {
  return (
    <>
        <Header />
        <Waves />
        <Home />
        <About />
        {/* <div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div><div>test</div> */}
    </>
  );
}

export default App;