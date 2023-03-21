package com.pfe.pfebackend.api.repository;

import com.pfe.pfebackend.api.entity.StudentInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentInfoRepository extends JpaRepository<StudentInfo, Long> {
    @Query("SELECT DISTINCT stInfo.promotion FROM StudentInfo stInfo")
    List<String> getPromotionList();
    List<StudentInfo> deleteAllByPromotion(String promotion);
    List<StudentInfo> getAllByPromotion(String promotion);
}
