import React, { useState, useEffect } from "react";
import axios from "axios";

import "../scss/admin-table.scss";

function AdminTable() {
  const [games, setGames] = useState([]);
  const [editingGame, setEditingGame] = useState(null);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await axios.get("/api/games");
        setGames(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGames();
  }, []);

  async function handleDelete(id) {
    try {
      const response = await axios.delete(`/api/games/${id}`);
      if (response.status === 204) {
        setGames(games.filter((game) => game.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdate(game) {
    try {
      const response = await axios.put(`/api/games/${game.id}`, game);
      if (response.status === 200) {
        setGames(
          games.map((g) => {
            if (g.id === game.id) {
              return game;
            }
            return g;
          })
        );
        setEditingGame(null);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Game List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.id}</td>
              {editingGame?.id === game.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      defaultValue={game.title}
                      onChange={(e) =>
                        setEditingGame({
                          ...editingGame,
                          title: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      defaultValue={game.price}
                      onChange={(e) =>
                        setEditingGame({
                          ...editingGame,
                          price: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      defaultValue={game.rating}
                      onChange={(e) =>
                        setEditingGame({
                          ...editingGame,
                          rating: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => handleUpdate(editingGame)}
                      disabled={!editingGame.title || !editingGame.price}
                    >
                      SAVE
                    </button>
                  </td>
                  <td>
                    <button onClick={() => setEditingGame(null)}>CANCEL</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{game.title}</td>
                  <td>{game.price}€</td>
                  <td>{game.rating}</td>
                  <td>
                    <button onClick={() => setEditingGame(game)}>EDIT</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(game.id)}>DELETE</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
