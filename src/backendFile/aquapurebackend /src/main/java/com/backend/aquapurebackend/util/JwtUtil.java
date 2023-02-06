package com.backend.aquapurebackend.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Jwts;

public class JwtUtil {
    private final String secret = "secret";
    private static List<String> blacklist =new ArrayList<>();
    public String generateToken(Long userId) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + 864000000); // 10 days

        return Jwts.builder()
                .setSubject(Long.toString(userId))
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }
    public void invalidationToken(String token){
        blacklist.add(token);
    }

}
