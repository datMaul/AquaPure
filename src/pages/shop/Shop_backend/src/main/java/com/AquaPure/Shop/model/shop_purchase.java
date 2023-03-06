package com.AquaPure.Shop.model;

import java.io.Serializable;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "shop_purchase_history")
@EntityListeners(AuditingEntityListener.class)
public class shop_purchase implements Serializable{
    private static final long serialVersionUID = 1L;
    @Id
    @Column(unique=true)
    int purchase_id;
    int user_id;
    int product_id;

    public shop_purchase(){
        super();
    }
    public shop_purchase(int purchase_id,int user_id, int product_id){
        super();
        this.purchase_id = purchase_id;
        this.user_id = user_id;
        this.product_id = product_id;
    }
    public int getPurchase_id() {
        return purchase_id;
    }
    public void setPurchase_id(int purchase_id) {
        this.purchase_id = purchase_id;
    }
    public int getUser_id() {
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
    public int getProduct_id() {
        return product_id;
    }
    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    
    
}
