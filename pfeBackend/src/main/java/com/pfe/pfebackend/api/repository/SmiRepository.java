package com.pfe.pfebackend.api.repository;

import com.pfe.pfebackend.api.entity.Smi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SmiRepository extends JpaRepository<Smi, Long> {
}
