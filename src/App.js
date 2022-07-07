// npm packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// app components
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

// context providers
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
