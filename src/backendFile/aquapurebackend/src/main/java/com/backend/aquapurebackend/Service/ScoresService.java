package com.backend.aquapurebackend.Service;
import com.backend.aquapurebackend.model.Scores;
import java.util.List;
public interface ScoresService {
    public Scores findByEmail(String email);
    public Scores saveScore(Scores score);
    List<Scores> getAllScores();
}
