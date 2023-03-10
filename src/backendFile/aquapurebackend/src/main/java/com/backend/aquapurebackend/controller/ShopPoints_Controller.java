package com.backend.aquapurebackend.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.backend.aquapurebackend.model.ShopPoints;
import com.backend.aquapurebackend.service.ShopPointsService;
@CrossOrigin
@RestController 
public class ShopPoints_Controller {
    @Autowired
	ShopPointsService pointsService;
	
	@GetMapping("/points")
	public List<ShopPoints> get_points()
	{
		return pointsService.getPoints();
		
	}
		
	//get by id
	@GetMapping("/points/{id}")
    public Optional<ShopPoints> getItemById(@PathVariable(value = "id") int Id) {
    	return pointsService.findByID(Id);
    }
	
	

}
