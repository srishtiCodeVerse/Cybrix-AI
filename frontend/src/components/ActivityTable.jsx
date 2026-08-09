import "../styles/ActivityTable.css";

function ActivityTable() {

  const activities = [
    {
      time: "10:30 AM",
      event: "User Login",
      status: "Success",
    },
    {
      time: "10:45 AM",
      event: "Threat Scan",
      status: "Completed",
    },
    {
      time: "11:15 AM",
      event: "AI Assistant",
      status: "Running",
    },
    {
      time: "11:40 AM",
      event: "Network Monitor",
      status: "Active",
    },
  ];

  return (
    <div className="activity">

      <h2>📋 Recent Activity</h2>

      <table>

        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {activities.map((item, index) => (

            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.event}</td>
              <td>{item.status}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ActivityTable;