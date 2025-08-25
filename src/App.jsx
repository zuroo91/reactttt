import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import AboutJennie from "./pages/jennie";
import FavSongs from "./pages/songs";

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>My Fav Artist</h1>
          <p>Artist favoritku</p>
          {/* Navbar */}
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About Jennie</Link> |{" "}
            <Link to="/songs">Fav Songs</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutJennie />} />
            <Route path="/songs" element={<FavSongs />} />
          </Routes>
        </main>

        <footer>
          <p>© 2025 made with love for Jennie</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
