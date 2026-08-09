import "../styles/ThreatChart.css";

function ThreatChart() {
  return (
    <div className="threat-chart">
      <h2>📈 Threat Analytics</h2>

      <div className="bars">

        <div className="bar">
          <span>Mon</span>
          <div className="fill" style={{height:"35%"}}></div>
        </div>

        <div className="bar">
          <span>Tue</span>
          <div className="fill" style={{height:"55%"}}></div>
        </div>

        <div className="bar">
          <span>Wed</span>
          <div className="fill" style={{height:"75%"}}></div>
        </div>

        <div className="bar">
          <span>Thu</span>
          <div className="fill" style={{height:"45%"}}></div>
        </div>

        <div className="bar">
          <span>Fri</span>
          <div className="fill" style={{height:"90%"}}></div>
        </div>

      </div>

    </div>
  );
}

export default ThreatChart;