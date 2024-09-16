import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './BottomNav.css'; // Make sure to create a corresponding CSS file

const BottomNav = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="bottomNav"
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Tasks" icon={<PlusOneIcon />} />
      <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      <BottomNavigationAction label="Leaderboard" icon={<StarBorderIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
