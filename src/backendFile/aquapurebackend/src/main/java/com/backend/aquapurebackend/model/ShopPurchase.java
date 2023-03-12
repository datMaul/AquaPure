package com.backend.aquapurebackend.model;
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
public class ShopPurchase implements Serializable{
    private static final long serialVersionUID = 1L;
    @Id
    @Column(unique=true)
    int purchase_id;
    @Column
    int userid;
    int product_id;
    int quantity;

    public ShopPurchase(){
        super();
    }
    public ShopPurchase(int purchase_id,int userid, int product_id, int quantity){
        super();
        this.purchase_id = purchase_id;
        this.userid = userid;
        this.product_id = product_id;
        this.quantity = quantity;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public int getPurchase_id() {
        return purchase_id;
    }
    public void setPurchase_id(int purchase_id) {
        this.purchase_id = purchase_id;
    }
    public int getUser_id() {
        return userid;
    }
    public void setUser_id(int userid) {
        this.userid = userid;
    }
    public int getProduct_id() {
        return product_id;
    }
    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }
}
