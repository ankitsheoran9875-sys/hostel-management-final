package com.example.demo2Second;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.time.LocalDate;

@RestController
@CrossOrigin(origins = "*")
public class LunchRegistrationController {

    @Autowired
    private LunchRegistrationRepository repo;

    @PostMapping("/registerLunch")
    public String registerLunch(@RequestBody LunchRegistration reg) {

        LocalDate today = LocalDate.now();

        if (repo.existsByUsernameAndDate(reg.getUsername(), today)) {
            return "Already Registered Today";
        }

        reg.setDate(today);
        repo.save(reg);

        return "Lunch Registered Successfully";
    }

    @GetMapping("/checkLunch/{username}")
    public boolean checkLunch(@PathVariable String username) {
    return repo.existsByUsernameAndDate(username, LocalDate.now());
    }

    @GetMapping("/lunchCount")
    public long getTodayCount() {

    LocalDate today = LocalDate.now();

    return repo.countByDate(today);
    }
   
   @GetMapping("/allLunch")
    public List<LunchRegistration> getTodayLunch() {
    return repo.findByDate(LocalDate.now());
   }

   @PostMapping("/markTaken/{id}")
    public String markTaken(@PathVariable int id) {

        LunchRegistration reg = repo.findById(id).orElse(null);

        if (reg == null) {
            return "Record Not Found";
        }

        reg.setTaken(true);

        repo.save(reg);

        return "Taken Updated";
    }

    @PostMapping("/markReturned/{id}")
    public String markReturned(@PathVariable int id) {

        LunchRegistration reg = repo.findById(id).orElse(null);

        if (reg == null) {
            return "Record Not Found";
        }

        reg.setReturned(true);

        repo.save(reg);

        return "Returned Updated";
    }
}