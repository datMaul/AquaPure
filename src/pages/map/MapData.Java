package com.backend.aquapurebackend.controller;

import com.backend.aquapurebackend.exception.MapRecordNotFoundException;
import com.backend.aquapurebackend.model.MapRecord;
import com.backend.aquapurebackend.model.OpenWIMSRecord;
import com.backend.aquapurebackend.repository.MapRecordRepository;
import com.backend.aquapurebackend.repository.OpenWIMSRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
//import org.springframework.http.ResponseEntity;
//import org.springframework.http.HttpStatus;

import java.util.List;
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

    @GetMapping("/maprecords/{id}")
    public MapRecord getMapRecordById(@PathVariable Long id) {
        return mapRecordRepository.findById(id)
                .orElseThrow(() -> new MapRecordNotFoundException(id));
    }

    @GetMapping("/maprecordsbyparams")
    public List<MapRecord> getMapRecordsByParams(@Param(value = "sourceTypes") String sourceTypes,
                                                 @Param(value = "waterBodyTypes") String waterBodyTypes,
                                                 @Param(value = "parameterName") String parameterName) {
        
        List<String> sourceTypesList = Arrays.asList(sourceTypes.split(","));
        List<String> waterBodyTypesList =  Arrays.asList(waterBodyTypes.split(","));
        
        return mapRecordRepository.findBySelectedParams(sourceTypesList, waterBodyTypesList, parameterName);
    }