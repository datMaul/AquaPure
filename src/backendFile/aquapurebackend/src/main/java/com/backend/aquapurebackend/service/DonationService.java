package com.backend.aquapurebackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.backend.aquapurebackend.model.DonationData;
import com.backend.aquapurebackend.repository.DonationRepository;

@Service
public class DonationService {

    @Autowired
    private DonationRepository donationRepository;

    public ResponseEntity<String> handleDonation(DonationData form) {
        // Save the form data to the database
        donationRepository.save(form);

        // Return a response indicating success
        return ResponseEntity.ok("Donation received!");
    }
}