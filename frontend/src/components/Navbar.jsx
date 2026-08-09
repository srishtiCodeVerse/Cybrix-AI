import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <h2>🛡️ CYBRIX AI Dashboard</h2>
      </div>

      <div className="nav-right">
        <input
          type="text"
          placeholder="🔍 Search..."
        />

        <button className="notify">
          🔔
        </button>

        <div className="profile">
          👤 Srishti
        </div>
      </div>
    </div>
  );
}

export default Navbar;