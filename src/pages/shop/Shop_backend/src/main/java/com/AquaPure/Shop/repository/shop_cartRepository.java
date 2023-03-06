package com.AquaPure.Shop.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.AquaPure.Shop.model.shop_cart;
import com.AquaPure.Shop.model.shop_product;

public interface shop_cartRepository extends CrudRepository<shop_cart,Long>{
//	shop_cart findByid(int id);
}
