import React, { useState } from "react";
import axios from "axios";
import "../scss/game-form.scss";

function GameForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [coverurl, setCoverurl] = useState("");
  const [showForm, setShowForm] = useState(false);

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
    <div className="gameForm">
      <div className="buttonContainer">
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Hide Form" : "Add Game"}
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="coverurl">Cover URL:</label>
              <input
                type="text"
                id="coverurl"
                value={coverurl}
                onChange={(e) => setCoverurl(e.target.value)}
              />
            </div>
            <button type="submit">Add Game</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default GameForm;
