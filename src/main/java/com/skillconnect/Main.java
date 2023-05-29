package com.skillconnect;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.skillconnect.model.User;
import com.skillconnect.repository.UserRepository;

@SpringBootApplication
public class Main {
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

	// @Bean
	// CommandLineRunner commandLineRunner(UserRepository users, PasswordEncoder encoder) {
	// 	return args -> {
	// 		users.save(new User("user",encoder.encode("pass"),"ROLE_USER"));
	// 		users.save(new User("admin",encoder.encode("pass"),"ROLE_USER,ROLE_ADMIN"));
	// 	};
	// }

}
