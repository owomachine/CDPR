package com.rero.CDPR.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rero.CDPR.model.Game;

public interface GameRepository extends JpaRepository<Game, Long> {
    List<Game> findByTitleContaining(String title);

}