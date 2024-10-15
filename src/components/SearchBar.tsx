import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { GitHubUser } from '../App';

interface SearchBarProps {
  setUsers: React.Dispatch<React.SetStateAction<GitHubUser[]>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setUsers, setMessage }) => {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (keyword.trim() === '') {
      setMessage('Please enter keyword to start search');
      setUsers([]);
      return;
    }

    try {
      setMessage('Loading...');
      const response = await axios.get(`https://api.github.com/search/users?q=${keyword}`);
      if (response.data.items.length === 0) {
        setMessage('No users found');
        setUsers([]);
      } else {
        setUsers(response.data.items);
        setMessage('');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setMessage('Error fetching users');
      setUsers([]);
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ marginBottom: '2rem' }}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search GitHub Users"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
