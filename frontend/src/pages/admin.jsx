import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from "../elements/navbar";
import "../scss/admin-page.scss";

function AdminPage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await axios.get('/api/games');
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGames();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Game List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.id}</td>
              <td>{game.title}</td>
              <td>{game.price}€</td>
              <td>{game.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
