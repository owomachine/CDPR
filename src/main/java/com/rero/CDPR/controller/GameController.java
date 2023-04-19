package com.rero.CDPR.controller;

import com.rero.CDPR.model.Game;
import com.rero.CDPR.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3306")
@RestController
public class GameController {
    @Autowired
    GameRepository gameRepository;

    @GetMapping("api/games")
    public List<Game> getAll() {
        List<Game> games = gameRepository.findAll();
        return games;
    }

    @GetMapping("api/games/{id}")
    public Optional<Game> getGameById(@PathVariable Long id) {
        Optional<Game> game = gameRepository.findById(id);
        return game;
    }

    @GetMapping("api/games/title/{title}")
    public List<Game> getGamesByTitle(@PathVariable String title) {
        List<Game> games = gameRepository.findByTitleContaining(title);
        return games;
    }

    @PostMapping("/api/games")
    public ResponseEntity<Game> createGame(@RequestBody Game game) {
        try {
            Game newGame = gameRepository.save(new Game(game.title, game.price, game.description, game.rating, game.coverurl));
            return new ResponseEntity<>(newGame, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/api/games/{id}")
    public ResponseEntity<HttpStatus> deleteGame(@PathVariable Long id) {
        try {
            gameRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}