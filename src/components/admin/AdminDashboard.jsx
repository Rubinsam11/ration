import React, { useState } from 'react';
import { Store } from 'lucide-react';

function AdminDashboard() {
  const [shopkeepers, setShopkeepers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    shopId: '',
    location: '',
    contact: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newShopkeeper = {
      id: Date.now().toString(),
      ...formData,
    };
    setShopkeepers([...shopkeepers, newShopkeeper]);
    setFormData({ name: '', shopId: '', location: '', contact: '' });
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Store size={24} />
        <h2>Add Shopkeeper</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Shopkeeper Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="shopId">Shop ID</label>
          <input
            type="text"
            id="shopId"
            value={formData.shopId}
            onChange={(e) => setFormData({ ...formData, shopId: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Shopkeeper
        </button>
      </form>

      <h3 style={{ margin: '2rem 0 1rem' }}>Registered Shopkeepers</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Shop ID</th>
            <th>Location</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {shopkeepers.map((shopkeeper) => (
            <tr key={shopkeeper.id}>
              <td>{shopkeeper.name}</td>
              <td>{shopkeeper.shopId}</td>
              <td>{shopkeeper.location}</td>
              <td>{shopkeeper.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;