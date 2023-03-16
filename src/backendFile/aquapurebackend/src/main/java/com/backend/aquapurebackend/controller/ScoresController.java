package com.backend.aquapurebackend.controller;
import com.backend.aquapurebackend.service.ScoresService;
import com.backend.aquapurebackend.model.Scores;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/scores")
public class ScoresController {
    @Autowired
    private ScoresService scoresService;
    @CrossOrigin
    @PostMapping("/addScore")
    public String addScore(@RequestBody Scores score){
        Scores existingScore = scoresService.findByEmail(score.getEmail());
        if (existingScore == null) {
            scoresService.saveScore(score);
        } else {
            existingScore.setScore(existingScore.getScore() + score.getScore());
            scoresService.saveScore(existingScore);
        }
        return "Score saved!";
    }
    @CrossOrigin
    @GetMapping("/getAll")
    public List<Scores> getAllScores(){
        return scoresService.getAllScores();
    }
}
