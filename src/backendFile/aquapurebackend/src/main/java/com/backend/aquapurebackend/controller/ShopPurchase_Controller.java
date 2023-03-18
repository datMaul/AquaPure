package com.backend.aquapurebackend.controller;

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

import com.backend.aquapurebackend.dto.ShopPurchasePostDTO;
import com.backend.aquapurebackend.model.ShopPurchase;
import com.backend.aquapurebackend.service.ShopPurchaseService;

import org.springframework.http.HttpStatus;

@CrossOrigin
@RestController
public class ShopPurchase_Controller {
    @Autowired
    ShopPurchaseService purchaseService;

    @GetMapping("/history")
    public List<ShopPurchase> get_purchase() {
        return purchaseService.getHistory();

    }

    // get by id
    @GetMapping("/history/{id}")
    public Optional<ShopPurchase> getPurchaseByID(@PathVariable(value = "id") int Id) {
        return purchaseService.findByID(Id);
    }

    @PostMapping("/history")
    public ResponseEntity<Optional<ShopPurchase>> addPurchase(@RequestBody ShopPurchasePostDTO newPurchaseDTO) {
        ShopPurchase purchase = new ShopPurchase(newPurchaseDTO.getPurchase_id(), newPurchaseDTO.getUser_id(),
                newPurchaseDTO.getProduct_id());
        purchaseService.add_Purchase(purchase);
        return new ResponseEntity<>(Optional.ofNullable(purchase), HttpStatus.CREATED);
    }

    @DeleteMapping("/history/{id}")
    public String deletePurchase(@PathVariable(value = "id") int Id) {
        purchaseService.deletePurchase(Id);
        return ("purchase removed from history, no refund");

    }
}