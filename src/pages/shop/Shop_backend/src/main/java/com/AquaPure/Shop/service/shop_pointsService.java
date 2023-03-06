package com.AquaPure.Shop.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AquaPure.Shop.model.shop_points;
import com.AquaPure.Shop.repository.shop_pointsRepository;
@Service
public class shop_pointsService {
	@Autowired
	shop_pointsRepository pointsRep;
	
	static List <shop_points> pointList;
	int currentID;
	
	public shop_pointsService() {
		super();
	}
	public List<shop_points> getPoints(){
		return(List <shop_points>) pointsRep.findAll();
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
	public Optional<shop_points> findByID(int id){
		return pointsRep.findById((long) id);
	}
}
