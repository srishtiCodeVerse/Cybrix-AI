import "../styles/Sidebar.css";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">

      <h2>🛡️ CYBRIX AI</h2>

      <ul>

        <li onClick={() => setPage("dashboard")}>
          🏠 Dashboard
        </li>

        <li onClick={() => setPage("assistant")}>
          🤖 AI Assistant
        </li>

        <li onClick={() => setPage("scanner")}>
          🛡️ Vulnerability Scanner
        </li>

        <li onClick={() => setPage("history")}>
          📜 Scan History
        </li>

        <li onClick={() => setPage("network")}>
          🌐 Network Monitor
        </li>

        <li onClick={() => setPage("reports")}>
          📄 Reports
        </li>

        <li onClick={() => setPage("profile")}>
          👤 Profile
        </li>

        <li>
          🚪 Logout
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;