package com.example.demo.model;

import com.example.demo.UserType;

//Let's create a simple User class
//In Spring Data we will look at how to persist this in a database
public class User {

	int id;
	String name;
	String email;
	String password;
	UserType userType;
	
	public User(int id, String name, String email, String password, UserType userType) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.userType = userType;
	}
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public UserType getUserType() {
		return userType;
	}


	public void setUserType(UserType userType) {
		this.userType = userType;
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", userType="
				+ userType + "]";
	}
	
	
}
