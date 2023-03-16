package com.backend.aquapurebackend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Unsucessful to find the User ID: "+ id);
    }
}
