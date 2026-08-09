import { useState } from "react";
import api from "../api/api";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import ThreatChart from "../components/ThreatChart";
import ActivityTable from "../components/ActivityTable";
import VulnerabilityScanner from "./VulnerabilityScanner";
import NetworkMonitor from "./NetworkMonitor";
import Reports from "./Reports";
import Profile from "./Profile";

function Dashboard() {
  const [page, setPage] = useState("dashboard");
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("👋 Hello! I am CYBRIX AI.");

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      const response = await api.post("/chat", {
        message: message,
      });

      setReply(response.data.reply);
      setMessage("");
    } catch (error) {
      console.log(error);
      setReply("❌ Backend Error");
    }
  };

  return (
    <div className="dashboard">

      <Sidebar setPage={setPage} />

      <div className="main">
        <Navbar />

        {page === "dashboard" && (
          <>
            <h1>Welcome to CYBRIX AI 👋</h1>

            <p>
              Hello <b>Srishti</b>
            </p>

           <DashboardCards />
           <ThreatChart />
           <ActivityTable />
          </>
        )}

        {page === "assistant" && (
          <>
            <h1>🤖 CYBRIX AI Assistant</h1>

            <div className="chat-box">

              <div className="message bot">
                {reply}
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
          </>
        )}
{page === "scanner" && (
  <VulnerabilityScanner />
)}

        {page === "network" && (
  <NetworkMonitor />
)}
        {page === "reports" && (
  <Reports />
)}

        {page === "profile" && (
  <Profile />
)}

      </div>
    </div>
  );
}

export default Dashboard;