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
}
