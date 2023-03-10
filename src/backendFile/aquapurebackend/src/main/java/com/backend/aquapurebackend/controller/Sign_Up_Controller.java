package com.backend.aquapurebackend.controller;

import com.backend.aquapurebackend.exception.UserNotFoundException;
import com.backend.aquapurebackend.model.SignUp;
import com.backend.aquapurebackend.repository.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import com.backend.aquapurebackend.util.JwtUtil;


import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
public class Sign_Up_Controller {
    @Autowired
    private SignUpRepository signUpRepository;
    @Autowired
    private JwtUtil jwtUtil;

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
    @PutMapping("/User/{id}")
    SignUp updateUser(@RequestBody SignUp newUser,@PathVariable Long id){
        return signUpRepository.findById(id)
                .map(user -> {
                    user.setFirstName(newUser.getFirstName());
                    user.setLastName(newUser.getLastName());
                    user.seteMail(newUser.geteMail());
                    user.setPhoneNumber(newUser.getPhoneNumber());
                    user.setDoB(newUser.getDoB());
                    user.setPassword(newUser.getPassword());
                    user.setAddressLine1(newUser.getAddressLine1());
                    user.setAddressLine2(newUser.getAddressLine2());
                    user.setAddressTC(newUser.getAddressTC());
                    user.setAddressPostcode(newUser.getAddressPostcode());
                    user.setAccountType(newUser.getAccountType());
                    return signUpRepository.save(user);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        SignUp user = signUpRepository.findByeMail(loginRequest.getEmail());
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            // generate a JWT token
            String token = jwtUtil.generateToken(user.getUserId());
            return ResponseEntity.ok(new LoginResponse(token, "Login Successful", user.getUserId(), user.getAccountType()));
        } else {
            throw new UserNotFoundException(user.getUserId());
        }
    }
    @PostMapping("/logout")
    public ResponseEntity<String>logout(@RequestHeader("Authorization")String token){
        jwtUtil.invalidationToken(token);
        return new ResponseEntity<>("Logout Successful",HttpStatus.OK);
    }
    @DeleteMapping("/User/{id}")
    String deleteUser(@PathVariable Long id){
        if(!signUpRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        signUpRepository.deleteById(id);
        return "User Account by id "+id+" is now removed";
    }
}