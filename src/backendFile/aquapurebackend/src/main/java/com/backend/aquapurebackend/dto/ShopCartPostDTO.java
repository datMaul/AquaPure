package com.backend.aquapurebackend.dto;


public class ShopCartPostDTO {
    int id;
	int userid;
	int product_id;
	int quantity;
	
	public ShopCartPostDTO(int id, int userid, int product_id, int quantity) {
		this.id = id;
		this.userid = userid;
		this.product_id = product_id;
		this.quantity = quantity;
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
	public int getquantity() {
		return quantity;
	}
	public void setquantity(int quant) {
		this.quantity = quant;
	}

}
