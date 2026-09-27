import "./Navbar.css";
import { Sun } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Mihitha</div>

      {/* Navigation */}
      <div className="nav-links">
        <a href="#home" className="active">
          Home
        </a>

        <a href="#about">About</a>

        <a href="#projects">Projects</a>

        <a href="#skills">Skills</a>

        <a href="#experience">Experience</a>

        <a href="#education">Education</a>

        <a href="#contact">Contact</a>
      </div>

      {/* Theme button */}
      <button className="theme-button">
        <Sun size={18} />
      </button>
    </nav>
  );
}

export default Navbar;
