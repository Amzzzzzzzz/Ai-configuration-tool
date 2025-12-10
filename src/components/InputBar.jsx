import { useState } from "react";
import "../styles/InputBar.css";

function InputBar({ setMessages, setBom, setLoading, messages }) {
  const [input, setInput] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updated = [...messages, userMessage];

    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(import.meta.env.VITE_EDGE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.bom) {
        setBom(data.bom);
        setMessages([...updated, data.message]);
      } else {
        setMessages([...updated, data.message]);
      }
    } catch (err) {
      console.error("Edge error:", err);
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  }

  return (
    <form className="input-bar" onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Ask about LED strips, profiles, wattage..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default InputBar;
