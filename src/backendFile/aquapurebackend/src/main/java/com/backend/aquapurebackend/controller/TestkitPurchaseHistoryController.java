package com.backend.aquapurebackend.controller;

import com.backend.aquapurebackend.model.TestkitPurchaseHistory;
import com.backend.aquapurebackend.repository.TestkitPurchaseHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

}
