import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ButtonExample from "./components/ButtonExample";
import CardExample from "./components/CardExample";
import TableExample from "./components/TableExample";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Material-UI Components Demo</h1>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><Link to="/button">Button</Link></li>
            <li><Link to="/card">Card</Link></li>
            <li><Link to="/table">Table</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/button" element={<ButtonExample />} />
          <Route path="/card" element={<CardExample />} />
          <Route path="/table" element={<TableExample />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
