package com.AquaPure.Shop.controller;

import java.util.*;


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

import com.AquaPure.Shop.dto.shop_productPostDTO;
//import com.AquaPure.Shop.dto.UserPostDTO;
import com.AquaPure.Shop.model.shop_product;
import com.AquaPure.Shop.service.shop_productService;



@CrossOrigin
@RestController  
public class shop_productController {
	
	@Autowired
	shop_productService productService;


	// ToDo: Implement GET /user
	@GetMapping("/product")
	public List<shop_product> get_product()
	{
		return productService.getProducts();
		
	}
    //ToDo: Implement POST /user
    @PostMapping("/product")
    public ResponseEntity<Optional<shop_product>> addProduct(@RequestBody shop_productPostDTO newProductDTO) {
    	
    	if (newProductDTO.getProduct_name()==null) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }
    	
    	
    	
    	shop_product newProduct = new shop_product(productService.incCurrentID(), newProductDTO.getProduct_name(), newProductDTO.getProduct_price(), newProductDTO.getProduct_desc(), newProductDTO.getCatagoryID());
    	productService.addProduct(newProduct);
    	return new ResponseEntity<>(Optional.ofNullable(newProduct),HttpStatus.CREATED);
        //Otherwise create new user from newUserDTO's attributes, 
        //Add the user through UserService
        //Return response entity with the new user and CREATED status
    }
	 
    
    //Implement GET /user/{id}
    //You will need to use @PathVariable annotation
    @GetMapping("/product/{id}")
    public Optional<shop_product> getProductById(@PathVariable(value = "id") int Id) {
    	return Optional.ofNullable(productService.findByID(Id));
    }
    
    
    //Implement DELETE /user{id}
    @DeleteMapping("/product/{id}")
    public String deleteProduct(@PathVariable(value = "id") int Id) {
    	if(productService.deleteProduct(Id) == true) {
    		return "product Deleted";
    	}
    	return "Delete error";
    }
}
