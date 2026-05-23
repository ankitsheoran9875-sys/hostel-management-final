package com.example.demo2Second;

import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;

public interface LunchRepository extends JpaRepository<Lunch, Integer> {

    boolean existsByUsernameAndDate(String username, LocalDate date);
}