package com.backend.aquapurebackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/donations")
public class DonationController {

    @PostMapping("/Invoice")
    public ResponseEntity<String> processDonation(@RequestBody DonationData donationData) {
        // Handle the donation data here

        // Code to process donation data goes here
        //  String sql = "INSERT INTO donations (fullName, email, charity, amount, payment_method) " +
        //  "VALUES ('" + donationData.getFullName() + "', '" + donationData.getEmail() + "', '" +
        //  donationData.getCharity() + "', " + donationData.getAmount() + "')";

         // Code to execute SQL query and insert donation data into database goes here

        System.out.println(donationData);
        return ResponseEntity.status(HttpStatus.CREATED).body("Donation created successfully");
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