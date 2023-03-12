package com.backend.aquapurebackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.backend.aquapurebackend.model.ShopProduct;

public interface ShopProductRepository extends CrudRepository<ShopProduct,Long>{
    
}
