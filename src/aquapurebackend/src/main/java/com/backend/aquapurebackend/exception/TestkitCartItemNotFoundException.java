package com.backend.aquapurebackend.exception;

public class TestkitCartItemNotFoundException extends RuntimeException{
    public TestkitCartItemNotFoundException(Integer id){
        super("Unsucessful to find the Test Kit ID: "+ id);
    }
}
