package com.bezkoder.springjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.bezkoder.springjwt.models.Membre;

@Repository
public  interface MembreRepository extends JpaRepository<Membre, Long>{

}