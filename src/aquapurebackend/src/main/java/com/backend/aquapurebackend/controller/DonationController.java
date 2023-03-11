package com.backend.aquapurebackend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DonationController {

    @PostMapping("/donations/DonationForm")
    public String receiveDonation(@RequestBody DonationData donationData) {
        // process the donation data, for example:
        System.out.println("Received donation: " + donationData.toString());
        return "Thank you for your donation!";
    }

    private static class DonationData {
        public String charity;
        public String phone_no;
        public String email;
        public double price;

        @Override
        public String toString() {
            return "DonationData{" +
                    "charity='" + charity + '\'' +
                    ", phone_no='" + phone_no + '\'' +
                    ", email='" + email + '\'' +
                    ", price=" + price +
                    '}';
        }
    }
}
