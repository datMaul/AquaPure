package com.backend.aquapurebackend.controller;

public class DonationData {
    private String fullName;
    private String email;
    private String charity;
    private int amount;
    private String cardName;
    private String creditCardNumber;
    private String expDate;

    // Constructor
    public DonationData(String fullName, String email, String charity, int amount,
                        String cardName, String creditCardNumber, String expDate) {
        this.fullName = fullName;
        this.email = email;
        this.charity = charity;
        this.amount = amount;
        this.cardName = cardName;
        this.creditCardNumber = creditCardNumber;
        this.expDate = expDate;
    }

    // Getters and Setters
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCharity() {
        return charity;
    }

    public void setCharity(String charity) {
        this.charity = charity;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getCreditCardNumber() {
        return creditCardNumber;
    }

    public void setCreditCardNumber(String creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }

    public String getExpDate() {
        return expDate;
    }

    public void setExpDate(String expDate) {
        this.expDate = expDate;
    }
}

