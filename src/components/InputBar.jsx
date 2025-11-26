import { useState } from "react";
import "../styles/InputBar.css";
import { sendMessageToAI } from "../aiClient";

export default function InputBar({ setMessages, setBom, setLoading, messages }) {
  const [input, setInput] = useState("");

  async function handleSend() {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };

    const newMessageList = [...messages, userMsg];
    setMessages(newMessageList);
    setInput("");
    setLoading(true);

    const result = await sendMessageToAI(newMessageList);
    setMessages(prev => [
      ...prev,
      { role: "assistant", content: result.aiMessage.content }
    ]);

    if (result.bom) {
      setBom(result.bom);
    }

    setLoading(false);
  }

  return (
    <div className="inputbar-container">
      <input
        className="inputbar-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about LED strips, wattage, profiles..."
      />
      <button className="inputbar-button" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

