package com.AquaPure.Shop.model;
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
public class shop_cart implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@Column(unique=true)
	int id;
	
	int user_id;
	
	int product_id;
	
	int quantity;
	
	public shop_cart(){
		super();
	}
	
	public shop_cart(int id, int user_id, int product_id, int quantity) {
		super();
		this.id = id;
		this.user_id = user_id;
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
	
	public int getquantity() {
		return quantity;
	}
	
	public void setquantity(int quant) {
		this.quantity = quant;
	}
	
}
