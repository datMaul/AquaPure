package com.AquaPure.Shop.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.AquaPure.Shop.model.*;
import com.AquaPure.Shop.repository.shop_productRepository;

@Service
public class shop_productService {
	
	@Autowired
	shop_productRepository shop_productRep;
	
	static List <shop_product> productList;
	int currentID;

	public shop_productService() {
		super();
	}
	

	public List<shop_product> getProducts(){
		return(List<shop_product>) shop_productRep.findAll();
	}


	public int getCurrentID() {
		return currentID;
	}

	public void setCurrentID(int currentID) {
		this.currentID = currentID;
	}
	
	public int incCurrentID() {
		currentID += 1;
		return currentID;
	}
	
	public void addProduct(shop_product newProduct) {
		productList.add(newProduct);
	}
	
	public shop_product findByID(int id) {
		 Iterator<shop_product> it = productList.iterator();
		 while (it.hasNext()) {
			 shop_product product = it.next();
			 if (product.getProductID() == id) {
				 return product;			 	
			 }
		 }
		return null;
	}
	
	public boolean deleteProduct(int id) {
		shop_product product = findByID(id);
		return productList.remove(product);
	}
	
//	public shop_product findByName(String name) {
//		Iterator<shop_product> it = productList.iterator();
//		 while (it.hasNext()) {
//			 shop_product product = it.next();
//			 if (product.getProduct_name().contentEquals(name)) {
//				 return product;
//			 }
//
//		 }
//		return null;
//
//	}
}