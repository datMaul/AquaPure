package com.AquaPure.Shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.AquaPure.Shop.model.*;

import com.AquaPure.Shop.repository.shop_cartRepository;

@Service
public class shop_cartService {
	@Autowired
	shop_cartRepository cartRepository;
	
	static List <shop_cart> itemList;
	int currentID;
	
	public shop_cartService() {
		super();
	}
	
	public List<shop_cart> getItems(){
		return(List<shop_cart>) cartRepository.findAll();
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
	
	public void addItems(shop_cart newItem) {
		cartRepository.save(newItem);
	}
	
	public Optional<shop_cart> findByID(int id){
		return cartRepository.findById((long) id);
	}
	
	public void deleteItem(int id) {
		cartRepository.deleteById((long) id);
		
	}
	
	
}
