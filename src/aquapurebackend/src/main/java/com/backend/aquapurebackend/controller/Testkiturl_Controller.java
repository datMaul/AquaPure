package com.backend.aquapurebackend.controller;
import com.backend.aquapurebackend.model.Testkiturl;
import com.backend.aquapurebackend.model.Testkiturl;
import com.backend.aquapurebackend.repository.TestkiturlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class Testkiturl_Controller {

    @Autowired
    private TestkiturlRepository testkiturlRepository;

    @GetMapping("/kiturl")
    public List<Testkiturl> getAllUrlData() {
        return testkiturlRepository.findAll();
    }
}