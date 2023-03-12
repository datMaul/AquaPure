package com.backend.aquapurebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.aquapurebackend.Service.Donation;
import com.backend.aquapurebackend.repository.DonationRepository;

@RestController
public class DonationController {

    @Autowired
    private DonationRepository donationRepository;


  @PostMapping("/donation/DonationForm")
  public ResponseEntity<String> processDonation(@RequestBody Donation donationData) {
    // Save donation data to your database here
    try {
        Donation donation = new Donation(null, null, null, 0);
        donation.setFullName(donationData.getFullName());
        donation.setEmail(donationData.getEmail());
        donation.setCharity(donationData.getCharity());
        donation.setAmount(donationData.getAmount());
        donation.setCardName(donationData.getCardName());
        donation.setCreditCardNumber(donationData.getCreditCardNumber());
        donation.setExpDate(donationData.getExpDate());

        donationRepository.save(donation);

        return ResponseEntity.ok("Donation processed successfully.");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing donation.");
    }
  }

}



// @RestController
// public class DonationController {

//     @PostMapping("/donations/DonationForm")
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
