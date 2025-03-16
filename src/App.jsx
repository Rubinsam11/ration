import React, { useState } from 'react';
import { Shield, Store, Users } from 'lucide-react';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import ShopkeeperLogin from './components/shopkeeper/ShopkeeperLogin';
import ShopkeeperDashboard from './components/shopkeeper/ShopkeeperDashboard';
import CustomerLogin from './components/customer/CustomerLogin';
import CustomerRegister from './components/customer/CustomerRegister';
import CustomerDashboard from './components/customer/CustomerDashboard';

function App() {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    userType: null,
  });
  const [currentView, setCurrentView] = useState('login');

  const handleLogin = (userType) => {
    setAuthState({ isAuthenticated: true, userType });
  };

  const handleLogout = () => {
    setAuthState({ isAuthenticated: false, userType: null });
  };

  if (!authState.isAuthenticated) {
    return (
      <div className="auth-container">
        <div className="government-seal"></div>
        <div className="auth-form">
          <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '2rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a237e', marginBottom: '1rem' }}>
              Digital Ration Card System
            </h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              Government of India
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
              <button
                className="btn"
                onClick={() => setAuthState({ ...authState, userType: 'admin' })}
                style={{ backgroundColor: authState.userType === 'admin' ? '#1a237e' : '#e0e0e0', color: authState.userType === 'admin' ? 'white' : '#333' }}
              >
                <Shield size={20} />
                Admin
              </button>
              <button
                className="btn"
                onClick={() => setAuthState({ ...authState, userType: 'shopkeeper' })}
                style={{ backgroundColor: authState.userType === 'shopkeeper' ? '#1a237e' : '#e0e0e0', color: authState.userType === 'shopkeeper' ? 'white' : '#333' }}
              >
                <Store size={20} />
                Shopkeeper
              </button>
              <button
                className="btn"
                onClick={() => setAuthState({ ...authState, userType: 'customer' })}
                style={{ backgroundColor: authState.userType === 'customer' ? '#1a237e' : '#e0e0e0', color: authState.userType === 'customer' ? 'white' : '#333' }}
              >
                <Users size={20} />
                Customer
              </button>
            </div>
          </div>

          {authState.userType === 'admin' && (
            <AdminLogin onLogin={() => handleLogin('admin')} />
          )}
          {authState.userType === 'shopkeeper' && (
            <ShopkeeperLogin onLogin={() => handleLogin('shopkeeper')} />
          )}
          {authState.userType === 'customer' && (
            <>
              {currentView === 'login' ? (
                <CustomerLogin
                  onLogin={() => handleLogin('customer')}
                  onRegisterClick={() => setCurrentView('register')}
                />
              ) : (
                <CustomerRegister
                  onRegisterSuccess={() => setCurrentView('login')}
                  onLoginClick={() => setCurrentView('login')}
                />
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="government-seal"></div>
      <header className="header">
        <div className="container header-content">
          <h1>Digital Ration Card System</h1>
          <button className="btn" onClick={handleLogout} style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>
            Logout
          </button>
        </div>
      </header>

      {authState.userType === 'admin' && <AdminDashboard />}
      {authState.userType === 'shopkeeper' && <ShopkeeperDashboard />}
      {authState.userType === 'customer' && <CustomerDashboard />}
    </div>
  );
}

export default App;