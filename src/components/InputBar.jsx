import { useState } from "react";
import "../styles/InputBar.css";

function InputBar({ setMessages, setBom, setLoading, messages }) {
  const [input, setInput] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    const trimmedMessages = updatedMessages.slice(-8);

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(import.meta.env.VITE_EDGE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: trimmedMessages }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.bom) {
        setBom(data.bom);
        setMessages([...updatedMessages, data.message]);
      } else {
        setMessages([...updatedMessages, data.message]);
      }
    } catch (err) {
      console.error("Edge function error:", err);
      setLoading(false);
    }
  }

  return (
    <form className="input-bar" onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Ask about LED strips, wattage, profiles..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default InputBar;


