package com.rero.CDPR.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.persistence.*;

@JsonPropertyOrder({"id", "title", "price", "description", "rating", "coverurl"})
@Entity
@Table(name = "games")
public class Game {
    @JsonProperty("id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    public Game(String title, int price, String description, int rating, String coverurl) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.rating = rating;
        this.coverurl = coverurl;
    }

    public Game() {

    }
}
