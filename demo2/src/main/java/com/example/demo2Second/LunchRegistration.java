package com.example.demo2Second;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class LunchRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String username;
    private String name;
    private String room;
    private String college;
    private LocalDate date;


    // getters and setters

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getRoom() { return room; }
    public void setRoom(String room) { this.room = room; }

    public String getCollege() { return college; }
    public void setCollege(String college) { this.college = college; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    // getter and setter for taken/returned
    private boolean taken=false;
    private boolean returned=false;

    public boolean isTaken() {
        return taken;
    }

    public void setTaken(boolean taken) {
        this.taken = taken;
    }

    public boolean isReturned() {
        return returned;
    }

    public void setReturned(boolean returned) {
        this.returned = returned;
    }
}