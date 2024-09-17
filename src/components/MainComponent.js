import React, { useState } from 'react';
import Leaderboard from './LeaderboardList'; // Assuming Leaderboard is the component displaying user rankings
import './LeaderboardList.css';
import User from './Users'; // Assuming User is the component displaying individual user details
import './MainComponent.css'; // Create this file for styling

const MainComponent = () => {
  const [view, setView] = useState('users'); // Default view is 'leaderboard'

  const handleSwitchView = (newView) => {
    setView(newView);
  };

  return (
    <div className="main-container">
      <div className="view-switcher">
      <button
          className={view === 'users' ? 'active' : ''}
          onClick={() => handleSwitchView('users')}
        >
          Users
        </button>
        <button
          className={view === 'leaderboard' ? 'active' : ''}
          onClick={() => handleSwitchView('leaderboard')}
        >
          Leaderboard
        </button>
        
      </div>

      <div className="view-container">
        {view === 'leaderboard' ? <Leaderboard /> : <User />}
      </div>
    </div>
  );
};

export default MainComponent;
