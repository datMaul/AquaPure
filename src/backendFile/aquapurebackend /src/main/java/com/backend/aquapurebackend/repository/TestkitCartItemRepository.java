package com.backend.aquapurebackend.repository;

import com.backend.aquapurebackend.model.TestkitCartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TestkitCartItemRepository extends JpaRepository<TestkitCartItem, Integer> {
    List<TestkitCartItem> findBySignUpUserId(Long userId);
}
