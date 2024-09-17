import React from 'react';
import TopBar from './components/TopBar';
import LeaderboardTabs from './components/LeaderboardTabs';
//import TopThree from './components/TopThree';

import BottomNav from './components/BottomNav';
import MainComponent from './components/MainComponent';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <TopBar />
      <MainComponent />
      
      <BottomNav />
    </div>
  );
};

export default App;
