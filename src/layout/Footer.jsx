import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} QuikStrip AI — Lighting Configuration Assistant</p>
    </footer>
  );
}
