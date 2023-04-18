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

    @Column(name = "price")
    public int price;

    @Column(name = "description")
    public String description;

    @Column(name = "rating")
    public int rating;

    @Column(name = "coverurl")
    public String coverurl;

    public Game() {

    }
}
