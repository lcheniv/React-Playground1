import React from 'react';

const TopFriendsList = () => {
  const friends = [
    { name: 'Friend 1', rank: 1 },
    { name: 'Friend 2', rank: 2 },
    { name: 'Friend 3', rank: 3 },
    { name: 'Friend 4', rank: 4 },
    { name: 'Friend 5', rank: 5 },
  ];

  return (
    <div>
      <h2>Top 5 Friends:</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.rank}>
            {friend.rank}. {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopFriendsList;