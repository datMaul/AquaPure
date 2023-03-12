package com.backend.aquapurebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;

import com.backend.aquapurebackend.util.JwtUtil;

@SpringBootApplication
public class AquapurebackendApplication {
	@Bean
	public JwtUtil jwtUtil() {
		return new JwtUtil();
	}

	public static void main(String[] args) {
		SpringApplication.run(AquapurebackendApplication.class, args);
	}

}