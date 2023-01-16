package com.backend.aquapurebackend.controller;

import com.backend.aquapurebackend.exception.UserNotFoundException;
import com.backend.aquapurebackend.model.SignUp;
import com.backend.aquapurebackend.repository.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
public class Sign_Up_Controller {
    @Autowired
    private SignUpRepository signUpRepository;

    @PostMapping("/Sign_Up")
    SignUp newUser(@RequestBody SignUp newUser){
        return signUpRepository.save(newUser);
    }
    @GetMapping("/Sign_Up_log")
    List<SignUp> getAllUsers(){
        return signUpRepository.findAll();
    }
    @GetMapping("/User/{id}")
    SignUp getUserById(@PathVariable Long id){
        return signUpRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }
//    @PutMapping("/User/{id}")
//    SignUp updatUser(@RequestBody SignUp newUser,@PathVariable Long id){
//        return signUpRepository.findById(id)
//                .map(testKit -> {
//                    testKit.setTest_Kit_Name(newTestKit.getTest_Kit_Name());
//                    testKit.setTest_Kit_Price(newTestKit.getTest_Kit_Price());
//                    testKit.setTest_Kit_Stock_Count(newTestKit.getTest_Kit_Stock_Count());
//                    return testKitRepository.save(testKit);
//                }).orElseThrow(()-> new TestKitNotFoundException(id));
//    }
}
