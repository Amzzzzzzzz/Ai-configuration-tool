import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <section className="hero">
        <h1>Quik Strip Configuration</h1>
        <p>AI-powered lighting recommendations, product matching, and instant BOM creation.</p>

        <Link className="hero-btn" to="/configure">
          Start Configuration
        </Link>
      </section>
    </div>
  );
}
