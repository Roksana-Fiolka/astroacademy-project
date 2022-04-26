package com.example.astroacademyproject.repository;

import com.example.astroacademyproject.model.EntityOfUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<EntityOfUser, Long> {

    EntityOfUser findByEmail(String email);

}
