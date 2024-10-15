import React from 'react';
import { GitHubUser } from '../App';

interface UserCardProps {
  user: GitHubUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="card col-md-4">
      <img src={user.avatar_url} alt={user.login} width="100" height="100" />
      <h5>{user.login}</h5>
      <p className="card-text">
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </p>
    </div>
  );
};

export default UserCard;
