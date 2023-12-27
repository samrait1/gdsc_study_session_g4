import React from 'react';

const List = () => {
  const members = ['sam', 'aba', 'red', 'kiya', 'hawi', 'bami', 'kal', 'abra', 'alxe', 'nati'];

  return (
    <div>
      <h1>Group Members</h1>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;