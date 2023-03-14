package com.backend.aquapurebackend.model;
import jakarta.persistence.*;

@Entity
@Table(name = "haider")
public class TestKitEntry {
    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private String uniqueId;
    private String PH;
    private String Longitude;
    private String Latitude;
    private String TotalAlkalinity;
    private String TotalHardness;
    private String Nitrite;
    private String Lead;
    private String Manganese;
    private String ColiformBacteria;

    public String getUniqueId() {
        return uniqueId;
    }

    public void setUniqueId(String uniqueId) {
        this.uniqueId = uniqueId;
    }

    public String getpH() {
        return PH;
    }

    public void setPH(String pH) {
        PH = pH;
    }

    public String getLongitude() {
        return Longitude;
    }

    public void setLongitude(String longitude) {
        Longitude = longitude;
    }

    public String getLatitude() {
        return Latitude;
    }

    public void setLatitude(String latitude) {
            Latitude = latitude;
    }

    public String getTotalAlkalinity() {
        return TotalAlkalinity;
    }

    public void setTotalAlkalinity(String totalAlkalinity) {
        TotalAlkalinity = totalAlkalinity;
    }

    // public String getTotalHardenss() {
    //     return Total_Hardness;
    // }

    // public void setTotalHardness(String totalHardness) {
    //     TotalHardness = totalHardness;
    // }

    public String getNitrite() {
        return Nitrite;
    }

    public void setNitrite(String nitrite) {
        Nitrite = nitrite;
    }

    public String getLead() {
        return Lead;
    }

    public void setLead(String lead) {
        Lead = lead;
    }

    public String getManganese() {
        return Manganese;
    }

    public void setManganese(String manganese) {
        Manganese = manganese;
    }

    public String getColiformBacteria() {
        return ColiformBacteria;
    }

    public void setColiformBacteria(String coliformBacteria) {
        ColiformBacteria = coliformBacteria;
    }

    public String getTotalHardness() {
        return TotalHardness;
    }

    public void setTotalHardness(String totalHardness) {
        TotalHardness = totalHardness;
    }

   

    
}
