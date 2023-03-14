package com.backend.aquapurebackend.controller;
import com.backend.aquapurebackend.service.TestKitService;
import com.backend.aquapurebackend.model.TestKitEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/testkitid")
public class TestKitEntry_Controller {
    @Autowired
    private TestKitService testKitService;
    @CrossOrigin
    @PostMapping("/addTestKitID")
    public String addTestId(@RequestBody TestKitEntry Unique_ID){
        TestKitEntry existingTestId = testKitService.findByEmail(Unique_ID.getEmail());
        if (existingTestId == null) {
            testKitService.saveUniqueId(Unique_ID);
        } else {
            existingTestId.setTestKitID(existingTestId.getTestKitID() + Unique_ID.getTestKitID());
            testKitService.saveUniqueId(existingTestId);
        }
        return "Kit Id Saved";
    }
    @CrossOrigin
    @GetMapping("/getAll")
    public List<TestKitEntry> getAllUniqueId(){
        return testKitService.getAllKitId();
    }
}
