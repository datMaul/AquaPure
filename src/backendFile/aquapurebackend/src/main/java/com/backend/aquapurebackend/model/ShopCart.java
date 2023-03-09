package com.backend.aquapurebackend.model;
import java.io.Serializable;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "shop_cart")
@EntityListeners(AuditingEntityListener.class)
public class ShopCart implements Serializable {
    private static final long serialVersionUID = 1L;
	@Id
	@Column(unique=true)
	int id;
	@Column(unique=false)
	int userid;
	
	int product_id;
	
	int quantity;
	
	public ShopCart(){
		super();
	}
	
	public ShopCart(int id, int userid, int product_id, int quantity) {
		super();
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

	public void setUser_id(int user_id) {
		this.userid = user_id;
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
