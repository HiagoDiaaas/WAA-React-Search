import React, { useState } from 'react';
import './index.css';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

function App() {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [message, setMessage] = useState<string>('Please enter keyword to start search');

  return (
    <div className="album">
      <div className="container">
        <SearchBar setUsers={setUsers} setMessage={setMessage} />
        <UserList users={users} message={message} />
      </div>
    </div>
  );
}

export default App;
