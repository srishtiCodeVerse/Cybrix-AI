import { useState } from "react";
import api from "../api/api";

function AIAssistant() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I am CYBRIX AI. Ask me anything.",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // User message add
    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await api.post("/chat", {
        message: message,
      });

      const botMessage = {
        sender: "bot",
        text: response.data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Backend Error",
        },
      ]);
    }

    setMessage("");
  };

  return (
    <div className="chat-page">

      <h1>🤖 CYBRIX AI Assistant</h1>

      <div className="chat-box">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "user"
                ? "message user"
                : "message bot"
            }
          >
            {msg.text}
          </div>
        ))}

      </div>

      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />

      <button onClick={sendMessage}>
        Send
      </button>

    </div>
  );
}

export default AIAssistant;