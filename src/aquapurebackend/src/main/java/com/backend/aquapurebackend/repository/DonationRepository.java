package com.backend.aquapurebackend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.aquapurebackend.Service.DonationService;

public interface DonationRepository extends JpaRepository<DonationService, Long> {
    // find a donation by ID
    public DonationService findById(long id);
    
    // find all donations
    public List<DonationService> findAll();
    
    // delete a donation by ID
    public void deleteById(long id);
}
