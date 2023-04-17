package com.rero.CDPR.model;

import javax.persistence.*;

@Entity
@Table(name = "games")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long id;

    @Column(name = "title")
    public String title;

    @Column(name = "description")
    public String description;

    public Game() {

    }
}
