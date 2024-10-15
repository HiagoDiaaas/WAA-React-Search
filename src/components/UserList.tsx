import React from 'react';
import UserCard from './UserCard';
import { GitHubUser } from '../App';

interface UserListProps {
  users: GitHubUser[];
  message: string;
}

const UserList: React.FC<UserListProps> = ({ users, message }) => {
  if (message) {
    return <p>{message}</p>;
  }

  return (
    <div className="row">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
