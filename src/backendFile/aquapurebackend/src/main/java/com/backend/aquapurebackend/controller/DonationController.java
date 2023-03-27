package com.backend.aquapurebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/donations")
public class DonationController {
  
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DonationController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

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
    
    // Insert the form data into the database
    String sql = "INSERT INTO donations (full_name, email, charity, amount, card_name, credit_card_number, exp_date, created_at) " +
    "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    int rowsAffected = jdbcTemplate.update(
    sql,
    form.getFullName(),
    form.getEmail(),
    form.getCharity(),
    form.getAmount(),
    form.getCardName(),
    form.getCreditCardNumber(),
    form.getExpDate(),
    new Timestamp(System.currentTimeMillis())
    );

    if (rowsAffected > 0) {

    };

    // Return a response indicating success
   

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




// @RestController
// public class DonationController {

//     @PostMapping("/donations/aquaDonation")
//     public String receiveDonation(@RequestBody DonationData donationData) {
//         // process the donation data, for example:
//         System.out.println("Received donation: " + donationData.toString());
//         return "Thank you for your donation!";
//     }

//     private static class DonationData {
//         public String charity;
//         public String phone_no;
//         public String email;
//         public double price;

//         @Override
//         public String toString() {
//             return "DonationData{" +
//                     "charity='" + charity + '\'' +
//                     ", phone_no='" + phone_no + '\'' +
//                     ", email='" + email + '\'' +
//                     ", price=" + price +
//                     '}';
//         }
//     }
// }
