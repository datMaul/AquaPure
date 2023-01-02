package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UserPostDTO;
import com.example.demo.model.User;
import com.example.demo.service.UserService;


@RestController  
public class UserController {
	
	@Autowired
	UserService userService;


	// ToDo: Implement GET /user


    //ToDo: Implement POST /user
    @PostMapping("/user")
    public ResponseEntity<Optional<User>> addUser(@RequestBody UserPostDTO newUserDTO) {
    	
    	if (/*The DTO has any null attributes*/) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }
    	
        //Otherwise create new user from newUserDTO's attributes, 
        //Add the user through UserService
        //Return response entity with the new user and CREATED status
    }
	 
    
    //Implement GET /user/{id}
    //You will need to use @PathVariable annotation
    
    
    //Implement DELETE /user{id}

    
    //Implement GET /user/findByEmail
    //You will need to @RequestParam annotation

}
