import "../styles/Message.css";

export default function Message({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`message ${isUser ? "message-user" : "message-ai"}`}>
      {message.content}
    </div>
  );
}
