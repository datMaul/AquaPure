package com.backend.aquapurebackend.controller;

import com.backend.aquapurebackend.model.TestkitPurchaseHistory;
import com.backend.aquapurebackend.repository.TestkitPurchaseHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin("http://localhost:3000")
public class TestkitPurchaseHistoryController {
    @Autowired
    private TestkitPurchaseHistoryService testkitPurchaseHistoryService;
    @Autowired
    private TestkitPurchaseHistoryRepository testkitPurchaseHistoryRepository;

    @PostMapping("/testkit/purchase-history/{userId}")
    public void createHistory(@PathVariable Long userId) {
        testkitPurchaseHistoryService.createHistory(userId);
    }
    @GetMapping("/testkit/purchase-history/{userId}")
    public List<TestkitPurchaseHistory> getTestkitPurchaseHistoryByUserId(@PathVariable Long userId) {
        return testkitPurchaseHistoryRepository.findBySignUpUserId(userId);
    }
    @GetMapping("/testkit/purchase-history")
    public List<TestkitPurchaseHistory> getAllTestkitPurchaseHistory() {
        return testkitPurchaseHistoryRepository.findAll();
    }
    @PutMapping("/testkit/activate/{id}")
    public TestkitPurchaseHistory activateTestKit(@PathVariable UUID id, @RequestBody TestkitPurchaseHistory newTestkitPurchaseHistory) {
        Optional<TestkitPurchaseHistory> optionalTestKitPurchaseHistory = testkitPurchaseHistoryRepository.findById(id);
        if (optionalTestKitPurchaseHistory.isEmpty()) {
            return null;
        }

        TestkitPurchaseHistory testKitPurchaseHistory = optionalTestKitPurchaseHistory.get();

        if (testKitPurchaseHistory.getUsestatus()) {
            throw new RuntimeException("This test kit is already activated.");
        }

        testKitPurchaseHistory.setUsestatus(true);
        // testKitPurchaseHistory.setPH(newTestkitPurchaseHistory.getPH());
        // testKitPurchaseHistory.setLongitude(newTestkitPurchaseHistory.getLongitude());
        // testKitPurchaseHistory.setLatitude(newTestkitPurchaseHistory.getLatitude());
        // testKitPurchaseHistory.setTotalAlkalinity(newTestkitPurchaseHistory.getTotalAlkalinity());
        // testKitPurchaseHistory.setTotalHardness(newTestkitPurchaseHistory.getTotalHardness());
        // testKitPurchaseHistory.setNitrite(newTestkitPurchaseHistory.getNitrite());
        // testKitPurchaseHistory.setLead(newTestkitPurchaseHistory.getLead());
        // testKitPurchaseHistory.setManganese(newTestkitPurchaseHistory.getManganese());
        // testKitPurchaseHistory.setColiformBacteria(newTestkitPurchaseHistory.getColiformBacteria());
        
        return testkitPurchaseHistoryRepository.save(testKitPurchaseHistory);
    }
}
