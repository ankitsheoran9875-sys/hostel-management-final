package com.example.demo2Second;

import jakarta.persistence.*;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String room;
    private String phone;
    private String college;

    // Getters
    public int getId() { return id; }
    public String getName() { return name; }
    public String getRoom() { return room; }
    public String getPhone() { return phone; }
    public String getCollege() { return college; }

    // Setters
    public void setId(int id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setRoom(String room) { this.room = room; }
    public void setPhone(String phone) { this.phone = phone; }
    public void setCollege(String college) { this.college = college; }
}