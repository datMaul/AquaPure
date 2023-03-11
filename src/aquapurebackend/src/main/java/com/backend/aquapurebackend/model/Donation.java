package com.backend.aquapurebackend.model;

public class Donation {
        private String charity;
        private String phoneNo;
        private String email;
        private double price;
        
        public Donation(String charity, String phoneNo, String email, double price) {
            this.charity = charity;
            this.phoneNo = phoneNo;
            this.email = email;
            this.price = price;
        }
        
        public String getCharity() {
            return charity;
        }
        
        public void setCharity(String charity) {
            this.charity = charity;
        }
        
        public String getPhoneNo() {
            return phoneNo;
        }
        
        public void setPhoneNo(String phoneNo) {
            this.phoneNo = phoneNo;
        }
        
        public String getEmail() {
            return email;
        }
        
        public void setEmail(String email) {
            this.email = email;
        }
        
        public double getPrice() {
            return price;
        }
        
        public void setPrice(double price) {
            this.price = price;
        };
}
