package com.backend.aquapurebackend.exception;

public class MapRecordNotFoundException extends RuntimeException {
    public MapRecordNotFoundException(Long id){
        super("Unsucessful to find the Map Record ID: "+ id);
    }
}
