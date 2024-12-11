import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import LaserCursor from './components/laserCursor';
import Clock from './components/Clock';



function App() {
  return (
    <div className="App">
      <header className="navbar">
      <h1 class="logo">
    <div class="code-symbol">
      <span class="left-tag">&lt;</span>
      <span class="slash">/</span>
      <span class="right-tag">&gt;</span>
    </div>
  <a href="/home">Developer</a>
  </h1>
        <nav>
          <ul className="navbar-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Outlet/>
        <LaserCursor/>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;