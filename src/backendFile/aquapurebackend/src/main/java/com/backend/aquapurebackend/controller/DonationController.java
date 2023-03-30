package com.backend.aquapurebackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend.aquapurebackend.model.DonationData;
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

            // // Return a response indicating success and include the form.fullName in the response body
            // return ResponseEntity.ok("Donation received! " + form.getFullName());

        } else if (form.getToken() != null) {
            System.out.println("Token received: " + form.getToken());
            System.out.println("Charity: " + form.getCharity());
        }

        // Return a response indicating success
        return ResponseEntity.ok("Donation received!");
        //ResponseEntity.status(HttpStatus.CREATED).body("Donation created successfully");
    }

    @GetMapping("/Invoice")
    public ResponseEntity<String> getFullNameOfLastDonation() {
        List<DonationData> donations = donationRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
        if (!donations.isEmpty()) {
            DonationData lastDonation = donations.get(0);
            return ResponseEntity.ok(lastDonation.getFullName());
        } else {
            return ResponseEntity.notFound().build();
        }
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
}
