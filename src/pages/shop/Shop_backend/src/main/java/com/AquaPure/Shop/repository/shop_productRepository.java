package com.AquaPure.Shop.repository;

import org.springframework.data.repository.CrudRepository;

import com.AquaPure.Shop.model.shop_product;

public interface shop_productRepository extends CrudRepository<shop_product,Long>{
//	shop_product findByproductID(int id);
}
