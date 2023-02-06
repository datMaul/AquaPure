package com.backend.aquapurebackend.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
public class TestkitPurchaseHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private boolean usestatus = false;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private SignUp signUp;

    @ManyToOne
    @JoinColumn(name = "test_kit_id")
    private TestKit testKit;


    public TestkitPurchaseHistory() {
    }

    public TestkitPurchaseHistory(SignUp signUp, TestKit testKit) {
        this.signUp = signUp;
        this.testKit = testKit;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public boolean isUsestatus() {
        return usestatus;
    }

    public void setUsestatus(boolean usestatus) {
        this.usestatus = usestatus;
    }

    public SignUp getSignUp() {
        return signUp;
    }

    public void setSignUp(SignUp signUp) {
        this.signUp = signUp;
    }

    public TestKit getTestKit() {
        return testKit;
    }
}