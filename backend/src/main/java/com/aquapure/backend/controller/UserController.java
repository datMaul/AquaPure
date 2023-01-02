package com.aquapure.backend.controller;
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

import com.aquapure.backend.dto.UserPostDTO;
import com.aquapure.backend.model.User;
import com.aquapure.backend.service.UserService;


@RestController  
public class UserController {
	
	@Autowired
	UserService userService;


	// Get All Users
    @GetMapping("/user")
    public List<User> getUsers() {
        return userService.getUsers();
    }
    
    @PostMapping("/user")
    public ResponseEntity<Optional<User>> addUser(@RequestBody UserPostDTO newUserDTO) {
    	
    	if (newUserDTO.getName()==null || 
    		newUserDTO.getEmail()==null ||
    		newUserDTO.getPassword()==null ||
    		newUserDTO.getUserType() == null) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }
    	
    	User newUser = new User(userService.incCurrentID(),newUserDTO.getName(), 
    			                 newUserDTO.getEmail(), newUserDTO.getPassword(), newUserDTO.convertType());
    	userService.addUser(newUser);
    	return new ResponseEntity<>(Optional.ofNullable(newUser),HttpStatus.CREATED);

    }
	 
    
    // Get User by ID
    @GetMapping("/user/{id}")
    public Optional<User> getUserById(@PathVariable(value = "id") int Id) {
        return Optional.ofNullable(userService.findByID(Id));
    }
    
    
    //Delete a User by ID
    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable(value = "id") int Id) {
        if (userService.deleteUser(Id) == true)
        		 return "User Deleted"; 
    	return "Delete error";
    }
    
    //Get User by Email
    @GetMapping("/user/findByEmail")
    public Optional<User> getUserByEmail(@RequestParam String email) {
    	return Optional.ofNullable(userService.findByEmail(email));
    }

}
