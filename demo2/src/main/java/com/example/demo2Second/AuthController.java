package com.example.demo2Second;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository repo;

    // LOGIN API
    @PostMapping("/login")
    public User login(@RequestBody User user) {

        User dbUser = repo.findByUsername(user.getUsername());

        if (dbUser != null && dbUser.getPassword().equals(user.getPassword())) {
            return dbUser;
        } else {
            return null;
        }
    }

   public void setRepo(UserRepository repo) {
    this.repo = repo;
}


   public UserRepository getRepo() {
    return repo;
   }

   @GetMapping("/user")
    public User getUser(@RequestParam String username) {
    return repo.findByUsername(username);
}

    @PostMapping("/addUser")
    public String addUser(@RequestBody User user) {

    User existing = repo.findByUsername(user.getUsername());

    if (existing != null) {
        return "Username Already Exists";
    }

    user.setRole("STUDENT");

    repo.save(user);
    return "Student Added Successfully";
   }
   
}