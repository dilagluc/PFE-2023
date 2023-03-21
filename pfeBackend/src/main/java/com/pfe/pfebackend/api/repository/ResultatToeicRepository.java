package com.pfe.pfebackend.api.repository;

import com.pfe.pfebackend.api.entity.ResultatToeic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultatToeicRepository extends JpaRepository<ResultatToeic, Long> {
}
