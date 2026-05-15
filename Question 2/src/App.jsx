// Q2. Create a React application with following pages:
// 1. Home
// 2. About
// 3. Contact
// Implement routing using react router so that navigation between pages works without reloading the page.
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import home from './Component/home';
import about from './Component/about';
import contact from './Component/contact';

function App() {
  return (
    <>
      <footer>Home</footer>
      <footer>Contact</footer>
      <footer>About</footer>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<home/>} />
          <Route path="/about" element={<about/>} />
          <Route path="/contact" element={<contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;