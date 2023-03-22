package com.backend.aquapurebackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

public class TestkitCartItemNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(TestKitNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(TestkitCartItemNotFoundException exception) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("Warning", exception.getMessage());
        return errorMap;
    }
}