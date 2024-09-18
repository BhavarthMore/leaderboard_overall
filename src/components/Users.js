import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://vercel.com/sonumore6715-gmailcoms-projects/leaderboard-overall-1zuj/BfmTA8FcxBcbb2McUUXrmxuGAwvD/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleClaimPoints = async (id) => {
    try {
      const response = await axios.post('http://localhost:5000/api/claim-points', { id });
      if (response.data.success) {
        const { pointsAdded, updatedUser } = response.data;
        setUsers((prevUsers) =>
          prevUsers
            .map((user) =>
              user.id === id
                ? { ...user, points: updatedUser.points, pointsAdded }
                : user
            )
            .sort((a, b) => a.id - b.id) // Sort users by ID in ascending order
        );
      }
    } catch (error) {
      console.error('Error claiming points:', error);
    }
  };

  return (
    <div className="leaderboard-list">
      {users
        .sort((a, b) => a.id - b.id) // Ensure sorting by ID on initial render
        .map((user) => (
          <div className="user-row" key={user.id}>
            <div className="avatar">👤</div>
            <div className="user-info">
              <h4>{user.name}</h4>
              <p>User Id: {user.id}</p>
              <p>Prize: {user.prize}</p>
              <p>Total Points: {user.points}</p>
              {user.pointsAdded && (
                <p className="points-added">+{user.pointsAdded} Points!</p>
              )}
            </div>
            <button onClick={() => handleClaimPoints(user.id)}>Claim Points</button>
          </div>
        ))}
    </div>
  );
};

export default Users;
