package com.backend.aquapurebackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class TestKit {
    @Id
    @GeneratedValue
    private Long Test_Kit_ID;
    private String Test_Kit_Name;
    private Integer Test_Kit_Price;
    private Integer Test_Kit_Stock_Count;

    public Long getTest_Kit_ID() {
        return Test_Kit_ID;
    }

    public void setTest_Kit_ID(Long test_Kit_ID) {
        Test_Kit_ID = test_Kit_ID;
    }

    public String getTest_Kit_Name() {
        return Test_Kit_Name;
    }

    public void setTest_Kit_Name(String test_Kit_Name) {
        Test_Kit_Name = test_Kit_Name;
    }

    public Integer getTest_Kit_Price() {
        return Test_Kit_Price;
    }

    public void setTest_Kit_Price(Integer test_Kit_Price) {
        Test_Kit_Price = test_Kit_Price;
    }

    public Integer getTest_Kit_Stock_Count() {
        return Test_Kit_Stock_Count;
    }

    public void setTest_Kit_Stock_Count(Integer test_Kit_Stock_Count) {
        Test_Kit_Stock_Count = test_Kit_Stock_Count;
    }
}
