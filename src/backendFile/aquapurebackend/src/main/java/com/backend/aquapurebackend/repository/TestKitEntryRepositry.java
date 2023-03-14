package com.backend.aquapurebackend.repository;

import com.backend.aquapurebackend.model.TestKitEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestKitEntryRepositry extends JpaRepository<TestKitEntry, Integer>{
    public TestKitEntry findByEmail(String username);
}