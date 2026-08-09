import { useState } from "react";
import "../styles/NetworkMonitor.css";

function NetworkMonitor() {
  const [network] = useState({
    ip: "192.168.1.101",
    ping: "18 ms",
    download: "125 Mbps",
    upload: "42 Mbps",
    firewall: "Enabled ✅",
    status: "Online 🟢",
  });

  return (
    <div className="network-page">

      <h1>🌐 Network Monitor</h1>

      <div className="network-grid">

        <div className="network-card">
          <h3>IP Address</h3>
          <p>{network.ip}</p>
        </div>

        <div className="network-card">
          <h3>Ping</h3>
          <p>{network.ping}</p>
        </div>

        <div className="network-card">
          <h3>Download</h3>
          <p>{network.download}</p>
        </div>

        <div className="network-card">
          <h3>Upload</h3>
          <p>{network.upload}</p>
        </div>

        <div className="network-card">
          <h3>Firewall</h3>
          <p>{network.firewall}</p>
        </div>

        <div className="network-card">
          <h3>Status</h3>
          <p>{network.status}</p>
        </div>

      </div>

    </div>
  );
}

export default NetworkMonitor;