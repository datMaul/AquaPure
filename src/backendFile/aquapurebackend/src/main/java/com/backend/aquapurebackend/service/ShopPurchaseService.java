package com.backend.aquapurebackend.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.aquapurebackend.model.ShopPurchase;
import com.backend.aquapurebackend.repository.ShopPurchaseRepository;


@Service
public class ShopPurchaseService {
        
    @Autowired
    ShopPurchaseRepository purchaseRep;

    static List <ShopPurchase> historyList;
    int currentID;

    public ShopPurchaseService(){
        super();
    }
    public List<ShopPurchase> getHistory(){
        return(List<ShopPurchase>) purchaseRep.findAll();
    }
    public int getCurrentID(){
        return currentID;
    }
    public void setCurrentID(int currentID){
        this.currentID = currentID;
    }
    public int incCurrentID(){
        currentID += 1;
        return currentID;
    }

    public void add_Purchase(ShopPurchase newPurchase){
        purchaseRep.save(newPurchase);
    }

    public Optional<ShopPurchase> findByID(int id){
        return purchaseRep.findById((long) id);        
        
    }
    public List<ShopPurchase> findByUserID(int user_id){
		return purchaseRep.findByUserid(user_id);
	}
    public void deletePurchase(int id){
        purchaseRep.deleteById((long) id);
    }

}
