import "../styles/DashboardCards.css";

function DashboardCards() {

  const cards = [
    {
      icon: "🟢",
      title: "Backend",
      value: "Connected",
    },
    {
      icon: "🤖",
      title: "AI Status",
      value: "Online",
    },
    {
      icon: "🛡️",
      title: "Threats",
      value: "0 Detected",
    },
    {
      icon: "👥",
      title: "Users",
      value: "1 Active",
    },
  ];

  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <h2>
            {card.icon} {card.title}
          </h2>

          <p>{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;