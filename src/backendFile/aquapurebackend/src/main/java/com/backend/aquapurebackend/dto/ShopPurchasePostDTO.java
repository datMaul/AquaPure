package com.backend.aquapurebackend.dto;

public class ShopPurchasePostDTO {
    int purchase_id;
    int userid;
    int product_id;
    int quantity;
    public ShopPurchasePostDTO(int purchase_id, int userid, int product_id, int quantity){
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
    public void setUser_id(int user_id) {
        this.userid = user_id;
    }
    public int getProduct_id() {
        return product_id;
    }
    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

}