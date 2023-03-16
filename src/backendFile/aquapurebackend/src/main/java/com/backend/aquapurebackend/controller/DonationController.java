package com.backend.aquapurebackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/donations")
public class DonationController {
 
    @PostMapping("/Invoice")
    public ResponseEntity<String> postDonation(@RequestBody DonationController donation) {
        // Process donation request and return response
        return new ResponseEntity<>("Donation successful", HttpStatus.OK);
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
