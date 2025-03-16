import React, { useState } from 'react';

function ShopkeeperLogin({ onLogin }) {
  const [shopId, setShopId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, validate against registered shopkeepers
    if (shopId && password) {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Shopkeeper Login</h2>
      {error && <div className="alert alert-error">{error}</div>}
      <div className="form-group">
        <label htmlFor="shopId">Shop ID</label>
        <input
          type="text"
          id="shopId"
          value={shopId}
          onChange={(e) => setShopId(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default ShopkeeperLogin;