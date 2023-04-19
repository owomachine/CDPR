import React, { useState } from "react";
import axios from "axios";

function GameForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [coverurl, setCoverurl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      title,
      price,
      description,
      rating,
      coverurl,
    };
    axios
      .post("http://localhost:8081/api/games", newGame)
      .then((res) => {
        console.log(res.data);
        // do something with the response data
      })
      .catch((err) => {
        console.error(err);
        // handle error
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div>
        <label>Cover URL:</label>
        <input
          type="text"
          value={coverurl}
          onChange={(e) => setCoverurl(e.target.value)}
        />
      </div>
      <button type="submit">Add Game</button>
    </form>
  );
}

export default GameForm;