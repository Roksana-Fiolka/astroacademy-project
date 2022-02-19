package com.example.astroacademyproject.service;

import com.example.astroacademyproject.model.User;
import com.example.astroacademyproject.web.dto.UserRegistrationDto;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    User save(UserRegistrationDto registrationDto);


}
