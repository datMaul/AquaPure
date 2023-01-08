package com.backend.aquapurebackend.repository;

import com.backend.aquapurebackend.model.SignUp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SignUpRepository extends JpaRepository <SignUp, Long> {
}
