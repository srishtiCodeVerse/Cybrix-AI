import "../styles/Reports.css";

function Reports() {

  const reports = [
    {
      title: "Website Scan",
      date: "07 July 2026",
      status: "Completed",
    },
    {
      title: "Network Scan",
      date: "07 July 2026",
      status: "Completed",
    },
    {
      title: "Threat Analysis",
      date: "07 July 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="reports-page">

      <h1>📄 Security Reports</h1>

      <div className="report-list">

        {reports.map((report, index) => (

          <div className="report-card" key={index}>

            <h2>{report.title}</h2>

            <p>Date : {report.date}</p>

            <p>Status : {report.status}</p>

            <button>
              Download PDF
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Reports;