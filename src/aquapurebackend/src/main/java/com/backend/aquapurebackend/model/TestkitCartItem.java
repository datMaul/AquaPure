package com.backend.aquapurebackend.model;

import jakarta.persistence.*;

//testkit_cart_items
@Entity
@Table(name = "testkit_cart_items")
public class TestkitCartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "test_kit_id")
    private TestKit testKit;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private SignUp signUp;

    public TestkitCartItem() {

    }

    private int quantity;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public TestKit getTestKit() {
        return testKit;
    }

    public void setTestKit(TestKit testKit) {
        this.testKit = testKit;
    }

    public SignUp getSignUp() {
        return signUp;
    }

    public void setSignUp(SignUp signUp) {
        this.signUp = signUp;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
