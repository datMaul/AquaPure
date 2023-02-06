package com.backend.aquapurebackend.exception;

public class TestKitNotFoundException extends RuntimeException{
    public TestKitNotFoundException(Long id){
        super("Unsucessful to find the Test Kit ID: "+ id);
    }
}
