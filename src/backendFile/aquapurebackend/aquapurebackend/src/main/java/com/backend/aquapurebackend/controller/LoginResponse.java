package com.backend.aquapurebackend.controller;

public class LoginResponse {
    private String token;
    private String message;
    private long userId;
    private String accountType;

    public LoginResponse(String token, String message, long userId, String accountType) {
        this.token = token;
        this.message = message;
        this. userId =userId;
        this.accountType = accountType;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

}
