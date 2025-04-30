import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { JSX } from "react";
import "./App.css"

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={route.element} 
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;