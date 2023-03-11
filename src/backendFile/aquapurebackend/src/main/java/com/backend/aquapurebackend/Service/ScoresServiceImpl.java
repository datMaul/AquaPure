package com.backend.aquapurebackend.service;
import com.backend.aquapurebackend.model.Scores;
import com.backend.aquapurebackend.repository.ScoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoresServiceImpl implements ScoresService {
    @Autowired
    private ScoresRepository scoresRepository;
    @Override
    public Scores findByEmail(String email) {
        return scoresRepository.findByEmail(email);
    }
    @Override
    public Scores saveScore(Scores score) {
        return scoresRepository.save(score);
    }
    @Override
    public List<Scores> getAllScores() {
        return scoresRepository.findAll();
    }
}
