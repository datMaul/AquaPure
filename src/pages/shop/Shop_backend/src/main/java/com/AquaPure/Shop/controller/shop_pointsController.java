package com.AquaPure.Shop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.AquaPure.Shop.model.shop_points;
import com.AquaPure.Shop.service.shop_pointsService;


@CrossOrigin
@RestController 
public class shop_pointsController {


 

	@Autowired
	shop_pointsService pointsService;
	
	@GetMapping("/points")
	public List<shop_points> get_points()
	{
		return pointsService.getPoints();
		
	}
		
	//get by id
	@GetMapping("/points/{id}")
    public Optional<shop_points> getItemById(@PathVariable(value = "id") int Id) {
    	return pointsService.findByID(Id);
    }
	
	
	
}

