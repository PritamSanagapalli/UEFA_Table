import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import bgImage from './assets/bg-image.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home fade-in">
      <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>

      <header className="header">
        <img src="/Logo.png" alt="UEFA Champions League" className="logo" />
      </header>
      
      <div className="title-container">
        <h1>UEFA Champions League</h1>
        <p>Stay updated with the matches from Europe's elite football competition</p>
      </div>

      <div className="center-button">
        <button onClick={() => navigate('/matches')}>View Upcoming Matches</button>
      </div>
    </div>
  );
}

export default Home;
