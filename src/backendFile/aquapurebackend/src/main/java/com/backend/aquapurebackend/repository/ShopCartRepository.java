package com.backend.aquapurebackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.backend.aquapurebackend.model.ShopCart;

public interface ShopCartRepository extends CrudRepository<ShopCart,Long> {
    
}
