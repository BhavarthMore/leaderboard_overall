import React, { useState } from 'react';
import './LeaderboardTabs.css';

const LeaderboardTabs = () => {
  const [activeTab, setActiveTab] = useState('daily');

  return (
    <div className="leaderboard-tabs">
      <button
        className={activeTab === 'daily' ? 'active' : ''}
        onClick={() => setActiveTab('daily')}
      >
        Daily
      </button>
      <button
        className={activeTab === 'weekly' ? 'active' : ''}
        onClick={() => setActiveTab('weekly')}
      >
        Weekly
      </button>
      <button
        className={activeTab === 'monthly' ? 'active' : ''}
        onClick={() => setActiveTab('monthly')}
      >
        Monthly
      </button>
    </div>
  );
};

export default LeaderboardTabs;
