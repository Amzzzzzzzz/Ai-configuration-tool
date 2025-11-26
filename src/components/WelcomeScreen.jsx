import "../styles/WelcomeScreen.css";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-wrapper">
      <div className="welcome-card">

        <h1 className="welcome-title">QuikStrip</h1>
        <p className="welcome-subtitle">
          Your 24/7 smart assistant for LED strip configurations, power supply matching, and lighting recommendations.
        </p>

        <button className="start-btn" onClick={onStart}>
          Start Configuration
        </button>

      </div>
    </div>
  );
}
