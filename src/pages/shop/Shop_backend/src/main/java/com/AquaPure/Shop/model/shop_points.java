package com.AquaPure.Shop.model;

import java.io.Serializable;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.*;

@Entity
@Table(name = "scores")
@EntityListeners(AuditingEntityListener.class)
public class shop_points implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@Column(unique=true)
	int user_ID;
	int score;
	
	public shop_points() {
		super();
	}
	public shop_points(int user_ID, int score) {
		super();
		this.user_ID = user_ID;
		this.score = score;
	}
	public int getUser_ID() {
		return user_ID;
	}
	public void setUser_ID(int user_ID) {
		this.user_ID = user_ID;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	
}
