import { useEffect, useRef } from "react";
import "../styles/ChatPage.css";
import Message from "./Message";

export default function ChatWindow({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="chat-window">
      {messages.map((msg, i) => (
        <Message key={i} message={msg} />
      ))}

      {loading && <div className="chat-loading">AI is thinking...</div>}

      <div ref={bottomRef}></div>
    </div>
  );
}


