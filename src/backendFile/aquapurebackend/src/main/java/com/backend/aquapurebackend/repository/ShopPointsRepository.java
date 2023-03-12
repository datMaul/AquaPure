package com.backend.aquapurebackend.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.backend.aquapurebackend.model.ShopPoints;

public interface ShopPointsRepository extends CrudRepository<ShopPoints,Long>{
    Optional<ShopPoints> findByemail(String email);
}
