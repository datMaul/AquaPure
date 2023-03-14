package com.backend.aquapurebackend.model;
import jakarta.persistence.*;
@Entity
public class TestKitEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;
    private int TestKitID;
    private String email;
    
    public TestKitEntry() {
    }
    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public int getTestKitID() {
        return TestKitID;
    }
    public void setTestKitID(int Unique_ID) {
        TestKitID = Unique_ID;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}