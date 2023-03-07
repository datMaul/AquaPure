package com.AquaPure.Shop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.AquaPure.Shop.dto.shop_cartPostDTO;
import com.AquaPure.Shop.model.shop_cart;
import com.AquaPure.Shop.service.shop_cartService;

@CrossOrigin
@RestController  
public class shop_cartController {
	@Autowired
	shop_cartService cartService;
	
	@GetMapping("/item")
	public List<shop_cart> get_item()
	{
		return cartService.getItems();
		
	}
	
	@PostMapping("/item")
	public ResponseEntity<Optional<shop_cart>> additem(@RequestBody shop_cartPostDTO newItemDTO) {
    	
//    	if (newItemDTO.getId()==null) {
//            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
//        }
    	shop_cart cart = new shop_cart(newItemDTO.getId(),newItemDTO.getUser_id(),newItemDTO.getProduct_id(),newItemDTO.getquantity());
    	cartService.addItems(cart);
    	return new ResponseEntity<>(Optional.ofNullable(cart),HttpStatus.CREATED);
	}
	
	//get by id
	@GetMapping("/item/{id}")
    public Optional<shop_cart> getItemById(@PathVariable(value = "id") int Id) {
    	return cartService.findByID(Id);
    }
	
	@DeleteMapping("/item/{id}")
    public String deleteItem(@PathVariable(value = "id") int Id) {
		cartService.deleteItem(Id);
		return "item removed from cart";
	}
	
}
