package com.AquaPure.Shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AquaPure.Shop.repository.shop_purchaseRepository;
import com.AquaPure.Shop.model.shop_purchase;

@Service
public class shop_purchaseService {
    
    @Autowired
    shop_purchaseRepository purchaseRep;

    static List <shop_purchase> historyList;
    int currentID;

    public shop_purchaseService(){
        super();
    }
    public List<shop_purchase> getHistory(){
        return(List<shop_purchase>) purchaseRep.findAll();
    }
    public int getCurrentID(){
        return currentID;
    }
    public void setCurrentID(){
        this.currentID = currentID;
    }
    public int incCurrentID(){
        currentID += 1;
        return currentID;
    }

    public void add_Purchase(shop_purchase newPurchase){
        purchaseRep.save(newPurchase);
    }

    public Optional<shop_purchase> findByID(int id){
        return purchaseRep.findById((long) id);        
        
    }
    public void deletePurchase(int id){
        purchaseRep.deleteById((long) id);
    }


}
