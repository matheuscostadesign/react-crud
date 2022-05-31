import "./App.css";
import logo from "./logo.svg";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React.js CRUD</h1>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/create">Cadastrar</a>
          </li>
          <li>
            <a href="/read">Listar</a>
          </li>
        </ul>

        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
