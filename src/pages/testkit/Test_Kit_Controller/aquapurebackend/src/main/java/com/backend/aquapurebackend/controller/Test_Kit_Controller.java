package com.backend.aquapurebackend.controller;

import com.backend.aquapurebackend.exception.TestKitNotFoundException;
import com.backend.aquapurebackend.model.TestKit;
import com.backend.aquapurebackend.repository.TestKitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
public class Test_Kit_Controller {
    @Autowired
    private TestKitRepository testKitRepository;

    @PostMapping("/Test_Kit")
    TestKit newTestKit(@RequestBody TestKit newTestKit){
        return testKitRepository.save(newTestKit);
    }
    @GetMapping("/Test_Kit_log")
    List<TestKit> getAllTestKits(){
        return testKitRepository.findAll();
    }
    @GetMapping("/Test_Kit/{id}")
    TestKit getTestKitById(@PathVariable Long id){
        return testKitRepository.findById(id)
                .orElseThrow(()-> new TestKitNotFoundException(id));
    }
    @PutMapping("/Test_Kit/{id}")
    TestKit updateTestKit(@RequestBody TestKit newTestKit,@PathVariable Long id){
        return testKitRepository.findById(id)
                .map(testKit -> {
                    testKit.setTest_Kit_Name(newTestKit.getTest_Kit_Name());
                    testKit.setTest_Kit_Price(newTestKit.getTest_Kit_Price());
                    testKit.setTest_Kit_Stock_Count(newTestKit.getTest_Kit_Stock_Count());
                    return testKitRepository.save(testKit);
                }).orElseThrow(()-> new TestKitNotFoundException(id));
    }
}
