import React, { useEffect, useState} from 'react';

import {useParams} from "react-router-dom";

function GamePage() {
    const {gameId} = useParams();
    console.log(gameId);
    const [game, setGame] = useState({});
    useEffect(() => {
        fetch(`/api/games/${gameId}`)
            .then(response => response.json())
            .then(response => setGame(response))
    }, [gameId]);

    return <div>
        <h2>{game.title}</h2>
        <h1>{game.title}</h1>
    </div>;
}

export default GamePage;