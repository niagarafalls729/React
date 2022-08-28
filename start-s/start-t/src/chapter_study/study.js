import React from 'react';

function Fn_User({ user777 }) {
  return (
    <div>
      <b>{user777.username}</b> <span>({user777.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return (
    <div>
      {users.map(user으갸갸갸 => (
        <Fn_User user777={user으갸갸갸} key={user으갸갸갸.id} />
      ))}
    </div>
  );
}

export default UserList;