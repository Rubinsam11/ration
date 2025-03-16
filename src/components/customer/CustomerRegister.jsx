import React, { useState } from 'react';

function CustomerRegister({ onRegisterSuccess, onLoginClick }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    familyMembers: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // In a real app, send registration data to backend
    onRegisterSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Customer Registration</h2>
      {error && <div className="alert alert-error">{error}</div>}
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="familyMembers">Number of Family Members</label>
        <input
          type="number"
          id="familyMembers"
          value={formData.familyMembers}
          onChange={(e) => setFormData({ ...formData, familyMembers: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Already have an account?{' '}
        <button
          type="button"
          onClick={onLoginClick}
          style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
        >
          Login here
        </button>
      </p>
    </form>
  );
}

export default CustomerRegister;