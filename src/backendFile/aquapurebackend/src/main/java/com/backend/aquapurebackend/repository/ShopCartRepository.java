package com.backend.aquapurebackend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.backend.aquapurebackend.model.ShopCart;

public interface ShopCartRepository extends CrudRepository<ShopCart,Long> {
    List<ShopCart> findByUserid(int user_id);
}
