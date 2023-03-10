package com.backend.aquapurebackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class OpenWIMSRecord {
    @Id
    private String OpenWIMSRecord_ID;
    private String SamplingPoint;
    private String SamplingPointNotation;
    private String SamplingPointLabel;
    private String SamplingPurposeLabel;
    private Boolean IsComplianceSample;


    public String getOpenWIMSRecord_ID() {
        return OpenWIMSRecord_ID;
    }

    public void setOpenWIMSRecord_ID(String openWIMSRecord_ID) {
        this.OpenWIMSRecord_ID = openWIMSRecord_ID;
    }

    public String getSamplingPoint() {
        return SamplingPoint;
    }

    public void setSamplingPoint(String samplingPoint) {
        this.SamplingPoint = samplingPoint;
    }

    public String getSamplingPointNotation() {
        return SamplingPointNotation;
    }

    public void setSamplingPointNotation(String samplingPointNotation) {
        this.SamplingPointNotation = samplingPointNotation;
    }

    public String getSamplingPointLabel() {
        return SamplingPointLabel;
    }

    public void setSamplingPointLabel(String samplingPointLabel) {
        this.SamplingPointLabel = samplingPointLabel;
    }

    public String getSamplingPurposeLabel() {
        return SamplingPurposeLabel;
    }

    public void setSamplingPurposeLabel(String samplingPurposeLabel) {
        this.SamplingPurposeLabel = samplingPurposeLabel;
    }

    public Boolean getIsComplianceSample() {
        return IsComplianceSample;
    }

    public void setIsComplianceSample(Boolean isComplianceSample) {
        this.IsComplianceSample = isComplianceSample;
    }
}
