import React from 'react';
import ContactCard from './ContactCard';

function UserList({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <ContactCard key={index} user={user} />
      ))}
    </div>
  );
}

export default UserList;
