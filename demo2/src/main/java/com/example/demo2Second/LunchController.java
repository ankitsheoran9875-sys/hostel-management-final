package com.example.demo2Second;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@CrossOrigin(origins = "*")
public class LunchController {

    @Autowired
    private LunchRepository repo;

    @PostMapping("/addLunch")
    public String addLunch(@RequestBody Lunch lunch) {

        LocalDate today = LocalDate.now();

        if (repo.existsByUsernameAndDate(lunch.getUsername(), today)) {
            return "Already Taken Today";
        }

        lunch.setDate(today);
        repo.save(lunch);

        return "Lunch Recorded";
    }
}