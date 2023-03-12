package com.backend.aquapurebackend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.aquapurebackend.Service.Donation;

public interface DonationRepository extends JpaRepository<Donation, Long> {
    // find a donation by ID
    public Donation findById(long id);
    
    // find all donations
    public List<Donation> findAll();
    
    // delete a donation by ID
    public void deleteById(long id);
}
