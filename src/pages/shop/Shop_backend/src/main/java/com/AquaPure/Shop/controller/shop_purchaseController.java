package com.AquaPure.Shop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.AquaPure.Shop.dto.shop_purchasePostDTO;
import com.AquaPure.Shop.model.shop_purchase;
import com.AquaPure.Shop.service.shop_purchaseService;

@CrossOrigin
@RestController
public class shop_purchaseController {
	@Autowired
	shop_purchaseService purchaseService;
	
	@GetMapping("/history")
	public List<shop_purchase> get_purchase()
	{
		return purchaseService.getHistory();
		
	}
		
	//get by id
	@GetMapping("/history/{id}")
    public Optional<shop_purchase> getPurchaseByID(@PathVariable(value = "id") int Id) {
    	return purchaseService.findByID(Id);
    }

    @PostMapping("/history")
    public ResponseEntity<Optional<shop_purchase>> addPurchase(@RequestBody shop_purchasePostDTO newPurchaseDTO){
        shop_purchase purchase = new shop_purchase(newPurchaseDTO.getPurchase_id(),newPurchaseDTO.getUser_id(),newPurchaseDTO.getProduct_id());
        purchaseService.add_Purchase(purchase);
        return new ResponseEntity<>(Optional.ofNullable(purchase),HttpStatus.CREATED);
    }
    @DeleteMapping("/history/{id}")
    public String deletePurchase(@PathVariable(value="id")int Id){
        purchaseService.deletePurchase(Id);
        return("purchase removed from history, no refund");
    }
}
