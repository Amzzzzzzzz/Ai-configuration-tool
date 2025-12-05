import { useState } from "react";
import "./App.css";

import WelcomeScreen from "./components/WelcomeScreen";
import ChatWindow from "./components/ChatPage";
import InputBar from "./components/InputBar";
import BOMPanel from "./components/BOMPanel";

function App() {
  const [started, setStarted] = useState(false);

  const [messages, setMessages] = useState([]);
  const [bom, setBom] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showBOM, setShowBOM] = useState(false);

  const [configState, setConfigState] = useState({
    type: null,
    cct: null,
    ip: null,
    metres: null,
    dimmable: null,
    wants_profile: null,
    profile_type: null,
    connectors: null,
    connector_count: null,
    ready: false
  });

  if (!started) {
    return <WelcomeScreen onStart={() => setStarted(true)} />;
  }

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>Quik Strip AI Assistant</h1>
        <span className="header-subtitle">Smart product recommendations 24/7</span>
      </header>

      <div className="chat-container">
        <div className="chat-card">
          <ChatWindow messages={messages} loading={loading} />

          {bom && !showBOM && (
            <button
              className="view-bom-btn"
              onClick={() => setShowBOM(true)}
            >
              View Bill of Materials
            </button>
          )}

          <InputBar
            setMessages={setMessages}
            setBom={setBom}
            setLoading={setLoading}
            messages={messages}
            configState={configState}
            setConfigState={setConfigState}
          />
        </div>
      </div>

      {showBOM && (
        <div className="modal-overlay" onClick={() => setShowBOM(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setShowBOM(false)}>
              ✕
            </button>

            <BOMPanel bom={bom} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;








