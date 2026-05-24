package com.example.demo2Second;
import java.util.List;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    private StudentRepository repo;

    @PostMapping("/addStudent")
    public String addStudent(@RequestBody Student student) {
        repo.save(student);
        return "Student Saved Successfully";
    }

    @GetMapping("/students")
    public List<Student> getStudents(){
    return repo.findAll();
}

}