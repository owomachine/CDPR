import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (searchValue.trim() !== '') {
      try {
        const response = await axios.get(`/api/games/title/${searchValue}`);
        setSearchResults(response.data);
        setSearchButtonClicked(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search games by title"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchButtonClicked && searchResults.length === 0 ? (
        <p>No results found.</p>
      ) : (
        searchResults.length > 0 && (
          <ul>
            {searchResults.map((game) => (
              <li key={game.id}>
                <Link to={`/games/${game.id}`}>{game.title}</Link>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export default SearchBar;
