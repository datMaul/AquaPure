package com.backend.aquapurebackend.repository;

import com.backend.aquapurebackend.model.DonationData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonationRepository extends JpaRepository<DonationData, Long> {
}
