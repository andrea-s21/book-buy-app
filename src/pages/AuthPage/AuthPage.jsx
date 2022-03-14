import './AuthPage.css';
import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="authPage">
      <img src={process.env.PUBLIC_URL+"HomePage.png"} />
      <div>
      <h1>Welcome to BookBuy!</h1>
      <h5>A marketplace for buying and selling used books.</h5>
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
      { showLogin ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
      }
      </div>
    </main>
  );
}