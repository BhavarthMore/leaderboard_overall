import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="leader-board-label">Leader Board</div>
      <div className="balance">
        <span>🔴 3982</span>
        <span>₹2750.00</span>
      </div>
      <div className="profile-icon">
        {/* Placeholder for Profile Icon */}
        <span>👤</span>
      </div>
    </div>
  );
};

export default TopBar;
