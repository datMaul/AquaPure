package com.backend.aquapurebackend.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend.aquapurebackend.repository.DonationRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/donations")
public class DonationController {

    @Autowired
  private DonationRepository donationRepository;
  
  @PostMapping("/DonationForm")
  public ResponseEntity<String> handleDonation(@RequestBody DonationData form) {
    // Do something with the form data (e.g. save to a database)
    System.out.println(form.getAmount());
    System.out.println(form.getFullName());
    System.out.println(form.getEmail());
    System.out.println(form.getCharity());
    System.out.println(form.getCardName());
    System.out.println(form.getCreditCardNumber());
    System.out.println(form.getExpDate());
    
    donationRepository.save(form);
    // Return a response indicating success
    return ResponseEntity.ok("Donation received!");
    //ResponseEntity.status(HttpStatus.CREATED).body("Donation created successfully");
  }
  
  public static class DonationForm {
    private String fullName;
    private String email;
    private String charity;
    private int amount;
    private String cardName;
    private String creditCardNumber;
    private String expDate;
    
    // Getters and setters omitted for brevity
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
}
