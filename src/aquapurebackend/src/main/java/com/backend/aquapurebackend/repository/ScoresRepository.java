package com.backend.aquapurebackend.repository;

import com.backend.aquapurebackend.model.Scores;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoresRepository extends JpaRepository<Scores, Integer>{
    public Scores findByEmail(String username);
}
