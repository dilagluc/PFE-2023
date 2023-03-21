package com.pfe.pfebackend.api.service;

import com.pfe.pfebackend.api.dto.StudentInfoDTO;
import com.pfe.pfebackend.api.entity.StudentInfo;
import com.pfe.pfebackend.api.helper.CsvUtils;
import com.pfe.pfebackend.api.mapper.StudentInfoMapper;
import com.pfe.pfebackend.api.repository.StudentInfoRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class StudentInfoService {
    private StudentInfoRepository studentInfoRepository;
    private StudentInfoMapper studentInfoMapper;
    @Autowired
    public StudentInfoService(
            StudentInfoRepository studentInfoRepository,
            StudentInfoMapper studentInfoMapper) {
        this.studentInfoRepository = studentInfoRepository;
        this.studentInfoMapper = studentInfoMapper;
    }
    @Transactional
    public void saveStudentInfo(MultipartFile file, String promotion) {
        try {
            List<StudentInfoDTO> studentInfos = CsvUtils.csvToStudentInfo(file.getInputStream(), promotion);
            //System.out.println(studentInfos);
            studentInfoRepository.saveAll(studentInfos.stream().map(studentInfoMapper::map).toList());
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }

    public List<StudentInfoDTO> getAllStudentInfo() {
        return studentInfoRepository.findAll().stream().map(studentInfoMapper::map).toList();
    }

    public List<String> getAllPromotions() {
        return studentInfoRepository.getPromotionList();
    }

    public List<StudentInfoDTO> getByPromotions(String promotion) {
        return studentInfoRepository.getAllByPromotion(promotion).stream().map(studentInfoMapper::map).toList();
    }

    @Transactional
    public List<StudentInfoDTO> deleteByPromo(String promotion) {
        return studentInfoRepository.deleteAllByPromotion(promotion).stream().map(studentInfoMapper::map).toList();
    }

    @Transactional
    public StudentInfoDTO updateStudent(StudentInfoDTO dto)
    {
        StudentInfo t = studentInfoMapper.map(dto);
        this.studentInfoRepository.save( t );
        return dto;
    }

    @Transactional
    public void deleteStudentByNumber(Long studentNum)
    {
        this.studentInfoRepository.deleteById(studentNum);
    }

    public StudentInfoDTO getStudentByNumber(Long studentNum)
    {
        return this.studentInfoRepository.findById(studentNum).map(studentInfoMapper::map).orElseThrow( ()-> new EntityNotFoundException("Team with id = " + studentNum + " not found") );
    }

}
