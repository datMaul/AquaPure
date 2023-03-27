package com.backend.aquapurebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.aquapurebackend.controller.DonationData;

@Repository
public interface DonationRepository extends JpaRepository<DonationData, Long >{

} 
