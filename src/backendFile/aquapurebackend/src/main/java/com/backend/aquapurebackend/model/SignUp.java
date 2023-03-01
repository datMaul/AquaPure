package com.backend.aquapurebackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "sign_up")
public class SignUp {
    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Long userId;
    private String FirstName;
    private String LastName;
    private String eMail;
    private String PhoneNumber;
    private String DoB;
    private String Password;
    private String AddressLine1;
    private String AddressLine2;
    private String AddressTC;
    private String AddressPostcode;
    private String AccountType;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public String getPhoneNumber() {
        return PhoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        PhoneNumber = phoneNumber;
    }

    public String getDoB() {
        return DoB;
    }

    public void setDoB(String doB) {
        DoB = doB;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getAddressLine1() {
        return AddressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        AddressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return AddressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        AddressLine2 = addressLine2;
    }

    public String getAddressTC() {
        return AddressTC;
    }

    public void setAddressTC(String addressTC) {
        AddressTC = addressTC;
    }

    public String getAddressPostcode() {
        return AddressPostcode;
    }

    public void setAddressPostcode(String addressPostcode) {
        AddressPostcode = addressPostcode;
    }

    public String getAccountType() {
        return AccountType;
    }

    public void setAccountType(String accountType) {
        AccountType = accountType;
    }

}
