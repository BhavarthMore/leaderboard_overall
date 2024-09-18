import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LeaderboardList.css';
import LeaderboardTabs from './LeaderboardTabs';
const LeaderboardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Sort users by points and assign ranks
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);
  const usersWithRank = sortedUsers.map((user, index) => ({
    ...user,
    rank: index + 1
  }));

  return (
    <div className="leaderboard-list">
      <LeaderboardTabs/>
      {usersWithRank.map((user) => (
        <div
          className={`user-row ${user.rank === 1 ? 'rank-1' : user.rank === 2 ? 'rank-2' : user.rank === 3 ? 'rank-3' : ''}`}
          key={user.id}
        >
          <div className="avatar">👤</div>
          <div className="user-info">
            <h4>{user.name}</h4>
            <p>Rank: {user.rank}</p>
            <p>Total Points: {user.points}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardList;
