import React from 'react';

function CustomerDashboard() {
  const rationDetails = [
    {
      month: 'March 2024',
      rice: 5,
      wheat: 3,
      sugar: 1,
      status: 'collected',
    },
    {
      month: 'April 2024',
      rice: 5,
      wheat: 3,
      sugar: 1,
      status: 'pending',
    },
  ];

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Your Ration Card Details</h2>
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Card Number:</strong> XXXX-XXXX-XXXX</p>
          <p><strong>Card Type:</strong> BPL</p>
          <p><strong>Family Members:</strong> 4</p>
          <p><strong>Assigned Shop:</strong> Shop #123, Main Street</p>
        </div>
      </div>

      <h3>Monthly Ration Entitlement</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Rice (kg)</th>
            <th>Wheat (kg)</th>
            <th>Sugar (kg)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rationDetails.map((detail) => (
            <tr key={detail.month}>
              <td>{detail.month}</td>
              <td>{detail.rice}</td>
              <td>{detail.wheat}</td>
              <td>{detail.sugar}</td>
              <td>
                <span
                  style={{
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    backgroundColor:
                      detail.status === 'collected' ? '#def7ec' : '#fde8e8',
                    color:
                      detail.status === 'collected'
                        ? 'var(--secondary-color)'
                        : 'var(--danger-color)',
                  }}
                >
                  {detail.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerDashboard;