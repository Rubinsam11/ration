import React, { useState } from 'react';

function CustomerLogin({ onLogin, onRegisterClick }) {
  const [rationCardNumber, setRationCardNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rationCardNumber && password) {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Customer Login</h2>
      {error && <div className="alert alert-error">{error}</div>}
      <div className="form-group">
        <label htmlFor="rationCardNumber">Ration Card Number</label>
        <input
          type="text"
          id="rationCardNumber"
          value={rationCardNumber}
          onChange={(e) => setRationCardNumber(e.target.value)}
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
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onRegisterClick}
          style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
        >
          Register here
        </button>
      </p>
    </form>
  );
}

export default CustomerLogin;