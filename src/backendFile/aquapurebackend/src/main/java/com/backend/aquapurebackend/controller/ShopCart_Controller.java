package com.backend.aquapurebackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.aquapurebackend.dto.ShopCartPostDTO;
import com.backend.aquapurebackend.model.ShopCart;
import com.backend.aquapurebackend.repository.ShopCartRepository;
import com.backend.aquapurebackend.service.ShopCartService;

@CrossOrigin
@RestController 
public class ShopCart_Controller {
    @Autowired
	ShopCartService cartService;
    ShopCartRepository cartRep;
	
	@GetMapping("/item")
	public List<ShopCart> get_item()
	{
		return cartService.getItems();
		
	}
	
	@PostMapping("/item")
	public ResponseEntity<Optional<ShopCart>> additem(@RequestBody ShopCartPostDTO newItemDTO) {
    	
//    	if (newItemDTO.getId()==null) {
//            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
//        }
        ShopCart cart = new ShopCart(newItemDTO.getId(),newItemDTO.getUser_id(),newItemDTO.getProduct_id(),newItemDTO.getquantity());
    	cartService.addItems(cart);
    	return new ResponseEntity<>(Optional.ofNullable(cart),HttpStatus.CREATED);
	}
	
	//get by id
	@GetMapping("/item/{id}")
    public Optional<ShopCart> getItemById(@PathVariable(value = "id") int Id) {
    	return cartService.findByID(Id);
    }
	
	@DeleteMapping("/item/{id}")
    public String deleteItem(@PathVariable(value = "id") int Id) {
		cartService.deleteItem(Id);
		return "item removed from cart";
	}

}
