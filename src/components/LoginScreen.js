import React, { useState } from 'react';


const EyeIcon = ({ open }) => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    {open ? (
      <>
        <path stroke="#6366f1" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
        <circle cx="12" cy="12" r="3.5" stroke="#6366f1" strokeWidth="2"/>
      </>
    ) : (
      <>
        <path stroke="#6366f1" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
        <path stroke="#6366f1" strokeWidth="2" strokeLinecap="round" d="M4 19L20 5"/>
      </>
    )}
  </svg>
);

const wrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: `url('bg_image.jpg') center center / cover no-repeat`,
  fontFamily: "'Inter', 'Roboto', sans-serif",
};

const cardStyle = {
  display: 'flex',
  borderRadius: '32px',
  boxShadow: '0 8px 36px 0 rgba(38,22,63,0.12)',
  backgroundColor: 'white',
  overflow: 'hidden',
  width: '1100px',
  maxWidth: '98vw',
  minHeight: '70vh',
};

const leftPanelOuter = {
  background: 'white',
  borderTopLeftRadius: '32px',
  borderBottomLeftRadius: '32px',
  display: 'flex',
  alignItems: 'stretch',
  flex: '1',
};

const leftPanel = {
  background: `url('bg_image.jpg') center center / cover no-repeat`,
  border: '1px solid white',
  borderRadius: '24px',
  margin: '32px 0 32px 32px',
  flex: '1',
  minHeight: '0',
  padding: '20px 50px 42px 35px', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  boxSizing: 'border-box',
  height: '94%',
  width: '100%',
  position: 'relative',
};

const quoteBlock = {
  margin: '0 0 0 0',
};

const rightPanel = {
  background: 'white',
  flex: '1.1',
  padding: '0 44px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderTopRightRadius: '32px',
  borderBottomRightRadius: '32px',
  minWidth: '350px',
  justifyContent: 'center', 
};

const formContainer = {
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
};

const inputRow = { position: 'relative', width: '100%', marginBottom: '26px' };

const inputStyle = {
  width: '100%',
  background: '#f5f5fa',
  border: '1.5px solid #e0dede',
  borderRadius: '8px',
  fontFamily: "'Inter', 'Roboto', sans-serif",
  fontSize: '15px',
  padding: '14px 44px 14px 14px',
  boxSizing: 'border-box',
};

const errorStyle = {
  fontFamily: "'Inter', sans-serif",
  color: '#ef4444',
  fontSize: '13px',
  margin: '2px 0 3px 2px',
  display: 'block',
};

const passwordToggleStyle = {
  position: 'absolute',
  top: '50%',
  right: '13px',
  transform: 'translateY(-50%)',
  border: 'none',
  background: 'none',
  padding: 0,
  width: '28px',
  height: '28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const googleLogoSVG = (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <g>
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.6C34.7 33.6 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.2 2.5l6.3-6.3C34.7 4.9 29.7 3 24 3 12.3 3 3 12.3 3 24s9.3 21 21 21c10.9 0 19.7-7.9 19.7-19.3 0-1.3-.1-2.7-.2-4z"/>
      <path fill="#34A853" d="M6.7 14.9l7 5.1C15.4 17.1 19.4 14 24 14c3.1 0 6 .9 8.2 2.5l6.3-6.3C34.7 4.9 29.7 3 24 3c-7.7 0-14.1 5.1-17.3 12.2z"/>
      <path fill="#FBBC05" d="M24 44c5.7 0 10.5-1.9 13.9-5l-6.6-5.5c-2.2 1.5-5 2.4-7.3 2.4-5.7 0-10.5-3.8-12.4-9.1l-6.9 5.3C7.8 39 15.2 44 24 44z"/>
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.6C34.2 33.2 29.2 37 24 37c-7.2 0-13-5.8-13-13 0-2 .4-3.8 1.1-5.5l6.7 5.1C19.4 29.1 24 33.5 24 33.5c3.1 0 5.9-1.8 7.7-4.5l6.6 5.5C36.2 40.1 30.8 44 24 44c-10.9 0-19.7-7.9-19.7-19.3 0-1.3.1-2.7.2-4l7-5.1C9.5 19.6 9.1 21.4 9.1 24c0 7.2 5.8 13 13 13 2.2 0 5-.9 7.3-2.4l7-5.1C41 29.2 44.5 24.8 44.5 20z"/>
    </g>
  </svg>
);

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) errors.push('Password must be at least 8 characters long');
    if (!/[A-Z]/.test(password)) errors.push('Password must contain at least one uppercase letter');
    if (!/[a-z]/.test(password)) errors.push('Password must contain at least one lowercase letter');
    if (!/\d/.test(password)) errors.push('Password must contain at least one digit');
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) errors.push('Password must contain at least one special character');
    if (/\s/.test(password)) errors.push('Password must not contain spaces');
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';

    if (!formData.password) newErrors.password = 'Password is required';
    else {
      const passwordErrors = validatePassword(formData.password);
      if (passwordErrors.length > 0) newErrors.password = passwordErrors[0];
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    alert('Sign in successful! Welcome back!');
  };

  const handleGoogleSignIn = () => {
    alert('Google Sign In clicked');
  };

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500&family=Roboto:wght@400;500&display=swap" />
      <div style={wrapperStyle}>
        <div style={cardStyle}>
          {}
          <div style={leftPanelOuter}>
            <div style={leftPanel}>
              <div style={quoteBlock}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: '500',
                  letterSpacing: '2.5px',
                  color: '#fff',
                  opacity: '.87',
                  marginBottom: '250px',
                  textTransform: 'uppercase'
                }}>
                  A WISE QUOTE
                </div>
                <h1 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: '1.13',
                  color: '#fff',
                  margin: '0 0 15px 0'
                }}>
                  Get<br />Everything<br />You Want
                </h1>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '1.7',
                  opacity: '.97',
                  marginTop: '12px'
                }}>
                  You can get everything you want if you work hard,<br />
                  trust the process, and stick to the plan.
                </div>
              </div>
            </div>
          </div>
          {}
          <div style={rightPanel}>
            <div style={formContainer}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '40px',
                justifyContent: 'center'
              }}>
                <span style={{
                  fontSize: '22px',
                  width: '36px',
                  height: '36px',
                  background: '#f2f6ff',
                  color: '#6366f1',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>🌐</span>
                <span style={{
                  fontFamily: "'Roboto', 'Inter', sans-serif",
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#23272F',
                }}>Cogie</span>
              </div>
              <div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#232230',
                  margin: '40px 89px 25px 89px',
                  textAlign: 'center'
                }}>Welcome Back</h2>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14.5px',
                  color: '#6b7280',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  Enter your email and password to access your account
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div style={inputRow}>
                  <label htmlFor="email" style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#232230',
                    marginBottom: '5px',
                    display: 'block'
                  }}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  {errors.email && <span style={errorStyle}>{errors.email}</span>}
                </div>
                <div style={inputRow}>
                  <label htmlFor="password" style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#232230',
                    marginBottom: '5px',
                    display: 'block'
                  }}>Password</label>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="off"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    tabIndex={-1}
                    style={passwordToggleStyle}
                    onClick={() => setShowPassword(open => !open)}
                  >
                    <EyeIcon open={showPassword} />
                  </button>
                  {errors.password && <span style={errorStyle}>{errors.password}</span>}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '28px'
                }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontSize: '14.5px',
                    userSelect: 'none',
                  }}>
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      style={{accentColor:'#6366f1'}}
                    />
                    Remember me
                  </label>
                  <button
                    type="button"
                    style={{
                      color: '#6366f1',
                      fontSize: '15px',
                      background: '#f5f5fa',
                      borderRadius: '6px',
                      padding: '2px 9px',
                      cursor: 'pointer',
                      border: 'none',
                    }}
                    onClick={() => alert("Forgot password clicked")}
                  >Forgot Password?</button>
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#23272F',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '15px 0',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '17px',
                    fontWeight: '600',
                    marginBottom: '19px',
                    cursor: 'pointer'
                  }}
                >Sign In</button>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  style={{
                    width: '100%',
                    background: '#fff',
                    color: '#232230',
                    border: '1.5px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '12px',
                    fontSize: '15px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '13px',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    cursor: 'pointer'
                  }}
                >
                  <span>{googleLogoSVG}</span>
                  Sign in with Google
                </button>
                <div style={{
                  textAlign: 'center',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14.5px',
                  color: '#6b7280'
                }}>
                  Don't have an account?
                  <span
                    style={{color:'#6366f1',cursor:'pointer',fontWeight:'500',textDecoration:'none',marginLeft:'3px'}}
                    tabIndex={0}
                    role="button"
                    onClick={() => alert('Sign up clicked')}
                  >Sign Up</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
