package com.example.astroacademyproject.service;

import com.example.astroacademyproject.model.EntityOfUser;
import com.example.astroacademyproject.web.dto.UserRegistrationDataTransfer;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    EntityOfUser save(UserRegistrationDataTransfer registrationDto);


}
