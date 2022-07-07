import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/log">Candidates Log</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/log" element={<><h1>Candidates Log</h1><Button>12343</Button></>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
