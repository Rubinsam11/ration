import React, { useState, useEffect } from 'react';
import { Shield, Store, Users, Menu, X } from 'lucide-react';
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
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogin = (userType) => {
    setAuthState({ isAuthenticated: true, userType });
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    setAuthState({ isAuthenticated: false, userType: null });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!authState.isAuthenticated) {
    return (
      <div className="auth-container">
        <div className="government-seal"></div>
        <div className="auth-form">
          <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '2rem' }}>
            <h1 style={{ fontSize: isMobile ? '1.3rem' : '1.5rem', fontWeight: 'bold', color: '#1a237e', marginBottom: '1rem' }}>
              Digital Ration Card System
            </h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              Government of India
            </p>
            
            {/* Responsive user type selection */}
            <div 
              style={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center', 
                gap: '1rem', 
                marginTop: '1rem'
              }}
            >
              <button
                className="btn"
                onClick={() => setAuthState({ ...authState, userType: 'admin' })}
                style={{ 
                  backgroundColor: authState.userType === 'admin' ? '#1a237e' : '#e0e0e0', 
                  color: authState.userType === 'admin' ? 'white' : '#333',
                  width: isMobile ? '100%' : 'auto'
                }}
              >
                <Shield size={20} />
                Admin
              </button>
              <button
                className="btn"
                onClick={() => setAuthState({ ...authState, userType: 'shopkeeper' })}
                style={{ 
                  backgroundColor: authState.userType === 'shopkeeper' ? '#1a237e' : '#e0e0e0', 
                  color: authState.userType === 'shopkeeper' ? 'white' : '#333',
                  width: isMobile ? '100%' : 'auto'
                }}
              >
                <Store size={20} />
                Shopkeeper
              </button>
              <button
                className="btn"
                onClick={() => setAuthState({ ...authState, userType: 'customer' })}
                style={{ 
                  backgroundColor: authState.userType === 'customer' ? '#1a237e' : '#e0e0e0', 
                  color: authState.userType === 'customer' ? 'white' : '#333',
                  width: isMobile ? '100%' : 'auto'
                }}
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
          {isMobile ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <h1 style={{ fontSize: '1.2rem' }}>Digital Ration Card</h1>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button 
                    className="btn" 
                    onClick={toggleMobileMenu} 
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem' }}
                  >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </div>
              {mobileMenuOpen && (
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '60px', 
                    left: 0, 
                    right: 0, 
                    backgroundColor: '#1a237e', 
                    padding: '1rem',
                    zIndex: 10,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  <button 
                    className="btn" 
                    onClick={handleLogout} 
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', width: '100%', marginBottom: '0.5rem' }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <h1>Digital Ration Card System</h1>
              <button className="btn" onClick={handleLogout} style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                Logout
              </button>
            </>
          )}
        </div>
      </header>

      <div className="container" style={{ padding: isMobile ? '1rem' : '2rem' }}>
        {authState.userType === 'admin' && <AdminDashboard />}
        {authState.userType === 'shopkeeper' && <ShopkeeperDashboard />}
        {authState.userType === 'customer' && <CustomerDashboard />}
      </div>
    </div>
  );
}

export default App;
