import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (
    <header className="nav-header">
      <div className="nav-left">
        <Link to="/" className="nav-logo">QuikStrip AI</Link>
      </div>

      <nav className="nav-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/configure" ? "active" : ""} to="/configure">Configurator</Link>
        <Link className={location.pathname === "/catalog" ? "active" : ""} to="/catalog">Catalog</Link>
        <Link className={location.pathname === "/history" ? "active" : ""} to="/history">History</Link>
      </nav>
    </header>
  );
}
