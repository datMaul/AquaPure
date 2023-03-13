package com.backend.aquapurebackend.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
public class TestkitPurchaseHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private boolean usestatus = false;
    // private String pH = "";
    // private String longitude = "";
    // private String latitude = "";
    // private String totalAlkalinity = "";
    // private String totalHardness = "";
    // private String nitrite = "";
    // private String lead = "";
    // private String manganese = "";
    // private String coliformBacteria = "";

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

    
    public boolean getUsestatus() {
        return this.usestatus;
    }

    // public String getPH() {
    //     return this.pH;
    // }

    // public String getLongitude() {
    //     return this.longitude;
    // }

    // public String getLatitude() {
    //     return this.latitude;
    // }

    // public void setPH(String pH) {
    //     this.pH = pH;
    // }

    // public String getTotalAlkalinity() {
    //     return this.totalAlkalinity;
    // }

    // public void setTotalAlkalinity(String totalAlkalinity) {
    //     this.totalAlkalinity = totalAlkalinity;
    // }

    // public String getTotalHardness() {
    //     return this.totalHardness;
    // }

    // public void setTotalHardness(String totalHardness) {
    //     this.totalHardness = totalHardness;
    // }

    // public String getNitrite() {
    //     return this.nitrite;
    // }

    // public void setNitrite(String nitrite) {
    //     this.nitrite = nitrite;
    // }

    // public String getLead() {
    //     return this.lead;
    // }

    // public void setLead(String lead) {
    //     this.lead = lead;
    // }

    // public String getManganese() {
    //     return this.manganese;
    // }

    // public void setManganese(String manganese) {
    //     this.manganese = manganese;
    // }

    // public void setLongitude(String longitude) {
    //     this.longitude = longitude;
    // }

    // public void setLatitude(String latitude) {
    //     this.latitude = latitude;
    // }

    // public String getColiformBacteria() {
    //     return this.coliformBacteria;
    // }

    // public void setColiformBacteria(String coliformBacteria) {
    //     this.coliformBacteria = coliformBacteria;
    // }
    // public void setTestKit(TestKit testKit) {
    //     this.testKit = testKit;
    // }
}