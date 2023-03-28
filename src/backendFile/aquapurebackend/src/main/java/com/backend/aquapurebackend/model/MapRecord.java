package com.backend.aquapurebackend.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class MapRecord {

    @Id
    @GeneratedValue
    private Long MapRecord_ID;
    private Date RecordedDateTime;
    private Double Latitude;
    private Double Longitude;
    private String WaterBodyType;
    private String ParameterName;
    private Float ParameterValue;
    private String ParameterUnit;
    private String SourceType;
    private String PH;
    private String TotalAlkalinity;
    private String TotalHardness;
    private String Nitrite;
    private String Lead;
    private String Manganese;
    private String ColiformBacteria;

    @OneToOne
    @JoinColumn(name = "openwimsrecord_id")
    private OpenWIMSRecord OpenWIMSRecord;

    @OneToOne
    @JoinColumn(name = "id")
    private TestkitPurchaseHistory TestkitPurchase;


    public Long getMapRecord_ID() {
        return MapRecord_ID;
    }

    public void setMapRecord_ID(Long mapRecord_ID) {
        this.MapRecord_ID = mapRecord_ID;
    }

    public Date getRecordedDateTime() {
        return RecordedDateTime;
    }

    public void setRecordedDateTime(Date recordedDateTime) {
        this.RecordedDateTime = recordedDateTime;
    }

    public Double getLatitude() {
        return Latitude;
    }

    public void setLatitude(Double latitude) {
        this.Latitude = latitude;
    }

    public Double getLongitude() {
        return Longitude;
    }

    public void setLongitude(Double longitude) {
        this.Longitude = longitude;
    }

    public String getWaterBodyType() {
        return WaterBodyType;
    }

    public void setWaterBodyType(String waterBodyType) {
        this.WaterBodyType = waterBodyType;
    }

    public String getParameterName() {
        return ParameterName;
    }

    public void setParameterName(String parameterName) {
        this.ParameterName = parameterName;
    }

    public Float getParameterValue() {
        return ParameterValue;
    }

    public void setParameterValue(Float parameterValue) {
        this.ParameterValue = parameterValue;
    }

    public String getParameterUnit() {
        return ParameterUnit;
    }

    public void setParameterUnit(String parameterUnit) {
        this.ParameterUnit = parameterUnit;
    }

    public String getSourceType() {
        return SourceType;
    }

    public void setSourceType(String sourceType) {
        this.SourceType = sourceType;
    }

    public TestkitPurchaseHistory getTestkitPurchase() {
        return TestkitPurchase;
    }

    public void setTestkitPurchase(TestkitPurchaseHistory testkitPurchase) {
        this.TestkitPurchase = testkitPurchase;
    }

    public OpenWIMSRecord getOpenWIMSRecord() {
        return OpenWIMSRecord;
    }

    public void setOpenWIMSRecord(OpenWIMSRecord openWIMSRecord) {
        this.OpenWIMSRecord = openWIMSRecord;
    }

    public String getTotalAlkalinity() {
        return TotalAlkalinity;
    }

    public void setTotalAlkalinity(String totalAlkalinity) {
        TotalAlkalinity = totalAlkalinity;
    }

    

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

    public String getpH() {
            return PH;
    }
    
    public void setPH(String pH) {
            PH = pH;
        }
}
