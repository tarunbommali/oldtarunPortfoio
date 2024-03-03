import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import { ThemeProvider } from './context/darkThemeContext.js';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects/index.js';
import Skills from './components/Skills/index.js'
import About from './components/About/index.js';
import './App.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <div className="App">
          <Routes> {/* Use Routes instead of Route */}
            <Route path="/" element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
