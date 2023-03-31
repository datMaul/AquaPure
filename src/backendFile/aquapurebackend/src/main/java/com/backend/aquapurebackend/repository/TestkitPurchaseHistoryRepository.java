package com.backend.aquapurebackend.repository;

import com.backend.aquapurebackend.model.TestkitPurchaseHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TestkitPurchaseHistoryRepository extends JpaRepository<TestkitPurchaseHistory, UUID> {
    List<TestkitPurchaseHistory> findBySignUpUserId(Long userId);
}
