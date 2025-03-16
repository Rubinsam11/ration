import React, { useState } from 'react';

function ShopkeeperDashboard() {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    rationCardNumber: '',
    name: '',
    quantity: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toLocaleDateString(),
    };
    setRecords([...records, newRecord]);
    setFormData({ rationCardNumber: '', name: '', quantity: '' });
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2>Record Distribution</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <div className="form-group">
          <label htmlFor="rationCardNumber">Ration Card Number</label>
          <input
            type="text"
            id="rationCardNumber"
            value={formData.rationCardNumber}
            onChange={(e) =>
              setFormData({ ...formData, rationCardNumber: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity Distributed (kg)</label>
          <input
            type="number"
            id="quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Record Distribution
        </button>
      </form>

      <h3 style={{ margin: '2rem 0 1rem' }}>Distribution Records</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Ration Card Number</th>
            <th>Customer Name</th>
            <th>Quantity (kg)</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.rationCardNumber}</td>
              <td>{record.name}</td>
              <td>{record.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShopkeeperDashboard;