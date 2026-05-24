package com.example.demo2Second;


import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;


public interface LunchRegistrationRepository extends JpaRepository<LunchRegistration, Integer> {

    boolean existsByUsernameAndDate(String username, LocalDate date);
    long countByDate(LocalDate date);
    List<LunchRegistration> findByDate(LocalDate date);

}
