package com.backend.aquapurebackend.repository;

import com.backend.aquapurebackend.model.TestKit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestKitRepository extends JpaRepository <TestKit, Long> {
}
