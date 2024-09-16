import React from 'react';
import TopBar from './components/TopBar';
import LeaderboardTabs from './components/LeaderboardTabs';
import TopThree from './components/TopThree';
import LeaderboardList from './components/LeaderboardList';
import BottomNav from './components/BottomNav';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <TopBar />
      <LeaderboardTabs />
      <TopThree />
      <LeaderboardList />
      <BottomNav />
    </div>
  );
};

export default App;
