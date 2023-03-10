package com.backend.aquapurebackend.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.aquapurebackend.model.ShopPoints;
import com.backend.aquapurebackend.repository.ShopPointsRepository;

@Service
public class ShopPointsService {
    @Autowired
	ShopPointsRepository pointsRep;
	
	static List <ShopPoints> pointList;
	int currentID;
	
	public ShopPointsService() {
		super();
	}
	public List<ShopPoints> getPoints(){
		return(List <ShopPoints>) pointsRep.findAll();
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
	public Optional<ShopPoints> findByID(int id){
		return pointsRep.findById((long) id);
	}
	public Optional<ShopPoints> findByEmail(String email){
		return pointsRep.findByemail(email);
	}
}
