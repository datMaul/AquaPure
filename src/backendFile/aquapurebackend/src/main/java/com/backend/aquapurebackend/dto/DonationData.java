package com.backend.aquapurebackend.dto;

public class DonationData {
    private String fullName;
    private String email;
    private String charity;
    private Float amount;
    private String cardName;
    private Double creditCardNumber;
    private String expDate;
        
        public DonationData(String fullName, String email, String charity, Float amount, String cardName, Double creditCardNumber, String expDate) {
            this.fullName = fullName;
            this.email = email;
            this.charity = charity;
            this.amount = amount;
            this.cardName = cardName;
            this.creditCardNumber = creditCardNumber;
            this.expDate = expDate;
        }
        
        public String getCharity() {
            return charity;
        }
        
        public void setCharity(String charity) {
            this.charity = charity;
        }
        
        public String getFullName() {
            return fullName;
        }
        
        public void setFullName(String fullName) {
            this.fullName = fullName;
        }
        
        public String getEmail() {
            return email;
        }
        
        public void setEmail(String email) {
            this.email = email;
        }
        
        public double getAmount() {
            return amount;
        }
        
        public void setPrice(Float amount) {
            this.amount = amount;
        }

        public String getCardName() {
            return cardName;
        }

        public void setCardName(String cardName) {
            this.cardName = cardName;
        }

        public double getCreditCardNumber() {
            return creditCardNumber;
        }

        public void setCreditCardNumber(Double creditCardNumber) {
            this.creditCardNumber = creditCardNumber;
        }

        public String getExpDate() {
            return expDate;
        }

        public void setExpDate(String expDate) {
            this.expDate = expDate;
        };

}
