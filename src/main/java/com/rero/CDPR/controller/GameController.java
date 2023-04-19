package com.rero.CDPR.controller;

import com.rero.CDPR.model.Game;
import com.rero.CDPR.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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

}