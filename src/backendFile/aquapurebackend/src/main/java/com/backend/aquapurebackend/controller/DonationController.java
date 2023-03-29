package com.backend.aquapurebackend.controller;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend.aquapurebackend.model.DonationData;
import com.backend.aquapurebackend.repository.DonationRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/donations")
public class DonationController {

    private DonationRepository donationRepository;

    @PostMapping("/DonationForm")
    public ResponseEntity<String> handleDonation(@RequestBody DonationData form) {
        // Do something with the form data (e.g. save to a database)

        if (form.getFullName() != null &&
            form.getEmail() != null &&
            form.getCharity() != null &&
            form.getAmount() != 0 &&
            form.getCardName() != null &&
            form.getCreditCardNumber() != null &&
            form.getExpDate() != null) {
            
            System.out.println("Full Name: " + form.getFullName());
            System.out.println("Email: " + form.getEmail());
            System.out.println("Charity: " + form.getCharity());
            System.out.println("Amount: " + form.getAmount());
            System.out.println("Card Name: " + form.getCardName());
            System.out.println("Credit Card Number: " + form.getCreditCardNumber());
            System.out.println("Expiration Date: " + form.getExpDate());
            donationRepository.save(form);
        } else if (form.getToken() != null) {
            System.out.println("Token received: " + form.getToken());
            System.out.println("Charity: " + form.getCharity());
        }


        // Return a response indicating success
        return ResponseEntity.ok("Donation received!");
        //ResponseEntity.status(HttpStatus.CREATED).body("Donation created successfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateDonation(@PathVariable Long id, @RequestBody DonationData updatedDonation) {
        Optional<DonationData> optionalDonation = donationRepository.findById(id);
        if (!optionalDonation.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        DonationData donation = optionalDonation.get();
        donation.setAmount(updatedDonation.getAmount());
        donation.setFullName(updatedDonation.getFullName());
        donation.setEmail(updatedDonation.getEmail());
        donation.setCharity(updatedDonation.getCharity());
        donation.setCardName(updatedDonation.getCardName());
        donation.setCreditCardNumber(updatedDonation.getCreditCardNumber());
        donation.setExpDate(updatedDonation.getExpDate());

        donationRepository.save(donation);

        return ResponseEntity.ok("Donation updated!");
    }

  
  public static class DonationForm {
    private String fullName;
    private String email;
    private String charity;
    private int amount;
    private String cardName;
    private String creditCardNumber;
    private String expDate;
    private String token;
    
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
    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
  }
}
