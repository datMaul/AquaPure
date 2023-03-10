package com.backend.aquapurebackend.dto;

public class ShopPurchasePostDTO {
    int purchase_id;
    int user_id;
    int product_id;
    public ShopPurchasePostDTO(int purchase_id, int user_id, int product_id){
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
