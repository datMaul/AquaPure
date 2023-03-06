package com.backend.aquapurebackend.controller;

import com.backend.aquapurebackend.exception.MapRecordNotFoundException;
import com.backend.aquapurebackend.model.MapRecord;
import com.backend.aquapurebackend.model.OpenWIMSRecord;
import com.backend.aquapurebackend.repository.MapRecordRepository;
import com.backend.aquapurebackend.repository.OpenWIMSRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Collections;
import java.util.Arrays;
import java.util.List;
import org.springframework.data.repository.query.Param;


//import org.springframework.http.ResponseEntity;
//import org.springframework.http.HttpStatus;


@RestController
@CrossOrigin("http://localhost:3000")
public class MapRecord_Controller {
    @Autowired
    private MapRecordRepository mapRecordRepository;

    @Autowired
    private OpenWIMSRecordRepository openWIMSRecordRepository;

    // Get all map records
    @GetMapping("/maprecords")
    public List<MapRecord> getAllMapRecords() {
        return mapRecordRepository.findAll();
    }

    // Get map record by id
    @GetMapping("/maprecords/{id}")
    public MapRecord getMapRecordById(@PathVariable Long id) {
        return mapRecordRepository.findById(id)
                .orElseThrow(() -> new MapRecordNotFoundException(id));
    }

    @GetMapping("/maprecordsbyparams")
    public List<MapRecord> getMapRecordsByParams(@Param(value = "sourceTypes") String sourceTypes,
                                                 @Param(value = "waterBodyTypes") String waterBodyTypes,
                                                 @Param(value = "parameterName") String parameterName) {
        
        List<String> sourceTypesList = sourceTypes.isEmpty() ? Collections.emptyList() : Arrays.asList(sourceTypes.split(","));
        List<String> waterBodyTypesList = waterBodyTypes.isEmpty() ? Collections.emptyList() : Arrays.asList(waterBodyTypes.split(","));

        if (sourceTypesList.isEmpty() && waterBodyTypesList.isEmpty()) {
            return Collections.emptyList();
        }
        
        return mapRecordRepository.findBySelectedParams(sourceTypesList, waterBodyTypesList, parameterName);
    }

    // Create a new map record
    @PostMapping("/maprecords")
    public MapRecord createMapRecord(@RequestBody MapRecord mapRecord) {
        return mapRecordRepository.save(mapRecord);
    }

    // Get map records by author id
    /*
    @GetMapping("/maprecords/author/{id}")
    public List<MapRecord> getMapRecordsByAuthor(@PathVariable Long id) {
        return mapRecordRepository.findByAuthorId(id);
    }
    */

    
    // Get map records by test kit uuid
    /*
    @GetMapping("/maprecords/testkit/{uuid}")
    public List<MapRecord> getMapRecordsByTestKitUUID(@PathVariable String uuid) {
        return mapRecordRepository.findByTestKitUUID(uuid);
    }
    */

    // Update a map record
    @PutMapping("/maprecords/{id}")
    public MapRecord updateMapRecord(@RequestBody MapRecord newMapRecord, @PathVariable Long id) {
        return mapRecordRepository.findById(id)
                .map(mapRecord -> {
                    mapRecord.setRecordedDateTime(newMapRecord.getRecordedDateTime());
                    mapRecord.setLatitude(newMapRecord.getLatitude());
                    mapRecord.setLongitude(newMapRecord.getLongitude());
                    mapRecord.setWaterBodyType(newMapRecord.getWaterBodyType());
                    mapRecord.setParameterName(newMapRecord.getParameterName());
                    mapRecord.setParameterValue(newMapRecord.getParameterValue());
                    mapRecord.setParameterUnit(newMapRecord.getParameterUnit());
                    mapRecord.setSourceType(newMapRecord.getSourceType());
                    mapRecord.setOpenWIMSRecord(newMapRecord.getOpenWIMSRecord());
                    mapRecord.setTestkitPurchase(newMapRecord.getTestkitPurchase());
                    return mapRecordRepository.save(mapRecord);
                })
                .orElseGet(() -> {
                    newMapRecord.setMapRecord_ID(id);
                    return mapRecordRepository.save(newMapRecord);
                });
    }

    // Get all openWIMS records
    @GetMapping("/openwimsrecords")
    public List<OpenWIMSRecord> getAllOpenWIMSRecords() {
        return openWIMSRecordRepository.findAll();
    }

    // Create a new openWIMS record with a manually assigned ID
    @PostMapping("/openwimsrecords")
    public OpenWIMSRecord createOpenWIMSRecord(@RequestBody OpenWIMSRecord openWIMSRecord) {
        return openWIMSRecordRepository.save(openWIMSRecord);
    }

    @PutMapping("/openwimsrecords/{id}")
    public OpenWIMSRecord updateOpenWIMSRecord(@RequestBody OpenWIMSRecord newOpenWIMSRecord, @PathVariable String id) {
        return openWIMSRecordRepository.findById(id)
                .map(openWIMSRecord -> {
                    openWIMSRecord.setSamplingPoint(newOpenWIMSRecord.getSamplingPoint());
                    openWIMSRecord.setSamplingPointNotation(newOpenWIMSRecord.getSamplingPointNotation());
                    openWIMSRecord.setSamplingPointLabel(newOpenWIMSRecord.getSamplingPointLabel());
                    openWIMSRecord.setSamplingPurposeLabel(newOpenWIMSRecord.getSamplingPurposeLabel());
                    openWIMSRecord.setIsComplianceSample(newOpenWIMSRecord.getIsComplianceSample());
                    //openWIMSRecord.setMapRecord(newOpenWIMSRecord.getMapRecord());
                    return openWIMSRecordRepository.save(openWIMSRecord);
                })
                .orElseGet(() -> {
                    newOpenWIMSRecord.setOpenWIMSRecord_ID(id);
                    return openWIMSRecordRepository.save(newOpenWIMSRecord);
                });
    }

    /* 
    // Update an openWIMS record with a manually assigned ID
    @PutMapping("/openwimsrecords/{id}")
    public OpenWIMSRecord updateOpenWIMSRecord(@RequestBody OpenWIMSRecord newOpenWIMSRecord, @PathVariable String id) {
        return openWIMSRecordRepository.findById(id)
                .map(openWIMSRecord -> {
                    openWIMSRecord.setOpenWIMSRecord_ID(id);
                    openWIMSRecord.setSamplingPoint(newOpenWIMSRecord.getSamplingPoint());
                    openWIMSRecord.setSamplingPointNotation(newOpenWIMSRecord.getSamplingPointNotation());
                    openWIMSRecord.setSamplingPointLabel(newOpenWIMSRecord.getSamplingPointLabel());
                    openWIMSRecord.setSamplingPurposeLabel(newOpenWIMSRecord.getSamplingPurposeLabel());
                    openWIMSRecord.setIsComplianceSample(newOpenWIMSRecord.getIsComplianceSample());
                    openWIMSRecord.setMapRecord(newOpenWIMSRecord.getMapRecord());
                    return openWIMSRecordRepository.save(openWIMSRecord);
                })
                .orElseGet(() -> {
                    newOpenWIMSRecord.setOpenWIMSRecord_ID(id);
                    return openWIMSRecordRepository.save(newOpenWIMSRecord);
                });
    }*/

    // Delete all map records
    @DeleteMapping("/maprecords")
    public void deleteAllMapRecords() {
        mapRecordRepository.deleteAll();
    }

    // Delete all openWIMS records
    @DeleteMapping("/openwimsrecords")
    public void deleteAllOpenWIMSRecords() {
        openWIMSRecordRepository.deleteAll();
    }
}
