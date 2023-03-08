package com.backend.aquapurebackend.controller;

import com.backend.aquapurebackend.model.SignUp;
import com.backend.aquapurebackend.model.TestKit;
import com.backend.aquapurebackend.model.TestkitCartItem;
import com.backend.aquapurebackend.model.TestkitPurchaseHistory;
import com.backend.aquapurebackend.repository.TestkitCartItemRepository;
import com.backend.aquapurebackend.repository.TestkitPurchaseHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestkitPurchaseHistoryService {
    @Autowired
    private TestkitCartItemRepository testkitCartItemRepository;

    @Autowired
    private TestkitPurchaseHistoryRepository testkitPurchaseHistoryRepository;

    public void createHistory(Long userId) {
        List<TestkitCartItem> testkitCartItems = testkitCartItemRepository.findBySignUpUserId(userId);
        for (TestkitCartItem item : testkitCartItems) {
            SignUp user = item.getSignUp();
            TestKit testKit = item.getTestKit();
            int quantity = item.getQuantity();
            for (int i = 0; i < quantity; i++) {
                TestkitPurchaseHistory history = new TestkitPurchaseHistory(user, testKit);
                testkitPurchaseHistoryRepository.save(history);
            }
        }
    }
}
